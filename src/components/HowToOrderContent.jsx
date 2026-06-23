'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { siteConfig } from '@/config/site';

export default function HowToOrderContent() {
  const { t } = useLanguage();
  const h = t.howToOrder;
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <div className="pb-8">
      {/* Header */}
      <section className="bg-brand-light/60">
        <div className="container-narrow py-14 text-center md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            {h.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-brand-dark md:text-4xl text-balance">
            {h.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base text-pretty">
            {h.intro}
          </p>
        </div>
      </section>

      {/* Timeline steps */}
      <section className="container-narrow py-12 md:py-16">
        <ol className="relative mx-auto max-w-2xl border-l-2 border-brand/20 pl-8">
          {h.steps.map((step, i) => (
            <li key={step.title} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-md">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-brand-dark sm:text-lg">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Payment + Delivery */}
      <section className="container-narrow grid grid-cols-1 gap-6 pb-12 md:grid-cols-2 md:pb-16">
        {/* Payment */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-brand-dark">{h.paymentTitle}</h2>
          <ul className="mt-4 space-y-3">
            {h.payment.map((p) => (
              <li
                key={p.name}
                className="flex items-center justify-between rounded-xl bg-brand-light/50 px-4 py-3"
              >
                <span className="text-sm font-semibold text-brand">{p.name}</span>
                <span className="text-xs text-gray-500">{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-brand-dark">{h.deliveryTitle}</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-light/60 text-xs uppercase tracking-wider text-brand">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">{h.tableArea}</th>
                  <th className="px-4 py-2.5 font-semibold">{h.tableTime}</th>
                  <th className="px-4 py-2.5 font-semibold">{h.tableCharge}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {h.delivery.map((d) => (
                  <tr key={d.area}>
                    <td className="px-4 py-2.5">{d.area}</td>
                    <td className="px-4 py-2.5">{d.time}</td>
                    <td className="px-4 py-2.5 font-medium text-brand">{d.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow">
        <div className="rounded-3xl bg-brand-dark px-6 py-12 text-center text-white md:py-14">
          <p className="mx-auto max-w-xl text-sm text-white/80 text-pretty">{h.note}</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1da851]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.041z" />
            </svg>
            {h.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
