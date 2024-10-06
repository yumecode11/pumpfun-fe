'use client';

import { FC, useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/Tabs";
import Coin from "@/app/components/Coin";
import PageNavigator from "@/components/common/PageNavigator";
import Filter from "@/app/components/Filter";

import { DEFAULT_TAB, DUMMY_ITEMS, TAB_ITEMS } from "../constants";
import UsersToFollow from './UsersToFollow';

const CoinList: FC = () => {
  const [tab, setTab] = useState(DEFAULT_TAB);

  return (
    <div className="container mx-auto">
      <Tabs
        defaultValue={DEFAULT_TAB}
        onValueChange={setTab}
        value={tab}
        className="w-full"
      >
        <div className='px-4'>
          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <TabsList>
                {TAB_ITEMS.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id}>
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            

            {tab === "terminal" && <Filter />}
          </div>

          <hr className='mt-4' />
        </div>

        <div className='px-2'>
          {TAB_ITEMS.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.id === 'following' && <UsersToFollow />}
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {DUMMY_ITEMS.map((item) => (
                  <Coin key={item.slug} {...item} />
                ))}
              </div>
              <div className="py-12">
                <PageNavigator />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default CoinList;
