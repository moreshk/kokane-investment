'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSignUp = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) alert(error.message)
      else alert('Check your email for the login link!')
      setLoading(false)
    }
  
    const handleSignIn = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) alert(error.message)
      setLoading(false)
    }
  
    return (
      <div className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSignUp} 
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50" 
          disabled={loading}
        >
          Sign Up
        </button>
        <button 
          onClick={handleSignIn} 
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50" 
          disabled={loading}
        >
          Sign In
        </button>
      </div>
    )
  }