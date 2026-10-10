<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use TanStack Router file-based pages and shared storefront chrome in the root route; this preserves the platform's SSR and navigation.
- Keep the initial catalog in a browser-safe data module and cart/wishlist in a React context with session-only state; the requested storefront starts with mock data and no order service.
- Express showroom styling through semantic global CSS tokens and reusable components; this keeps all pages faithful to the supplied reference.
- Keep room-editorial and furniture-customization experiences as dedicated route components; their layouts are page-specific while sharing storefront tokens and chrome.
