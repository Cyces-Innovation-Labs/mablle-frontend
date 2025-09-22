import React from "react";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";

const AppAccordion = ({
  accordionList,
  accordionItemClassName,
  accordionTriggerClassName,
  accordionContentClassName,
  accordionClassName,
  openItems,
  onOpenItemsChange,
}: {
  accordionList: {
    title: string | React.ReactNode;
    content: string | React.ReactNode;
  }[];
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  accordionContentClassName?: string;
  accordionClassName?: string;
  openItems?: string[];
  onOpenItemsChange?: (value: string[]) => void;
}) => {
  return (
    <Accordion 
      className={accordionClassName} 
      type="multiple"
      value={openItems}
      onValueChange={onOpenItemsChange}
    >
      {accordionList?.map((item, index) => (
        <AccordionItem value={`item-${index}`} className={` bg-white ${accordionItemClassName}`}>
          <AccordionTrigger className={accordionTriggerClassName}>{item.title}</AccordionTrigger>
          <AccordionContent className={accordionContentClassName}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AppAccordion;
