import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { BalanceCards } from "@/components/dashboard/balance-cards"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { useState, useEffect } from "react"
import { apiFetch } from "@/lib/api-fetch"
import { Wallet } from "@/types/wallet"

export function DashboardContent() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
useEffect(() => {
  apiFetch("/wallet/me")
    .then((res: { json: () => any }) => res.json())
    .then(setWallet);
}, []);
}

export const metadata = {
  title: "Dashboard - MRE Wallet Engine",
  description: "Manage your digital wallet",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        {/* Balance Overview */}
        <BalanceCards />

        {/* Quick Actions */}
        <QuickActions />

        {/* Chart & Recent Transactions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Chart - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>

          {/* Recent Transactions - Takes 1 column on large screens */}
          <div className="lg:col-span-1">
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  )
}
