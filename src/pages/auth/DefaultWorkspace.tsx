import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ParagonLogo } from '../../components/auth/ParagonLogo'

// Workspace module icons from Figma
const imgTaskMgmt    = 'https://www.figma.com/api/mcp/asset/db5b8336-4706-4c3d-8f09-5b12880ca79c'
const imgCanteen     = 'https://www.figma.com/api/mcp/asset/dc9d937f-37df-44c4-afd3-06ba4c463595'
const imgControlPanel = 'https://www.figma.com/api/mcp/asset/cf272b8f-21c9-4ddf-b95f-bfe3b28c5c95'
const imgDocArchive  = 'https://www.figma.com/api/mcp/asset/b73f0092-6039-4f1d-a7c1-1e1feabd6030'

const WORKSPACES = [
  { id: 'tasks',    label: 'Task & Ticket\nManagement', icon: imgTaskMgmt,    bg: 'bg-[#40a15e]' },
  { id: 'canteen',  label: 'Canteen\nManagement',       icon: imgCanteen,     bg: 'bg-[#3d42df]' },
  { id: 'control',  label: 'Control\nPanel',            icon: imgControlPanel, bg: 'bg-[#8a38f5]' },
  { id: 'docs',     label: 'Document\nArchive',         icon: imgDocArchive,  bg: 'bg-[#ff8d60]' },
]

export function DefaultWorkspace() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  const handleContinue = () => {
    if (selected === 'tasks') navigate('/')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="flex flex-col items-center gap-[60px]">
        <ParagonLogo size="lg" />

        <div className="flex flex-col items-center gap-8">
          {/* Title */}
          <div className="flex flex-col items-center gap-2 max-w-[560px]">
            <h1 className="text-2xl font-semibold text-[#242529] leading-8 text-center">
              Choose your default workspace
            </h1>
            <div className="text-sm text-[rgba(0,0,0,0.64)] text-center leading-5">
              <p>Pick the software you want to open first whenever you log in.</p>
              <p>You can change this later in your profile settings.</p>
            </div>
          </div>

          {/* Workspace options */}
          <div className="flex gap-6 items-start justify-center">
            {WORKSPACES.map((ws) => (
              <button
                key={ws.id}
                onClick={() => setSelected(ws.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-[6px] w-[140px] transition-all ${
                  selected === ws.id
                    ? 'bg-[#eff8ff] ring-2 ring-[#2783de]'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {/* Icon */}
                <div className={`${ws.bg} w-16 h-16 rounded-[7px] flex items-center justify-center flex-shrink-0`}>
                  <img src={ws.icon} alt="" className="w-[38px] h-[38px] object-contain" />
                </div>
                {/* Label */}
                <p className="text-base font-medium text-[rgba(0,0,0,0.55)] text-center leading-6 whitespace-pre-line">
                  {ws.label}
                </p>
              </button>
            ))}
          </div>

          {/* Continue */}
          <button
            onClick={handleContinue}
            disabled={!selected}
            className="w-[280px] h-9 bg-[#2783de] text-white rounded-[6px] text-sm font-medium leading-5 shadow-[0px_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#1e6ec5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
