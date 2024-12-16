import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button styles with variants and animation for click effect
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 active:bg-[#111b47eb] active:scale-95 text-zinc-50 hover:shadow-lg hover:scale-100 dark:bg-zinc-50 dark:text-zinc-900",
        destructive:
          "bg-red-500  text-white hover:shadow-lg hover:scale-105 dark:bg-red-700",
        outline:
          "border  border-zinc-200 bg-transparent text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800",
        secondary:
          "bg-zinc-100  text-zinc-900 hover:shadow hover:scale-105 dark:bg-zinc-800 dark:text-zinc-50",
        ghost:
          "bg-transparent  text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800",
        link: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-6 py-3 text-lg",
        icon: "h-10 w-10 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// CSS for the animation effect on click (this should go in your global styles or in the component's styles)
const buttonStyles = `
  button:active {
    transform: scale(0.96); /* Slightly scale down when clicked */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15); /* Add inner shadow */
    transition: transform 0.1s ease, box-shadow 0.1s ease; /* Smooth transition */
  }

  /* Optional: Add a focus effect similar to Ant Design's focus ring */
  button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3); /* Focus ring effect */
  }
`;

export { Button, buttonVariants, buttonStyles };
