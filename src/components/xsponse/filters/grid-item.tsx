import { ReactNode } from 'react';

interface GridItemProps {
  children: ReactNode;
}

export const GridItem = ({ children }: GridItemProps) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 ">
      {children}
    </div>
  );
};
