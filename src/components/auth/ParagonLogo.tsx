import React from 'react'

interface ParagonLogoProps {
  size?: 'sm' | 'md' | 'lg'
}

// Paragon Group brand logo — P symbol + wordmark
export function ParagonLogo({ size = 'md' }: ParagonLogoProps) {
  const scales: Record<string, string> = {
    sm: 'scale-75',
    md: 'scale-100',
    lg: 'scale-125',
  }
  return (
    <div className={`flex flex-col items-center gap-0.5 ${scales[size]}`}>
      <svg width="56" height="62" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* P symbol — upper yellow/orange loop */}
        <path
          d="M28 2C18 2 10 8 10 18C10 26 15 31 22 33L22 58C22 59.1 22.9 60 24 60H32C33.1 60 34 59.1 34 58L34 44C44 42 46 35 46 28C46 18 40 2 28 2Z"
          fill="#F5A623"
        />
        {/* Blue lower body of P */}
        <path
          d="M22 33C22 33 14 36 10 44C8 48 9 54 13 57C17 60 22 58 22 58V33Z"
          fill="#2783DE"
        />
        <path
          d="M34 44C34 44 40 46 44 52C47 57 45 61 40 61C36 61 34 58 34 58V44Z"
          fill="#2783DE"
        />
      </svg>
      <div className="text-center leading-tight">
        <span className="text-[#2783DE] font-semibold text-[15px] tracking-wide">paragon</span>
        <span className="text-[#2783DE] text-[10px] align-super">®</span>
        <br />
        <span className="text-[#2783DE] font-semibold text-[15px] tracking-wide">group</span>
      </div>
    </div>
  )
}
