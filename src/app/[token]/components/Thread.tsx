import { FC } from "react";
import { User } from "lucide-react";
import Image from "next/image";
import PostReply from "./PostReply";
import { CoinReplyType } from "@/types/coin.type";

type ThreadProps = {
  data: CoinReplyType[];
};

const Thread: FC<ThreadProps> = ({ data }) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li className="border border-border p-2 rounded">
          <p className="flex items-center gap-2 text-xs text-foreground">
            <User className="h-4 w-4" />
            <span className="bg-primary text-primary-foreground rounded px-1">
              skywalker (dev)
            </span>
            <span className="text-foreground/50">9/26/2024</span>
            <span className="text-foreground/50">10:10:10 AM</span>
          </p>

          <div className="mt-2">
            <Image
              alt="Lorem Ipsum Dolor Sit Amet"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              className="float-left mr-2 rounded"
              src="https://picsum.photos/128/128"
            />

            <p className="text-sm text-foreground/80">
              <strong className="text-foreground">
                Lorem Ipsum Dolor Sit Amet (ticker: LISDIA)
              </strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>

        {(data || []).map((reply) => (
          <li key={reply._id} className="border border-border p-2 rounded">
            <p className="flex items-center gap-2 text-xs text-foreground">
              <User className="h-4 w-4" />
              <span className="bg-primary text-primary-foreground rounded px-1">
                {reply.user_id}
              </span>
              <span className="text-foreground/50">{reply.created_at}</span>
            </p>

            <div className="mt-2">
              {reply.image && (
                <Image
                  alt="reply"
                  loading="lazy"
                  width="128"
                  height="128"
                  decoding="async"
                  className="float-left mr-2 rounded"
                  src={reply.image}
                />
              )}
              <p className="text-sm text-foreground/80">{reply.message}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <PostReply btnLabel="Post a reply" />
      </div>
    </div>
  );
};

export default Thread;
