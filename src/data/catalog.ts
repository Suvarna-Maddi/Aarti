import living from '@/assets/living.jpg';
import chair from '@/assets/chair.jpg';
import dining from '@/assets/dining.jpg';
import bedroom from '@/assets/bedroom.jpg';
import workspace from '@/assets/workspace.jpg';
import empty from '@/assets/empty.jpg';
import craft from '@/assets/craft.jpg';
import before from '@/assets/before.png';
import after from '@/assets/after.png';
export const images = { living, chair, dining, bedroom, workspace, empty, craft, before, after };
export const categories = [
 { name: 'Living Room', subtitle: 'Relax. Gather. Belong.', image: living, room: 'Living' },
 { name: 'Dining Room', subtitle: 'Meals. Moments. Memories.', image: dining, room: 'Dining' },
 { name: 'Bedroom', subtitle: 'Rest. Recharge. Reimagine.', image: bedroom, room: 'Bedroom' },
 { name: 'Workspace', subtitle: 'Focus. Create. Achieve.', image: workspace, room: 'Office' },
 { name: 'Custom Design', subtitle: 'Your Vision. Our Craft.', image: craft, room: 'Custom' },
];
export type Product = { id: string; name: string; room: string; category: string; price: number; image: string; description: string; material: string; dimensions: string };
export const products: Product[] = [
 { id: 'arden', name: 'The Arden Lounge Chair', room: 'Living', category: 'Seating', price: 24999, image: chair, description: 'A perfect blend of comfort, craftsmanship and contemporary design. Handcrafted using premium wood and luxurious fabric finishes.', material: 'Walnut', dimensions: '76 W × 82 D × 80 H cm' },
 { id: 'haven', name: 'The Haven Sofa', room: 'Living', category: 'Seating', price: 49999, image: living, description: 'Generous proportions, soft linen and a quiet elegance. A place to come together, and a place to call your own.', material: 'Oak', dimensions: '240 W × 96 D × 78 H cm' },
 { id: 'forma', name: 'The Forma Dining Table', room: 'Dining', category: 'Tables', price: 38999, image: dining, description: 'Solid walnut, beautifully balanced. Designed for slow dinners and stories that last long after the meal.', material: 'Walnut', dimensions: '180 W × 90 D × 75 H cm' },
 { id: 'terra', name: 'The Terra Platform Bed', room: 'Bedroom', category: 'Beds', price: 54999, image: bedroom, description: 'A grounded silhouette and natural timber grain. Thoughtfully made for your most peaceful moments.', material: 'Teak', dimensions: '198 W × 218 D × 92 H cm' },
 { id: 'folio', name: 'The Folio Writing Desk', room: 'Office', category: 'Tables', price: 32999, image: workspace, description: 'A considered workspace in rich natural walnut. Clear lines, ample space and beautifully practical details.', material: 'Walnut', dimensions: '150 W × 65 D × 75 H cm' },
 { id: 'ora', name: 'The Ora Coffee Table', room: 'Living', category: 'Tables', price: 18999, image: living, description: 'Sculptural simplicity in solid wood. A natural gathering point at the heart of your room.', material: 'Oak', dimensions: '100 W × 100 D × 34 H cm' },
];
export const money = (amount: number) => '₹ ' + amount.toLocaleString('en-IN');
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} — Pooja Furniture` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Pooja Furniture` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
