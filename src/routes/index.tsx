import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/storefront/home';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute("/")({
  head: () => pageHead('More than furniture, a feeling', 'Discover Sai Datta Furnitures & Interiors: furniture showroom, interior decoration and custom woodwork in Boduppal, Hyderabad.'),
  component: HomePage,
});
