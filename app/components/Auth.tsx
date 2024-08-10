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
  const [isSignIn, setIsSignIn] = useState(true)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null)

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
    if (error) setMessage({ text: error.message, type: 'error' })
    else router.push('/dashboard')
    setLoading(false)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage({ text: error.message, type: 'error' })
    else setMessage({ text: 'Check your email for the login link!', type: 'success' })
    setLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) setMessage({ text: error.message, type: 'error' })
    else setMessage({ text: 'Check your email for the password reset link!', type: 'success' })
    setLoading(false)
  }
  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn)
    setIsForgotPassword(false)
  }

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword)
    setIsSignIn(true)
  }

  return (
    <div className="flex flex-col space-y-4">
      {isConfirmed && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Thank you for confirming your email!</strong>
          <span className="block sm:inline"> You may now sign in to continue.</span>
        </div>
      )}
      {message && (
        <div className={`px-4 py-3 rounded relative ${
          message.type === 'error' ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'
        }`} role="alert">
          <span className="block sm:inline">{message.text}</span>
        </div>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />
      {!isForgotPassword && (
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      )}
      {isForgotPassword ? (
        <button 
          onClick={handleForgotPassword} 
          className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50" 
          disabled={loading}
        >
          Reset Password
        </button>
      ) : isSignIn ? (
        <button 
          onClick={handleSignIn} 
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50" 
          disabled={loading}
        >
          Sign In
        </button>
      ) : (
        <button 
          onClick={handleSignUp} 
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50" 
          disabled={loading}
        >
          Sign Up
        </button>
      )}
      {!isForgotPassword && (
        <button 
          onClick={toggleAuthMode} 
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          {isSignIn ? "New user? Sign up" : "Existing user? Sign in"}
        </button>
      )}
      {isSignIn && !isForgotPassword && (
        <button 
          onClick={toggleForgotPassword} 
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          Forgot password?
        </button>
      )}
      {isForgotPassword && (
        <button 
          onClick={toggleForgotPassword} 
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          Back to Sign In
        </button>
      )}
    </div>
  )
}