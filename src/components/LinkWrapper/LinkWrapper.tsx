import Link from 'next/link';

import { Wrapper } from './styles';

export const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <Wrapper>
    <Link href={href}>{children}</Link>
  </Wrapper>
);

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};
