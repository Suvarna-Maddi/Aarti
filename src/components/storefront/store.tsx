import { createContext, useContext, useState, type ReactNode } from 'react';
type CartItem = { id: string; quantity: number; finish: string };
type Panel = 'search' | 'wishlist' | 'cart' | null;
type Store = { cart: CartItem[]; wishlist: string[]; panel: Panel; setPanel: (p: Panel) => void; addToCart: (id: string, finish?: string) => void; changeQuantity: (id: string, amount: number) => void; toggleWish: (id: string) => void };
const StoreContext = createContext<Store | null>(null);
export function StoreProvider({ children }: { children: ReactNode }) {
 const [cart, setCart] = useState<CartItem[]>([]); const [wishlist, setWishlist] = useState<string[]>([]); const [panel, setPanel] = useState<Panel>(null);
 const addToCart = (id: string, finish = 'Walnut / Cream') => { setCart(items => items.some(i => i.id === id) ? items.map(i => i.id === id ? { ...i, quantity: i.quantity + 1, finish } : i) : [...items, { id, quantity: 1, finish }]); setPanel('cart'); };
 const changeQuantity = (id: string, amount: number) => setCart(items => items.map(i => i.id === id ? { ...i, quantity: i.quantity + amount } : i).filter(i => i.quantity > 0));
 const toggleWish = (id: string) => setWishlist(items => items.includes(id) ? items.filter(i => i !== id) : [...items, id]);
 return <StoreContext.Provider value={{ cart, wishlist, panel, setPanel, addToCart, changeQuantity, toggleWish }}>{children}</StoreContext.Provider>;
}
export function useStore() { const store = useContext(StoreContext); if (!store) throw new Error('Store provider is missing'); return store; }
