import { FC } from 'react';

import Coin from '@/app/components/Coin';
import { DUMMY_ITEMS } from '@/app/constants';
import PagesNavigator from '@/components/common/PageNavigator';

const CoinsCreated: FC = () => {
  return (
    <div className="pt-2">
      <div className="grid grid-col-1 gap-4">
        {DUMMY_ITEMS.map((item) => (
          <Coin key={item.slug} {...item} />
        ))}
      </div>

      <div className='mt-8'>
        <PagesNavigator />
      </div>
    </div>
  )
};

export default CoinsCreated;
