export const SkeletonCard = () => {
  return (
    <div className="relative w-full space-y-3 overflow-hidden rounded-md bg-neutral-300 p-5 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
      <div className="h-12 w-2/3 rounded-lg bg-neutral-600"></div>
      <div className="space-y-3">
        <div className="h-5 w-8/12 rounded-full bg-neutral-500"></div>
        <div className="space-y-1 flex justify-end pt-1">
          <div className="h-4 w-2/3 rounded-full bg-neutral-700 shadow"></div>
        </div>
      </div>
    </div>
  );
};
