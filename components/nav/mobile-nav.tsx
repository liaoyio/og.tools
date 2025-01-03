"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeImage } from "@/components/ui/theme-image"

export function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen} >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-4 text-left">
          <SheetTitle>
            <ThemeImage
              srcDark="/logo_dark.svg"
              srcLight="/logo.svg"
              alt="og.new Logo"
              width={32}
              height={32}
            />

          </SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex flex-col space-y-4">
          <Button
            onClick={() => setSheetOpen(false)}
            variant="link"
            className="justify-start px-0"
            asChild
          >
            <Link href="mailto:2417276459@qq.com" target="_self">
              Support
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
