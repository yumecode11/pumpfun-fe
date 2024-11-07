import { CoinType } from "@/types/coin.type";
import { PaginationType } from "@/types/common.type";

export const TAB_ITEMS = [
  {
    id: "following",
    title: "Following",
  },
  {
    id: "terminal",
    title: "Terminal",
  },
];
export const DEFAULT_TAB = TAB_ITEMS[1].id;
export const DEFAULT_PAGINATION: PaginationType = {
  currentPage: 1,
  pageSize: 48,
  totalItems: 0,
  totalPages: 0,
};
export const DUMMY_ITEMS: CoinType[] = [
  {
    _id: "faposjflaksjdlf98932rjasjfkd1",
    image: "https://picsum.photos/128/128",
    name: "Lorem Ipsum Dolor Sit Amet",
    ticker: "LisDia",
    created_by: "LOREMS",
    created_at: "2h ago",
    updated_at: "2h ago",
    market_cap: 10000,
    description: "Lorem ipsum dolor lalala sit amet noto",
    telegram: "https://www.telegram.com",
    twitter: "https://www.twitter.com",
    website: "https://www.website.com",
    pubkey: "loremipsumpubkey1",
  },
  {
    _id: "faposjflaksjdlf98932rjasjfkd2",
    image: "https://picsum.photos/128/128",
    name: "Sit Amet",
    ticker: "SitAmet",
    created_by: "LOREMS",
    created_at: "2h ago",
    updated_at: "2h ago",
    market_cap: 10000,
    description: "Lorem ipsum dolor lalala sit amet noto",
    telegram: "https://www.telegram.com",
    twitter: "https://www.twitter.com",
    website: "https://www.website.com",
    pubkey: "loremipsumpubkey1",
  },
];
