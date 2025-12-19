import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SendMoneyForm } from "@/components/send/send-money-form"
import { RecentRecipients } from "@/components/send/recent-recipients"

export const metadata = {
  title: "Send Money - MRE Wallet Engine",
  description: "Send money securely to anyone",
}

export default function SendPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-foreground">Send Money</h1>
          <p className="text-sm text-muted-foreground">Transfer funds securely to any wallet or bank account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Send Form */}
          <div className="lg:col-span-2">
            <SendMoneyForm />
          </div>

          {/* Recent Recipients */}
          <div className="lg:col-span-1">
            <RecentRecipients />
          </div>
        </div>
      </main>
    </div>
  )
}
