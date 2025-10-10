import { User } from "lucide-react";
import NavbarList from "./NavbarList";
import { USER_PAGE_URL } from "@/navigation/urls";

const ChatbotListInNavbar = () => {
  const list = [
    {
      title: "Users",
      url: USER_PAGE_URL,
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
