import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";

export function DiscoverMain() {
  return (
    <div
      className={cn(
        "text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4",
        poppinsFont.className
      )}
    />
  );
}
