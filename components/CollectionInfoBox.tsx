import { FC } from 'react';
import { Tooltip } from 'flowbite-react';
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
    <Tooltip content={label}>
      <div className="py-3 px-8 border-dashed border-white border-0.5 rounded-lg">
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
