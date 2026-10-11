import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/storefront/pages';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Let’s Create Something Beautiful', 'Prepare a Sai Datta Furnitures & Interiors consultation enquiry. Share your room ideas, custom furniture vision, interior requirements and reference images.'), component: ContactPage });
