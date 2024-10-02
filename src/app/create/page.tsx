"use client";

import { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";

import TopNav from "@/components/common/TopNav";
import { Button } from "@/components/primitives/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { Input } from "@/components/primitives/Input";
import { Label } from "@/components/primitives/Label";
import { Textarea } from "@/components/primitives/Textarea";
import Footer from "@/components/common/Footer";

const CreateToken: FC = () => {
  const { back } = useRouter();
  const [showOthers, setShowOthers] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const ticker = formData.get("ticker");
    const description = formData.get("description");
    const image = formData.get("image");
    const twitter = formData.get("twitter");
    const telegram = formData.get("telegram");
    const website = formData.get("website");

    console.log({
      name,
      ticker,
      description,
      image,
      twitter,
      telegram,
      website,
    });

    // TODO: post to API
  };

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
            <form
              className="flex flex-col gap-4"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
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

              {showOthers && (
                <>
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
                </>
              )}

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
