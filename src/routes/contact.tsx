import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/storefront/pages';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact Us — Pooja Furniture', 'Get in touch with Pooja Furniture in Maremmakunta, Vallabhnagar, Wanaparthy. Call +91 85452 20050 or message us on WhatsApp for showroom assistance.'), component: ContactPage });
