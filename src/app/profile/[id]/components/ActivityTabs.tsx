import { FC } from "react";

import { Button } from "@/components/primitives/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/Tabs";
import { Switch } from "@/components/primitives/Switch";
import { Label } from "@/components/primitives/Label";
import CoinsHeld from "./CoinsHeld";
import Replies from "./Replies";
import Notifications from "./Notifications";
import CoinsCreated from "./CoinsCreated";

const ACTIVITY_TABS = [
  {
    id: "coinsHeld",
    title: "Coins Held",
  },
  {
    id: "replies",
    title: "Replies",
  },
  {
    id: "notifications",
    title: "Notifications",
  },
  {
    id: "coinsCreated",
    title: "Coins Created",
  },
];

const ActivityTabs: FC = () => {
  return (
    <Tabs defaultValue={ACTIVITY_TABS[0].id} className="max-w-screen-sm mx-auto">
      <TabsList className="grid w-full grid-cols-4">
        {ACTIVITY_TABS.map(tab => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {ACTIVITY_TABS.map(tab => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.id === "coinsHeld" && <CoinsHeld />}
          {tab.id === "replies" && <Replies />}
          {tab.id === "notifications" && <Notifications />}
          {tab.id === "coinsCreated" && <CoinsCreated />}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ActivityTabs;
