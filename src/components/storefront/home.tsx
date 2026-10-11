import { Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, ChevronsLeftRight,
  Leaf, PackageCheck, PencilRuler, Play, Truck,
  MapPin, Phone, Star, Award, Calendar, ShieldCheck, Clock, Globe,
} from 'lucide-react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { images, categories, money } from '@/data/catalog';
import { Customizer } from './customizer';
const productCategories = [
  { name: 'Sofas and recliners', items: 'Living room sofas, premium recliners & convertible modular seating' },
  { name: 'Beds and bedroom furniture', items: 'King & queen beds, storage beds, bedside tables & wardrobes' },
  { name: 'Dining tables and chairs', items: 'Solid wood dining sets, marble-top tables & dining chairs' },
  { name: 'Office furniture', items: 'Ergonomic work chairs, executive desks & conference tables' },
  { name: 'Home interiors & arrangements', items: 'Complete home interiors, modular kitchens & space planning' },
  { name: 'Custom furniture & interior projects', items: 'Bespoke custom woodwork, turnkey interior designing & fit-outs' },
];

export function HomePage() {
  const hero = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [photo, setPhoto] = useState(0);
  const [comparison, setComparison] = useState(48);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-content>*', { y: 16, opacity: 0, duration: 1, stagger: .12, ease: 'power2.out' });
      gsap.from('.hero-photo', { scale: 1.04, duration: 3, ease: 'power2.out' });
    }, hero);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="hero" ref={hero}>
        <img
          className="hero-photo"
          src={images.living}
          alt="Sunlit Sai Datta Furnitures & Interiors living room with a handcrafted sofa and woodwork"
          width="1536" height="1024"
          fetchPriority="high"
        />
        <div className="hero-content">
          <span className="eyebrow">Furniture Showroom · Interior Decoration · Boduppal, Hyderabad</span>
          <h1 className="display">More than<br />furniture,<br /><em>a feeling.</em></h1>
          <p className="hero-copy">
            Timeless pieces and bespoke interiors for modern living.<br />
            Designed to bring warmth, luxury<br />
            and character to your space.
          </p>
          <div className="hero-ctas">
            <Button asChild variant="showroom">
              <Link to="/collections">Explore Collection <ArrowRight /></Link>
            </Button>
            <Button asChild variant="showroomOutline">
              <Link to="/our-story">Watch Our Story <Play /></Link>
            </Button>
          </div>
          <div className="hero-promises">
            <span><PackageCheck />Showroom Quality</span>
            <span><PencilRuler />Custom Interiors</span>
            <span><Truck />Hyderabad & Beyond</span>
          </div>
        </div>
        <aside className="hero-rail">
          <span className="count">01<br /><small>/ 04</small></span>
          <div className="rail-line" />
          <p>A Beautiful<br />Home<br />Begins<br />Here.</p>
          <Button
            variant="tool"
            className="hero-scroll"
            onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            aria-label="Scroll to room collections"
          >
            <ArrowDown />
            <span>SCROLL</span>
          </Button>
        </aside>
      </section>

      {/* ─── About Sai Datta Furnitures & Interiors ─── */}
      <section className="about-section" aria-label="About Sai Datta Furnitures & Interiors">
        <div className="about-inner">
          {/* Left — story + stats */}
          <div className="about-left">
            <span className="eyebrow">About Our Showroom</span>
            <h2 className="display about-heading">Sai Datta Furnitures &amp; Interiors</h2>
            <p className="about-tagline">
              Furniture showroom &amp; interior decoration specialists in Boduppal, Hyderabad.
              Led by N. Laxmi Kumar, offering premium furniture retail, customized home interiors, and architectural woodwork projects.
            </p>

            {/* Rating badges */}
            <div className="about-ratings">
              <div className="rating-badge">
                <Star className="rating-star" />
                <div>
                  <strong>4.0 (111)</strong>
                  <small>Public Business Rating</small>
                </div>
              </div>
              <div className="rating-badge">
                <Award className="rating-star" />
                <div>
                  <strong>N. Laxmi Kumar</strong>
                  <small>Owner &amp; Lead Specialist</small>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="about-facts">
              <div className="fact-item">
                <Award size={15} />
                <span>Business: <strong>Furniture showroom · Interior decoration</strong></span>
              </div>
              <div className="fact-item">
                <Phone size={15} />
                <span>Primary: <a href="tel:+918686065352" className="fact-link">+91 86860 65352</a> · Alt: <a href="tel:04064444352" className="fact-link">040 6444 4352</a></span>
              </div>
              <div className="fact-item">
                <Globe size={15} />
                <span>Email: <a href="mailto:dattafurniture@gmail.com" className="fact-link">dattafurniture@gmail.com</a> / <a href="mailto:saidatta05@gmail.com" className="fact-link">saidatta05@gmail.com</a></span>
              </div>
              <div className="fact-item">
                <MapPin size={15} />
                <span>1-23, NH 163, Raghavendra Nagar Colony, Bhagya Nagar Colony, Boduppal, Hyderabad, Telangana 500092</span>
              </div>
              <div className="fact-item">
                <Clock size={15} />
                <span>Listed hours: <strong>Daily, 10:00 AM–9:30 PM</strong></span>
              </div>
              <div className="fact-item" style={{ opacity: 0.75, fontSize: '11px', marginTop: '4px' }}>
                <ShieldCheck size={14} />
                <span>Source: <a href="https://www.bharatibiz.com/en/sai-datta-furnitures-interiors-086860-65352" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Public business listing (BharatiBiz)</a>. Hyderabad.</span>
              </div>
            </div>
          </div>

          {/* Right — product catalogue */}
          <div className="about-right">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
              <span className="eyebrow">Offerings &amp; Services</span>
              <span style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                Retail Showroom &amp; Interior Decoration
              </span>
            </div>
            <div className="catalogue-grid">
              {productCategories.map((cat) => (
                <div className="catalogue-card" key={cat.name}>
                  <h3 className="catalogue-name">{cat.name}</h3>
                  <p className="catalogue-items">{cat.items}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/collections" className="about-cta-link">
                <Button variant="showroom" className="about-cta-btn">
                  Browse All Products <ArrowRight />
                </Button>
              </Link>
              <a href="tel:+918686065352" className="about-cta-link">
                <Button variant="showroomOutline" className="about-cta-btn">
                  <Phone size={14} style={{ marginRight: '6px' }} /> Call +91 86860 65352
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Category Row ─── */}
      <div className="category-row" ref={categoriesRef}>
        {categories.map((c) =>
          c.room === 'Custom' ? (
            <Link className="category-tile" key={c.name} to="/customization">
              <div className="category-photo"><img src={c.image} alt={c.name} loading="lazy" /></div>
              <div className="category-info">
                <div><h3>{c.name}</h3><p>{c.subtitle}</p></div>
                <ArrowRight className="circle-arrow" />
              </div>
            </Link>
          ) : (
            <Link className="category-tile" key={c.name} to="/collections" search={{ room: c.room }}>
              <div className="category-photo"><img src={c.image} alt={c.name} loading="lazy" /></div>
              <div className="category-info">
                <div><h3>{c.name}</h3><p>{c.subtitle}</p></div>
                <ArrowRight className="circle-arrow" />
              </div>
            </Link>
          )
        )}
      </div>

      {/* ─── Featured ─── */}
      <section className="featured">
        <div className="featured-copy">
          <span className="eyebrow">Featured Collection</span>
          <h2 className="display">The Arden<br />Lounge Chair</h2>
          <p>A perfect blend of comfort, craftsmanship and contemporary design. Handcrafted using premium wood and luxurious fabric finishes.</p>
          <strong className="feature-price">{money(24999)}</strong>
          <Button asChild variant="showroom">
            <Link to="/products/$productId" params={{ productId: 'arden' }}>View Details <ArrowRight /></Link>
          </Button>
        </div>
        <div className="featured-image">
          <img
            src={images.chair}
            alt="The Arden Lounge Chair, handcrafted in walnut and ivory linen"
            loading="lazy"
            style={{
              objectPosition: `${50 + photo * 10}% center`,
              transform: photo === 2 ? 'scaleX(-1)' : `scale(${photo === 1 ? 1.2 : 1})`,
            }}
          />
          <span className="craft-seal">CRAFTED<br />FOR<br />LASTING<br />SPACES</span>
          <div className="photo-thumbnails">
            {[0, 1, 2, 3].map((i) => (
              <Button
                variant="tool" key={i}
                className={`photo-thumb ${photo === i ? 'selected' : ''}`}
                aria-label={`Chair gallery view ${i + 1}`}
                onClick={() => setPhoto(i)}
              >
                <img src={images.chair} alt="" loading="lazy" />
              </Button>
            ))}
          </div>
        </div>
        <Customizer />
      </section>

      {/* ─── Craft Section ─── */}
      <section className="craft-section">
        <img className="craft-background" src={images.craft} alt="Artisan shaping walnut wood by hand" loading="lazy" />
        <div className="craft-copy">
          <span className="eyebrow">Our Story</span>
          <h2 className="display">From nature<br />to your home.</h2>
          <p>We source the finest materials, combine traditional craftsmanship with modern design, and create furniture that becomes a part of your story.</p>
          <Button asChild variant="showroomOutline">
            <Link to="/our-story">Discover Our Journey <ArrowRight /></Link>
          </Button>
        </div>
        <span className="craft-motto">A BLEND OF<br />TRADITION<br />AND TOMORROW</span>
        <div className="craft-stages">
          {[
            { title: 'Selected Materials', image: images.craft },
            { title: 'Crafted by Hand', image: images.craft },
            { title: 'Finished with Detail', image: images.chair },
            { title: 'Delivered to Your Space', image: images.dining },
          ].map((s, i) => (
            <div className="craft-stage" key={s.title}>
              <img src={s.image} alt={s.title} loading="lazy" />
              <div><b>0{i + 1}</b><span>{s.title}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Transformation ─── */}
      <section className="transformation">
        <div className="transformation-copy">
          <span className="eyebrow">Room Transformation</span>
          <h2 className="display">See the Difference.</h2>
          <p>Slide to transform an empty space into a beautifully furnished home.</p>
          <div className="compare-controls">
            <Button variant="tool" size="icon" aria-label="Show before room" onClick={() => setComparison(100)}><ArrowLeft /></Button>
            <Button variant="tool" size="icon" aria-label="Show after room" onClick={() => setComparison(0)}><ArrowRight /></Button>
          </div>
        </div>
        <div className="comparison">
          <img src={images.after} alt="After: a beautifully furnished living room" loading="lazy" />
          <div className="comparison-before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}>
            <img src={images.before} alt="Before: an empty architectural room" loading="lazy" />
          </div>
          <label>Before</label>
          <label className="after-label">After</label>
          <div className="comparison-divider" style={{ left: `${comparison}%` }}>
            <span><ChevronsLeftRight size={19} /></span>
          </div>
          <input
            aria-label="Room before and after comparison"
            type="range" min="0" max="100" value={comparison}
            onChange={(e) => setComparison(Number(e.target.value))}
          />
        </div>
      </section>

      {/* ─── Signature ─── */}
      <section className="signature">
        <img src={images.dining} alt="Signature walnut dining collection" loading="lazy" />
        <div className="signature-copy">
          <span className="eyebrow">Signature Collection</span>
          <h2 className="display">Bring character home.</h2>
          <p>Thoughtfully designed furniture for spaces that feel alive.</p>
          <Button asChild variant="showroom">
            <Link to="/collections" search={{ room: 'Dining' }}>Explore Collection <ArrowRight /></Link>
          </Button>
        </div>
        <p className="signature-motto">Good<br />Design<br />Lasts<br />Longer.</p>
      </section>
    </main>
  );
}
