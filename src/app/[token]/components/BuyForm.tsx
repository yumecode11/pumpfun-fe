"use client";

import { ChangeEvent, FC, useState } from "react";
import {Input} from "@/components/primitives/Input";
import {Button} from "@/components/primitives/Button";

const BTN_CSS =
  "text-xs bg-secondary text-secondary-foreground py-1 px-2 rounded";
const DEFAULT_CURRENCY = "SOL";

const BuyForm: FC = () => {
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
    const nextCurrency = currency === DEFAULT_CURRENCY ? currencyName : DEFAULT_CURRENCY;

    setCurrency(nextCurrency);
    setValue("");
  }
  const handleSubmitBuy = () => {
    console.log(`buy ${value} ${currency}`);
    setValue("");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center flex-row-reverse justify-between">
        {currency === DEFAULT_CURRENCY ? (
          <button type="button" className={BTN_CSS} onClick={() => setValue(maxValue.toString())}>
            Set max slippage
          </button>
        ) : <div />}

        <button type="button" className={BTN_CSS} onClick={handleChangeCurrency}>
          {`Switch to ${currency === DEFAULT_CURRENCY ? currencyName : DEFAULT_CURRENCY}`}
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
        <span className="absolute right-4 top-1/2 -translate-y-1/2">{currency}</span>
      </div>

      {currency === DEFAULT_CURRENCY && (
        <div className="flex items-center gap-2">
          <button type="button" className={BTN_CSS} onClick={() => setValue("")}>
            Clear
          </button>
          <button type="button" className={BTN_CSS} onClick={() => setValue("1")}>
            {`1 ${DEFAULT_CURRENCY}`}
          </button>
          <button type="button" className={BTN_CSS} onClick={() => setValue("5")}>
            {`5 ${DEFAULT_CURRENCY}`}
          </button>
          <button type="button" className={BTN_CSS} onClick={() => setValue("10")}>
            {`10 ${DEFAULT_CURRENCY}`}
          </button>
        </div>
      )}

      <div className="mt-4">
        <Button type="button" className="w-full bg-emerald-500" onClick={handleSubmitBuy}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default BuyForm;
