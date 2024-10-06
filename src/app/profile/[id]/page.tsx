'use client';

import { FC, useState } from "react";
import { Copy, Edit } from "lucide-react";

import { Button } from "@/components/primitives/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/Tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/Avatar";
import { Switch } from "@/components/primitives/Switch";
import { Label } from "@/components/primitives/Label";

type ProfileProps = {
  params: {
    id: string
  }
}
const Profile: FC<ProfileProps> = (props) => {
  const { params } = props;
  const { id } = params;
  const [copiedText, setCopiedText] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText('FZLsqDUAVj8GEZpLiYwQbWRXvDfEMZBwVVmXQr5aKrhi')
    setCopiedText(true)
    setTimeout(() => setCopiedText(false), 2000)
  }

  return (
    <main className="container mx-auto px-4 py-12 lg:min-h-[calc(100vh-220px)]">
      <div className="bg-card rounded-lg shadow-lg p-6 mb-8 max-w-screen-sm mx-auto">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex flex-row gap-6 w-full items-center">
            <Avatar className="w-24 h-24 mx-auto">
              <AvatarImage src="https://picsum.photos/96/96" alt="@L0r3m" />
              <AvatarFallback>L3</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">@L0r3m</h1>
              <p className="text-lg font-semibold">Lorem Ipsum</p>
            </div>

            <div className="grow flex self-start justify-end">
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
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
            <div className="flex items-center justify-center md:justify-start">
              <code className="bg-muted p-1 rounded text-sm">FZLsqDUAVj8GEZp88888888XvDfEMZBwVVmXQr5aKrhikasdKIo02Kl5758</code>
              <Button variant="ghost" size="icon" onClick={copyAddress} className="ml-2">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
              {copiedText && <span className="text-green-500 ml-2">Copied!</span>}
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="coins" className="max-w-screen-sm mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="coins">Coins Held</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="created">Coins Created</TabsTrigger>
        </TabsList>
        <TabsContent value="coins">
          <div className="py-6">
            <div className="flex flex-row justify-between">
              <Button>Add Coin</Button>

              <div className="flex items-center space-x-2">
                <Switch id="show-dust-coins" />
                <Label htmlFor="show-dust-coins">Show dust coin</Label>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="replies">
          <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Replies</h2>
            <p>Show the user's replies here.</p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <p>Display user notifications in this section.</p>
          </div>
        </TabsContent>
        <TabsContent value="created">
          <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Coins Created</h2>
            <p>List the coins created by the user here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default Profile;
