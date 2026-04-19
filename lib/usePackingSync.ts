'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { ref, onValue, set } from 'firebase/database'
import { db } from './firebase'
import { PackingItem } from '@/types'
import { defaultPackingItems } from '@/data/packingData'

const DB_PATH = 'packing/v2'
const STORAGE_KEY = 'malta-packing-v2'

export function usePackingSync() {
  const [items, setItems] = useState<PackingItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [synced, setSynced] = useState(false)
  const skipNextRef = useRef(false)

  useEffect(() => {
    const dbRef = ref(db, DB_PATH)

    const unsubscribe = onValue(dbRef, (snapshot) => {
      // přeskočit echo po vlastním save()
      if (skipNextRef.current) {
        skipNextRef.current = false
        return
      }
      const data = snapshot.val()
      if (data) {
        setItems(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } else {
        const saved = localStorage.getItem(STORAGE_KEY)
        const initial = saved ? JSON.parse(saved) : defaultPackingItems
        set(dbRef, initial)
        setItems(initial)
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
    setItems(newItems)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
    // označit že příští Firebase callback je naše vlastní echo — ignorovat
    skipNextRef.current = true
    const dbRef = ref(db, DB_PATH)
    set(dbRef, newItems).catch((err) => {
      console.error(err)
      skipNextRef.current = false
    })
  }, [])

  return { items, loaded, synced, save }
}
