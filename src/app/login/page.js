'use client'
import { useState } from 'react'
import { auth, provider } from '../../lib/firebase'
import { signInWithPopup } from 'firebase/auth' 
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { XCircleIcon } from '@heroicons/react/20/solid'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [error, setError] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    //cek username dan pw(dummy)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (r){
      setError('Usernama or Password Wrong')//'Error Sign In : ' + r.message
    }
  }
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
      router.push('/')
    } catch (error) {
      console.error(error)
      alert('Login Gagal')
    }
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="bg-gradient-to-b from-[#404040] to-black flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <link rel="stylesheet" href="https://use.typekit.net/uoy0uni.css"/>
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-[#0d0d0d] px-6 py-12 shadow sm:rounded-[30px] sm:px-12">
            <form action="#" onSubmit={handleLogin} className="space-y-6">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mx-auto flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full align-middle" >
                  <img
                    alt="Your Company"
                    src="./zenlogo.svg"
                    className="h-[35px] w-auto"
                  />
                </div>
                <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white inter-variable">
                  Sign in to your account
                </h2>
              </div>
              {/* ALERT */}
              {error && (
                <div className="rounded-md bg-red-900/100 p-4">
                  <div className="flex">
                    <div className="shrink-0">
                      <XCircleIcon aria-hidden="true" className="size-5 text-red-200" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-200 kumbh-sans-variable">{error}</h3>
                      
                    </div>
                  </div>
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white kumbh-sans-variable">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-full bg-[#0d0d0d] px-3 py-1.5 text-base text-white outline outline-2 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-3 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 kumbh-sans-variable"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-white kumbh-sans-variable">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-full bg-[#0d0d0d] px-3 py-1.5 text-base text-white outline outline-2 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-3 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 kumbh-sans-variable"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="col-start-1 row-start-1 appearance-none rounded border border-white bg-[#0d0d0d] checked:border-white checked:bg-black indeterminate:border-white indeterminate:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:checked]:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:indeterminate]:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="remember-me" className="block text-sm/6 text-white kumbh-sans-variable">
                    Remember me
                  </label>
                </div>

                <div className="text-sm/6">
                  <a href="#" className="font-semibold text-white  kumbh-sans-variable">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full ring ring-white justify-center rounded-full bg-black px-3 py-1.5 text-sm/6 font-semibold text-white  hover:ring-2 kumbh-sans-variable"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-500" />
                </div>
                <div className="relative flex justify-center text-sm/6 font-medium">
                  <span className="bg-[#0d0d0d] px-6 text-white kumbh-sans-variable">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  onClick={handleGoogleLogin}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0d0d0d] px-3 py-2 text-sm font-semibold text-black  ring-1 hover:ring-2 ring-inset ring-white focus-visible:ring-transparent"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm/6 font-semibold text-white kumbh-sans-variable">Google</span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0d0d0d] px-3 py-2 text-sm font-semibold text-white ring-1 hover:ring-2 ring-inset ring-white  focus-visible:ring-transparent"
                >
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-[#ffffff]">
                    <path
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm/6 font-semibold kumbh-sans-variable">GitHub</span>
                </a>
              </div>
            </div>
            <p className="mt-10 text-center text-gray-100 kumbh-sans-variable">
              No have an account?{' '}
              <a href="/register" className="font-semibold text-gray-100 hover:text-white kumbh-sans-variable">
                Register now
              </a>
            </p>
          </div>

          
        </div>
      </div>
    </>
  )
}
