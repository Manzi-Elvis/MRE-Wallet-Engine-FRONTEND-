"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", income: 4200, expenses: 2800 },
  { month: "Feb", income: 3800, expenses: 2400 },
  { month: "Mar", income: 5200, expenses: 3200 },
  { month: "Apr", income: 4800, expenses: 2900 },
  { month: "May", income: 6200, expenses: 3800 },
  { month: "Jun", income: 5800, expenses: 3400 },
]

export function ActivityChart() {
  return (
    <Card className="border-border bg-card h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Financial Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.21 0.02 245)" />
            <XAxis dataKey="month" stroke="oklch(0.65 0.01 245)" style={{ fontSize: "12px" }} />
            <YAxis stroke="oklch(0.65 0.01 245)" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.08 0.01 245)",
                border: "1px solid oklch(0.21 0.02 245)",
                borderRadius: "8px",
                color: "oklch(0.92 0.01 245)",
              }}
            />
            <Bar dataKey="income" fill="oklch(0.55 0.18 145)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="oklch(0.55 0.18 250)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-success" />
            <span className="text-xs text-muted-foreground">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-accent" />
            <span className="text-xs text-muted-foreground">Expenses</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
