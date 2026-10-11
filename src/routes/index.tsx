import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/storefront/home';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute("/")({
  head: () => pageHead('More than furniture, a feeling', 'Discover Tirumala Furnitures: handcrafted furniture, natural materials and timeless designs for spaces with a soul.'),
  component: HomePage,
});
