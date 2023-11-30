import Link from 'next/link';
import cl from './NavBar.module.scss';
import { linksType } from './types';

const NavBar = () => {
  const links: linksType = [{ label: 'All Cars', href: '/' }];

  return (
    <nav className={cl.nav}>
      <ul className={cl.navList}>
        {links.map(link => (
          <li key={link.href} className={cl.listItem}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
