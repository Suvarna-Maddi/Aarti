import { Link } from '@tanstack/react-router';
import artiLogo from '@/assets/arti_logo.png';
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Aarti Furnitures home">
      <img src={artiLogo} alt="Aarti Furnitures" style={{ maxHeight: '40px', height: 'auto', width: 'auto' }} />
    </Link>
  );
}
