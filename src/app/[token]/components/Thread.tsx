import { PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { FC } from "react";

const Thread: FC = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="border border-border p-2 rounded">
        <p className="flex items-center gap-2 text-xs text-foreground">
          <PersonIcon className="h-4 w-4" />
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

      {[...Array(10)].map((_, i) => (
        <li key={i} className="border border-border p-2 rounded">
          <p className="flex items-center gap-2 text-xs text-foreground">
            <PersonIcon className="h-4 w-4" />
            <span className="bg-primary text-primary-foreground rounded px-1">
              L0r3M1p
            </span>
            <span className="text-foreground/50">9/26/2024</span>
            <span className="text-foreground/50">10:10:10 AM</span>
          </p>

          <div className="mt-2">
            <p className="text-sm text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Thread;
