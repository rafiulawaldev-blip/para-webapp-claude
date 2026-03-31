import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ParagonLogo } from '../../components/auth/ParagonLogo'

export function CheckInbox() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <ParagonLogo size="md" />

        <div className="w-[402px] bg-white border border-[rgba(0,0,0,0.05)] rounded-[12px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-8">
          <div className="flex flex-col gap-5">
            {/* Title */}
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold text-[#242529] leading-8 text-center">
                Check your inbox
              </h1>
              <p className="text-sm text-[rgba(0,0,0,0.64)] text-center leading-5">
                We've sent you a link to reset your password. If you don't see it in a minute or two,
                check your spam folder.
              </p>
            </div>

            {/* Resend */}
            <div className="flex flex-col items-center gap-5">
              <p className="text-sm text-[rgba(0,0,0,0.55)] leading-5">Didn't get the email?</p>
              <button
                onClick={() => navigate('/auth/forgot-password')}
                className="w-full h-9 bg-[#2783de] text-white rounded-[6px] text-sm font-medium leading-5 shadow-[0px_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#1e6ec5] transition-colors"
              >
                Resend link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
