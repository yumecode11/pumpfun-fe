import Image from "next/image";

const ListItems = () => {
  return (
    <a href="/ksQxz4oWXnAgRCwAu4vvCqdHT4jyNjh6KZ1AAKepump">
      <div className="max-h-[300px] overflow-hidden h-fit p-2 flex border hover:border-white gap-2 w-full border-transparent">
        <div className="min-w-32 relative self-start">
          <Image
            alt="Lorem ipsum dolor"
            loading="lazy"
            width="128"
            height="128"
            decoding="async"
            className="mr-4 w-32 h-auto"
            src="https://picsum.photos/128/128"
            style={{ color: "transparent", display: "block" }}
          />
        </div>
        <div className="gap-1 grid h-fit">
          <div className="text-xs text-blue-200 flex flex-wrap items-center gap-1">
            <div className="flex items-center gap-1">
              <div>Created by</div>
              <button type="button">
                <span className="flex gap-1 items-center">
                  <Image
                    alt=""
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    className="w-4 h-4 rounded"
                    src="https://picsum.photos/128/128"
                    style={{ color: "transparent", display: "block" }}
                  />
                  <span
                    className="px-1 rounded hover:underline flex gap-1"
                    style={{ backgroundColor: "transparent" }}
                  >
                    DAX7NN
                  </span>
                </span>
              </button>
            </div>
            <span className="w-full md:w-auto">2h ago</span>
          </div>
          <div className="text-xs text-green-300 flex gap-1">
            market cap: 4.86K
          </div>
          <p className="text-xs flex items-center gap-2">replies: 41</p>
          <p
            className="text-sm w-full"
            style={{ overflowWrap: "break-word", wordBreak: "break-all" }}
          >
            <span className="font-bold">
              Wait Impatiently For It (ticker: WIFI):{" "}
            </span>
            I hate to wait for koth, ray, bumps, tg, dex, trendings and bit**es
          </p>
        </div>
      </div>
    </a>
  );
};

export default ListItems;
