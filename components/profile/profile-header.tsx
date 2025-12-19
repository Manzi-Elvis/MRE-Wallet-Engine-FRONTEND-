"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CameraIcon } from "lucide-react"

export function ProfileHeader() {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/abstract-geometric-shapes.png" alt="Profile" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-lg"
              aria-label="Change avatar"
            >
              <CameraIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
            <p className="text-sm text-muted-foreground">john@example.com</p>
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success border border-success/20">
                Verified Account
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                Premium Member
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
