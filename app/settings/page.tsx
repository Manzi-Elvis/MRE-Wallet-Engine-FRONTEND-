import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SecuritySettings } from "@/components/settings/security-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { PreferenceSettings } from "@/components/settings/preference-settings"

export const metadata = {
  title: "Settings - MRE Wallet Engine",
  description: "Manage your account settings",
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your account security and preferences</p>
        </div>

        <div className="space-y-6">
          <SecuritySettings />
          <NotificationSettings />
          <PreferenceSettings />
        </div>
      </main>
    </div>
  )
}
