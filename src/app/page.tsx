import Image from "next/image";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Filter,
  Footer,
  ListItems,
  PageNavigator,
  SearchToken,
  TopNav,
} from "./components";
import { DEFAULT_TAB, DUMMY_ITEMS, TAB_ITEMS } from "./constants";
import { PersonIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <TopNav />

      <div className="flex flex-col items-center w-full mt-4">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50"
          href="/create"
        >
          [start a new coin]
        </a>
        <div className="text-white max-w-[800px] grid gap-2">
          <p className="audiowide-regular text-4xl text-foreground text-center mt-8 mb-1">
            Titan of the Top
          </p>
          <a href="#">
            <div className="p-4 flex border hover:border-primary gap-2 w-full max-h-[300px] overflow-hidden border-transparent bg-foreground/10 rounded-md">
              <div className="min-w-20">
                <Image
                  alt="Lorem Ipsum Dolor Sit Amet"
                  loading="lazy"
                  width="200"
                  height="200"
                  decoding="async"
                  className="mr-4 w-20 h-auto"
                  src="https://picsum.photos/80/80"
                  style={{ color: "transparent", display: "block" }}
                />
              </div>
              <div className="gap-1 grid h-fit">
                <div className="text-xs text-primary flex items-center gap-2">
                  <div>Created by</div>
                  <button type="button">
                    <span className="flex gap-1 items-center">
                      <PersonIcon />
                      <span
                        className="px-1 rounded hover:underline flex gap-1"
                        style={{ backgroundColor: "transparent" }}
                      >
                        LOREM
                      </span>
                    </span>
                  </button>
                  <span>4h ago</span>
                </div>
                <div className="text-xs text-primary flex gap-1">
                  market cap: 4.18K
                </div>
                <p className="text-xs flex items-center gap-2">replies: 103</p>
                <p className="text-sm w-full font-bold">
                  The Dog Father [ticker: GDOG]
                </p>
              </div>
            </div>
          </a>
        </div>
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
    </main>
  );
}
