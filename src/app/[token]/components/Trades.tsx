import { FC } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Trades: FC = () => {
  return (
    <div className="w-full">
      <Table className="bg-secondary rounded">
        <TableHeader>
          <TableRow>
            <TableHead>Account</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">SOL</TableHead>
            <TableHead className="text-right">LOREM</TableHead>
            <TableHead>Datetime</TableHead>
            <TableHead className="text-right">Transaction</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(32)].map((_, i) => (
            <TableRow key={i}>
              <TableCell>9GFf6z</TableCell>
              <TableCell>BUY</TableCell>
              <TableCell className="text-right">0.8192</TableCell>
              <TableCell className="text-right">2.51m</TableCell>
              <TableCell>2m ago</TableCell>
              <TableCell className="text-right">4id83j</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Trades;
