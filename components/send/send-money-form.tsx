"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2Icon, AlertCircleIcon, SendIcon } from "lucide-react"

export function SendMoneyForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    recipient: "",
    amount: "",
    currency: "USD",
    note: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (Number.parseFloat(formData.amount) > 0 && formData.recipient) {
      setSuccess(true)
      setFormData({ recipient: "", amount: "", currency: "USD", note: "" })
    } else {
      setError("Please enter valid recipient and amount")
    }

    setIsLoading(false)
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Transfer Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <Alert className="bg-success/10 border-success/20 text-success">
              <CheckCircle2Icon className="h-4 w-4" />
              <AlertDescription>Transaction successful! Your money has been sent.</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircleIcon className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Recipient */}
          <div className="space-y-2">
            <Label htmlFor="recipient" className="text-sm font-medium">
              Recipient
            </Label>
            <Input
              id="recipient"
              type="text"
              placeholder="Email, phone, or wallet address"
              value={formData.recipient}
              onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
              required
              className="h-11"
            />
            <p className="text-xs text-muted-foreground">
              Enter the recipient's email, phone number, or wallet address
            </p>
          </div>

          {/* Amount & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="amount" className="text-sm font-medium">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-sm font-medium">
                Currency
              </Label>
              <Select
                value={formData.currency}
                onValueChange={(value) => setFormData({ ...formData, currency: value })}
              >
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="NGN">NGN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fee Breakdown */}
          {formData.amount && Number.parseFloat(formData.amount) > 0 && (
            <div className="p-4 rounded-lg bg-muted/50 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transfer amount</span>
                <span className="text-foreground font-medium">${Number.parseFloat(formData.amount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transaction fee</span>
                <span className="text-foreground font-medium">$0.00</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-semibold">Total</span>
                <span className="text-foreground font-semibold">${Number.parseFloat(formData.amount).toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Note */}
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm font-medium">
              Note (Optional)
            </Label>
            <Textarea
              id="note"
              placeholder="Add a note for the recipient"
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="resize-none"
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full h-11" disabled={isLoading}>
            <SendIcon className="mr-2 h-4 w-4" />
            {isLoading ? "Sending..." : "Send Money"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
