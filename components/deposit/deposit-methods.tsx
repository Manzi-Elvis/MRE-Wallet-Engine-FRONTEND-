"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCardIcon, BanknoteIcon, WalletIcon } from "lucide-react"

export function DepositMethods() {
  const [selected, setSelected] = useState("card")

  const methods = [
    { id: "card", label: "Debit/Credit Card", icon: CreditCardIcon },
    { id: "bank", label: "Bank Transfer", icon: BanknoteIcon },
    { id: "crypto", label: "Crypto Wallet", icon: WalletIcon },
  ]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {methods.map((method) => {
          const Icon = method.icon
          return (
            <Button
              key={method.id}
              variant={selected === method.id ? "default" : "outline"}
              className={`w-full justify-start h-auto p-4 ${selected === method.id ? "" : "bg-transparent hover:bg-accent/5 hover:border-accent"}`}
              onClick={() => setSelected(method.id)}
            >
              <Icon className="mr-3 h-5 w-5" />
              <span className="text-sm font-medium">{method.label}</span>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}
