'use client';

import { FC } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/common/Dialog';

const HolderDistribution: FC = () => {
  return (
    <div className="text-sm">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-base font-semibold">Holder Distribution</p>

        <Dialog>
          <DialogTrigger>
            <button type="button" className="text-sm text-foreground/80 py-1 px-2 border border-border rounded-full">
              View Bubble Map
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Bubble Map</DialogTitle>
            </DialogHeader>
            <div className="min-h-[300px] w-full bg-card" />
          </DialogContent>
        </Dialog>
      </div>

      <ul className="mt-2 flex flex-col gap-2 text-foreground/80">
        {[...Array(20)].map((_, i) => (
          <li key={i} className="flex items-center justify-between">
            <span>L012eM</span>
            <span>5%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolderDistribution;
