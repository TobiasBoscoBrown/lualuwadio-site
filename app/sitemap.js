export default function sitemap() {
  const base = 'https://example.com';
  const routes = ['', '/modeling', '/acting', '/content-creation', '/about', '/contact'];
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 }));
}
