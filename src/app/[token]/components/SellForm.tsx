import { FC } from "react";
import {Input} from "@/components/primitives/Input";
import {Button} from "@/components/primitives/Button";

const BTN_CSS =
  "text-xs bg-secondary text-secondary-foreground py-1 px-2 rounded";

const SellForm: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center flex-row-reverse justify-between">
        <button type="button" className={BTN_CSS}>
          Set max slippage
        </button>
      </div>

      <div className="relative">
        <Input type="text" placeholder="0.0" className="border-border" />
        <span className="absolute right-4 top-1/2 -translate-y-1/2">LOREM</span>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" className={BTN_CSS}>
          Clear
        </button>
        <button type="button" className={BTN_CSS}>
          25%
        </button>
        <button type="button" className={BTN_CSS}>
          50%
        </button>
        <button type="button" className={BTN_CSS}>
          75%
        </button>
        <button type="button" className={BTN_CSS}>
          100%
        </button>
      </div>

      <div className="mt-4">
        <Button type="button" className="w-full bg-rose-600">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default SellForm;
