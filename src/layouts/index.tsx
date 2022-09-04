import { AppProps } from 'next/app'
import BlankLayout from '@/layouts/blank'
import { ReactNode } from 'react'

type Props = AppProps & {
  layout: 'blank'
  children: ReactNode
}

export default function Layout({ layout, ...props }: Props) {
  const getLayout = {
    blank: BlankLayout,
  }
  return getLayout[layout] ? getLayout[layout](props) : props.children
}
