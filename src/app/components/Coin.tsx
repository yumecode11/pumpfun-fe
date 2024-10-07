import type { FC } from "react";

import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";

type ListItemsProps = {
  slug: string;
  imgUrl: string;
  name: string;
  ticker: string;
  userName: string;
  created: string;
  marketCap: number;
  replies: number;
  text: string;
};

const ListItems: FC<ListItemsProps> = (props) => {
  const {
    slug,
    imgUrl,
    name,
    ticker,
    userName,
    created,
    marketCap,
    replies,
    text,
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
          src={imgUrl}
        />
        <div className="gap-1 grid h-fit">
          <div className="text-xs text-foreground flex flex-wrap items-center gap-1">
            <div className="flex items-center gap-1">
              <div>Created by</div>
              <button type="button" className="hover:underline text-chart-3">
                {userName}
              </button>
            </div>
            <span className="w-full md:w-auto">{created}</span>
          </div>
          <div className="text-xs text-chart-1 flex gap-1">
            {`market cap: ${marketCap}`}
          </div>
          <p className="text-xs flex items-center gap-2 text-chart-2">{`replies: ${replies}`}</p>
          <p className="text-sm w-full text-foreground break-words font-bold">
            {name} (ticker: {ticker})
          </p>
          <p className="text-xs w-full text-foreground/80 break-words line-clamp-3">
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ListItems;
