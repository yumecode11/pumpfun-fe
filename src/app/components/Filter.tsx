import type { FC } from "react";

import { Label } from "@/components/primitives/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/Select";
import { Switch } from "@/components/primitives/Switch";
import { ArrowDownAZ } from "lucide-react";

const Filter: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-2">
        <ArrowDownAZ className="w-5 h-5" />
        <div className="block">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="bump-order">Bump order</SelectItem>
              <SelectItem value="created-time">Created time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex items-center space-x-2">
          <Switch id="animation" />
          <Label htmlFor="animation">Show Animation</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="wfsn" />
          <Label htmlFor="wfsn">Include nsfw</Label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
