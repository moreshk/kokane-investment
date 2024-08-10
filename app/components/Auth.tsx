'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const confirmationToken = searchParams.get('confirmation_token')
    if (confirmationToken) {
      setIsConfirmed(true)
      router.push('/dashboard')
    }
  }, [searchParams, router])

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else router.push('/dashboard')
    setLoading(false)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else alert('Check your email for the login link!')
    setLoading(false)
  }

  return (
    <div className="flex flex-col space-y-4">
      {isConfirmed && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Thank you for confirming your email!</strong>
          <span className="block sm:inline"> You may now sign in to continue.</span>
        </div>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />
      <button 
        onClick={handleSignIn} 
        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50" 
        disabled={loading}
      >
        Sign In
      </button>
      {!isConfirmed && (
        <button 
          onClick={handleSignUp} 
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50" 
          disabled={loading}
        >
          Sign Up
        </button>
      )}
    </div>
  )
}