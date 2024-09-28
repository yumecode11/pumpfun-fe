"use client";

import { FC, useState } from "react";

import { useRouter } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Footer, TopNav } from "../components";

const CreateToken: FC = () => {
  const { back } = useRouter();
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div>
      <TopNav />

      <div className="max-w-xl mx-auto px-4 mb-12">
        <Button variant="outline" className="my-4" onClick={back}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Create New Token</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="grid w-full gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="ticker">Ticker</Label>
                <Input type="text" id="ticker" name="ticker" required />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" name="image" required />
              </div>

              <Button
                type="button"
                variant="secondary"
                onClick={() => setShowOthers(!showOthers)}
              >
                {showOthers ? "Hide more options" : "Show more options"}
                {showOthers ? (
                  <ArrowUp className="ml-2 h-4 w-4" />
                ) : (
                  <ArrowDown className="ml-2 h-4 w-4" />
                )}
              </Button>

              <div className="grid w-full gap-2">
                <Label htmlFor="twitter">Twitter link</Label>
                <Input type="text" id="twitter" name="twitter" />
              </div>

              <div className="grid w-full gap-2">
                <Label htmlFor="telegram">Telegram link</Label>
                <Input type="text" id="telegram" name="telegram" />
              </div>

              <div className="grid w-full gap-2">
                <Label htmlFor="website">Website link</Label>
                <Input type="text" id="website" name="website" />
              </div>

              <p className="text-foreground text-xs">
                Note: Coin data cannot be changed after creation
              </p>

              <Button type="submit" className="w-full">
                Create Coin
              </Button>

              <p className="text-foreground text-xs">
                When your coin completes its bonding curve you receive 0.5 SOL
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CreateToken;
