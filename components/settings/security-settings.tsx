"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ShieldCheckIcon, KeyIcon, SmartphoneIcon } from "lucide-react"

export function SecuritySettings() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <ShieldCheckIcon className="h-5 w-5 text-accent" />
          Security
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Change Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
              <KeyIcon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Password</p>
              <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
            </div>
          </div>
          <Button variant="outline" className="bg-transparent">
            Change
          </Button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
              <SmartphoneIcon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        {/* Biometric Login */}
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="biometric" className="text-sm font-medium">
              Biometric Login
            </Label>
            <p className="text-xs text-muted-foreground">Use fingerprint or face ID</p>
          </div>
          <Switch id="biometric" />
        </div>

        {/* Session Management */}
        <div className="pt-4 border-t border-border">
          <Button variant="outline" className="w-full bg-transparent">
            View Active Sessions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
