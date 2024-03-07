import React from 'react';
import { WithChildren } from '../../constants/_models';

const Layout: React.FC<WithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
