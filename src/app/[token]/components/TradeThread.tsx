import { FC } from "react";

import Thread from "./Thread";
import Trades from "./Trades";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/primitives/Tabs";

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

const TradeThread: FC = () => {
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
          {tab.id === "thread" && <Thread />}
          {tab.id === "trades" && <Trades />}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TradeThread;
