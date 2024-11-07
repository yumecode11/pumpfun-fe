"use client";

import { FC, useState } from "react";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";
import clsx from "clsx";

import { CoinType } from "@/types/coin.type";

type TransactionFormProps = {
  data: CoinType;
};

const TransactionForm: FC<TransactionFormProps> = ({ data }) => {
  const { _id } = data;
  const [isBuy, setIsBuy] = useState(true);

  return (
    <div className="w-full border border-border p-2 rounded">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={clsx(
            "flex-1 text-base rounded h-12",
            isBuy ? "bg-emerald-500" : "bg-gray-800"
          )}
          onClick={() => setIsBuy(true)}
        >
          Buy
        </button>
        <button
          type="button"
          className={clsx(
            "flex-1 text-base rounded h-12",
            !isBuy ? "bg-rose-600" : "bg-gray-800"
          )}
          onClick={() => setIsBuy(false)}
        >
          Sell
        </button>
      </div>
      <hr className="my-4" />
      {isBuy ? <BuyForm data={data} /> : <SellForm data={data} />}
    </div>
  );
};

export default TransactionForm;
