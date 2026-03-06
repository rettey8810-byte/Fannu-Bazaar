import { useEffect, useState } from 'react'
import Auth from './components/Auth'
import AdminDashboard from './components/AdminDashboard'
import CustomerDashboard from './components/CustomerDashboard'
import WorkerDashboard from './components/WorkerDashboard'
import InstallButton from './components/InstallButton'
import BottomNav from './components/BottomNav'
import { seedIfEmpty } from './lib/db'
import type { SessionUser } from './lib/types'

export default function App() {
  useEffect(() => {
    void seedIfEmpty()
  }, [])

  const [user, setUser] = useState<SessionUser | null>(null)

  if (!user) {
    return <Auth onLogin={setUser} />
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-gray-200/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Fannu Bazaar"
              className="h-10 w-10 rounded-xl bg-white object-contain shadow-sm ring-1 ring-gray-200"
            />
            <div className="leading-tight">
              <div className="text-base font-semibold text-gray-900">Fannu Bazaar</div>
              <div className="text-xs text-gray-500">Service marketplace</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              {user.role}
            </span>

            <div className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-2 ring-1 ring-gray-200">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                {(user.name ?? 'U').trim().charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                <div className="text-[11px] text-gray-500">Signed in</div>
              </div>
            </div>

            <button
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800"
              onClick={() => setUser(null)}
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 pb-24 md:pb-6 lg:px-6">
        {user.role === 'admin' ? (
          <AdminDashboard user={user} />
        ) : user.role === 'customer' ? (
          <CustomerDashboard user={user} />
        ) : (
          <WorkerDashboard user={user} />
        )}
      </main>
      
      <BottomNav userRole={user.role} onSignOut={() => setUser(null)} />
      <InstallButton />
    </div>
  )
}
