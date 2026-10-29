import { Link } from '@tanstack/react-router';
import thirumalaLogo from '@/assets/thirumala_logo.png';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Pooja Furniture home">
      <img
        src={thirumalaLogo}
        alt="Pooja Furniture"
        className="brand-logo"
      />
      <span className="brand-text">
        <strong className="brand-title">POOJA</strong>
        <small className="brand-sub">FURNITURE · WANAPARTHY</small>
      </span>
    </Link>
  );
}

