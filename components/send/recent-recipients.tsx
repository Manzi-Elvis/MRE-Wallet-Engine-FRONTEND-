"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function RecentRecipients() {
  const recipients = [
    { name: "Sarah Johnson", email: "sarah@example.com", avatar: "SJ" },
    { name: "Michael Chen", email: "michael@example.com", avatar: "MC" },
    { name: "Emma Wilson", email: "emma@example.com", avatar: "EW" },
    { name: "David Brown", email: "david@example.com", avatar: "DB" },
  ]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Recipients</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {recipients.map((recipient, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start h-auto p-3 hover:bg-accent/5 hover:border-accent bg-transparent"
          >
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback className="text-xs">{recipient.avatar}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">{recipient.name}</p>
              <p className="text-xs text-muted-foreground">{recipient.email}</p>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
