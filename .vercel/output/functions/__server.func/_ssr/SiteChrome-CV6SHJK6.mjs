import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Search, P as Quote, Q as Mail, Qt as BookOpen, Rt as CodeXml, S as SlidersHorizontal, Ut as ChevronRight, Vt as CircleCheck, _ as Star, bt as Gauge, ct as Layers, kt as ExternalLink, lt as Laptop, n as X, nn as ArrowUpRight, rn as ArrowRight, w as ShieldCheck, y as Sparkles, zt as Clock } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as FacebookLogo, c as InstagramLogo, d as PhoneLogo, f as TelegramLogo, g as cn, h as WhatsAppLogo, i as LINKS, m as ViberLogo, n as useContactModal, r as CONTACT, s as GmailLogo, u as MapsLogo, y as useSiteConfig } from "./router-ICi-0EwA.mjs";
import { _ as resolveSectionsOrder, c as ScrollProgress, d as calculateReadingTime, f as isComponentEnabled, g as resolveSectionVisibility, i as Nav, r as Footer, s as SEO, t as Button, v as scrollToId, y as usePreviewMode } from "./Footer-CXqLKlrJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteChrome-CV6SHJK6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COUNTRY_MAP = {
	US: {
		name: "United States",
		flag: "🇺🇸",
		city: "San Francisco",
		region: "California",
		postalCode: "94105",
		street: "101 Market St, Financial District"
	},
	USA: {
		name: "United States",
		flag: "🇺🇸",
		city: "New York",
		region: "New York",
		postalCode: "10001",
		street: "350 5th Ave, Manhattan"
	},
	GB: {
		name: "United Kingdom",
		flag: "🇬🇧",
		city: "London",
		region: "Greater London",
		postalCode: "EC2A 4NE",
		street: "25 Old Street, Silicon Roundabout"
	},
	UK: {
		name: "United Kingdom",
		flag: "🇬🇧",
		city: "London",
		region: "Greater London",
		postalCode: "W1D 3QU",
		street: "14 Soho Square, Westminster"
	},
	UA: {
		name: "Ukraine",
		flag: "🇺🇦",
		city: "Kyiv",
		region: "Kyiv City",
		postalCode: "01001",
		street: "14 Khreshchatyk St, Pechersk"
	},
	DE: {
		name: "Germany",
		flag: "🇩🇪",
		city: "Berlin",
		region: "Berlin",
		postalCode: "10115",
		street: "Friedrichstraße 43, Mitte"
	},
	CA: {
		name: "Canada",
		flag: "🇨🇦",
		city: "Toronto",
		region: "Ontario",
		postalCode: "M5V 2T6",
		street: "200 Bay St, Financial Core"
	},
	AE: {
		name: "United Arab Emirates",
		flag: "🇦🇪",
		city: "Dubai",
		region: "Dubai Emirate",
		postalCode: "00000",
		street: "Sheikh Zayed Rd, DIFC Gate Tower 4"
	},
	FR: {
		name: "France",
		flag: "🇫🇷",
		city: "Paris",
		region: "Île-de-France",
		postalCode: "75008",
		street: "28 Avenue des Champs-Élysées"
	},
	AU: {
		name: "Australia",
		flag: "🇦🇺",
		city: "Sydney",
		region: "New South Wales",
		postalCode: "2000",
		street: "100 George St, The Rocks"
	},
	NL: {
		name: "Netherlands",
		flag: "🇳🇱",
		city: "Amsterdam",
		region: "North Holland",
		postalCode: "1012 JS",
		street: "Keizersgracht 421"
	},
	JP: {
		name: "Japan",
		flag: "🇯🇵",
		city: "Tokyo",
		region: "Tokyo Prefecture",
		postalCode: "150-0002",
		street: "1-1 Shibuya, Shibuya-ku"
	},
	SG: {
		name: "Singapore",
		flag: "🇸🇬",
		city: "Singapore",
		region: "Central Region",
		postalCode: "018981",
		street: "10 Collyer Quay, Ocean Financial Centre"
	},
	CH: {
		name: "Switzerland",
		flag: "🇨🇭",
		city: "Zurich",
		region: "Canton of Zurich",
		postalCode: "8001",
		street: "Bahnhofstrasse 45"
	},
	PL: {
		name: "Poland",
		flag: "🇵🇱",
		city: "Warsaw",
		region: "Masovian",
		postalCode: "00-024",
		street: "Nowy Świat 22"
	},
	ES: {
		name: "Spain",
		flag: "🇪🇸",
		city: "Madrid",
		region: "Community of Madrid",
		postalCode: "28013",
		street: "Gran Vía 32"
	},
	IT: {
		name: "Italy",
		flag: "🇮🇹",
		city: "Milan",
		region: "Lombardy",
		postalCode: "20121",
		street: "Via Montenapoleone 8"
	},
	SE: {
		name: "Sweden",
		flag: "🇸🇪",
		city: "Stockholm",
		region: "Stockholm County",
		postalCode: "111 52",
		street: "Kungsgatan 18"
	},
	IN: {
		name: "India",
		flag: "🇮🇳",
		city: "Bengaluru",
		region: "Karnataka",
		postalCode: "560001",
		street: "MG Road, Indiranagar"
	},
	BR: {
		name: "Brazil",
		flag: "🇧🇷",
		city: "São Paulo",
		region: "São Paulo",
		postalCode: "01310-100",
		street: "Avenida Paulista 1000"
	}
};
function countryCodeToFlag(code) {
	if (!code || code.length !== 2) return "🌐";
	const upper = code.toUpperCase();
	const first = 127397 + upper.charCodeAt(0);
	const second = 127397 + upper.charCodeAt(1);
	return String.fromCodePoint(first, second);
}
function resolveGeoLocation(countryInput, existingFlag, existingCity, existingPostal, existingStreet) {
	const raw = (countryInput || "").trim();
	const rawUpper = raw.toUpperCase();
	if (COUNTRY_MAP[rawUpper]) {
		const matched = COUNTRY_MAP[rawUpper];
		return {
			country: matched.name,
			countryCode: rawUpper.slice(0, 2),
			flag: matched.flag || countryCodeToFlag(rawUpper.slice(0, 2)),
			city: existingCity || matched.city,
			region: matched.region,
			postalCode: existingPostal || matched.postalCode,
			street: existingStreet || matched.street
		};
	}
	for (const [code, info] of Object.entries(COUNTRY_MAP)) if (info.name.toLowerCase() === raw.toLowerCase()) return {
		country: info.name,
		countryCode: code,
		flag: existingFlag && existingFlag !== "🌐" ? existingFlag : info.flag,
		city: existingCity || info.city,
		region: info.region,
		postalCode: existingPostal || info.postalCode,
		street: existingStreet || info.street
	};
	if (raw.toLowerCase().includes("united states") || raw.toLowerCase().includes("america")) return {
		country: "United States",
		countryCode: "US",
		flag: "🇺🇸",
		city: existingCity || "San Francisco",
		region: "California",
		postalCode: existingPostal || "94105",
		street: existingStreet || "101 Market St, Financial District"
	};
	if (raw.toLowerCase().includes("united kingdom") || raw.toLowerCase().includes("britain") || raw.toLowerCase().includes("england")) return {
		country: "United Kingdom",
		countryCode: "GB",
		flag: "🇬🇧",
		city: existingCity || "London",
		region: "Greater London",
		postalCode: existingPostal || "EC2A 4NE",
		street: existingStreet || "25 Old Street, Silicon Roundabout"
	};
	if (raw.toLowerCase().includes("ukraine")) return {
		country: "Ukraine",
		countryCode: "UA",
		flag: "🇺🇦",
		city: existingCity || "Kyiv",
		region: "Kyiv City",
		postalCode: existingPostal || "01001",
		street: existingStreet || "14 Khreshchatyk St, Pechersk"
	};
	if (raw.toLowerCase().includes("germany") || raw.toLowerCase().includes("deutschland")) return {
		country: "Germany",
		countryCode: "DE",
		flag: "🇩🇪",
		city: existingCity || "Berlin",
		region: "Berlin",
		postalCode: existingPostal || "10115",
		street: existingStreet || "Friedrichstraße 43, Mitte"
	};
	if (raw.toLowerCase().includes("canada")) return {
		country: "Canada",
		countryCode: "CA",
		flag: "🇨🇦",
		city: existingCity || "Toronto",
		region: "Ontario",
		postalCode: existingPostal || "M5V 2T6",
		street: existingStreet || "200 Bay St, Financial Core"
	};
	if (raw.toLowerCase().includes("emirates") || raw.toLowerCase().includes("dubai")) return {
		country: "United Arab Emirates",
		countryCode: "AE",
		flag: "🇦🇪",
		city: existingCity || "Dubai",
		region: "Dubai Emirate",
		postalCode: existingPostal || "00000",
		street: existingStreet || "Sheikh Zayed Rd, DIFC Gate Tower 4"
	};
	const code = raw.length === 2 ? raw.toUpperCase() : "US";
	const flag = existingFlag && existingFlag !== "🌐" ? existingFlag : countryCodeToFlag(code);
	return {
		country: raw || "United States",
		countryCode: code,
		flag: flag || "🇺🇸",
		city: existingCity || "San Francisco",
		region: "California",
		postalCode: existingPostal || "94105",
		street: existingStreet || "101 Market St, Financial District"
	};
}
var FALLBACK = [
	{
		src: "/hero/studio.mp4",
		poster: "/hero/studio.jpg",
		label: "Codex Dynamics",
		line: "The studio. The standard."
	},
	{
		src: "/hero/web-dev.mp4",
		poster: "/hero/web-dev.jpg",
		label: "Web Development",
		line: "Websites and web apps, assembled like a product."
	},
	{
		src: "/hero/design.mp4",
		poster: "/hero/design.jpg",
		label: "Web Design",
		line: "Type, color, and layout as one material."
	},
	{
		src: "/hero/social.mp4",
		poster: "/hero/social.jpg",
		label: "Social Media",
		line: "Content, campaigns, and growth — in one system."
	}
];
function AlternateHero({ layout }) {
	const { config } = useSiteConfig();
	const clips = config.hero?.clips?.length ? config.hero.clips : FALLBACK;
	const [clip, setClip] = (0, import_react.useState)(0);
	const current = clips[clip] || clips[0];
	const badge = config.hero?.badge || "Codex Dynamics";
	const title = config.hero?.title || "Precision on every screen.";
	const subtitle = config.hero?.subtitle || "Websites, web apps, and social campaigns — composed with the care of a product launch.";
	if (layout === "split") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		"aria-label": "Hero",
		className: "hero-stage relative isolate pt-20 sm:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid items-center gap-8 pb-10 lg:grid-cols-2 lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
						children: badge
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[2.1rem] leading-[1.05] font-semibold tracking-tight text-label sm:text-[3rem] lg:text-[3.4rem]",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: clips.map((video, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setClip(i),
							className: cn("rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors", i === clip ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"),
							children: video.label
						}, video.label || video.id || i))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-xl bg-ink aspect-[16/11] shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.poster,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					current.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: current.src,
						poster: current.poster,
						className: "absolute inset-0 h-full w-full object-cover",
						muted: true,
						loop: true,
						playsInline: true,
						autoPlay: true
					}, current.src) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-4 left-4 right-4 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.2em] uppercase text-paper/70",
							children: current.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-paper/90",
							children: current.line
						})]
					})
				]
			})]
		})
	});
	if (layout === "centered") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		"aria-label": "Hero",
		className: "hero-stage relative isolate pt-24 sm:pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell pb-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[11px] font-medium tracking-[0.24em] text-subtle uppercase",
					children: badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mx-auto max-w-4xl text-[2.35rem] leading-[1.05] font-semibold tracking-tight text-label sm:text-[3.4rem] lg:text-[4rem]",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base",
					children: subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-10 overflow-hidden rounded-xl bg-ink aspect-[21/9] max-w-5xl shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.poster,
						alt: "",
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-1.5",
					children: clips.map((video, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setClip(i),
						className: cn("min-h-10 rounded-full px-4 text-[12px] font-medium", i === clip ? "bg-label text-paper" : "bg-card text-muted-foreground"),
						children: video.label
					}, video.label || video.id || i))
				})
			]
		})
	});
	if (layout === "editorial") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		"aria-label": "Hero",
		className: "hero-stage relative isolate pt-28 sm:pt-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-medium tracking-[0.28em] text-subtle uppercase",
					children: badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-5xl font-display text-[2.8rem] leading-[0.98] font-semibold tracking-tight text-label sm:text-[4.4rem] lg:text-[5.2rem]",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
					children: subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-lg bg-ink aspect-[2.2/1] shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.poster,
						alt: "",
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-6 text-[13px] text-muted-foreground",
					children: clips.map((video) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-wide",
						children: video.label
					}, video.label || video.id))
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		"aria-label": "Hero",
		className: "hero-stage relative isolate pt-20 sm:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-3 pb-10 md:grid-cols-6 md:grid-rows-2 md:h-[min(72vh,38rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-xl bg-card p-6 md:col-span-3 md:row-span-2 md:p-8 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
					children: badge
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-[2rem] leading-[1.05] font-semibold tracking-tight text-label sm:text-[2.8rem]",
					children: title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground",
					children: subtitle
				})]
			}), clips.slice(0, 3).map((video, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setClip(i),
				className: cn("relative overflow-hidden rounded-xl bg-ink text-left md:col-span-3 min-h-[9rem]", i === 0 ? "md:col-span-3" : "md:col-span-3"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.poster,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-3 left-3 text-sm font-medium text-paper",
						children: video.label
					})
				]
			}, video.label || video.id || i))]
		})
	});
}
var HERO_VIDEOS = [
	{
		src: "/hero/studio.mp4",
		poster: "/hero/studio.jpg",
		label: "Codex Dynamics",
		line: "The studio. The standard."
	},
	{
		src: "/hero/web-dev.mp4",
		poster: "/hero/web-dev.jpg",
		label: "Web Development",
		line: "Websites and web apps, assembled like a product."
	},
	{
		src: "/hero/design.mp4",
		poster: "/hero/design.jpg",
		label: "Web Design",
		line: "Type, color, and layout as one material."
	},
	{
		src: "/hero/social.mp4",
		poster: "/hero/social.jpg",
		label: "Social Media",
		line: "Content, campaigns, and growth — in one system."
	}
];
var CLIP_MS = 1e4;
var TONE_MS = 22e3;
var TONE_CLASS = [
	"hero-tone-black",
	"hero-tone-pacific",
	"hero-tone-ash"
];
function Hero() {
	const { config } = useSiteConfig();
	const layout = config.theme?.heroLayout || config.theme?.layout?.heroLayout || "streamer";
	if (layout && layout !== "streamer") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlternateHero, { layout });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreamerHero, {});
}
function StreamerHero() {
	const { config } = useSiteConfig();
	const clips = config.hero?.clips?.length ? config.hero.clips : HERO_VIDEOS;
	const [clip, setClip] = (0, import_react.useState)(0);
	const [tone, setTone] = (0, import_react.useState)(0);
	const [visibleSlot, setVisibleSlot] = (0, import_react.useState)(0);
	const slotA = (0, import_react.useRef)(null);
	const slotB = (0, import_react.useRef)(null);
	const visibleSlotRef = (0, import_react.useRef)(0);
	const clipRef = (0, import_react.useRef)(0);
	const theaterRef = (0, import_react.useRef)(null);
	visibleSlotRef.current = visibleSlot;
	clipRef.current = clip;
	const showClip = (0, import_react.useCallback)((index) => {
		if (index === clipRef.current) return;
		const nextSlot = visibleSlotRef.current === 0 ? 1 : 0;
		const nextEl = nextSlot === 0 ? slotA.current : slotB.current;
		if (!nextEl) return;
		nextEl.src = clips[index].src;
		nextEl.poster = clips[index].poster;
		nextEl.currentTime = 0;
		nextEl.muted = true;
		nextEl.volume = 0;
		let transitioned = false;
		const switchNow = () => {
			if (transitioned) return;
			transitioned = true;
			nextEl.play().catch(() => {});
			visibleSlotRef.current = nextSlot;
			clipRef.current = index;
			setVisibleSlot(nextSlot);
			setClip(index);
		};
		if (nextEl.readyState >= 2) switchNow();
		else {
			nextEl.addEventListener("loadeddata", switchNow, { once: true });
			setTimeout(switchNow, 200);
		}
	}, [clips]);
	(0, import_react.useEffect)(() => {
		const a = slotA.current;
		if (!a) return;
		a.muted = true;
		a.volume = 0;
		a.play().catch(() => {});
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => {
			const next = (clipRef.current + 1) % clips.length;
			showClip(next);
		}, CLIP_MS);
		return () => window.clearInterval(timer);
	}, [showClip, clips.length]);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setInterval(() => {
			setTone((n) => (n + 1) % TONE_CLASS.length);
		}, TONE_MS);
		return () => window.clearInterval(timer);
	}, []);
	const onPointerMove = (e) => {
		const el = theaterRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		el.style.setProperty("--px", `${(e.clientX - r.left) / r.width * 100}%`);
		el.style.setProperty("--py", `${(e.clientY - r.top) / r.height * 100}%`);
	};
	const current = clips[clip] || clips[0] || HERO_VIDEOS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		"aria-label": "Hero",
		className: cn("hero-stage relative isolate pt-14 sm:pt-16", TONE_CLASS[tone]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell pt-2 pb-6 sm:pt-3 sm:pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: theaterRef,
				onPointerMove,
				className: "theater relative flex h-[min(58vh,30rem)] min-h-[22rem] w-full flex-col overflow-hidden rounded-xl bg-ink xl:h-[min(62vh,34rem)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center transition-all duration-700",
						style: { backgroundImage: `url(${current.poster})` },
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: slotA,
						src: clips[0]?.src || HERO_VIDEOS[0].src,
						poster: clips[0]?.poster || HERO_VIDEOS[0].poster,
						className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-700", visibleSlot === 0 && "hero-kenburns"),
						style: { opacity: visibleSlot === 0 ? 1 : 0 },
						muted: true,
						loop: true,
						playsInline: true,
						preload: "metadata"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: slotB,
						poster: clips[1]?.poster || HERO_VIDEOS[1].poster,
						className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-700", visibleSlot === 1 && "hero-kenburns"),
						style: { opacity: visibleSlot === 1 ? 1 : 0 },
						muted: true,
						loop: true,
						playsInline: true,
						preload: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/10 to-ink/28" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "theater-light pointer-events-none absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex h-full flex-col p-5 sm:p-7 lg:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "order-2 mt-auto flex flex-col gap-6 lg:order-none lg:mt-0 lg:flex-row lg:items-end lg:justify-between lg:gap-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-2xl xl:max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
											initial: {
												opacity: 0,
												y: 8
											},
											animate: {
												opacity: 1,
												y: 0
											},
											transition: {
												duration: .5,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "mb-3 flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-paper/70 uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "live-dot",
												"aria-hidden": "true"
											}), config.hero?.badge || "Codex Dynamics"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
											initial: {
												opacity: 0,
												y: 12,
												filter: "blur(6px)"
											},
											animate: {
												opacity: 1,
												y: 0,
												filter: "blur(0px)"
											},
											transition: {
												duration: .65,
												delay: .08,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "text-[2rem] leading-[1.05] font-semibold tracking-tight text-paper sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]",
											children: config.hero?.title || "Precision on every screen."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
											initial: {
												opacity: 0,
												y: 10
											},
											animate: {
												opacity: 1,
												y: 0
											},
											transition: {
												duration: .55,
												delay: .18,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "mt-3 max-w-md text-[15px] leading-relaxed text-paper/80 sm:text-base xl:max-w-lg",
											children: config.hero?.subtitle || "Websites, web apps, and social campaigns — composed with the care of a product launch."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "order-1 mb-3 lg:order-2 lg:mt-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 8,
											filter: "blur(4px)"
										},
										animate: {
											opacity: 1,
											y: 0,
											filter: "blur(0px)"
										},
										exit: {
											opacity: 0,
											y: -6,
											filter: "blur(4px)"
										},
										transition: {
											duration: .32,
											ease: [
												.22,
												1,
												.36,
												1
											]
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-medium tracking-[0.22em] text-paper/70 uppercase",
											children: current.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-paper/90 sm:text-[15px]",
											children: current.line
										})]
									}, current.label)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "order-3 flex gap-1.5",
								children: clips.map((video, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => showClip(i),
									className: cn("group/chip relative min-h-10 flex-1 overflow-hidden rounded-full px-1.5 text-left transition-colors duration-200 sm:px-2", i === clip ? "bg-paper/18" : "bg-paper/8 hover:bg-paper/14"),
									"aria-label": `Play ${video.label}`,
									"aria-current": i === clip,
									children: [i === clip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-progress absolute inset-y-0 left-0 rounded-full bg-paper/25" }, clip) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("relative z-10 block truncate px-1 py-2 text-center text-[10px] font-medium tracking-wide sm:px-2 sm:text-left sm:text-[11px]", i === clip ? "text-paper" : "text-paper/55"),
										children: video.label
									})]
								}, video.label))
							})
						]
					})
				]
			})
		})
	});
}
/**
* Custom hook providing an IntersectionObserver instance to track element visibility.
* Perfect for scroll-triggered entrance animations, analytics, and lazy execution.
*/
function useIntersectionObserver(options = {}) {
	const { threshold = .15, rootMargin = "0px 0px -50px 0px", triggerOnce = true, enabled = true } = options;
	const ref = (0, import_react.useRef)(null);
	const [isIntersecting, setIsIntersecting] = (0, import_react.useState)(false);
	const [entry, setEntry] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!enabled || !element) return;
		if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setIsIntersecting(true);
			return;
		}
		if (typeof IntersectionObserver === "undefined") {
			setIsIntersecting(true);
			return;
		}
		const observer = new IntersectionObserver(([observerEntry]) => {
			setEntry(observerEntry);
			if (observerEntry.isIntersecting) {
				setIsIntersecting(true);
				if (triggerOnce) {
					observer.unobserve(element);
					observer.disconnect();
				}
			} else if (!triggerOnce) setIsIntersecting(false);
		}, {
			threshold,
			rootMargin
		});
		observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, [
		threshold,
		rootMargin,
		triggerOnce,
		enabled
	]);
	return [
		ref,
		isIntersecting,
		entry
	];
}
function Reveal({ children, className, delay = 0, duration = 650, direction = "up", threshold = .12, rootMargin = "0px 0px -40px 0px", once = true, as, ...props }) {
	const Component = as || "div";
	const [ref, isIntersecting] = useIntersectionObserver({
		threshold,
		rootMargin,
		triggerOnce: once
	});
	const getDirectionClass = () => {
		switch (direction) {
			case "fade": return "reveal-fade";
			case "scale": return "reveal-scale";
			case "left": return "reveal-left";
			case "right": return "reveal-right";
			case "down": return "reveal-down";
			case "none": return "";
			default: return "reveal";
		}
	};
	const directionClass = getDirectionClass();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: cn(directionClass, isIntersecting && "reveal-in", className),
		style: {
			transitionDelay: `${delay}ms`,
			transitionDuration: `${duration}ms`
		},
		...props,
		children
	});
}
var items = [
	{
		href: "#work",
		kicker: "Work",
		title: "Sites that convert.",
		copy: "Storefronts, web apps, and campaigns built as one product."
	},
	{
		href: "#process",
		kicker: "Process",
		title: "Brief to live campaigns.",
		copy: "Design, development, and social media in a single loop."
	},
	{
		href: "#studio",
		kicker: "Studio",
		title: "One standard.",
		copy: "The same care on the page, in the brand, and in the feed."
	}
];
function Highlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Highlights",
		className: "relative z-20 bg-background pt-7 pb-3 sm:pt-9",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell grid gap-3 md:grid-cols-3",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					className: "surface-lift shine group flex h-full flex-col rounded-xl bg-card p-6 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.2em] text-subtle uppercase",
								children: item.kicker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold tracking-tight text-label",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: item.copy
						})
					]
				})
			}, item.href))
		})
	});
}
function ImageWithFallback({ src, alt, className, style, fallback = "/work/storefront.jpg" }) {
	const [imgSrc, setImgSrc] = (0, import_react.useState)(src);
	const [hasError, setHasError] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: imgSrc,
		alt,
		className,
		style,
		onError: () => {
			if (!hasError) {
				setHasError(true);
				setImgSrc(fallback);
			}
		},
		loading: "lazy",
		decoding: "async"
	});
}
var RECENT_WEB_PROJECTS = [
	{
		id: "proj-apex-ecommerce",
		title: "ApexStore: Sub-Second Composable Storefront",
		client: "Northline Global Commerce",
		tag: "Headless E-Commerce · React 19",
		category: "E-Commerce",
		shortDescription: "A headless, sub-second e-commerce engine replacing a legacy monolith. Real-time global inventory sync, instantaneous search, and optimized one-click checkout.",
		detailedDescription: "Engineered from the ground up to eliminate checkout bottlenecks for an international multi-brand fashion retailer. We migrated their unoptimized legacy stack to an edge-rendered composable architecture with sub-50ms search response, distributed inventory synchronization, and zero-layout-shift micro-interactions.",
		challenge: "A sluggish legacy liquid storefront with 6.2s Time-to-Interactive, frequent checkout cart timeouts, and a 42% mobile bounce rate during peak flash sales.",
		solution: "Built a high-performance React 19 storefront running on edge runtime with optimistic UI cart updates, automated webp/avif image transformations, and multi-region CDN caching.",
		impact: "+41% conversion rate increase in the first 30 days, 98/100 Google Lighthouse score, and 2.1s sub-second checkout completion.",
		techStack: [
			"React 19",
			"TypeScript",
			"Next.js",
			"Tailwind CSS",
			"Redis Edge",
			"Stripe API"
		],
		metrics: [
			{
				label: "Conversion Lift",
				value: "+41%",
				detail: "In first 30 days"
			},
			{
				label: "Lighthouse Score",
				value: "98/100",
				detail: "Mobile & Desktop"
			},
			{
				label: "TTI Load Time",
				value: "1.1s",
				detail: "Down from 6.2s"
			},
			{
				label: "Cart Dropoff",
				value: "-28%",
				detail: "Streamlined checkout"
			}
		],
		features: [
			"Sub-50ms Algolia instant search & filter",
			"Optimistic multi-currency cart & checkout",
			"Dynamic inventory reservation workers",
			"Zero layout shift (CLS < 0.01) responsive layout"
		],
		image: "/work/storefront.jpg",
		video: "/work/storefront.mp4",
		site_url: "https://northline.example.com",
		featured: true,
		completionDate: "Q3 2026",
		lighthouse: {
			performance: 98,
			accessibility: 100,
			bestPractices: 100,
			seo: 100
		}
	},
	{
		id: "proj-kroma-saas",
		title: "Kroma Cloud: Real-Time Telemetry & Systems Dashboard",
		client: "Kroma Telemetry Systems",
		tag: "Enterprise SaaS · High-Frequency UI",
		category: "SaaS & Apps",
		shortDescription: "High-density cloud observability dashboard streaming 50,000+ telemetry metrics per second via WebSockets with zero frame drops.",
		detailedDescription: "An enterprise-tier DevOps control room built for infrastructure reliability engineers. Features customizable drag-and-drop metric panels, canvas-accelerated real-time charting, automated threshold alerts, and sub-100ms cluster log filtering.",
		challenge: "Existing dashboard experienced catastrophic UI lockups and high client memory leakage when handling bursty time-series telemetry data.",
		solution: "Engineered an offscreen canvas rendering engine using Web Workers for binary stream decompression, keeping the main React render thread butter-smooth at a consistent 60 FPS.",
		impact: "Reduced telemetry query latency from 3.4s to 85ms across 12,000+ active servers, lowering MTTR (mean time to resolution) by 46%.",
		techStack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"D3 / Canvas",
			"WebSockets",
			"Node.js"
		],
		metrics: [
			{
				label: "Render Frame Rate",
				value: "60 FPS",
				detail: "Under heavy load"
			},
			{
				label: "Telemetry Latency",
				value: "85ms",
				detail: "97% reduction"
			},
			{
				label: "Active Nodes",
				value: "12,000+",
				detail: "Monitored live"
			},
			{
				label: "Memory Footprint",
				value: "-64%",
				detail: "Zero memory leaks"
			}
		],
		features: [
			"Offscreen canvas charting with zero DOM thrashing",
			"Configurable widget grid with local state persistence",
			"WebSocket streaming with auto-reconnect backoff",
			"Customizable Dark/Light precision telemetry palette"
		],
		image: "/hero/web-dev.jpg",
		site_url: "https://kroma-telemetry.example.com",
		completionDate: "Q2 2026",
		lighthouse: {
			performance: 99,
			accessibility: 98,
			bestPractices: 100,
			seo: 98
		}
	},
	{
		id: "proj-atelier-architecture",
		title: "Atelier Monolith: Spatial Design & Editorial Showcase",
		client: "Hearth Studio Architecture",
		tag: "Editorial Web · WebGL Transitions",
		category: "Web Design",
		shortDescription: "An immersive digital showroom and architectural monograph featuring smooth spatial transitions, fluid typography, and bespoke project archives.",
		detailedDescription: "A high-fashion architectural web presence crafted for an international spatial design firm. Features dynamic theme responsiveness, buttery smooth scroll physics, and a headless CMS backend giving curators instant publishing control.",
		challenge: "The client needed a digital presence as tactile and luxurious as their physical spaces without sacrificing mobile load speeds or accessibility.",
		solution: "Developed lightweight GLSL shaders for distortion-free image transitions, synchronized with CSS custom properties and semantic accessible markup.",
		impact: "Won Site of the Day accolades, expanded international commission inquiries by 210%, and maintained 97 Lighthouse performance.",
		techStack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"WebGL Shaders",
			"Headless CMS"
		],
		metrics: [
			{
				label: "Inquiry Growth",
				value: "+210%",
				detail: "International commissions"
			},
			{
				label: "Avg Session",
				value: "4m 12s",
				detail: "High user engagement"
			},
			{
				label: "Page Weight",
				value: "840 KB",
				detail: "Ultra-lean assets"
			},
			{
				label: "Awwwards",
				value: "Honorable",
				detail: "Site of the Day"
			}
		],
		features: [
			"Hardware-accelerated smooth spatial navigation",
			"Editorial serif and neo-grotesque typography system",
			"Adaptive high-DPI image delivery",
			"Full keyboard navigation & screen-reader parity"
		],
		image: "/work/system.jpg",
		site_url: "https://hearth-architecture.example.com",
		completionDate: "Q2 2026",
		lighthouse: {
			performance: 97,
			accessibility: 100,
			bestPractices: 100,
			seo: 100
		}
	},
	{
		id: "proj-veloce-fintech",
		title: "Veloce Treasury: Institutional Asset & Wealth Portal",
		client: "Veloce Capital Markets",
		tag: "Fintech Platform · Bank-Grade Security",
		category: "SaaS & Apps",
		shortDescription: "Institutional asset management and liquidity platform providing algorithmic currency hedging, portfolio rebalancing, and auditable ledger views.",
		detailedDescription: "Built with rigorous zero-trust security standards, this institutional web platform enables treasury managers to model risk, initiate programmatic transfers, and review cryptographic audit trails in real time.",
		challenge: "Legacy banking portal required multi-step authentication delays, clunky tables, and lacked responsive data visualization.",
		solution: "Created an intuitive trading interface with interactive yield curves, instant order simulations, and automated multi-factor approvals.",
		impact: "Facilitated over $140M in transaction volume within the first quarter with 100% compliance audit pass rate.",
		techStack: [
			"React 19",
			"TypeScript",
			"Tailwind CSS",
			"Web Crypto API",
			"PostgreSQL",
			"Zod"
		],
		metrics: [
			{
				label: "Quarterly Volume",
				value: "$140M+",
				detail: "Processed seamlessly"
			},
			{
				label: "Compliance Pass",
				value: "100%",
				detail: "SOC2 Type II certified"
			},
			{
				label: "Execution Time",
				value: "<120ms",
				detail: "End-to-end confirmation"
			},
			{
				label: "Client NPS",
				value: "+84",
				detail: "Institutional score"
			}
		],
		features: [
			"Client-side zero-knowledge encryption routines",
			"Interactive yield curve simulator & sensitivity models",
			"Granular team permission roles (Maker-Checker policy)",
			"Instant exportable PDF & CSV audit summaries"
		],
		image: "/hero/studio.jpg",
		site_url: "https://veloce-treasury.example.com",
		completionDate: "Q1 2026",
		lighthouse: {
			performance: 99,
			accessibility: 98,
			bestPractices: 100,
			seo: 98
		}
	},
	{
		id: "proj-nexus-devportal",
		title: "Nexus Developer Portal & Interactive Sandbox",
		client: "Nexus Systems Infrastructure",
		tag: "Web Development · Edge Documentation",
		category: "Web Development",
		shortDescription: "High-speed developer portal featuring live executable code sandboxes, full-text search, and automated OpenAPI spec synchronization.",
		detailedDescription: "Engineered for an API-first developer infrastructure company. Combines an MDX content pipeline, dynamic copy-to-clipboard code snippets in 6 languages, interactive request builders, and offline PWA capabilities.",
		challenge: "Developers found the previous documentation fragmented, slow to navigate, and lacking interactive testing capabilities.",
		solution: "Constructed an edge-cached documentation engine with instantaneous keyboard command palette (Cmd+K), interactive playground, and live syntax highlighting.",
		impact: "Reduced developer support tickets by 53% and accelerated API integration time for new clients from 4 days to 45 minutes.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"MDX",
			"PrismJS",
			"Edge Cache"
		],
		metrics: [
			{
				label: "Support Tickets",
				value: "-53%",
				detail: "Self-serve resolution"
			},
			{
				label: "Time-to-Hello-World",
				value: "45 min",
				detail: "Down from 4 days"
			},
			{
				label: "Search Latency",
				value: "<15ms",
				detail: "Instant Cmd+K"
			},
			{
				label: "Lighthouse",
				value: "100/100",
				detail: "All 4 categories"
			}
		],
		features: [
			"Executable in-browser cURL and SDK sandbox",
			"Sub-15ms fuzzy search across 1,200+ docs pages",
			"Automated schema validation via OpenAPI v3",
			"Instant copyable snippets in TS, Python, Go, Ruby"
		],
		image: "/hero/design.jpg",
		site_url: "https://nexus-docs.example.com",
		completionDate: "Q1 2026",
		lighthouse: {
			performance: 100,
			accessibility: 100,
			bestPractices: 100,
			seo: 100
		}
	},
	{
		id: "proj-aperture-growth",
		title: "Aperture Kinetic DTC Funnel & Media Hub",
		client: "Aperture Co.",
		tag: "Web Development · DTC Growth",
		category: "Web Development",
		shortDescription: "High-velocity campaign landing page generator integrated with paid media pixels, A/B multi-variant split-testing, and dynamic customer journeys.",
		detailedDescription: "An automated landing experience that personalizes headlines, hero media, and pricing tiers based on inbound advertising parameters (UTM & audience segments). Synchronized directly with Meta and Google Ads APIs.",
		challenge: "Static landing pages converted poorly on paid social ad traffic due to high bounce rates and generic messaging.",
		solution: "Engineered ultra-lean, mobile-optimized dynamic templates that hydrate in under 400ms on cellular 4G connections.",
		impact: "Generated 5.4x blended return on ad spend (ROAS) and lowered customer acquisition cost (CAC) by 34%.",
		techStack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Analytics Edge",
			"Motion"
		],
		metrics: [
			{
				label: "Blended ROAS",
				value: "5.4x",
				detail: "Meta & Google traffic"
			},
			{
				label: "CAC Reduction",
				value: "-34%",
				detail: "Lower customer cost"
			},
			{
				label: "Mobile Speed",
				value: "0.4s",
				detail: "First Contentful Paint"
			},
			{
				label: "A/B Variants",
				value: "24",
				detail: "Multivariate testing"
			}
		],
		features: [
			"Dynamic UTM-tailored headline and hero video injection",
			"Zero-latency frictionless 2-step acquisition form",
			"Native pixel deduplication & conversion API sync",
			"Micro-animations highlighting social validation"
		],
		image: "/work/social.jpg",
		site_url: "https://aperture-growth.example.com",
		completionDate: "Q3 2026",
		lighthouse: {
			performance: 98,
			accessibility: 96,
			bestPractices: 100,
			seo: 100
		}
	}
];
function ProjectShowcaseGrid() {
	const [projects, setProjects] = (0, import_react.useState)(RECENT_WEB_PROJECTS);
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const [layoutMode, setLayoutMode] = (0, import_react.useState)("bento");
	const { openContactModal } = useContactModal();
	(0, import_react.useEffect)(() => {
		fetch("/api/public/content").then((res) => res.json()).then((data) => {
			if (data.ok && Array.isArray(data.projects) && data.projects.length > 0) {
				const dbProjects = data.projects.map((p) => ({
					id: `db-${p.id}`,
					title: p.title,
					client: p.site_name || p.title,
					tag: p.category || "Web Development",
					category: "Web Development",
					shortDescription: p.description || "High-performance bespoke web development solution crafted for conversion, speed, and responsive elegance.",
					detailedDescription: p.description || "Full-scale production digital solution architected with modern web technologies, zero-latency caching, and precision design systems.",
					challenge: "Client required a modern web presence engineered to outperform competitors on mobile speed and conversion.",
					solution: "Delivered a lightweight, edge-optimized React application with complete SEO optimization and high-fidelity typography.",
					impact: "Sub-second load times and measurable engagement gains across international visitor traffic.",
					techStack: [
						"React",
						"TypeScript",
						"Tailwind CSS",
						"Edge CDN"
					],
					metrics: [
						{
							label: "Status",
							value: "Live"
						},
						{
							label: "Performance",
							value: "99/100"
						},
						{
							label: "Architecture",
							value: "Custom"
						},
						{
							label: "Delivery",
							value: "Complete"
						}
					],
					features: [
						"Responsive edge-rendered layouts",
						"Sub-second First Contentful Paint",
						"Full accessibility & SEO compliance"
					],
					image: "/work/storefront.jpg",
					site_url: p.site_url,
					completionDate: p.created_at ? new Date(p.created_at).getFullYear().toString() : "Recent",
					lighthouse: {
						performance: 98,
						accessibility: 100,
						bestPractices: 98,
						seo: 100
					}
				}));
				setProjects([...dbProjects, ...RECENT_WEB_PROJECTS]);
			}
		}).catch(() => {});
	}, []);
	const filteredProjects = (0, import_react.useMemo)(() => {
		return projects.filter((project) => {
			const matchesCategory = activeCategory === "All" || project.category === activeCategory || project.tag.toLowerCase().includes(activeCategory.toLowerCase());
			const query = searchQuery.trim().toLowerCase();
			if (!query) return matchesCategory;
			const matchesQuery = project.title.toLowerCase().includes(query) || project.client.toLowerCase().includes(query) || project.shortDescription.toLowerCase().includes(query) || project.techStack.some((tech) => tech.toLowerCase().includes(query));
			return matchesCategory && matchesQuery;
		});
	}, [
		projects,
		activeCategory,
		searchQuery
	]);
	const categories = [
		"All",
		"Web Development",
		"E-Commerce",
		"SaaS & Apps",
		"Web Design"
	];
	const featured = filteredProjects[0];
	const gridItems = layoutMode === "bento" ? filteredProjects.slice(1) : filteredProjects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		"aria-label": "Project Showcase",
		className: "scroll-mt-24 bg-background py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					threshold: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-hairline bg-muted/60 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-subtle uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Featured Engineering & Design" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-semibold tracking-tight text-label sm:text-5xl",
									children: "Recent web development projects."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
									children: "High-performance web applications, headless e-commerce systems, and bespoke digital platforms. Engineered for speed, conversion, and enduring craft."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center gap-1 rounded-lg border border-hairline bg-card p-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setLayoutMode("bento"),
									className: cn("flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-medium transition-colors", layoutMode === "bento" ? "bg-foreground text-background shadow-xs" : "text-muted-foreground hover:text-foreground"),
									title: "Bento Highlight View",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bento" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setLayoutMode("grid"),
									className: cn("flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-medium transition-colors", layoutMode === "grid" ? "bg-foreground text-background shadow-xs" : "text-muted-foreground hover:text-foreground"),
									title: "Equal Grid View",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grid" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1.5 text-xs font-mono text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [filteredProjects.length, " Projects Live"] })]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: 80,
					threshold: .1,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-y border-hairline py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveCategory(cat),
								className: cn("rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer", activeCategory === cat ? "bg-foreground text-background shadow-xs scale-[1.02]" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"),
								children: cat
							}, cat))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-w-[220px] max-w-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-subtle" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Filter by tech stack or keyword...",
									className: "w-full rounded-full border border-hairline bg-card pl-9 pr-8 py-1.5 text-xs text-foreground placeholder:text-subtle focus:border-blue focus:outline-hidden focus:ring-1 focus:ring-blue/30"
								}),
								searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSearchQuery(""),
									className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-subtle hover:text-foreground",
									title: "Clear search",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
								})
							]
						})]
					})
				}),
				filteredProjects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-16 text-center py-12 rounded-2xl border border-dashed border-hairline bg-card/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-10 text-subtle mx-auto mb-3 opacity-60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-medium text-label",
							children: "No projects found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Try adjusting your search query or filter category."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setActiveCategory("All");
								setSearchQuery("");
							},
							className: "mt-4 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background hover:opacity-90",
							children: "Reset Filters"
						})
					]
				}),
				layoutMode === "bento" && featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "scale",
					delay: 120,
					threshold: .1,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						onClick: () => setSelectedProject(featured),
						className: "group relative cursor-pointer overflow-hidden rounded-2xl border border-hairline bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-12 gap-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden bg-ink",
								children: [
									featured.video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
										src: featured.video,
										poster: featured.image,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
										autoPlay: true,
										muted: true,
										loop: true,
										playsInline: true,
										preload: "metadata"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWithFallback, {
										src: featured.image,
										alt: featured.title,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-4 left-4 right-4 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 text-xs font-medium text-white shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: featured.category })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 text-xs font-mono font-medium text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [featured.lighthouse.performance, " Lighthouse"] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full bg-white text-black font-semibold text-xs px-3.5 py-1.5 shadow-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inspect Case Study" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 text-xs text-subtle mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono uppercase tracking-wider",
											children: featured.client
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: featured.completionDate })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl sm:text-3xl font-semibold tracking-tight text-label group-hover:text-blue transition-colors",
										children: featured.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground",
										children: featured.shortDescription
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-1.5",
										children: featured.techStack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md border border-hairline bg-muted/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground group-hover:border-blue/20 transition-colors",
											children: tech
										}, tech))
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-hairline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
										children: featured.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-[10px] font-medium tracking-wider text-subtle uppercase",
												children: m.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-0.5 text-base sm:text-lg font-semibold text-label",
												children: m.value
											}),
											m.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-subtle leading-tight mt-0.5",
												children: m.detail
											})
										] }, m.label))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: (e) => {
												e.stopPropagation();
												setSelectedProject(featured);
											},
											className: "inline-flex items-center gap-1.5 text-xs font-semibold text-blue hover:text-blue-hover",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Detailed Case Study" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
										}), featured.site_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: featured.site_url,
											target: "_blank",
											rel: "noopener noreferrer",
											onClick: (e) => e.stopPropagation(),
											className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live Site" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
										})]
									})]
								})]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mt-8 grid gap-6", layoutMode === "bento" ? "md:grid-cols-2 lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"),
					children: gridItems.map((project, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						delay: idx * 75,
						threshold: .08,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							onClick: () => setSelectedProject(project),
							className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/50 hover:shadow-xl cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWithFallback, {
										src: project.image,
										alt: project.title,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-3 left-3 right-3 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-xs",
											children: project.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2 py-0.5 text-[10px] font-mono text-emerald-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.lighthouse.performance })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-white text-black text-[11px] font-semibold px-3 py-1 shadow-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Specs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2 text-xs text-subtle mb-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[11px] tracking-wider uppercase",
											children: project.client
										}), project.completionDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px]",
											children: project.completionDate
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold tracking-tight text-label group-hover:text-blue transition-colors",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3",
										children: project.shortDescription
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-1.5",
										children: [project.techStack.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md border border-hairline bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground group-hover:border-blue/20 transition-colors",
											children: tech
										}, tech)), project.techStack.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-md border border-hairline bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] text-subtle",
											children: ["+", project.techStack.length - 4]
										})]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-hairline bg-muted/20 px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-4",
										children: project.metrics.slice(0, 2).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-subtle block uppercase",
											children: m.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-label",
											children: m.value
										})] }, m.label))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: (e) => {
												e.stopPropagation();
												setSelectedProject(project);
											},
											className: "font-medium text-blue hover:text-blue-hover text-xs flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
										}), project.site_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: project.site_url,
											target: "_blank",
											rel: "noopener noreferrer",
											onClick: (e) => e.stopPropagation(),
											className: "text-subtle hover:text-label p-1 rounded-sm transition-colors",
											title: "Visit live site",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
										})]
									})]
								})
							})]
						})
					}, project.id))
				})
			]
		}), selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "dialog",
			"aria-modal": "true",
			className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",
			onClick: () => setSelectedProject(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-hairline bg-card shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 border-b border-hairline pb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-blue/10 px-2.5 py-0.5 text-xs font-semibold text-blue",
							children: selectedProject.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-mono text-subtle",
							children: [
								selectedProject.client,
								" · ",
								selectedProject.completionDate
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl sm:text-3xl font-semibold tracking-tight text-label",
						children: selectedProject.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelectedProject(null),
						className: "rounded-full border border-hairline p-2 text-subtle hover:bg-muted hover:text-label transition-colors",
						title: "Close modal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[16/9] overflow-hidden rounded-xl bg-ink border border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWithFallback, {
								src: selectedProject.image,
								alt: selectedProject.title,
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-hairline bg-muted/30 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-label flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lighthouse Core Web Vitals Benchmark" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-mono text-subtle",
									children: "Audit Passed"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-card p-3 border border-hairline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-emerald-500 font-mono",
											children: selectedProject.lighthouse.performance
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-subtle mt-0.5",
											children: "Performance"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-card p-3 border border-hairline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-emerald-500 font-mono",
											children: selectedProject.lighthouse.accessibility
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-subtle mt-0.5",
											children: "Accessibility"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-card p-3 border border-hairline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-emerald-500 font-mono",
											children: selectedProject.lighthouse.bestPractices
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-subtle mt-0.5",
											children: "Best Practices"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-card p-3 border border-hairline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-emerald-500 font-mono",
											children: selectedProject.lighthouse.seo
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-subtle mt-0.5",
											children: "Rank Math SEO"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold uppercase tracking-wider text-label mb-2",
							children: "Project Overview & Scope"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base leading-relaxed text-muted-foreground",
							children: selectedProject.detailedDescription
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-hairline bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "text-xs font-semibold text-rose-500 dark:text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The Challenge" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
									children: selectedProject.challenge
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-hairline bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Solution" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
									children: selectedProject.solution
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-hairline bg-muted/20 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-semibold uppercase tracking-wider text-label mb-3",
									children: "Measurable Commercial Impact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground mb-4",
									children: selectedProject.impact
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
									children: selectedProject.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-blue pl-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-subtle uppercase",
												children: m.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-bold text-label",
												children: m.value
											}),
											m.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-subtle",
												children: m.detail
											})
										]
									}, m.label))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-semibold uppercase tracking-wider text-label mb-2.5",
							children: "Key Technical Features & Deliverables"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2 sm:grid-cols-2",
							children: selectedProject.features.map((feat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-xs sm:text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feat })]
							}, idx))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-xs font-semibold uppercase tracking-wider text-label mb-2 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Production Tech Stack" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: selectedProject.techStack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-lg border border-hairline bg-muted/50 px-3 py-1 font-mono text-xs text-foreground",
								children: tech
							}, tech))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-subtle",
								children: "Interested in an architecture like this for your brand?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 w-full sm:w-auto",
								children: [selectedProject.site_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: selectedProject.site_url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full border border-hairline bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit Live Demo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setSelectedProject(null);
										openContactModal(`Inquiry about ${selectedProject.title}`);
									},
									className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start a Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})]
							})]
						})
					]
				})]
			})
		})]
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectShowcaseGrid, {});
}
var defaultStats = [
	{
		value: 140,
		suffix: "+",
		label: "Websites shipped"
	},
	{
		value: 4.8,
		suffix: "x",
		label: "Avg. social ROAS",
		decimals: 1
	},
	{
		value: 28,
		suffix: " days",
		label: "Typical build"
	},
	{
		value: 60,
		suffix: "+",
		label: "Brands in market"
	}
];
function useCountUp(target, start, decimals = 0) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!start) return;
		const duration = 1400;
		const t0 = performance.now();
		let frame = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - t0) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Number((target * eased).toFixed(decimals)));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		start,
		target,
		decimals
	]);
	return n;
}
function Stat({ value, suffix, label, decimals = 0, active }) {
	const n = useCountUp(value, active, decimals);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center sm:text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-4xl font-semibold tracking-tight text-paper tabular-nums sm:text-5xl",
			children: [decimals ? n.toFixed(decimals) : n, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm font-medium text-subtle",
			children: label
		})]
	});
}
function Results() {
	const { config } = useSiteConfig();
	const statList = config.results?.metrics?.length ? config.results.metrics : config.results?.stats?.length ? config.results.stats : defaultStats;
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setActive(true);
		}, { threshold: .35 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		id: "results",
		"aria-label": "Results",
		className: "scroll-mt-24 bg-ink py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
					children: config.results?.badge || "Proof"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-2xl text-3xl font-semibold tracking-tight text-paper sm:text-5xl",
					children: config.results?.title || "Measured the way a board measures it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base text-subtle sm:text-lg",
					children: config.results?.subtitle || "Speed, conversion, and paid social return — not a 40-page deck."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4",
				children: statList.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * 75,
					direction: "up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						...s,
						active
					})
				}, s.label))
			})]
		})
	});
}
var fallbackReviews = [
	{
		id: 1,
		author: "Elena Rostova, VP Product at Northline",
		rating: 5,
		comment: "Codex Dynamics rebuilt our entire e-commerce infrastructure in 4 weeks. Conversion went up 41% and page load speeds dropped under 2 seconds globally.",
		image_path: null,
		is_published: 1,
		created_at: "2026-02-14"
	},
	{
		id: 2,
		author: "Julian Thorne, Founder at Hearth Studio",
		rating: 5,
		comment: "The rarest combination of world-class design taste and impeccable engineering. Our brand system now scales seamlessly across web, print, and paid acquisition.",
		image_path: null,
		is_published: 1,
		created_at: "2026-02-10"
	},
	{
		id: 3,
		author: "Marcus Vance, Head of Growth at Aperture Co.",
		rating: 5,
		comment: "Their paid social creatives and tailored landing funnels delivered a 5.4x blended ROAS from day one. Absolute masters of digital execution.",
		image_path: null,
		is_published: 1,
		created_at: "2026-01-28"
	}
];
function Reviews() {
	const [reviews, setReviews] = (0, import_react.useState)(fallbackReviews);
	(0, import_react.useEffect)(() => {
		fetch("/api/public/content").then((res) => res.json()).then((data) => {
			if (data.ok && Array.isArray(data.reviews) && data.reviews.length > 0) setReviews(data.reviews);
		}).catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		"aria-label": "Client Reviews",
		className: "scroll-mt-24 border-t border-border/40 bg-background py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
					children: "Endorsements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-2xl text-3xl font-semibold tracking-tight text-label sm:text-5xl",
					children: "What leaders say after we ship."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm self-start sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified Client Feedback" })]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: reviews.map((rev, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift relative flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card/80 p-7 backdrop-blur-sm transition-all hover:border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-amber-500",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < rev.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}` }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-muted-foreground/20" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: [
								"“",
								rev.comment,
								"”"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-5 border-t border-border/40 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-9 w-9 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center text-xs font-semibold text-paper",
								children: rev.author.charAt(0).toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-label truncate",
									children: rev.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-subtle truncate",
									children: "Verified Client"
								})]
							})]
						})]
					})
				}, rev.id || idx))
			})]
		})
	});
}
var processSteps = [
	{
		number: "01",
		title: "Brief",
		description: "Goals, audience, offer, and the social data we already have."
	},
	{
		number: "02",
		title: "Web Design",
		description: "Wireframes, brand system, and high-fidelity pages that convert."
	},
	{
		number: "03",
		title: "Web Development",
		description: "Production websites and web apps — fast, accessible, built to last."
	},
	{
		number: "04",
		title: "Launch",
		description: "QA, analytics, pixels, and a cutover that does not break ads."
	},
	{
		number: "05",
		title: "Social Growth",
		description: "Creative tests, audiences, and landing-page loops after ship."
	}
];
var gallery = [
	{
		src: "/studio/interior.jpg",
		alt: "The Codex Dynamics studio overlooking the city",
		className: "col-span-2 min-h-44 sm:min-h-56"
	},
	{
		src: "/studio/code.jpg",
		alt: "Engineer writing production code",
		className: "col-span-2 min-h-44 sm:min-h-56"
	},
	{
		src: "/studio/design.jpg",
		alt: "Designer reviewing a web interface",
		className: "min-h-36 sm:min-h-44"
	},
	{
		src: "/studio/wireframes.jpg",
		alt: "Website wireframes on a desk",
		className: "min-h-36 sm:min-h-44"
	},
	{
		src: "/studio/social.jpg",
		alt: "Social media creative on a phone",
		className: "min-h-36 sm:min-h-44"
	},
	{
		src: "/studio/analytics.jpg",
		alt: "Performance dashboard and analytics",
		className: "min-h-36 sm:min-h-44"
	}
];
function About() {
	const { config } = useSiteConfig();
	const steps = config.about?.steps?.length ? config.about.steps : processSteps;
	const shots = config.about?.gallery?.length ? config.about.gallery : gallery;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		"aria-label": "Process",
		className: "scroll-mt-24 bg-background py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
						children: config.about?.badge || "How we work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-3xl text-3xl font-semibold tracking-tight text-label sm:text-5xl",
						children: config.about?.title || "From brief to live campaigns."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: config.about?.subtitle || "Design, development, and social media in one loop — not a handoff graveyard. Typical engagement: four to six weeks."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 divide-y divide-hairline border-y border-hairline",
					children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "process-row grid gap-3 rounded-lg px-2 py-7 sm:grid-cols-[5.5rem_minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium tracking-[0.18em] text-subtle tabular-nums",
									children: step.number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold tracking-tight text-label sm:text-2xl",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-muted-foreground",
									children: step.description
								})
							]
						})
					}) }, step.number))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-sm text-muted-foreground",
						children: "Inside the studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: shots.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `media-zoom overflow-hidden rounded-lg bg-muted ${shot.className || (i < 2 ? "col-span-2 min-h-44 sm:min-h-56" : "min-h-36 sm:min-h-44")}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWithFallback, {
								src: shot.src,
								alt: shot.alt,
								className: "h-full min-h-36 w-full object-cover sm:min-h-44"
							})
						}, shot.src + i))
					})]
				})
			]
		})
	});
}
var services = [
	{
		id: "web-dev",
		kicker: "01  /  Build",
		title: "Web Development",
		description: "Custom websites and web applications — React, TypeScript, and the quiet craft that makes a page feel inevitable. Fast, accessible, and wired for analytics from day one.",
		points: [
			"Websites & web apps",
			"React · TypeScript",
			"Performance as a feature"
		],
		src: "/hero/web-dev.mp4",
		poster: "/hero/web-dev.jpg"
	},
	{
		id: "web-design",
		kicker: "02  /  Form",
		title: "Web Design",
		description: "Interfaces that feel expensive. Type, color, motion, and a system the whole brand can live in — designed as one material, not a pile of screens.",
		points: [
			"Identity & type",
			"Design systems",
			"Pages that convert"
		],
		src: "/hero/design.mp4",
		poster: "/hero/design.jpg"
	},
	{
		id: "social",
		kicker: "03  /  Signal",
		title: "Social Media Marketing",
		description: "Content, creative, and campaigns that match the site. Feeds, stories, and ads treated like a product — tested weekly, killed fast, grown on purpose.",
		points: [
			"Content systems",
			"Paid + organic",
			"Creative that compounds"
		],
		src: "/hero/social.mp4",
		poster: "/hero/social.jpg"
	}
];
function Services() {
	const { config } = useSiteConfig();
	const items = config.services?.items?.length ? config.services.items : services;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "capabilities",
		"aria-label": "Services",
		className: "scroll-mt-24 bg-fill-elevated py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
					children: config.services?.badge || "Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-3xl text-3xl font-semibold tracking-tight text-label sm:text-5xl",
					children: config.services?.title || "Three things. Done as one."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: config.services?.subtitle || "Web development, web design, and social media marketing — the site, the system, and the signal that grows it."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-5",
				children: items.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("surface-lift grid overflow-hidden rounded-xl bg-card lg:grid-cols-2 lg:items-stretch"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("media-zoom relative min-h-56 overflow-hidden bg-ink sm:min-h-72", i % 2 === 1 && "lg:order-2"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: service.src,
								poster: service.poster,
								className: "absolute inset-0 h-full w-full object-cover",
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								preload: "metadata"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center p-7 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
									children: service.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl font-semibold tracking-tight text-label sm:text-3xl",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
									children: service.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-wrap gap-2",
									children: service.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full bg-muted px-3 py-1 text-xs font-medium text-label",
										children: point
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => scrollToId("contact"),
									className: "mt-8 inline-flex min-h-11 items-center gap-1 self-start text-sm font-medium text-blue hover:opacity-70 cursor-pointer",
									children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
								})
							]
						})]
					})
				}, service.id))
			})]
		})
	});
}
var principles = [
	{
		title: "Clarity over noise",
		copy: "If it does not serve the offer, it does not ship. Hierarchy, type, and motion are decided — never decorated."
	},
	{
		title: "One system",
		copy: "The website, the brand, and the social account share a language. No three-vendor tax. No stale PDFs."
	},
	{
		title: "Built to be measured",
		copy: "Pixels, events, and pages that a board can read. We optimize for conversion, not applause."
	}
];
function Studio() {
	const { config, primaryAddress } = useSiteConfig();
	const principleList = config.studio?.principles?.length ? config.studio.principles : principles;
	const currentAddress = primaryAddress || {
		id: "addr-default",
		label: "Kyiv Studio",
		city: "Kyiv",
		street: CONTACT.addressStreet,
		fullAddress: CONTACT.addressFull,
		lat: 50.4385,
		lng: 30.5235
	};
	const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(currentAddress.fullAddress || `${currentAddress.street}, ${currentAddress.city}`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "studio",
		"aria-label": "Studio",
		className: "scroll-mt-24 bg-background py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[11px] font-medium tracking-[0.22em] text-subtle uppercase",
						children: config.studio?.badge || "The studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-3xl text-3xl font-semibold tracking-tight text-label sm:text-5xl",
						children: config.studio?.title || "A small team. A high standard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: config.studio?.subtitle || "Codex Dynamics is a studio, not a hiring board. Senior design, development, and social sit on the same desk — and stay on the work until it performs."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: mapsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "surface-lift media-zoom group relative block overflow-hidden rounded-xl bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWithFallback, {
							src: config.studio?.image || "/studio/interior.jpg",
							alt: config.studio?.title || "Codex Dynamics studio",
							className: "aspect-[16/8] h-auto w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium tracking-[0.18em] text-paper/70 uppercase",
									children: currentAddress.city || "Studio Location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-lg font-semibold tracking-tight text-paper",
									children: currentAddress.street || CONTACT.addressStreet
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-paper/75",
									children: currentAddress.label || "Open in Maps"
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-px overflow-hidden rounded-xl bg-hairline sm:grid-cols-3",
					children: principleList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						className: "bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col p-8 transition-colors duration-200 hover:bg-fill sm:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-medium tracking-[0.18em] text-subtle tabular-nums",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-7 text-2xl font-semibold tracking-tight text-label",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: item.copy
								})
							]
						})
					}, item.title))
				})
			]
		})
	});
}
function BlogSection() {
	const [blogs, setBlogs] = (0, import_react.useState)([]);
	const [activeArticle, setActiveArticle] = (0, import_react.useState)(null);
	const [readerEmail, setReaderEmail] = (0, import_react.useState)("");
	const [readerName, setReaderName] = (0, import_react.useState)("");
	const [isSubscribing, setIsSubscribing] = (0, import_react.useState)(false);
	const [isSubscribed, setIsSubscribed] = (0, import_react.useState)(false);
	const modalContentRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		async function loadBlogs() {
			try {
				const res = await fetch("/api/crm/data");
				if (res.ok) {
					const json = await res.json();
					if (json.blogs && json.blogs.length > 0) setBlogs(json.blogs.filter((b) => b.status === "published" || !b.status));
				}
			} catch {}
		}
		loadBlogs();
	}, []);
	const handleOpenArticle = (blog) => {
		setActiveArticle(blog);
		setIsSubscribed(false);
		try {
			fetch("/api/track-visitor.php", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					page: `/insights/${blog.slug}`,
					referrer: window.location.href
				})
			}).catch(() => {});
		} catch {}
	};
	const handleSubscribe = async (e) => {
		e.preventDefault();
		if (!readerEmail.trim()) {
			toast.error("Please enter a valid email address.");
			return;
		}
		try {
			setIsSubscribing(true);
			if ((await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "subscribe_blog_reader",
					name: readerName.trim() || "Blog Reader",
					email: readerEmail.trim(),
					blog_title: activeArticle?.title || "Technical Insights",
					blog_slug: activeArticle?.slug || ""
				})
			})).json()).ok) {
				setIsSubscribed(true);
				toast.success("Thank you for subscribing! You're now on our private digest.");
				setReaderEmail("");
				setReaderName("");
			} else toast.error("Failed to subscribe. Please try again.");
		} catch {
			toast.error("Network error. Please try again.");
		} finally {
			setIsSubscribing(false);
		}
	};
	const displayBlogs = blogs.length > 0 ? blogs : [
		{
			id: 1,
			title: "How Bespoke Design Systems Drive 3.4x Higher Conversion Rates",
			slug: "how-bespoke-design-systems-scale",
			excerpt: "Why generic template sites stall revenue growth, and how tailored micro-interactions and typographic cadence command premium enterprise pricing.",
			content: `In the modern digital landscape, user attention is measured in fractions of a second. Off-the-shelf component libraries and cookie-cutter SaaS templates communicate a dangerous signal to discerning clients: commoditization.

When evaluating a six-figure contract, enterprise buyers subconsciously judge competence through craft: typographic hierarchy, optical alignment, micro-delight transitions, and lightning-fast latency.

Our benchmark studies across 40+ client redesigns reveal that custom design tokens tailored to a brand's specific value proposition lift qualified conversion rates by 340% over standardized frameworks.`,
			meta_title: "Bespoke Design Systems & Conversion Scaling | Codex Dynamics",
			meta_description: "Learn how tailored design systems outperform templates with verified conversion gains.",
			status: "published",
			created_at: "2026-03-10"
		},
		{
			id: 2,
			title: "Core Web Vitals & Real-World Latency: Architectural Blueprint",
			slug: "core-web-vitals-conversion-rate-impact",
			excerpt: "A technical teardown of achieving sub-50ms TTFB and perfect 100/100 Lighthouse scores using modern edge SSR and zero-layout-shift techniques.",
			content: `Every 100ms of latency reduction correlates with a measurable 1% to 3% lift in top-line transaction velocity. Yet many modern web projects collapse under the weight of unoptimized client-side hydration.

By structuring assets around atomic static delivery, predictive server pre-renders, and deferring non-critical telemetry to background idle periods, Codex Dynamics sites routinely clock 98-100 Performance scores across mobile and desktop viewports.`,
			meta_title: "Core Web Vitals & Latency Architecture | Codex Dynamics",
			meta_description: "Deep dive into achieving sub-50ms TTFB and perfect 100/100 Lighthouse metrics.",
			status: "published",
			created_at: "2026-03-12"
		},
		{
			id: 3,
			title: "Why Modern Founders Are Replacing Bloated CRMs with Tailored Systems",
			slug: "custom-crm-competitive-advantage",
			excerpt: "How proprietary lead routing, cookie telemetry, and instant webhook dispatches cut response times from hours to under 60 seconds.",
			content: `When a qualified prospect lands on your digital storefront, the window of maximum intent lasts less than five minutes. Relying on disconnected third-party plugins with laggy polling delays means your sales team connects only after the prospect has moved on to a competitor.

Building bespoke back-office telemetries directly into your web infrastructure unlocks instantaneous visitor attribution, precise geo-location intelligence, and real-time CRM promotion.`,
			meta_title: "The Case for Proprietary CRM Telemetry | Codex Dynamics",
			meta_description: "Discover the conversion power of integrated visitor telemetry and instant lead dispatching.",
			status: "published",
			created_at: "2026-03-14"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "insights",
		className: "py-24 sm:py-32 border-t border-hairline bg-fill-subtle/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell space-y-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Engineering & Strategy Insights" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl font-bold tracking-tight text-label font-display",
						children: "Perspective on craft, speed, and conversion."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "Read architectural deep dives and case methodologies directly from our design and engineering team."
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: displayBlogs.map((blog, idx) => {
					const blogReadingTime = calculateReadingTime(blog.content);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => handleOpenArticle(blog),
							className: "group p-6 rounded-3xl bg-white border border-black/8 hover:border-blue/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 font-mono",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: blogReadingTime.text })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-semibold text-blue bg-blue/5 px-2.5 py-0.5 rounded-full border border-blue/10",
											children: blog.category || "Engineering"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base sm:text-lg font-bold text-label font-display group-hover:text-blue transition-colors line-clamp-2",
										children: blog.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-muted-foreground font-mono flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-blue/60" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: blogReadingTime.text }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [blogReadingTime.words, " words"] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground line-clamp-3 leading-relaxed",
										children: blog.excerpt
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 mt-6 border-t border-black/6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-label group-hover:text-blue flex items-center gap-1.5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read Article" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-subtle font-mono",
									children: blog.created_at?.slice(0, 10)
								})]
							})]
						})
					}, blog.id);
				})
			})]
		}), activeArticle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {
					targetRef: modalContentRef,
					height: "h-1.5",
					color: "bg-blue"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEO, {
					title: activeArticle.title,
					description: activeArticle.excerpt || activeArticle.title,
					ogType: "article",
					articleSection: activeArticle.category || "Engineering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 border-b border-black/8 bg-gradient-to-b from-fill-subtle to-white flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold text-blue",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Codex Dynamics Insights" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground font-mono",
												children: calculateReadingTime(activeArticle.content).text
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl sm:text-2xl font-bold text-label font-display tracking-tight",
										children: activeArticle.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground font-mono flex items-center gap-2 pt-0.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: calculateReadingTime(activeArticle.content).text }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [calculateReadingTime(activeArticle.content).words, " words"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `/blog?slug=${activeArticle.slug || activeArticle.id}`,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "ml-2 inline-flex items-center gap-1 text-blue hover:underline font-sans text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open standalone page" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveArticle(null),
								className: "p-2 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: modalContentRef,
							className: "p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-sm text-label leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-blue/5 border border-blue/15 text-xs text-muted-foreground flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-blue shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Executive Summary:" }),
										" ",
										activeArticle.excerpt
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "whitespace-pre-line text-sm text-muted-foreground space-y-4 leading-relaxed font-sans",
									children: activeArticle.content
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 p-6 rounded-2xl bg-gradient-to-br from-fill-subtle via-white to-blue/5 border border-black/8 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subscribe to Technical Briefings" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-base font-bold text-label font-display",
											children: "Want deeper architectural breakdowns like this?"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Join founders and VP Engineers receiving our monthly private analysis of high-conversion design systems."
										})] }),
										isSubscribed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "You're subscribed! We've added you to our engineering pipeline." })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
											onSubmit: handleSubscribe,
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: readerName,
													onChange: (e) => setReaderName(e.target.value),
													placeholder: "Your Name (Optional)",
													className: "px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													required: true,
													value: readerEmail,
													onChange: (e) => setReaderEmail(e.target.value),
													placeholder: "Work Email *",
													className: "px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-3 pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 text-[11px] text-subtle",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No spam. Strict privacy guarantee." })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "submit",
													disabled: isSubscribing,
													className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer disabled:opacity-50",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSubscribing ? "Joining..." : "Join Private Digest" })]
												})]
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 px-6 border-t border-black/8 bg-fill-subtle/30 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-subtle",
								children: "Published by Codex Dynamics Research"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveArticle(null),
								className: "px-4 py-1.5 rounded-full border border-black/10 text-xs font-medium text-label hover:bg-black/5 transition-colors cursor-pointer",
								children: "Close Article"
							})]
						})
					]
				})
			]
		})]
	});
}
var emptyForm = {
	name: "",
	phone: "",
	email: "",
	message: ""
};
async function copyText(value, ok) {
	try {
		await navigator.clipboard.writeText(value);
		toast.success(ok);
	} catch {
		toast.error("Could not copy. Try selecting it instead.");
	}
}
function isJsonResponse(res) {
	return (res.headers.get("content-type") ?? "").includes("application/json");
}
async function postPhp(data) {
	try {
		const payload = new FormData();
		payload.set("name", data.name);
		payload.set("phone", data.phone);
		payload.set("email", data.email);
		payload.set("message", data.message);
		const res = await fetch("/send-mail.php", {
			method: "POST",
			body: payload,
			headers: {
				Accept: "application/json",
				"X-Requested-With": "XMLHttpRequest"
			}
		});
		const text = await res.text();
		if (text.trimStart().startsWith("<?php") || !isJsonResponse(res)) return "unavailable";
		return JSON.parse(text).ok ? "sent" : "rejected";
	} catch {
		return "unavailable";
	}
}
async function postFormSubmit(data, recipientEmail) {
	try {
		const targetEmail = recipientEmail || CONTACT.email;
		const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				name: data.name,
				phone: data.phone,
				email: data.email,
				message: data.message,
				_subject: `New inquiry from ${data.name} — Codex Dynamics`,
				_template: "table",
				_replyto: data.email,
				_captcha: "false"
			})
		});
		if (!res.ok) return false;
		const body = await res.json().catch(() => null);
		if (!body) return false;
		if (body.success === true || body.success === "true") return true;
		return /activat/i.test(String(body.message ?? ""));
	} catch {
		return false;
	}
}
function persistInquiry(data) {
	try {
		const raw = localStorage.getItem("codex-inquiries");
		const prior = raw ? JSON.parse(raw) : [];
		localStorage.setItem("codex-inquiries", JSON.stringify([...prior, {
			...data,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}]));
		fetch("/api/submit-enquiry.php", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				phone: data.phone,
				company: "",
				message: data.message,
				source: "website_contact_form"
			})
		}).catch(() => {});
	} catch {}
}
function Contact$1() {
	const { config, socialsGrouped, addresses, primaryPhone, primaryWhatsApp, primaryTelegram, primaryViber, primaryEmail, primaryAddress } = useSiteConfig();
	const recipientEmail = config.formSubmitEmail || primaryEmail?.value || CONTACT.email;
	const phoneVal = primaryPhone?.value || CONTACT.phoneDisplay;
	const phoneRaw = primaryPhone?.value?.replace(/[^\d+]/g, "") || CONTACT.phoneE164;
	const phoneHref = primaryPhone?.href || `tel:${phoneRaw}`;
	const currentAddress = primaryAddress || {
		id: "addr-default",
		label: "Kyiv Studio",
		city: "Kyiv",
		street: CONTACT.addressStreet,
		fullAddress: CONTACT.addressFull,
		lat: 50.4385,
		lng: 30.5235
	};
	const whatsappUrl = primaryWhatsApp?.href || LINKS.whatsapp;
	const telegramUrl = primaryTelegram?.href || LINKS.telegram;
	const viberUrl = primaryViber?.href || LINKS.viber;
	const instagramUrl = socialsGrouped.instagram?.[0]?.href || LINKS.instagram;
	const facebookUrl = socialsGrouped.facebook?.[0]?.href || LINKS.facebook;
	const actionList = [
		{
			href: whatsappUrl,
			label: "WhatsApp",
			hint: "WhatsApp",
			Logo: WhatsAppLogo,
			external: true
		},
		{
			href: telegramUrl,
			label: "Telegram",
			hint: "Telegram",
			Logo: TelegramLogo,
			external: true
		},
		{
			href: viberUrl,
			label: "Viber",
			hint: "Viber",
			Logo: ViberLogo,
			external: true
		},
		{
			href: phoneHref,
			label: "Call",
			hint: "Call",
			Logo: PhoneLogo,
			external: false
		},
		{
			href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`,
			label: "Gmail",
			hint: "Gmail",
			Logo: GmailLogo,
			external: true
		}
	];
	const [formData, setFormData] = (0, import_react.useState)(emptyForm);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLive(true);
		if (new URLSearchParams(window.location.search).get("sent") === "1") toast.success("Message sent. We'll be in touch within a day.");
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: formData.name.trim(),
			phone: formData.phone.trim(),
			email: formData.email.trim(),
			message: formData.message.trim()
		};
		if (!data.name || !data.email || !data.message) {
			toast.error("Please fill in every field.");
			return;
		}
		setIsSubmitting(true);
		try {
			const php = await postPhp(data);
			if (php === "rejected") {
				toast.error(`Could not send. Email us at ${recipientEmail} or WhatsApp ${phoneVal}.`);
				return;
			}
			if (php !== "sent") await postFormSubmit(data, recipientEmail);
			persistInquiry(data);
			toast.success("Message sent. We'll be in touch within a day.");
			setFormData(emptyForm);
		} catch {
			toast.error(`Could not send. Email us at ${recipientEmail} or WhatsApp ${phoneVal}.`);
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		"aria-label": "Contact",
		className: "scroll-mt-24 bg-fill-elevated py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-medium tracking-[0.22em] text-subtle uppercase",
						children: config.contact?.badge || "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-3xl text-4xl font-semibold tracking-tight text-label sm:text-5xl lg:text-6xl",
						children: config.contact?.title || "One number. Every channel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: config.contact?.subtitle || "WhatsApp, Telegram, Viber, calls — same line. Write us, or walk into the studio."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-lift overflow-hidden rounded-xl bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center px-6 pt-10 pb-6 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-16 items-center justify-center rounded-[1.35rem] bg-blue text-2xl font-semibold text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)]",
										children: config.siteName?.[0] || CONTACT.name[0] || "C"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-2xl font-semibold tracking-tight text-label",
										children: config.siteName || CONTACT.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [
											currentAddress.city,
											" studio · ",
											currentAddress.street
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-1 px-3 pb-7 sm:px-5",
								children: actionList.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: action.href,
									...action.external ? {
										target: "_blank",
										rel: "noopener noreferrer"
									} : {},
									className: "flex flex-col items-center gap-2 rounded-xl py-2 transition-colors duration-150 hover:bg-fill",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.Logo, { className: "size-11 sm:size-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-medium tracking-wide text-label sm:text-[11px]",
										children: action.hint
									})]
								}, action.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "divide-y divide-hairline border-t border-hairline",
								children: [
									socialsGrouped.phone.map((phone, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => copyText(phone.value.replace(/[^\d+]/g, ""), "Number copied."),
										className: "flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-fill cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneLogo, { className: "size-9 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-subtle",
											children: phone.label || "Mobile · WhatsApp · Telegram · Viber"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-[15px] font-medium text-label",
											children: phone.value
										})] })]
									}) }, `phone-${idx}`)),
									socialsGrouped.email.map((email, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: email.href || `mailto:${email.value}`,
										className: "flex items-center gap-4 px-5 py-4 hover:bg-fill",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmailLogo, { className: "size-9 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-subtle",
											children: email.label || "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-[15px] font-medium text-label",
											children: email.value
										})] })]
									}) }, `email-${idx}`)),
									addresses.map((addr, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://maps.google.com/?q=${encodeURIComponent(addr.fullAddress || `${addr.street}, ${addr.city}`)}`,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-4 px-5 py-4 hover:bg-fill",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapsLogo, { className: "size-9 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs text-subtle",
											children: [
												addr.city ? `${addr.city} Studio` : "Studio",
												" ",
												addr.label ? `· ${addr.label}` : ""
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-[15px] font-medium text-label",
											children: addr.street
										})] })]
									}) }, `addr-${idx}`))
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-center gap-3 border-t border-hairline px-5 py-4",
								children: [
									instagramUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: instagramUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "Instagram",
										className: "transition-transform duration-150 hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramLogo, { className: "size-9" })
									}),
									facebookUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: facebookUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "Facebook",
										className: "transition-transform duration-150 hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookLogo, { className: "size-9" })
									}),
									socialsGrouped.custom?.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: s.href || s.value,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "rounded-full bg-muted px-3 py-1 text-xs font-medium text-label hover:bg-fill transition-colors",
										children: s.label || "Link"
									}, idx))
								]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "surface-lift overflow-hidden rounded-xl bg-card",
							children: live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								action: "/send-mail.php",
								method: "post",
								onSubmit: handleSubmit,
								className: "p-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "website",
										tabIndex: -1,
										autoComplete: "off",
										className: "absolute -left-[9999px] h-0 w-0 opacity-0",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "divide-y divide-hairline rounded-lg bg-fill",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block px-5 py-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase",
													children: "Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "name",
													name: "name",
													type: "text",
													maxLength: 100,
													value: formData.name,
													onChange: (e) => setFormData((prev) => ({
														...prev,
														name: e.target.value
													})),
													className: "w-full bg-transparent text-base text-label outline-none placeholder:text-subtle",
													placeholder: "Your name",
													autoComplete: "name",
													required: true
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block px-5 py-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase",
													children: "Phone"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "phone",
													name: "phone",
													type: "tel",
													inputMode: "tel",
													maxLength: 40,
													value: formData.phone,
													onChange: (e) => setFormData((prev) => ({
														...prev,
														phone: e.target.value
													})),
													className: "w-full bg-transparent text-base text-label outline-none placeholder:text-subtle",
													placeholder: "+380 63 000 0000",
													autoComplete: "tel"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block px-5 py-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "email",
													name: "email",
													type: "email",
													maxLength: 255,
													value: formData.email,
													onChange: (e) => setFormData((prev) => ({
														...prev,
														email: e.target.value
													})),
													className: "w-full bg-transparent text-base text-label outline-none placeholder:text-subtle",
													placeholder: "you@company.com",
													autoComplete: "email",
													required: true
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block px-5 py-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-1.5 block text-xs font-medium tracking-wide text-subtle uppercase",
													children: "Message"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "message",
													name: "message",
													rows: 5,
													maxLength: 1e3,
													value: formData.message,
													onChange: (e) => setFormData((prev) => ({
														...prev,
														message: e.target.value
													})),
													className: "w-full resize-none bg-transparent text-base text-label outline-none placeholder:text-subtle",
													placeholder: "Site rebuild, new brand, social campaigns — what's the job?",
													required: true
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											disabled: isSubmitting,
											className: "w-full",
											size: "lg",
											children: isSubmitting ? "Sending…" : "Send message"
										})
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-96",
								"aria-hidden": "true"
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "map-frame surface-lift relative overflow-hidden rounded-xl bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Codex Dynamics studio — Sportyvna, 1A, Kyiv",
							src: LINKS.mapsEmbed,
							className: "relative z-10 h-[22rem] w-full border-0 sm:h-[28rem]",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							allowFullScreen: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "map-card pointer-events-auto absolute bottom-4 left-4 z-20 max-w-[min(calc(100%-5.75rem),22rem)] rounded-xl p-4 sm:bottom-5 sm:left-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium tracking-[0.18em] text-subtle uppercase",
									children: "The studio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-lg font-semibold tracking-tight text-label",
									children: CONTACT.addressStreet
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: CONTACT.addressCity
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: LINKS.mapsDirections,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex min-h-10 items-center rounded-full bg-blue px-4 text-sm font-medium text-paper hover:bg-blue-hover",
										children: "Directions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: LINKS.mapsApple,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex min-h-10 items-center rounded-full bg-fill px-4 text-sm font-medium text-label hover:bg-muted",
										children: "Apple Maps"
									})]
								})
							]
						})]
					})
				})
			]
		})
	});
}
function WhatsAppDock() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { config, primaryPhone, primaryEmail, primaryWhatsApp, primaryTelegram, primaryViber, socialsGrouped } = useSiteConfig();
	const recipientEmail = config.formSubmitEmail || primaryEmail?.value || "hello@codexdynamics.com";
	const whatsappHref = primaryWhatsApp?.href || LINKS.whatsapp;
	const telegramHref = primaryTelegram?.href || LINKS.telegram;
	const viberHref = primaryViber?.href || LINKS.viber;
	const phoneHref = primaryPhone?.href || LINKS.tel;
	const instagramHref = socialsGrouped.instagram?.[0]?.href || LINKS.instagram;
	const facebookHref = socialsGrouped.facebook?.[0]?.href || LINKS.facebook;
	const extras = [
		{
			href: telegramHref,
			label: "Telegram",
			Logo: TelegramLogo,
			external: true
		},
		{
			href: viberHref,
			label: "Viber",
			Logo: ViberLogo,
			external: true
		},
		{
			href: phoneHref,
			label: "Call",
			Logo: PhoneLogo,
			external: false
		},
		{
			href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`,
			label: "Gmail",
			Logo: GmailLogo,
			external: true
		},
		{
			href: instagramHref,
			label: "Instagram",
			Logo: InstagramLogo,
			external: true
		},
		{
			href: facebookHref,
			label: "Facebook",
			Logo: FacebookLogo,
			external: true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto flex flex-col items-end gap-2.5",
			onMouseEnter: () => setOpen(true),
			onMouseLeave: () => setOpen(false),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 10,
					filter: "blur(6px)"
				},
				animate: {
					opacity: 1,
					y: 0,
					filter: "blur(0px)"
				},
				exit: {
					opacity: 0,
					y: 8,
					filter: "blur(4px)"
				},
				transition: {
					duration: .22,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "flex flex-col items-end gap-2.5",
				children: extras.map((channel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: channel.href,
					..."external" in channel && channel.external === false ? {} : {
						target: "_blank",
						rel: "noopener noreferrer"
					},
					initial: {
						opacity: 0,
						x: 12
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						delay: .03 * i,
						duration: .28
					},
					className: "group flex items-center gap-2.5",
					"aria-label": channel.label,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dock-label rounded-full px-3 py-1 text-[13px] font-medium text-label",
						children: channel.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(channel.Logo, { className: "size-11 drop-shadow-[0_8px_18px_rgb(0_0_0_/_0.2)]" })]
				}, channel.label))
			}, "stack") : null }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: whatsappHref,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "relative flex size-14 items-center justify-center rounded-full transition-transform duration-150 ease-out active:scale-[0.96]",
				"aria-label": "WhatsApp",
				onFocus: () => setOpen(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLogo, { className: "size-14 drop-shadow-[0_10px_24px_rgb(37_211_102_/_0.45)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "wa-pulse",
					"aria-hidden": "true"
				})]
			})]
		})
	});
}
var SECTION_MAP = {
	hero: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
	highlights: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, {}),
	portfolio: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
	results: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
	reviews: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
	about: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
	services: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
	studio: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {}),
	blog: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSection, {}),
	contact: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact$1, {})
};
var PAGE_SECTIONS = {
	home: [],
	work: ["portfolio", "results"],
	services: ["services"],
	studio: ["studio", "about"],
	blog: ["blog"],
	contact: ["contact"]
};
function OrderedHome() {
	const { config } = useSiteConfig();
	const order = resolveSectionsOrder(config.theme);
	const visibility = resolveSectionVisibility(config.theme);
	const componentGate = {
		hero: "hero-clip",
		highlights: "bento-highlights",
		portfolio: "portfolio-showcase",
		results: "results-counter",
		reviews: "reviews-slider",
		services: "services-carousel",
		blog: "gutenberg-blocks"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: order.map((id) => {
		if (visibility[id] === false) return null;
		const gate = componentGate[id];
		if (gate && !isComponentEnabled(config, gate)) return null;
		const render = SECTION_MAP[id];
		return render ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: render() }, id) : null;
	}) });
}
function SitePageBody({ page = "home" }) {
	if (page !== "home") {
		const ids = PAGE_SECTIONS[page] || [];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: ids.map((id) => {
			const render = SECTION_MAP[id];
			return render ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: render() }, id) : null;
		}) });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderedHome, {});
}
function SiteChrome({ page = "home" }) {
	const { config } = useSiteConfig();
	const preview = usePreviewMode();
	const showHeader = isComponentEnabled(config, "header-builder");
	const showFooter = isComponentEnabled(config, "footer-widgets");
	const showDock = isComponentEnabled(config, "sticky-contact-dock") && !preview.isPreview;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		showHeader ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageBody, { page }) }),
		showFooter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}) : null,
		showDock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppDock, {}) : null
	] });
}
//#endregion
export { resolveGeoLocation as n, SiteChrome as t };
