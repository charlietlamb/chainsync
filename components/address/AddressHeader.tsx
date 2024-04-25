import UserAvatar from "../user/UserAvatar";
import AddressReview from "./AddressReview";
import { useAddressContext } from "./context/addressContext";

export default function AddressHeader() {
  const { address } = useAddressContext();
  return (
    <div className="sticky flex w-full items-center justify-between gap-4 border-b border-zinc-100 bg-emerald-700 p-4 shadow-sm">
      <UserAvatar address={address} />
      <AddressReview />
    </div>
  );
}
