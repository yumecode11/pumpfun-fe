import type { FC } from "react";

import Image from "next/image";
import { CoinType } from "@/types/coin.type";

const CoinItem: FC<CoinType> = (props) => {
  const {
    _id: slug,
    image,
    name,
    ticker,
    created_by,
    created_at,
    market_cap,
    description,
  } = props;

  return (
    <a href={`/${slug}`}>
      <div className="min-h-[146px] overflow-hidden pl-28 sm:pl-36 p-2 relative border hover:border-primary hover:bg-primary/10 gap-2 w-full border-transparent rounded-md">
        <Image
          alt={name}
          loading="lazy"
          width="128"
          height="128"
          decoding="async"
          className="w-24 sm:w-32 h-auto block rounded absolute left-2 top-2"
          src={image}
        />
        <div className="gap-1 grid h-fit">
          <div className="text-xs text-foreground flex flex-wrap items-center gap-1">
            <div className="flex items-center gap-1">
              <div>Created by</div>
              <button type="button" className="hover:underline text-chart-3">
                {created_by}
              </button>
            </div>
            <span className="w-full md:w-auto">{created_at}</span>
          </div>
          <div className="text-xs text-chart-1 flex gap-1">
            {`market cap: ${market_cap}`}
          </div>
          <p className="text-xs flex items-center gap-2 text-chart-2">{`replies: 0`}</p>
          <p className="text-sm w-full text-foreground break-words font-bold">
            {name} (ticker: {ticker})
          </p>
          <p className="text-xs w-full text-foreground/80 break-words line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CoinItem;
