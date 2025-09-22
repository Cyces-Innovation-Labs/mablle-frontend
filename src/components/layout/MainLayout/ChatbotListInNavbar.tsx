import { User } from "lucide-react";
import NavbarList from "./NavbarList";

const ChatbotListInNavbar = () => {
  const list = [
    {
      title: "Users",
      url: "/user",
      icon: User,
    },

  ];
  return (
    <div>
      <NavbarList
        menuListContainerClassName="max-h-[20dvh] overflow-y-auto"
        sectionHeading="Menu"
        items={list}
      />
    </div>
  );
};

export default ChatbotListInNavbar;
