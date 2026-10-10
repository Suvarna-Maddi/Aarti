import { createFileRoute, Link } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { ArrowRight, MessageSquare, Ruler, Box, Truck, PenTool, Package, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/components/storefront/store';
import { pageHead } from '@/data/catalog';
import customHero from '@/assets/custom-hero.png';
import materials from '@/assets/materials.jpg';
import finishes from '@/assets/finishes.jpg';
import fabrics from '@/assets/fabrics.jpg';
import details from '@/assets/details.jpg';
import dining from '@/assets/custom_dining.png';
import sofa from '@/assets/custom_sofa.png';
import wardrobe from '@/assets/custom_wardrobe.png';
import study from '@/assets/custom_desk.png';
import uniqueIdea from '@/assets/uniqueidea.png';
import '@/customization-new.css';

const detailCards = [
  { title: 'MATERIALS', copy: 'Choose from premium woods, fabrics, leather and more.', image: materials },
  { title: 'FINISHES', copy: 'Matte, glossy or natural — crafted to your taste.', image: finishes },
  { title: 'FABRICS & UPHOLSTERY', copy: 'Wide range of textures and colors.', image: fabrics },
  { title: 'DETAILS', copy: 'Personalize handles, stitching, edges and more.', image: details },
];

const heroFeatures = [
  { icon: PenTool, label: 'Personalized\nDesigns' },
  { icon: Package, label: 'Premium\nMaterials' },
  { icon: ShieldCheck, label: 'Expert\nGuidance' },
];

export const Route = createFileRoute('/customization')({
  head: () => pageHead('Your Vision. Our Craftsmanship.', 'Create furniture uniquely yours by choosing materials, dimensions, silhouettes and finishes.'),
  component: CustomizationRoute,
});

function CustomizationRoute() {
  const { addToCart } = useStore();
  const [size, setSize] = useState(200);
  const [added, setAdded] = useState(false);
  const add = () => { addToCart('forma', `Custom · ${size}cm`); setAdded(true); };

  return (
    <main className="custom-page">

      {/* ─── HERO — full-screen overlay ─── */}
      <section className="custom-hero-new">
        {/* Background image */}
        <div className="custom-hero-split">
          <img
            src={customHero}
            alt="A table concept sketch becoming a finished walnut dining table"
            width={1536} height={1024}
            fetchPriority="high"
          />
        </div>

        {/* Gradient overlay */}
        <div className="custom-hero-veil" />

        {/* Text content */}
        <div className="custom-hero-content">
          <span className="eyebrow">CUSTOM FURNITURE</span>
          <h1 className="display">Your Vision.<br />Our Craftsmanship.</h1>
          <p className="custom-hero-desc">
            Bring your ideas to life with fully customized furniture,
            designed around your space, style and needs.
          </p>
          <button className="start-customizing-btn">Start Customizing →</button>

          {/* Feature icons strip */}
          <div className="hero-features-strip">
            {heroFeatures.map(({ icon: Icon, label }) => (
              <div className="hero-feature-item" key={label}>
                <Icon />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILS ─── */}
      <section className="custom-details-new">
        <div className="details-intro">
          <span className="eyebrow">TAILORED TO YOU</span>
          <h2 className="display">Customize<br />Every Detail</h2>
          <p>From dimensions to materials, finishes to form — create furniture that fits perfectly into your home.</p>
          <div className="explore-line">
            <hr />
            <span>Explore Options</span>
          </div>
        </div>
        <div className="detail-card-grid-new">
          {detailCards.map((card) => (
            <article key={card.title}>
              <div className="card-image-wrap">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <div className="card-header">
                <h3>{card.title}</h3>
                <button className="card-arrow" aria-label={`Explore ${card.title}`}><ArrowRight /></button>
              </div>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="custom-process-new">
        <div className="process-intro">
          <span className="eyebrow">OUR PROCESS</span>
          <h2 className="display">From Idea<br />to Reality</h2>
        </div>
        <div className="process-steps">
          <div className="process-line" />
          {[
            [MessageSquare, '01', 'Share Your Idea', 'Tell us your requirements, space and style.'],
            [Ruler, '02', 'Customize Details', 'Choose material, size, shape, finish and more.'],
            [Box, '03', 'See a 3D Preview', 'Visualize your furniture — before production.'],
            [Truck, '04', 'We Craft & Deliver', 'Our experts build and deliver it to your space.'],
          ].map(([Icon, n, title, copy]) => {
            const StepIcon = Icon as typeof MessageSquare;
            return (
              <article key={String(n)}>
                <div className="step-icon"><StepIcon /></div>
                <span>{String(n)}</span>
                <h3>{String(title)}</h3>
                <p>{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ─── INSPIRATION ─── */}
      <section className="custom-inspiration-wrapper">
        <div className="custom-inspiration-new">
          {/* Olive card */}
          <div className="inspiration-content">
            <div className="inspiration-copy">
              <span className="eyebrow">INSPIRATION</span>
              <h2 className="display">Made for<br />Your Space</h2>
              <p>From statement dining tables to space-saving wardrobes, we create furniture that truly fits your life.</p>
              <Button variant="showroomOutline" className="view-projects-btn">
                View Custom Projects <ArrowRight />
              </Button>
            </div>
          </div>

          {/* Center dining image */}
          <div className="inspiration-center-image">
            <img src={dining} alt="Bespoke walnut dining table" loading="lazy" />
          </div>

          {/* Three thumbnail images */}
          <div className="inspiration-images">
            <div className="inspiration-item">
              <img src={sofa} alt="Custom Sofa" loading="lazy" />
              <div className="item-label"><span>Custom Sofa</span></div>
              <button className="item-arrow" aria-label="View Custom Sofa"><ArrowRight /></button>
            </div>
            <div className="inspiration-item">
              <img src={wardrobe} alt="Walk-in Wardrobe" loading="lazy" />
              <div className="item-label"><span>Walk-in Wardrobe</span></div>
              <button className="item-arrow" aria-label="View Walk-in Wardrobe"><ArrowRight /></button>
            </div>
            <div className="inspiration-item">
              <img src={study} alt="Study Desk" loading="lazy" />
              <div className="item-label"><span>Study Desk</span></div>
              <button className="item-arrow" aria-label="View Study Desk"><ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="custom-cta-new"
        style={{ backgroundImage: `url(${uniqueIdea})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="cta-content">
          <span className="eyebrow">CUSTOM FURNITURE</span>
          <h2>Your Vision.<br />Our Craftsmanship.</h2>
          <p>Bring your ideas to life with fully customized furniture designed around your space, style and needs.</p>
          <button className="button">Start Customizing →</button>
        </div>
      </section>
    </main>
  );
}
