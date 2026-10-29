import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/storefront/home';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute("/")({
  head: () => pageHead('Furniture That Makes a House Feel Like Home', 'Welcome to Pooja Furniture: your local destination for home furniture in Wanaparthy, Telangana. Explore living room, bedroom, sleep and study collections.'),
  component: HomePage,
});
