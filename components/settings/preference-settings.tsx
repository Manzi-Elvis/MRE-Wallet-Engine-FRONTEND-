"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SettingsIcon, TrashIcon } from "lucide-react"

export function PreferenceSettings() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <SettingsIcon className="h-5 w-5 text-accent" />
          Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Language */}
        <div className="space-y-2">
          <Label htmlFor="language" className="text-sm font-medium">
            Language
          </Label>
          <Select defaultValue="en">
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Currency */}
        <div className="space-y-2">
          <Label htmlFor="currency" className="text-sm font-medium">
            Default Currency
          </Label>
          <Select defaultValue="usd">
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD - US Dollar</SelectItem>
              <SelectItem value="eur">EUR - Euro</SelectItem>
              <SelectItem value="gbp">GBP - British Pound</SelectItem>
              <SelectItem value="ngn">NGN - Nigerian Naira</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Timezone */}
        <div className="space-y-2">
          <Label htmlFor="timezone" className="text-sm font-medium">
            Timezone
          </Label>
          <Select defaultValue="utc-5">
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-5">EST (UTC-5)</SelectItem>
              <SelectItem value="utc-8">PST (UTC-8)</SelectItem>
              <SelectItem value="utc+0">GMT (UTC+0)</SelectItem>
              <SelectItem value="utc+1">CET (UTC+1)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Danger Zone */}
        <div className="pt-6 border-t border-destructive/20">
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-semibold text-destructive mb-1">Danger Zone</h3>
              <p className="text-xs text-muted-foreground">Irreversible actions that affect your account</p>
            </div>
            <Button variant="destructive" className="w-full sm:w-auto">
              <TrashIcon className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
