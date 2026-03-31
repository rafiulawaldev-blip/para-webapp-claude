import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ParagonLogo } from '../../components/auth/ParagonLogo'

const imgIllustration = 'https://www.figma.com/api/mcp/asset/de3c6bc2-7ab0-42b5-9be4-a33eb9803266'

export function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/auth/check-inbox')
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* ── Left: Form ── */}
      <div className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="flex flex-col items-center gap-8 w-full max-w-[402px]">
          <ParagonLogo size="md" />

          <div className="w-full bg-white border border-[rgba(0,0,0,0.05)] rounded-[12px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Title */}
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-semibold text-[#242529] leading-8">Reset Password</h1>
                <p className="text-sm text-[rgba(0,0,0,0.64)] text-center leading-5">
                  Enter the email you use to sign in. We'll send you a reset link.
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#242529] leading-5">Email</label>
                  <input
                    type="email"
                    placeholder="m@paragon.com.bd"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-9 border border-[#e5e5e5] rounded-[6px] px-3 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.1)] text-base text-[rgba(0,0,0,0.64)] w-full focus:outline-none focus:border-[#2783de] transition-colors placeholder:text-[rgba(0,0,0,0.4)]"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-center gap-5">
                <button
                  type="submit"
                  className="w-full h-9 bg-[#2783de] text-white rounded-[6px] text-sm font-medium leading-5 shadow-[0px_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#1e6ec5] transition-colors"
                >
                  Send reset link
                </button>
                <Link
                  to="/auth/login"
                  className="text-sm text-[#2783de] leading-5 hover:underline"
                >
                  Back to login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Right: Illustration ── */}
      <div className="flex-1 bg-[#eff8ff] flex items-center justify-center">
        <img
          src={imgIllustration}
          alt="Reset password illustration"
          className="w-[508px] h-[410px] object-contain"
        />
      </div>
    </div>
  )
}
