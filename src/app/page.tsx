import { FC, Suspense } from "react";

import SearchCoin from "@/app/components/SearchCoin";
import Link from "next/link";
import TopCoin from "./components/TopCoin";
import CoinList from "./components/CoinList";

const Home: FC = () => {
  return (
    <main>
      <div className="w-full mt-4 px-4 text-center">
        <Link
          className="whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50"
          href="/create"
        >
          [start a new coin]
        </Link>
        
        <TopCoin />
      </div>

      <SearchCoin />

      <CoinList />
    </main>
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
