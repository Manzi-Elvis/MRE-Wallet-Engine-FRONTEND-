"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCodeIcon } from "lucide-react"

export function QRCodeDisplay() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Scan QR Code</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="w-64 h-64 bg-white rounded-lg p-4 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 rounded flex items-center justify-center">
            <QrCodeIcon className="w-32 h-32 text-accent" />
          </div>
        </div>
        <p className="text-sm text-center text-muted-foreground max-w-sm">
          Anyone can scan this QR code to send money directly to your wallet
        </p>
      </CardContent>
    </Card>
  )
}
