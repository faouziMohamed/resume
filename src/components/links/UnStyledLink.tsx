/* eslint-disable react/jsx-props-no-spreading */
import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

export type UnStyledLinkProps = {
  href: string;
  children: ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & ComponentPropsWithRef<'a'>;

const UnStyledLink = forwardRef<HTMLAnchorElement, UnStyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  },
);

UnStyledLink.displayName = 'UnStyledLink';

export default UnStyledLink;
