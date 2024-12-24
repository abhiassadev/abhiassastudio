import { Accordion, AccordionItem } from "@nextui-org/react";

function FaqAccordion(props) {
  return (
    <>
      <Accordion variant="light">
        <AccordionItem
          key={props.key}
          aria-label="Accordion 1"
          title={<span className="text-white">{props.question}</span>}
        >
          <p className="text-base font-normal text-white opacity-80">
            {props.answer}
          </p>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FaqAccordion;
