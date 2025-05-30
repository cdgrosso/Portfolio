import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="mt-2 flex gap-4">
      <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>About Me</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Portfolio</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Contact</NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Resume</NavLink>
    </nav>
  );
};

export default Navigation;
