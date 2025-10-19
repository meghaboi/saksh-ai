import type { Metadata } from "next";

import { AppHeader } from "@/components/shell/app-header";
import { Sidebar } from "@/components/shell/sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "saksh-ai",
  description: "AI-powered web app scaffold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <AppHeader />
            <div className="container flex flex-1 gap-6 py-6">
              <Sidebar />
              <main className="flex-1">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
