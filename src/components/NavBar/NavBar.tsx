import Link from 'next/link';
import cl from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.navList}>
        <li className={cl.listItem}>
					<Link href='/'>All cars</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
