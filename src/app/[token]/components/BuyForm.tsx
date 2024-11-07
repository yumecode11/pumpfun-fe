"use client";

import { ChangeEvent, FC, useState } from "react";
import { Input } from "@/components/primitives/Input";
import { Button } from "@/components/primitives/Button";
import { CoinTradesArgs, CoinType } from "@/types/coin.type";
import useSession from "@/hooks/useSession";
import { useToast } from "@/hooks/useToast";

type BuyFormProps = {
  data: CoinType;
};

const BTN_CSS =
  "text-xs bg-secondary text-secondary-foreground py-1 px-2 rounded";
const DEFAULT_CURRENCY = "SOL";

const BuyForm: FC<BuyFormProps> = ({ data }) => {
  const { _id: coinId } = data;
  const { data: session } = useSession();
  const { toast } = useToast();
  const { wallet } = session || {};
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const maxValue = 123;
  const currencyName = "LOREM";
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };
  const handleChangeCurrency = () => {
    const nextCurrency =
      currency === DEFAULT_CURRENCY ? currencyName : DEFAULT_CURRENCY;

    setCurrency(nextCurrency);
    setValue("");
  };
  const handleSubmitBuy = async () => {
    const tradeData: CoinTradesArgs = {
      coin: coinId,
      wallet,
      amount: value,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buy`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tradeData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({ description: "Buy transaction success." });
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
        {currency === DEFAULT_CURRENCY ? (
          <button
            type="button"
            className={BTN_CSS}
            onClick={() => setValue(maxValue.toString())}
          >
            Set max slippage
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          className={BTN_CSS}
          onClick={handleChangeCurrency}
        >
          {`Switch to ${
            currency === DEFAULT_CURRENCY ? currencyName : DEFAULT_CURRENCY
          }`}
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
        <span className="absolute right-4 top-1/2 -translate-y-1/2">
          {currency}
        </span>
      </div>

      {currency === DEFAULT_CURRENCY && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={BTN_CSS}
            onClick={() => setValue("")}
          >
            Clear
          </button>
          <button
            type="button"
            className={BTN_CSS}
            onClick={() => setValue("1")}
          >
            {`1 ${DEFAULT_CURRENCY}`}
          </button>
          <button
            type="button"
            className={BTN_CSS}
            onClick={() => setValue("5")}
          >
            {`5 ${DEFAULT_CURRENCY}`}
          </button>
          <button
            type="button"
            className={BTN_CSS}
            onClick={() => setValue("10")}
          >
            {`10 ${DEFAULT_CURRENCY}`}
          </button>
        </div>
      )}

      <div className="mt-4">
        <Button
          type="button"
          className="w-full bg-emerald-500"
          onClick={handleSubmitBuy}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default BuyForm;
