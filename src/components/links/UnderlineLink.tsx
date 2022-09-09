/* eslint-disable react/jsx-props-no-spreading */

import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

import UnStyledLink, {
  UnStyledLinkProps,
} from '@/components/links/UnStyledLink';

const UnderlineLink = forwardRef<HTMLAnchorElement, UnStyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnStyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline custom-Link inline-flex items-center font-semibold',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'border-b border-dotted border-dark hover:border-black/0',
          className,
        )}
      >
        {children}
      </UnStyledLink>
    );
  },
);

UnderlineLink.displayName = 'UnderlineLink';

export default UnderlineLink;
