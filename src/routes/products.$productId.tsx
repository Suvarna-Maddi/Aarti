import { createFileRoute } from '@tanstack/react-router';
import { ProductPage } from '@/components/storefront/pages';
import { products, pageHead } from '@/data/catalog';
export const Route = createFileRoute('/products/$productId')({ head: ({ params }) => { const p = products.find(p => p.id === params.productId); return pageHead(p?.name ?? 'Piece unavailable', p?.description ?? 'Discover the Tirumala Furnitures collection.'); }, component: ProductRoute });
function ProductRoute() { const { productId } = Route.useParams(); return <ProductPage key={productId} productId={productId} />; }
