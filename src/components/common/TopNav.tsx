'use client';

import { useEffect, type FC } from "react";
import Image from "next/image";
import {LogOut, Wallet, User} from "lucide-react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";

import { Button } from "@/components/primitives/Button";
import useSession from "@/hooks/useSession";
import {useWallet} from "@solana/wallet-adapter-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./DropdownMenu";
import { useRouter } from "next/navigation";
import SigninMessage from "@/lib/SignMessage";
import bs58 from "bs58";

const TopNav: FC = () => {
  const { push, replace } = useRouter();
  const { data: session, signIn, signOut } = useSession();
  const { username } = session || {};
  const { setVisible } = useWalletModal();
  const { connected, publicKey, signMessage, disconnect } = useWallet();
  const handleDisconnect = async() => {
    await disconnect();
    await signOut();
    replace('/');
  }
  
  // Handle callback from wallet connection and then do login
  useEffect(() => {
    if (connected && publicKey && signMessage) {
      (async () => {
        const message = new SigninMessage({
          domain: window.location.host,
          publicKey: publicKey.toBase58(),
          statement: `Sign this message to authenticate`,
        });

        const data = new TextEncoder().encode(message.prepare());
        const signature = await signMessage(data).catch(() => null);

        if (!signature) {
          return;
        }

        const serializedSignature = bs58.encode(signature);
        const isValid = await message.validate(serializedSignature);

        if (isValid) {
          signIn({
            wallet: publicKey.toString(),
          });
        }
      })();
    }
  }, [connected, publicKey, signMessage]);

  return (
    <nav className="flex flex-wrap justify-between w-full p-2 sm:p-4 items-center h-fit">
      <div className="flex gap-2 items-center">
        <a href="/">
          <Image
            alt="Pump"
            loading="lazy"
            width="48"
            height="48"
            decoding="async"
            data-nimg="1"
            className="mr-4"
            src="/images/logo.png"
          />
        </a>
        <div className="hidden md:flex gap-2 animate-shake">
          <div className="p-2 rounded flex items-center gap-1 text-sm bg-amber-600">
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
        <div className="hidden lg:flex gap-2 animate-shake">
          <div className="p-2 rounded flex items-center gap-1 text-sm bg-sky-600">
            <a href="#">
              <span className="flex gap-1 items-center">
                <span className="px-1 rounded hover:underline flex gap-1 bg-transparent text-destructive-foreground">
                  L0r3m
                </span>
              </span>
            </a>
            created
            <a className="hover:underline flex gap-2" href="#">
              IPSUM
            </a>
            on 10/05/24
          </div>
        </div>
      </div>
      <div className="md:flex md:gap-4 grid gap-1">
        {connected ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <User className="mr-2 h-4 w-4" />
                {`@${username}`}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => push(`/profile/${123}`)}>
                  <User className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDisconnect}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Disconnect</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => setVisible(true)}>
            <Wallet className="w-4 h-4 mr-2" />
            Connect wallet
          </Button>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
