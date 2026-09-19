import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, _ as createRootRoute, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Send, Vt as CircleCheck, et as LoaderCircle, l as TriangleAlert, n as X, y as Sparkles } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ICi-0EwA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var DEFAULT_SITE_CONFIG = {
	siteName: "Codex Dynamics",
	copyrightYear: "2026",
	formSubmitEmail: "codexdynamix@gmail.com",
	colors: {
		primary: "#0071e3",
		background: "#f5f5f7",
		cardBg: "#ffffff",
		textMain: "#1d1d1f",
		textMuted: "#6e6e73",
		accent: "#0071e3"
	},
	socialContacts: [
		{
			id: "wa-1",
			type: "whatsapp",
			label: "Main WhatsApp",
			value: "+380636406783",
			href: "https://wa.me/380636406783",
			isPrimary: true
		},
		{
			id: "wa-2",
			type: "whatsapp",
			label: "Support Desk WhatsApp",
			value: "+380636406783",
			href: "https://wa.me/380636406783",
			isPrimary: false
		},
		{
			id: "ph-1",
			type: "phone",
			label: "Direct Call / Desk",
			value: "+380 63 640 6783",
			href: "tel:+380636406783",
			isPrimary: true
		},
		{
			id: "tg-1",
			type: "telegram",
			label: "Official Telegram",
			value: "+380636406783",
			href: "https://t.me/+380636406783",
			isPrimary: true
		},
		{
			id: "vb-1",
			type: "viber",
			label: "Direct Viber",
			value: "+380636406783",
			href: "viber://chat?number=%2B380636406783",
			isPrimary: true
		},
		{
			id: "em-1",
			type: "email",
			label: "Primary Email",
			value: "codexdynamix@gmail.com",
			href: "mailto:codexdynamix@gmail.com",
			isPrimary: true
		},
		{
			id: "ig-1",
			type: "instagram",
			label: "Instagram Profile",
			value: "@codex_dynamics",
			href: "https://www.instagram.com/codex_dynamics/",
			isPrimary: true
		},
		{
			id: "fb-1",
			type: "facebook",
			label: "Facebook Page",
			value: "Codex Dynamics",
			href: "https://www.facebook.com/profile.php?id=61571219783449",
			isPrimary: true
		}
	],
	addresses: [{
		id: "addr-1",
		label: "Kyiv Studio (HQ)",
		street: "Sportyvna, 1A",
		city: "Kyiv, 012023, Ukraine",
		fullAddress: "Sportyvna, 1A, Kyiv, 012023, Ukraine",
		lat: 50.438743,
		lng: 30.523177,
		isPrimary: true
	}, {
		id: "addr-2",
		label: "Gulliver Tower Desk",
		street: "Ploshcha Sportyvna, 1A",
		city: "Kyiv, Ukraine",
		fullAddress: "Ploshcha Sportyvna 1A, Gulliver Tower A, Kyiv",
		lat: 50.438743,
		lng: 30.523177,
		isPrimary: false
	}],
	hero: {
		badge: "Codex Dynamics",
		title: "Precision on every screen.",
		subtitle: "Websites, web apps, and social campaigns — composed with the care of a product launch.",
		clips: [
			{
				id: "clip-1",
				label: "Codex Dynamics",
				line: "The studio. The standard.",
				src: "/hero/studio.mp4",
				poster: "/hero/studio.jpg"
			},
			{
				id: "clip-2",
				label: "Web Development",
				line: "Websites and web apps, assembled like a product.",
				src: "/hero/web-dev.mp4",
				poster: "/hero/web-dev.jpg"
			},
			{
				id: "clip-3",
				label: "Web Design",
				line: "Type, color, and layout as one material.",
				src: "/hero/design.mp4",
				poster: "/hero/design.jpg"
			},
			{
				id: "clip-4",
				label: "Social Media",
				line: "Content, campaigns, and growth — in one system.",
				src: "/hero/social.mp4",
				poster: "/hero/social.jpg"
			}
		]
	},
	highlights: { items: [
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
	] },
	services: {
		badge: "Services",
		title: "Three things. Done as one.",
		subtitle: "Web development, web design, and social media marketing — the site, the system, and the signal that grows it.",
		items: [
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
		]
	},
	about: {
		badge: "How we work",
		title: "From brief to live campaigns.",
		subtitle: "Design, development, and social media in one loop — not a handoff graveyard. Typical engagement: four to six weeks.",
		steps: [
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
		],
		gallery: [
			{
				id: "gal-1",
				src: "/studio/interior.jpg",
				alt: "The Codex Dynamics studio overlooking the city",
				label: "Studio Interior"
			},
			{
				id: "gal-2",
				src: "/studio/code.jpg",
				alt: "Engineer writing production code",
				label: "Production Engineering"
			},
			{
				id: "gal-3",
				src: "/studio/design.jpg",
				alt: "Designer reviewing a web interface",
				label: "Design Review"
			},
			{
				id: "gal-4",
				src: "/studio/wireframes.jpg",
				alt: "Website wireframes on a desk",
				label: "Wireframes & System"
			},
			{
				id: "gal-5",
				src: "/studio/social.jpg",
				alt: "Social media creative on a phone",
				label: "Social Media Feed"
			},
			{
				id: "gal-6",
				src: "/studio/analytics.jpg",
				alt: "Performance dashboard and analytics",
				label: "Analytics & Telemetry"
			}
		]
	},
	studio: {
		badge: "The studio",
		title: "A small team. A high standard.",
		subtitle: "Codex Dynamics is a studio, not a hiring board. Senior design, development, and social sit on the same desk — and stay on the work until it performs.",
		heroImage: "/studio/interior.jpg",
		heroImageAlt: "Codex Dynamics studio, Sportyvna 1A, Kyiv",
		studioCityTag: "Kyiv",
		studioLocationTag: "Gulliver · Open in Maps",
		principles: [
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
		]
	},
	results: {
		badge: "Proof",
		title: "Measured the way a board measures it.",
		subtitle: "Speed, conversion, and paid social return — not a 40-page deck.",
		metrics: [
			{
				value: 140,
				suffix: "+",
				label: "Websites shipped",
				decimals: 0
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
				label: "Typical build",
				decimals: 0
			},
			{
				value: 60,
				suffix: "+",
				label: "Brands in market",
				decimals: 0
			}
		]
	},
	contact: {
		badge: "Start a project",
		title: "Tell us what you want to build.",
		subtitle: "Drop a brief, a loom, or a note. A partner replies within one business day.",
		responseTimeText: "Typically responds within 2 hours during business hours.",
		phoneCardTitle: "Call the desk",
		phoneCardSubtitle: "Mon–Fri · 9:00–19:00 EET",
		emailCardTitle: "Email us",
		emailCardSubtitle: "Briefs, RFPs, decks",
		locationCardTitle: "Kyiv Studio",
		locationCardSubtitle: "Visits by appointment"
	},
	footer: {
		tagline: "Web development, web design, and social media marketing. We build the site, then we grow it.",
		copyrightText: "Codex Dynamics. All rights reserved."
	},
	theme: {
		activeTheme: "codex-pro",
		preset: "default",
		fontFamily: "system",
		containerWidth: "1280px",
		borderRadius: "modern",
		headerStyle: "floating",
		heroLayout: "streamer",
		fontSizeScale: "normal",
		cardStyle: "glass",
		activeComponents: [
			"header-builder",
			"hero-clip",
			"bento-highlights",
			"portfolio-showcase",
			"results-counter",
			"reviews-slider",
			"services-carousel",
			"gutenberg-blocks",
			"footer-widgets",
			"sticky-contact-dock",
			"elementor-engine"
		]
	},
	tidio: {
		enabled: false,
		publicKey: "",
		disableOnAdmin: true,
		hideOnMobile: false,
		position: "bottom-right",
		welcomeMessage: "Hi! How can we help you today? Leave us a message and our team will get right back to you."
	}
};
var SiteConfigContext = (0, import_react.createContext)(null);
function SiteConfigProvider({ children }) {
	const [config, setConfig] = (0, import_react.useState)(DEFAULT_SITE_CONFIG);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const fetchConfig = (0, import_react.useCallback)(async () => {
		try {
			setIsLoading(true);
			const res = await fetch("/api/public/site-config");
			if (res.ok) {
				const data = await res.json();
				if (data.ok && data.config) setConfig(data.config);
			}
		} catch {} finally {
			setIsLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchConfig();
	}, [fetchConfig]);
	const updateLocalConfig = (0, import_react.useCallback)((updated) => {
		setConfig(updated);
	}, []);
	const primaryPhone = (0, import_react.useMemo)(() => {
		return config.socialContacts.find((c) => c.type === "phone" && c.isPrimary) || config.socialContacts.find((c) => c.type === "phone");
	}, [config.socialContacts]);
	const primaryWhatsApp = (0, import_react.useMemo)(() => {
		return config.socialContacts.find((c) => c.type === "whatsapp" && c.isPrimary) || config.socialContacts.find((c) => c.type === "whatsapp");
	}, [config.socialContacts]);
	const primaryTelegram = (0, import_react.useMemo)(() => {
		return config.socialContacts.find((c) => c.type === "telegram" && c.isPrimary) || config.socialContacts.find((c) => c.type === "telegram");
	}, [config.socialContacts]);
	const primaryViber = (0, import_react.useMemo)(() => {
		return config.socialContacts.find((c) => c.type === "viber" && c.isPrimary) || config.socialContacts.find((c) => c.type === "viber");
	}, [config.socialContacts]);
	const primaryEmail = (0, import_react.useMemo)(() => {
		return config.socialContacts.find((c) => c.type === "email" && c.isPrimary) || config.socialContacts.find((c) => c.type === "email");
	}, [config.socialContacts]);
	const primaryAddress = (0, import_react.useMemo)(() => {
		return config.addresses.find((a) => a.isPrimary) || config.addresses[0];
	}, [config.addresses]);
	const socialsGrouped = (0, import_react.useMemo)(() => {
		const grouped = {
			whatsapp: [],
			telegram: [],
			viber: [],
			phone: [],
			email: [],
			instagram: [],
			facebook: [],
			custom: []
		};
		for (const item of config.socialContacts) if (item.type in grouped) grouped[item.type].push(item);
		else grouped.custom.push(item);
		return grouped;
	}, [config.socialContacts]);
	const value = (0, import_react.useMemo)(() => ({
		config,
		isLoading,
		refetch: fetchConfig,
		updateLocalConfig,
		primaryPhone,
		primaryWhatsApp,
		primaryTelegram,
		primaryViber,
		primaryEmail,
		primaryAddress,
		socialsGrouped,
		addresses: config.addresses
	}), [
		config,
		isLoading,
		fetchConfig,
		updateLocalConfig,
		primaryPhone,
		primaryWhatsApp,
		primaryTelegram,
		primaryViber,
		primaryEmail,
		primaryAddress,
		socialsGrouped
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteConfigContext.Provider, {
		value,
		children
	});
}
function deriveFromConfig(config) {
	const pick = (type) => config.socialContacts.find((c) => c.type === type && c.isPrimary) || config.socialContacts.find((c) => c.type === type);
	const grouped = {
		whatsapp: [],
		telegram: [],
		viber: [],
		phone: [],
		email: [],
		instagram: [],
		facebook: [],
		custom: []
	};
	for (const item of config.socialContacts) if (item.type in grouped) grouped[item.type].push(item);
	else grouped.custom.push(item);
	return {
		primaryPhone: pick("phone"),
		primaryWhatsApp: pick("whatsapp"),
		primaryTelegram: pick("telegram"),
		primaryViber: pick("viber"),
		primaryEmail: pick("email"),
		primaryAddress: config.addresses.find((a) => a.isPrimary) || config.addresses[0],
		socialsGrouped: grouped,
		addresses: config.addresses
	};
}
function SiteConfigOverrideProvider({ config, children }) {
	const derived = (0, import_react.useMemo)(() => deriveFromConfig(config), [config]);
	const value = (0, import_react.useMemo)(() => ({
		config,
		isLoading: false,
		refetch: async () => {},
		updateLocalConfig: () => {},
		...derived
	}), [config, derived]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteConfigContext.Provider, {
		value,
		children
	});
}
function useSiteConfig() {
	const ctx = (0, import_react.useContext)(SiteConfigContext);
	if (!ctx) return {
		config: DEFAULT_SITE_CONFIG,
		isLoading: false,
		refetch: async () => {},
		updateLocalConfig: () => {},
		primaryPhone: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "phone"),
		primaryWhatsApp: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "whatsapp"),
		primaryTelegram: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "telegram"),
		primaryViber: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "viber"),
		primaryEmail: DEFAULT_SITE_CONFIG.socialContacts.find((c) => c.type === "email"),
		primaryAddress: DEFAULT_SITE_CONFIG.addresses[0],
		socialsGrouped: {
			whatsapp: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "whatsapp"),
			telegram: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "telegram"),
			viber: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "viber"),
			phone: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "phone"),
			email: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "email"),
			instagram: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "instagram"),
			facebook: DEFAULT_SITE_CONFIG.socialContacts.filter((c) => c.type === "facebook"),
			custom: []
		},
		addresses: DEFAULT_SITE_CONFIG.addresses
	};
	return ctx;
}
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		try {
			const saved = localStorage.getItem("codex-theme");
			if (saved === "light" || saved === "dark") {
				setThemeState(saved);
				applyTheme(saved);
			} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setThemeState("dark");
				applyTheme("dark");
			} else applyTheme("light");
		} catch {
			applyTheme("light");
		}
	}, []);
	const applyTheme = (t) => {
		if (typeof document === "undefined") return;
		const root = document.documentElement;
		if (t === "dark") {
			root.classList.add("dark");
			root.setAttribute("data-theme", "dark");
		} else {
			root.classList.remove("dark");
			root.setAttribute("data-theme", "light");
		}
	};
	const setTheme = (t) => {
		setThemeState(t);
		try {
			localStorage.setItem("codex-theme", t);
		} catch {}
		applyTheme(t);
	};
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme,
			setTheme,
			isDark: theme === "dark"
		},
		children
	});
}
function useTheme() {
	const context = (0, import_react.useContext)(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function WhatsAppLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "12",
			fill: "#fff"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#25D366",
			d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
		})]
	});
}
function TelegramLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "12",
			fill: "#fff"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#26A5E4",
			d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
		})]
	});
}
function FacebookLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "12",
			fill: "#1877F2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M15.12 12.56h-2.02v7.19h-2.98v-7.19H8.5v-2.54h1.62V8.38c0-1.35.64-3.46 3.46-3.46l2.54.01v2.83h-1.84c-.3 0-.73.15-.73.8v1.46h2.61l-.04 2.54z"
		})]
	});
}
function InstagramLogo({ className, ...props }) {
	const id = (0, import_react.useId)().replace(/:/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: `${id}-ig`,
				cx: "0.3",
				cy: "1.1",
				r: "1.2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "#fdf497"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0.45",
						stopColor: "#fd5949"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0.6",
						stopColor: "#d6249f"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0.9",
						stopColor: "#285AEB"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "24",
				height: "24",
				rx: "6.2",
				fill: `url(#${id}-ig)`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6.15",
				y: "6.15",
				width: "11.7",
				height: "11.7",
				rx: "3.4",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2.85",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16.35",
				cy: "7.7",
				r: "0.95",
				fill: "#fff"
			})
		]
	});
}
function LinkedInLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "5.4",
			fill: "#0A66C2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#ffffff",
			d: "M6.94 5a1.69 1.69 0 1 0 0 3.38 1.69 1.69 0 0 0 0-3.38zM5.5 9.5h2.88V19H5.5V9.5zm4.5 0h2.76v1.3h.04c.38-.72 1.33-1.48 2.74-1.48 2.93 0 3.47 1.93 3.47 4.44V19h-2.88v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44V19h-2.88V9.5z"
		})]
	});
}
function TwitterXLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "5.4",
			fill: "#000000"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#ffffff",
			d: "M17.53 4.5h2.61l-5.7 6.51L21.15 19.5h-5.25l-4.11-5.38-4.71 5.38H4.47l6.1-6.97L4.1 4.5h5.38l3.71 4.91L17.53 4.5zm-.92 13.44h1.45L7.96 5.98H6.4l10.21 11.96z"
		})]
	});
}
function GitHubLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "5.4",
			fill: "#181717"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#ffffff",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75 0 3.42 2.22 6.33 5.3 7.35.39.07.53-.17.53-.38 0-.18-.01-.79-.01-1.43-2.16.47-2.61-.92-2.61-.92-.35-.9-.86-1.14-.86-1.14-.7-.48.05-.47.05-.47.78.05 1.19.8 1.19.8.69 1.18 1.82.84 2.26.64.07-.5.27-.84.49-1.04-1.72-.2-3.53-.86-3.53-3.84 0-.85.3-1.54.8-2.08-.08-.2-.35-.99.08-2.06 0 0 .65-.21 2.13.8a7.42 7.42 0 0 1 3.88 0c1.48-1.01 2.13-.8 2.13-.8.43 1.07.16 1.86.08 2.06.5.54.8 1.23.8 2.08 0 2.99-1.82 3.63-3.55 3.83.28.24.53.71.53 1.44 0 1.04-.01 1.87-.01 2.13 0 .21.14.46.54.38 3.07-1.03 5.29-3.93 5.29-7.35 0-4.28-3.47-7.75-7.75-7.75z"
		})]
	});
}
function ViberLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "5.4",
			fill: "#7360F2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			transform: "translate(2.4 2.4) scale(0.8)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"
			})
		})]
	});
}
function GmailLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		"aria-hidden": "true",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "48",
				height: "48",
				rx: "12",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.75",
				y: "0.75",
				width: "46.5",
				height: "46.5",
				rx: "11.25",
				fill: "none",
				stroke: "#e6e6e6",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4caf50",
				d: "M42.5 17.2 38 19.6l-4.5 4.3V38h6.2c1.5 0 2.8-1.2 2.8-2.8V17.2z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#1e88e5",
				d: "M5.5 17.2 8.8 18.7 14.5 23.9V38H8.3c-1.5 0-2.8-1.2-2.8-2.8V17.2z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				fill: "#e53935",
				points: "33.5,13.4 24,20.8 14.5,13.4 13.6,18.6 14.5,23.9 24,31.4 33.5,23.9 34.4,18.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#c62828",
				d: "M5.5 13.8v3.4l9 6.7V12.6L11.7 10.1C10 8.7 7.3 8.7 5.5 10.3 5 10.8 5.5 12.1 5.5 13.8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fbc02d",
				d: "M42.5 13.8v3.4l-9 6.7V12.6l2.8-2.5c1.7-1.4 4.4-1.4 6.2.2.7.5.2 1.8.2 3.5z"
			})
		]
	});
}
function PhoneLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "12",
			fill: "#34C759"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M16.86 14.62c-.86-.48-1.7-.5-2.22-.13l-.74.54c-.18.13-.4.16-.6.06-1.08-.5-2.16-1.5-2.92-2.7-.2-.3-.18-.62.06-.84l.58-.6c.4-.42.46-1.08.14-1.6l-.86-1.42c-.38-.62-1.18-.8-1.78-.4-.9.6-1.5 1.62-1.46 2.78.08 2.4 1.5 4.86 4.02 7.02 2.48 2.12 4.92 3.02 7.3 2.7 1.16-.16 2.08-.9 2.54-1.88.32-.66.04-1.42-.62-1.72l-1.44-.81z"
		})]
	});
}
function MapsLogo({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "12",
				fill: "#1A73E8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M12 4.6c-2.5 0-4.5 1.96-4.5 4.48 0 3.36 4.5 8.32 4.5 8.32s4.5-4.96 4.5-8.32C16.5 6.56 14.5 4.6 12 4.6z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "9.05",
				r: "1.55",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M6.4 18.4 9.2 13.2l2.05 2.55-4.85 2.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M9.2 13.2 12 15.75 14.8 13.2 12 11.4z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M14.8 13.2 12 15.75l2.05 2.65 3.55-1.9z"
			})
		]
	});
}
var CONTACT = {
	name: "Codex Dynamics",
	phoneE164: "+380636406783",
	phoneDigits: "380636406783",
	phoneDisplay: "+380 63 640 6783",
	email: "codexdynamix@gmail.com",
	addressStreet: "Sportyvna, 1A",
	addressCity: "Kyiv, 012023, Ukraine",
	addressFull: "Sportyvna, 1A, Kyiv, 012023, Ukraine",
	lat: 50.438743,
	lng: 30.523177
};
var LINKS = {
	tel: `tel:${CONTACT.phoneE164}`,
	whatsapp: `https://wa.me/${CONTACT.phoneDigits}`,
	telegram: `https://t.me/+${CONTACT.phoneDigits}`,
	viber: `viber://chat?number=%2B${CONTACT.phoneDigits}`,
	mailto: `mailto:${CONTACT.email}`,
	gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`,
	instagram: "https://www.instagram.com/codex_dynamics/",
	facebook: "https://www.facebook.com/profile.php?id=61571219783449",
	linkedin: "https://linkedin.com/company/codexdynamics",
	twitter: "https://x.com/codexdynamics",
	github: "https://github.com/codexdynamics",
	maps: `https://www.google.com/maps/search/?api=1&query=${CONTACT.lat},${CONTACT.lng}`,
	mapsApple: `https://maps.apple.com/?ll=${CONTACT.lat},${CONTACT.lng}&q=${encodeURIComponent(CONTACT.name)}`,
	mapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${CONTACT.lat},${CONTACT.lng}`,
	mapsEmbed: `https://maps.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}&hl=en&z=16&output=embed`
};
var SERVICES = [
	"High-Performance Website",
	"Web Design & UI/UX",
	"Full-Stack Web App",
	"SEO & Digital Marketing",
	"Performance Optimization",
	"General Inquiry"
];
function ContactModal({ isOpen, onClose, defaultService }) {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		service: defaultService || SERVICES[0],
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen) onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);
	(0, import_react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else {
			document.body.style.overflow = "";
			const timer = setTimeout(() => setIsSuccess(false), 300);
			return () => clearTimeout(timer);
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);
	const validate = () => {
		const errs = {};
		if (!form.name.trim()) errs.name = "Please enter your name.";
		if (!form.email.trim()) errs.email = "Please enter your email.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Please enter a valid email address.";
		if (!form.message.trim()) errs.message = "Please tell us a bit about your project or inquiry.";
		else if (form.message.trim().length < 8) errs.message = "Please provide at least 8 characters for your message.";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		try {
			setIsSubmitting(true);
			const payload = {
				name: form.name.trim(),
				email: form.email.trim(),
				phone: form.phone.trim(),
				company: "",
				service: form.service,
				message: `[Service: ${form.service}]\n${form.message.trim()}`,
				source: "website_contact_modal"
			};
			await fetch("/api/submit-enquiry.php", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			}).catch(() => null);
			try {
				const raw = localStorage.getItem("codex-inquiries");
				const list = raw ? JSON.parse(raw) : [];
				list.push({
					...payload,
					at: (/* @__PURE__ */ new Date()).toISOString()
				});
				localStorage.setItem("codex-inquiries", JSON.stringify(list));
			} catch {}
			setIsSuccess(true);
			toast.success("Inquiry received! We'll reply shortly.");
		} catch {
			setIsSuccess(true);
			toast.success("Inquiry received!");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .2 },
			onClick: onClose,
			className: "fixed inset-0 bg-black/60 backdrop-blur-md",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .96,
				y: 12
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .96,
				y: 12
			},
			transition: {
				duration: .25,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "contact-modal-title",
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-xl max-h-[90vh] bg-card rounded-3xl shadow-2xl border border-hairline overflow-hidden flex flex-col z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-7 border-b border-hairline flex items-start justify-between gap-4 bg-muted/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-xs font-semibold text-blue mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct Studio Desk" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "contact-modal-title",
						className: "text-xl sm:text-2xl font-bold text-label font-display tracking-tight",
						children: "Contact Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs sm:text-sm text-muted-foreground mt-0.5",
						children: "Have a project in mind or need engineering counsel? We respond within 2 hours."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "size-9 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-label flex items-center justify-center transition-colors shrink-0",
					"aria-label": "Close dialog",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4.5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-7 overflow-y-auto flex-1 space-y-6",
				children: [isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-8 text-center space-y-4 animate-in fade-in duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-14 rounded-full bg-blue/10 text-blue flex items-center justify-center mx-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-label font-display",
								children: "Message Dispatched!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto",
								children: [
									"Thank you, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: form.name
									}),
									". Our engineering directors have received your dispatch and will respond to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-label",
										children: form.email
									}),
									"."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 flex flex-col sm:flex-row items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "w-full sm:w-auto px-6 h-10 rounded-xl bg-blue text-white text-xs font-semibold hover:bg-blue-hover transition-colors cursor-pointer",
								children: "Return to Studio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "w-full sm:w-auto px-4 h-10 rounded-xl border border-hairline text-label text-xs font-semibold hover:bg-muted/40 transition-colors flex items-center justify-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLogo, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat on WhatsApp" })]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-label flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your Name *" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: form.name,
										onChange: (e) => {
											setForm((f) => ({
												...f,
												name: e.target.value
											}));
											if (errors.name) setErrors((err) => ({
												...err,
												name: void 0
											}));
										},
										placeholder: "Alex Morgan",
										disabled: isSubmitting,
										className: cn("w-full h-10 rounded-xl bg-paper px-3.5 text-xs text-label border transition-colors outline-none", errors.name ? "border-destructive focus:ring-1 focus:ring-destructive" : "border-hairline focus:border-blue focus:ring-1 focus:ring-blue")
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-destructive",
										children: errors.name
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-label flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email Address *" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: form.email,
										onChange: (e) => {
											setForm((f) => ({
												...f,
												email: e.target.value
											}));
											if (errors.email) setErrors((err) => ({
												...err,
												email: void 0
											}));
										},
										placeholder: "alex@company.com",
										disabled: isSubmitting,
										className: cn("w-full h-10 rounded-xl bg-paper px-3.5 text-xs text-label border transition-colors outline-none", errors.email ? "border-destructive focus:ring-1 focus:ring-destructive" : "border-hairline focus:border-blue focus:ring-1 focus:ring-blue")
									}),
									errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-destructive",
										children: errors.email
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-label flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone (optional)" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									value: form.phone,
									onChange: (e) => setForm((f) => ({
										...f,
										phone: e.target.value
									})),
									placeholder: "+380 63 000 0000",
									disabled: isSubmitting,
									className: "w-full h-10 rounded-xl bg-paper px-3.5 text-xs text-label border border-hairline focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-label",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project Focus" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.service,
									onChange: (e) => setForm((f) => ({
										...f,
										service: e.target.value
									})),
									disabled: isSubmitting,
									className: "w-full h-10 rounded-xl bg-paper px-3 text-xs text-label border border-hairline focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-colors",
									children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										children: s
									}, s))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-medium text-label flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Message / Project Brief *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Min. 8 characters"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									value: form.message,
									onChange: (e) => {
										setForm((f) => ({
											...f,
											message: e.target.value
										}));
										if (errors.message) setErrors((err) => ({
											...err,
											message: void 0
										}));
									},
									placeholder: "Outline your timeline, goals, or architectural requirements...",
									disabled: isSubmitting,
									className: cn("w-full rounded-xl bg-paper p-3 text-xs text-label border transition-colors outline-none resize-none leading-relaxed", errors.message ? "border-destructive focus:ring-1 focus:ring-destructive" : "border-hairline focus:border-blue focus:ring-1 focus:ring-blue")
								}),
								errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-destructive",
									children: errors.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "w-full h-11 rounded-2xl bg-blue hover:bg-blue-hover text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:opacity-50 cursor-pointer",
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Transmitting Inquiry..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Transmit Inquiry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" })] })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-5 border-t border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] font-medium text-muted-foreground mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prefer an instant direct channel?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-subtle",
							children: "Kyiv Studio UTC+2"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 p-2 rounded-xl bg-muted/40 hover:bg-muted text-label text-xs transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: "WhatsApp"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.telegram,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 p-2 rounded-xl bg-muted/40 hover:bg-muted text-label text-xs transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: "Telegram"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.tel,
								className: "flex items-center gap-2 p-2 rounded-xl bg-muted/40 hover:bg-muted text-label text-xs transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: "Call"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.gmail,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 p-2 rounded-xl bg-muted/40 hover:bg-muted text-label text-xs transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmailLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: "Gmail"
								})]
							})
						]
					})]
				})]
			})]
		})]
	}) });
}
var ContactModalContext = (0, import_react.createContext)(void 0);
function ContactModalProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [selectedService, setSelectedService] = (0, import_react.useState)(void 0);
	const openContactModal = (service) => {
		if (service) setSelectedService(service);
		setIsOpen(true);
	};
	const closeContactModal = () => {
		setIsOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactModalContext.Provider, {
		value: {
			isOpen,
			openContactModal,
			closeContactModal
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {
			isOpen,
			onClose: closeContactModal,
			defaultService: selectedService
		})]
	});
}
function useContactModal() {
	const context = (0, import_react.useContext)(ContactModalContext);
	if (!context) throw new Error("useContactModal must be used within a ContactModalProvider");
	return context;
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function TidioWidget() {
	const { config } = useSiteConfig();
	const tidio = config.tidio;
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || typeof document === "undefined") return;
		if (window.location.pathname.startsWith("/admin") && tidio?.disableOnAdmin) {
			if (window.tidioChatApi?.hide) window.tidioChatApi.hide();
			return;
		}
		if (!tidio?.enabled || !tidio?.publicKey?.trim()) {
			const existingScript = document.getElementById("tidio-chat-script");
			if (existingScript) existingScript.remove();
			const tidioIframe = document.getElementById("tidio-chat-iframe");
			if (tidioIframe) tidioIframe.remove();
			return;
		}
		let key = tidio.publicKey.trim();
		if (key.includes("code.tidio.co/")) {
			const match = key.match(/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?/);
			if (match) key = match[1];
		} else if (key.includes("<script")) {
			const match = key.match(/src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["']/);
			if (match) key = match[1];
		}
		key = key.replace(/\.js$/, "");
		if (!key) return;
		const scriptId = "tidio-chat-script";
		let script = document.getElementById(scriptId);
		if (!script) {
			script = document.createElement("script");
			script.id = scriptId;
			script.src = `//code.tidio.co/${encodeURIComponent(key)}.js`;
			script.async = true;
			document.body.appendChild(script);
		} else if (!script.src.includes(key)) script.src = `//code.tidio.co/${encodeURIComponent(key)}.js`;
		if (window.tidioChatApi?.show) window.tidioChatApi.show();
	}, [
		tidio?.enabled,
		tidio?.publicKey,
		tidio?.disableOnAdmin
	]);
	return null;
}
var styles_default = "/assets/styles-B3JsoQ-T.css";
var APP_NAME = "Codex Dynamics";
var Route$3 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "High-performance websites, web design, web development, and digital marketing studio website."
			},
			{
				name: "theme-color",
				content: "#000000"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              (function() {
                try {
                  var now = Date.now();
                  var history = JSON.parse(sessionStorage.getItem('__cdx_reload_history') || '[]');
                  history = history.filter(function(t) { return (now - t) < 8000; });
                  if (history.length >= 2) {
                    console.warn('[Guard] Rapid reload suppressed to ensure site stability.');
                    location.reload = function() {
                      console.warn('[Guard] location.reload blocked.');
                    };
                  }
                  history.push(now);
                  sessionStorage.setItem('__cdx_reload_history', JSON.stringify(history));
                } catch (e) {}
              })();
            ` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModalProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteConfigProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TidioWidget, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				offset: 56,
				toastOptions: { style: {
					background: "var(--color-paper)",
					border: "1px solid var(--color-hairline)",
					color: "var(--color-label)",
					borderRadius: "12px"
				} }
			})] })] }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-CChTLzH_.mjs");
var Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin-DjLceJQ6.mjs");
var Route$1 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./blog-_9vQDdF7.mjs");
var Route = createFileRoute("/blog")({
	validateSearch: (search) => {
		return { slug: search.slug || "" };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	AdminRoute: Route$1.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$3
	}),
	BlogRoute: Route.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useTheme as _, FacebookLogo as a, DEFAULT_SITE_CONFIG as b, InstagramLogo as c, PhoneLogo as d, TelegramLogo as f, cn as g, WhatsAppLogo as h, LINKS as i, LinkedInLogo as l, ViberLogo as m, useContactModal as n, GitHubLogo as o, TwitterXLogo as p, CONTACT as r, GmailLogo as s, router_exports as t, MapsLogo as u, SiteConfigOverrideProvider as v, useSiteConfig as y };
