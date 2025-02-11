import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { HomeIcon, File, UsersRound, LogOut } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "@/components/ModeToggle";
import { NavButton } from "@/components/NavButton";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 h-12 animate-slide border-b bg-background p-2">
      <div className="flex h-8 w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="ml-0 flex items-center justify-center gap-2"
            title="Home"
          >
            <h1 className="m-0 hidden text-xl font-bold sm:block">
              Dan&apos;s Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Logout"
            title="Logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
};
