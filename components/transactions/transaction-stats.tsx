import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, RepeatIcon } from "lucide-react"

export function TransactionStats() {
  const stats = [
    {
      label: "Total Sent",
      value: "$8,245.67",
      count: "124 transactions",
      icon: ArrowUpIcon,
      color: "text-muted-foreground",
    },
    {
      label: "Total Received",
      value: "$15,892.40",
      count: "87 transactions",
      icon: ArrowDownIcon,
      color: "text-success",
    },
    {
      label: "Total Volume",
      value: "$24,138.07",
      count: "211 transactions",
      icon: RepeatIcon,
      color: "text-accent",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <p className="text-xs text-muted-foreground">{stat.count}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
