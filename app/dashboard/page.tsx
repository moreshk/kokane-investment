'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        setName(user.user_metadata.name || '')
        setPhone(user.user_metadata.phone || '')
      } else {
        router.push('/login')
      }
    }
    getUser()
  }, [router])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.updateUser({
      data: { name, phone }
    })

    if (error) {
      setMessage({ text: error.message, type: 'error' })
    } else if (data) {
      setUser(data.user)
      setMessage({ text: 'Profile updated successfully', type: 'success' })
    }
    setLoading(false)
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dashboard</h1> */}
        <h1 className="mb-4 text-xl text-center text-gray-700">Welcome, {user.email}</h1>
        
        <form onSubmit={handleUpdateProfile} className="flex flex-col space-y-4">
          {/* <h2 className="text-xl font-semibold mb-2 text-gray-800">Update Profile</h2> */}
          {message && (
            <div className={`mb-4 px-4 py-3 rounded relative ${
              message.type === 'error' ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'
            }`} role="alert">
              <span className="block sm:inline">{message.text}</span>
            </div>
          )}
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <button 
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  )
}