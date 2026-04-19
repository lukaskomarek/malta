'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { ref, onValue, set } from 'firebase/database'
import { db } from './firebase'
import { PackingItem } from '@/types'
import { defaultPackingItems } from '@/data/packingData'

const DB_PATH = 'packing/v2'
const STORAGE_KEY = 'malta-packing-v2'
const DB_REST_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL!

export function usePackingSync() {
  const [items, setItems] = useState<PackingItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [synced, setSynced] = useState(false)
  const lastSavedRef = useRef<PackingItem[]>([])

  useEffect(() => {
    const dbRef = ref(db, DB_PATH)

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const rawData = snapshot.val()

      if (!rawData) {
        const saved = localStorage.getItem(STORAGE_KEY)
        const initial: PackingItem[] = saved ? JSON.parse(saved) : defaultPackingItems
        lastSavedRef.current = initial
        // Use REST for initial seed write too
        fetch(`${DB_REST_URL}/${DB_PATH}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(initial),
        }).catch(console.error)
        setItems(initial)
        setLoaded(true)
        setSynced(true)
        return
      }

      const data: PackingItem[] = Array.isArray(rawData) ? rawData : Object.values(rawData)

      // Detect own echo: same count, same IDs, same checked states
      const last = lastSavedRef.current
      const isEcho =
        last.length > 0 &&
        data.length === last.length &&
        data.every((item, i) => item.id === last[i]?.id && item.checked === last[i]?.checked)

      if (!isEcho) {
        setItems(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      }

      setLoaded(true)
      setSynced(true)
    }, (error) => {
      console.warn('Firebase sync failed, using localStorage', error)
      const saved = localStorage.getItem(STORAGE_KEY)
      setItems(saved ? JSON.parse(saved) : defaultPackingItems)
      setLoaded(true)
    })

    return () => unsubscribe()
  }, [])

  const save = useCallback((newItems: PackingItem[]) => {
    lastSavedRef.current = newItems
    setItems(newItems)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
    // Use REST API for writes — bypasses SDK WebSocket write issues
    fetch(`${DB_REST_URL}/${DB_PATH}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItems),
    }).catch(err => console.error('[sync] write failed:', err))
  }, [])

  return { items, loaded, synced, save }
}
