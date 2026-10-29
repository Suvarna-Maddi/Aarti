import { createFileRoute } from '@tanstack/react-router';
import { CollectionsPage } from '@/components/storefront/pages';
import { pageHead } from '@/data/catalog';
export const Route = createFileRoute('/collections')({ validateSearch: (search:Record<string,unknown>): { room?:string } => typeof search['room'] === 'string' ? { room:search['room'] } : {}, head: () => pageHead('The Collection', 'Explore living room, bedroom, sleep and study collections at Pooja Furniture in Wanaparthy.'), component: CollectionRoute });
function CollectionRoute() { const { room } = Route.useSearch(); return <CollectionsPage key={room ?? 'All'} initialRoom={room ?? 'All'} />; }
