import { useLocation , Link } from 'react-router-dom'

export default function Header() {
  const links = [
    { href: "/About", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/Contact", label: "Contact" },
  ];

  const location = useLocation();

  // helper to normalize paths (handles trailing slash, case)
  const normalize = (p) => p.replace(/\/+$/,'').toLowerCase() || '/';

  return (
    <header className='bg-secondary'>
      <div className="navbar w-full d-flex justify-between">
        <div className="logo p-[1.5em]">
          <Link to="/" className="btn btn-ghost text-white text-4xl uppercase">Start Framework</Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => {
              const active = normalize(location.pathname) === normalize(link.href);
              return (
                <li key={index} className={active ? 'active' : ''}>
                  <Link to={link.href} className="text-white uppercase mx-[5px] text-lg font-bold">{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
