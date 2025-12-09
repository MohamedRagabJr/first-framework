import { useLocation , Link, NavLink } from 'react-router-dom'

export default function Header() {
  const links = [
    { href: "/About", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/Products", label: "Products" },
    { href: "/Contact", label: "Contact" },
  ];

  const location = useLocation();

  return (
    <header className='bg-secondary'>
      <div className="navbar w-full d-flex justify-between">
        <div className="logo p-[1.5em]">
          <Link to="/" className="btn btn-ghost text-white text-4xl uppercase">Start Framework</Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink to={link.href} className="text-white uppercase mx-[5px] text-lg font-bold">{link.label}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
