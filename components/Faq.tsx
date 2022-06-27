import { Accordion } from 'flowbite-react';
import { FaqItem } from './FaqItem';
import { faq } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Faq = () => {
  if (!Array.isArray(faq)) return null;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <HomeSectionTitle title="FAQ" />

      <Accordion className="text-white" alwaysOpen={false}>
        {faq.map((faqItem, index) => (
          <FaqItem key={index} {...faqItem} />
        ))}
      </Accordion>
    </div>
  );
};
