import { FC, memo } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';

import CSS from 'csstype';

export const MainLayout: FC<MetaHeadProps> = memo(
  ({ children, metaTitle, metaDescription, metaImage, metaUrl }) => {
    const width_height: CSS.Properties = {
      height: 'calc(100vh - 120px)',
      width: '100vw',
    };

    return (
      <>
        <MetaHead
          metaTitle={metaTitle}
          metaDescription={metaDescription}
          metaImage={metaImage}
          metaUrl={metaUrl}
        ></MetaHead>
        <div
          className="bg-gradient-to-r from-bgStripes to-darkBase"
          style={width_height}
        >
          <div className="">
            <div>{children}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
);
