import { FC } from "react";

import Image from "next/image";
import { Progress } from "@/components/primitives/Progress";
import { CoinType } from "@/types/coin.type";

type TokenProfileProps = {
  data: CoinType;
};

const TokenProfile: FC<TokenProfileProps> = ({ data }) => {
  const DUMMY_BONDING_CURVE = 88;
  const { description, image, name } = data;

  return (
    <div className="flex flex-col gap-4">
      <p className="relative text-sm text-foreground/80">
        <Image
          alt={name}
          loading="lazy"
          width="128"
          height="128"
          decoding="async"
          className="mr-4 float-left rounded"
          src={image}
        />
        <strong className="text-foreground">{name}</strong>
        <br />
        {description}
      </p>

      <div className="mt-4">
        <p className="text-sm mb-1">Bonding curve: {DUMMY_BONDING_CURVE}%</p>
        <Progress value={DUMMY_BONDING_CURVE} className="[&>*]:bg-chart-1" />
        <p className="text-xs mt-4 text-foreground/80">
          when the market cap reaches $65,522 all the liquidity from the bonding
          curve will be deposited into Raydium and burned. progression increases
          as the price goes up.
        </p>

        <p className="text-xs mt-4 text-foreground/80">
          There are 736,112,759 tokens still available for sale in the bonding
          curve and there is 1.683 SOL in the bonding curve.
        </p>
      </div>

      <div className="mt-4">
        <p className="text-sm mb-1">Titan of the top progress: 55%</p>
        <Progress value={55} className="[&>*]:bg-chart-2" />
        <p className="text-xs mt-4 text-foreground/80">
          Dethrone the current titan at a $31,608 mcap
        </p>
      </div>
    </div>
  );
};

export default TokenProfile;
