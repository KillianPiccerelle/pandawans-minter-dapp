import { FC, memo } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';

export const MainLayout: FC<MetaHeadProps> = memo(
  ({ children, metaTitle, metaDescription, metaImage, metaUrl }) => {
    return (
      <>
        <MetaHead
          metaTitle={metaTitle}
          metaDescription={metaDescription}
          metaImage={metaImage}
          metaUrl={metaUrl}
        ></MetaHead>
        <div className="mainLayout">
          <div className="myContainer">
            <div className="nothing">{children}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
);
