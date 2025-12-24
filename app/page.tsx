import { redirect } from "next/navigation"
const res = await fetch("http://localhost:9090/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});

const data = await res.json();
localStorage.setItem("token", data.token);
router.push("/dashboard");

export default function Home() {
  redirect("/auth/login")
}
