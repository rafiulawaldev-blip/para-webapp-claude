import React from 'react'
import { Header } from '../components/layout/Header'

interface PlaceholderProps {
  title: string
  breadcrumbs: { label: string }[]
}

export function Placeholder({ title, breadcrumbs }: PlaceholderProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Task & Ticket Management" breadcrumbs={breadcrumbs} />
      <div className="flex-1 flex items-center justify-center text-gray-400">
        <div className="text-center">
          <p className="text-4xl mb-3">🚧</p>
          <p className="text-lg font-medium text-gray-500">{title}</p>
          <p className="text-sm mt-1">Coming soon</p>
        </div>
      </div>
    </div>
  )
}
