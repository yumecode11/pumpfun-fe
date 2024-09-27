"use client";

import { FC } from "react";

import { useRouter } from "next/navigation";

import { Footer, TopNav } from "@/app/components";
import { Button } from "@/components/ui/button";

import {
  HolderDistribution,
  SocialMedia,
  TokenProfile,
  TradeThread,
  TradingViewChart,
  TransactionForm,
} from "./components";
import { ArrowLeft } from "lucide-react";

const TokenDetail: FC = () => {
  const { back } = useRouter();

  return (
    <div>
      <TopNav />

      <div className="container mx-auto px-4 mb-12">
        <Button variant="outline" className="my-4" onClick={back}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="order-last md:order-none lg:col-span-2">
            <TradingViewChart />

            <TradeThread />
          </div>

          <div className="col-span-1">
            <TransactionForm />

            <div className="hidden md:flex mt-12 flex-col gap-4">
              <SocialMedia />

              <TokenProfile />

              <HolderDistribution />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TokenDetail;
