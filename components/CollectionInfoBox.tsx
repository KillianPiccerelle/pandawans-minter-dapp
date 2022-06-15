import { FC } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { numberFormatter } from '../utils/numberFormater';

interface CollectionInfoBoxProps {
  content: string | number;
  label: string;
  href?: string;
}

export const CollectionInfoBox: FC<CollectionInfoBoxProps> = ({
  content,
  label,
  href,
}) => {
  const contentFormated =
    typeof content === 'number' ? numberFormatter.format(content) : content;

  return (
    <Tooltip
      label={label}
      bg="pandawans.dark.darker"
      fontWeight="light"
      placement="top"
      py={3}
      px={5}
      mb={3}
      hasArrow
      arrowSize={12}
      borderRadius={10}
    >
      <div className="py-3 px-8 border-white border-0.5 rounded-md border-dashed">
        <p className="font-normal">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer nofollow">
              {contentFormated}
            </a>
          ) : (
            contentFormated
          )}
        </p>
      </div>
    </Tooltip>
  );
};
