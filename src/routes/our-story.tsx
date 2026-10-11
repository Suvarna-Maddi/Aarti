import { createFileRoute } from '@tanstack/react-router';
import { StoryPage } from '@/components/storefront/pages';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute('/our-story')({ head: () => pageHead('Made Slowly, Made Beautifully', 'The Tirumala Furnitures story: natural materials, traditional craftsmanship and enduring design for a considered home.'), component: StoryPage });
