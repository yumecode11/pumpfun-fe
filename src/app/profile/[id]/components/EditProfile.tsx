'use client';

import { FC, FormEvent } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/common/Dialog';
import { Button } from '@/components/primitives/Button';
import { Label } from '@/components/primitives/Label';
import { Input } from '@/components/primitives/Input';

type EditProfileProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
const EditProfile: FC<EditProfileProps> = (props) => {
  const { isOpen, onOpenChange } = props;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    const profilePhoto = formData.get('profilePhoto');
    const username = formData.get('username');
    const bio = formData.get('bio');
    
    console.log({ profilePhoto, username, bio });
    
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <form autoComplete="off" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid w-full gap-2">
            <Label htmlFor="profile-photo">Profile photo</Label>
            <Input type="file" id="profile-photo" name="profilePhoto" accept="image/*" />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" required />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Input type="text" id="bio" name="bio" />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Update profile</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
