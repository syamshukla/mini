/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HamburgerMenuIcon, RocketIcon } from "@radix-ui/react-icons";
import ModeToggle from "@/components/mode-toggle";
import ghill_log from "../../public/ghill_log.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MainNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="flex items-center justify-between px-3 py-3"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link href="/adminHome" className="flex items-center space-x-2">
            <RocketIcon className="h-5 w-5 text-foreground" />
            <span className="overflow-auto font-semibold leading-tight tracking-tight">
              FGF Admin
            </span>
          </Link>
          <div className="hidden md:flex md:gap-x-6">
            <Link
              href="/createGame"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/play" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Create
            </Link>

            <Link
              href="/manageUsers"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/results"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Users
            </Link>

            <Link
              href="/manageGames"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/stats" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Games
            </Link>
            <Link
              href="/editAccount"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/play" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Edit
            </Link>
            <Link
              href="/adminRegistration"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/results"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Register Admin
            </Link>

            <Link
              href="/inviteAdvisor"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/stats" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Invite
            </Link>
            <Link
              href="/addSponsor"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/play" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Sponsor
            </Link>
            <Link
              href="/manageFaq"
              className={cn(
                "text-sm font-light transition-colors hover:text-foreground/80",
                pathname === "/results"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="text-foreground"></div>
        <div className="flex items-center gap-x-4">
          <Image
            src={ghill_log}
            alt="ghill"
            className="rounded-lg"
            width={100}
          />
          <ModeToggle />
          <div className="block md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HamburgerMenuIcon className="h-6 w-6 text-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2 ">
                <Button variant="outline" asChild>
                  <Link href="/adminHome">
                    <RocketIcon className="mr-2 h-5 w-5 text-foreground" />
                    FGF Admin
                  </Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link href="/manageUsers">Users</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/manageGames">Games</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/editAccount">Edit Account</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/adminRegistration">Register</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/addSponsor">Sponsor</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/manageFaq">FAQ</Link>
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
}
