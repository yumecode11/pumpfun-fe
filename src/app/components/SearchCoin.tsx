import type { FC } from "react";

import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";

const SearchCoin: FC = () => {
  return (
    <div className="flex w-full max-w-md px-4 items-center gap-2 my-12 mx-auto">
      <Input type="text" placeholder="Search for coin" />
      <Button type="button">Search</Button>
    </div>
  );
};

export default SearchCoin;
