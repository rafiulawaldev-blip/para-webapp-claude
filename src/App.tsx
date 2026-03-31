import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { Dashboard } from './pages/Dashboard'
import { TaskListing } from './pages/TaskListing'
import { TaskDescription } from './pages/TaskDescription'
import { CreateTask } from './pages/CreateTask'
import { Placeholder } from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/"              element={<Dashboard />} />
          <Route path="/tasks"         element={<TaskListing />} />
          <Route path="/tasks/create"  element={<CreateTask />} />
          <Route path="/tasks/:id"     element={<TaskDescription />} />
          <Route path="/tasks/support" element={<Placeholder title="Support Tasks" breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Support Task' }]} />} />
          <Route path="/my-todo"       element={<Placeholder title="My To-Do"       breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'My To-Do' }]} />} />
          <Route path="/projects"      element={<Placeholder title="Projects"       breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Projects' }]} />} />
          <Route path="/tickets"       element={<Placeholder title="Support Tickets" breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Support Tickets' }]} />} />
          <Route path="/reports"       element={<Placeholder title="Reports"        breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Reports' }]} />} />
          <Route path="/settings"      element={<Placeholder title="Settings"       breadcrumbs={[{ label: 'Jessore Feed Ltd.' }, { label: 'Settings' }]} />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
