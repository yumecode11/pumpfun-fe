'use client';

import { FC, useState } from 'react';

import { ExternalLink, Plus, RefreshCw } from 'lucide-react';

import { Button } from '@/components/primitives/Button';
import { Switch } from '@/components/primitives/Switch';
import { Label } from '@/components/primitives/Label';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/Avatar";
import PagesNavigator from '@/components/common/PageNavigator';

const CoinsHeld: FC = () => {
  const [showDustCoins, setShowDustCoins] = useState(true);

  return (
    <div className='pt-2'>
      <div className="flex flex-row justify-between pb-4 border-b border-border mb-4">
        <Button>
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
    </div>
  )
};

export default CoinsHeld;
