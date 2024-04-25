import Address from "@/components/address/Address";
import AddressNotFound from "@/components/address/AddressNotFound";
import { searchAccountData } from "@/components/hero/functions/searchAccountData";

export default async function page({
  params,
}: {
  params: { address: string };
}) {
  const { address } = params;
  if (!(typeof address === "string")) return null;
  const data: Transaction[] | null = await searchAccountData(address);
  if (!data) return <AddressNotFound />;
  return <Address address={address} transactionsInit={data} />;
}
