import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { ParagonLogo } from '../../components/auth/ParagonLogo'

const imgIllustration = 'https://www.figma.com/api/mcp/asset/54ba55eb-c149-4ab5-9a10-87c284d6efa1'

export function CreateNewPassword() {
  const navigate = useNavigate()
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/auth/password-changed')
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
                <h1 className="text-2xl font-semibold text-[#242529] leading-8 text-center">
                  Create a new password
                </h1>
                <p className="text-sm text-[rgba(0,0,0,0.64)] text-center leading-5">
                  Choose a strong password you haven't used here before.
                </p>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-5">
                {/* New Password */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#242529] leading-5">New Password</label>
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <input
                        type={showNew ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="h-9 border border-[#e5e5e5] rounded-[6px] px-3 pr-10 bg-white text-base text-[rgba(0,0,0,0.64)] w-full focus:outline-none focus:border-[#2783de] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNew((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]"
                      >
                        {showNew ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[10px] font-medium text-[rgba(0,0,0,0.55)] leading-[14px]">
                      At least 8 characters, mix of letters and numbers recommended.
                    </p>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-[#242529] leading-5">Confirm Password</label>
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="h-9 border border-[#e5e5e5] rounded-[6px] px-3 pr-10 bg-white text-base text-[rgba(0,0,0,0.64)] w-full focus:outline-none focus:border-[#2783de] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]"
                      >
                        {showConfirm ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[10px] font-medium text-[rgba(0,0,0,0.55)] leading-[14px]">
                      Re-enter the password
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-9 bg-[#2783de] text-white rounded-[6px] text-sm font-medium leading-5 hover:bg-[#1e6ec5] transition-colors"
              >
                Update password
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Right: Illustration ── */}
      <div className="flex-1 bg-[#eff8ff] flex items-center justify-center">
        <img
          src={imgIllustration}
          alt="Create new password illustration"
          className="w-[720px] h-full object-cover"
        />
      </div>
    </div>
  )
}
