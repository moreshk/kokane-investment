'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function ResetPassword() {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null)

  const router = useRouter()

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage({ text: "Passwords don't match", type: 'error' })
      return
    }
    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setMessage({ text: error.message, type: 'error' })
    } else {
      setMessage({ text: 'Password updated successfully', type: 'success' })
      setTimeout(() => router.push('/login'), 2000) // Redirect after 2 seconds
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Reset Password</h1>
        {message && (
          <div className={`mb-4 px-4 py-3 rounded relative ${
            message.type === 'error' ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'
          }`} role="alert">
            <span className="block sm:inline">{message.text}</span>
          </div>
        )}
        <form onSubmit={handleResetPassword} className="flex flex-col space-y-4">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
          <button 
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  )
}