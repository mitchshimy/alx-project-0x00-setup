export interface PillProps {
  title: string
}

interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full" | "rounded-lg";
  styles: string;
}