'use client';

import { FC, useState } from "react";
import { Copy, Edit } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/Avatar";
import { Button } from "@/components/primitives/Button";
import EditProfile from "./EditProfile";

const DUMMY_ADDRESS = 'FZLsqDUAVj8GEZp88888888XvDfEMZBwVVmXQr5aKrhikasdKIo02Kl5758';

const UserProfile: FC = () => {
  const [copiedText, setCopiedText] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(DUMMY_ADDRESS)
    setCopiedText(true)
    setTimeout(() => setCopiedText(false), 2000)
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-6 mb-8 max-w-screen-sm mx-auto">
      <div className="flex flex-col items-center md:items-start gap-6">
        <div className="flex flex-row gap-6 w-full items-center">
          <Avatar className="w-16 h-16 sm:w-24 sm:h-24 mx-auto">
            <AvatarImage src="https://picsum.photos/96/96" alt="@L0r3m" />
            <AvatarFallback>L3</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl font-bold">@L0r3m</h1>
            <p className="text-base sm:text-lg font-semibold">Lorem Ipsum</p>
          </div>

          <div className="grow flex self-start justify-end">
            <Button variant="outline" onClick={() => setOpenEditProfile(true)}>
              <Edit className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Edit Profile</span>
            </Button>
          </div>
        </div>
        
        <div className="w-full text-center md:text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="font-semibold">Following</p>
              <p className="text-muted-foreground">1,234</p>
            </div>
            <div>
              <p className="font-semibold">Followers</p>
              <p className="text-muted-foreground">5,678</p>
            </div>
            <div>
              <p className="font-semibold">Likes</p>
              <p className="text-muted-foreground">9,101</p>
            </div>
            <div>
              <p className="font-semibold">Mentions</p>
              <p className="text-muted-foreground">2,345</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <code className="bg-muted p-1 rounded text-sm break-all text-left">{DUMMY_ADDRESS}</code>
            <div className="relative">
              <Button variant="ghost" size="icon" className="p-0" onClick={copyAddress}>
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
              {copiedText && <span className="text-green-500 text-xs absolute bg-background rounded p-2 border border-border right-0 -top-8">Copied!</span>}
            </div>
          </div>
        </div>
      </div>

      <EditProfile isOpen={openEditProfile} onOpenChange={setOpenEditProfile} />
    </div>
  )
}

export default UserProfile;
