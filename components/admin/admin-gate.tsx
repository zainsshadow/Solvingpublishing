"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { setAdminSession } from "@/app/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AdminGate() {
  const [pass, setPass] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const router = useRouter()

  return (
    <form
      className="max-w-sm grid gap-3 border rounded-md p-4 bg-card"
      onSubmit={(e) => {
        e.preventDefault()
        setError(null)
        startTransition(async () => {
          const res = await setAdminSession(pass)
          if (res.ok) {
            router.refresh()
          } else {
            setError(res.message || "Access denied")
          }
        })
      }}
    >
      <div>
        <Label htmlFor="pass">Admin Passcode</Label>
        <Input id="pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Checking..." : "Enter"}
      </Button>
      <p className="text-xs text-muted-foreground">Set ADMIN_PASSCODE in Vars to enable secure access.</p>
    </form>
  )
}
