import type { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex flex-wrap justify-between w-full p-2 items-start h-fit bg-muted p-4 text-muted-foreground">
      <p className="flex gap-2 items-center text-sm">
        &copy; loremipsum {new Date().getFullYear()}
      </p>
      <div className="flex gap-8 items-center">
        <a
          className="text-sm text-white hover:underline hover:font-bold"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          [twitter]
        </a>
        <a
          className="text-sm text-white hover:underline hover:font-bold"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          [telegram]
        </a>
        <a
          className="text-sm text-white hover:underline hover:font-bold"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          [support]
        </a>
      </div>
    </div>
  );
};

export default Footer;
