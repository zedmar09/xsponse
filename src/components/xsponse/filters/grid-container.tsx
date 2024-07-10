import { ReactNode } from 'react';
import { GridItem } from './grid-item';

interface GridContainerProps {
  children: ReactNode;
}

export const GridContainer = ({ children }: GridContainerProps) => {
  return (
    <div className=" mx-auto mb-10">
      <div className="grid grid-cols-12 gap-4">
        {children}
      </div>
    </div>
  );
};
