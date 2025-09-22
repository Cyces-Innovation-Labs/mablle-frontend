import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface AppDropdownMenuProps {
  trigger: React.ReactNode;
  content: {
    label: string | React.ReactNode;
    onClick: () => void;
    className?: string;
  }[];
}

const AppDropdownMenu = ({ trigger, content }: AppDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer p-2">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {content?.map((content) => (
          <DropdownMenuItem
            className={content.className}
            onClick={content.onClick}
          >
            {content.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppDropdownMenu;
