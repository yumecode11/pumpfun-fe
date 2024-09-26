import { FC } from "react";
import { TopNav } from "@/app/components";
import { Button } from "@/components/ui/button";

import { TradeThread, TradingViewChart, TransactionForm } from "./components";
import { ArrowLeft } from "lucide-react";

const TokenDetail: FC = () => {
  return (
    <div>
      <TopNav />

      <div className="container mx-auto px-4">
        <Button variant="outline" className="my-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <TradingViewChart />

            <TradeThread />
          </div>

          <div className="col-span-1">
            <TransactionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetail;
