import { useState } from "react";
import { DEFAULT_PAGINATION, DEFAULT_TAB } from "../constants";
import { CoinType } from "@/types/coin.type";
import { PaginationType } from "@/types/common.type";

const useCoinList = () => {
  const [keyword, setKeyword] = useState("");
  const [coins, setCoins] = useState<CoinType[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(DEFAULT_TAB);
  const [pagination, setPagination] =
    useState<PaginationType>(DEFAULT_PAGINATION);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/coins?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const getCoins = await response.json();
      const { data } = getCoins || {};
      const { result: coins } = data || {};

      setCoins(coins || []);
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    keyword,
    setKeyword,
    coins,
    setCoins,
    loading,
    setLoading,
    tab,
    setTab,
    pagination,
    setPagination,
    fetchCoins,
  };
};

export default useCoinList;
