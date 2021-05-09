import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/Link'
import { cloneElement, ReactElement } from 'react'


interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string
}

export function ActiveLink({ children, activeClassName, href, ...rest }: ActiveLinkProps ) {
  const { asPath } = useRouter()

  const className = asPath === href ? activeClassName : undefined

  return (
    <Link 
      href={href}
      {...rest}
    >
      {cloneElement(children, {
        className
      })}
    </Link>

  )
}