import { getContent } from '@/lib/content';
import Reveal from '@/components/Reveal';
import EmailButton from '@/components/EmailButton';
import Edit from '@/components/Edit';
import Blocks from '@/components/Blocks';

export async function generateMetadata() {
  const c = await getContent();
  return { title: `Contact — ${c.site.brand}`, description: c.pages.contact.intro, alternates: { canonical: `https://${c.site.domain}/contact` } };
}

export default async function Contact() {
  const c = await getContent();
  const p = c.pages.contact;
  const b = c.booking || {};
  const s = c.social;
  const links = [
    { label: 'Instagram', href: s.instagram }, { label: 'Etsy Shop', href: s.etsy },
    { label: 'Depop', href: s.depop }, { label: 'Threads', href: s.threads },
    { label: 'TikTok', href: s.tiktok }, { label: 'YouTube', href: s.youtube },
  ].filter(l => l.href);
  return (
    <>
      <section className="block page-head">
        <div className="wrap">
          <div className="eyebrow"><Edit path="pages.contact.eyebrow">{p.eyebrow}</Edit></div>
          <h1 className="display"><Edit path="pages.contact.title">{p.title}</Edit></h1>
          <p className="lead"><Edit path="pages.contact.intro">{p.intro}</Edit></p>
          <div className="hero-actions" style={{ marginTop: 30 }}>
            {b.url ? <a href={b.url} target="_blank" rel="noopener" className="btn btn-primary">{(b.ctaLabel || 'Shop the drop')} →</a> : null}
            {c.site.email ? <EmailButton email={c.site.email} subject="Booking Inquiry" className="btn btn-ghost" label="Email" /> : null}
            {s.instagram ? <a href={s.instagram} target="_blank" rel="noopener" className="btn btn-ghost">DM on Instagram</a> : null}
          </div>
        </div>
      </section>

      <section className="block connect" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="eyebrow">{p.connectEyebrow}</div>
          <h2 className="display" style={{ fontSize: 'clamp(38px,6vw,76px)' }}>Connect</h2>
          <div className="links-grid">
            {links.map((l, i) => (
              <Reveal key={i} delay={(i % 3) + 1}>
                <a className="lnk" href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener" style={{ width: '100%' }}>
                  {l.label} <span className="arr">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="blocks-section"><div className="wrap"><Blocks path="pages.contact.blocks" blocks={p.blocks} /></div></section>
    </>
  );
}
