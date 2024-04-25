import { ReactNode } from 'react';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default PrivateLayout;
