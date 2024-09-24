import type { FC } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TAB_ITEMS } from "../constants";

const Filter: FC = () => {
  return (
    <div className="flex border border-border p-2 gap-12 rounded-lg mb-8">
      <TabsList>
        {TAB_ITEMS.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="flex items-center space-x-2">
        <Switch id="animation" />
        <Label htmlFor="animation">Show Animation</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="wfsn" />
        <Label htmlFor="wfsn">Include nsfw</Label>
      </div>

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
  );
};

export default Filter;
