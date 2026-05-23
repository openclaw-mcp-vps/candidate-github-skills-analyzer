import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GitHub Skills Analyzer — Hire Smarter",
  description: "Analyze GitHub profiles to assess real coding skills. Generate instant skill reports for technical hiring."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="70ef063c-faec-400a-b808-d7b6d324310a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
