'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      } else {
        router.push('/login')
      }
    }
    getUser()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>
      <p className="mb-4">This is your personal dashboard.</p>
      <button 
        onClick={handleSignOut}
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Sign Out
      </button>
    </div>
  )
}