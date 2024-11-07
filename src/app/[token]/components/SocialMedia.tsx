import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import { CoinType } from "@/types/coin.type";

type SocialMediaProps = {
  data: CoinType;
};

const SocialMedia: FC<SocialMediaProps> = ({ data }) => {
  const { twitter, telegram, website } = data;

  if (!twitter && !telegram && !website) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {twitter && (
        <Link href={twitter} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" type="button">
            Twitter
          </Button>
        </Link>
      )}
      {telegram && (
        <Link href={telegram} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" type="button">
            Telegram
          </Button>
        </Link>
      )}
      {website && (
        <Link href={website} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" type="button">
            Website
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SocialMedia;
