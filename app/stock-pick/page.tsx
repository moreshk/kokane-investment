'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import StockPicker from '../components/StockPicker'

export default function StockPickPage() {
  const [user, setUser] = useState<any>(null)
  const [todaysPicks, setTodaysPicks] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        fetchTodaysPicks(user.id)
      } else {
        router.push('/login')
      }
    }
    getUser()
  }, [router])

  const fetchTodaysPicks = async (userId: string) => {
    const today = new Date().toISOString().split('T')[0]
    const { data, error } = await supabase
      .from('stock_picks')
      .select('stock_symbol')
      .eq('user_id', userId)
      .eq('pick_date', today)

    if (error) {
      console.error('Error fetching today\'s picks:', error)
    } else {
      setTodaysPicks(data || [])
    }
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Stock Pick for Today</h1>
        <StockPicker existingPicks={todaysPicks.map(pick => pick.stock_symbol)} />
      </div>
    </div>
  )
}