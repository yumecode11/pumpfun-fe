import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/app/images/logo.png";
import { ListItems } from "./components";

export default function Home() {
  return (
    <main>
      <nav className="flex flex-wrap justify-between w-full p-2 items-start h-fit">
        <div className="flex gap-2 items-center">
          <a href="/board">
            <Image
              alt="Pump"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              data-nimg="1"
              className="mr-4"
              style={{ color: "transparent" }}
              src={logo}
            />
          </a>
          <div className="grid h-fit">
            <div className="flex gap-2">
              <a
                className="text-sm text-white hover:underline hover:font-bold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                [twitter]
              </a>
              <a
                className="text-sm text-white hover:underline hover:font-bold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                [support]
              </a>
            </div>
            <div className="flex gap-2">
              <a
                className="text-sm text-white hover:underline hover:font-bold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                [telegram]
              </a>
              <button
                className="text-sm text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r0:"
                data-state="closed"
              >
                [how it works]
              </button>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="p-2 rounded flex items-center gap-1 text-sm bg-red-500">
              <a href="#">
                <span className="flex gap-1 items-center">
                  <span
                    className="px-1 rounded hover:underline flex gap-1"
                    style={{ backgroundColor: "transparent" }}
                  >
                    LoremIpsum
                  </span>
                </span>
              </a>
              sold 1.0329 SOL of
              <a className="hover:underline flex gap-2" href="#">
                wisp
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex md:gap-2 grid gap-1">
          <div className="grid justify-items-end">
            <button
              className="text-sm text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r3:"
              data-state="closed"
            >
              [connect wallet]
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center w-full mt-4">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50"
          href="/create"
        >
          [start a new coin]
        </a>
        <div className="text-white max-w-[800px] grid gap-2">
          <Image
            alt="lorem ipsum dolor"
            loading="lazy"
            width="166"
            height="32"
            decoding="async"
            className="h-8 justify-self-center"
            src="https://picsum.photos/166/32"
            style={{ color: "transparent" }}
          />
          <a href="#">
            <div className="p-2 flex border hover:border-white gap-2 w-full max-h-[300px] overflow-hidden border-transparent">
              <div className="min-w-20">
                <Image
                  alt="The Dog Father"
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
                <div className="text-xs text-blue-200 flex items-center gap-2">
                  <div>Created by</div>
                  <button type="button">
                    <span className="flex gap-1 items-center">
                      <Image
                        alt=""
                        loading="lazy"
                        width="16"
                        height="16"
                        decoding="async"
                        className="w-4 h-4 rounded"
                        src="https://picsum.photos/16/16"
                        style={{ color: "transparent", display: "block" }}
                      />
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
                <div className="text-xs text-green-300 flex gap-1">
                  market cap: 4.18K
                  <div className="flex text-green-500">
                    [badge:
                    <div>
                      <div>
                        <div
                          className="cursor-pointer hover:opacity-7"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r7a:"
                          data-state="closed"
                        >
                          <Image
                            alt="king of the hill badge"
                            loading="lazy"
                            width="18"
                            height="18"
                            decoding="async"
                            src="https://picsum.photos/18/18"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                    </div>
                    ]
                  </div>
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

      <div className="grid px-2 sm:p-0 justify-center w-[95vw] my-12">
        <div
          className="grid gap-2 w-[90vw] max-w-[450px]"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          <input
            className="flex h-10 rounded-md text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 p-2 border border-gray-300 w-full bg-green-300 text-black border-none focus:border-none active:border-none"
            placeholder="search for token"
            type="search"
          />
          <button className="bg-green-300 text-black p-2 rounded hover:bg-green-500">
            search
          </button>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="terminal" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="following">Following</TabsTrigger>
            <TabsTrigger value="terminal">Terminal</TabsTrigger>
          </TabsList>
          <TabsContent value="following">
            <ListItems />
          </TabsContent>
          <TabsContent value="terminal">
            <ListItems />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
