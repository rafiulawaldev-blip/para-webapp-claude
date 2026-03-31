import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { ParagonLogo } from '../../components/auth/ParagonLogo'

// Illustration — designer working (right panel)
const imgIllustration = 'https://www.figma.com/api/mcp/asset/0600fe06-0992-4f54-b72c-966f3a881809'

export function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/auth/login-success')
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* ── Left: Form ── */}
      <div className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="flex flex-col items-center gap-8 w-full max-w-[402px]">
          <ParagonLogo size="md" />

          {/* Card */}
          <div className="w-full bg-white border border-[rgba(0,0,0,0.05)] rounded-[12px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Title */}
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-semibold text-[#242529] leading-8">Sign in</h1>
                <p className="text-sm text-[rgba(0,0,0,0.64)] text-center leading-5">
                  Welcome back. Enter your details to continue.
                </p>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#242529] leading-5">Email</label>
                  <input
                    type="email"
                    placeholder="m@paragon.com.bd"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-9 border border-[#e5e5e5] rounded-[6px] px-3 bg-white text-base text-[rgba(0,0,0,0.64)] w-full focus:outline-none focus:border-[#2783de] transition-colors placeholder:text-[rgba(0,0,0,0.4)]"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#242529] leading-5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-9 border border-[#e5e5e5] rounded-[6px] px-3 pr-10 bg-white text-base text-[rgba(0,0,0,0.64)] w-full focus:outline-none focus:border-[#2783de] transition-colors placeholder:text-[rgba(0,0,0,0.4)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]"
                    >
                      {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-center gap-5">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-[#2783de] leading-5 hover:underline"
                >
                  Forgot password?
                </Link>
                <button
                  type="submit"
                  className="w-full h-9 bg-[#2783de] text-white rounded-[6px] text-sm font-medium leading-5 hover:bg-[#1e6ec5] transition-colors"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="text-[12px] text-[rgba(0,0,0,0.64)] text-center leading-4 max-w-[338px]">
            By clicking sign in, you agree to our{' '}
            <a href="#" className="underline hover:text-[rgba(0,0,0,0.8)]">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="underline hover:text-[rgba(0,0,0,0.8)]">Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* ── Right: Illustration ── */}
      <div className="flex-1 bg-[#eff8ff] flex items-center justify-center">
        <img
          src={imgIllustration}
          alt="Designer working illustration"
          className="w-[540px] h-[540px] object-contain"
        />
      </div>
    </div>
  )
}
