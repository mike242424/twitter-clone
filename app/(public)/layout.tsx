import { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return <main className="text-center">{children}</main>;
};

export default PublicLayout;
