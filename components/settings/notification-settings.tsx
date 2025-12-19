"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { BellIcon } from "lucide-react"

export function NotificationSettings() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <BellIcon className="h-5 w-5 text-accent" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="email-notif" className="text-sm font-medium">
              Email Notifications
            </Label>
            <p className="text-xs text-muted-foreground">Receive updates via email</p>
          </div>
          <Switch id="email-notif" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="push-notif" className="text-sm font-medium">
              Push Notifications
            </Label>
            <p className="text-xs text-muted-foreground">Get mobile push alerts</p>
          </div>
          <Switch id="push-notif" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="transaction-notif" className="text-sm font-medium">
              Transaction Alerts
            </Label>
            <p className="text-xs text-muted-foreground">Notify on every transaction</p>
          </div>
          <Switch id="transaction-notif" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="security-notif" className="text-sm font-medium">
              Security Alerts
            </Label>
            <p className="text-xs text-muted-foreground">Important security updates</p>
          </div>
          <Switch id="security-notif" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="marketing-notif" className="text-sm font-medium">
              Marketing Emails
            </Label>
            <p className="text-xs text-muted-foreground">News and promotional offers</p>
          </div>
          <Switch id="marketing-notif" />
        </div>
      </CardContent>
    </Card>
  )
}
