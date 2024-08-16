type SizeProps = {
  small?: boolean;
  large?: boolean;
}

export type AdjustSizeProps<T extends object> = Omit<T, keyof SizeProps> & {
  small?: boolean;
  large?: boolean;
} & (
    | { small: true; large?: never }
    | { large: true; small?: never }
    | { small?: false; large?: false }
  );