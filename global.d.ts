import { SupabaseClient } from "@supabase/supabase-js";
import { Database as DB } from "./types/supabase";

declare global {
  type TODO = any;
  type Database = DB;
  type Supabase = SupabaseClient;
  type User = DB["public"]["Tables"]["users"]["Row"];
  type Transaction = {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    gas: string;
    gasPrice: string;
    isError: string;
    txreceipt_status: string;
    input: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    confirmations: string;
    methodId: string;
    functionName: string;
  };
}
