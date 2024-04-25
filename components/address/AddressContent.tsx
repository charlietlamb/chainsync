import React from "react";
import AddressReviewSummary from "./AddressReviewSummary";
import AddressReviewCreate from "./AddressReviewCreate";

export default function AddressContent() {
  return (
    <div className="flex flex-grow flex-col">
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <AddressReviewSummary />
        <AddressReviewCreate />
      </div>
    </div>
  );
}
