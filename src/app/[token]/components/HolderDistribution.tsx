import { FC } from "react";

const HolderDistribution: FC = () => {
  return (
    <div className="text-sm">
      <p className="text-base font-semibold">Holder Distribution</p>

      <ul className="mt-2 flex flex-col gap-2 text-foreground/80">
        {[...Array(20)].map((_, i) => (
          <li key={i} className="flex items-center justify-between">
            <span>L012eM</span>
            <span>5%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolderDistribution;
