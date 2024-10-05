import { FC, Suspense } from "react";

import { DEFAULT_TAB, DUMMY_ITEMS, TAB_ITEMS } from "./constants";
import TopNav from "@/components/common/TopNav";
import SearchToken from "@/app/components/SearchToken";
import {Tabs, TabsContent} from "@/components/primitives/Tabs";
import ListItems from "@/app/components/ListItems";
import PageNavigator from "@/components/common/PageNavigator";
import Footer from "@/components/common/Footer";
import Filter from "@/app/components/Filter";
import Link from "next/link";
import TopCoin from "./components/TopCoin";

const Home: FC = () => {
  return (
    <div>
      <TopNav />

      <div className="flex flex-col items-center w-full mt-4">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50"
          href="/create"
        >
          [start a new coin]
        </Link>
        
        <TopCoin />
      </div>

      <SearchToken />

      <div className="p-4">
        <Tabs defaultValue={DEFAULT_TAB} className="w-full">
          <Filter />

          {TAB_ITEMS.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 text-gray-400 gap-4">
                {DUMMY_ITEMS.map((item) => (
                  <ListItems key={item.slug} {...item} />
                ))}
              </div>
              <div className="py-12">
                <PageNavigator />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

const HomePage: FC = () => {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
};

export default HomePage;
