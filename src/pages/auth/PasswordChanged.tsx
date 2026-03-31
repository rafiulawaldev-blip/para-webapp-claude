import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ParagonLogo } from '../../components/auth/ParagonLogo'

export function PasswordChanged() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <ParagonLogo size="md" />

        <div className="w-[402px] bg-white border border-[rgba(0,0,0,0.05)] rounded-[12px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2 w-full">
              <h1 className="text-2xl font-semibold text-[#242529] leading-8 text-center">
                Congratulation!
              </h1>
              <p className="text-sm text-[rgba(0,0,0,0.64)] text-center leading-5">
                Your password has been changed successfully.
              </p>
            </div>

            <button
              onClick={() => navigate('/auth/login')}
              className="w-full h-9 bg-[#2783de] text-white rounded-[6px] text-sm font-medium leading-5 shadow-[0px_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#1e6ec5] transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
