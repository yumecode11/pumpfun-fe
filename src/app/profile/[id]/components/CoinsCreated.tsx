import { FC } from "react";

import Coin from "@/app/components/Coin";
import { DEFAULT_PAGINATION, DUMMY_ITEMS } from "@/app/constants";
import PagesNavigator from "@/components/common/PageNavigator";

const CoinsCreated: FC = () => {
  return (
    <div className="pt-2">
      <div className="grid grid-col-1 gap-4">
        {DUMMY_ITEMS.map((item) => (
          <Coin key={item._id} {...item} />
        ))}
      </div>

      <div className="mt-8">
        <PagesNavigator pagination={DEFAULT_PAGINATION} />
      </div>
    </div>
  );
};

export default CoinsCreated;
