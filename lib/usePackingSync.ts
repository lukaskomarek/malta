'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { ref, onValue, set, off } from 'firebase/database'
import { db } from './firebase'
import { PackingItem } from '@/types'
import { defaultPackingItems } from '@/data/packingData'

const DB_PATH = 'packing/v1'
const STORAGE_KEY = 'malta-packing-v1'

export function usePackingSync() {
  const [items, setItems] = useState<PackingItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [synced, setSynced] = useState(false)
  const ignoreNextRef = useRef(false)

  useEffect(() => {
    const dbRef = ref(db, DB_PATH)

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (ignoreNextRef.current) {
        ignoreNextRef.current = false
        return
      }
      const data = snapshot.val()
      if (data) {
        setItems(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } else {
        // první spuštění — nahraj výchozí data
        const saved = localStorage.getItem(STORAGE_KEY)
        const initial = saved ? JSON.parse(saved) : defaultPackingItems
        set(dbRef, initial)
        setItems(initial)
      }
      setLoaded(true)
      setSynced(true)
    }, (error) => {
      // Firebase nedostupný — fallback na localStorage
      console.warn('Firebase sync failed, using localStorage', error)
      const saved = localStorage.getItem(STORAGE_KEY)
      setItems(saved ? JSON.parse(saved) : defaultPackingItems)
      setLoaded(true)
    })

    return () => off(dbRef, 'value', unsubscribe)
  }, [])

  const save = useCallback((newItems: PackingItem[]) => {
    setItems(newItems)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
    const dbRef = ref(db, DB_PATH)
    set(dbRef, newItems).catch(console.error)
  }, [])

  return { items, loaded, synced, save }
}
