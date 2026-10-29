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
  { name: 'Living Room Furniture', items: 'Sofas, Sofa Sets, L-Shaped Sofas (confirm availability), Recliners & Coffee Tables' },
  { name: 'Bedroom Furniture', items: 'Beds and Cots, King-Size Beds, Queen-Size Beds, Storage Beds & Wardrobes' },
  { name: 'Mattresses and Sleep Products', items: 'Comfort Mattresses, Orthopedic Pillows & Premium Sleep Accessories' },
  { name: 'Study and Home Furniture', items: 'Ergonomic Study Tables, Workstations & Modern Study Furniture' },
  { name: 'Home Furniture Essentials', items: 'TV Units, Bedside Tables, Dining & Additional Home Furniture' },
  { name: 'Showroom Services', items: 'Assistance with selection, product recommendations & colour/fabric guidance' },
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
          alt="Warm, sunlit Pooja Furniture living room display in Wanaparthy"
          width="1536" height="1024"
          fetchPriority="high"
        />
        <div className="hero-content">
          <span className="eyebrow">Furniture Showroom · Wanaparthy, Telangana</span>
          <h1 className="display">Furniture That Makes<br />a House Feel<br /><em>Like Home.</em></h1>
          <p className="hero-copy">
            Discover furniture designed to bring comfort, functionality, and style to your living spaces.<br />
            Explore furniture options for your living room, bedroom, and home.
          </p>
          <div className="hero-ctas" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button asChild variant="showroom">
              <Link to="/collections">Explore Collections <ArrowRight /></Link>
            </Button>
            <Button asChild variant="showroomOutline">
              <Link to="/contact">Contact Us <Phone size={15} style={{ marginLeft: '6px' }} /></Link>
            </Button>
            <Button asChild variant="showroomOutline">
              <Link to="/rooms">Visit Our Showroom <MapPin size={15} style={{ marginLeft: '6px' }} /></Link>
            </Button>
          </div>
          <div className="hero-promises">
            <span><PackageCheck />Comfort & Style</span>
            <span><PencilRuler />Product Guidance</span>
            <span><Truck />Convenient Showroom</span>
          </div>
        </div>
        <aside className="hero-rail">
          <span className="count">01<br /><small>/ 04</small></span>
          <div className="rail-line" />
          <p>Making<br />Your House<br />Feel Like<br />Home.</p>
          <Button
            variant="tool"
            className="hero-scroll"
            onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            aria-label="Scroll to featured collections"
          >
            <ArrowDown />
            <span>SCROLL</span>
          </Button>
        </aside>
      </section>

      {/* ─── About Pooja Furniture ─── */}
      <section className="about-section" aria-label="About Pooja Furniture">
        <div className="about-inner">
          {/* Left — story + highlights */}
          <div className="about-left">
            <span className="eyebrow">About Pooja Furniture</span>
            <h2 className="display about-heading">Pooja Furniture</h2>
            <p className="about-tagline">
              Welcome to Pooja Furniture, your local destination for home furniture in Wanaparthy.
              We aim to help customers find furniture that combines comfort, functionality, and style.
              From living room furniture to bedroom essentials, discover furniture options to suit different spaces, preferences, and budgets.
            </p>

            {/* Why Choose Pooja Furniture Badges */}
            <div className="about-ratings">
              <div className="rating-badge">
                <Star className="rating-star" />
                <div>
                  <strong>Local Destination</strong>
                  <small>Wanaparthy Showroom</small>
                </div>
              </div>
              <div className="rating-badge">
                <Award className="rating-star" />
                <div>
                  <strong>Personalized Guidance</strong>
                  <small>Welcoming Experience</small>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="about-facts">
              <div className="fact-item">
                <Award size={15} />
                <span>Business Type: <strong>Furniture Showroom</strong></span>
              </div>
              <div className="fact-item">
                <Phone size={15} />
                <span>Contact Number: <a href="tel:+918545220050" className="fact-link">+91 85452 20050</a></span>
              </div>
              <div className="fact-item">
                <Globe size={15} />
                <span>WhatsApp: <a href="https://wa.me/message/WXDGEWS77CFOF1" target="_blank" rel="noopener noreferrer" className="fact-link" style={{ color: '#25D366' }}>Chat on WhatsApp (Click to enquire)</a></span>
              </div>
              <div className="fact-item">
                <MapPin size={15} />
                <span>Maremmakunta, Vallabhnagar, Wanaparthy, Telangana – 509103, India</span>
              </div>
              <div className="fact-item">
                <Clock size={15} />
                <span>Opening Hours: <strong>10:00 AM – 9:00 PM (Daily, as listed)</strong></span>
              </div>
              <div className="fact-item" style={{ opacity: 0.8, fontSize: '11px', marginTop: '4px' }}>
                <ShieldCheck size={14} />
                <span>Tagline: <strong>Making Your House Feel Like Home.</strong></span>
              </div>
            </div>
          </div>

          {/* Right — product categories & services */}
          <div className="about-right">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
              <span className="eyebrow">Featured Collections &amp; Services</span>
              <span style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                Wanaparthy Showroom
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
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/collections" className="about-cta-link">
                <Button variant="showroom" className="about-cta-btn">
                  Explore Products <ArrowRight />
                </Button>
              </Link>
              <a href="tel:+918545220050" className="about-cta-link">
                <Button variant="showroomOutline" className="about-cta-btn">
                  <Phone size={14} style={{ marginRight: '6px' }} /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/message/WXDGEWS77CFOF1" target="_blank" rel="noopener noreferrer" className="about-cta-link">
                <Button variant="showroomOutline" className="about-cta-btn" style={{ borderColor: '#25D366', color: '#25D366' }}>
                  WhatsApp Enquiry
                </Button>
              </a>
              <a href="https://maps.google.com/?q=Pooja+Furniture+Maremmakunta+Vallabhnagar+Wanaparthy+Telangana+509103" target="_blank" rel="noopener noreferrer" className="about-cta-link">
                <Button variant="showroomOutline" className="about-cta-btn">
                  <MapPin size={14} style={{ marginRight: '6px' }} /> Get Directions
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
