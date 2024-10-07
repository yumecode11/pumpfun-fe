'use client';

import { FC, FormEvent, useState } from 'react';
import { Reply, User } from 'lucide-react';
import Image from 'next/image';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/common/Dialog';
import { Button } from '@/components/primitives/Button';
import { Textarea } from '@/components/primitives/Textarea';
import { Label } from '@/components/primitives/Label';
import { Input } from '@/components/primitives/Input';

const Thread: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmitReply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.comment.value;
    const image = e.currentTarget.image.value;
    console.log('reply', { comment, image });
    
    setIsOpen(false);
  }

  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li className="border border-border p-2 rounded">
          <p className="flex items-center gap-2 text-xs text-foreground">
            <User className="h-4 w-4" />
            <span className="bg-primary text-primary-foreground rounded px-1">
              skywalker (dev)
            </span>
            <span className="text-foreground/50">9/26/2024</span>
            <span className="text-foreground/50">10:10:10 AM</span>
          </p>

          <div className="mt-2">
            <Image
              alt="Lorem Ipsum Dolor Sit Amet"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              className="float-left mr-2 rounded"
              src="https://picsum.photos/128/128"
            />

            <p className="text-sm text-foreground/80">
              <strong className="text-foreground">
                Lorem Ipsum Dolor Sit Amet (ticker: LISDIA)
              </strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>

        {[...Array(5)].map((_, i) => (
          <li key={i} className="border border-border p-2 rounded">
            <p className="flex items-center gap-2 text-xs text-foreground">
              <User className="h-4 w-4" />
              <span className="bg-primary text-primary-foreground rounded px-1">
                L0r3M1p
              </span>
              <span className="text-foreground/50">9/26/2024</span>
              <span className="text-foreground/50">10:10:10 AM</span>
            </p>

            <div className="mt-2">
              <p className="text-sm text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
        ))}

        <li>
          <Button type="button" onClick={() => setIsOpen(true)}>
            <Reply className="mr-2 h-4 w-4" />
            Post a reply
          </Button>
        </li>
      </ul>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Post a reply</DialogTitle>
          </DialogHeader>
          <form autoComplete="off" className="flex flex-col gap-4" onSubmit={handleSubmitReply}>
            <div className="grid w-full gap-2">
              <Label htmlFor="comment">Description</Label>
              <Textarea id="comment" name="comment" required />
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="image">Image (optional)</Label>
              <Input type="file" id="image" name="image" />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="submit">Submit Reply</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Thread;
