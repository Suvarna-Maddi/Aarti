import { Link } from '@tanstack/react-router';
import thirumalaLogo from '@/assets/thirumala_logo.png';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Tirumala Furnitures home">
      <img
        src={thirumalaLogo}
        alt="Tirumala Furnitures"
        className="brand-logo"
      />
      <span>
        <strong>TIRUMALA</strong>
        <small>FURNITURE MANUFACTURER</small>
      </span>
    </Link>
  );
}

