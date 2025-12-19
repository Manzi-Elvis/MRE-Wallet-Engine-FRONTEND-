import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ReceiveOptions } from "@/components/receive/receive-options"
import { QRCodeDisplay } from "@/components/receive/qr-code-display"

export const metadata = {
  title: "Receive Money - MRE Wallet Engine",
  description: "Receive money securely",
}

export default function ReceivePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-foreground">Receive Money</h1>
          <p className="text-sm text-muted-foreground">Share your wallet details to receive payments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* QR Code */}
          <QRCodeDisplay />

          {/* Receive Options */}
          <ReceiveOptions />
        </div>
      </main>
    </div>
  )
}
