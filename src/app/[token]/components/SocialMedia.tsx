import { FC } from "react";

import { Button } from "@/components/ui/button";

const SocialMedia: FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="secondary">Twitter</Button>
      <Button variant="secondary">Telegram</Button>
      <Button variant="secondary">Website</Button>
    </div>
  );
};

export default SocialMedia;
