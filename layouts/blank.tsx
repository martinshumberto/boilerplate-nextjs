import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const BlankLayout = ({ ...props }: Props) => {
  return <main>{props.children}</main>
}

export default BlankLayout
