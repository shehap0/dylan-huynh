import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as ScrollTrigger, g as gsapWithCSS } from "../_libs/gsap.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { R as Root2, V as Value, T as Trigger, I as Icon, P as Portal, C as Content2, a as Viewport, b as Item, c as ItemIndicator, d as ItemText, S as ScrollUpButton, e as ScrollDownButton, L as Label, f as Separator } from "../_libs/radix-ui__react-select.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as motion, u as useMotionValue, a as animate, b as useSpring, c as useTransform } from "../_libs/framer-motion.mjs";
import { C as ChevronDown, a as Check, b as ChevronUp } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
if (typeof window !== "undefined") {
  gsapWithCSS.registerPlugin(ScrollTrigger, useGSAP);
}
const img = (seed, w = 1600, h = 1e3) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
function CountUp({
  to,
  suffix = "",
  decimals = 0
}) {
  const ref = reactExports.useRef(null);
  const [display, setDisplay] = reactExports.useState(0);
  const [started, setStarted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ref.current || started) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        const duration = 1500;
        const startTime = performance.now();
        const animate2 = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(to * eased);
          if (progress < 1) requestAnimationFrame(animate2);
        };
        requestAnimationFrame(animate2);
        observer.disconnect();
      }
    }, {
      threshold: 0.3
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, started]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    display.toFixed(decimals),
    suffix
  ] });
}
function Intro({
  onDone
}) {
  const root = reactExports.useRef(null);
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(id);
          return 100;
        }
        return c + Math.ceil(Math.random() * 7);
      });
    }, 60);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    if (count < 100) return;
    const tl = gsapWithCSS.timeline({
      onComplete: onDone
    });
    tl.to(".intro-word", {
      yPercent: -110,
      stagger: 0.08,
      duration: 0.7,
      ease: "expo.inOut"
    }, 0.2).to(root.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut"
    }, "+=0.1");
  }, [count, onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: root, className: "fixed inset-0 z-[100] bg-ink text-cream flex flex-col grain", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-end justify-between px-8 md:px-16 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intro-word font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] tracking-tight", children: "DYLAN HUYNH" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intro-word font-mono text-sm uppercase tracking-[0.3em] opacity-70", children: "est. studio · 2019" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-cream/20 px-8 md:px-16 py-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-[0.3em] opacity-60", children: "Loading the studio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl md:text-5xl tabular-nums", children: Math.min(count, 100) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 h-[2px] bg-ember", style: {
      width: `${Math.min(count, 100)}%`
    } })
  ] });
}
function Nav({
  visible
}) {
  const [light, setLight] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = document.getElementById("top");
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setLight(entry.isIntersecting), {
      threshold: 0
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.nav, { initial: {
    y: -120
  }, animate: visible ? {
    y: 0
  } : {
    y: -120
  }, transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1]
  }, className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,1100px)]", style: {
    pointerEvents: visible ? "auto" : "none"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between px-3 py-3 rounded-full border transition-colors duration-500 ${light ? "border-black/10 bg-white/70 backdrop-blur-xl shadow-sm" : "border-cream/10 bg-ink/60 backdrop-blur-xl shadow-2xl"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 pl-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-ember" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display font-bold tracking-tight transition-colors duration-500 ${light ? "text-black" : "text-cream"}`, children: "Dylan Huynh" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-1 text-sm", children: [["Social", "#social"], ["Photography", "#photography"], ["Design", "#design"], ["Voices", "#voices"]].map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: `px-4 py-2 rounded-full transition-all duration-500 ${light ? "text-black/60 hover:text-black hover:bg-black/5" : "text-cream/70 hover:text-cream hover:bg-cream/5"}`, children: l }) }, l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: `px-5 py-2.5 rounded-full text-ink text-sm font-medium transition-all duration-500 ${light ? "bg-ember hover:bg-ember/80" : "bg-cream hover:bg-ember"}`, children: "Start a project" })
  ] }) });
}
const galleryImages = Array.from({
  length: 26
}, (_, i) => ({
  url: `/assets/hero/demo ${11 + i}.jpg`
}));
const DESIGN_PATTERN = [{
  w: 340,
  h: 480,
  align: "self-start",
  mt: "translate-y-0"
}, {
  w: 240,
  h: 340,
  align: "self-center",
  mt: "translate-y-12"
}, {
  w: 400,
  h: 300,
  align: "self-end",
  mt: "-translate-y-6"
}, {
  w: 280,
  h: 420,
  align: "self-start",
  mt: "translate-y-4"
}, {
  w: 200,
  h: 260,
  align: "self-center",
  mt: "translate-y-16"
}, {
  w: 460,
  h: 520,
  align: "self-start",
  mt: "-translate-y-8"
}, {
  w: 260,
  h: 380,
  align: "self-end",
  mt: "translate-y-8"
}, {
  w: 320,
  h: 320,
  align: "self-center",
  mt: "-translate-y-2"
}];
function TiltCard({
  src,
  w,
  h,
  align,
  mt
}) {
  const ref = reactExports.useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20
  });
  const handleMouse = reactExports.useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mx, my]);
  const handleLeave = reactExports.useCallback(() => {
    animate(mx, 0, {
      type: "spring",
      stiffness: 200,
      damping: 20
    });
    animate(my, 0, {
      type: "spring",
      stiffness: 200,
      damping: 20
    });
  }, [mx, my]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ref, onMouseMove: handleMouse, onMouseLeave: handleLeave, style: {
    rotateX,
    rotateY,
    perspective: 1200,
    width: w,
    height: h
  }, className: `relative shrink-0 group overflow-hidden rounded-sm cursor-grab active:cursor-grabbing ${align} ${mt}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover", draggable: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" })
  ] });
}
function Hero() {
  const trackRef = reactExports.useRef(null);
  const xMotion = useMotionValue(0);
  const controlsRef = reactExports.useRef(null);
  const doubled = [...galleryImages, ...galleryImages];
  const startAutoScroll = reactExports.useCallback(() => {
    if (!trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    const currentX = xMotion.get();
    const remaining = Math.abs(-halfWidth - currentX);
    const duration = remaining / halfWidth * 50;
    controlsRef.current = animate(xMotion, -halfWidth, {
      ease: "linear",
      duration,
      onComplete: () => {
        xMotion.set(0);
        startAutoScroll();
      }
    });
  }, [xMotion]);
  reactExports.useEffect(() => {
    const timer = setTimeout(startAutoScroll, 100);
    return () => {
      controlsRef.current?.stop();
      clearTimeout(timer);
    };
  }, [startAutoScroll]);
  const handleDragUpdate = reactExports.useCallback(() => {
    if (!trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    const x = xMotion.get();
    if (x < -halfWidth) xMotion.set(x + halfWidth);
    else if (x > 0) xMotion.set(x - halfWidth);
  }, [xMotion]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen bg-[#f7f7f5] text-black flex flex-col justify-between overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 md:px-14 pt-24 md:pt-28 pb-4 relative z-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 80
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15
      }, className: "font-display font-bold leading-[0.85] tracking-[-0.05em] text-black max-w-5xl", style: {
        fontSize: "clamp(4rem, 12vw, 10rem)"
      }, children: [
        "CREATIVE",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "FORCE"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      }, className: "mt-6 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm md:text-base leading-relaxed text-black/70", children: "DYLAN HUYNH — VISUAL STORYTELLER & DESIGNER SPECIALIZING IN LUXURY BRANDS, SOCIAL CAMPAIGNS, AND HIGH-END PHOTOGRAPHY." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs tracking-[0.3em] text-black/50 mt-4", children: "SOCIAL. PHOTOGRAPHY. DESIGN. 3D VISUALS." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden my-auto py-12 md:py-16 z-20", style: {
      marginTop: -100
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref: trackRef, style: {
        x: xMotion
      }, drag: "x", dragElastic: 0.08, onDrag: handleDragUpdate, onDragStart: () => controlsRef.current?.stop(), onDragEnd: () => {
        handleDragUpdate();
        startAutoScroll();
      }, className: "flex gap-8 md:gap-10 w-max items-center h-[580px] px-8 md:px-14", children: doubled.map((img2, i) => {
        const config = DESIGN_PATTERN[i % DESIGN_PATTERN.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { src: img2.url, w: config.w, h: config.h, align: config.align, mt: config.mt }, `${img2.url}-${i}`);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f7f7f5] via-[#f7f7f5]/80 to-transparent pointer-events-none z-[2]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f7f7f5] via-[#f7f7f5]/80 to-transparent pointer-events-none z-[2]" })
    ] })
  ] });
}
function Disciplines() {
  const ref = reactExports.useRef(null);
  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".reveal-word") ?? [];
    gsapWithCSS.fromTo(words, {
      opacity: 0.12
    }, {
      opacity: 1,
      stagger: 0.04,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 70%",
        end: "bottom 60%",
        scrub: true
      }
    });
  }, {
    scope: ref
  });
  const sentence = "Three disciplines, woven into one studio practice. Strategy, image and interface — built side by side, never in silos.";
  const disciplines = [{
    n: "01",
    k: "Social Media Marketing",
    d: "Always-on content systems, paid creative, community building."
  }, {
    n: "02",
    k: "Photography",
    d: "Editorial, product and campaign imagery shot in studio and on location."
  }, {
    n: "03",
    k: "Digital Design",
    d: "Brand systems, websites and product interfaces with craft at the center."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-32 md:py-48 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-balance text-cream text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.2] tracking-tight max-w-5xl", children: sentence.split(" ").map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reveal-word inline-block mr-[0.25em]", children: w }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-cream/15", children: disciplines.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-8 border-b md:border-b-0 md:border-r last:md:border-r-0 border-cream/15 hover:bg-cream/[0.03] transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-ember tracking-[0.3em]", children: d.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-cream/20 group-hover:bg-ember group-hover:w-16 transition-all duration-500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-cream leading-tight mb-4", children: d.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/60 text-sm leading-relaxed", children: d.d })
    ] }, d.n)) })
  ] }) });
}
function SocialShowcase() {
  const ref = reactExports.useRef(null);
  useGSAP(() => {
    gsapWithCSS.utils.toArray(".bento-card").forEach((el) => {
      gsapWithCSS.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      });
    });
  }, {
    scope: ref
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "social", ref, className: "relative py-32 md:py-48 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.4em] text-ember mb-4", children: "Discipline · One" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-cream max-w-3xl", children: "Social Media Marketing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-cream/60 leading-relaxed", children: "Daily content, paid creative and community work for brands that want a real audience, not a vanity number." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-flow-dense grid-cols-4 grid-rows-[repeat(3,16rem)] gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bento-card group relative col-span-2 row-span-2 rounded-2xl overflow-hidden bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img("reels-grid", 1400, 1400), alt: "", className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-ember tracking-[0.3em] mb-3", children: "Case · Linea Coffee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl md:text-4xl text-cream leading-tight max-w-md", children: [
            "+",
            /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 312 }),
            "% organic reach in 90 days"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bento-card col-span-2 row-span-1 rounded-2xl bg-card border border-cream/10 p-8 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-cream/50 tracking-[0.3em]", children: "Engagement rate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 8.4, decimals: 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream/50 text-sm", children: "Avg. across managed accounts, last 12 months." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bento-card col-span-1 row-span-1 rounded-2xl bg-ember text-ink p-6 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] opacity-70", children: "Always-on" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl leading-tight", children: "Strategy, content & paid in one team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bento-card group col-span-1 row-span-1 rounded-2xl overflow-hidden relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img("instagram-portrait", 800, 800), alt: "", className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream", children: "Reel · 1.2M views" })
      ] })
    ] })
  ] }) });
}
function Photography() {
  const ref = reactExports.useRef(null);
  useGSAP(() => {
    const mm = gsapWithCSS.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".photo-pin",
        pinSpacing: false
      });
    });
    gsapWithCSS.utils.toArray(".photo-frame").forEach((el) => {
      const img2 = el.querySelector("img");
      if (!img2) return;
      gsapWithCSS.set(img2, {
        filter: "grayscale(1)"
      });
      const tl = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          scrub: true
        }
      });
      tl.fromTo(el, {
        scale: 0.85,
        opacity: 0.4
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.5
      }).to(el, {
        opacity: 0.2,
        duration: 0.5
      }, 0.5);
      gsapWithCSS.to(img2, {
        filter: "grayscale(0)",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 30%",
          scrub: true
        }
      });
    });
  }, {
    scope: ref
  });
  const projects = [{
    t: "Atelier Noir — SS25",
    k: "Fashion · Studio",
    s: "fashion-noir"
  }, {
    t: "Maison Rouge — Vogue",
    k: "Food · Editorial",
    s: "restaurant-food"
  }, {
    t: "Vahid Khorasani — photography",
    k: "Portrait · Natural light",
    s: "portrait-man"
  }, {
    t: "Lumen Watches — photography",
    k: "Product · Studio",
    s: "watch-product"
  }, {
    t: "Sahar Architecture — Spaces",
    k: "Architecture · On location",
    s: "architecture-space"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "photography", ref, className: "relative bg-cream text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 max-w-[1600px] mx-auto px-6 py-32 md:py-48 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 photo-pin md:h-screen flex flex-col justify-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.4em] text-ember mb-6", children: "Discipline · Two" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] tracking-tight max-w-md", children: "Photography that earns a second look." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-sm text-ink/70 leading-relaxed", children: "Editorial, fashion, food and product imagery — shot in our Tehran studio or on location, retouched with restraint." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "mt-10 inline-flex w-fit items-center gap-3 px-6 py-3 rounded-full bg-ink text-cream hover:bg-ember hover:text-ink transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Commission a shoot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 space-y-24", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "photo-frame group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md bg-ink/5 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/assets/demo ${i + 1}.jpg`, alt: p.t, className: "w-full h-auto object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs uppercase tracking-[0.3em] text-ink/50", children: [
          "N° ",
          String(i + 1).padStart(2, "0"),
          " · ",
          p.k
        ] })
      ] })
    ] }, p.s)) })
  ] }) });
}
function DesignShowcase() {
  const items = [{
    t: "King Eric",
    k: "Editorial design · Web interactive",
    s: "collar-up",
    c: "Designed a digital retrospective exploring the career, philosophy, and distinct style of the Manchester United icon."
  }, {
    t: "Numa Studio",
    k: "Identity · Website",
    s: "studio-website",
    c: "A monochrome identity for a Lisbon-based architecture practice."
  }, {
    t: "Orbit Health",
    k: "Product · App",
    s: "health-app",
    c: "Onboarding and dashboard for a habit tracker that respects attention."
  }, {
    t: "Field Notes",
    k: "Editorial · Web",
    s: "editorial-web",
    c: "Slow-reading magazine with a custom long-form publishing system."
  }, {
    t: "Take Off Your Mask",
    k: "Poster design · Editorial art",
    s: "unmasked",
    c: "Designed a high-contrast editorial poster combining surreal portrait manipulation with bold typography to explore themes of authenticity."
  }];
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "design", className: "relative py-32 md:py-48 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.4em] text-ember mb-4", children: "Discipline · Three" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-cream max-w-3xl", children: "Digital design with conviction." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-cream/60 leading-relaxed", children: "Identities, websites and product surfaces built like furniture — proportioned, considered, made to last." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex h-[32rem] rounded-2xl overflow-hidden border border-cream/10", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onMouseEnter: () => setOpen(i), onFocus: () => setOpen(i), className: `relative h-full transition-all duration-[900ms] ease-[cubic-bezier(.7,0,.2,1)] border-r border-ink/30 last:border-r-0 overflow-hidden text-left ${open === i ? "flex-[4]" : "flex-[1]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/assets/demo ${i + 6}.jpg`, alt: it.t, className: `absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ${open === i ? "grayscale-0 scale-100" : "grayscale scale-110 opacity-70"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80", children: [
          "N° ",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-cream", children: it.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `overflow-hidden transition-all duration-700 ${open === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-ember tracking-[0.3em] mb-2", children: it.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 text-sm max-w-sm leading-relaxed", children: it.c })
          ] })
        ] })
      ] })
    ] }, it.s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `/assets/demo ${i + 6}.jpg`, alt: it.t, className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-ember", children: [
          "N° ",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-cream", children: it.t })
      ] })
    ] }, it.s)) })
  ] }) });
}
function Marquee() {
  const words = ["Strategy", "Content", "Photography", "Identity", "Web", "Campaigns", "Retouch", "Art Direction"];
  const row = [...words, ...words];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 border-y border-cream/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee flex gap-12 whitespace-nowrap", children: row.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[clamp(2.5rem,6vw,5rem)] text-cream/80 flex items-center gap-12", children: [
    w,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-ember" })
  ] }, i)) }) });
}
function Testimonials() {
  const data = [{
    q: "Dylan rebuilt our entire social presence from the ground up. Six months later we have a brand people screenshot, not scroll past.",
    n: "Niloofar Ahmadi",
    r: "Marketing Lead, Linea Coffee",
    s: "client-niloofar"
  }, {
    q: "The photography work is honestly the best we have commissioned in a decade — restrained, considered, completely on-brand.",
    n: "Daniel Voss",
    r: "Creative Director, Atelier Noir",
    s: "client-daniel"
  }, {
    q: "They redesigned our product surface and the conversion rate moved 41% in the first quarter. Quiet design, loud results.",
    n: "Aida Karimi",
    r: "Founder, Folio Bank",
    s: "client-aida"
  }];
  const [i, setI] = reactExports.useState(0);
  const t = data[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "voices", className: "relative py-32 md:py-48 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.4em] text-ember mb-12", children: "Client voices" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 relative h-72", children: data.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img(d.s, 600, 800), alt: d.n, className: `absolute inset-0 w-full h-full object-cover rounded-lg grayscale transition-all duration-700 ${idx === i ? "opacity-100 translate-x-0" : idx < i ? "opacity-0 -translate-x-6" : "opacity-0 translate-x-6"}` }, d.s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.2] tracking-tight text-cream text-balance", children: [
          '"',
          t.q,
          '"'
        ] }, i),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream font-medium", children: t.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream/50 text-sm", children: t.r })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI((p) => (p - 1 + data.length) % data.length), className: "h-12 w-12 rounded-full border border-cream/20 hover:bg-cream hover:text-ink text-cream transition", "aria-label": "Previous", children: "←" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI((p) => (p + 1) % data.length), className: "h-12 w-12 rounded-full border border-cream/20 hover:bg-cream hover:text-ink text-cream transition", "aria-label": "Next", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 font-mono text-xs text-cream/50", children: [
              String(i + 1).padStart(2, "0"),
              " / ",
              String(data.length).padStart(2, "0")
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function ContactForm() {
  const [name, setName] = reactExports.useState("");
  const [service, setService] = reactExports.useState("");
  const [company, setCompany] = reactExports.useState("");
  const [timeline, setTimeline] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "a new friend"}`);
    const body = encodeURIComponent(`Hi, my name is ${name || "[your name]"} and I'm looking to collaborate on a ${service || "[service]"} project for ${company || "[your company]"}. Our goal is to launch this by ${timeline || "[timeline]"}. You can reach me at ${email || "[your email]"} or by phone at ${phone || "[your phone]"} to start the conversation.`);
    window.open(`mailto:dylan@dylanhuynh.com?subject=${subject}&body=${body}`, "_blank");
  };
  const inputClass = "bg-transparent border-b-2 border-cream/20 text-cream font-medium px-1 py-0.5 outline-none transition-all duration-300 focus:border-ember hover:border-cream/50 placeholder:text-cream/30 min-w-[100px] max-w-[180px] md:min-w-[130px]";
  const selectTriggerClass = "inline-flex items-center gap-1 border-b-2 border-cream/20 text-cream font-medium px-1 py-0.5 outline-none transition-all duration-300 focus:border-ember hover:border-cream/50 min-w-[100px] max-w-[180px] md:min-w-[130px] h-auto w-auto rounded-none bg-transparent shadow-none focus:ring-0 data-[placeholder]:text-cream/30 cursor-pointer";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "font-sans text-lg md:text-xl text-cream/80 leading-relaxed max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-8", children: [
      "Hi, my name is",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), placeholder: "your name", className: inputClass, required: true }),
      " ",
      "and I'm looking to collaborate on a",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: service, onValueChange: setService, name: "service", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: selectTriggerClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "select service" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "border-cream/10 bg-ink text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Photography", children: "Photography" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Design", children: "Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Social Media", children: "Social Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "A Mix of Services", children: "A Mix of Services" })
        ] })
      ] }),
      " ",
      "project for",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: company, onChange: (e) => setCompany(e.target.value), placeholder: "your company (optional)", className: inputClass }),
      ".",
      " ",
      "Our goal is to launch this by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: timeline, onValueChange: setTimeline, name: "timeline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: selectTriggerClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "select timeline" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "border-cream/10 bg-ink text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "As soon as possible", children: "As soon as possible" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "In 1-2 months", children: "In 1-2 months" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Just planning ahead", children: "Just planning ahead" })
        ] })
      ] }),
      ". You can reach me at",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "your email address", className: inputClass, required: true }),
      " ",
      "or by phone at",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "your phone number", className: inputClass }),
      " ",
      "to start the conversation."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cream text-ink font-medium text-base hover:bg-ember hover:text-ink transition-all duration-300", children: [
      "Send Message ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { id: "contact", className: "relative w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/footer 2.jpg", alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 z-[1]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-[2] px-6 pt-24 md:pt-32 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight text-cream text-balance", children: [
        "Let's build something",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember italic", children: "unmissable." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 mb-20 border-t border-cream/10 pt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 border-t border-cream/10 pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-3", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:dylan@dylanhuynh.com", className: "text-cream text-lg hover:text-ember transition", children: "dylan@dylanhuynh.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-3", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream text-lg", children: "Tehran · Lisbon" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-3", children: "Elsewhere" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-cream", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ember", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ember", children: "Behance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ember", children: "LinkedIn" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center justify-between font-mono text-xs text-cream/40 uppercase tracking-[0.3em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© Dylan Huynh · MMXXVI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 lowercase normal-case tracking-normal", children: [
          "made with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-3.5 w-3.5 text-ember inline-block", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) }),
          " ",
          "by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/profile.php?id=61590422384756", target: "_blank", rel: "noopener noreferrer", className: "hover:text-ember transition", children: "autosynapse" })
        ] })
      ] })
    ] }) })
  ] });
}
function Home() {
  const [intro, setIntro] = reactExports.useState(true);
  reactExports.useLayoutEffect(() => {
    if (intro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      ScrollTrigger.refresh();
    }
  }, [intro]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "overflow-x-hidden w-full max-w-full bg-background text-foreground", children: [
    intro && /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, { onDone: () => setIntro(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { visible: !intro }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Disciplines, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialShowcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Photography, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DesignShowcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Home as component
};
