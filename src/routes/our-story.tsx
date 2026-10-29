import { createFileRoute } from '@tanstack/react-router';
import { StoryPage } from '@/components/storefront/pages';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute('/our-story')({ head: () => pageHead('About Pooja Furniture', 'Welcome to Pooja Furniture, your local destination for home furniture in Wanaparthy, Telangana. Making Your House Feel Like Home.'), component: StoryPage });
