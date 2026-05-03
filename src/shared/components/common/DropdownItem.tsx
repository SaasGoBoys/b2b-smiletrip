import { ArrowDownIcon } from "@/assets/icons/icons";

const DropdownItem = ({
  label,
  hasArrow = false,
}: {
  label: string;
  hasArrow?: boolean;
}) => (
  <span className="flex items-center h-full gap-1">
    {label}
    {hasArrow && <ArrowDownIcon />}
  </span>
);

export default DropdownItem