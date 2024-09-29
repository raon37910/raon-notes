import { PropsWithChildren } from 'react'

import { LinkProps } from 'next/link'

export const ExternalLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target="_blank"
      href={href.toString() || ''}
      className="break-words text-[#6B7684] underline hover:text-green-500  underline-offset-4 hover:underline"
    >
      {children}
    </a>
  )
}
