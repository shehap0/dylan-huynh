import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dylan Huynh — Social, Photography & Digital Design Studio" },
      { name: "description", content: "Independent studio crafting social media, editorial photography and digital design for ambitious brands." },
    ],
  }),
  component: Home,
});

const img = (seed: string, w = 1600, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

function CountUp({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!ref.current || started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(to * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, started]);
  return (
    <span ref={ref}>
      {display.toFixed(decimals)}{suffix}
    </span>
  );
}

/* ============ INTRO LOADER ============ */
function Intro({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= 100) { clearInterval(id); return 100; }
        return c + Math.ceil(Math.random() * 7);
      });
    }, 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count < 100) return;
    const tl = gsap.timeline({ onComplete: onDone });
    tl.to(".intro-word", { yPercent: -110, stagger: 0.08, duration: 0.7, ease: "expo.inOut" }, 0.2)
      .to(root.current, { yPercent: -100, duration: 1.0, ease: "expo.inOut" }, "+=0.1");
  }, [count, onDone]);

  return (
    <div ref={root} className="fixed inset-0 z-[100] bg-ink text-cream flex flex-col grain">
      <div className="flex-1 flex items-end justify-between px-8 md:px-16 pb-16">
        <div className="overflow-hidden">
          <div className="intro-word font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] tracking-tight">
            DYLAN HUYNH
          </div>
        </div>
        <div className="overflow-hidden hidden md:block">
          <div className="intro-word font-mono text-sm uppercase tracking-[0.3em] opacity-70">
            est. studio · 2019
          </div>
        </div>
      </div>
      <div className="border-t border-cream/20 px-8 md:px-16 py-6 flex justify-between items-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">Loading the studio</span>
        <span className="font-display text-3xl md:text-5xl tabular-nums">{Math.min(count, 100)}</span>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-ember" style={{ width: `${Math.min(count, 100)}%` }} />
    </div>
  );
}

/* ============ NAV ============ */
function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,1100px)]">
      <div className="flex items-center justify-between px-3 py-3 rounded-full border border-cream/10 bg-transparent backdrop-blur-none shadow-2xl">
        <a href="#top" className="flex items-center gap-2 pl-4">
          <span className="h-2 w-2 rounded-full bg-ember" />
          <span className="font-display font-bold tracking-tight text-cream">Dylan Huynh</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {[["Social", "#social"], ["Photography", "#photography"], ["Design", "#design"], ["Voices", "#voices"]].map(([l, h]) => (
            <li key={l}>
              <a href={h} className="px-4 py-2 rounded-full text-cream/70 hover:text-cream hover:bg-cream/5 transition">{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="px-5 py-2.5 rounded-full bg-cream text-ink text-sm font-medium hover:bg-ember transition">
          Start a project
        </a>
      </div>
    </nav>
  );
}

/* ============ HERO — Cinematic Center ============ */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={img("studio-window", 2400, 1400)}
          alt=""
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_30%,transparent_60%,var(--background)_100%)]" />
      </div>

      <div className="font-mono text-xs uppercase tracking-[0.4em] text-cream/50 mb-10">
        Tehran · Lisbon · remote
      </div>

      <h1 className="font-display font-bold text-balance text-center max-w-6xl leading-[0.95] tracking-tight text-cream"
          style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)" }}>
        We craft the
        <span className="inline-block align-middle mx-3 md:mx-5 h-[0.7em] w-[1.6em] rounded-full bg-cover bg-center"
              style={{ backgroundImage: "url(/assets/japan.jpg)" }} />
        feed, the frame and the brand behind ambitious work.
      </h1>

      <p className="mt-10 max-w-xl text-center text-cream/60 text-lg leading-relaxed">
        An independent studio shaping social campaigns, editorial photography and digital design for brands that refuse to look average.
      </p>

      <div className="mt-12 flex flex-wrap gap-3 justify-center">
        <a href="#social" className="px-7 py-4 rounded-full bg-cream text-ink font-medium hover:bg-ember transition">
          See our work
        </a>
        <a href="#contact" className="px-7 py-4 rounded-full border border-cream/30 text-cream hover:bg-cream/5 transition">
          Book a call
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-cream/40">
        Scroll · three disciplines, one studio
      </div>
    </section>
  );
}

/* ============ DISCIPLINES (clarification) ============ */
function Disciplines() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".reveal-word") ?? [];
    gsap.fromTo(words,
      { opacity: 0.12 },
      {
        opacity: 1, stagger: 0.04, ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });
  }, { scope: ref });

  const sentence = "Three disciplines, woven into one studio practice. Strategy, image and interface — built side by side, never in silos.";
  const disciplines = [
    { n: "01", k: "Social Media Marketing", d: "Always-on content systems, paid creative, community building." },
    { n: "02", k: "Photography", d: "Editorial, product and campaign imagery shot in studio and on location." },
    { n: "03", k: "Digital Design", d: "Brand systems, websites and product interfaces with craft at the center." },
  ];

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-balance text-cream text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.2] tracking-tight max-w-5xl">
          {sentence.split(" ").map((w, i) => (
            <span key={i} className="reveal-word inline-block mr-[0.25em]">{w}</span>
          ))}
        </p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-cream/15">
          {disciplines.map((d) => (
            <div key={d.n} className="group p-8 border-b md:border-b-0 md:border-r last:md:border-r-0 border-cream/15 hover:bg-cream/[0.03] transition">
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-mono text-xs text-ember tracking-[0.3em]">{d.n}</span>
                <span className="h-px w-8 bg-cream/20 group-hover:bg-ember group-hover:w-16 transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight mb-4">{d.k}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SOCIAL MEDIA SHOWCASE — Bento ============ */
function SocialShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".bento-card").forEach((el) => {
      gsap.from(el, {
        y: 60, opacity: 0, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });
  }, { scope: ref });

  return (
    <section id="social" ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-ember mb-4">Discipline · One</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-cream max-w-3xl">
              Social Media Marketing
            </h2>
          </div>
          <p className="max-w-sm text-cream/60 leading-relaxed">
            Daily content, paid creative and community work for brands that want a real audience, not a vanity number.
          </p>
        </div>

        <div className="grid grid-flow-dense grid-cols-4 grid-rows-[repeat(3,16rem)] gap-3">
          <div className="bento-card group relative col-span-2 row-span-2 rounded-2xl overflow-hidden bg-card">
            <img src={img("reels-grid", 1400, 1400)} alt="" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="font-mono text-xs text-ember tracking-[0.3em] mb-3">Case · Linea Coffee</div>
              <h3 className="font-display text-3xl md:text-4xl text-cream leading-tight max-w-md">
                +<CountUp to={312} />% organic reach in 90 days
              </h3>
            </div>
          </div>

          <div className="bento-card col-span-2 row-span-1 rounded-2xl bg-card border border-cream/10 p-8 flex flex-col justify-between">
            <div className="font-mono text-xs text-cream/50 tracking-[0.3em]">Engagement rate</div>
            <div className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-cream">
              <CountUp to={8.4} decimals={1} /><span className="text-ember">%</span>
            </div>
            <div className="text-cream/50 text-sm">Avg. across managed accounts, last 12 months.</div>
          </div>

          <div className="bento-card col-span-1 row-span-1 rounded-2xl bg-ember text-ink p-6 flex flex-col justify-between">
            <div className="font-mono text-xs tracking-[0.3em] opacity-70">Always-on</div>
            <div className="font-display text-2xl leading-tight">Strategy, content & paid in one team.</div>
          </div>

          <div className="bento-card group col-span-1 row-span-1 rounded-2xl overflow-hidden relative">
            <img src={img("instagram-portrait", 800, 800)} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
            <div className="absolute inset-0 bg-ink/30" />
            <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream">
              Reel · 1.2M views
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ PHOTOGRAPHY — Pinned scroll ============ */
function Photography() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".photo-pin",
        pinSpacing: false,
      });
    });
    gsap.utils.toArray<HTMLElement>(".photo-frame").forEach((el) => {
      const img = el.querySelector("img");
      if (!img) return;
      gsap.set(img, { filter: "grayscale(1)" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      tl.fromTo(el, { scale: 0.85, opacity: 0.4 }, { scale: 1, opacity: 1, duration: 0.5 })
        .to(el, { opacity: 0.2, duration: 0.5 }, 0.5);
      gsap.to(img, {
        filter: "grayscale(0)",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, { scope: ref });

  const projects = [
    { t: "Atelier Noir — SS25", k: "Fashion · Studio", s: "fashion-noir" },
    { t: "Maison Rouge — Vogue", k: "Food · Editorial", s: "restaurant-food" },
    { t: "Vahid Khorasani — photography", k: "Portrait · Natural light", s: "portrait-man" },
    { t: "Lumen Watches — photography", k: "Product · Studio", s: "watch-product" },
    { t: "Sahar Architecture — Spaces", k: "Architecture · On location", s: "architecture-space" },
  ];

  return (
    <section id="photography" ref={ref} className="relative bg-cream text-ink">
      <div className="grid md:grid-cols-12 max-w-[1600px] mx-auto px-6 py-32 md:py-48 gap-12">
        <div className="md:col-span-5 photo-pin md:h-screen flex flex-col justify-center py-12">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-ember mb-6">Discipline · Two</div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] tracking-tight max-w-md">
            Photography that earns a second look.
          </h2>
          <p className="mt-8 max-w-sm text-ink/70 leading-relaxed">
            Editorial, fashion, food and product imagery — shot in our Tehran studio or on location, retouched with restraint.
          </p>
          <a href="#contact" className="mt-10 inline-flex w-fit items-center gap-3 px-6 py-3 rounded-full bg-ink text-cream hover:bg-ember hover:text-ink transition">
            <span>Commission a shoot</span><span aria-hidden>→</span>
          </a>
        </div>

        <div className="md:col-span-7 space-y-24">
          {projects.map((p, i) => (
            <figure key={p.s} className="photo-frame group">
              <div className="overflow-hidden rounded-md bg-ink/5 max-w-2xl mx-auto">
                <img
                  src={`/assets/demo ${i + 1}.jpg`}
                  alt={p.t}
                  className="w-full h-auto object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-lg">{p.t}</span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink/50">
                  N° {String(i + 1).padStart(2, "0")} · {p.k}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DIGITAL DESIGN — Horizontal accordion ============ */
function DesignShowcase() {
  const items = [
    { t: "King Eric", k: "Editorial design · Web interactive", s: "collar-up", c: "Designed a digital retrospective exploring the career, philosophy, and distinct style of the Manchester United icon." },
    { t: "Numa Studio", k: "Identity · Website", s: "studio-website", c: "A monochrome identity for a Lisbon-based architecture practice." },
    { t: "Orbit Health", k: "Product · App", s: "health-app", c: "Onboarding and dashboard for a habit tracker that respects attention." },
    { t: "Field Notes", k: "Editorial · Web", s: "editorial-web", c: "Slow-reading magazine with a custom long-form publishing system." },
    { t: "Take Off Your Mask", k: "Poster design · Editorial art", s: "unmasked", c: "Designed a high-contrast editorial poster combining surreal portrait manipulation with bold typography to explore themes of authenticity." }
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="design" className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-ember mb-4">Discipline · Three</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-cream max-w-3xl">
              Digital design with conviction.
            </h2>
          </div>
          <p className="max-w-sm text-cream/60 leading-relaxed">
            Identities, websites and product surfaces built like furniture — proportioned, considered, made to last.
          </p>
        </div>

        <div className="hidden md:flex h-[32rem] rounded-2xl overflow-hidden border border-cream/10">
          {items.map((it, i) => (
            <button
              key={it.s}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              className={`relative h-full transition-all duration-[900ms] ease-[cubic-bezier(.7,0,.2,1)] border-r border-ink/30 last:border-r-0 overflow-hidden text-left ${
                open === i ? "flex-[4]" : "flex-[1]"
              }`}
            >
              <img src={`/assets/demo ${i + 6}.jpg`} alt={it.t} className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ${open === i ? "grayscale-0 scale-100" : "grayscale scale-110 opacity-70"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">N° {String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl text-cream">{it.t}</h3>
                  <div className={`overflow-hidden transition-all duration-700 ${open === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="font-mono text-[11px] text-ember tracking-[0.3em] mb-2">{it.k}</div>
                    <p className="text-cream/80 text-sm max-w-sm leading-relaxed">{it.c}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* mobile stack */}
        <div className="md:hidden space-y-3">
          {items.map((it, i) => (
            <div key={it.s} className="relative h-64 rounded-xl overflow-hidden">
              <img src={`/assets/demo ${i + 6}.jpg`} alt={it.t} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember">N° {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl text-cream">{it.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ MARQUEE ============ */
function Marquee() {
  const words = ["Strategy", "Content", "Photography", "Identity", "Web", "Campaigns", "Retouch", "Art Direction"];
  const row = [...words, ...words];
  return (
    <div className="py-20 border-y border-cream/10 overflow-hidden">
      <div className="marquee flex gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display text-[clamp(2.5rem,6vw,5rem)] text-cream/80 flex items-center gap-12">
            {w}
            <span className="h-2 w-2 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const data = [
    { q: "Dylan rebuilt our entire social presence from the ground up. Six months later we have a brand people screenshot, not scroll past.", n: "Niloofar Ahmadi", r: "Marketing Lead, Linea Coffee", s: "client-niloofar" },
    { q: "The photography work is honestly the best we have commissioned in a decade — restrained, considered, completely on-brand.", n: "Daniel Voss", r: "Creative Director, Atelier Noir", s: "client-daniel" },
    { q: "They redesigned our product surface and the conversion rate moved 41% in the first quarter. Quiet design, loud results.", n: "Aida Karimi", r: "Founder, Folio Bank", s: "client-aida" },
  ];
  const [i, setI] = useState(0);
  const t = data[i];

  return (
    <section id="voices" className="relative py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-ember mb-12">Client voices</div>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-3 relative h-72">
            {data.map((d, idx) => (
              <img
                key={d.s}
                src={img(d.s, 600, 800)}
                alt={d.n}
                className={`absolute inset-0 w-full h-full object-cover rounded-lg grayscale transition-all duration-700 ${
                  idx === i ? "opacity-100 translate-x-0" : idx < i ? "opacity-0 -translate-x-6" : "opacity-0 translate-x-6"
                }`}
              />
            ))}
          </div>
          <div className="md:col-span-9">
            <blockquote key={i} className="font-display text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.2] tracking-tight text-cream text-balance">
              "{t.q}"
            </blockquote>
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-cream font-medium">{t.n}</div>
                <div className="text-cream/50 text-sm">{t.r}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setI((p) => (p - 1 + data.length) % data.length)} className="h-12 w-12 rounded-full border border-cream/20 hover:bg-cream hover:text-ink text-cream transition" aria-label="Previous">←</button>
                <button onClick={() => setI((p) => (p + 1) % data.length)} className="h-12 w-12 rounded-full border border-cream/20 hover:bg-cream hover:text-ink text-cream transition" aria-label="Next">→</button>
                <span className="ml-3 font-mono text-xs text-cream/50">{String(i + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ MAD LIBS CONTACT FORM ============ */
function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [company, setCompany] = useState("");
  const [timeline, setTimeline] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "a new friend"}`);
    const body = encodeURIComponent(
      `Hi, my name is ${name || "[your name]"} and I'm looking to collaborate on a ${service || "[service]"} project for ${company || "[your company]"}. Our goal is to launch this by ${timeline || "[timeline]"}. You can reach me at ${email || "[your email]"} or by phone at ${phone || "[your phone]"} to start the conversation.`
    );
    window.open(`mailto:dylan@dylanhuynh.com?subject=${subject}&body=${body}`, "_blank");
  };

  const inputClass = "bg-transparent border-b-2 border-cream/20 text-cream font-medium px-1 py-0.5 outline-none transition-all duration-300 focus:border-ember hover:border-cream/50 placeholder:text-cream/30 min-w-[100px] max-w-[180px] md:min-w-[130px]";
  const selectTriggerClass = "inline-flex items-center gap-1 border-b-2 border-cream/20 text-cream font-medium px-1 py-0.5 outline-none transition-all duration-300 focus:border-ember hover:border-cream/50 min-w-[100px] max-w-[180px] md:min-w-[130px] h-auto w-auto rounded-none bg-transparent shadow-none focus:ring-0 data-[placeholder]:text-cream/30 cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="font-sans text-lg md:text-xl text-cream/80 leading-relaxed max-w-4xl">
      <p className="mb-8">
        Hi, my name is{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
          className={inputClass}
          required
        />{" "}
        and I'm looking to collaborate on a{" "}
        <Select value={service} onValueChange={setService} name="service">
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="select service" />
          </SelectTrigger>
          <SelectContent className="border-cream/10 bg-ink text-cream">
            <SelectItem value="Photography">Photography</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Social Media">Social Media</SelectItem>
            <SelectItem value="A Mix of Services">A Mix of Services</SelectItem>
          </SelectContent>
        </Select>{" "}
        project for{" "}
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="your company (optional)"
          className={inputClass}
        />.{" "}
        Our goal is to launch this by{" "}
        <Select value={timeline} onValueChange={setTimeline} name="timeline">
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="select timeline" />
          </SelectTrigger>
          <SelectContent className="border-cream/10 bg-ink text-cream">
            <SelectItem value="As soon as possible">As soon as possible</SelectItem>
            <SelectItem value="In 1-2 months">In 1-2 months</SelectItem>
            <SelectItem value="Just planning ahead">Just planning ahead</SelectItem>
          </SelectContent>
        </Select>
        . You can reach me at{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email address"
          className={inputClass}
          required
        />{" "}
        or by phone at{" "}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="your phone number"
          className={inputClass}
        />{" "}
        to start the conversation.
      </p>
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cream text-ink font-medium text-base hover:bg-ember hover:text-ink transition-all duration-300"
      >
        Send Message <span aria-hidden>→</span>
      </button>
    </form>
  );
}

/* ============ FOOTER / CTA ============ */
function Footer() {
  return (
    <footer id="contact" className="relative w-full overflow-hidden">
      <img
        src="/assets/footer 2.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 z-[1]" />
      <div className="relative z-[2] px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight text-cream text-balance">
            Let's build something
            <br />
            <span className="text-ember italic">unmissable.</span>
          </h2>

          <div className="mt-14 mb-20 border-t border-cream/10 pt-12">
            <ContactForm />
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-cream/10 pt-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">Email</div>
              <a href="mailto:dylan@dylanhuynh.com" className="text-cream text-lg hover:text-ember transition">dylan@dylanhuynh.com</a>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">Studio</div>
              <div className="text-cream text-lg">Tehran · Lisbon</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">Elsewhere</div>
              <div className="flex gap-4 text-cream">
                <a href="#" className="hover:text-ember">Instagram</a>
                <a href="#" className="hover:text-ember">Behance</a>
                <a href="#" className="hover:text-ember">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between font-mono text-xs text-cream/40 uppercase tracking-[0.3em]">
            <span>© Dylan Huynh · MMXXVI</span>
            <span className="flex items-center gap-1 lowercase normal-case tracking-normal">
              made with{" "}
              <svg className="h-3.5 w-3.5 text-ember inline-block" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>{" "}
              by{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61590422384756"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember transition"
              >
                autosynapse
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============ PAGE ============ */
function Home() {
  const [intro, setIntro] = useState(true);

  useLayoutEffect(() => {
    if (intro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      ScrollTrigger.refresh();
    }
  }, [intro]);

  return (
    <main className="overflow-x-hidden w-full max-w-full bg-background text-foreground">
      {intro && <Intro onDone={() => setIntro(false)} />}
      <Nav />
      <Hero />
      <Disciplines />
      <SocialShowcase />
      <Photography />
      <DesignShowcase />
      <Marquee />
      <Testimonials />
      <Footer />
    </main>
  );
}
