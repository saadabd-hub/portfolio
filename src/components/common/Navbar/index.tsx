import { FC } from 'react'

type NavbarProps = {
    className: string;
    children: React.ReactNode;
    id: string
}

const Navbar: FC<NavbarProps> = ({ id, className, children }) => {
  return (
    <nav id={id} className={className}>
      {children}
    </nav>
  )
}

export default Navbar;
