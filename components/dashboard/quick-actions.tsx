"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SendIcon, DownloadIcon, CreditCardIcon, HistoryIcon } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    { label: "Send Money", icon: SendIcon, href: "/send" },
    { label: "Receive", icon: DownloadIcon, href: "/receive" },
    { label: "Deposit", icon: CreditCardIcon, href: "/deposit" },
    { label: "History", icon: HistoryIcon, href: "/transactions" },
  ]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link key={index} href={action.href}>
                <Button
                  variant="outline"
                  className="w-full h-auto flex-col gap-2 py-4 hover:bg-accent/5 hover:border-accent bg-transparent"
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">{action.label}</span>
                </Button>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
