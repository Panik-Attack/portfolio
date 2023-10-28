import { PropsContainer } from "../../types/types";

export const LongContainer = ({ children }: PropsContainer) => {
  return (
    <div className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden bg-[#af72ff56] hover:scale-[103%] transition duration-500 ease-in-out">
      {children}
    </div>
  );
};
