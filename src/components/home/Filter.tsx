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
import { TabsList, TabsTrigger } from "@/components/primitives/Tabs";

import { TAB_ITEMS } from "../../app/constants";

const Filter: FC = () => {
  return (
    <div className="flex border border-border p-2 gap-2 sm:gap-12 rounded-lg mb-8">
      <TabsList>
        {TAB_ITEMS.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="hidden sm:flex items-center space-x-2">
        <Switch id="animation" />
        <Label htmlFor="animation">Show Animation</Label>
      </div>
      <div className="hidden sm:flex items-center space-x-2">
        <Switch id="wfsn" />
        <Label htmlFor="wfsn">Include nsfw</Label>
      </div>

      <div className="hidden sm:block">
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
  );
};

export default Filter;
