import type { FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchToken: FC = () => {
  return (
    <div className="flex w-full max-w-md px-4 items-center gap-2 my-12 mx-auto">
      <Input type="text" placeholder="Search for token" />
      <Button type="button">Search</Button>
    </div>
  );
};

export default SearchToken;
