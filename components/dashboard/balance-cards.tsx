import { Card, CardContent } from "@/components/ui/card"
import { WalletIcon, TrendingUpIcon, TrendingDownIcon, ActivityIcon } from "lucide-react"

export function BalanceCards() {
  const balanceData = [
    {
      label: "Total Balance",
      value: "$12,458.50",
      change: "+12.5%",
      trend: "up" as const,
      icon: WalletIcon,
    },
    {
      label: "Income",
      value: "$8,240.00",
      change: "+8.2%",
      trend: "up" as const,
      icon: TrendingUpIcon,
    },
    {
      label: "Expenses",
      value: "$3,125.40",
      change: "-4.1%",
      trend: "down" as const,
      icon: TrendingDownIcon,
    },
    {
      label: "Active Transactions",
      value: "24",
      change: "+3 today",
      trend: "neutral" as const,
      icon: ActivityIcon,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {balanceData.map((item, index) => {
        const Icon = item.icon
        return (
          <Card key={index} className="border-border bg-card hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    item.trend === "up"
                      ? "bg-success/10 text-success"
                      : item.trend === "down"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.change}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
