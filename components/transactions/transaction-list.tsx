"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon, ArrowDownLeftIcon, CreditCardIcon, BanknoteIcon, MoreHorizontalIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Transaction {
  id: string
  type: "sent" | "received" | "deposit" | "withdrawal"
  recipient: string
  amount: string
  status: "completed" | "pending" | "failed"
  date: string
  time: string
  reference: string
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "received",
    recipient: "Sarah Johnson",
    amount: "+$450.00",
    status: "completed",
    date: "Dec 19, 2025",
    time: "2:30 PM",
    reference: "INV-2025-1234",
  },
  {
    id: "2",
    type: "sent",
    recipient: "Tech Subscription",
    amount: "-$29.99",
    status: "completed",
    date: "Dec 19, 2025",
    time: "10:15 AM",
    reference: "SUB-2025-5678",
  },
  {
    id: "3",
    type: "received",
    recipient: "Michael Chen",
    amount: "+$1,200.00",
    status: "completed",
    date: "Dec 18, 2025",
    time: "4:45 PM",
    reference: "PAY-2025-9101",
  },
  {
    id: "4",
    type: "deposit",
    recipient: "Bank Transfer",
    amount: "+$5,000.00",
    status: "completed",
    date: "Dec 17, 2025",
    time: "9:00 AM",
    reference: "DEP-2025-1121",
  },
  {
    id: "5",
    type: "sent",
    recipient: "Grocery Store",
    amount: "-$85.43",
    status: "pending",
    date: "Dec 17, 2025",
    time: "6:30 PM",
    reference: "PUR-2025-3141",
  },
  {
    id: "6",
    type: "withdrawal",
    recipient: "ATM Withdrawal",
    amount: "-$200.00",
    status: "completed",
    date: "Dec 16, 2025",
    time: "3:20 PM",
    reference: "WTH-2025-5161",
  },
  {
    id: "7",
    type: "received",
    recipient: "Freelance Work",
    amount: "+$2,500.00",
    status: "completed",
    date: "Dec 16, 2025",
    time: "11:00 AM",
    reference: "FRE-2025-7181",
  },
  {
    id: "8",
    type: "sent",
    recipient: "Electric Bill",
    amount: "-$125.67",
    status: "failed",
    date: "Dec 15, 2025",
    time: "2:15 PM",
    reference: "BLL-2025-9202",
  },
]

export function TransactionList() {
  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "received":
        return <ArrowDownLeftIcon className="h-4 w-4" />
      case "sent":
        return <ArrowUpRightIcon className="h-4 w-4" />
      case "deposit":
        return <CreditCardIcon className="h-4 w-4" />
      case "withdrawal":
        return <BanknoteIcon className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success/10 text-success hover:bg-success/20 border-success/20">Completed</Badge>
      case "pending":
        return <Badge className="bg-warning/10 text-warning hover:bg-warning/20 border-warning/20">Pending</Badge>
      case "failed":
        return (
          <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20">
            Failed
          </Badge>
        )
    }
  }

  return (
    <Card className="border-border bg-card">
      <div className="divide-y divide-border">
        {/* Header - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 text-xs font-medium text-muted-foreground">
          <div className="col-span-4">Transaction</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Reference</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Amount</div>
        </div>

        {/* Transaction Rows */}
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-4 hover:bg-muted/50 transition-colors"
          >
            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-xs bg-accent/10">
                      {getTransactionIcon(transaction.type)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{transaction.recipient}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.date} • {transaction.time}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontalIcon className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                    <DropdownMenuItem>Report Issue</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusBadge(transaction.status)}
                  <span className="text-xs text-muted-foreground">{transaction.reference}</span>
                </div>
                <span
                  className={`text-sm font-semibold ${transaction.type === "received" || transaction.type === "deposit" ? "text-success" : "text-foreground"}`}
                >
                  {transaction.amount}
                </span>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:contents">
              {/* Transaction Info */}
              <div className="col-span-4 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="text-xs bg-accent/10">
                    {getTransactionIcon(transaction.type)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{transaction.recipient}</p>
                  <p className="text-xs text-muted-foreground capitalize">{transaction.type}</p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="col-span-2 flex flex-col justify-center">
                <p className="text-sm text-foreground">{transaction.date}</p>
                <p className="text-xs text-muted-foreground">{transaction.time}</p>
              </div>

              {/* Reference */}
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-muted-foreground font-mono">{transaction.reference}</p>
              </div>

              {/* Status */}
              <div className="col-span-2 flex items-center">{getStatusBadge(transaction.status)}</div>

              {/* Amount & Actions */}
              <div className="col-span-2 flex items-center justify-end gap-2">
                <span
                  className={`text-sm font-semibold ${transaction.type === "received" || transaction.type === "deposit" ? "text-success" : "text-foreground"}`}
                >
                  {transaction.amount}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontalIcon className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                    <DropdownMenuItem>Report Issue</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
