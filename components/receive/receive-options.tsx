"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CopyIcon, CheckIcon } from "lucide-react"

export function ReceiveOptions() {
  const [copied, setCopied] = useState<string | null>(null)

  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678"
  const email = "john@example.com"
  const phoneNumber = "+1 (555) 123-4567"

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Share Your Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Wallet Address */}
        <div className="space-y-2">
          <Label htmlFor="wallet" className="text-sm font-medium">
            Wallet Address
          </Label>
          <div className="flex gap-2">
            <Input id="wallet" type="text" value={walletAddress} readOnly className="h-11 font-mono text-xs" />
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 flex-shrink-0 bg-transparent"
              onClick={() => handleCopy(walletAddress, "wallet")}
            >
              {copied === "wallet" ? <CheckIcon className="h-4 w-4 text-success" /> : <CopyIcon className="h-4 w-4" />}
              <span className="sr-only">Copy wallet address</span>
            </Button>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <div className="flex gap-2">
            <Input id="email" type="text" value={email} readOnly className="h-11" />
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 flex-shrink-0 bg-transparent"
              onClick={() => handleCopy(email, "email")}
            >
              {copied === "email" ? <CheckIcon className="h-4 w-4 text-success" /> : <CopyIcon className="h-4 w-4" />}
              <span className="sr-only">Copy email</span>
            </Button>
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </Label>
          <div className="flex gap-2">
            <Input id="phone" type="text" value={phoneNumber} readOnly className="h-11" />
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 flex-shrink-0 bg-transparent"
              onClick={() => handleCopy(phoneNumber, "phone")}
            >
              {copied === "phone" ? <CheckIcon className="h-4 w-4 text-success" /> : <CopyIcon className="h-4 w-4" />}
              <span className="sr-only">Copy phone number</span>
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Share any of these details with someone who wants to send you money
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
