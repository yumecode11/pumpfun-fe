'use client';

import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowDown, ArrowLeft, ArrowUp, X } from 'lucide-react';

import { Button } from '@/components/primitives/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/primitives/Card';
import { Input } from '@/components/primitives/Input';
import { Label } from '@/components/primitives/Label';
import { Textarea } from '@/components/primitives/Textarea';
import { useToast } from '@/hooks/useToast';

const CreateToken: FC = () => {
  const { back } = useRouter();
  const [showOthers, setShowOthers] = useState(false);
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      if (file.size > 3 * 1024 * 1024) {
        alert("File size should not exceed 3MB.");
        return;
      }

      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    
    if (formRef.current) {
      const imageInput = formRef.current.querySelector<HTMLInputElement>('#image');

      if (imageInput) {
        imageInput.value = '';
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-coin`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(response?.statusText || 'Something went wrong');
      }
  
      const result = await response.json();
      const { message } = result || {};

      toast({ description: message || 'Coin created successfully' });

      formRef.current?.reset();
    } catch (error) {
      toast({ description: error instanceof Error ? error.message : 'Something went wrong' });
    }
  };

  return (
    <main className="max-w-xl mx-auto px-4 mb-12">
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
            ref={formRef}
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
              {imagePreview && (
                <div className="relative bg-input w-full border border-border border-dashed rounded p-3">
                  <img
                    src={imagePreview}
                    alt="Logo"
                    className="w-auto max-w-full h-auto object-contain rounded"
                  />
                  <button type="button" className="absolute top-4 right-4 bg-foreground p-1 text-background border border-background rounded-full" onClick={handleRemoveImage}>
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <Input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
                onChange={handleImageChange} 
              />
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
    </main>
  );
};

export default CreateToken;
