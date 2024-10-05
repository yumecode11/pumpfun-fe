import { FC } from "react";
import { Audiowide } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PersonIcon } from "@radix-ui/react-icons";

const audiowide = Audiowide({ subsets: ["latin"], weight: '400' });

const TopCoin: FC = () => {
  return (
    <div className="text-white max-w-[800px] grid gap-2">
      <p className="text-4xl text-foreground text-center mt-8 mb-1">
        <span className={audiowide.className}>Titan of the Top</span>
      </p>
      <Link href="/faposjflaksjdlf98932rjasjfkd2">
        <div className="p-4 flex border hover:border-primary gap-2 w-full max-h-[300px] overflow-hidden border-transparent bg-foreground/10 rounded-md">
          <div className="min-w-20">
            <Image
              alt="Lorem Ipsum Dolor Sit Amet"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              className="mr-4 w-20 h-auto block"
              src="https://picsum.photos/80/80"
            />
          </div>
          <div className="gap-1 grid h-fit">
            <div className="text-xs text-primary flex items-center gap-2">
              <div>Created by</div>
              <button type="button">
                <span className="flex gap-1 items-center">
                  <PersonIcon />
                  <span className="px-1 rounded hover:underline flex gap-1 bg-transparent">
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
      </Link>
    </div>
  );
};

export default TopCoin;
