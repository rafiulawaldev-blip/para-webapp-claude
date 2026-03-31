import React from 'react'
import { MessageSquare, Bell, Sun, Grid3x3, ChevronRight, Calendar, ChevronDown } from 'lucide-react'

interface HeaderProps {
  title: string
  breadcrumbs: { label: string; path?: string }[]
}

export function Header({ title, breadcrumbs }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 flex-shrink-0">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 h-12 border-b border-gray-50">
        <h1 className="text-sm font-semibold text-gray-900">{title}</h1>
        <div className="flex items-center gap-1">
          {/* Message */}
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
            <MessageSquare className="w-4 h-4" />
          </button>
          {/* Notifications */}
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
          {/* Dark mode toggle */}
          <button className="w-10 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
            <div className="w-8 h-5 bg-gray-100 rounded-full flex items-center px-0.5">
              <div className="w-4 h-4 bg-white rounded-full shadow flex items-center justify-center">
                <Sun className="w-2.5 h-2.5 text-yellow-500" />
              </div>
            </div>
          </button>
          <div className="w-px h-3.5 bg-gray-200 mx-1" />
          {/* App switcher */}
          <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
            <Grid3x3 className="w-4 h-4" />
          </button>
          {/* User avatar */}
          <button className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center ml-1">
            <span className="text-white text-[10px] font-bold">MD</span>
          </button>
        </div>
      </div>

      {/* Breadcrumb bar */}
      <div className="flex items-center justify-between px-6 h-12">
        <nav className="flex items-center gap-1 text-sm">
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
              <span className={i === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                {crumb.label}
              </span>
            </React.Fragment>
          ))}
        </nav>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          <Calendar className="w-3.5 h-3.5" />
          <span>June 01, 2025</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>
    </header>
  )
}
