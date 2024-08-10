import Auth from '../components/Auth'

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        <Auth />
      </div>
    </div>
  )
}