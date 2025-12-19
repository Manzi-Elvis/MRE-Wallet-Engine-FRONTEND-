import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRightIcon, ArrowDownLeftIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"

export function RecentTransactions() {
  const transactions = [
    { id: 1, name: "Sarah Johnson", type: "received", amount: "+$450.00", time: "2h ago", avatar: "SJ" },
    { id: 2, name: "Tech Subscription", type: "sent", amount: "-$29.99", time: "5h ago", avatar: "TS" },
    { id: 3, name: "Michael Chen", type: "received", amount: "+$1,200.00", time: "1d ago", avatar: "MC" },
    { id: 4, name: "Grocery Store", type: "sent", amount: "-$85.43", time: "2d ago", avatar: "GS" },
    { id: 5, name: "Freelance Work", type: "received", amount: "+$2,500.00", time: "3d ago", avatar: "FW" },
  ]

  return (
    <Card className="border-border bg-card h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/transactions">
            View all
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="flex-1 space-y-1">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="text-xs">{transaction.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{transaction.name}</p>
                <p className="text-xs text-muted-foreground">{transaction.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${transaction.type === "received" ? "text-success" : "text-foreground"}`}
              >
                {transaction.amount}
              </span>
              {transaction.type === "received" ? (
                <ArrowDownLeftIcon className="h-4 w-4 text-success" />
              ) : (
                <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
