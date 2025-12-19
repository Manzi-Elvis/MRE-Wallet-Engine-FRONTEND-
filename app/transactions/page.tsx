import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TransactionFilters } from "@/components/transactions/transaction-filters"
import { TransactionList } from "@/components/transactions/transaction-list"
import { TransactionStats } from "@/components/transactions/transaction-stats"

export const metadata = {
  title: "Transactions - MRE Wallet Engine",
  description: "View and manage your transaction history",
}

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-7xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
          <p className="text-sm text-muted-foreground">View and manage all your financial activity</p>
        </div>

        {/* Stats Overview */}
        <TransactionStats />

        {/* Filters */}
        <TransactionFilters />

        {/* Transaction List */}
        <TransactionList />
      </main>
    </div>
  )
}
