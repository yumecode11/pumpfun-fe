'use client';

import { FC, FormEvent, useState } from 'react';
import { Reply } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/common/Dialog';
import { Button } from '@/components/primitives/Button';
import { Textarea } from '@/components/primitives/Textarea';
import { Label } from '@/components/primitives/Label';
import { Input } from '@/components/primitives/Input';

type PostReplyProps = {
  btnLabel: string;
}

const PostReply: FC<PostReplyProps> = (props) => {
  const { btnLabel } = props;
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
      <Button variant="secondary" type="button" onClick={() => setIsOpen(true)}>
        <Reply className="mr-2 h-4 w-4" />
        {btnLabel}
      </Button>
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

export default PostReply;
