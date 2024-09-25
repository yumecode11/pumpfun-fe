import type { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex flex-col-reverse gap-8 py-8 flex-wrap justify-between w-full p-2 items-start h-fit bg-muted p-4 text-muted-foreground">
      <p className="w-full text-sm text-center">
        &copy; loremipsum {new Date().getFullYear()}
      </p>
      <div className="flex gap-8 items-center justify-around w-full">
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
