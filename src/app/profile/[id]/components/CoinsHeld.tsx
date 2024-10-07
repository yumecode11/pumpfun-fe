'use client';

import { FC, FormEvent, useState } from 'react';

import { ExternalLink, Plus, RefreshCw } from 'lucide-react';

import { Button } from '@/components/primitives/Button';
import { Switch } from '@/components/primitives/Switch';
import { Label } from '@/components/primitives/Label';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/Avatar";
import PagesNavigator from '@/components/common/PageNavigator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/common/Dialog';
import { Input } from '@/components/primitives/Input';

const CoinsHeld: FC = () => {
  const [showDustCoins, setShowDustCoins] = useState(true);
  const [showAddContractAddress, setAddContractAddress] = useState(false);
  const handleSubmitContractAddress = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contractAddress = e.currentTarget.contractAddress.value;
    console.log(`add contract address ${contractAddress}`);

    setAddContractAddress(false);
  }

  return (
    <div className='pt-2'>
      <div className="flex flex-row justify-between pb-4 border-b border-border mb-4">
        <Button onClick={() => setAddContractAddress(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Coin
        </Button>

        <div className="flex items-center space-x-2">
          <Switch
            id="show-dust-coins"
            checked={showDustCoins}
            onCheckedChange={setShowDustCoins}
          />
          <Label htmlFor="show-dust-coins">Show dust coin</Label>
        </div>
      </div>

      <ul className='flex flex-col gap-4'>
        {[...Array(10)].map((_, i) => (
          <li key={i} className="flex items-center gap-4 w-full">
            <Avatar className="w-10 h-10 mx-auto">
              <AvatarImage src="https://picsum.photos/40/40" alt="" />
              <AvatarFallback>{`C${i + 1}`}</AvatarFallback>
            </Avatar>

            <p className="flex flex-col text-xs grow">
              <span>150 LRM</span>
              <span>0.00005 SOL</span>
            </p>

            <Button variant="link" className="p-0">
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh
            </Button>

            <Button variant="link" className="p-0">
              <ExternalLink className="mr-2 h-4 w-4" /> View
            </Button>
          </li>
        ))}
      </ul>

      <div className='mt-8'>
        <PagesNavigator />
      </div>

      <Dialog open={showAddContractAddress} onOpenChange={setAddContractAddress}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a coin to your portfolio</DialogTitle>
          </DialogHeader>
          <form autoComplete="off" className="flex flex-col gap-4" onSubmit={handleSubmitContractAddress}>
            <div className="grid w-full gap-2">
              <Label htmlFor="contract-address">Contract Address</Label>
              <Input type="text" id="contract-address" name="contractAddress" required />
            </div>
            <Button type="submit" className='w-full'>Submit</Button>
            <p className='text-foreground/80 text-xs text-center'>if your coin is not listed, you can add it by providing the contract address address. only coins launched on pump are supported.</p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
};

export default CoinsHeld;
