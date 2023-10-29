import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { children: ReactNode };

export const Button = ({ className, children, ...props }: ButtonType) => {
  return (
    <button
      {...props}
      className={` rounded  border-none bg-secondary w-[200px]  p-2 font-bold
   text-white outline-none
 active:scale-[0.991] ${className}`}
    >
      {children}{" "}
    </button>
  );
};
