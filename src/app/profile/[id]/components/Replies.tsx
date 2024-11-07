import { FC } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/Avatar";
import PagesNavigator from "@/components/common/PageNavigator";
import clsx from "clsx";
import PostReply from "@/app/[token]/components/PostReply";
import { DEFAULT_PAGINATION } from "@/app/constants";

const Replies: FC = () => {
  return (
    <div className="pt-2">
      <ul>
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="relative pl-14 w-full border-t border-border pt-4 mt-4 first:border-0 first:pt-0 first:mt-0"
          >
            <Avatar
              className={clsx(
                "w-10 h-10 absolute left-0 top-0",
                i === 0 ? "top-0" : "top-4"
              )}
            >
              <AvatarImage src="https://picsum.photos/40/40" alt="" />
              <AvatarFallback>{`C${i + 1}`}</AvatarFallback>
            </Avatar>

            <p className="flex flex-col text-xs grow mb-4">
              <span className="text-foreground font-semibold text-sm block">
                Lorem Ipsum
              </span>
              <span className="text-foreground/80 text-xs mt-1 block">
                Fusce ac dignissim erat. Morbi tristique dolor nec rhoncus
                dignissim. Vestibulum consectetur placerat quam ac laoreet.
                Fusce dictum ut massa vel molestie. Curabitur ac mauris sed
                augue molestie dapibus in in nisl.
              </span>
              <span className="text-foreground/50 text-xs mt-1 block">
                10/6/2024 10:10:10 AM
              </span>
            </p>

            <PostReply btnLabel="Reply" />
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PagesNavigator pagination={DEFAULT_PAGINATION} />
      </div>
    </div>
  );
};

export default Replies;
