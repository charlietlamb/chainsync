export const getReviewTextClass = (score: number) => {
  if (score > 90) return "text-green-400";
  if (score > 80) return "text-green-500";
  if (score > 70) return "text-yellow-700";
  if (score > 60) return "text-yellow-500";
  if (score > 50) return "text-orange-500";
  if (score > 40) return "text-orange-700";
  if (score > 30) return "text-rose-500";
  if (score > 20) return "text-rose-700";
  return "text-rose-500";
};
