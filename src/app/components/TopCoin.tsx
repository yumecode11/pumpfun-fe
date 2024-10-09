import { FC } from "react";
import { Audiowide } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PersonIcon } from "@radix-ui/react-icons";

const audiowide = Audiowide({ subsets: ["latin"], weight: '400' });

const TopCoin: FC = () => {
  return (
    <div className="text-white max-w-[360px] mx-auto grid gap-2">
      <p className="text-3xl sm:text-4xl text-foreground text-center mt-8 mb-1">
        <span className={audiowide.className}>Titan of the Top</span>
      </p>
      <Link href="/faposjflaksjdlf98932rjasjfkd2">
        <div className="p-2 sm:p-4 pl-20 sm:pl-28 border hover:border-primary gap-2 w-full overflow-hidden border-transparent bg-foreground/10 rounded-md relative">
          <Image
            alt="Lorem Ipsum Dolor Sit Amet"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="w-16 sm:w-20 h-auto block rounded absolute left-2 top-2 sm:left-4 sm:top-4"
            src="https://picsum.photos/80/80"
          />
          <div className="gap-1 grid h-fit text-left">
            <div className="text-xs text-primary flex items-center gap-1">
              <div>Created by</div>
              <button type="button">
                <span className="flex gap-1 items-center">
                  <PersonIcon />
                  <span className="px-1 text-chart-3 rounded hover:underline flex gap-1 bg-transparent">
                    LOREM
                  </span>
                </span>
              </button>
              <span>4h ago</span>
            </div>
            <div className="text-xs text-chart-1 flex gap-1">
              market cap: 4.18K
            </div>
            <p className="text-xs flex items-center text-chart-2 gap-2">replies: 103</p>
            <p className="text-sm w-full font-semibold">
              The Dog Father [ticker: GDOG]
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopCoin;
