import { notFound } from "next/navigation";

import {
  BackBtn,
  HolderDistribution,
  SocialMedia,
  TokenProfile,
  TradeThread,
  TradingViewChart,
  TransactionForm,
} from "./components";

type CoinDetailProps = {
  params: { token: string };
};

async function getCoinData(token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/coins/${token}`
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data;
}

export default async function CoinDetailPage({ params }: CoinDetailProps) {
  const { token } = params;
  const coinData = await getCoinData(token);

  if (!coinData) {
    notFound();
  }

  const { data } = coinData || {};
  const { coin, trades, threads } = data || {};

  return (
    <main className="container mx-auto px-4 mb-12">
      <BackBtn />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="order-last md:order-none lg:col-span-2">
          <TradingViewChart />

          <TradeThread trades={trades} threads={threads} />
        </div>

        <div className="col-span-1">
          <TransactionForm data={coin} />

          <div className="hidden md:flex mt-12 flex-col gap-4">
            <SocialMedia data={coin} />

            <TokenProfile data={coin} />

            <HolderDistribution />
          </div>
        </div>
      </div>
    </main>
  );
}
