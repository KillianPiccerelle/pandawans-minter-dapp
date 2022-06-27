import { FC } from 'react';
import { Accordion } from 'flowbite-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <Accordion alwaysOpen={false}>
      <Accordion.Panel>
        <Accordion.Title>{question}</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white dark:text-gray-400">{answer}</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
