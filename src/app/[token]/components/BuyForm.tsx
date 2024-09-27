"use client";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BTN_CSS =
  "text-xs bg-secondary text-secondary-foreground py-1 px-2 rounded";

const BuyForm: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center flex-row-reverse justify-between">
        <button type="button" className={BTN_CSS}>
          Set max slippage
        </button>

        <button type="button" className={BTN_CSS}>
          Switch to LOREM
        </button>
      </div>

      <div className="relative">
        <Input type="text" placeholder="0.0" className="border-border" />
        <span className="absolute right-4 top-1/2 -translate-y-1/2">SOL</span>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" className={BTN_CSS}>
          Clear
        </button>
        <button type="button" className={BTN_CSS}>
          1 SOL
        </button>
        <button type="button" className={BTN_CSS}>
          5 SOL
        </button>
        <button type="button" className={BTN_CSS}>
          10 SOL
        </button>
      </div>

      <div className="mt-4">
        <Button type="button" className="w-full bg-emerald-500">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default BuyForm;
