import { cn } from "@/lib/utils";
import { getReviewTextClass } from "./functions/getReviewTextClass";

export default function AddressReview() {
  const score = 32;
  const reviewTextClass = getReviewTextClass(score);
  return (
    <div
      className={cn("flex text-6xl font-bold", reviewTextClass)}
    >{`${score}%`}</div>
  );
}
