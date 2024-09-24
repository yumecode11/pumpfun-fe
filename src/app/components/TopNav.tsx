import type { FC } from "react";

import Image from "next/image";

import logo from "@/app/images/logo.png";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const TopNav: FC = () => {
  return (
    <nav className="flex flex-wrap justify-between w-full p-4 items-center h-fit">
      <div className="flex gap-2 items-center">
        <a href="#">
          <Image
            alt="Pump"
            loading="lazy"
            width="48"
            height="48"
            decoding="async"
            data-nimg="1"
            className="mr-4"
            style={{ color: "transparent" }}
            src={logo}
          />
        </a>
        <div className="hidden md:flex gap-2">
          <div className="p-2 rounded flex items-center gap-1 text-sm bg-destructive">
            <a href="#">
              <span className="flex gap-1 items-center">
                <span className="px-1 rounded hover:underline flex gap-1 bg-transparent text-destructive-foreground">
                  LoremIpsum
                </span>
              </span>
            </a>
            sold 1.0329 SOL of
            <a className="hover:underline flex gap-2" href="#">
              wisp
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex md:gap-4 grid gap-1">
        <Button variant="ghost">How it works</Button>
        <Button>
          <Wallet className="w-4 h-4 mr-2" />
          Connect wallet
        </Button>
      </div>
    </nav>
  );
};

export default TopNav;
