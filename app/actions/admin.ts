"use server"

import { cookies } from "next/headers"

export async function setAdminSession(passcode: string) {
  const expected = process.env.ADMIN_PASSCODE
  if (!expected) {
    return { ok: false, message: "ADMIN_PASSCODE not set" }
  }
  if (passcode !== expected) {
    return { ok: false, message: "Invalid passcode" }
  }
  cookies().set("admin", "1", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 6 })
  return { ok: true }
}
