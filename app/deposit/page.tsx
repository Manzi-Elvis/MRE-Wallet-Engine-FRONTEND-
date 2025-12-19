import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DepositForm } from "@/components/deposit/deposit-form"
import { DepositMethods } from "@/components/deposit/deposit-methods"

export const metadata = {
  title: "Deposit - MRE Wallet Engine",
  description: "Add funds to your wallet",
}

export default function DepositPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-foreground">Deposit Funds</h1>
          <p className="text-sm text-muted-foreground">Add money to your wallet from various sources</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Deposit Methods */}
          <div className="lg:col-span-1">
            <DepositMethods />
          </div>

          {/* Deposit Form */}
          <div className="lg:col-span-2">
            <DepositForm />
          </div>
        </div>
      </main>
    </div>
  )
}
