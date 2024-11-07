"use client";

import { ChangeEvent, FC, useState } from "react";

import { Input } from "@/components/primitives/Input";
import { Button } from "@/components/primitives/Button";
import { CoinTradesArgs, CoinType } from "@/types/coin.type";
import useSession from "@/hooks/useSession";
import { useToast } from "@/hooks/useToast";

type SellFormProps = {
  data: CoinType;
};

const BTN_CSS =
  "text-xs bg-secondary text-secondary-foreground py-1 px-2 rounded";

const SellForm: FC<SellFormProps> = ({ data }) => {
  const { _id: coinId } = data;
  const { data: session } = useSession();
  const { toast } = useToast();
  const { wallet } = session || {};
  const [value, setValue] = useState("");
  const maxValue = 123;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };
  const handleShortCut = (value: number) => {
    const nextVal = (value / 100) * maxValue;
    setValue(nextVal.toString());
  };
  const handleSubmitSell = async () => {
    const tradeData: CoinTradesArgs = {
      coin: coinId,
      wallet,
      amount: value,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sell`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tradeData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({ description: "Sell transaction success." });
      } else {
        toast({ description: `Error: ${result.message}` });
      }
    } catch (error) {
      toast({ description: `Ups! Something went wrong: ${error}` });
      console.error("Something went wrong with the request:", error);
    } finally {
      setValue("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center flex-row-reverse justify-between">
        <button
          type="button"
          className={BTN_CSS}
          onClick={() => handleShortCut(100)}
        >
          Set max slippage
        </button>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder="0.0"
          className="border-border"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2">LOREM</span>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" className={BTN_CSS} onClick={() => setValue("")}>
          Clear
        </button>
        <button
          type="button"
          className={BTN_CSS}
          onClick={() => handleShortCut(25)}
        >
          25%
        </button>
        <button
          type="button"
          className={BTN_CSS}
          onClick={() => handleShortCut(50)}
        >
          50%
        </button>
        <button
          type="button"
          className={BTN_CSS}
          onClick={() => handleShortCut(75)}
        >
          75%
        </button>
        <button
          type="button"
          className={BTN_CSS}
          onClick={() => handleShortCut(100)}
        >
          100%
        </button>
      </div>

      <div className="mt-4">
        <Button
          type="button"
          className="w-full bg-rose-600"
          onClick={handleSubmitSell}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default SellForm;
