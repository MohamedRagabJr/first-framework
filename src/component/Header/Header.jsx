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
        <div className="dropdown lg:hidden  md:block text-white">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
