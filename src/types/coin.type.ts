export type CoinType = {
  _id: string;
  name: string;
  ticker: string;
  description: string;
  image: string;
  twitter: string;
  telegram: string;
  website: string;
  pubkey: string;
  market_cap: number;
  created_by: string;
  created_at: string;
  updated_at: string;
};

export type CoinReplyType = {
  _id: string;
  coin_id: string;
  user_id: string;
  message: string;
  image: string;
  created_at: string;
};

export type CoinTradeType = {
  _id: string;
  coin_id: string;
  wallet: string;
  amount_in: number;
  amount_out: string;
  tx_hash: string;
  timestamp: string;
};

export type CoinTradesArgs = {
  coin: string;
  wallet: string;
  amount: string;
};
