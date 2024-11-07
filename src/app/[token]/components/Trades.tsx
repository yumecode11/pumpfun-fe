import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/primitives/Table";
import { CoinTradeType } from "@/types/coin.type";

type TradesProps = {
  data: CoinTradeType[];
};

const Trades: FC<TradesProps> = ({ data }) => {
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
        {(data || []).length > 0 ? (
          <TableBody>
            {(data || []).map((trade) => {
              const { _id, wallet, amount_in, amount_out, tx_hash, timestamp } =
                trade;
              const isBuy = amount_in > 0;
              const amount = isBuy ? amount_in : amount_out;
              const amountSol = isBuy ? amount_in : amount_out;

              return (
                <TableRow key={_id}>
                  <TableCell>{wallet}</TableCell>
                  <TableCell>{isBuy ? "BUY" : "SELL"}</TableCell>
                  <TableCell className="text-right">{amountSol}</TableCell>
                  <TableCell className="text-right">{amount}</TableCell>
                  <TableCell>{timestamp}</TableCell>
                  <TableCell className="text-right">{tx_hash}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No trades found
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default Trades;
