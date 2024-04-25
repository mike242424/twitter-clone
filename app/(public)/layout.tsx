import { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default PublicLayout;
