import { FC } from "react";

import Thread from "./Thread";
import Trades from "./Trades";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/primitives/Tabs";
import { CoinReplyType, CoinTradeType } from "@/types/coin.type";

const TAB_ITEMS = [
  {
    id: "thread",
    title: "Thread",
  },
  {
    id: "trades",
    title: "Trades",
  },
];

type TradeThreadProps = {
  trades: CoinTradeType[];
  threads: CoinReplyType[];
};

const TradeThread: FC<TradeThreadProps> = ({ trades, threads }) => {
  return (
    <Tabs defaultValue={TAB_ITEMS[0].id} className="mt-4">
      <TabsList>
        {TAB_ITEMS.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {TAB_ITEMS.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.id === "thread" && <Thread data={threads} />}
          {tab.id === "trades" && <Trades data={trades} />}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TradeThread;
