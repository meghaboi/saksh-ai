import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center gap-4">
        <Link href="/" className="font-semibold">
          saksh-ai
        </Link>
        <div className="ml-auto text-sm text-muted-foreground">
          AppHeader
        </div>
      </div>
    </header>
  );
}
