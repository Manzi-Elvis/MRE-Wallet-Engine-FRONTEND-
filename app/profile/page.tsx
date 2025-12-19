import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileForm } from "@/components/profile/profile-form"

export const metadata = {
  title: "Profile - MRE Wallet Engine",
  description: "Manage your profile",
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-sm text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        <div className="space-y-6">
          <ProfileHeader />
          <ProfileForm />
        </div>
      </main>
    </div>
  )
}
