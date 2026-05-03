export type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
};

export type ExpandableIconProps = IconProps & {
  open?: boolean;
};
