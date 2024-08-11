'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function PerformancePage() {
  const [user, setUser] = useState<any>(null)
  const [picks, setPicks] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        fetchPicks(user.id)
      } else {
        router.push('/login')
      }
    }
    getUser()
  }, [router])

  const fetchPicks = async (userId: string) => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayString = yesterday.toISOString().split('T')[0]

    const { data, error } = await supabase
      .from('stock_picks')
      .select('*')
      .eq('user_id', userId)
      .eq('pick_date', yesterdayString)

    if (data) setPicks(data)
  }

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>Yesterday&apos;s Stock Performance</h1>
      <ul>
        {picks.map(pick => (
          <li key={pick.id}>
            {pick.stock_symbol}: {pick.performance_percentage}%
          </li>
        ))}
      </ul>
    </div>
  )
}