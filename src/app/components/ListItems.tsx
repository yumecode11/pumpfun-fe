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

const ListItems = (props: ListItemsProps) => {
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
      <div className="max-h-[300px] overflow-hidden h-fit p-2 flex border hover:border-white gap-2 w-full border-transparent">
        <div className="min-w-32 relative self-start">
          <Image
            alt={name}
            loading="lazy"
            width="128"
            height="128"
            decoding="async"
            className="mr-4 w-32 h-auto block"
            src={imgUrl}
          />
        </div>
        <div className="gap-1 grid h-fit">
          <div className="text-xs text-foreground flex flex-wrap items-center gap-1">
            <div className="flex items-center gap-1">
              <div>Created by</div>
              <button type="button">
                <span className="flex gap-1 items-center">
                  <PersonIcon />
                  <span className="px-1 rounded hover:underline flex gap-1 bg-transparent">
                    {userName}
                  </span>
                </span>
              </button>
            </div>
            <span className="w-full md:w-auto">{created}</span>
          </div>
          <div className="text-xs text-green-300 flex gap-1">
            {`market cap: ${marketCap}`}
          </div>
          <p className="text-xs flex items-center gap-2">{`replies: ${replies}`}</p>
          <p
            className="text-sm w-full"
            style={{ overflowWrap: "break-word", wordBreak: "break-all" }}
          >
            <span className="font-bold">
              {name} (ticker: {ticker}):{" "}
            </span>
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ListItems;
