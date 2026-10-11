import { Link } from '@tanstack/react-router';
import saiDattaLogo from '@/assets/sai_datta_logo.png';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Sai Datta Furnitures & Interiors home">
      <img
        src={saiDattaLogo}
        alt="Sai Datta Furnitures & Interiors"
        className="brand-logo"
      />
      <span className="brand-text">
        <strong className="brand-title">SAI DATTA</strong>
        <small className="brand-sub">FURNITURES &amp; INTERIORS</small>
      </span>
    </Link>
  );
}

