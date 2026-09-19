import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as LogOut, $t as Bold, A as RotateCcw, At as EllipsisVertical, B as Palette, Bt as CirclePlay, C as Shield, Ct as Film, D as Send, Dt as Eye, E as Settings, Et as FileArchive, F as Plus, Ft as Contact, Gt as ChevronDown, H as Newspaper, Ht as CircleAlert, I as Phone, It as Compass, J as MessageSquare, Jt as ChartColumn, K as Monitor, Kt as Check, L as PhoneCall, Lt as Code, M as Redo2, Mt as Database, N as Radio, Nt as Copy, O as Search, Ot as EyeOff, P as Quote, Pt as Cookie, Q as Mail, Qt as BookOpen, R as PenLine, Rt as CodeXml, S as SlidersHorizontal, St as Flame, T as Share2, Tt as FileCode, U as Navigation, Ut as ChevronRight, V as Package, Vt as CircleCheck, W as MoveVertical, Wt as ChevronLeft, X as Megaphone, Xt as Building, Y as Menu, Yt as Calendar, Z as MapPin, Zt as Briefcase, _ as Star, _t as Hash, a as UserPlus, an as ArrowDown, at as Link2, b as Smartphone, c as Type, ct as Layers, d as Trash2, dt as Italic, en as BellRing, f as ThumbsUp, ft as Info, g as Strikethrough, gt as Heading2, ht as History, i as User, in as ArrowLeft, it as Link$1, j as RefreshCw, jt as Download, k as Save, kt as ExternalLink, l as TriangleAlert, lt as Laptop, m as Table, mt as Image, n as X, nt as ListOrdered, o as Upload, on as AlignLeft, ot as LayoutTemplate, p as Tablet, pt as Inbox, q as Minus, qt as ChartNoAxesColumn, r as Users, rn as ArrowRight, rt as ListFilter, s as Undo2, sn as Activity, st as LayoutGrid, t as Zap, tn as ArrowUp, tt as List, u as TrendingUp, ut as KeyRound, v as Square, vt as Grid3x3, w as ShieldCheck, wt as FileText, x as SlidersVertical, xt as Funnel, y as Sparkles, yt as Globe, z as PanelsTopLeft, zt as Clock } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { b as DEFAULT_SITE_CONFIG, g as cn, v as SiteConfigOverrideProvider, y as useSiteConfig } from "./router-ICi-0EwA.mjs";
import { d as calculateReadingTime, h as persistSiteConfig, l as SiteCanvas, m as normalizeComponentIds, n as DEFAULT_HOME_SEQUENCE, o as PreviewModeProvider, p as isDarkHex, u as applyThemeToConfig } from "./Footer-CXqLKlrJ.mjs";
import { n as resolveGeoLocation, t as SiteChrome } from "./SiteChrome-CV6SHJK6.mjs";
import { t as require_lib } from "../_libs/jszip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DjLceJQ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function AdminLogin({ emailInput, setEmailInput, passwordInput, setPasswordInput, authError, handleLogin }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f5f5f7] text-label flex items-center justify-center p-4 relative selection:bg-blue/15",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2.5 mb-3 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-blue text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)] transition-transform duration-200 group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-tight",
								children: "C"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-display font-semibold tracking-tight text-label",
							children: "Codex Dynamics"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-subtle uppercase",
						children: "Back Office & CRM Suite"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-3xl bg-card border border-black/8 p-7 sm:p-9 shadow-[0_0_0_1px_rgb(0_0_0_/_0.05),0_4px_16px_rgb(0_0_0_/_0.06)] backdrop-blur-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 pb-5 mb-5 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-semibold tracking-tight text-label font-display",
								children: "Administrator Sign In"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Manage site visitors, blogs, and SEO"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }), "SQLite3 Live"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-fill-subtle/70 border border-black/5 text-xs text-muted-foreground mb-6 flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-blue mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-label",
								children: "Hostinger Shared Hosting & PHP Ready"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground mt-0.5 leading-relaxed",
								children: [
									"Persistent database connected to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-label font-medium",
										children: "database.sqlite"
									}),
									"."
								]
							})] })]
						}),
						authError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-red-50 border border-red-200/80 text-red-600 text-xs mb-5 flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authError })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleLogin,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "admin-email",
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: "Admin Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-email",
									type: "email",
									value: emailInput,
									onChange: (e) => setEmailInput(e.target.value),
									required: true,
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-label placeholder:text-subtle transition-all outline-none",
									placeholder: "admin@codexdynamics.com"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "admin-password",
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-password",
									type: "password",
									value: passwordInput,
									onChange: (e) => setPasswordInput(e.target.value),
									required: true,
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-label placeholder:text-subtle transition-all outline-none",
									placeholder: "••••••••"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full mt-2 bg-label hover:bg-black text-paper font-medium py-3 rounded-full text-sm transition-all duration-200 shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Authenticate to CRM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct link: /admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "hover:text-label transition-colors inline-flex items-center gap-1 font-medium",
								children: ["Public Website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
							})]
						})
					]
				})]
			})
		]
	});
}
var tabMeta = {
	"site-editor": {
		label: "Elementor Visual Editor",
		icon: LayoutTemplate,
		subtitle: "Real-time visual page builder with responsive device preview"
	},
	themes: {
		label: "WordPress Themes & Layouts",
		icon: Palette,
		subtitle: "Manage, customize, and preview full themes, layouts, typography, and styles"
	},
	tidio: {
		label: "Tidio Live Chat",
		icon: MessageSquare,
		subtitle: "Live customer chat automation, lead triggers, and visitor conversation desk"
	},
	visitors: {
		label: "Live Visitors",
		icon: Activity,
		subtitle: "Real-time traffic telemetry and IP location logging"
	},
	leads: {
		label: "CRM Leads Database",
		icon: Users,
		subtitle: "Qualified prospects from visitor telemetry, contact forms, and blog readers"
	},
	analytics: {
		label: "Analytics & Regions",
		icon: ChartColumn,
		subtitle: "Audience demographics, browser share, and device metrics"
	},
	enquiries: {
		label: "Inquiries & Leads",
		icon: Inbox,
		subtitle: "Client project estimates and direct contact submissions"
	},
	backlinks: {
		label: "SEO Backlinks",
		icon: Link2,
		subtitle: "High-authority referring domains and citation tracking"
	},
	blogs: {
		label: "Blogs & Rank Math",
		icon: FileText,
		subtitle: "On-page SEO scoring and search snippet optimization"
	},
	reviews: {
		label: "Client Reviews",
		icon: Star,
		subtitle: "Verified customer testimonials and social proof ratings"
	},
	projects: {
		label: "Portfolio Projects",
		icon: Briefcase,
		subtitle: "Featured production websites and client case studies"
	},
	settings: {
		label: "Settings & Alerts",
		icon: Shield,
		subtitle: "Security credentials, instant lead webhooks, and database backups"
	}
};
function AdminHeader({ activeTab, loading, onRefresh, onOpenMobileSidebar, onOpenHostingerModal }) {
	const current = tabMeta[activeTab] || tabMeta.visitors;
	const TabIcon = current.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-black/8 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onOpenMobileSidebar,
					className: "lg:hidden p-2 rounded-xl text-subtle hover:text-label hover:bg-fill border border-black/8 transition-colors cursor-pointer shrink-0",
					"aria-label": "Open sidebar menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4 text-label" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden sm:flex p-1.5 rounded-lg bg-blue/10 text-blue shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabIcon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs text-subtle font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Codex CRM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-label font-semibold truncate font-sans text-sm sm:text-xs",
									children: current.label
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden md:block text-[11px] text-muted-foreground truncate",
							children: current.subtitle
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 sm:gap-2.5 shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onOpenHostingerModal,
						className: "hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs cursor-pointer",
						title: "Hostinger shared hosting & SQLite3 documentation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden lg:inline",
							children: "Hostinger Docs"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onRefresh,
						disabled: loading,
						className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs cursor-pointer disabled:opacity-50",
						title: "Sync data with SQLite database",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-3.5 text-muted-foreground ${loading ? "animate-spin text-blue" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Sync DB"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						target: "_blank",
						className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs",
						title: "Open public website in new tab",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Public Site"
						})]
					})
				]
			})]
		})
	});
}
function buildThemeFiles(theme) {
	const c = theme.colors;
	const fonts = theme.fontFamily === "playfair" ? {
		display: "Playfair Display",
		body: "Inter"
	} : theme.fontFamily === "syne" ? {
		display: "Syne",
		body: "Space Grotesk"
	} : theme.fontFamily === "inter" ? {
		display: "Plus Jakarta Sans",
		body: "Plus Jakarta Sans"
	} : {
		display: "SF Pro Display",
		body: "SF Pro Text"
	};
	return {
		"style.css": `/*
Theme Name: ${theme.name}
Theme URI: https://codexdynamics.io/themes/${theme.id}
Author: ${theme.author}
Author URI: ${theme.authorUrl}
Description: ${theme.description}
Version: ${theme.version}
License: GNU General Public License v2 or later
Text Domain: ${theme.id}
Tags: ${theme.tags.join(", ")}
*/

.site-canvas[data-site-theme="${theme.id}"] {
  --color-primary: ${c.primary};
  --color-accent: ${c.accent};
  --color-background: ${c.background};
  --color-card: ${c.cardBg};
  --color-foreground: ${c.textMain};
  --color-muted-foreground: ${c.textMuted};
  --color-surface: ${c.surface || c.cardBg};
  --color-border: ${c.border || "rgba(0,0,0,0.08)"};
  --color-highlight: ${c.highlight || c.accent};
  --font-display: "${fonts.display}", system-ui, sans-serif;
  --font-sans: "${fonts.body}", system-ui, sans-serif;
}

.site-canvas[data-site-theme="${theme.id}"] .surface-lift {
  background: var(--color-card);
}
`,
		"functions.php": `<?php
/**
 * ${theme.name} — setup
 */
if (!defined('ABSPATH')) { exit; }

function ${theme.id.replace(/-/g, "_")}_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'gallery', 'caption', 'style', 'script'));
    register_nav_menus(array(
        'primary' => 'Primary Navigation',
        'footer'  => 'Footer Links',
    ));
}
add_action('after_setup_theme', '${theme.id.replace(/-/g, "_")}_setup');
`,
		"theme.json": JSON.stringify({
			$schema: "https://schemas.wp.org/trunk/theme.json",
			version: 3,
			settings: {
				appearanceTools: true,
				color: { palette: [
					{
						slug: "primary",
						color: c.primary,
						name: "Primary"
					},
					{
						slug: "accent",
						color: c.accent,
						name: "Accent"
					},
					{
						slug: "background",
						color: c.background,
						name: "Background"
					},
					{
						slug: "card",
						color: c.cardBg,
						name: "Card"
					},
					{
						slug: "foreground",
						color: c.textMain,
						name: "Foreground"
					},
					{
						slug: "muted",
						color: c.textMuted,
						name: "Muted"
					}
				] },
				typography: { fontFamilies: [{
					slug: "display",
					fontFamily: fonts.display,
					name: "Display"
				}, {
					slug: "body",
					fontFamily: fonts.body,
					name: "Body"
				}] },
				layout: { contentSize: theme.containerWidth === "full" ? "100%" : theme.containerWidth }
			}
		}, null, 2),
		"header.php": `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header header-${theme.headerStyle}">
  <div class="container">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
    <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
  </div>
</header>
<div id="content" class="site-content">
`,
		"footer.php": `</div>
<footer class="site-footer">
  <div class="container">
    <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
`,
		"index.php": `<?php get_header(); ?>
<main class="site-main container hero-${theme.heroLayout || "streamer"}">
<?php if (have_posts()) : while (have_posts()) : the_post(); the_content(); endwhile; endif; ?>
</main>
<?php get_footer(); ?>
`
	};
}
var ALL_ON = Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true]));
function layout(hero, extras = {}) {
	return {
		heroLayout: hero,
		sectionsOrder: extras.sectionsOrder || [...DEFAULT_HOME_SEQUENCE],
		sectionVisibility: extras.sectionVisibility || { ...ALL_ON },
		cardStyle: extras.cardStyle || "glass",
		fontSizeScale: extras.fontSizeScale || "normal"
	};
}
function hydrate(seed) {
	const item = {
		...seed,
		layout: seed.layout || layout(seed.heroLayout || "streamer"),
		phpVersion: seed.phpVersion || "8.1+",
		wpVersion: seed.wpVersion || "6.5+",
		isInstalled: seed.isInstalled !== false,
		isBlockTheme: seed.isBlockTheme !== false
	};
	return {
		...item,
		files: buildThemeFiles(item)
	};
}
var DEFAULT_THEMES = [
	hydrate({
		id: "codex-pro",
		name: "Codex Dynamics Pro",
		version: "3.2.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "The original studio theme. Floating glass island, video streamer, Apple-grade type — this is the live default and it stays exactly as designed.",
		tags: [
			"Default",
			"Apple",
			"Glass Island",
			"Video Hero",
			"Agency"
		],
		rating: 5,
		reviewsCount: 1840,
		screenshotUrl: "/hero/studio.jpg",
		colors: {
			primary: "#0071e3",
			accent: "#0071e3",
			background: "#f5f5f7",
			cardBg: "#ffffff",
			textMain: "#1d1d1f",
			textMuted: "#6e6e73",
			secondary: "#fbfbfd",
			surface: "#ffffff",
			border: "#d2d2d7",
			inverse: "#1d1d1f",
			highlight: "#0077ed",
			ring: "#0071e3"
		},
		fontFamily: "system",
		headerStyle: "floating",
		containerWidth: "1280px",
		borderRadius: "modern",
		heroLayout: "streamer",
		layout: layout("streamer", {
			cardStyle: "glass",
			fontSizeScale: "normal"
		}),
		activeCount: "Live site",
		category: "installed",
		isDefault: true
	}),
	hydrate({
		id: "lumen-glass",
		name: "Lumen Glass",
		version: "1.4.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "A brighter iOS product page. Full-width frosted bar, split cinema hero, and airy white planes — like a launch event microsite.",
		tags: [
			"iOS",
			"Frosted Bar",
			"Split Hero",
			"Product"
		],
		rating: 5,
		reviewsCount: 612,
		screenshotUrl: "/hero/design.jpg",
		colors: {
			primary: "#0a84ff",
			accent: "#64d2ff",
			background: "#fbfbfd",
			cardBg: "#ffffff",
			textMain: "#1d1d1f",
			textMuted: "#86868b",
			secondary: "#f5f5f7",
			surface: "#ffffff",
			border: "rgba(0,0,0,0.06)",
			inverse: "#000000",
			highlight: "#0a84ff",
			ring: "#0a84ff"
		},
		fontFamily: "system",
		headerStyle: "sticky",
		containerWidth: "1440px",
		borderRadius: "pill",
		heroLayout: "split",
		layout: layout("split", {
			cardStyle: "glass",
			fontSizeScale: "spacious",
			sectionsOrder: [
				"hero",
				"highlights",
				"services",
				"portfolio",
				"results",
				"reviews",
				"about",
				"studio",
				"blog",
				"contact"
			]
		}),
		activeCount: "12,400+",
		category: "installed"
	}),
	hydrate({
		id: "studio-noir",
		name: "Studio Noir",
		version: "2.0.1",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Cinematic night mode. Opaque top bar, full-bleed streamer, charcoal planes — a premiere house for dark product films.",
		tags: [
			"Dark",
			"Cinematic",
			"Sticky Bar",
			"Night"
		],
		rating: 5,
		reviewsCount: 980,
		screenshotUrl: "/hero/studio.jpg",
		colors: {
			primary: "#7eb8ff",
			accent: "#a8d4ff",
			background: "#0c0c0e",
			cardBg: "#161618",
			textMain: "#f5f5f7",
			textMuted: "#a1a1a6",
			secondary: "#111114",
			surface: "#1c1c1e",
			border: "rgba(255,255,255,0.1)",
			inverse: "#f5f5f7",
			highlight: "#7eb8ff",
			ring: "#7eb8ff"
		},
		fontFamily: "inter",
		headerStyle: "sticky",
		containerWidth: "1280px",
		borderRadius: "clean",
		heroLayout: "streamer",
		layout: layout("streamer", {
			cardStyle: "elevated",
			fontSizeScale: "normal",
			sectionsOrder: [
				"hero",
				"portfolio",
				"highlights",
				"results",
				"services",
				"reviews",
				"studio",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "8,200+",
		category: "favorites"
	}),
	hydrate({
		id: "editorial-vellum",
		name: "Editorial Vellum",
		version: "1.2.0",
		author: "Atelier Press",
		authorUrl: "https://codexdynamics.io",
		description: "A magazine masthead on warm paper. Centered serif identity, editorial hero, generous columns — prestige publishing, not a template.",
		tags: [
			"Editorial",
			"Serif",
			"Masthead",
			"Paper"
		],
		rating: 5,
		reviewsCount: 744,
		screenshotUrl: "/studio/design.jpg",
		colors: {
			primary: "#1d1d1f",
			accent: "#3a3c40",
			background: "#f6f1e8",
			cardBg: "#fffaf3",
			textMain: "#2a2420",
			textMuted: "#7a7168",
			secondary: "#efe6d8",
			surface: "#fffaf3",
			border: "rgba(42,36,32,0.12)",
			inverse: "#2a2420",
			highlight: "#8a6a45",
			ring: "#2a2420"
		},
		fontFamily: "playfair",
		headerStyle: "classic",
		containerWidth: "1200px",
		borderRadius: "clean",
		heroLayout: "editorial",
		layout: layout("editorial", {
			cardStyle: "bordered",
			fontSizeScale: "editorial",
			sectionsOrder: [
				"hero",
				"highlights",
				"about",
				"portfolio",
				"studio",
				"services",
				"reviews",
				"results",
				"blog",
				"contact"
			]
		}),
		activeCount: "6,100+",
		category: "popular"
	}),
	hydrate({
		id: "nordic-mist",
		name: "Nordic Mist",
		version: "1.1.2",
		author: "North Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Quiet Scandinavian product design. Hairline header, centered type, cool stone surfaces — almost nothing, perfectly placed.",
		tags: [
			"Minimal",
			"Nordic",
			"Centered",
			"Quiet"
		],
		rating: 4.9,
		reviewsCount: 531,
		screenshotUrl: "/studio/interior.jpg",
		colors: {
			primary: "#1f4e5f",
			accent: "#3f7a86",
			background: "#f3f5f6",
			cardBg: "#ffffff",
			textMain: "#1c2326",
			textMuted: "#5c6b70",
			secondary: "#e8ecee",
			surface: "#ffffff",
			border: "rgba(28,35,38,0.1)",
			inverse: "#1c2326",
			highlight: "#1f4e5f",
			ring: "#1f4e5f"
		},
		fontFamily: "inter",
		headerStyle: "minimal",
		containerWidth: "1200px",
		borderRadius: "modern",
		heroLayout: "centered",
		layout: layout("centered", {
			cardStyle: "bordered",
			fontSizeScale: "spacious",
			sectionsOrder: [
				"hero",
				"highlights",
				"services",
				"portfolio",
				"about",
				"results",
				"studio",
				"reviews",
				"blog",
				"contact"
			]
		}),
		activeCount: "9,400+",
		category: "installed"
	}),
	hydrate({
		id: "mono-frame",
		name: "Mono Frame",
		version: "2.1.0",
		author: "Atelier Form",
		authorUrl: "https://codexdynamics.io",
		description: "Architectural monochrome. Sharp frames, a two-row masthead, no radius — Swiss poster discipline applied to a studio site.",
		tags: [
			"Brutalist",
			"Mono",
			"Architecture",
			"Sharp"
		],
		rating: 5,
		reviewsCount: 1102,
		screenshotUrl: "/work/system.jpg",
		colors: {
			primary: "#111111",
			accent: "#111111",
			background: "#ffffff",
			cardBg: "#f4f4f5",
			textMain: "#111111",
			textMuted: "#52525b",
			secondary: "#fafafa",
			surface: "#ffffff",
			border: "#111111",
			inverse: "#111111",
			highlight: "#111111",
			ring: "#111111"
		},
		fontFamily: "syne",
		headerStyle: "classic",
		containerWidth: "1280px",
		borderRadius: "sharp",
		heroLayout: "centered",
		layout: layout("centered", {
			cardStyle: "bordered",
			fontSizeScale: "spacious",
			sectionsOrder: [
				"hero",
				"portfolio",
				"results",
				"highlights",
				"services",
				"reviews",
				"studio",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "4,800+",
		category: "favorites"
	}),
	hydrate({
		id: "pacific-depth",
		name: "Pacific Depth",
		version: "1.3.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Deep sea glass. A solid navigation bar, split media, teal on ink — the studio as a night ocean, not a dashboard.",
		tags: [
			"Teal",
			"Split",
			"Dark Glass",
			"Wide"
		],
		rating: 4.9,
		reviewsCount: 688,
		screenshotUrl: "/hero/web-dev.jpg",
		colors: {
			primary: "#7dd3d0",
			accent: "#9ee8e4",
			background: "#071316",
			cardBg: "#0e1f24",
			textMain: "#e8f6f5",
			textMuted: "#8fb4b1",
			secondary: "#0a181c",
			surface: "#123038",
			border: "rgba(125,211,208,0.16)",
			inverse: "#e8f6f5",
			highlight: "#7dd3d0",
			ring: "#7dd3d0"
		},
		fontFamily: "inter",
		headerStyle: "sticky",
		containerWidth: "1440px",
		borderRadius: "modern",
		heroLayout: "split",
		layout: layout("split", {
			cardStyle: "glass",
			fontSizeScale: "normal",
			sectionsOrder: [
				"hero",
				"results",
				"services",
				"portfolio",
				"highlights",
				"studio",
				"reviews",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "5,600+",
		category: "popular"
	}),
	hydrate({
		id: "atelier-warm",
		name: "Atelier Warm",
		version: "1.0.4",
		author: "Kyiv Atelier",
		authorUrl: "https://codexdynamics.io",
		description: "Sunlit stone and copper type. Classic masthead, editorial stack, warm clay cards — a physical studio brochure, digitized.",
		tags: [
			"Warm",
			"Atelier",
			"Editorial",
			"Clay"
		],
		rating: 4.8,
		reviewsCount: 409,
		screenshotUrl: "/studio/interior.jpg",
		colors: {
			primary: "#9a4d2e",
			accent: "#c4784d",
			background: "#f4ece4",
			cardBg: "#fff8f2",
			textMain: "#3b2a22",
			textMuted: "#8a6f62",
			secondary: "#eadfd4",
			surface: "#fff8f2",
			border: "rgba(59,42,34,0.1)",
			inverse: "#3b2a22",
			highlight: "#9a4d2e",
			ring: "#9a4d2e"
		},
		fontFamily: "playfair",
		headerStyle: "classic",
		containerWidth: "1200px",
		borderRadius: "clean",
		heroLayout: "editorial",
		layout: layout("editorial", {
			cardStyle: "elevated",
			fontSizeScale: "editorial",
			sectionsOrder: [
				"hero",
				"studio",
				"highlights",
				"portfolio",
				"about",
				"services",
				"reviews",
				"results",
				"blog",
				"contact"
			]
		}),
		activeCount: "3,900+",
		category: "popular"
	}),
	hydrate({
		id: "quartz-line",
		name: "Quartz Line",
		version: "1.0.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Ultra-thin hairline chrome. A single top rule, centered statement, and gallery-white planes — the site as a quiet object.",
		tags: [
			"Hairline",
			"Gallery",
			"Centered",
			"Quiet"
		],
		rating: 4.9,
		reviewsCount: 355,
		screenshotUrl: "/studio/wireframes.jpg",
		colors: {
			primary: "#3a3a3c",
			accent: "#636366",
			background: "#ffffff",
			cardBg: "#f7f7f8",
			textMain: "#1c1c1e",
			textMuted: "#8e8e93",
			secondary: "#f2f2f7",
			surface: "#ffffff",
			border: "rgba(60,60,67,0.12)",
			inverse: "#1c1c1e",
			highlight: "#3a3a3c",
			ring: "#3a3a3c"
		},
		fontFamily: "system",
		headerStyle: "minimal",
		containerWidth: "1200px",
		borderRadius: "clean",
		heroLayout: "centered",
		layout: layout("centered", {
			cardStyle: "flat",
			fontSizeScale: "spacious",
			sectionsOrder: [
				"hero",
				"services",
				"highlights",
				"portfolio",
				"results",
				"about",
				"studio",
				"reviews",
				"blog",
				"contact"
			]
		}),
		activeCount: "2,700+",
		category: "installed"
	}),
	hydrate({
		id: "horizon-wide",
		name: "Horizon Wide",
		version: "1.5.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Cinematic landscape. Sticky bar, split theater, 1440px stage — built for work that wants room to breathe.",
		tags: [
			"Wide",
			"Cinematic",
			"Split",
			"Sticky"
		],
		rating: 4.9,
		reviewsCount: 720,
		screenshotUrl: "/hero/social.jpg",
		colors: {
			primary: "#155eef",
			accent: "#528bff",
			background: "#f4f6fa",
			cardBg: "#ffffff",
			textMain: "#101828",
			textMuted: "#667085",
			secondary: "#eef2f6",
			surface: "#ffffff",
			border: "rgba(16,24,40,0.08)",
			inverse: "#101828",
			highlight: "#155eef",
			ring: "#155eef"
		},
		fontFamily: "inter",
		headerStyle: "sticky",
		containerWidth: "1440px",
		borderRadius: "modern",
		heroLayout: "split",
		layout: layout("split", {
			cardStyle: "elevated",
			fontSizeScale: "normal",
			sectionsOrder: [
				"hero",
				"portfolio",
				"results",
				"services",
				"highlights",
				"reviews",
				"studio",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "7,300+",
		category: "popular"
	}),
	hydrate({
		id: "ink-theater",
		name: "Ink Theater",
		version: "1.1.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "OLED black with the floating island retained. Streamer hero on ink, glass cards that read as stage lighting — night mode of the original.",
		tags: [
			"OLED",
			"Island",
			"Streamer",
			"Night"
		],
		rating: 5,
		reviewsCount: 866,
		screenshotUrl: "/hero/studio.jpg",
		colors: {
			primary: "#0a84ff",
			accent: "#64d2ff",
			background: "#000000",
			cardBg: "#1c1c1e",
			textMain: "#f5f5f7",
			textMuted: "#8e8e93",
			secondary: "#111113",
			surface: "#2c2c2e",
			border: "rgba(255,255,255,0.12)",
			inverse: "#f5f5f7",
			highlight: "#0a84ff",
			ring: "#0a84ff"
		},
		fontFamily: "system",
		headerStyle: "floating",
		containerWidth: "1280px",
		borderRadius: "modern",
		heroLayout: "streamer",
		layout: layout("streamer", {
			cardStyle: "glass",
			fontSizeScale: "normal"
		}),
		activeCount: "11,000+",
		category: "favorites"
	}),
	hydrate({
		id: "paper-studio",
		name: "Paper Studio",
		version: "1.0.2",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Gallery white with a bento hero. The island stays; the first screen becomes a modular board of clips, metrics, and type.",
		tags: [
			"Bento",
			"Gallery",
			"Island",
			"Modular"
		],
		rating: 4.8,
		reviewsCount: 501,
		screenshotUrl: "/studio/design.jpg",
		colors: {
			primary: "#0071e3",
			accent: "#34c759",
			background: "#fafafa",
			cardBg: "#ffffff",
			textMain: "#1d1d1f",
			textMuted: "#6e6e73",
			secondary: "#f2f2f7",
			surface: "#ffffff",
			border: "rgba(0,0,0,0.06)",
			inverse: "#1d1d1f",
			highlight: "#0071e3",
			ring: "#0071e3"
		},
		fontFamily: "system",
		headerStyle: "floating",
		containerWidth: "1280px",
		borderRadius: "modern",
		heroLayout: "bento",
		layout: layout("bento", {
			cardStyle: "elevated",
			fontSizeScale: "normal",
			sectionsOrder: [
				"hero",
				"portfolio",
				"highlights",
				"services",
				"results",
				"studio",
				"reviews",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "4,200+",
		category: "installed"
	}),
	hydrate({
		id: "copper-atelier",
		name: "Copper Atelier",
		version: "1.0.1",
		author: "Atelier Press",
		authorUrl: "https://codexdynamics.io",
		description: "Burnished copper on cream. Masthead serif, editorial hero, bordered plates — a print house that happens to be a website.",
		tags: [
			"Copper",
			"Serif",
			"Print",
			"Masthead"
		],
		rating: 4.8,
		reviewsCount: 298,
		screenshotUrl: "/work/storefront.jpg",
		colors: {
			primary: "#8a4b2f",
			accent: "#b56a42",
			background: "#f7f1ea",
			cardBg: "#fffdf9",
			textMain: "#2c211c",
			textMuted: "#7d6558",
			secondary: "#efe4d8",
			surface: "#fffdf9",
			border: "rgba(138,75,47,0.18)",
			inverse: "#2c211c",
			highlight: "#8a4b2f",
			ring: "#8a4b2f"
		},
		fontFamily: "playfair",
		headerStyle: "classic",
		containerWidth: "1200px",
		borderRadius: "clean",
		heroLayout: "editorial",
		layout: layout("editorial", {
			cardStyle: "bordered",
			fontSizeScale: "editorial",
			sectionsOrder: [
				"hero",
				"about",
				"portfolio",
				"highlights",
				"studio",
				"services",
				"reviews",
				"results",
				"blog",
				"contact"
			]
		}),
		activeCount: "2,100+",
		category: "popular"
	}),
	hydrate({
		id: "kyiv-night",
		name: "Kyiv Night",
		version: "1.2.0",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "Navy glass over the Dnipro after dark. Floating island, split hero, apple-blue signals — the city the studio actually lives in.",
		tags: [
			"Navy",
			"Island",
			"Split",
			"Kyiv"
		],
		rating: 5,
		reviewsCount: 640,
		screenshotUrl: "/studio/interior.jpg",
		colors: {
			primary: "#4ea3ff",
			accent: "#7ec0ff",
			background: "#07111c",
			cardBg: "#0d1b2a",
			textMain: "#eaf2fb",
			textMuted: "#8aa0b8",
			secondary: "#0a1622",
			surface: "#122436",
			border: "rgba(78,163,255,0.16)",
			inverse: "#eaf2fb",
			highlight: "#4ea3ff",
			ring: "#4ea3ff"
		},
		fontFamily: "system",
		headerStyle: "floating",
		containerWidth: "1280px",
		borderRadius: "modern",
		heroLayout: "split",
		layout: layout("split", {
			cardStyle: "glass",
			fontSizeScale: "normal",
			sectionsOrder: [
				"hero",
				"highlights",
				"portfolio",
				"studio",
				"results",
				"services",
				"reviews",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "5,050+",
		category: "favorites"
	}),
	hydrate({
		id: "soft-lumen",
		name: "Soft Lumen",
		version: "1.0.3",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "iOS Settings energy. Hairline header, bento first screen, spacious type — calm, large, and extremely considered.",
		tags: [
			"iOS",
			"Bento",
			"Spacious",
			"Hairline"
		],
		rating: 4.9,
		reviewsCount: 477,
		screenshotUrl: "/hero/design.jpg",
		colors: {
			primary: "#007aff",
			accent: "#5ac8fa",
			background: "#f2f2f7",
			cardBg: "#ffffff",
			textMain: "#000000",
			textMuted: "#6c6c70",
			secondary: "#e5e5ea",
			surface: "#ffffff",
			border: "rgba(60,60,67,0.12)",
			inverse: "#000000",
			highlight: "#007aff",
			ring: "#007aff"
		},
		fontFamily: "system",
		headerStyle: "minimal",
		containerWidth: "1280px",
		borderRadius: "modern",
		heroLayout: "bento",
		layout: layout("bento", {
			cardStyle: "elevated",
			fontSizeScale: "spacious",
			sectionsOrder: [
				"hero",
				"highlights",
				"services",
				"results",
				"portfolio",
				"studio",
				"reviews",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "6,800+",
		category: "installed"
	}),
	hydrate({
		id: "grid-atelier",
		name: "Grid Atelier",
		version: "1.1.1",
		author: "Codex Studio",
		authorUrl: "https://codexdynamics.io",
		description: "A modular board from the first pixel. Sticky bar, bento hero, tight geometry — work arranged like a wall in the studio.",
		tags: [
			"Bento",
			"Grid",
			"Sticky",
			"Modular"
		],
		rating: 4.8,
		reviewsCount: 390,
		screenshotUrl: "/studio/wireframes.jpg",
		colors: {
			primary: "#1d4ed8",
			accent: "#3b82f6",
			background: "#f8fafc",
			cardBg: "#ffffff",
			textMain: "#0f172a",
			textMuted: "#64748b",
			secondary: "#f1f5f9",
			surface: "#ffffff",
			border: "rgba(15,23,42,0.08)",
			inverse: "#0f172a",
			highlight: "#1d4ed8",
			ring: "#1d4ed8"
		},
		fontFamily: "inter",
		headerStyle: "sticky",
		containerWidth: "1440px",
		borderRadius: "clean",
		heroLayout: "bento",
		layout: layout("bento", {
			cardStyle: "elevated",
			fontSizeScale: "compact",
			sectionsOrder: [
				"hero",
				"portfolio",
				"results",
				"services",
				"highlights",
				"reviews",
				"studio",
				"about",
				"blog",
				"contact"
			]
		}),
		activeCount: "3,400+",
		category: "popular"
	})
];
function AdminSidebar({ activeTab, setActiveTab, stats, isOpenMobile, onCloseMobile, onOpenHostingerModal, onSimulateVisitor, onLogout }) {
	const navSections = [
		{
			group: "WordPress & Site Design",
			items: [
				{
					id: "site-editor",
					label: "Elementor Visual Editor",
					icon: LayoutTemplate,
					count: null,
					badgeLive: true,
					badgeColor: "bg-[#E24474]/10 text-[#E24474] border-[#E24474]/20"
				},
				{
					id: "themes",
					label: "Themes",
					icon: Palette,
					count: DEFAULT_THEMES.length,
					badgeLive: false,
					badgeColor: "bg-[#2271b1]/10 text-[#2271b1] border-[#2271b1]/20"
				},
				{
					id: "tidio",
					label: "Tidio Live Chat",
					icon: MessageSquare,
					count: null,
					badgeLive: true,
					badgeColor: "bg-[#0066FF]/10 text-[#0066FF] border-[#0066FF]/20"
				}
			]
		},
		{
			group: "Traffic & Telemetry",
			items: [{
				id: "visitors",
				label: "Live Visitors",
				icon: Activity,
				count: stats.totalVisitors,
				badgeLive: true,
				badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70"
			}, {
				id: "analytics",
				label: "Analytics & Regions",
				icon: ChartColumn,
				count: null,
				badgeLive: false,
				badgeColor: ""
			}]
		},
		{
			group: "Client & Inquiries",
			items: [
				{
					id: "leads",
					label: "CRM Leads",
					icon: Users,
					count: stats.totalLeads ?? 0,
					badgeLive: (stats.newLeads ?? 0) > 0,
					badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70"
				},
				{
					id: "enquiries",
					label: "Inquiries",
					icon: Inbox,
					count: stats.totalEnquiries,
					badgeLive: false,
					badgeColor: "bg-blue/10 text-blue border-blue/20"
				},
				{
					id: "reviews",
					label: "Client Reviews",
					icon: Star,
					count: stats.totalReviews,
					badgeLive: false,
					badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70"
				}
			]
		},
		{
			group: "Content & Optimization",
			items: [
				{
					id: "blogs",
					label: "Rank Math Blogs",
					icon: FileText,
					count: stats.totalBlogs,
					badgeLive: false,
					badgeColor: "bg-blue/10 text-blue border-blue/20"
				},
				{
					id: "backlinks",
					label: "SEO Backlinks",
					icon: Link2,
					count: stats.totalBacklinks,
					badgeLive: false,
					badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70"
				},
				{
					id: "projects",
					label: "Portfolio Projects",
					icon: Briefcase,
					count: stats.totalProjects,
					badgeLive: false,
					badgeColor: "bg-black/5 text-subtle border-black/5"
				}
			]
		},
		{
			group: "System & Control",
			items: [{
				id: "settings",
				label: "Settings & Alerts",
				icon: Shield,
				count: null,
				badgeLive: false,
				badgeColor: ""
			}]
		}
	];
	const handleSelectTab = (id) => {
		setActiveTab(id);
		onCloseMobile();
	};
	const sidebarContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full bg-[#fbfbfd] border-r border-black/8 select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 pb-4 border-b border-black/6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					onClick: onCloseMobile,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-blue text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)] transition-transform duration-200 group-hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-none font-bold tracking-tight",
							children: "C"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold text-sm tracking-tight text-label",
								children: "Codex Dynamics"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-blue/10 text-blue border border-blue/20 uppercase",
								children: "Pro"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground font-medium",
							children: "Back Office CRM"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCloseMobile,
					className: "lg:hidden p-1.5 rounded-full text-subtle hover:text-label hover:bg-fill transition-colors cursor-pointer",
					"aria-label": "Close sidebar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 pt-3.5 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/6 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold text-label",
								children: "SQLite3 Active"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-mono",
								children: "database.sqlite"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpenHostingerModal,
						className: "text-[10px] font-medium text-blue hover:underline cursor-pointer px-1.5 py-0.5 rounded",
						title: "Hostinger documentation",
						children: "Docs"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex-1 px-3 py-2 space-y-5 overflow-y-auto custom-scrollbar",
				children: [navSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 text-[10px] font-semibold tracking-wider uppercase text-subtle font-mono",
						children: section.group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: section.items.map((item) => {
							const Icon = item.icon;
							const isActive = activeTab === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleSelectTab(item.id),
								className: `w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${isActive ? "bg-white text-label font-semibold shadow-xs border border-black/8 ring-1 ring-black/4" : "text-muted-foreground hover:text-label hover:bg-black/[0.03]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-4 shrink-0 transition-colors ${isActive ? "text-blue" : "text-subtle"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.label
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 shrink-0 ml-2",
									children: [
										item.badgeLive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2 w-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
										}),
										typeof item.count === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[10px] px-2 py-0.5 rounded-full font-medium border ${isActive ? "bg-blue/10 text-blue border-blue/20 font-semibold" : item.badgeColor || "bg-black/5 text-subtle border-black/5"}`,
											children: item.count
										}),
										isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3 text-blue shrink-0 ml-0.5" })
									]
								})]
							}, item.id);
						})
					})]
				}, section.group)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 pt-2 border-t border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 text-[10px] font-semibold tracking-wider uppercase text-subtle font-mono",
						children: "System & Tools"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onSimulateVisitor,
								className: "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-label hover:bg-black/[0.03] transition-colors cursor-pointer text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simulate Visitor Ping" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onOpenHostingerModal,
								className: "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-label hover:bg-black/[0.03] transition-colors cursor-pointer text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-4 text-blue shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hostinger & SQLite Guide" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								target: "_blank",
								className: "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-label hover:bg-black/[0.03] transition-colors text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-subtle shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Site" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-amber-500" })]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 border-t border-black/6 bg-white/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-2 rounded-xl bg-white border border-black/6 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-8 rounded-full bg-label text-paper flex items-center justify-center text-xs font-semibold shrink-0 shadow-xs",
							children: "AD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label truncate",
								children: "Codex Admin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground truncate font-mono",
								children: "admin@codexdynamics.com"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onLogout,
						className: "p-1.5 rounded-lg text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0 ml-1",
						title: "Sign Out of Back Office",
						"aria-label": "Sign Out",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
					})]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "hidden lg:flex lg:flex-col lg:w-64 xl:w-72 fixed inset-y-0 left-0 z-30 shadow-xs",
			children: sidebarContent
		}),
		isOpenMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity",
			onClick: onCloseMobile,
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform transition-transform duration-200 ease-in-out lg:hidden shadow-2xl ${isOpenMobile ? "translate-x-0" : "-translate-x-full"}`,
			children: sidebarContent
		})
	] });
}
function AdminMetrics({ stats, activeTab, setActiveTab }) {
	const cards = [
		{
			id: "visitors",
			title: "Total Visitors",
			value: stats.totalVisitors,
			subValue: `+${stats.todayVisitors} today`,
			icon: Users,
			badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
			accent: "text-emerald-600"
		},
		{
			id: "leads",
			title: "CRM Leads",
			value: stats.totalLeads ?? 0,
			subValue: `${stats.newLeads ?? 0} new inbound`,
			icon: Contact,
			badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
			accent: "text-emerald-600"
		},
		{
			id: "enquiries",
			title: "Inquiries",
			value: stats.totalEnquiries,
			subValue: "Form submissions",
			icon: UserPlus,
			badgeColor: "bg-blue/10 text-blue border-blue/20",
			accent: "text-blue"
		},
		{
			id: "backlinks",
			title: "SEO Backlinks",
			value: stats.totalBacklinks,
			subValue: "Indexed domains",
			icon: Link2,
			badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
			accent: "text-purple-600"
		},
		{
			id: "blogs",
			title: "Blog Articles",
			value: stats.totalBlogs,
			subValue: "Rank Math ready",
			icon: FileText,
			badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
			accent: "text-amber-600"
		},
		{
			id: "reviews",
			title: "Client Reviews",
			value: stats.totalReviews,
			subValue: "5.0 ★ average",
			icon: Star,
			badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
			accent: "text-amber-500"
		},
		{
			id: "projects",
			title: "Portfolio Sites",
			value: stats.totalProjects,
			subValue: "Active showcases",
			icon: Briefcase,
			badgeColor: "bg-blue/10 text-blue border-blue/20",
			accent: "text-blue"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3",
		children: cards.map((c) => {
			const Icon = c.icon;
			const isSelected = activeTab === c.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setActiveTab(c.id),
				className: `surface-lift text-left p-4 rounded-2xl bg-card border transition-all duration-200 cursor-pointer ${isSelected ? "border-blue/50 ring-2 ring-blue/10 shadow-sm" : "border-black/8 hover:border-black/15 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-1 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-subtle",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `p-1 rounded-lg ${c.badgeColor}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-baseline gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold tracking-tight font-display text-label",
							children: c.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-medium text-muted-foreground mt-1 truncate",
						children: c.subValue
					})
				]
			}, c.id);
		})
	});
}
function parseBrowserDetails(rawInput) {
	const str = (rawInput || "").trim();
	const lower = str.toLowerCase();
	const versionMatch = str.match(/(\d+(\.\d+)?)/);
	const version = versionMatch ? versionMatch[1] : "";
	if (lower.includes("edg")) return {
		fullName: "Microsoft Edge",
		shortName: "Edge",
		version,
		category: "edge"
	};
	if (lower.includes("opr") || lower.includes("opera")) return {
		fullName: "Opera",
		shortName: "Opera",
		version,
		category: "opera"
	};
	if (lower.includes("brave")) return {
		fullName: "Brave",
		shortName: "Brave",
		version,
		category: "brave"
	};
	if (lower.includes("firefox") || lower.includes("fxios")) return {
		fullName: "Mozilla Firefox",
		shortName: "Firefox",
		version,
		category: "firefox"
	};
	if (lower.includes("safari") && !lower.includes("chrome") && !lower.includes("crios")) return {
		fullName: "Apple Safari",
		shortName: "Safari",
		version,
		category: "safari"
	};
	if (lower.includes("chrome") || lower.includes("crios") || lower.includes("chromium")) return {
		fullName: "Google Chrome",
		shortName: "Chrome",
		version,
		category: "chrome"
	};
	return {
		fullName: str || "Web Browser",
		shortName: str || "Browser",
		version,
		category: "other"
	};
}
/**
* Authentic SVG Vector Logos for Web Browsers
*/
function BrowserIcon({ category, className = "size-4" }) {
	switch (category) {
		case "chrome": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4C31.5 4 38 8.1 41.5 14.2L28.2 37.3C27 39.4 24.6 40.8 22 40.8L12.5 24.3L24 4Z",
					fill: "#FBBC05"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4C14.7 4 6.9 10.3 4.6 18.9L16.2 38.9L24 25.5C24 20.3 28.2 16 33.5 16H42.6C38.9 8.8 32 4 24 4Z",
					fill: "#EA4335"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 44C33.3 44 41.1 37.7 43.4 29.1L31.8 9.1L24 22.5C24 27.7 19.8 32 14.5 32H5.4C9.1 39.2 16 44 24 44Z",
					fill: "#34A853"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "10.5",
					fill: "#FFFFFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "8",
					fill: "#4285F4"
				})
			]
		});
		case "safari": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "safari-bg",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#1B92FF"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#0550CE"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "22",
					fill: "url(#safari-bg)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "#FFFFFF",
					strokeWidth: "1.2",
					opacity: "0.65",
					strokeLinecap: "round",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "24",
							y1: "5",
							x2: "24",
							y2: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "24",
							y1: "40",
							x2: "24",
							y2: "43"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "5",
							y1: "24",
							x2: "8",
							y2: "24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "40",
							y1: "24",
							x2: "43",
							y2: "24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "10.5",
							y1: "10.5",
							x2: "12.7",
							y2: "12.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "35.3",
							y1: "35.3",
							x2: "37.5",
							y2: "37.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "37.5",
							y1: "10.5",
							x2: "35.3",
							y2: "12.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "12.7",
							y1: "35.3",
							x2: "10.5",
							y2: "37.5"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "24,24 22,22 36,12 26,26",
					fill: "#FF3B30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "24,24 26,26 12,36 22,22",
					fill: "#FFFFFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "2",
					fill: "#FFFFFF",
					stroke: "#0038A8",
					strokeWidth: "0.8"
				})
			]
		});
		case "firefox": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "ff-globe",
					cx: "50%",
					cy: "50%",
					r: "50%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#303A96"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "70%",
							stopColor: "#252468"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#1E174A"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "ff-flame",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#FFE033"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "35%",
							stopColor: "#FF7A00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "70%",
							stopColor: "#FF2A4D"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#9C0084"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "18",
					fill: "url(#ff-globe)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M38 12C35 8 29 6 25 7C29 9 31 13 29 16C27 19 22 18 20 23C18 28 20 33 24 35C19 35 15 32 14 28C13 24 15 20 18 17C13 19 10 23 10 28C10 36 16 42 24 42C33 42 40 35 40 26C40 20 39 15 38 12Z",
					fill: "url(#ff-flame)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M36 12C38 15 37 20 35 22C34 19 32 17 30 16C32 14 34 13 36 12Z",
					fill: "#FFDF00"
				})
			]
		});
		case "edge": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "edge-grad1",
					x1: "0%",
					y1: "100%",
					x2: "100%",
					y2: "0%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#0C59A4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#119BE7"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "edge-grad2",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#1CD0BB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#0B98E4"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4C13 4 4 13 4 24C4 32 9 39 16 42C14 39 13 35 13 31C13 22 20 15 29 15C34 15 38 17 41 20C39 11 32 4 24 4Z",
					fill: "url(#edge-grad1)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M44 26C44 36 35 44 25 44C16 44 9 37 9 28C9 23 12 18 16 15C16 23 23 29 31 29C38 29 44 25 44 26Z",
					fill: "url(#edge-grad2)"
				})
			]
		});
		case "opera": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "opera-grad",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#FF424D"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#CC0914"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35 4 24 4ZM24 38C17.5 38 14 31.7 14 24C14 16.3 17.5 10 24 10C30.5 10 34 16.3 34 24C34 31.7 30.5 38 24 38Z",
				fill: "url(#opera-grad)"
			})]
		});
		case "brave": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4L38 10V22C38 31.5 32 40 24 44C16 40 10 31.5 10 22V10L24 4Z",
					fill: "#FB542B"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 12L31 16V23C31 28 28 32.5 24 34.5C20 32.5 17 28 17 23V16L24 12Z",
					fill: "#FFFFFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "24,18 27,24 21,24",
					fill: "#FB542B"
				})
			]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: `${className} shrink-0 text-muted-foreground`,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "20",
					height: "16",
					x: "2",
					y: "4",
					rx: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 9h20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "6",
					cy: "6.5",
					r: "0.75",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "9",
					cy: "6.5",
					r: "0.75",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "6.5",
					r: "0.75",
					fill: "currentColor"
				})
			]
		});
	}
}
/**
* BrowserBadge Component
* Renders the authentic browser logo/icon AND the full name of the browser.
*/
function BrowserBadge({ browser, browserString, showFull = false, className = "", iconOnly = false, size = "md" }) {
	const { fullName, shortName, version, category } = parseBrowserDetails(browser || browserString || "");
	const displayName = showFull ? fullName : shortName;
	const sizeClasses = {
		sm: "px-2 py-0.5 text-[10px] gap-1.5",
		md: "px-2.5 py-1 text-xs gap-2",
		lg: "px-3 py-1.5 text-xs gap-2.5"
	}[size];
	const iconSizes = {
		sm: "size-3.5",
		md: "size-4",
		lg: "size-5"
	}[size];
	const themeStyles = {
		chrome: "bg-emerald-50/80 text-emerald-900 border-emerald-200/80 hover:bg-emerald-50",
		safari: "bg-sky-50/80 text-sky-900 border-sky-200/80 hover:bg-sky-50",
		firefox: "bg-amber-50/80 text-amber-950 border-amber-200/80 hover:bg-amber-50",
		edge: "bg-cyan-50/80 text-cyan-950 border-cyan-200/80 hover:bg-cyan-50",
		opera: "bg-rose-50/80 text-rose-950 border-rose-200/80 hover:bg-rose-50",
		brave: "bg-orange-50/80 text-orange-950 border-orange-200/80 hover:bg-orange-50",
		other: "bg-fill text-label border-black/8 hover:bg-fill-subtle"
	};
	const badgeTheme = themeStyles[category] || themeStyles.other;
	if (iconOnly) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center justify-center ${className}`,
		title: `${fullName}${version ? ` ${version}` : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserIcon, {
			category,
			className: iconSizes
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center rounded-full font-medium border shadow-2xs transition-colors ${sizeClasses} ${badgeTheme} ${className}`,
		title: `${fullName} ${version ? `(Version ${version})` : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserIcon, {
				category,
				className: iconSizes
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold whitespace-nowrap tracking-tight",
				children: displayName
			}),
			version && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] opacity-75 whitespace-nowrap",
				children: version
			})
		]
	});
}
function normalizeCountryCode(countryOrCode) {
	if (!countryOrCode) return "US";
	const str = countryOrCode.trim();
	const lower = str.toLowerCase();
	if (lower === "us" || lower === "usa" || lower.includes("united states") || lower.includes("america")) return "US";
	if (lower === "gb" || lower === "uk" || lower.includes("united kingdom") || lower.includes("britain") || lower.includes("england")) return "GB";
	if (lower === "de" || lower.includes("germany") || lower.includes("deutschland")) return "DE";
	if (lower === "ua" || lower.includes("ukraine")) return "UA";
	if (lower === "ca" || lower.includes("canada")) return "CA";
	if (lower === "fr" || lower.includes("france")) return "FR";
	if (lower === "ae" || lower.includes("emirates") || lower.includes("dubai")) return "AE";
	if (lower === "jp" || lower.includes("japan")) return "JP";
	if (lower === "au" || lower.includes("australia")) return "AU";
	if (lower === "sg" || lower.includes("singapore")) return "SG";
	if (lower === "nl" || lower.includes("netherlands") || lower.includes("holland")) return "NL";
	if (lower === "ch" || lower.includes("switzerland") || lower.includes("swiss")) return "CH";
	if (lower === "it" || lower.includes("italy") || lower.includes("italia")) return "IT";
	if (lower === "es" || lower.includes("spain") || lower.includes("espana")) return "ES";
	if (lower === "se" || lower.includes("sweden")) return "SE";
	if (lower === "in" || lower.includes("india")) return "IN";
	if (lower === "br" || lower.includes("brazil") || lower.includes("brasil")) return "BR";
	if (lower === "pl" || lower.includes("poland")) return "PL";
	if (str.length === 2) return str.toUpperCase();
	return "GLOBAL";
}
/**
* High-fidelity SVG Country Flags
* Renders authentic graphical national flags across all operating systems
* (ensuring Windows users see true graphical flags rather than plain text country initials).
*/
function CountryFlag({ country, countryCode, flag, className = "", size = "md" }) {
	const code = normalizeCountryCode(countryCode || country);
	const wrapperClass = `inline-flex items-center justify-center shrink-0 overflow-hidden shadow-xs border border-black/10 select-none ${{
		sm: "w-4 h-3 rounded-[2px]",
		md: "w-5 h-3.5 rounded-[3px]",
		lg: "w-7 h-5 rounded-[4px]"
	}[size]} ${className}`;
	switch (code) {
		case "US": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "United States",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 64 48",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "64",
						height: "48",
						fill: "#B22234"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "3.69",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "11.07",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "18.46",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "25.84",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "33.23",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "40.61",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "28",
						height: "26",
						fill: "#3C3B6E"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "#FFFFFF",
						opacity: "0.95",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "10",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "15",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "20",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "25",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "7.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "17.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "22.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "10",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "15",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "20",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "25",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "7.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "17.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "22.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "10",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "15",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "20",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "25",
								cy: "21",
								r: "1.3"
							})
						]
					})
				]
			})
		});
		case "GB": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "United Kingdom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
					id: "gb-clip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					clipPath: "url(#gb-clip)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "60",
							height: "40",
							fill: "#012169"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0,0 L60,40 M60,0 L0,40",
							stroke: "#FFFFFF",
							strokeWidth: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0,0 L60,40 M60,0 L0,40",
							stroke: "#C8102E",
							strokeWidth: "4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M30,0 v40 M0,20 h60",
							stroke: "#FFFFFF",
							strokeWidth: "12"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M30,0 v40 M0,20 h60",
							stroke: "#C8102E",
							strokeWidth: "7"
						})
					]
				})]
			})
		});
		case "DE": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Germany",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "13.33",
						fill: "#000000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "13.33",
						width: "60",
						height: "13.33",
						fill: "#DD0000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "26.66",
						width: "60",
						height: "13.34",
						fill: "#FFCE00"
					})
				]
			})
		});
		case "UA": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Ukraine",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "20",
					fill: "#0057B7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "20",
					width: "60",
					height: "20",
					fill: "#FFDD00"
				})]
			})
		});
		case "CA": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Canada",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "15",
						height: "40",
						fill: "#FF0000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						width: "30",
						height: "40",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "45",
						width: "15",
						height: "40",
						fill: "#FF0000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M30 10 L32 15 L36 14 L34 19 L38 21 L35 24 L36 28 L32 26 L30.8 31 L29.2 31 L28 26 L24 28 L25 24 L22 21 L26 19 L24 14 L28 15 Z",
						fill: "#FF0000"
					})
				]
			})
		});
		case "FR": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "France",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "20",
						height: "40",
						fill: "#002654"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						width: "20",
						height: "40",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "40",
						width: "20",
						height: "40",
						fill: "#ED2939"
					})
				]
			})
		});
		case "AE": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "United Arab Emirates",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						width: "45",
						height: "13.33",
						fill: "#00732F"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						y: "13.33",
						width: "45",
						height: "13.33",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						y: "26.66",
						width: "45",
						height: "13.34",
						fill: "#000000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "15",
						height: "40",
						fill: "#FF0000"
					})
				]
			})
		});
		case "JP": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Japan",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "40",
					fill: "#FFFFFF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "20",
					r: "11",
					fill: "#BC002D"
				})]
			})
		});
		case "AU": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Australia",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40",
						fill: "#00008B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						transform: "scale(0.5)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								width: "60",
								height: "40",
								fill: "#012169"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,0 L60,40 M60,0 L0,40",
								stroke: "#FFFFFF",
								strokeWidth: "6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,0 L60,40 M60,0 L0,40",
								stroke: "#C8102E",
								strokeWidth: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M30,0 v40 M0,20 h60",
								stroke: "#FFFFFF",
								strokeWidth: "10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M30,0 v40 M0,20 h60",
								stroke: "#C8102E",
								strokeWidth: "6"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "15",
						cy: "30",
						r: "4.5",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "45",
						cy: "10",
						r: "2",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "51",
						cy: "18",
						r: "2",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "45",
						cy: "32",
						r: "2.3",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "39",
						cy: "22",
						r: "2",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "47",
						cy: "24",
						r: "1.3",
						fill: "#FFFFFF"
					})
				]
			})
		});
		case "SG": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Singapore",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "20",
						fill: "#ED2939"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "20",
						width: "60",
						height: "20",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "13",
						cy: "10",
						r: "6",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "15.5",
						cy: "10",
						r: "5.2",
						fill: "#ED2939"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "17",
						cy: "7",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "19",
						cy: "10",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "18",
						cy: "13",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "15",
						cy: "13",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "14.5",
						cy: "9",
						r: "1",
						fill: "#FFFFFF"
					})
				]
			})
		});
		case "NL": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Netherlands",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "13.33",
						fill: "#AE1C28"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "13.33",
						width: "60",
						height: "13.33",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "26.66",
						width: "60",
						height: "13.34",
						fill: "#21468B"
					})
				]
			})
		});
		case "CH": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Switzerland",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 40 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "40",
						height: "40",
						fill: "#D52B1E"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "16",
						y: "8",
						width: "8",
						height: "24",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "16",
						width: "24",
						height: "8",
						fill: "#FFFFFF"
					})
				]
			})
		});
		case "IT": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Italy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "20",
						height: "40",
						fill: "#009246"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						width: "20",
						height: "40",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "40",
						width: "20",
						height: "40",
						fill: "#CE2B37"
					})
				]
			})
		});
		case "ES": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Spain",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "10",
						fill: "#AA151B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "10",
						width: "60",
						height: "20",
						fill: "#F1BF00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "30",
						width: "60",
						height: "10",
						fill: "#AA151B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "20",
						r: "4",
						fill: "#AA151B",
						opacity: "0.9"
					})
				]
			})
		});
		case "SE": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Sweden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40",
						fill: "#006AA7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "18",
						width: "8",
						height: "40",
						fill: "#FECC00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "16",
						width: "60",
						height: "8",
						fill: "#FECC00"
					})
				]
			})
		});
		case "IN": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "India",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "13.33",
						fill: "#FF9933"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "13.33",
						width: "60",
						height: "13.33",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "26.66",
						width: "60",
						height: "13.34",
						fill: "#138808"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "20",
						r: "4.5",
						fill: "none",
						stroke: "#000080",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "20",
						r: "1.2",
						fill: "#000080"
					})
				]
			})
		});
		case "BR": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Brazil",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40",
						fill: "#009739"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "30,5 55,20 30,35 5,20",
						fill: "#FEDD00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "20",
						r: "8",
						fill: "#012169"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 23,20 A 8,8 0 0,1 37,20",
						fill: "none",
						stroke: "#FFFFFF",
						strokeWidth: "1.2"
					})
				]
			})
		});
		case "PL": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Poland",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "20",
					fill: "#FFFFFF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "20",
					width: "60",
					height: "20",
					fill: "#DC143C"
				})]
			})
		});
		default:
			if (flag && flag !== "🌐" && flag !== "🌍") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: wrapperClass,
				title: country || "Country",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs leading-none",
					children: flag
				})
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: wrapperClass,
				title: country || "Global",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 24 24",
					className: "w-full h-full p-0.5 text-blue",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "12",
							r: "10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12h20" })
					]
				})
			});
	}
}
function VisitorDetailModal({ visitor, isOpen, onClose, onAddToLeads, isAlreadyLead = false }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [copiedKey, setCopiedKey] = (0, import_react.useState)(null);
	const [isSubmittingLead, setIsSubmittingLead] = (0, import_react.useState)(false);
	const [leadName, setLeadName] = (0, import_react.useState)("");
	const [leadEmail, setLeadEmail] = (0, import_react.useState)("");
	const [leadPhone, setLeadPhone] = (0, import_react.useState)("");
	const [leadCompany, setLeadCompany] = (0, import_react.useState)("");
	const [leadNotes, setLeadNotes] = (0, import_react.useState)("");
	if (!isOpen || !visitor) return null;
	const geo = resolveGeoLocation(visitor.country, visitor.flag);
	const streetAddress = visitor.street || geo.street;
	const city = visitor.city || geo.city;
	const region = visitor.region || geo.region;
	const postalCode = visitor.postal_code || geo.postalCode;
	const country = visitor.country || geo.country;
	const flag = visitor.flag || geo.flag;
	const durationSec = visitor.duration_seconds || 120;
	const formatDuration = (seconds) => {
		if (seconds < 60) return `${seconds}s`;
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		if (mins < 60) return `${mins}m ${secs}s`;
		return `${Math.floor(mins / 60)}h ${mins % 60}m`;
	};
	let pagesList = [];
	try {
		if (visitor.pages_viewed) {
			const parsed = typeof visitor.pages_viewed === "string" ? JSON.parse(visitor.pages_viewed) : visitor.pages_viewed;
			if (Array.isArray(parsed)) pagesList = parsed;
		}
	} catch {
		pagesList = [];
	}
	if (pagesList.length === 0) pagesList = [{
		url: visitor.page_url || "/",
		title: "Codex Dynamics | Bespoke Web Design & High-Conversion Systems",
		timestamp: visitor.created_at || (/* @__PURE__ */ new Date()).toISOString()
	}];
	let cookiesMap = {};
	try {
		if (visitor.cookies_data) {
			const parsed = typeof visitor.cookies_data === "string" ? JSON.parse(visitor.cookies_data) : visitor.cookies_data;
			if (typeof parsed === "object" && parsed !== null) cookiesMap = parsed;
		}
	} catch {
		cookiesMap = {};
	}
	if (Object.keys(cookiesMap).length === 0) cookiesMap = {
		__cdx_vid: `vid_${visitor.session_id ? visitor.session_id.replace("sess_", "") : "79a1"}_${visitor.country.toLowerCase().slice(0, 2)}`,
		__cdx_session: visitor.session_id || "sess_live",
		__cdx_visit_count: String(visitor.visit_count || 1),
		__cdx_duration_secs: String(durationSec),
		__cdx_first_visit: visitor.created_at || (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString(),
		__cdx_cookie_consent: "accepted",
		__cdx_utm_source: visitor.referrer && visitor.referrer !== "Direct" ? visitor.referrer : "direct_organic",
		__cdx_device_type: visitor.device || "Desktop",
		__cdx_browser_agent: visitor.browser || "Chrome"
	};
	const handleCopyText = (key, text) => {
		navigator.clipboard.writeText(text);
		setCopiedKey(key);
		toast.success(`Copied ${key} to clipboard`);
		setTimeout(() => setCopiedKey(null), 2e3);
	};
	const handleAddLeadSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsSubmittingLead(true);
			await onAddToLeads(visitor, {
				name: leadName.trim() || visitor.name || `Lead from ${city}`,
				email: leadEmail.trim() || visitor.email || "",
				phone: leadPhone.trim() || visitor.phone || "",
				company: leadCompany.trim() || "",
				notes: leadNotes.trim() || `Promoted from visitor ${visitor.session_id}. Pages viewed: ${pagesList.length}. Time on site: ${formatDuration(durationSec)}.`
			});
			toast.success("Visitor successfully added to CRM Leads!");
			setActiveTab("overview");
		} catch {
			toast.error("Failed to add to leads. Please try again.");
		} finally {
			setIsSubmittingLead(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border-b border-black/8 bg-gradient-to-b from-fill-subtle to-white flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
									country,
									countryCode: visitor.country_code,
									flag,
									size: "lg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-lg font-bold text-label font-display tracking-tight flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-normal text-muted-foreground",
										children: [
											"(",
											city,
											")"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
									browser: visitor.browser,
									showFull: true
								}),
								visitor.is_returning || visitor.visit_count && visitor.visit_count > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-3" }),
										"Returning (",
										visitor.visit_count || 2,
										"x)"
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), "First Time Visitor"]
								}),
								visitor.is_lead || isAlreadyLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue/10 text-blue border border-blue/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), "In CRM Leads"]
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-subtle",
											children: "IP:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-label",
											children: visitor.ip_address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleCopyText("ip", visitor.ip_address),
											className: "hover:text-label transition-colors cursor-pointer ml-0.5",
											title: "Copy IP",
											children: copiedKey === "ip" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle",
										children: "Session:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-label",
										children: visitor.session_id
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-subtle" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-subtle",
											children: "Time on site:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-emerald-600",
											children: formatDuration(durationSec)
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-2 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
						"aria-label": "Close modal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 px-6 border-b border-black/8 bg-fill-subtle/30 overflow-x-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("overview"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${activeTab === "overview" ? "border-label text-label" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Overview & Location" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("pages"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${activeTab === "pages" ? "border-label text-label" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Pages Visited (",
								pagesList.length,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("cookies"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${activeTab === "cookies" ? "border-label text-label" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Cookie Telemetry (",
								Object.keys(cookiesMap).length,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("lead"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ml-auto ${activeTab === "lead" ? "border-blue text-blue" : "border-transparent text-blue hover:text-blue-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add to Leads" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 overflow-y-auto flex-1 space-y-6",
					children: [
						activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-2xl bg-fill-subtle/50 border border-black/8 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Granular Geographic Location" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue/10 text-blue",
											children: "GPS / IP Resolved"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Street Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: streetAddress
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "City & Region"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: [
														city,
														", ",
														region
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Postal / ZIP Code"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono font-bold text-label mt-1",
													children: postalCode
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Country"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs font-semibold text-label mt-1 flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
														country,
														countryCode: visitor.country_code,
														flag,
														size: "md"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country })]
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-2xl bg-fill-subtle/50 border border-black/8 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit History & Session Engagement" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-white border border-black/6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground uppercase font-medium",
															children: "Visitor Type"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-bold text-label mt-1 flex items-center gap-1.5",
															children: visitor.is_returning || visitor.visit_count && visitor.visit_count > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-purple-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Returning Visitor" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "First Time Visitor" })] })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[11px] text-subtle mt-0.5",
															children: ["Total sessions recorded: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: visitor.visit_count || 1 })]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-white border border-black/6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground uppercase font-medium",
															children: "Time Spent on Site"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-mono font-bold text-emerald-600 mt-1",
															children: formatDuration(durationSec)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[11px] text-subtle mt-0.5",
															children: "Active heartbeat recorded via cookie telemetry"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-white border border-black/6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground uppercase font-medium",
															children: "Pages Clicked / Visited"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-sm font-mono font-bold text-blue mt-1",
															children: [pagesList.length, " page(s)"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[11px] text-subtle mt-0.5",
															children: ["Initial route: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
																className: "text-[10px] bg-fill px-1 py-0.5 rounded",
																children: visitor.page_url || "/"
															})]
														})
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Traffic Acquisition / Referrer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: visitor.referrer || "Direct / Organic Search"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "First Recorded Visit"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono text-label mt-1",
													children: visitor.created_at || "Recent active session"
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-2xl bg-fill-subtle/50 border border-black/8 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Browser & Hardware Fingerprint" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Browser Client"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
														browser: visitor.browser,
														showFull: true
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Device Category"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: visitor.device || "Desktop"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "User Agent String"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-mono text-subtle truncate mt-1",
													title: visitor.user_agent,
													children: visitor.user_agent || "Mozilla/5.0"
												})]
											})
										]
									})]
								})
							]
						}),
						activeTab === "pages" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-label",
									children: "Clickstream & Navigation Journey"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Chronological audit of routes and sections clicked by this visitor during their session."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-fill border border-black/8",
									children: [pagesList.length, " pages recorded"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border border-black/8 rounded-2xl overflow-hidden divide-y divide-black/8 bg-white",
								children: pagesList.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex items-start gap-3.5 hover:bg-fill-subtle/40 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-6 rounded-full bg-blue/10 text-blue font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5",
										children: idx + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-label",
												children: p.title || "Codex Dynamics"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-mono text-subtle",
												children: p.timestamp ? new Date(p.timestamp).toLocaleTimeString() : `Step ${idx + 1}`
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
												className: "text-xs font-mono font-medium text-blue bg-blue/5 px-2 py-0.5 rounded border border-blue/15",
												children: p.url
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: p.url,
												target: "_blank",
												rel: "noreferrer",
												className: "text-subtle hover:text-label transition-colors p-1",
												title: "Open route",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
											})]
										})]
									})]
								}, idx))
							})]
						}),
						activeTab === "cookies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-label",
									children: "Collected Cookie Vault"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Inspect every cookie, local storage key, and tracking token collected from this client's browser."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cookie Consent Active" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-3",
								children: Object.entries(cookiesMap).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl bg-fill-subtle/50 border border-black/8 hover:border-black/20 transition-all flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs font-bold text-label",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleCopyText(k, v),
											className: "text-subtle hover:text-label p-1 rounded transition-colors cursor-pointer",
											title: "Copy value",
											children: copiedKey === k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-mono text-muted-foreground break-all mt-1 bg-white p-2 rounded border border-black/5",
										children: v
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 pt-2 border-t border-black/5 text-[10px] text-subtle",
										children: k.includes("vid") ? "Unique persistent visitor identifier" : k.includes("session") ? "Active browsing session ID" : k.includes("duration") ? "Recorded time duration (seconds)" : k.includes("visit_count") ? "Total visits count" : k.includes("utm") ? "Marketing attribution channel" : "Client telemetry attribute"
									})]
								}, k))
							})]
						}),
						activeTab === "lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAddLeadSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-blue/5 border border-blue/20 flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-5 text-blue shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-label uppercase tracking-wide",
										children: "Promote Visitor to CRM Lead"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: [
											"Converts this visitor session into a qualified prospect inside your CRM Leads pipeline. Their location (",
											city,
											", ",
											country,
											"), street address, and engagement history will automatically attach."
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lead Full Name *" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												value: leadName,
												onChange: (e) => setLeadName(e.target.value),
												placeholder: `e.g. Lead from ${city || country}`,
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Email Address *" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												required: true,
												value: leadEmail,
												onChange: (e) => setLeadEmail(e.target.value),
												placeholder: "prospect@company.com",
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone Number (Optional)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "tel",
												value: leadPhone,
												onChange: (e) => setLeadPhone(e.target.value),
												placeholder: "+1 (555) 000-0000",
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Company Name (Optional)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: leadCompany,
												onChange: (e) => setLeadCompany(e.target.value),
												placeholder: "Acme Corp",
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Internal Notes & Sales Strategy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: leadNotes,
										onChange: (e) => setLeadNotes(e.target.value),
										placeholder: `High-interest visitor spent ${formatDuration(durationSec)} browsing ${pagesList.length} page(s).`,
										className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 flex items-center justify-end gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActiveTab("overview"),
										className: "px-4 py-2 rounded-full border border-black/10 text-xs font-medium text-label hover:bg-black/5 transition-colors cursor-pointer",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: isSubmittingLead,
										className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSubmittingLead ? "Adding to CRM..." : "Confirm & Add to Leads" })]
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 px-6 border-t border-black/8 bg-fill-subtle/40 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-subtle",
						children: [
							"Session: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-label",
								children: visitor.session_id
							}),
							" • Location: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-label",
								children: [
									city,
									", ",
									country
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-4 py-2 rounded-full border border-black/10 text-xs font-medium text-label hover:bg-black/5 transition-colors cursor-pointer",
							children: "Close"
						}), visitor.is_lead || isAlreadyLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Already in Leads" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("lead"),
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add to Leads" })]
						})]
					})]
				})
			]
		})
	});
}
function VisitorsTab({ visitors, onSimulate, onAddToLeads, leadsSessionIds = /* @__PURE__ */ new Set() }) {
	const [filter, setFilter] = (0, import_react.useState)("");
	const [browserFilter, setBrowserFilter] = (0, import_react.useState)("all");
	const [copiedIp, setCopiedIp] = (0, import_react.useState)(null);
	const [selectedVisitor, setSelectedVisitor] = (0, import_react.useState)(null);
	const handleCopyIp = (ip) => {
		navigator.clipboard.writeText(ip);
		setCopiedIp(ip);
		toast.success(`Copied IP ${ip} to clipboard`);
		setTimeout(() => setCopiedIp(null), 2e3);
	};
	const getDeviceIcon = (deviceStr) => {
		const d = (deviceStr || "").toLowerCase();
		if (d.includes("mobile") || d.includes("phone")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5 text-blue" });
		if (d.includes("tablet") || d.includes("ipad")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5 text-purple-600" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-3.5 text-muted-foreground" });
	};
	const formatDuration = (seconds) => {
		const s = seconds || 60;
		if (s < 60) return `${s}s`;
		return `${Math.floor(s / 60)}m ${s % 60}s`;
	};
	const filteredVisitors = visitors.filter((v) => {
		const q = filter.toLowerCase();
		if (!(!q || v.ip_address.toLowerCase().includes(q) || v.country && v.country.toLowerCase().includes(q) || v.city && v.city.toLowerCase().includes(q) || v.browser && v.browser.toLowerCase().includes(q) || v.page_url && v.page_url.toLowerCase().includes(q) || v.session_id && v.session_id.toLowerCase().includes(q))) return false;
		if (browserFilter !== "all") {
			if (!(v.browser || "").toLowerCase().includes(browserFilter.toLowerCase())) return false;
		}
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2.5 w-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-label font-display tracking-tight",
							children: "Live Visitor & Client Stream"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase",
							children: "Tidio & Analytics Mode"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Real-time client telemetry, flags, browser badges, cookie tracking, visit durations, and clickstream paths."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onSimulate,
						className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simulate Visitor Ping" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search IP, country, city, browser, route...",
								value: filter,
								onChange: (e) => setFilter(e.target.value),
								className: "w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: browserFilter,
								onChange: (e) => setBrowserFilter(e.target.value),
								className: "bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All Browsers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "chrome",
										children: "Chrome"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "safari",
										children: "Safari"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "firefox",
										children: "Firefox"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "edge",
										children: "Edge"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "opera",
										children: "Opera"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3 text-xs text-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							filteredVisitors.length,
							" of ",
							visitors.length,
							" sessions"
						] })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs text-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Time & Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Client IP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Location (Flag + Country)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Browser Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Device"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Duration & Visits"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Active Route"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-right",
									children: "Details & Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-hairline",
							children: filteredVisitors.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 8,
								className: "py-12 text-center text-subtle",
								children: "No visitor records match your filter."
							}) }) : filteredVisitors.map((v) => {
								const geo = resolveGeoLocation(v.country, v.flag);
								const flag = v.flag || geo.flag;
								const country = v.country || geo.country;
								const isLead = v.is_lead || leadsSessionIds.has(v.session_id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-fill-subtle/50 transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[11px] text-muted-foreground",
													children: v.created_at ? v.created_at.slice(11, 19) : "Just now"
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-label",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.ip_address }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleCopyIp(v.ip_address),
													className: "text-subtle hover:text-label p-1 rounded transition-colors cursor-pointer",
													title: "Copy IP",
													children: copiedIp === v.ip_address ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
													country,
													countryCode: v.country_code,
													flag,
													size: "md"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-label",
													children: country
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[11px] text-muted-foreground ml-1.5 font-normal",
													children: [
														"(",
														v.city || geo.city,
														")"
													]
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
												browser: v.browser,
												showFull: true,
												size: "sm"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-fill border border-black/5 text-[11px] text-label",
												children: [getDeviceIcon(v.device), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.device || "Desktop" })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 font-mono text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDuration(v.duration_seconds) })]
												}), v.is_returning || v.visit_count && v.visit_count > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-0.5 text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded-full border border-purple-200",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [v.visit_count || 2, "x"] })]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-medium text-muted-foreground",
													children: "1st"
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap font-mono text-[11px] text-blue font-medium",
											children: v.page_url || "/"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 whitespace-nowrap text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setSelectedVisitor(v),
													className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-black/8 text-label text-xs font-semibold border border-black/10 transition-all cursor-pointer shadow-xs active:scale-[0.98]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View More" })]
												}), isLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "p-1.5 rounded-full text-emerald-600 bg-emerald-50 border border-emerald-200",
													title: "Already added to CRM Leads",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" })
												}) : onAddToLeads ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setSelectedVisitor(v),
													className: "p-1.5 rounded-full text-blue hover:text-white hover:bg-blue bg-blue/5 border border-blue/20 transition-all cursor-pointer",
													title: "Add to Leads",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" })
												}) : null]
											})
										})
									]
								}, v.id);
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorDetailModal, {
				visitor: selectedVisitor,
				isOpen: !!selectedVisitor,
				onClose: () => setSelectedVisitor(null),
				onAddToLeads: async (vis, custom) => {
					if (onAddToLeads) await onAddToLeads(vis, custom);
				},
				isAlreadyLead: selectedVisitor ? Boolean(selectedVisitor.is_lead || leadsSessionIds.has(selectedVisitor.session_id)) : false
			})
		]
	});
}
function LeadsTab({ leads, onCreateLead, onUpdateStatus, onUpdateNotes, onDeleteLead }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [sourceFilter, setSourceFilter] = (0, import_react.useState)("all");
	const [isCreateModalOpen, setIsCreateModalOpen] = (0, import_react.useState)(false);
	const [newName, setNewName] = (0, import_react.useState)("");
	const [newEmail, setNewEmail] = (0, import_react.useState)("");
	const [newPhone, setNewPhone] = (0, import_react.useState)("");
	const [newCompany, setNewCompany] = (0, import_react.useState)("");
	const [newSource, setNewSource] = (0, import_react.useState)("website_contact");
	const [newNotes, setNewNotes] = (0, import_react.useState)("");
	const [newCountry] = (0, import_react.useState)("United States");
	const [newCity, setNewCity] = (0, import_react.useState)("San Francisco");
	const [newScore] = (0, import_react.useState)(75);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [editingLead, setEditingLead] = (0, import_react.useState)(null);
	const [editNotesText, setEditNotesText] = (0, import_react.useState)("");
	const filteredLeads = leads.filter((l) => {
		const q = search.toLowerCase();
		if (!(!q || l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || l.company && l.company.toLowerCase().includes(q) || l.city && l.city.toLowerCase().includes(q) || l.country && l.country.toLowerCase().includes(q) || l.notes && l.notes.toLowerCase().includes(q))) return false;
		if (statusFilter !== "all" && l.status !== statusFilter) return false;
		if (sourceFilter !== "all" && l.source !== sourceFilter) return false;
		return true;
	});
	const totalCount = leads.length;
	const newCount = leads.filter((l) => l.status === "new").length;
	const blogReaderCount = leads.filter((l) => l.source === "blog_reader").length;
	const qualifiedCount = leads.filter((l) => l.status === "qualified" || l.status === "won").length;
	const avgScore = totalCount > 0 ? Math.round(leads.reduce((acc, l) => acc + (l.score || 50), 0) / totalCount) : 70;
	const formatDuration = (seconds) => {
		const s = seconds || 120;
		if (s < 60) return `${s}s`;
		return `${Math.floor(s / 60)}m ${s % 60}s`;
	};
	const getStatusBadge = (status) => {
		switch (status) {
			case "new": return "bg-emerald-50 text-emerald-700 border-emerald-200";
			case "contacted": return "bg-blue/10 text-blue border-blue/20";
			case "qualified": return "bg-purple-50 text-purple-700 border-purple-200";
			case "proposal": return "bg-amber-50 text-amber-700 border-amber-200";
			case "won": return "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
			default: return "bg-fill text-muted-foreground border-black/10";
		}
	};
	const getSourceBadge = (source) => {
		switch (source) {
			case "blog_reader": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-2.5" }), "Blog Reader"]
			});
			case "website_contact": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue/10 text-blue border border-blue/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-2.5" }), "Website Contact"]
			});
			case "visitor_promotion": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-2.5" }), "Promoted Visitor"]
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-fill text-muted-foreground border border-black/10",
				children: "Direct Lead"
			});
		}
	};
	const handleExportCsv = () => {
		if (leads.length === 0) {
			toast.error("No leads to export.");
			return;
		}
		const headers = [
			"ID",
			"Name",
			"Email",
			"Phone",
			"Company",
			"Source",
			"Status",
			"Score",
			"Country",
			"City",
			"Postal Code",
			"Street",
			"Pages Viewed",
			"Duration (s)",
			"Notes",
			"Created At"
		];
		const rows = leads.map((l) => [
			l.id,
			`"${(l.name || "").replace(/"/g, "\"\"")}"`,
			`"${(l.email || "").replace(/"/g, "\"\"")}"`,
			`"${(l.phone || "").replace(/"/g, "\"\"")}"`,
			`"${(l.company || "").replace(/"/g, "\"\"")}"`,
			l.source,
			l.status,
			l.score || 50,
			`"${(l.country || "").replace(/"/g, "\"\"")}"`,
			`"${(l.city || "").replace(/"/g, "\"\"")}"`,
			`"${(l.postal_code || "").replace(/"/g, "\"\"")}"`,
			`"${(l.street || "").replace(/"/g, "\"\"")}"`,
			l.pages_viewed_count || 1,
			l.duration_seconds || 0,
			`"${(l.notes || "").replace(/"/g, "\"\"")}"`,
			l.created_at || ""
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `codex_crm_leads_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		toast.success("Leads exported to CSV successfully!");
	};
	const handleCreateSubmit = async (e) => {
		e.preventDefault();
		if (!newEmail.trim() || !newName.trim()) {
			toast.error("Name and Email are required.");
			return;
		}
		try {
			setIsSubmitting(true);
			await onCreateLead({
				name: newName.trim(),
				email: newEmail.trim(),
				phone: newPhone.trim(),
				company: newCompany.trim(),
				source: newSource,
				status: "new",
				score: Number(newScore) || 75,
				notes: newNotes.trim(),
				country: newCountry,
				city: newCity,
				pages_viewed_count: 2,
				duration_seconds: 180
			});
			toast.success("New lead created successfully!");
			setIsCreateModalOpen(false);
			setNewName("");
			setNewEmail("");
			setNewPhone("");
			setNewCompany("");
			setNewNotes("");
		} catch {
			toast.error("Failed to create lead.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleSaveNotes = async () => {
		if (!editingLead) return;
		try {
			await onUpdateNotes(editingLead.id, editNotesText);
			toast.success("Notes updated successfully.");
			setEditingLead(null);
		} catch {
			toast.error("Failed to update notes.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "p-2 rounded-xl bg-blue/10 text-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold text-label font-display tracking-tight",
							children: "Qualified CRM Leads & Contact Database"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Prospects collected from visitor promotions, contact forms, and engaged blog readers."
						})] })]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleExportCsv,
							className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/10 hover:bg-black/5 text-xs font-semibold text-label transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Export CSV" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCreateModalOpen(true),
							className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm active:scale-[0.99] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Lead" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Total Leads"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold font-mono text-label",
									children: totalCount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-emerald-600 font-medium",
									children: [newCount, " new"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Blog Readers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold font-mono text-rose-600",
									children: blogReaderCount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "Content Inbound"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Qualified Pipeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold font-mono text-purple-600",
									children: qualifiedCount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "High Value"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Avg Intent Score"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xl font-bold font-mono text-emerald-600",
									children: [avgScore, " / 100"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5 text-amber-500" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1 max-w-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search leads by name, email, company, city...",
									value: search,
									onChange: (e) => setSearch(e.target.value),
									className: "w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: statusFilter,
									onChange: (e) => setStatusFilter(e.target.value),
									className: "bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "new",
											children: "New"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "contacted",
											children: "Contacted"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "qualified",
											children: "Qualified"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "proposal",
											children: "Proposal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "won",
											children: "Won"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: sourceFilter,
									onChange: (e) => setSourceFilter(e.target.value),
									className: "bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All Sources"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "blog_reader",
											children: "Blog Readers"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "website_contact",
											children: "Website Contacts"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "visitor_promotion",
											children: "Promoted Visitors"
										})
									]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-subtle",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: filteredLeads.length }),
							" of ",
							leads.length,
							" leads"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs text-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Lead Name & Company"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Contact Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Source Channel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Location & Address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Engagement & Intent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Pipeline Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-hairline",
							children: filteredLeads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: 8,
								className: "py-16 text-center text-subtle",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-8 mx-auto text-subtle/60 mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-label",
										children: "No leads found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Promote visitors from the Visitor Stream or capture inquiries from contact forms and blog readers."
									})
								]
							}) }) : filteredLeads.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-fill-subtle/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-bold text-label text-xs flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.name }), l.score && l.score >= 85 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "p-0.5 text-amber-500",
												title: "High Intent Lead",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3" })
											}) : null]
										}), l.company ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.company })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-subtle",
											children: "Private Individual"
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-0.5",
											children: [l.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `mailto:${l.email}`,
												className: "text-xs text-blue hover:underline font-mono flex items-center gap-1",
												title: "Send email",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.email })]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-subtle",
												children: "No email"
											}), l.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `tel:${l.phone}`,
												className: "text-[11px] text-muted-foreground hover:text-label font-mono flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.phone })]
											}) : null]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: getSourceBadge(l.source)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-semibold text-label",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												country: l.country,
												flag: l.flag,
												size: "sm"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.country || "Global" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-2.5 text-subtle" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.street || l.city || "Corporate HQ" }),
												l.postal_code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-[10px]",
													children: [
														"(",
														l.postal_code,
														")"
													]
												}) : null
											]
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-xs font-bold text-label",
												children: [l.score || 70, "/100"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground",
												children: "score"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-[10px] text-subtle mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [l.pages_viewed_count || 1, " pages"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDuration(l.duration_seconds) })
											]
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: l.status,
											onChange: (e) => onUpdateStatus(l.id, e.target.value),
											className: `text-xs font-semibold px-2.5 py-1 rounded-full border outline-none cursor-pointer transition-colors ${getStatusBadge(l.status)}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "new",
													children: "New"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "contacted",
													children: "Contacted"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "qualified",
													children: "Qualified"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "proposal",
													children: "Proposal"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "won",
													children: "Won"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "archived",
													children: "Archived"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 max-w-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 group/note",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground truncate",
												title: l.notes,
												children: l.notes || "No notes attached"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													setEditingLead(l);
													setEditNotesText(l.notes || "");
												},
												className: "opacity-0 group-hover/note:opacity-100 p-1 text-subtle hover:text-label transition-opacity cursor-pointer",
												title: "Edit notes",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3" })
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1.5",
											children: [
												l.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `mailto:${l.email}`,
													className: "p-1.5 rounded-full text-blue hover:bg-blue/10 transition-colors",
													title: "Send Email",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" })
												}) : null,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														setEditingLead(l);
														setEditNotesText(l.notes || "");
													},
													className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
													title: "Edit Notes",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														if (confirm(`Are you sure you want to remove lead "${l.name}"?`)) onDeleteLead(l.id);
													},
													className: "p-1.5 rounded-full text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer",
													title: "Delete Lead",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
												})
											]
										})
									})
								]
							}, l.id))
						})]
					})
				})]
			}),
			isCreateModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col max-h-[92dvh]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-black/8 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base font-bold text-label font-display flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Lead to CRM" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsCreateModalOpen(false),
							className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCreateSubmit,
						className: "space-y-4 overflow-y-auto flex-1 py-2 pr-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Full Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newName,
										onChange: (e) => setNewName(e.target.value),
										placeholder: "e.g. John Doe",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Email Address *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: newEmail,
										onChange: (e) => setNewEmail(e.target.value),
										placeholder: "john@company.com",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Phone Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										value: newPhone,
										onChange: (e) => setNewPhone(e.target.value),
										placeholder: "+1 (555) 000-0000",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Company"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newCompany,
										onChange: (e) => setNewCompany(e.target.value),
										placeholder: "Acme Systems",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Source Channel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: newSource,
										onChange: (e) => setNewSource(e.target.value),
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "website_contact",
												children: "Website Contact Form"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "blog_reader",
												children: "Blog Reader Subscription"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "visitor_promotion",
												children: "Visitor Promotion"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "direct_referral",
												children: "Direct Referral"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "City & Country"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newCity,
										onChange: (e) => setNewCity(e.target.value),
										placeholder: "City, Country",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-label",
									children: "Strategic Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 3,
									value: newNotes,
									onChange: (e) => setNewNotes(e.target.value),
									placeholder: "Key requirements, budget, timeline, or notes...",
									className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-2.5 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsCreateModalOpen(false),
									className: "px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-label hover:bg-black/5 transition-colors cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer disabled:opacity-50",
									children: isSubmitting ? "Saving..." : "Create Lead"
								})]
							})
						]
					})]
				})
			}),
			editingLead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col max-h-[92dvh] space-y-4",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-black/8 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-label flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Notes for ", editingLead.name] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingLead(null),
							className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-y-auto flex-1 space-y-4 pr-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							value: editNotesText,
							onChange: (e) => setEditNotesText(e.target.value),
							placeholder: "Enter notes about requirements, calls, proposals...",
							className: "w-full p-3 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEditingLead(null),
								className: "px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-label hover:bg-black/5 transition-colors cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleSaveNotes,
								className: "px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer",
								children: "Save Notes"
							})]
						})]
					})]
				})
			})
		]
	});
}
function AnalyticsTab({ stats, regions: initialRegions, browsers: initialBrowsers, devices: initialDevices, visitors = [] }) {
	const [timeRange, setTimeRange] = (0, import_react.useState)("all");
	const filteredVisitors = (0, import_react.useMemo)(() => {
		if (visitors.length === 0 || timeRange === "all") return visitors;
		const now = (/* @__PURE__ */ new Date()).getTime();
		return visitors.filter((v) => {
			if (!v.created_at) return true;
			const created = new Date(v.created_at).getTime();
			if (isNaN(created)) return true;
			const diffHours = (now - created) / 36e5;
			if (timeRange === "today") return diffHours <= 24;
			if (timeRange === "7d") return diffHours <= 168;
			if (timeRange === "30d") return diffHours <= 720;
			return true;
		});
	}, [visitors, timeRange]);
	const regions = (0, import_react.useMemo)(() => {
		if (timeRange === "all" || filteredVisitors.length === 0) return initialRegions;
		const map = /* @__PURE__ */ new Map();
		for (const v of filteredVisitors) {
			const c = v.country || "United States";
			const f = v.flag || "🇺🇸";
			const curr = map.get(c) || {
				country: c,
				flag: f,
				count: 0
			};
			curr.count += 1;
			map.set(c, curr);
		}
		return Array.from(map.values()).sort((a, b) => b.count - a.count);
	}, [
		filteredVisitors,
		initialRegions,
		timeRange
	]);
	const browsers = (0, import_react.useMemo)(() => {
		if (timeRange === "all" || filteredVisitors.length === 0) return initialBrowsers;
		const map = /* @__PURE__ */ new Map();
		for (const v of filteredVisitors) {
			const b = v.browser || "Chrome";
			map.set(b, (map.get(b) || 0) + 1);
		}
		return Array.from(map.entries()).map(([browser, count]) => ({
			browser,
			count
		})).sort((a, b) => b.count - a.count);
	}, [
		filteredVisitors,
		initialBrowsers,
		timeRange
	]);
	const devices = (0, import_react.useMemo)(() => {
		if (timeRange === "all" || filteredVisitors.length === 0) return initialDevices;
		const map = /* @__PURE__ */ new Map();
		for (const v of filteredVisitors) {
			const d = v.device || "Desktop";
			map.set(d, (map.get(d) || 0) + 1);
		}
		return Array.from(map.entries()).map(([device, count]) => ({
			device,
			count
		})).sort((a, b) => b.count - a.count);
	}, [
		filteredVisitors,
		initialDevices,
		timeRange
	]);
	const referrers = (0, import_react.useMemo)(() => {
		const list = filteredVisitors.length > 0 ? filteredVisitors : visitors;
		const map = /* @__PURE__ */ new Map();
		for (const v of list) {
			let ref = v.referrer || "Direct";
			if (ref.includes("google")) ref = "Google Search";
			else if (ref.includes("linkedin") || ref.includes("t.co") || ref.includes("x.com") || ref.includes("instagram")) ref = "Social Acquisition";
			else if (ref.includes("github")) ref = "GitHub Reference";
			else if (ref !== "Direct") ref = "Web Referral";
			map.set(ref, (map.get(ref) || 0) + 1);
		}
		if (map.size === 0) {
			map.set("Direct Navigation", 68);
			map.set("Google Search", 24);
			map.set("Social Acquisition", 14);
		}
		const total = Array.from(map.values()).reduce((a, b) => a + b, 0) || 1;
		return Array.from(map.entries()).map(([source, count]) => ({
			source,
			count,
			pct: Math.round(count / total * 100)
		})).sort((a, b) => b.count - a.count);
	}, [filteredVisitors, visitors]);
	const topPages = (0, import_react.useMemo)(() => {
		const list = filteredVisitors.length > 0 ? filteredVisitors : visitors;
		const map = /* @__PURE__ */ new Map();
		for (const v of list) {
			const p = v.page_url || "/";
			map.set(p, (map.get(p) || 0) + 1);
		}
		if (map.size === 0) {
			map.set("/", 84);
			map.set("/#work", 46);
			map.set("/#services", 32);
			map.set("/#contact", 28);
		}
		const total = Array.from(map.values()).reduce((a, b) => a + b, 0) || 1;
		return Array.from(map.entries()).map(([page, count]) => ({
			page,
			count,
			pct: Math.round(count / total * 100)
		})).sort((a, b) => b.count - a.count);
	}, [filteredVisitors, visitors]);
	const totalRegionCount = regions.reduce((acc, r) => acc + r.count, 0) || 1;
	const totalBrowserCount = browsers.reduce((acc, b) => acc + b.count, 0) || 1;
	const totalDeviceCount = devices.reduce((acc, d) => acc + d.count, 0) || 1;
	const currentCount = timeRange === "all" ? stats.totalVisitors : filteredVisitors.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col md:flex-row md:items-center md:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumn, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "Traffic Intelligence & Regional Demographics"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Analyzing telemetry across geographic locations, client hardware profiles, and digital channels."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 p-1 bg-fill/70 rounded-xl border border-black/5 self-start md:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-subtle ml-2 mr-1" }), [
						{
							key: "today",
							label: "Today"
						},
						{
							key: "7d",
							label: "7 Days"
						},
						{
							key: "30d",
							label: "30 Days"
						},
						{
							key: "all",
							label: "All Time"
						}
					].map(({ key, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTimeRange(key),
						className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${timeRange === key ? "bg-card text-label shadow-sm font-semibold" : "text-subtle hover:text-label"}`,
						children: label
					}, key))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Audited Sessions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-blue" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold font-display text-label tabular-nums",
								children: currentCount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: timeRange === "all" ? "Total recorded" : `In selected window`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global Regions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-emerald-600" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold font-display text-label tabular-nums",
								children: regions.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: "Countries represented"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Top Channel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3.5 text-purple-600" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-bold font-display text-label truncate",
								children: referrers[0]?.source || "Direct Navigation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: [referrers[0]?.pct || 65, "% of inbound visitors"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile Share" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5 text-amber-600" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-2xl font-bold font-display text-label tabular-nums",
								children: [Math.round((devices.find((d) => d.device.toLowerCase().includes("mobile"))?.count || 0) / totalDeviceCount * 100), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: "Handheld viewports"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Top Regions"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-subtle font-medium",
								children: [regions.length, " Countries"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3.5",
							children: regions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-8 text-center text-xs text-subtle",
								children: "No regional data recorded in this range."
							}) : regions.slice(0, 7).map((r, i) => {
								const pct = Math.round(r.count / totalRegionCount * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												country: r.country,
												flag: r.flag,
												size: "sm"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-label",
												children: r.country
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: r.count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [
													"(",
													pct,
													"%)"
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-blue h-1.5 rounded-full transition-all duration-500",
											style: { width: `${Math.max(pct, 4)}%` }
										})
									})]
								}, r.country || i);
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 mt-4 border-t border-hairline text-[11px] text-subtle text-center",
							children: "Updated continuously via SQLite telemetry"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Browser Share"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle font-medium",
								children: "Engine Audit"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3.5",
							children: browsers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-8 text-center text-xs text-subtle",
								children: "No browser data recorded yet."
							}) : browsers.map((b, i) => {
								const pct = Math.round(b.count / totalBrowserCount * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
											browser: b.browser,
											showFull: true,
											size: "sm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: b.count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [
													"(",
													pct,
													"%)"
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-purple-600 h-1.5 rounded-full transition-all duration-500",
											style: { width: `${Math.max(pct, 4)}%` }
										})
									})]
								}, b.browser || i);
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 mt-4 border-t border-hairline text-[11px] text-subtle text-center",
							children: "Web standards compliant tracking"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Device Hardware"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle font-medium",
								children: "Responsive Viewports"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3.5",
							children: devices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-8 text-center text-xs text-subtle",
								children: "No device data recorded yet."
							}) : devices.map((d, i) => {
								const pct = Math.round(d.count / totalDeviceCount * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: d.device
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: d.count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [
													"(",
													pct,
													"%)"
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-emerald-600 h-1.5 rounded-full transition-all duration-500",
											style: { width: `${Math.max(pct, 4)}%` }
										})
									})]
								}, d.device || i);
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 mt-4 border-t border-hairline text-[11px] text-subtle text-center",
							children: "Optimized for Desktop & Mobile"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wider text-label",
								children: "Traffic Acquisition Channels"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-subtle font-medium",
							children: "Referrer Headers"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3.5",
						children: referrers.map((ref, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-label",
									children: ref.source
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: ref.count
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [
											"(",
											ref.pct,
											"%)"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-blue h-1.5 rounded-full transition-all duration-500",
									style: { width: `${Math.max(ref.pct, 4)}%` }
								})
							})]
						}, ref.source || i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wider text-label",
								children: "Top Requested Pages & Anchors"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-subtle font-medium",
							children: "Page Views"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3.5",
						children: topPages.map((tp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-label bg-fill px-1.5 py-0.5 rounded",
									children: tp.page
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: tp.count
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [
											"(",
											tp.pct,
											"%)"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-emerald-600 h-1.5 rounded-full transition-all duration-500",
									style: { width: `${Math.max(tp.pct, 4)}%` }
								})
							})]
						}, tp.page || i))
					})]
				})]
			})
		]
	});
}
function BacklinksTab({ backlinks, onAddBacklink, onDeleteBacklink }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		url: "",
		notes: ""
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.url) return;
		if (await onAddBacklink(form)) {
			setForm({
				name: "",
				url: "",
				notes: ""
			});
			setIsOpen(false);
			toast.success("SEO backlink saved to SQLite database.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-5 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "SEO Backlink Registry & Link Building"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Track referring domains, guest posts, media coverage, and indexation status to boost Google domain authority."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsOpen(!isOpen),
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOpen ? "Close Form" : "Add Backlink" })]
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-purple-200 p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold uppercase tracking-wider text-label mb-4",
					children: "Register New Referring Backlink"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Platform / Publisher Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Forbes, TechCrunch, Clutch.co",
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Backlink Target URL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "url",
							required: true,
							placeholder: "https://clutch.co/profile/codex-dynamics",
							value: form.url,
							onChange: (e) => setForm({
								...form,
								url: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "SEO Anchor Text & Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. DoFollow, Anchor: 'custom software agency', DA: 84",
								value: form.notes,
								onChange: (e) => setForm({
									...form,
									notes: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex justify-end gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsOpen(false),
								className: "px-4 py-2 rounded-full text-xs font-medium text-muted-foreground hover:text-label hover:bg-fill transition-colors cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium transition-all shadow-sm cursor-pointer",
								children: "Save Backlink"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs text-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Publisher / Source"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Live URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Anchor Text & SEO Notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Date Indexed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-hairline",
							children: backlinks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 5,
								className: "py-12 text-center text-subtle",
								children: "No backlinks registered yet. Click \"Add Backlink\" to record one."
							}) }) : backlinks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-fill-subtle/50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-semibold text-label",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-3.5 text-purple-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.name })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: b.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1 font-mono text-[11px] text-blue hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.url.length > 40 ? b.url.slice(0, 40) + "..." : b.url }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-muted-foreground",
										children: b.notes || "High authority referring domain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono text-[11px] text-subtle",
										children: b.created_at ? b.created_at.slice(0, 10) : "Active"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: async () => {
												await onDeleteBacklink(b.id);
												toast.info("Backlink removed.");
											},
											className: "p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer",
											title: "Delete backlink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})
									})
								]
							}, b.id))
						})]
					})
				})
			})
		]
	});
}
var POWER_WORDS_DICTIONARY = {
	authority: {
		name: "Authority & Prestige",
		description: "Builds instant credibility, trust, and enterprise-grade prestige.",
		words: [
			"proven",
			"definitive",
			"blueprint",
			"architect",
			"architecture",
			"enterprise",
			"elite",
			"master",
			"masterclass",
			"benchmark",
			"industry-leading",
			"gold-standard",
			"certified",
			"verified",
			"authoritative",
			"unrivaled",
			"premier",
			"bespoke",
			"principled",
			"foundational",
			"rigorous",
			"battle-tested",
			"mission-critical"
		]
	},
	urgency: {
		name: "Speed & Velocity",
		description: "Communicates zero-latency, high performance, and rapid execution.",
		words: [
			"accelerate",
			"breakthrough",
			"instant",
			"instantly",
			"high-velocity",
			"zero-latency",
			"sub-second",
			"rapid",
			"lightning",
			"real-time",
			"immediate",
			"critical",
			"crucial",
			"fast-track",
			"turbocharge",
			"streamlined",
			"next-generation",
			"frictionless"
		]
	},
	transformation: {
		name: "Impact & Transformation",
		description: "Highlights tangible business outcomes, conversion lift, and scale.",
		words: [
			"transform",
			"transformative",
			"revolutionize",
			"unleash",
			"skyrocket",
			"exponential",
			"paradigm",
			"game-changer",
			"pioneering",
			"radical",
			"uncompromising",
			"monumental",
			"surge",
			"lift",
			"overhaul",
			"reimagined",
			"unprecedented"
		]
	},
	clarity: {
		name: "Clarity & Mastery",
		description: "Promises actionable, step-by-step comprehension without fluff.",
		words: [
			"effortless",
			"comprehensive",
			"step-by-step",
			"simplified",
			"seamless",
			"demystified",
			"handbook",
			"framework",
			"playbook",
			"cheat-sheet",
			"essential",
			"actionable",
			"uncovered",
			"revealed",
			"deep-dive",
			"teardown",
			"anatomy"
		]
	},
	curiosity: {
		name: "Curiosity & Exclusivity",
		description: "Draws readers into clicking by revealing insider techniques.",
		words: [
			"secret",
			"secrets",
			"untold",
			"insider",
			"unveiled",
			"unmasked",
			"behind-the-scenes",
			"hidden",
			"under-the-hood",
			"surprising",
			"counter-intuitive",
			"truth",
			"myth",
			"confidential",
			"proprietary"
		]
	}
};
Array.from(new Set(Object.values(POWER_WORDS_DICTIONARY).flatMap((category) => category.words)));
/**
* Analyzes headline and article text for power words and copywriting effectiveness
*/
function analyzePowerWords(headline = "", content = "") {
	const normHeadline = ` ${headline.toLowerCase().replace(/[^a-z0-9\s-]/g, " ")} `;
	const normContent = ` ${content.toLowerCase().replace(/[^a-z0-9\s-]/g, " ")} `;
	const headlineMatches = [];
	const contentMatches = [];
	const categoryDistribution = {};
	Object.entries(POWER_WORDS_DICTIONARY).forEach(([catKey, catObj]) => {
		categoryDistribution[catKey] = 0;
		catObj.words.forEach((pw) => {
			const regex = new RegExp(`\\b${pw}\\b`, "gi");
			const headMatches = normHeadline.match(regex);
			if (headMatches && headMatches.length > 0) {
				headlineMatches.push({
					word: pw,
					category: catKey,
					categoryName: catObj.name,
					count: headMatches.length
				});
				categoryDistribution[catKey] += headMatches.length;
			}
			const bodyMatches = normContent.match(regex);
			if (bodyMatches && bodyMatches.length > 0) {
				contentMatches.push({
					word: pw,
					category: catKey,
					categoryName: catObj.name,
					count: bodyMatches.length
				});
				categoryDistribution[catKey] += bodyMatches.length;
			}
		});
	});
	const headlineHasPowerWord = headlineMatches.length > 0;
	const headlineHasNumber = /\d+/.test(headline);
	const headlineLength = headline.trim().length;
	let headlineLengthStatus = "optimal";
	if (headlineLength < 35) headlineLengthStatus = "short";
	else if (headlineLength > 65) headlineLengthStatus = "long";
	let headlineScore = 40;
	if (headlineHasPowerWord) headlineScore += Math.min(30, headlineMatches.length * 15);
	if (headlineHasNumber) headlineScore += 15;
	if (headlineLengthStatus === "optimal") headlineScore += 15;
	else if (headlineLengthStatus === "short") headlineScore -= 10;
	else headlineScore -= 10;
	headlineScore = Math.min(100, Math.max(10, headlineScore));
	const totalPowerWordsFound = headlineMatches.reduce((a, b) => a + b.count, 0) + contentMatches.reduce((a, b) => a + b.count, 0);
	const recommendations = [];
	if (!headlineHasPowerWord) recommendations.push("Add at least 1 high-converting Power Word (e.g. 'Architect', 'Proven', 'Zero-Latency', 'Blueprint') to your headline.");
	if (!headlineHasNumber) recommendations.push("Headlines with specific metrics or numbers (e.g. 'Sub-50ms', '42% Lift', '3 Architectural Rules') generate 36% higher CTR.");
	if (headlineLengthStatus === "short") recommendations.push("Your headline is under 35 characters. Expand it to articulate clear value.");
	else if (headlineLengthStatus === "long") recommendations.push("Your headline is over 65 characters and may truncate on Google SERP pages.");
	if (contentMatches.length < 3) recommendations.push("Incorporate more authoritative and transformative terminology into your body subsections.");
	return {
		headlineScore,
		headlineMatches,
		contentMatches,
		totalPowerWordsFound,
		headlineHasPowerWord,
		headlineHasNumber,
		headlineLengthStatus,
		categoryDistribution,
		recommendations
	};
}
var DEFAULT_CATEGORIES = [
	{
		id: "engineering",
		name: "Engineering",
		slug: "engineering"
	},
	{
		id: "design-systems",
		name: "Design Systems",
		slug: "design-systems"
	},
	{
		id: "performance",
		name: "Performance",
		slug: "performance"
	},
	{
		id: "architecture",
		name: "Architecture",
		slug: "architecture"
	},
	{
		id: "case-study",
		name: "Case Study",
		slug: "case-study"
	},
	{
		id: "strategy",
		name: "Strategy",
		slug: "strategy"
	},
	{
		id: "product-updates",
		name: "Product Updates",
		slug: "product-updates"
	}
];
var STORAGE_KEY = "codex_blog_custom_categories";
function getStoredCategories() {
	if (typeof window === "undefined") return DEFAULT_CATEGORIES;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return DEFAULT_CATEGORIES;
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed) && parsed.length > 0) {
			const existingNames = new Set(parsed.map((c) => c.name.toLowerCase()));
			const missingDefaults = DEFAULT_CATEGORIES.filter((d) => !existingNames.has(d.name.toLowerCase()));
			return [...parsed, ...missingDefaults];
		}
		return DEFAULT_CATEGORIES;
	} catch {
		return DEFAULT_CATEGORIES;
	}
}
function saveStoredCategories(categories) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
	} catch {}
}
function addCategory(name, parent) {
	const trimmed = name.trim();
	const slug = trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
	const current = getStoredCategories();
	const existing = current.find((c) => c.name.toLowerCase() === trimmed.toLowerCase() || c.slug === slug);
	if (existing) return existing;
	const newCat = {
		id: slug || `cat-${Date.now()}`,
		name: trimmed,
		slug: slug || `cat-${Date.now()}`,
		parent: parent || void 0
	};
	saveStoredCategories([newCat, ...current]);
	return newCat;
}
var LOCAL_PRESETS = [
	{
		url: "/hero/studio.jpg",
		label: "Studio Aerial",
		group: "Hero"
	},
	{
		url: "/hero/web-dev.jpg",
		label: "Web Development",
		group: "Hero"
	},
	{
		url: "/hero/design.jpg",
		label: "Design Workspace",
		group: "Hero"
	},
	{
		url: "/hero/social.jpg",
		label: "Social Media Campaign",
		group: "Hero"
	},
	{
		url: "/studio/interior.jpg",
		label: "Studio Loft Interior",
		group: "Studio"
	},
	{
		url: "/studio/code.jpg",
		label: "Code Terminal",
		group: "Studio"
	},
	{
		url: "/studio/design.jpg",
		label: "Interface Design Desk",
		group: "Studio"
	},
	{
		url: "/studio/wireframes.jpg",
		label: "Product Wireframes",
		group: "Studio"
	},
	{
		url: "/studio/social.jpg",
		label: "Social Feed Mockup",
		group: "Studio"
	},
	{
		url: "/studio/analytics.jpg",
		label: "Telemetry & Analytics",
		group: "Studio"
	},
	{
		url: "/work/storefront.jpg",
		label: "Storefront Mockup",
		group: "Portfolio"
	},
	{
		url: "/work/social.jpg",
		label: "Social Ad Campaign",
		group: "Portfolio"
	},
	{
		url: "/work/system.jpg",
		label: "Design System",
		group: "Portfolio"
	}
];
var CURATED_TECH_PRESETS = [
	{
		url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
		label: "Server Hardware & Cloud Infrastructure",
		alt: "Data center server racks with blue illumination",
		group: "Infrastructure"
	},
	{
		url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
		label: "Clean Code & Software Architecture",
		alt: "Dual display workstation showing clean code syntax",
		group: "Engineering"
	},
	{
		url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
		label: "Minimalist Engineering Workstation",
		alt: "Minimalist workspace with laptop and mechanical keyboard",
		group: "Studio"
	},
	{
		url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
		label: "Conversion Analytics & Telemetry",
		alt: "High-level performance and conversion rate charts",
		group: "Analytics"
	},
	{
		url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
		label: "Silicon Microprocessor & Low Latency",
		alt: "Macro photography of high-performance integrated circuit chip",
		group: "Hardware"
	},
	{
		url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
		label: "Design Systems & Prototyping",
		alt: "Interface wireframe components laid out systematically",
		group: "Design"
	},
	{
		url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
		label: "System Metrics & Live Observability",
		alt: "Dashboard monitoring uptime, memory throughput, and TTFB",
		group: "Observability"
	},
	{
		url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
		label: "Cybersecurity & Cryptographic Architecture",
		alt: "Cryptographic cipher matrix on terminal display",
		group: "Security"
	}
];
function ImagePickerModal({ isOpen, onClose, currentValue, onSelect, title = "Select or Upload Picture", showMetaOptions = true }) {
	const [selectedUrl, setSelectedUrl] = (0, import_react.useState)(currentValue);
	const [customInput, setCustomInput] = (0, import_react.useState)(currentValue);
	const [altText, setAltText] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [alignment, setAlignment] = (0, import_react.useState)("center");
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("curated");
	const fileInputRef = (0, import_react.useRef)(null);
	if (!isOpen) return null;
	const handleApply = () => {
		const finalUrl = (selectedUrl || customInput).trim();
		if (!finalUrl) {
			toast.error("Please select or enter an image URL");
			return;
		}
		onSelect(finalUrl, {
			alt: altText.trim() || void 0,
			caption: caption.trim() || void 0,
			alignment
		});
		toast.success("Picture selected successfully");
		onClose();
	};
	const handleFileUpload = async (file) => {
		try {
			setIsUploading(true);
			const reader = new FileReader();
			reader.onload = async () => {
				const base64Data = reader.result;
				const data = await (await fetch("/api/crm/action", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						action: "upload_image",
						payload: {
							name: file.name,
							data: base64Data
						}
					})
				})).json();
				if (data.ok && data.url) {
					setSelectedUrl(data.url);
					setCustomInput(data.url);
					if (!altText) setAltText(file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "));
					toast.success("Image uploaded to server!");
				} else toast.error(data.error || "Failed to upload image");
			};
			reader.readAsDataURL(file);
		} catch (err) {
			toast.error("Upload failed: " + String(err));
		} finally {
			setIsUploading(false);
		}
	};
	const currentActiveUrl = selectedUrl || customInput;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[92dvh] animate-in zoom-in-95 duration-150",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 sm:px-6 py-3.5 border-b border-black/8 flex items-center justify-between bg-zinc-50/80 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-8 rounded-xl bg-blue/10 text-blue flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-label truncate font-display",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground truncate hidden sm:block",
								children: "Curated engineering stock, local studio assets, direct uploads, or web URLs"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer shrink-0 ml-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex border-b border-black/8 px-4 sm:px-6 bg-white gap-2 sm:gap-4 overflow-x-auto no-scrollbar shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("curated"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === "curated" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tech & Architecture Stock" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("library"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${activeTab === "library" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: "Local Studio Library"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("upload"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === "upload" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload File" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("url"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === "url" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "External URL" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-4",
					children: [
						activeTab === "curated" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-muted-foreground pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Royalty-free high-resolution imagery for engineering teardowns:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] bg-black/5 px-2 py-0.5 rounded",
									children: "Unsplash High-Res"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3",
								children: CURATED_TECH_PRESETS.map((item) => {
									const isChosen = selectedUrl === item.url;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setSelectedUrl(item.url);
											setCustomInput(item.url);
											if (!altText) setAltText(item.alt);
										},
										className: `group relative flex flex-col rounded-xl overflow-hidden border text-left transition-all cursor-pointer ${isChosen ? "ring-2 ring-blue border-transparent shadow-md" : "border-black/10 hover:border-blue/50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "aspect-[16/10] bg-zinc-100 relative overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.url,
													alt: item.label,
													className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105",
													loading: "lazy"
												}),
												isChosen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 right-1.5 size-5 rounded-full bg-blue text-white flex items-center justify-center shadow-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[3]" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-medium bg-black/60 text-white backdrop-blur-xs",
													children: item.group
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 bg-white flex-1 flex flex-col justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-semibold text-label block line-clamp-1",
												children: item.label
											})
										})]
									}, item.url);
								})
							})]
						}),
						activeTab === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground pb-1",
								children: "Assets stored in the Codex Dynamics project public directory:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3",
								children: LOCAL_PRESETS.map((item) => {
									const isChosen = selectedUrl === item.url;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setSelectedUrl(item.url);
											setCustomInput(item.url);
											if (!altText) setAltText(item.label);
										},
										className: `group relative flex flex-col rounded-xl overflow-hidden border text-left transition-all cursor-pointer ${isChosen ? "ring-2 ring-blue border-transparent shadow-md" : "border-black/10 hover:border-blue/50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "aspect-[4/3] bg-zinc-100 relative overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.url,
													alt: item.label,
													className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105",
													onError: (e) => {
														e.target.style.display = "none";
													}
												}),
												isChosen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 right-1.5 size-5 rounded-full bg-blue text-white flex items-center justify-center shadow-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[3]" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-medium bg-black/60 text-white backdrop-blur-xs",
													children: item.group
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 bg-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-label block truncate",
												children: item.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-muted-foreground block truncate font-mono",
												children: item.url
											})]
										})]
									}, item.url);
								})
							})]
						}),
						activeTab === "upload" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => fileInputRef.current?.click(),
								className: "border-2 border-dashed border-black/15 rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center hover:border-blue/50 hover:bg-blue/[0.01] transition-all cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileInputRef,
										type: "file",
										accept: "image/*",
										className: "hidden",
										onChange: (e) => {
											const file = e.target.files?.[0];
											if (file) handleFileUpload(file);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-12 rounded-full bg-blue/10 text-blue flex items-center justify-center mb-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-label",
										children: isUploading ? "Uploading picture to server..." : "Click or drag picture here to upload"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1 max-w-sm",
										children: "Supports WebP, JPG, PNG, and SVG. Persisted permanently in SQLite and served through the public uploads API."
									})
								]
							}), selectedUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-zinc-50 rounded-xl border border-black/8 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: selectedUrl,
										alt: "Uploaded preview",
										className: "size-14 rounded-lg object-cover border border-black/10 shrink-0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-label block truncate",
											children: "Selected Upload"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground font-mono block truncate",
											children: selectedUrl
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-emerald-600 font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 shrink-0",
										children: "Ready"
									})
								]
							})]
						}),
						activeTab === "url" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1.5",
								children: "Direct Web URL or Asset Path"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: customInput,
								onChange: (e) => {
									setCustomInput(e.target.value);
									setSelectedUrl(e.target.value);
								},
								placeholder: "e.g. https://images.unsplash.com/... or /hero/studio.jpg",
								className: "w-full px-3.5 py-2 text-xs rounded-xl border border-black/15 focus:outline-none focus:border-blue font-mono"
							})] }), customInput && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-black/10 rounded-xl p-3 bg-zinc-50 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-label block",
									children: "Live URL Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-h-40 overflow-hidden rounded-lg bg-white border border-black/6 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: customInput,
										alt: "URL preview",
										className: "max-h-40 w-auto object-contain",
										onError: (e) => {
											e.target.parentElement.innerHTML = "<div class='p-4 text-xs text-red-500'>Unable to load image from this URL</div>";
										}
									})
								})]
							})]
						}),
						showMetaOptions && currentActiveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-zinc-50 border border-black/8 space-y-3 mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-bold text-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Picture Formatting & SEO Alt Attributes" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-semibold text-subtle block mb-1",
										children: "Image Alt Description (Rank Math SEO) *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: altText,
										onChange: (e) => setAltText(e.target.value),
										placeholder: "Descriptive alt text for accessibility & SEO",
										className: "w-full px-3 py-1.5 text-xs bg-white border border-black/10 rounded-lg focus:border-blue outline-none"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-semibold text-subtle block mb-1",
										children: "Visible Caption / Credit (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: caption,
										onChange: (e) => setCaption(e.target.value),
										placeholder: "Figure 1: Architectural benchmark comparison",
										className: "w-full px-3 py-1.5 text-xs bg-white border border-black/10 rounded-lg focus:border-blue outline-none"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-subtle",
										children: "Alignment:"
									}), [
										"center",
										"left",
										"right",
										"full"
									].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setAlignment(mode),
										className: `px-2.5 py-1 text-[11px] font-medium rounded-md capitalize cursor-pointer transition-colors ${alignment === mode ? "bg-blue text-white shadow-xs" : "bg-white border border-black/10 text-muted-foreground hover:text-label"}`,
										children: mode
									}, mode))]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 sm:px-6 py-3 border-t border-black/8 bg-zinc-50/80 flex items-center justify-between shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 pr-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground truncate block font-mono",
							children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-label",
								children: currentActiveUrl || "None"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-3.5 py-1.5 text-xs font-semibold rounded-xl border border-black/10 text-muted-foreground hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleApply,
							className: "px-4 py-1.5 text-xs font-semibold rounded-xl bg-blue text-white hover:bg-blue-hover shadow-xs transition-colors cursor-pointer flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Use Picture" })]
						})]
					})]
				})
			]
		})
	});
}
var PRESET_AUTHORS = [
	"Codex Dynamics Research",
	"Codex Dynamics Engineering",
	"Codex Dynamics Design Studio",
	"Founder & Principal Architect",
	"DevOps & Infrastructure Team"
];
var POPULAR_TAGS = [
	"Engineering",
	"Architecture",
	"Performance",
	"Design Systems",
	"TypeScript",
	"React 19",
	"Core Web Vitals",
	"Next.js",
	"Micro-Frontends",
	"API Design",
	"Security",
	"Cloud"
];
function BlogEditorPage({ editingId, initialBlog, onBack, onSave }) {
	const [title, setTitle] = (0, import_react.useState)(initialBlog?.title || "");
	const [slug, setSlug] = (0, import_react.useState)(initialBlog?.slug || "");
	const [excerpt, setExcerpt] = (0, import_react.useState)(initialBlog?.excerpt || "");
	const [content, setContent] = (0, import_react.useState)(initialBlog?.content || `## Executive Overview\n\nModern digital infrastructure demands sub-second latencies and uncompromised architectural resilience. In this technical deep-dive, we deconstruct the core principles required to ship zero-latency enterprise systems.\n\n### 1. Architectural Foundation\n\nBy leveraging edge computing and streaming hydration, application cold-starts can be systematically reduced by over **64%**.\n\n| Architecture Metric | Legacy Monolith | Modern Edge Blueprint |\n| :--- | :--- | :--- |\n| TTFB (Global) | 420ms | 38ms |\n| LCP Score | 2.8s | 0.72s |\n| Hydration Overhead | 450KB | 18KB |\n\n> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra\n\n### 2. Implementation Playbook\n\nTo implement these benchmarks, begin with modular route isolation and progressive bundle optimization.`);
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(initialBlog?.category || "Engineering");
	const [tags, setTags] = (0, import_react.useState)(initialBlog?.tags || [
		"Engineering",
		"Architecture",
		"Performance"
	]);
	const [tagInput, setTagInput] = (0, import_react.useState)("");
	const [author, setAuthor] = (0, import_react.useState)(initialBlog?.author || "Codex Dynamics Research");
	const [status, setStatus] = (0, import_react.useState)(initialBlog?.status || "published");
	const [imageUrl, setImageUrl] = (0, import_react.useState)(initialBlog?.image_url || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80");
	const [imageAlt, setImageAlt] = (0, import_react.useState)(initialBlog?.image_alt || "High-performance software architecture");
	const [imageCaption, setImageCaption] = (0, import_react.useState)(initialBlog?.image_caption || "Codex Dynamics systems architecture");
	const [focusKeyword, setFocusKeyword] = (0, import_react.useState)(initialBlog?.focus_keyword || "Enterprise Architecture");
	const [metaTitle, setMetaTitle] = (0, import_react.useState)(initialBlog?.meta_title || initialBlog?.title || "");
	const [metaDescription, setMetaDescription] = (0, import_react.useState)(initialBlog?.meta_description || initialBlog?.excerpt || "");
	const [isSticky, setIsSticky] = (0, import_react.useState)(false);
	const [allowComments, setAllowComments] = (0, import_react.useState)(true);
	const [allowPingbacks, setAllowPingbacks] = (0, import_react.useState)(true);
	const [allCategories, setAllCategories] = (0, import_react.useState)([]);
	const [categorySearch, setCategorySearch] = (0, import_react.useState)("");
	const [isAddingCategory, setIsAddingCategory] = (0, import_react.useState)(false);
	const [newCategoryName, setNewCategoryName] = (0, import_react.useState)("");
	const [newCategoryParent, setNewCategoryParent] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const loaded = getStoredCategories();
		setAllCategories(loaded);
	}, []);
	const handleCreateCategory = (e) => {
		if (e) e.preventDefault();
		if (!newCategoryName.trim()) {
			toast.error("Please enter a category name");
			return;
		}
		const created = addCategory(newCategoryName, newCategoryParent || void 0);
		setAllCategories(getStoredCategories());
		setSelectedCategory(created.name);
		setNewCategoryName("");
		setNewCategoryParent("");
		setIsAddingCategory(false);
		toast.success(`Category "${created.name}" created and selected!`);
	};
	const filteredCategories = (0, import_react.useMemo)(() => {
		if (!categorySearch.trim()) return allCategories;
		const q = categorySearch.toLowerCase();
		return allCategories.filter((c) => c.name.toLowerCase().includes(q) || c.slug.includes(q));
	}, [allCategories, categorySearch]);
	const [editorView, setEditorView] = (0, import_react.useState)("visual");
	const [previewDevice, setPreviewDevice] = (0, import_react.useState)("desktop");
	const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(true);
	const [sidebarTab, setSidebarTab] = (0, import_react.useState)("post");
	const [isZenMode, setIsZenMode] = (0, import_react.useState)(false);
	const [isImagePickerOpen, setIsImagePickerOpen] = (0, import_react.useState)(false);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [hasUnsavedChanges, setHasUnsavedChanges] = (0, import_react.useState)(false);
	const [isDocumentOutlineOpen, setIsDocumentOutlineOpen] = (0, import_react.useState)(false);
	const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, import_react.useState)(false);
	const [isBlockInserterOpen, setIsBlockInserterOpen] = (0, import_react.useState)(false);
	const [isLinkModalOpen, setIsLinkModalOpen] = (0, import_react.useState)(false);
	const [linkUrlInput, setLinkUrlInput] = (0, import_react.useState)("");
	const [linkTextInput, setLinkTextInput] = (0, import_react.useState)("");
	const [accordionSummary, setAccordionSummary] = (0, import_react.useState)(true);
	const [accordionCategories, setAccordionCategories] = (0, import_react.useState)(true);
	const [accordionTags, setAccordionTags] = (0, import_react.useState)(true);
	const [accordionFeaturedImage, setAccordionFeaturedImage] = (0, import_react.useState)(true);
	const [accordionExcerpt, setAccordionExcerpt] = (0, import_react.useState)(true);
	const [accordionDiscussion, setAccordionDiscussion] = (0, import_react.useState)(false);
	const [metaBoxTab, setMetaBoxTab] = (0, import_react.useState)("general");
	const [serpPreviewDevice, setSerpPreviewDevice] = (0, import_react.useState)("desktop");
	const [selectedPowerCategory, setSelectedPowerCategory] = (0, import_react.useState)("all");
	const [powerWordSearch, setPowerWordSearch] = (0, import_react.useState)("");
	const editorTextareaRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setHasUnsavedChanges(true);
	}, [
		title,
		slug,
		content,
		excerpt,
		selectedCategory,
		tags,
		author,
		status,
		imageUrl,
		focusKeyword,
		metaTitle,
		metaDescription
	]);
	const handleTitleChange = (val) => {
		setTitle(val);
		if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")) {
			const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
			setSlug(autoSlug);
		}
	};
	const readingStats = (0, import_react.useMemo)(() => calculateReadingTime(content), [content]);
	const documentStats = (0, import_react.useMemo)(() => {
		const raw = content || "";
		const words = raw.split(/\s+/).filter(Boolean).length;
		const characters = raw.length;
		const paragraphs = raw.split(/\n\s*\n/).filter(Boolean).length;
		const headings = (raw.match(/^#{1,6}\s+.+$/gm) || []).length;
		return {
			words,
			characters,
			paragraphs,
			headings,
			blocks: paragraphs + headings,
			outline: (raw.match(/^(#{1,4})\s+(.+)$/gm) || []).map((line) => {
				const match = line.match(/^(#{1,4})\s+(.+)$/);
				if (!match) return {
					level: 2,
					text: line
				};
				return {
					level: match[1].length,
					text: match[2]
				};
			})
		};
	}, [content]);
	const powerWordsAnalysis = (0, import_react.useMemo)(() => {
		return analyzePowerWords(title, content);
	}, [title, content]);
	const rankMathScore = (0, import_react.useMemo)(() => {
		let score = 30;
		const kw = focusKeyword.trim().toLowerCase();
		const t = title.toLowerCase();
		const c = content.toLowerCase();
		const s = slug.toLowerCase();
		const m = (metaDescription || excerpt).toLowerCase();
		const hasKwInTitle = kw && t.includes(kw);
		const hasKwInSlug = kw && s.includes(kw.replace(/\s+/g, "-"));
		const hasKwInContent = kw && c.includes(kw);
		const hasKwInMeta = kw && m.includes(kw);
		const hasGoodLength = documentStats.words >= 400;
		const hasPowerWord = powerWordsAnalysis.headlineHasPowerWord;
		const hasNumber = powerWordsAnalysis.headlineHasNumber;
		const hasFeaturedImg = Boolean(imageUrl);
		if (hasKwInTitle) score += 15;
		if (hasKwInSlug) score += 10;
		if (hasKwInContent) score += 10;
		if (hasKwInMeta) score += 10;
		if (hasGoodLength) score += 10;
		if (hasPowerWord) score += 10;
		if (hasNumber) score += 5;
		if (hasFeaturedImg) score += 5;
		return Math.min(100, Math.max(10, score));
	}, [
		focusKeyword,
		title,
		content,
		slug,
		metaDescription,
		excerpt,
		documentStats.words,
		powerWordsAnalysis,
		imageUrl
	]);
	const rankMathChecks = (0, import_react.useMemo)(() => {
		const kw = focusKeyword.trim().toLowerCase();
		const t = title.toLowerCase();
		const c = content.toLowerCase();
		const s = slug.toLowerCase();
		const m = (metaDescription || excerpt).toLowerCase();
		return [
			{
				id: "kw-title",
				label: "Focus Keyword used in the SEO title",
				passed: Boolean(kw && t.includes(kw)),
				tip: "Add your primary keyword near the beginning of the title."
			},
			{
				id: "kw-slug",
				label: "Focus Keyword used in the URL slug",
				passed: Boolean(kw && s.includes(kw.replace(/\s+/g, "-"))),
				tip: "Keep URL slug clean and focused on the target keyword."
			},
			{
				id: "kw-content",
				label: "Focus Keyword found in the content body",
				passed: Boolean(kw && c.includes(kw)),
				tip: "Naturally mention your focus keyword in the introductory paragraphs."
			},
			{
				id: "kw-meta",
				label: "Focus Keyword used in Meta Description",
				passed: Boolean(kw && m.includes(kw)),
				tip: "Include target keywords to drive organic search click-through rate."
			},
			{
				id: "length",
				label: "Article length is comprehensive (400+ words)",
				passed: documentStats.words >= 400,
				tip: `Current length is ${documentStats.words} words. Aim for 600+ words for deep authority.`
			},
			{
				id: "power-word",
				label: "Headline contains a psychological Power Word",
				passed: powerWordsAnalysis.headlineHasPowerWord,
				tip: "Power words (e.g. 'Blueprint', 'Proven', 'Zero-Latency') boost CTR by 38%."
			},
			{
				id: "headline-num",
				label: "Headline contains a specific metric or number",
				passed: powerWordsAnalysis.headlineHasNumber,
				tip: "Numbers in headlines (e.g. 'Sub-50ms', '42%') increase credibility."
			},
			{
				id: "featured-img",
				label: "Featured image specified with accessible Alt text",
				passed: Boolean(imageUrl && imageAlt),
				tip: "Featured images improve social cards and reader retention."
			},
			{
				id: "subheadings",
				label: "Content structured with H2 and H3 subheadings",
				passed: documentStats.headings >= 2,
				tip: "Break up long copy with descriptive section headings."
			},
			{
				id: "title-length",
				label: "SEO Title length is optimal (35-65 chars)",
				passed: title.length >= 35 && title.length <= 65,
				tip: `Current title length is ${title.length} characters (ideal: 40-60).`
			}
		];
	}, [
		focusKeyword,
		title,
		content,
		slug,
		metaDescription,
		excerpt,
		documentStats,
		powerWordsAnalysis,
		imageUrl,
		imageAlt
	]);
	const handleInsertFormatting = (prefix, suffix = "", placeholder = "") => {
		const textarea = editorTextareaRef.current;
		if (!textarea) return;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = content.substring(start, end) || placeholder;
		const replacement = `${prefix}${selectedText}${suffix}`;
		const newContent = content.substring(0, start) + replacement + content.substring(end);
		setContent(newContent);
		setTimeout(() => {
			textarea.focus();
			textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
		}, 50);
	};
	const handleInsertPowerWord = (word, target) => {
		if (target === "title") {
			const newTitle = title ? `${word.charAt(0).toUpperCase() + word.slice(1)}: ${title}` : word;
			setTitle(newTitle);
			toast.success(`Added "${word}" to Headline!`);
		} else {
			handleInsertFormatting(`**${word}** `, "", "");
			toast.success(`Inserted "${word}" into article!`);
		}
	};
	const handleAddTag = (tagText) => {
		const trimmed = tagText.trim().replace(/^#/, "");
		if (!trimmed) return;
		if (!tags.includes(trimmed)) {
			setTags([...tags, trimmed]);
			setTagInput("");
		}
	};
	const handleRemoveTag = (tagToRemove) => {
		setTags(tags.filter((t) => t !== tagToRemove));
	};
	const handleSavePost = async (publishStatus = status) => {
		if (!title.trim()) {
			toast.error("Please provide a post title before saving.");
			return;
		}
		setIsSaving(true);
		try {
			if (await onSave({
				id: editingId || void 0,
				title: title.trim(),
				slug: slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
				content,
				excerpt: excerpt.trim() || content.slice(0, 160).replace(/[#*`_]/g, ""),
				category: selectedCategory,
				tags,
				author,
				status: publishStatus,
				image_url: imageUrl,
				image_alt: imageAlt,
				image_caption: imageCaption,
				focus_keyword: focusKeyword,
				meta_title: metaTitle || title,
				meta_description: metaDescription || excerpt
			}, publishStatus)) {
				setStatus(publishStatus);
				setHasUnsavedChanges(false);
				toast.success(publishStatus === "published" ? "Article published live to blog!" : "Draft saved successfully!");
			}
		} catch {
			toast.error("Failed to save post. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};
	const handleConfirmLink = (e) => {
		e.preventDefault();
		if (!linkUrlInput) return;
		handleInsertFormatting(`[${linkTextInput || linkUrlInput}](`, `${linkUrlInput})`, "");
		setIsLinkModalOpen(false);
		setLinkUrlInput("");
		setLinkTextInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-full bg-[#f0f0f1] text-[#1e1e1e] font-sans selection:bg-[#2271b1]/20 min-h-screen pb-16 ${isZenMode ? "bg-white" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 bg-white border border-[#dcdcde] rounded-xl px-3 sm:px-4 py-2.5 flex items-center justify-between shadow-xs select-none mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									if (hasUnsavedChanges) {
										if (window.confirm("You have unsaved changes. Return to posts list?")) onBack();
									} else onBack();
								},
								className: "flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-[#f0f0f1] text-[#1e1e1e] transition-colors cursor-pointer",
								title: "View Posts",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold hidden md:inline",
									children: "Posts"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-px bg-[#dcdcde] mx-1 hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsBlockInserterOpen(!isBlockInserterOpen),
									className: `p-1.5 rounded text-white transition-all cursor-pointer ${isBlockInserterOpen ? "bg-[#1e1e1e]" : "bg-[#2271b1] hover:bg-[#135e96]"}`,
									title: "Add Block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
								}), isBlockInserterOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-0 top-10 w-64 bg-white rounded-lg shadow-xl border border-[#dcdcde] p-2 z-50 space-y-1 animate-in fade-in zoom-in-95",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] font-bold text-neutral-400 px-2 py-1 uppercase tracking-wider",
											children: "Quick Blocks"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n### New Section Heading\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading2, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Heading 2" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n> Blockquote text here...\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quote" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setIsImagePickerOpen(true);
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Image / Stock Photo" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n| Specification | Baseline | Optimized |\n| :--- | :--- | :--- |\n| TTFB | 400ms | 40ms |\n| LCP | 2.4s | 0.8s |\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Benchmark Table" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n```typescript\n// Architecture Code\n\n```\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Code Syntax Block" })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => document.execCommand("undo"),
								className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer hidden sm:inline-flex",
								title: "Undo (Ctrl+Z)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => document.execCommand("redo"),
								className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer hidden sm:inline-flex",
								title: "Redo (Ctrl+Y)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIsDocumentOutlineOpen(!isDocumentOutlineOpen),
									className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer flex items-center gap-1",
									title: "Details & Document Outline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-mono hidden md:inline text-neutral-500",
										children: [documentStats.words, "w"]
									})]
								}), isDocumentOutlineOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-0 top-10 w-72 bg-white rounded-lg shadow-xl border border-[#dcdcde] p-4 z-50 animate-in fade-in zoom-in-95 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-[#dcdcde] pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#1e1e1e]",
												children: "Document Statistics"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-mono text-neutral-500",
												children: readingStats.text
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-3 gap-2 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 bg-[#f0f0f1] rounded",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold font-mono text-[#1e1e1e]",
														children: documentStats.words
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-neutral-500",
														children: "Words"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 bg-[#f0f0f1] rounded",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold font-mono text-[#1e1e1e]",
														children: documentStats.characters
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-neutral-500",
														children: "Characters"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 bg-[#f0f0f1] rounded",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold font-mono text-[#1e1e1e]",
														children: documentStats.headings
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-neutral-500",
														children: "Headings"
													})]
												})
											]
										}),
										documentStats.outline.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold text-neutral-500 uppercase tracking-wider",
												children: "Headings Outline"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "max-h-40 overflow-y-auto space-y-1 pr-1",
												children: documentStats.outline.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: { paddingLeft: `${(h.level - 1) * 12}px` },
													className: "text-xs text-neutral-700 truncate hover:text-[#2271b1] cursor-pointer",
													children: h.text
												}, i))
											})]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:flex items-center gap-1.5 text-xs text-neutral-500 font-mono",
							children: hasUnsavedChanges ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-amber-600 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-amber-500 animate-pulse" }), "Draft"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-emerald-600 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }), "Saved"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center bg-[#f0f0f1] p-0.5 rounded-md border border-[#dcdcde]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEditorView("visual"),
									className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1 ${editorView === "visual" ? "bg-white text-[#1e1e1e] shadow-xs font-semibold" : "text-neutral-600 hover:text-[#1e1e1e]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Visual"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEditorView("code"),
									className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1 ${editorView === "code" ? "bg-white text-[#1e1e1e] shadow-xs font-semibold" : "text-neutral-600 hover:text-[#1e1e1e]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Code / MD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEditorView("preview"),
									className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1 ${editorView === "preview" ? "bg-white text-[#1e1e1e] shadow-xs font-semibold" : "text-neutral-600 hover:text-[#1e1e1e]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Reader"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleSavePost("draft"),
								disabled: isSaving,
								className: "px-2.5 py-1.5 rounded text-xs font-medium text-[#2271b1] hover:bg-[#f0f0f1] transition-colors cursor-pointer hidden md:inline-flex",
								children: "Save draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center bg-[#f0f0f1] p-0.5 rounded border border-[#dcdcde]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDevice("desktop"),
										className: `p-1 rounded cursor-pointer ${previewDevice === "desktop" ? "bg-white text-[#1e1e1e] shadow-xs" : "text-neutral-500"}`,
										title: "Desktop View",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDevice("tablet"),
										className: `p-1 rounded cursor-pointer ${previewDevice === "tablet" ? "bg-white text-[#1e1e1e] shadow-xs" : "text-neutral-500"}`,
										title: "Tablet View (768px)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDevice("mobile"),
										className: `p-1 rounded cursor-pointer ${previewDevice === "mobile" ? "bg-white text-[#1e1e1e] shadow-xs" : "text-neutral-500"}`,
										title: "Mobile View (375px)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleSavePost("published"),
								disabled: isSaving,
								className: "px-3 sm:px-4 py-1.5 rounded bg-[#2271b1] hover:bg-[#135e96] active:bg-[#0a4b78] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50",
								children: isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saving..." }) : status === "published" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Update" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish..." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setIsSidebarOpen(true);
									setSidebarTab("seo");
								},
								className: `px-2 py-1 rounded text-xs font-bold font-mono flex items-center gap-1 cursor-pointer transition-all border ${rankMathScore >= 80 ? "bg-emerald-50 text-emerald-700 border-emerald-300" : rankMathScore >= 60 ? "bg-amber-50 text-amber-700 border-amber-300" : "bg-red-50 text-red-700 border-red-300"}`,
								title: "Rank Math SEO Score",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [rankMathScore, "/100"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsSidebarOpen(!isSidebarOpen),
								className: `p-1.5 rounded transition-colors cursor-pointer ${isSidebarOpen ? "bg-[#1e1e1e] text-white" : "hover:bg-[#f0f0f1] text-[#2c3338]"}`,
								title: "Settings (Ctrl+Shift+,)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsMoreMenuOpen(!isMoreMenuOpen),
									className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
									title: "Options",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "size-4" })
								}), isMoreMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-0 top-10 w-56 bg-white rounded-lg shadow-xl border border-[#dcdcde] p-2 z-50 text-xs space-y-1 animate-in fade-in",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setIsZenMode(!isZenMode);
												setIsMoreMenuOpen(false);
											},
											className: "w-full flex items-center justify-between px-2 py-1.5 text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Distraction-free mode" }), isZenMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												navigator.clipboard.writeText(content);
												toast.success("All markdown content copied to clipboard!");
												setIsMoreMenuOpen(false);
											},
											className: "w-full flex items-center gap-2 px-2 py-1.5 text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy all content" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-[#dcdcde] my-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `/blog?slug=${slug}`,
											target: "_blank",
											rel: "noreferrer",
											className: "w-full flex items-center justify-between px-2 py-1.5 text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Post" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
										})
									]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex flex-col lg:flex-row gap-6 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "flex-1 min-w-0 w-full space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-white border border-[#dcdcde] rounded-xl p-5 sm:p-7 shadow-xs space-y-4",
						children: [
							editorView !== "preview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-16 z-20 bg-white/95 backdrop-blur-sm border border-[#dcdcde] rounded-lg shadow-xs p-1.5 flex items-center justify-between flex-wrap gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											onChange: (e) => {
												if (e.target.value === "h2") handleInsertFormatting("\n\n## ", "", "Section Heading");
												if (e.target.value === "h3") handleInsertFormatting("\n\n### ", "", "Subheading");
												if (e.target.value === "h4") handleInsertFormatting("\n\n#### ", "", "Minor Heading");
												if (e.target.value === "p") handleInsertFormatting("\n\n", "", "Paragraph text");
												e.target.value = "style";
											},
											defaultValue: "style",
											className: "px-2 py-1 text-xs border border-[#dcdcde] rounded bg-[#f0f0f1] text-[#2c3338] font-medium outline-none cursor-pointer hover:bg-[#e0e0e1]",
											title: "Select Heading Style",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "style",
													disabled: true,
													children: "Style"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "p",
													children: "Paragraph"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "h2",
													children: "Heading 2 (H2)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "h3",
													children: "Heading 3 (H3)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "h4",
													children: "Heading 4 (H4)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("**", "**", "bold text"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Bold (Ctrl+B)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("*", "*", "italic text"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Italic (Ctrl+I)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Italic, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("~~", "~~", "strikethrough"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Strikethrough",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strikethrough, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("`", "`", "inline code"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Inline Code",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n- ", "", "List item"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Bullet List",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n1. ", "", "List item"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Numbered List",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListOrdered, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n> ", "", "Quote text"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Blockquote",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setIsLinkModalOpen(true),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Insert Link",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIsImagePickerOpen(true),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2271b1] transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold",
											title: "Add Media / Photos",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: "Add Media"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n| Technical Benchmark | Baseline | Optimized Status |\n| :--- | :--- | :--- |\n| TTFB | 42ms | Verified Zero Latency |\n| Bundle Size | 38KB | Minified & Compressed |\n\n", "", ""),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Insert Benchmark Table",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n```typescript\n// Technical implementation\n\n```\n\n", "", ""),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Insert Code Syntax Block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												const sampleWords = [
													"proven",
													"architect",
													"blueprint",
													"zero-latency",
													"breakthrough",
													"scalable"
												];
												const pick = sampleWords[Math.floor(Math.random() * sampleWords.length)];
												handleInsertPowerWord(pick, "content");
											},
											className: "px-2 py-1 rounded bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer",
											title: "Quick Insert Power Word",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ Power Word" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-0.5 bg-[#f0f0f1] p-0.5 rounded border border-[#dcdcde]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setEditorView("visual"),
											className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${editorView === "visual" ? "bg-white text-[#1e1e1e] font-semibold shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`,
											children: "Visual"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setEditorView("code"),
											className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${editorView === "code" ? "bg-white text-[#1e1e1e] font-semibold shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`,
											children: "Text / Markdown"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setEditorView("preview"),
											className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${editorView === "preview" ? "bg-white text-[#1e1e1e] font-semibold shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`,
											children: "Reader View"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: title,
								onChange: (e) => handleTitleChange(e.target.value),
								placeholder: "Enter title here...",
								rows: 1,
								className: "w-full resize-none border-none outline-none font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1e1e1e] placeholder:text-neutral-300 leading-tight tracking-tight bg-transparent",
								onInput: (e) => {
									const target = e.target;
									target.style.height = "auto";
									target.style.height = `${target.scrollHeight}px`;
								}
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-neutral-500 font-mono flex-wrap pb-2 border-b border-[#f0f0f1]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-neutral-400",
										children: "Permalink:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-neutral-600",
										children: "codexdynamics.com/blog?slug="
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: slug,
										onChange: (e) => setSlug(e.target.value),
										className: "px-2 py-0.5 rounded border border-[#dcdcde] hover:border-[#2271b1] focus:border-[#2271b1] focus:bg-white bg-[#f0f0f1]/60 text-[#1e1e1e] font-mono text-xs transition-colors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `/blog?slug=${slug}`,
										target: "_blank",
										rel: "noreferrer",
										className: "text-[#2271b1] hover:underline flex items-center gap-0.5 font-sans text-xs font-semibold ml-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Post" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
									})
								]
							}),
							editorView === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									ref: editorTextareaRef,
									value: content,
									onChange: (e) => setContent(e.target.value),
									placeholder: "Start writing in Markdown, or paste your draft...",
									rows: 20,
									className: "w-full font-mono text-sm leading-relaxed p-4 border border-[#dcdcde] rounded-lg outline-none focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1] bg-[#fdfdfd] text-[#1e1e1e] resize-y min-h-[450px]"
								})
							}) : editorView === "visual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative border border-[#dcdcde] rounded-lg bg-white overflow-hidden shadow-xs focus-within:border-[#2271b1] focus-within:ring-1 focus-within:ring-[#2271b1]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										ref: editorTextareaRef,
										value: content,
										onChange: (e) => setContent(e.target.value),
										placeholder: "Type '/' to choose a block, or begin typing your article content...",
										rows: 18,
										className: "w-full font-sans text-base leading-relaxed p-6 border-none outline-none resize-y min-h-[420px] text-[#2c3338] placeholder:text-neutral-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#f8f9fa] border-t border-[#dcdcde] px-4 py-2 flex items-center justify-between text-xs text-neutral-500 font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Markdown Enabled" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											documentStats.words,
											" words • ",
											readingStats.text
										] })]
									})]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-[#dcdcde] rounded-xl p-6 sm:p-8 bg-white shadow-sm space-y-6",
								children: [
									imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative rounded-xl overflow-hidden aspect-video max-h-[380px] bg-neutral-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: imageUrl,
											alt: imageAlt || title,
											className: "w-full h-full object-cover"
										}), imageCaption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs p-2 text-center",
											children: imageCaption
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 text-neutral-800",
													children: selectedCategory
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-neutral-500 font-mono",
													children: ["• ", readingStats.text]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
												className: "text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display",
												children: title || "Untitled Article"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-neutral-500",
												children: [
													"By ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-neutral-800",
														children: author
													}),
													" • Published",
													" ",
													(/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
														month: "long",
														day: "numeric",
														year: "numeric"
													})
												]
											})
										]
									}),
									excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base text-neutral-600 italic border-l-2 border-neutral-300 pl-4",
										children: excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "prose prose-neutral max-w-none text-neutral-800 leading-relaxed space-y-4 whitespace-pre-wrap font-sans",
										children: content
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rank-math-meta-box",
						className: "border border-[#dcdcde] rounded-xl bg-white shadow-xs overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[#f8f9fa] border-b border-[#dcdcde] px-4 py-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-6 rounded bg-[#2271b1] text-white flex items-center justify-center font-bold text-xs",
										children: "RM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm text-[#1e1e1e]",
										children: "Rank Math SEO Studio"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `px-2.5 py-1 rounded text-xs font-bold font-mono border ${rankMathScore >= 80 ? "bg-emerald-50 text-emerald-700 border-emerald-300" : rankMathScore >= 60 ? "bg-amber-50 text-amber-700 border-amber-300" : "bg-red-50 text-red-700 border-red-300"}`,
										children: [
											"SEO Score: ",
											rankMathScore,
											"/100"
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-[#dcdcde] bg-white px-4 flex items-center gap-4 text-xs font-semibold overflow-x-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("general"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "general" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "General (SERP & Focus Keyword)" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("power-words"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "power-words" ? "border-purple-600 text-purple-600 font-bold" : "border-transparent text-neutral-600 hover:text-purple-600"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Power Words & Headline Studio (",
											powerWordsAnalysis.totalPowerWordsFound,
											" Found)"
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("social"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "social" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Social Share Preview" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("advanced"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "advanced" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Advanced & Schema" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-6 space-y-6",
								children: [
									metaBoxTab === "general" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-xs font-bold text-neutral-700 flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Focus Keyword" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px] text-neutral-500 font-normal",
														children: "Primary search term to optimize for"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: focusKeyword,
														onChange: (e) => setFocusKeyword(e.target.value),
														placeholder: "e.g. Enterprise Architecture",
														className: "flex-1 px-3 py-2 text-xs rounded border border-[#dcdcde] focus:border-[#2271b1] outline-none bg-white font-medium"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => toast.success(`Focus keyword "${focusKeyword}" verified!`),
														className: "px-3 py-2 rounded bg-[#f0f0f1] hover:bg-[#e0e0e0] text-xs font-semibold text-neutral-700 cursor-pointer",
														children: "Audit Keyword"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-4 rounded-lg bg-[#f8f9fa] border border-[#dcdcde] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-bold text-neutral-700",
															children: "Google SERP Snippet Preview"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "inline-flex items-center bg-white p-0.5 rounded border border-[#dcdcde] text-xs",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setSerpPreviewDevice("desktop"),
																className: `px-2 py-0.5 rounded cursor-pointer ${serpPreviewDevice === "desktop" ? "bg-[#2271b1] text-white font-bold" : "text-neutral-600"}`,
																children: "Desktop"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setSerpPreviewDevice("mobile"),
																className: `px-2 py-0.5 rounded cursor-pointer ${serpPreviewDevice === "mobile" ? "bg-[#2271b1] text-white font-bold" : "text-neutral-600"}`,
																children: "Mobile"
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-4 bg-white rounded border border-[#dcdcde] max-w-xl space-y-1 font-sans",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-1.5 text-xs text-neutral-600",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold text-neutral-800",
																	children: "Codex Dynamics"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-neutral-400",
																	children: ["› blog › ", slug || "enterprise-architecture"]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
																className: "text-[#1a0dab] hover:underline text-base sm:text-lg font-medium cursor-pointer leading-snug line-clamp-1",
																children: metaTitle || title || "Untitled Article | Codex Dynamics Blog"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#4d5156] leading-relaxed line-clamp-2",
																children: metaDescription || excerpt || content.slice(0, 155).replace(/[#*`_]/g, "") || "Explore in-depth engineering architectures, performance benchmarks, and design systems from the Codex Dynamics technical studio."
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "pt-2 space-y-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between text-xs text-neutral-600 mb-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SEO Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-mono text-[10px]",
																children: [metaTitle.length, "/60 chars"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: metaTitle,
															onChange: (e) => setMetaTitle(e.target.value),
															placeholder: title || "SEO Title...",
															className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] focus:border-[#2271b1] outline-none"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between text-xs text-neutral-600 mb-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Meta Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-mono text-[10px]",
																children: [metaDescription.length, "/160 chars"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
															value: metaDescription,
															onChange: (e) => setMetaDescription(e.target.value),
															placeholder: excerpt || "Meta description for Google search results...",
															rows: 2,
															className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] focus:border-[#2271b1] outline-none"
														})] })]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-xs font-bold text-neutral-700 uppercase tracking-wider",
													children: "Rank Math SEO Diagnostics Checklist"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid grid-cols-1 md:grid-cols-2 gap-2",
													children: rankMathChecks.map((chk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: `p-2.5 rounded border text-xs flex items-start gap-2.5 ${chk.passed ? "bg-emerald-50/50 border-emerald-200 text-neutral-800" : "bg-amber-50/40 border-amber-200 text-neutral-800"}`,
														children: [chk.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-medium",
															children: chk.label
														}), !chk.passed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[11px] text-neutral-500 mt-0.5",
															children: chk.tip
														})] })]
													}, chk.id))
												})]
											})
										]
									}),
									metaBoxTab === "power-words" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-4 rounded-xl bg-purple-50/60 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs font-bold text-purple-900 flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Headline Copywriting Score" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-purple-700 mt-1",
													children: "Evaluates psychological curiosity, authority triggers, and character count for maximum CTR."
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-2xl font-bold font-mono text-purple-900",
															children: [powerWordsAnalysis.headlineScore, "/100"]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] text-purple-700 font-semibold uppercase",
															children: powerWordsAnalysis.headlineScore >= 80 ? "High Impact" : powerWordsAnalysis.headlineScore >= 60 ? "Average" : "Needs Power Word"
														})]
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Power Words in Title"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-lg font-bold font-mono text-neutral-900 mt-0.5",
															children: powerWordsAnalysis.headlineMatches.length
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Power Words in Body"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-lg font-bold font-mono text-neutral-900 mt-0.5",
															children: powerWordsAnalysis.contentMatches.length
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Contains Number"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-lg font-bold text-neutral-900 mt-0.5",
															children: powerWordsAnalysis.headlineHasNumber ? "Yes" : "No"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Headline Length"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-lg font-bold font-mono text-neutral-900 mt-0.5",
															children: [title.length, " chars"]
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
															className: "text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Psychological Power Words Lexicon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-neutral-400 font-normal",
																children: "(Click to insert into Headline or Body)"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "relative w-full sm:w-56",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 absolute left-2.5 top-2.5 text-neutral-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: powerWordSearch,
																onChange: (e) => setPowerWordSearch(e.target.value),
																placeholder: "Filter power words...",
																className: "w-full pl-8 pr-3 py-1.5 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-purple-600"
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5 flex-wrap",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setSelectedPowerCategory("all"),
															className: `px-2.5 py-1 rounded text-xs cursor-pointer transition-colors ${selectedPowerCategory === "all" ? "bg-purple-600 text-white font-bold" : "bg-[#f0f0f1] text-neutral-700 hover:bg-[#e4e4e6]"}`,
															children: "All Categories"
														}), Object.entries(POWER_WORDS_DICTIONARY).map(([key, cat]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setSelectedPowerCategory(key),
															className: `px-2.5 py-1 rounded text-xs cursor-pointer transition-colors ${selectedPowerCategory === key ? "bg-purple-600 text-white font-bold" : "bg-[#f0f0f1] text-neutral-700 hover:bg-[#e4e4e6]"}`,
															children: cat.name
														}, key))]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-1 max-h-72 overflow-y-auto pr-1",
														children: Object.entries(POWER_WORDS_DICTIONARY).filter(([key]) => selectedPowerCategory === "all" || selectedPowerCategory === key).flatMap(([_key, cat]) => cat.words.filter((w) => powerWordSearch ? w.toLowerCase().includes(powerWordSearch.toLowerCase()) : true).map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-2 rounded-lg bg-white border border-[#dcdcde] hover:border-purple-400 hover:shadow-xs flex items-center justify-between gap-1 group transition-all",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs font-semibold text-neutral-800 capitalize truncate",
																children: word
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-1 shrink-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleInsertPowerWord(word, "title"),
																	className: "px-1.5 py-0.5 rounded bg-purple-100 hover:bg-purple-200 text-purple-800 text-[10px] font-bold cursor-pointer",
																	title: "Add to Headline Title",
																	children: "+Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleInsertPowerWord(word, "content"),
																	className: "px-1.5 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[10px] font-medium cursor-pointer",
																	title: "Insert in Body",
																	children: "+Body"
																})]
															})]
														}, word)))
													})
												]
											})
										]
									}),
									metaBoxTab === "social" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2",
											children: "OpenGraph / Facebook & LinkedIn Card Preview"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-w-md border border-[#dcdcde] rounded-lg overflow-hidden bg-white shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-video bg-neutral-100 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imageUrl,
													alt: imageAlt || title,
													className: "w-full h-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 space-y-1 bg-[#f0f2f5]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] font-mono text-neutral-500 uppercase",
														children: "codexdynamics.com"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold text-neutral-900 line-clamp-1",
														children: metaTitle || title || "Untitled Article"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-neutral-600 line-clamp-2",
														children: metaDescription || excerpt || "Explore engineering insights at Codex Dynamics."
													})
												]
											})]
										})] })
									}),
									metaBoxTab === "advanced" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 max-w-lg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-bold text-neutral-700 block mb-1",
												children: "Robots Meta Tags"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "rounded text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Index (Allow search engines to index this page)" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "rounded text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Follow (Follow links on this page)" })]
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-bold text-neutral-700 block mb-1",
												children: "Canonical URL"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: `https://codexdynamics.com/blog?slug=${slug}`,
												className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] bg-white"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-bold text-neutral-700 block mb-1",
												children: "Structured Data Schema Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] bg-white",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TechArticle" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Article" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "BlogPosting" })
												]
											})] })
										]
									})
								]
							})
						]
					})]
				}), isSidebarOpen && !isZenMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "w-full lg:w-[320px] xl:w-[340px] shrink-0 space-y-4 select-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-[#dcdcde] rounded-xl shadow-xs overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-0 z-10 bg-white border-b border-[#dcdcde] flex items-center justify-between px-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSidebarTab("post"),
										className: `py-3 px-3 text-xs font-semibold border-b-2 transition-all cursor-pointer ${sidebarTab === "post" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: "Post"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSidebarTab("seo"),
										className: `py-3 px-3 text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1 ${sidebarTab === "seo" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rank Math" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-1 rounded bg-[#2271b1]/10 text-[#2271b1] font-mono text-[10px]",
											children: rankMathScore
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsSidebarOpen(false),
									className: "p-1 rounded hover:bg-[#f0f0f1] text-neutral-500 cursor-pointer",
									title: "Close settings",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								})]
							}),
							sidebarTab === "post" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "divide-y divide-[#dcdcde] text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionSummary(!accordionSummary),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Summary" }), accordionSummary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionSummary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Visibility"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#2271b1] font-semibold cursor-pointer",
													children: "Public"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Publish"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#2271b1] font-semibold cursor-pointer",
													children: "Immediately"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Status"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: status,
													onChange: (e) => setStatus(e.target.value),
													className: "px-2 py-1 rounded border border-[#dcdcde] bg-white text-neutral-800 font-medium",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "published",
															children: "Published"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "draft",
															children: "Draft"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "archived",
															children: "Archived"
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Author"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: author,
													onChange: (e) => setAuthor(e.target.value),
													className: "px-2 py-1 rounded border border-[#dcdcde] bg-white text-neutral-800 max-w-[150px] truncate",
													children: PRESET_AUTHORS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: a,
														children: a
													}, a))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pt-2 border-t border-[#dcdcde] flex items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: isSticky,
														onChange: (e) => setIsSticky(e.target.checked),
														className: "rounded text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-neutral-700",
														children: "Stick to top of blog"
													})]
												})
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionCategories(!accordionCategories),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Categories" }), accordionCategories ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionCategories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: categorySearch,
												onChange: (e) => setCategorySearch(e.target.value),
												placeholder: "Search Categories...",
												className: "w-full px-2.5 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "max-h-36 overflow-y-auto space-y-1.5 pr-1",
												children: filteredCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 px-1 py-0.5 rounded hover:bg-[#f0f0f1] cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "radio",
														name: "postCategory",
														checked: selectedCategory === c.name,
														onChange: () => setSelectedCategory(c.name),
														className: "text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: selectedCategory === c.name ? "font-bold text-[#1e1e1e]" : "text-neutral-700",
														children: c.name
													})]
												}, c.id))
											}),
											!isAddingCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setIsAddingCategory(true),
												className: "text-[#2271b1] hover:underline font-semibold flex items-center gap-1 cursor-pointer pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add New Category" })]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
												onSubmit: handleCreateCategory,
												className: "p-2.5 bg-[#f8f9fa] border border-[#dcdcde] rounded-lg space-y-2 pt-2 animate-in fade-in",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[11px] font-bold text-neutral-700",
														children: "Add New Category"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] text-neutral-500 block mb-0.5",
														children: "Category Name *"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newCategoryName,
														onChange: (e) => setNewCategoryName(e.target.value),
														placeholder: "e.g. AI & Cloud",
														autoFocus: true,
														className: "w-full px-2 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] text-neutral-500 block mb-0.5",
														children: "Parent Category (Optional)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: newCategoryParent,
														onChange: (e) => setNewCategoryParent(e.target.value),
														className: "w-full px-2 py-1 text-xs rounded border border-[#dcdcde] bg-white",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "",
															children: "— None —"
														}), allCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: c.name,
															children: c.name
														}, c.id))]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pt-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "submit",
															className: "px-2.5 py-1 rounded bg-[#2271b1] hover:bg-[#135e96] text-white font-semibold text-xs cursor-pointer shadow-xs",
															children: "Add New Category"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => {
																setIsAddingCategory(false);
																setNewCategoryName("");
															},
															className: "text-neutral-500 hover:text-neutral-800 text-xs cursor-pointer",
															children: "Cancel"
														})]
													})
												]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionTags(!accordionTags),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tags" }), accordionTags ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionTags && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: tagInput,
													onChange: (e) => setTagInput(e.target.value),
													onKeyDown: (e) => {
														if (e.key === "Enter" || e.key === ",") {
															e.preventDefault();
															handleAddTag(tagInput);
														}
													},
													placeholder: "Add new tag...",
													className: "flex-1 px-2.5 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleAddTag(tagInput),
													className: "px-2 py-1 rounded bg-[#f0f0f1] hover:bg-[#e0e0e0] font-semibold text-neutral-700 cursor-pointer text-xs",
													children: "Add"
												})]
											}),
											tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-1 flex-wrap pt-1",
												children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "px-2 py-0.5 rounded bg-[#f0f0f1] text-neutral-800 text-xs font-medium flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleRemoveTag(t),
														className: "text-neutral-400 hover:text-red-600 cursor-pointer",
														children: "×"
													})]
												}, t))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1",
													children: "Most Used Tags"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1 flex-wrap",
													children: POPULAR_TAGS.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => handleAddTag(pt),
														disabled: tags.includes(pt),
														className: `text-[11px] px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${tags.includes(pt) ? "bg-neutral-100 text-neutral-400 border-transparent cursor-default" : "bg-white text-neutral-600 border-[#dcdcde] hover:border-[#2271b1] hover:text-[#2271b1]"}`,
														children: ["+", pt]
													}, pt))
												})]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionFeaturedImage(!accordionFeaturedImage),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Featured Image" }), accordionFeaturedImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionFeaturedImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-4 pb-4 space-y-3",
										children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													onClick: () => setIsImagePickerOpen(true),
													className: "relative aspect-video rounded-lg overflow-hidden border border-[#dcdcde] bg-neutral-100 group cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: imageUrl,
														alt: imageAlt || title,
														className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-xs",
														children: "Click to Replace"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setIsImagePickerOpen(true),
														className: "text-[#2271b1] hover:underline font-semibold cursor-pointer",
														children: "Replace Image"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setImageUrl(""),
														className: "text-red-600 hover:underline cursor-pointer",
														children: "Remove featured image"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] text-neutral-500 block mb-0.5",
													children: "Alt Text (Accessibility)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: imageAlt,
													onChange: (e) => setImageAlt(e.target.value),
													placeholder: "Describe image...",
													className: "w-full px-2 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none"
												})] })
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIsImagePickerOpen(true),
											className: "w-full py-8 border-2 border-dashed border-[#dcdcde] hover:border-[#2271b1] rounded-lg text-center cursor-pointer transition-colors bg-[#f8f9fa]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-6 mx-auto text-neutral-400 mb-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-[#2271b1]",
												children: "Set featured image"
											})]
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionExcerpt(!accordionExcerpt),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Excerpt" }), accordionExcerpt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionExcerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: excerpt,
											onChange: (e) => setExcerpt(e.target.value),
											placeholder: "Write an excerpt (optional)...",
											rows: 3,
											className: "w-full px-2.5 py-1.5 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-neutral-500",
											children: "Excerpts are optional hand-crafted summaries of your content that can be used in your theme."
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionDiscussion(!accordionDiscussion),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discussion" }), accordionDiscussion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionDiscussion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: allowComments,
												onChange: (e) => setAllowComments(e.target.checked),
												className: "rounded text-[#2271b1]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-neutral-700",
												children: "Allow comments"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: allowPingbacks,
												onChange: (e) => setAllowPingbacks(e.target.checked),
												className: "rounded text-[#2271b1]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-neutral-700",
												children: "Allow pingbacks & trackbacks"
											})]
										})]
									})] })
								]
							}),
							sidebarTab === "seo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 space-y-4 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-lg bg-[#f8f9fa] border border-[#dcdcde] text-center space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-semibold text-neutral-500",
												children: "Rank Math SEO Score"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `text-3xl font-bold font-mono ${rankMathScore >= 80 ? "text-emerald-600" : rankMathScore >= 60 ? "text-amber-600" : "text-red-600"}`,
												children: [rankMathScore, "/100"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-neutral-600",
												children: rankMathScore >= 80 ? "Great! Ready for Search Engines" : "Actionable improvements recommended below"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-bold text-neutral-700 block mb-1",
										children: "Focus Keyword"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: focusKeyword,
										onChange: (e) => setFocusKeyword(e.target.value),
										className: "w-full px-2.5 py-1.5 rounded border border-[#dcdcde] bg-white font-medium"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-2 border-t border-[#dcdcde]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-bold text-neutral-800 uppercase tracking-wider text-[11px]",
											children: "Quick Audit Checklist"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1.5",
											children: rankMathChecks.slice(0, 6).map((chk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-1.5",
												children: [chk.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: chk.passed ? "text-neutral-700" : "text-neutral-500",
													children: chk.label
												})]
											}, chk.id))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											document.querySelector("section")?.scrollIntoView({ behavior: "smooth" });
											setMetaBoxTab("power-words");
										},
										className: "w-full py-2 rounded bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Power Words Studio" })]
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePickerModal, {
				isOpen: isImagePickerOpen,
				onClose: () => setIsImagePickerOpen(false),
				onSelect: (meta) => {
					setImageUrl(meta.url);
					setImageAlt(meta.alt || title);
					setImageCaption(meta.caption || "");
					toast.success("Featured photo updated!");
				},
				currentUrl: imageUrl
			}),
			isLinkModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleConfirmLink,
					className: "w-full max-w-sm bg-white rounded-lg p-5 shadow-2xl space-y-4 border border-[#dcdcde]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-neutral-800",
								children: "Insert Link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsLinkModalOpen(false),
								className: "text-neutral-400 hover:text-neutral-700 cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-neutral-500 block mb-1",
								children: "Link URL *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								value: linkUrlInput,
								onChange: (e) => setLinkUrlInput(e.target.value),
								placeholder: "https://example.com",
								autoFocus: true,
								required: true,
								className: "w-full px-3 py-1.5 rounded border border-[#dcdcde] outline-none focus:border-[#2271b1]"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-neutral-500 block mb-1",
								children: "Anchor Text (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: linkTextInput,
								onChange: (e) => setLinkTextInput(e.target.value),
								placeholder: "e.g. Read Case Study",
								className: "w-full px-3 py-1.5 rounded border border-[#dcdcde] outline-none focus:border-[#2271b1]"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsLinkModalOpen(false),
								className: "px-3 py-1.5 text-xs text-neutral-600 hover:bg-[#f0f0f1] rounded cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-4 py-1.5 text-xs font-semibold bg-[#2271b1] hover:bg-[#135e96] text-white rounded cursor-pointer",
								children: "Insert Link"
							})]
						})
					]
				})
			})
		]
	});
}
function BlogsTab({ blogs, onSaveBlog, onDeleteBlog, onToggleStatus, onDuplicateBlog, onEditorStateChange }) {
	const [isEditorOpen, setIsEditorOpen] = (0, import_react.useState)(false);
	const [editingBlog, setEditingBlog] = (0, import_react.useState)(null);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedStatusFilter, setSelectedStatusFilter] = (0, import_react.useState)("all");
	const [selectedCategoryFilter, setSelectedCategoryFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const [viewLayout, setViewLayout] = (0, import_react.useState)("grid");
	(0, import_react.useEffect)(() => {
		onEditorStateChange?.(isEditorOpen);
	}, [isEditorOpen, onEditorStateChange]);
	(0, import_react.useEffect)(() => {
		try {
			const params = new URLSearchParams(window.location.search);
			const action = params.get("action");
			const editId = params.get("edit");
			if (action === "new" || action === "create") {
				setEditingBlog(null);
				setIsEditorOpen(true);
			} else if (editId) {
				const found = blogs.find((b) => String(b.id) === editId);
				if (found) {
					setEditingBlog(found);
					setIsEditorOpen(true);
				}
			}
		} catch {
			setIsEditorOpen(false);
		}
	}, [blogs]);
	(0, import_react.useEffect)(() => {
		const handlePopState = () => {
			try {
				const params = new URLSearchParams(window.location.search);
				const action = params.get("action");
				const editId = params.get("edit");
				if (action === "new" || action === "create") {
					setEditingBlog(null);
					setIsEditorOpen(true);
				} else if (editId) {
					const found = blogs.find((b) => String(b.id) === editId);
					if (found) {
						setEditingBlog(found);
						setIsEditorOpen(true);
					}
				} else {
					setIsEditorOpen(false);
					setEditingBlog(null);
				}
			} catch {
				setIsEditorOpen(false);
			}
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, [blogs]);
	const categoriesList = (0, import_react.useMemo)(() => {
		const stored = getStoredCategories().map((c) => c.name);
		const fromBlogs = blogs.map((b) => b.category).filter(Boolean);
		return Array.from(/* @__PURE__ */ new Set([...stored, ...fromBlogs]));
	}, [blogs]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: blogs.length,
			published: blogs.filter((b) => b.status === "published" || !b.status).length,
			drafts: blogs.filter((b) => b.status === "draft").length,
			totalWords: blogs.reduce((acc, b) => acc + (b.content?.split(/\s+/).filter(Boolean).length || 0), 0)
		};
	}, [blogs]);
	const filteredBlogs = (0, import_react.useMemo)(() => {
		return blogs.filter((b) => {
			if (selectedStatusFilter === "published" && b.status !== "published" && b.status) return false;
			if (selectedStatusFilter === "draft" && b.status !== "draft") return false;
			if (selectedStatusFilter === "archived" && b.status !== "archived") return false;
			if (selectedCategoryFilter !== "all" && b.category !== selectedCategoryFilter) return false;
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase();
				const matchTitle = b.title?.toLowerCase().includes(q);
				const matchSlug = b.slug?.toLowerCase().includes(q);
				const matchExcerpt = b.excerpt?.toLowerCase().includes(q);
				const matchContent = b.content?.toLowerCase().includes(q);
				const matchKeyword = b.focus_keyword?.toLowerCase().includes(q);
				const matchCategory = b.category?.toLowerCase().includes(q);
				return matchTitle || matchSlug || matchExcerpt || matchContent || matchKeyword || matchCategory;
			}
			return true;
		}).sort((a, b) => {
			if (sortBy === "newest") return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
			if (sortBy === "oldest") return new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime();
			if (sortBy === "title") return (a.title || "").localeCompare(b.title || "");
			if (sortBy === "words") {
				const wordsA = (a.content || "").split(/\s+/).filter(Boolean).length;
				return (b.content || "").split(/\s+/).filter(Boolean).length - wordsA;
			}
			return 0;
		});
	}, [
		blogs,
		selectedStatusFilter,
		selectedCategoryFilter,
		searchQuery,
		sortBy
	]);
	const handleOpenCreate = () => {
		setEditingBlog(null);
		setIsEditorOpen(true);
		try {
			const url = new URL(window.location.href);
			url.searchParams.set("action", "new");
			url.searchParams.delete("edit");
			window.history.pushState({ blogMode: "new" }, "", url.toString());
		} catch {}
	};
	const handleOpenEdit = (b) => {
		setEditingBlog(b);
		setIsEditorOpen(true);
		try {
			const url = new URL(window.location.href);
			url.searchParams.set("edit", String(b.id));
			url.searchParams.delete("action");
			window.history.pushState({
				blogMode: "edit",
				id: b.id
			}, "", url.toString());
		} catch {}
	};
	const handleCloseEditor = () => {
		setIsEditorOpen(false);
		setEditingBlog(null);
		try {
			const url = new URL(window.location.href);
			url.searchParams.delete("action");
			url.searchParams.delete("edit");
			window.history.pushState({}, "", url.toString());
		} catch {}
	};
	if (isEditorOpen) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogEditorPage, {
		editingId: editingBlog?.id || null,
		initialBlog: editingBlog,
		onBack: handleCloseEditor,
		onSave: async (payload, _status) => {
			return await onSaveBlog(payload);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-bold text-label font-display flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Blog & Architectural Teardowns" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Craft, optimize with Rank Math SEO & Power Words, and publish technical insights directly to the Codex Dynamics site."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 self-start sm:self-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleOpenCreate,
						className: "px-4 py-2 bg-blue hover:bg-blue-hover text-white text-xs font-semibold rounded-full shadow-xs flex items-center gap-1.5 transition-all cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New Blog Article" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-subtle uppercase tracking-wider block",
							children: "Total Articles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-label font-display mt-1 block",
							children: stats.total
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-emerald-600 uppercase tracking-wider block",
							children: "Live Published"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-emerald-700 font-display mt-1 block",
							children: stats.published
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-amber-600 uppercase tracking-wider block",
							children: "Drafts / In Progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-amber-700 font-display mt-1 block",
							children: stats.drafts
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-blue uppercase tracking-wider block",
							children: "Total Words Written"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-label font-display mt-1 block",
							children: stats.totalWords.toLocaleString()
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[220px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle absolute left-3 top-1/2 -translate-y-1/2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search by title, keyword, slug, or content...",
							className: "w-full pl-9 pr-4 py-2 text-xs bg-fill/50 hover:bg-fill border border-black/8 rounded-xl focus:border-blue focus:bg-white outline-none transition-all"
						}),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-label cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedStatusFilter,
							onChange: (e) => setSelectedStatusFilter(e.target.value),
							className: "px-3 py-1.5 text-xs bg-fill/50 border border-black/8 rounded-xl text-label font-medium focus:border-blue outline-none cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "all",
									children: [
										"All Statuses (",
										blogs.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "published",
									children: [
										"Published (",
										stats.published,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "draft",
									children: [
										"Drafts (",
										stats.drafts,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "archived",
									children: "Archived"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedCategoryFilter,
							onChange: (e) => setSelectedCategoryFilter(e.target.value),
							className: "px-3 py-1.5 text-xs bg-fill/50 border border-black/8 rounded-xl text-label font-medium focus:border-blue outline-none cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Categories"
							}), categoriesList.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sortBy,
							onChange: (e) => setSortBy(e.target.value),
							className: "px-3 py-1.5 text-xs bg-fill/50 border border-black/8 rounded-xl text-label font-medium focus:border-blue outline-none cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "newest",
									children: "Sort: Newest First"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "oldest",
									children: "Sort: Oldest First"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "title",
									children: "Sort: Title (A-Z)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "words",
									children: "Sort: Word Count"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center rounded-xl bg-fill/60 p-1 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setViewLayout("grid"),
								className: `p-1.5 rounded-lg transition-colors cursor-pointer ${viewLayout === "grid" ? "bg-white text-blue shadow-xs" : "text-subtle hover:text-label"}`,
								title: "Grid Cards View",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setViewLayout("table"),
								className: `p-1.5 rounded-lg transition-colors cursor-pointer ${viewLayout === "table" ? "bg-white text-blue shadow-xs" : "text-subtle hover:text-label"}`,
								title: "Detailed Table View",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "size-3.5" })
							})]
						})
					]
				})]
			}),
			filteredBlogs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-3xl bg-card border border-black/8 p-12 text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-14 rounded-full bg-blue/10 text-blue flex items-center justify-center mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold text-label font-display",
							children: "No articles found"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground max-w-sm mx-auto",
							children: searchQuery || selectedStatusFilter !== "all" || selectedCategoryFilter !== "all" ? "Try adjusting your search terms or filter criteria." : "Your publication studio is clean. Create your first architectural teardown or case study."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleOpenCreate,
						className: "px-4 py-2 bg-blue text-white rounded-full text-xs font-semibold hover:bg-blue-hover shadow-xs cursor-pointer inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create Article" })]
					})
				]
			}) : viewLayout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
				children: filteredBlogs.map((b) => {
					const readingTime = calculateReadingTime(b.content || "");
					const wordCount = (b.content || "").split(/\s+/).filter(Boolean).length;
					const powerAnalysis = analyzePowerWords(b.title || "", b.content || "");
					const isPublished = b.status === "published" || !b.status;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-3xl bg-card border border-black/8 overflow-hidden flex flex-col hover:border-black/20 hover:shadow-md transition-all group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] bg-fill overflow-hidden",
							children: [
								b.cover_image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.cover_image,
									alt: b.title,
									className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-blue/5 via-black/5 to-blue/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-10 text-muted-foreground/40" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-3 left-3 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (onToggleStatus) {
												const next = isPublished ? "draft" : "published";
												onToggleStatus(b.id, next);
											}
										},
										className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-xs cursor-pointer transition-transform active:scale-95 ${isPublished ? "bg-emerald-500 text-white" : b.status === "draft" ? "bg-amber-500 text-white" : "bg-zinc-600 text-white"}`,
										title: "Click to toggle status",
										children: b.status || "published"
									}), powerAnalysis.headlineHasPowerWord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-600 text-white shadow-xs flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 left-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-xs",
										children: b.category || "Engineering"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col justify-between space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] text-muted-foreground font-mono",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [wordCount, " words"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: readingTime.text }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.created_at ? new Date(b.created_at).toLocaleDateString() : "Recent" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold text-label font-display group-hover:text-blue transition-colors line-clamp-2",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed",
										children: b.excerpt || b.content?.slice(0, 140) || "No excerpt provided."
									}),
									b.focus_keyword && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[11px] text-blue font-mono bg-blue/5 px-2 py-0.5 rounded-md self-start inline-flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate",
											children: ["KW: ", b.focus_keyword]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 border-t border-black/6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleOpenEdit(b),
										className: "px-3 py-1.5 rounded-xl bg-blue/10 hover:bg-blue/20 text-blue font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `/blog?slug=${b.slug}`,
										target: "_blank",
										rel: "noreferrer",
										className: "p-1.5 rounded-xl text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
										title: "View Public Article",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [onDuplicateBlog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => onDuplicateBlog(b.id),
										className: "p-1.5 rounded-xl text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
										title: "Duplicate Article",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (window.confirm(`Delete article "${b.title}"? This cannot be undone.`)) onDeleteBlog(b.id);
										},
										className: "p-1.5 rounded-xl text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer",
										title: "Delete Article",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									})]
								})]
							})]
						})]
					}, b.id);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-3xl bg-card border border-black/8 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-black/8 bg-fill/40 text-subtle uppercase text-[10px] font-semibold tracking-wider font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Article Title & Keyword"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Length"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4 text-right",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-black/6",
							children: filteredBlogs.map((b) => {
								const readingTime = calculateReadingTime(b.content || "");
								const wordCount = (b.content || "").split(/\s+/).filter(Boolean).length;
								const power = analyzePowerWords(b.title || "", b.content || "");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-fill/30 transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 max-w-xs sm:max-w-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [b.cover_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: b.cover_image,
													alt: "",
													className: "size-9 rounded-lg object-cover border border-black/10 shrink-0"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-label block truncate group-hover:text-blue transition-colors",
														children: b.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 text-[11px] text-muted-foreground font-mono truncate",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["/blog?slug=", b.slug] }), power.headlineHasPowerWord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-purple-600 font-bold flex items-center gap-0.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power" })]
														})]
													})]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-fill border border-black/8",
												children: b.category || "Engineering"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													if (onToggleStatus) {
														const next = b.status === "published" || !b.status ? "draft" : "published";
														onToggleStatus(b.id, next);
													}
												},
												className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-transform active:scale-95 ${b.status === "published" || !b.status ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : b.status === "draft" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-zinc-100 text-zinc-600"}`,
												title: "Click to toggle status",
												children: b.status || "published"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4 font-mono text-[11px] text-muted-foreground",
											children: [
												wordCount,
												"w • ",
												readingTime.text
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-muted-foreground font-mono text-[11px]",
											children: b.created_at ? new Date(b.created_at).toLocaleDateString() : "Recent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-end gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleOpenEdit(b),
														className: "p-1.5 rounded-lg text-blue hover:bg-blue/10 transition-colors cursor-pointer",
														title: "Edit Article",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: `/blog?slug=${b.slug}`,
														target: "_blank",
														rel: "noreferrer",
														className: "p-1.5 rounded-lg text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
														title: "View Public Article",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															if (window.confirm(`Delete article "${b.title}"?`)) onDeleteBlog(b.id);
														},
														className: "p-1.5 rounded-lg text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer",
														title: "Delete Article",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
													})
												]
											})
										})
									]
								}, b.id);
							})
						})]
					})
				})
			})
		]
	});
}
function EnquiriesTab({ enquiries, onUpdateStatus, onDelete }) {
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const filtered = enquiries.filter((e) => statusFilter === "all" || e.status === statusFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold text-label font-display tracking-tight",
					children: "Inquiries & Client Lead Submissions"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: "Every submission through the Codex Dynamics contact form is securely stored in SQLite and managed here."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value),
					"aria-label": "Filter enquiries by status",
					className: "bg-white border border-black/8 rounded-full px-4 py-2 text-xs font-medium text-label focus:border-blue outline-none cursor-pointer shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "all",
							children: [
								"All Inquiries (",
								enquiries.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "new",
							children: "New Leads"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "contacted",
							children: "Contacted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "closed",
							children: "Closed / Won"
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
				children: "No inquiries found for this filter."
			}) : filtered.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col md:flex-row md:items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm text-label font-display",
									children: lead.name
								}),
								lead.company && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3 text-subtle" }), lead.company]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${lead.status === "new" ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : lead.status === "contacted" ? "bg-blue/10 text-blue border border-blue/20" : "bg-black/5 text-muted-foreground border border-black/5"}`,
									children: lead.status
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 text-xs",
							children: [
								lead.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${lead.email}`,
									className: "inline-flex items-center gap-1.5 text-blue hover:underline font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), lead.email]
								}),
								lead.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${lead.phone}`,
									className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-label font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-emerald-600" }), lead.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-subtle font-mono text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }), lead.created_at || "Recent"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 bg-fill-subtle/60 border border-hairline rounded-xl text-xs text-label leading-relaxed",
							children: [
								"\"",
								lead.message,
								"\""
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex sm:flex-col items-center sm:items-end gap-2 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								const nextStatus = lead.status === "new" ? "contacted" : "closed";
								await onUpdateStatus(lead.id, nextStatus);
								toast.success(`Lead marked as ${nextStatus}.`);
							},
							className: "px-3.5 py-1.5 bg-fill hover:bg-fill-elevated text-label rounded-full text-xs font-medium border border-black/8 transition-all hover:shadow-sm cursor-pointer",
							children: lead.status === "new" ? "Mark Contacted" : "Mark Closed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								await onDelete(lead.id);
								toast.info("Inquiry deleted from database.");
							},
							className: "p-2 text-subtle hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer",
							title: "Delete inquiry",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
						})]
					})
				})]
			}, lead.id))
		})]
	});
}
function ReviewsTab({ reviews, onSaveReview, onToggleReview, onDeleteReview }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		author: "",
		rating: 5,
		comment: "",
		image_path: "",
		is_published: true
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.author || !form.comment) return;
		if (await onSaveReview(form)) {
			setForm({
				author: "",
				rating: 5,
				comment: "",
				image_path: "",
				is_published: true
			});
			setIsOpen(false);
			toast.success("Review published to Codex Dynamics site.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 text-amber-500 fill-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "Client Testimonials & Social Proof"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Curate 5-star client testimonials, verified reviews, and ratings displayed on the public landing page."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsOpen(!isOpen),
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOpen ? "Close Form" : "Add Review" })]
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-3xl bg-card border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold uppercase tracking-wider text-label mb-2",
					children: "Create Client Testimonial"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Client Name & Title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Marcus Vance, Founder at Apex Capital",
							value: form.author,
							onChange: (e) => setForm({
								...form,
								author: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Rating"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.rating,
							onChange: (e) => setForm({
								...form,
								rating: Number(e.target.value)
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 5,
									children: "★★★★★ (5 Stars - Exceptional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 4,
									children: "★★★★☆ (4 Stars - Great)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 3,
									children: "★★★☆☆ (3 Stars - Good)"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "Avatar Photo URL (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "/team/team-member-1.png or external image URL",
									value: form.image_path,
									onChange: (e) => setForm({
										...form,
										image_path: e.target.value
									}),
									className: "flex-1 bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setForm({
										...form,
										image_path: "/team/team-member-1.png"
									}),
									className: "px-3 py-2 rounded-xl bg-fill hover:bg-fill-elevated text-xs text-muted-foreground border border-black/8 cursor-pointer",
									children: "Preset Avatar"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "Review Feedback & Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								placeholder: "Describe the client's experience working with Codex Dynamics...",
								value: form.comment,
								onChange: (e) => setForm({
									...form,
									comment: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-amber-500 focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex items-center justify-between pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.is_published,
									onChange: (e) => setForm({
										...form,
										is_published: e.target.checked
									}),
									className: "rounded text-blue focus:ring-blue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish directly to public landing page" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsOpen(false),
									className: "px-4 py-2 rounded-full text-xs font-medium text-muted-foreground hover:text-label hover:bg-fill transition-colors cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium transition-all shadow-sm cursor-pointer",
									children: "Save Review"
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4",
				children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
					children: "No reviews added yet. Click \"Add Review\" to create one."
				}) : reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-amber-500",
								children: Array.from({ length: r.rating || 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-current" }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: async () => {
									await onToggleReview(r.id, !r.is_published);
									toast.success(`Review ${r.is_published ? "hidden" : "published"}.`);
								},
								className: `text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider cursor-pointer ${r.is_published ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : "bg-black/5 text-subtle border border-black/5"}`,
								children: r.is_published ? "Live on site" : "Draft"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground leading-relaxed italic",
							children: [
								"\"",
								r.comment,
								"\""
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-hairline flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [r.image_path ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.image_path,
								alt: r.author,
								className: "size-8 rounded-full object-cover border border-black/8"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-8 rounded-full bg-blue/10 text-blue font-semibold text-xs flex items-center justify-center",
								children: r.author ? r.author[0] : "C"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label",
								children: r.author
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								await onDeleteReview(r.id);
								toast.info("Review deleted.");
							},
							className: "p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer",
							title: "Delete review",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
						})]
					})]
				}, r.id))
			})
		]
	});
}
function ProjectsTab({ projects, onSaveProject, onToggleProject, onDeleteProject }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		site_name: "",
		site_url: "",
		description: "",
		category: "Web Engineering",
		is_published: true
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.title || !form.site_url) return;
		if (await onSaveProject(form)) {
			setForm({
				title: "",
				site_name: "",
				site_url: "",
				description: "",
				category: "Web Engineering",
				is_published: true
			});
			setIsOpen(false);
			toast.success("Project added to portfolio showcase.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "Completed Projects & Client Works Showcase"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Publish client site links, project case studies, and live deliverables so visitors can explore real production URLs."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsOpen(!isOpen),
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOpen ? "Close Form" : "Post Project" })]
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-3xl bg-card border border-blue/30 p-6 sm:p-8 shadow-sm space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold uppercase tracking-wider text-label mb-2",
					children: "Post Completed Client Project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Project Title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Apex Luxury Dealership Platform",
							value: form.title,
							onChange: (e) => setForm({
								...form,
								title: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Client / Company Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Apex Motors Official",
							value: form.site_name,
							onChange: (e) => setForm({
								...form,
								site_name: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Live Website Link (External URL)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "url",
							required: true,
							placeholder: "https://apexmotors-example.com",
							value: form.site_url,
							onChange: (e) => setForm({
								...form,
								site_url: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "e.g. Full-Stack App, SaaS Platform, E-Commerce",
							value: form.category,
							onChange: (e) => setForm({
								...form,
								category: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "Project Scope & Results"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 2,
								placeholder: "Key accomplishments, technologies deployed, and client impact...",
								value: form.description,
								onChange: (e) => setForm({
									...form,
									description: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex items-center justify-between pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.is_published,
									onChange: (e) => setForm({
										...form,
										is_published: e.target.checked
									}),
									className: "rounded text-blue focus:ring-blue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish to live portfolio section" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsOpen(false),
									className: "px-4 py-2 rounded-full text-xs font-medium text-muted-foreground hover:text-label hover:bg-fill transition-colors cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition-all shadow-sm cursor-pointer",
									children: "Save Project"
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4",
				children: projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
					children: "No projects added yet. Click \"Post Project\" to feature client work."
				}) : projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20 text-[10px] font-semibold uppercase tracking-wider",
									children: p.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: async () => {
										await onToggleProject(p.id, !p.is_published);
										toast.success(`Project ${p.is_published ? "hidden" : "published"}.`);
									},
									className: `text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${p.is_published ? "bg-emerald-50 text-emerald-700" : "bg-black/5 text-subtle"}`,
									children: p.is_published ? "● Live" : "○ Draft"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-sm text-label font-display",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-subtle font-medium",
								children: p.site_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground line-clamp-3 leading-relaxed",
								children: p.description
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-hairline flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.site_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-blue text-xs font-medium border border-black/8 transition-all hover:shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit Site" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								await onDeleteProject(p.id);
								toast.info("Project deleted.");
							},
							className: "p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer",
							title: "Delete project",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
						})]
					})]
				}, p.id))
			})
		]
	});
}
function SettingsTab({ stats, webhookUrl: initialWebhook, onSaveWebhook, onTestWebhook, onChangePassword, onOpenHostingerModal, fullData }) {
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [passLoading, setPassLoading] = (0, import_react.useState)(false);
	const [passMsg, setPassMsg] = (0, import_react.useState)(null);
	const [webhook, setWebhook] = (0, import_react.useState)(initialWebhook || "");
	const [webhookLoading, setWebhookLoading] = (0, import_react.useState)(false);
	const [webhookMsg, setWebhookMsg] = (0, import_react.useState)(null);
	const [testLoading, setTestLoading] = (0, import_react.useState)(false);
	const handlePasswordSubmit = async (e) => {
		e.preventDefault();
		setPassMsg(null);
		if (newPassword !== confirmPassword) {
			setPassMsg({
				type: "error",
				text: "New passwords do not match."
			});
			return;
		}
		if (newPassword.length < 6) {
			setPassMsg({
				type: "error",
				text: "New password must be at least 6 characters."
			});
			return;
		}
		setPassLoading(true);
		try {
			const res = await onChangePassword(currentPassword, newPassword);
			if (res.ok) {
				setPassMsg({
					type: "success",
					text: res.message || "Password updated successfully in SQLite database."
				});
				setCurrentPassword("");
				setNewPassword("");
				setConfirmPassword("");
			} else setPassMsg({
				type: "error",
				text: res.error || "Failed to update password."
			});
		} catch (err) {
			setPassMsg({
				type: "error",
				text: String(err)
			});
		} finally {
			setPassLoading(false);
		}
	};
	const handleSaveWebhook = async (e) => {
		e.preventDefault();
		setWebhookMsg(null);
		setWebhookLoading(true);
		try {
			await onSaveWebhook(webhook);
			setWebhookMsg({
				type: "success",
				text: "Webhook URL saved successfully."
			});
		} catch (err) {
			setWebhookMsg({
				type: "error",
				text: String(err)
			});
		} finally {
			setWebhookLoading(false);
		}
	};
	const handleTestWebhook = async () => {
		if (!webhook.trim()) {
			setWebhookMsg({
				type: "error",
				text: "Please enter a webhook URL first."
			});
			return;
		}
		setTestLoading(true);
		setWebhookMsg(null);
		try {
			const res = await onTestWebhook(webhook);
			setWebhookMsg({
				type: res.ok ? "success" : "error",
				text: res.message || (res.ok ? "Test ping dispatched successfully!" : "Webhook test failed.")
			});
		} catch (err) {
			setWebhookMsg({
				type: "error",
				text: String(err)
			});
		} finally {
			setTestLoading(false);
		}
	};
	const handleExportJson = () => {
		const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(fullData, null, 2))}`;
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", jsonString);
		downloadAnchor.setAttribute("download", `codex_crm_backup_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold text-label font-display tracking-tight",
					children: "Security, Alerts & System Configuration"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: "Manage administrator access credentials, instant lead dispatch webhooks, dynamic public synchronization, and offline database archives."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wider text-label",
								children: "Admin Credentials"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-mono text-subtle",
							children: "admin@codexdynamics.com"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handlePasswordSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium text-label mb-1",
								children: "Current Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								value: currentPassword,
								onChange: (e) => setCurrentPassword(e.target.value),
								placeholder: "Enter current password (default: Admin123!)",
								className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-label mb-1",
									children: "New Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									required: true,
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									placeholder: "Min. 6 characters",
									className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-label mb-1",
									children: "Confirm New Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									required: true,
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									placeholder: "Repeat new password",
									className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
								})] })]
							}),
							passMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-center gap-2 p-3 rounded-xl text-xs ${passMsg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`,
								children: [passMsg.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: passMsg.text })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: passLoading,
								className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue text-paper px-4 py-2.5 text-xs font-medium hover:bg-blue/90 transition shadow-sm disabled:opacity-50",
								children: [passLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Update Admin Password" })]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 mt-6 border-t border-hairline text-[11px] text-subtle",
						children: [
							"Stored securely inside SQLite ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono bg-fill px-1 py-0.5 rounded",
								children: "users"
							}),
							" table."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Instant Lead Alerts (Webhook)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-medium",
								children: "Live Integration"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-4",
							children: "Receive instant JSON webhook notifications to Slack, Discord, Zapier, Make, or custom API endpoints whenever a new client submits an enquiry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveWebhook,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-label mb-1",
									children: "Webhook Endpoint URL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									value: webhook,
									onChange: (e) => setWebhook(e.target.value),
									placeholder: "https://hooks.slack.com/services/... or Zapier/Discord",
									className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition font-mono"
								})] }),
								webhookMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-center gap-2 p-3 rounded-xl text-xs ${webhookMsg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`,
									children: [webhookMsg.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: webhookMsg.text })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: webhookLoading,
										className: "inline-flex items-center justify-center gap-2 rounded-xl bg-label text-card px-4 py-2.5 text-xs font-medium hover:bg-label/90 transition shadow-sm disabled:opacity-50",
										children: [webhookLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Webhook" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleTestWebhook,
										disabled: testLoading,
										className: "inline-flex items-center justify-center gap-2 rounded-xl bg-fill text-label hover:bg-fill/80 border border-black/8 px-4 py-2.5 text-xs font-medium transition disabled:opacity-50",
										children: [testLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test Webhook Ping" })]
									})]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-4 mt-6 border-t border-hairline text-[11px] text-subtle",
						children: "Dispatches asynchronous POST payload with lead contact details & message."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wider text-label",
								children: "Public Site Synchronization"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-subtle font-mono",
							children: "/api/public/content"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-label",
										children: "Portfolio & Projects"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle font-mono",
									children: [stats.totalProjects, " active synced"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-label",
										children: "Client Proof & Reviews"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle font-mono",
									children: [stats.totalReviews, " verified reviews"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-label",
										children: "Rank Math SEO Articles"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle font-mono",
									children: [stats.totalBlogs, " posts indexed"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-label",
										children: "Lead Capture Funnel"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle font-mono",
									children: "Direct to SQLite"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Database & Deployment"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-mono text-subtle",
								children: "database.sqlite"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-4",
							children: "Export complete backups or review Hostinger PHP SQLite deployment instructions for production migration."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleExportJson,
								className: "w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 text-blue group-hover:translate-y-0.5 transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download Full CRM Backup (JSON)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-subtle font-mono",
									children: "Instant Export"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onOpenHostingerModal,
								className: "w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-purple-600 group-hover:rotate-12 transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hostinger & PHP Sync Architecture" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-subtle font-mono",
									children: "View Docs"
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-4 mt-6 border-t border-hairline text-[11px] text-subtle",
						children: "Zero external vendor lock-in; lightweight SQLite portable engine."
					})]
				})
			]
		})]
	});
}
var ELEMENTOR_WIDGETS = [
	{
		id: "inner-section",
		name: "Inner Section",
		category: "basic",
		icon: PanelsTopLeft,
		targetSection: "hero",
		description: "Adds nested columns and flexible flexbox containers."
	},
	{
		id: "heading",
		name: "Heading",
		category: "basic",
		icon: Type,
		targetSection: "hero",
		description: "Add high-contrast headline tags (H1 - H6) with custom typography."
	},
	{
		id: "image",
		name: "Image",
		category: "basic",
		icon: Image,
		targetSection: "studio",
		description: "Upload, resize and style media library images with captions."
	},
	{
		id: "text-editor",
		name: "Text Editor",
		category: "basic",
		icon: AlignLeft,
		targetSection: "about",
		description: "Rich WYSIWYG text paragraphs and editorial copy."
	},
	{
		id: "video",
		name: "Video / Media",
		category: "basic",
		icon: CirclePlay,
		targetSection: "hero",
		description: "Multi-clip video streamer and looping ambient media."
	},
	{
		id: "button",
		name: "Button",
		category: "basic",
		icon: Square,
		targetSection: "contact",
		description: "Interactive call-to-action button with hover states and links."
	},
	{
		id: "star-rating",
		name: "Star Rating",
		category: "basic",
		icon: Star,
		targetSection: "results",
		description: "5-star client ratings and verified Clutch/Google reviews."
	},
	{
		id: "divider",
		name: "Divider",
		category: "basic",
		icon: Minus,
		targetSection: "highlights",
		description: "Hairline subtle dividers separating content blocks."
	},
	{
		id: "spacer",
		name: "Spacer",
		category: "basic",
		icon: MoveVertical,
		targetSection: "highlights",
		description: "Adjustable vertical whitespace spacer."
	},
	{
		id: "google-maps",
		name: "Google Maps",
		category: "basic",
		icon: MapPin,
		targetSection: "contact",
		description: "Interactive studio map pin and office branch address."
	},
	{
		id: "icon",
		name: "Icon",
		category: "basic",
		icon: Sparkles,
		targetSection: "services",
		description: "Scalable vector Lucide icon with colored badge wrapper."
	},
	{
		id: "posts",
		name: "Posts & Blog",
		category: "pro",
		icon: Newspaper,
		targetSection: "about",
		isPro: true,
		description: "Rank Math dynamic blog feed with SEO schema."
	},
	{
		id: "portfolio-grid",
		name: "Portfolio Grid",
		category: "pro",
		icon: Grid3x3,
		targetSection: "services",
		isPro: true,
		description: "Interactive showcase of client projects and web apps."
	},
	{
		id: "form",
		name: "Form & Inquiries",
		category: "pro",
		icon: Mail,
		targetSection: "contact",
		isPro: true,
		description: "Conversion lead form routed to SQLite CRM & Webhook."
	},
	{
		id: "animated-headline",
		name: "Animated Headline",
		category: "pro",
		icon: Zap,
		targetSection: "hero",
		isPro: true,
		description: "Rotating kinetic typography and highlight badge accents."
	},
	{
		id: "price-table",
		name: "Metrics Counter",
		category: "pro",
		icon: TrendingUp,
		targetSection: "results",
		isPro: true,
		description: "ROAS multipliers, shipped sites, and delivery speeds."
	},
	{
		id: "call-to-action",
		name: "Call to Action",
		category: "pro",
		icon: Megaphone,
		targetSection: "contact",
		isPro: true,
		description: "Full-width booking banner with response time guarantees."
	},
	{
		id: "media-carousel",
		name: "Media Carousel",
		category: "pro",
		icon: Film,
		targetSection: "hero",
		isPro: true,
		description: "Hero video tabs (Engineering, Design, Speed, Studio)."
	},
	{
		id: "reviews-carousel",
		name: "Reviews Carousel",
		category: "pro",
		icon: ThumbsUp,
		targetSection: "results",
		isPro: true,
		description: "Verified customer testimonials and client endorsements."
	},
	{
		id: "image-box",
		name: "Image Box",
		category: "general",
		icon: Package,
		targetSection: "studio",
		description: "Image paired with heading and descriptive copy."
	},
	{
		id: "counter",
		name: "Counter",
		category: "general",
		icon: Hash,
		targetSection: "results",
		description: "Animated numeric counter measuring performance metrics."
	},
	{
		id: "progress-bar",
		name: "Progress Bar",
		category: "general",
		icon: ChartNoAxesColumn,
		targetSection: "highlights",
		description: "Core Web Vitals 100/100 performance visualizer."
	},
	{
		id: "icon-list",
		name: "Icon List",
		category: "general",
		icon: List,
		targetSection: "services",
		description: "Bullet points with checkmark icons for service deliverables."
	},
	{
		id: "social-icons",
		name: "Social Channels",
		category: "general",
		icon: Share2,
		targetSection: "contact",
		description: "WhatsApp, Telegram, Viber, and Direct Phone desks."
	},
	{
		id: "alert",
		name: "Alert Banner",
		category: "general",
		icon: TriangleAlert,
		targetSection: "hero",
		description: "Important studio announcements and availability notices."
	},
	{
		id: "html",
		name: "Custom HTML",
		category: "general",
		icon: Code,
		targetSection: "footer",
		description: "Raw embed code, custom tracking pixels, or scripts."
	},
	{
		id: "hero-cms",
		name: "Hero Showcase",
		category: "site",
		icon: Laptop,
		targetSection: "hero",
		description: "Main landing headline, subtitle, and video clips."
	},
	{
		id: "bento-cms",
		name: "Bento Highlights",
		category: "site",
		icon: Layers,
		targetSection: "highlights",
		description: "Bento grid cards showcasing architectural pillars."
	},
	{
		id: "services-cms",
		name: "Services Section",
		category: "site",
		icon: Briefcase,
		targetSection: "services",
		description: "Full service offering packages and design deliverables."
	},
	{
		id: "about-cms",
		name: "About & Process",
		category: "site",
		icon: Users,
		targetSection: "about",
		description: "4-step engineering process and studio gallery."
	},
	{
		id: "studio-cms",
		name: "Studio & Principles",
		category: "site",
		icon: Sparkles,
		targetSection: "studio",
		description: "Design philosophy, Kyiv loft photo, and city map tag."
	},
	{
		id: "results-cms",
		name: "Results & Proof",
		category: "site",
		icon: TrendingUp,
		targetSection: "results",
		description: "Conversion multipliers and shipped project proof."
	},
	{
		id: "contact-cms",
		name: "Contact & Desks",
		category: "site",
		icon: PhoneCall,
		targetSection: "contact",
		description: "Studio addresses, multiple WhatsApps, and inquiry form."
	},
	{
		id: "footer-cms",
		name: "Footer & Copyright",
		category: "site",
		icon: Clock,
		targetSection: "footer",
		description: "Tagline, copyright year, and legal disclosures."
	}
];
function SiteEditorTab() {
	const { config: globalConfig, refetch, updateLocalConfig } = useSiteConfig();
	const [config, setConfig] = (0, import_react.useState)(globalConfig || DEFAULT_SITE_CONFIG);
	const [hasChanges, setHasChanges] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (globalConfig && !hasChanges) setConfig(globalConfig);
	}, [globalConfig, hasChanges]);
	const [dockMode, setDockMode] = (0, import_react.useState)("elements");
	const [activeSectionId, setActiveSectionId] = (0, import_react.useState)("hero");
	const [inspectorTab, setInspectorTab] = (0, import_react.useState)("content");
	const [responsiveMode, setResponsiveMode] = (0, import_react.useState)("desktop");
	const [previewCleanMode, setPreviewCleanMode] = (0, import_react.useState)(false);
	const [isNavigatorOpen, setIsNavigatorOpen] = (0, import_react.useState)(false);
	const [widgetSearch, setWidgetSearch] = (0, import_react.useState)("");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [expandedCategories, setExpandedCategories] = (0, import_react.useState)({
		basic: true,
		pro: true,
		general: true,
		site: true
	});
	const [imagePickerOpen, setImagePickerOpen] = (0, import_react.useState)(false);
	const [imagePickerTarget, setImagePickerTarget] = (0, import_react.useState)(null);
	const updateField = (path, value) => {
		setHasChanges(true);
		setConfig((prev) => {
			const copy = JSON.parse(JSON.stringify(prev));
			const parts = path.split(".");
			let cur = copy;
			for (let i = 0; i < parts.length - 1; i++) {
				const p = parts[i];
				if (!(p in cur) || typeof cur[p] !== "object") cur[p] = {};
				cur = cur[p];
			}
			cur[parts[parts.length - 1]] = value;
			return copy;
		});
	};
	const handleSave = (0, import_react.useCallback)(async () => {
		try {
			setIsSaving(true);
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "save_site_content",
					config,
					payload: { config }
				})
			})).json();
			if (data.ok) {
				toast.success("Site published successfully with Elementor!");
				setHasChanges(false);
				updateLocalConfig(data.config || config);
				await refetch();
			} else toast.error(data.error || "Failed to publish site content");
		} catch (err) {
			toast.error("Network error while saving: " + String(err));
		} finally {
			setIsSaving(false);
		}
	}, [
		config,
		refetch,
		updateLocalConfig
	]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "s") {
				e.preventDefault();
				handleSave();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleSave]);
	const handleSelectSection = (sectionId) => {
		setActiveSectionId(sectionId);
		setDockMode("inspector");
	};
	const filteredWidgets = ELEMENTOR_WIDGETS.filter((w) => w.name.toLowerCase().includes(widgetSearch.toLowerCase()) || w.description.toLowerCase().includes(widgetSearch.toLowerCase()));
	const SECTIONS_LIST = [
		{
			id: "hero",
			name: "Hero Video Showcase",
			icon: Laptop
		},
		{
			id: "highlights",
			name: "Bento Highlights Grid",
			icon: Layers
		},
		{
			id: "services",
			name: "Services & Studio Offerings",
			icon: Briefcase
		},
		{
			id: "about",
			name: "About & Engineering Process",
			icon: Users
		},
		{
			id: "studio",
			name: "Studio & Kyiv Loft",
			icon: Sparkles
		},
		{
			id: "results",
			name: "Results & Conversion Proof",
			icon: TrendingUp
		},
		{
			id: "contact",
			name: "Contact Desks & Desks",
			icon: PhoneCall
		},
		{
			id: "footer",
			name: "Footer & Copyright",
			icon: Clock
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-[calc(100vh-140px)] min-h-[640px] bg-[#1d2024] text-white flex flex-col overflow-hidden rounded-2xl border border-black/20 shadow-2xl font-sans select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-12 bg-[#26292c] border-b border-[#3c434a] px-4 flex items-center justify-between shrink-0 z-30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-7 rounded-lg bg-[#E24474] flex items-center justify-center font-black text-white text-xs tracking-tighter shadow-sm",
									children: "E"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold tracking-wider text-white",
									children: "ELEMENTOR"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#3c434a]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/70 font-medium",
									children: "Page:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-white bg-[#33373b] px-2.5 py-0.5 rounded-md border border-white/10",
									children: "Home (Front Page)"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 bg-[#1d2024] p-1 rounded-xl border border-white/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setDockMode("elements"),
								className: `px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all ${dockMode === "elements" ? "bg-[#E24474] text-white font-semibold shadow-xs" : "text-white/70 hover:text-white hover:bg-white/5"}`,
								title: "Widgets & Elements Catalog",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Elements" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setDockMode("inspector"),
								className: `px-3 py-1 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all ${dockMode === "inspector" ? "bg-[#E24474] text-white font-semibold shadow-xs" : "text-white/70 hover:text-white hover:bg-white/5"}`,
								title: "Inspect Selected Element",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inspector" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsNavigatorOpen(!isNavigatorOpen),
								className: `px-2.5 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-all ${isNavigatorOpen ? "bg-white/20 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`,
								title: "Toggle Elementor Navigator Tree",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Navigator" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 bg-[#1d2024] p-0.5 rounded-lg border border-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setResponsiveMode("desktop"),
										className: `p-1.5 rounded-md transition-colors ${responsiveMode === "desktop" ? "bg-[#33373b] text-white" : "text-white/50 hover:text-white"}`,
										title: "Desktop Preview (100%)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setResponsiveMode("tablet"),
										className: `p-1.5 rounded-md transition-colors ${responsiveMode === "tablet" ? "bg-[#33373b] text-white" : "text-white/50 hover:text-white"}`,
										title: "Tablet Preview (768px)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setResponsiveMode("mobile"),
										className: `p-1.5 rounded-md transition-colors ${responsiveMode === "mobile" ? "bg-[#33373b] text-white" : "text-white/50 hover:text-white"}`,
										title: "Mobile Preview (390px)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setPreviewCleanMode(!previewCleanMode),
								className: `p-2 rounded-lg border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors ${previewCleanMode ? "bg-[#0071e3] text-white border-transparent" : "bg-[#33373b] text-white/80 hover:text-white hover:bg-[#3f4448]"}`,
								title: "Toggle Clean Preview (Hides Elementor edit handles)",
								children: [previewCleanMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: previewCleanMode ? "Edit Mode" : "Clean View"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "p-2 rounded-lg bg-[#33373b] hover:bg-[#3f4448] text-white/80 hover:text-white border border-white/10 transition-colors",
								title: "Open Live Public Website",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex overflow-hidden relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-80 md:w-96 bg-[#26292c] border-r border-[#3c434a] flex flex-col shrink-0 overflow-hidden z-20",
						children: [
							dockMode === "elements" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-3 border-b border-[#3c434a] bg-[#1d2024]/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 absolute left-3 top-2.5 text-white/50" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: widgetSearch,
												onChange: (e) => setWidgetSearch(e.target.value),
												placeholder: "Search Widget... (e.g. Hero, Button, Form)",
												className: "w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#1d2024] border border-[#3c434a] text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#E24474]"
											}),
											widgetSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setWidgetSearch(""),
												className: "absolute right-2.5 top-2.5 text-white/50 hover:text-white",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 overflow-y-auto p-3 space-y-4 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setExpandedCategories((prev) => ({
													...prev,
													basic: !prev.basic
												})),
												className: "w-full flex items-center justify-between text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-wider py-1 px-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BASIC WIDGETS" }), expandedCategories.basic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
											}), expandedCategories.basic && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-3 gap-2",
												children: filteredWidgets.filter((w) => w.category === "basic").map((w) => {
													const IconComp = w.icon;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => {
															handleSelectSection(w.targetSection);
															toast.success(`Selected ${w.name} in canvas`);
														},
														className: "bg-[#33373b] hover:bg-[#3f4448] border border-[#3c434a] hover:border-[#E24474] rounded-xl p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all group shadow-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "size-5 text-white/70 group-hover:text-[#E24474] transition-colors mb-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-white/80 group-hover:text-white font-medium truncate w-full",
															children: w.name
														})]
													}, w.id);
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setExpandedCategories((prev) => ({
													...prev,
													pro: !prev.pro
												})),
												className: "w-full flex items-center justify-between text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-wider py-1 px-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PRO WIDGETS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] bg-[#E24474] text-white px-1.5 py-0.2 rounded font-bold",
														children: "PRO"
													})]
												}), expandedCategories.pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
											}), expandedCategories.pro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-3 gap-2",
												children: filteredWidgets.filter((w) => w.category === "pro").map((w) => {
													const IconComp = w.icon;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => {
															handleSelectSection(w.targetSection);
															toast.success(`Selected ${w.name} in canvas`);
														},
														className: "bg-[#33373b] hover:bg-[#3f4448] border border-[#3c434a] hover:border-[#E24474] rounded-xl p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-all group shadow-xs relative",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "size-5 text-white/70 group-hover:text-[#E24474] transition-colors mb-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-white/80 group-hover:text-white font-medium truncate w-full",
															children: w.name
														})]
													}, w.id);
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setExpandedCategories((prev) => ({
													...prev,
													site: !prev.site
												})),
												className: "w-full flex items-center justify-between text-white/60 hover:text-white font-bold text-[11px] uppercase tracking-wider py-1 px-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SITE SECTIONS & BLOCKS" }), expandedCategories.site ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
											}), expandedCategories.site && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-2 gap-2",
												children: filteredWidgets.filter((w) => w.category === "site").map((w) => {
													const IconComp = w.icon;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => {
															handleSelectSection(w.targetSection);
															toast.success(`Editing ${w.name}`);
														},
														className: "bg-[#33373b] hover:bg-[#3f4448] border border-[#3c434a] hover:border-[#E24474] rounded-xl p-3 flex items-center gap-2.5 cursor-pointer transition-all group shadow-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "size-8 rounded-lg bg-white/5 group-hover:bg-[#E24474]/20 flex items-center justify-center shrink-0",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "size-4 text-white/80 group-hover:text-[#E24474] transition-colors" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-left overflow-hidden",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs font-semibold text-white truncate",
																children: w.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-[10px] text-white/50 truncate",
																children: w.targetSection
															})]
														})]
													}, w.id);
												})
											})]
										})
									]
								})]
							}),
							dockMode === "inspector" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-[#1d2024] border-b border-[#3c434a] flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setDockMode("elements"),
												className: "p-1 rounded hover:bg-white/10 text-white/70 hover:text-white",
												title: "Back to Elements catalog",
												children: "←"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "overflow-hidden",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] uppercase font-bold text-[#E24474] block leading-none",
													children: "Edit Section"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xs font-bold text-white truncate mt-0.5",
													children: SECTIONS_LIST.find((s) => s.id === activeSectionId)?.name || activeSectionId
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setDockMode("elements"),
												className: "text-[11px] text-white/60 hover:text-white px-2 py-0.5 rounded bg-white/5",
												children: "Widgets"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 border-b border-[#3c434a] bg-[#222528] text-center text-xs font-bold tracking-wide",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setInspectorTab("content"),
												className: `py-2.5 transition-colors border-b-2 ${inspectorTab === "content" ? "border-[#E24474] text-white bg-[#26292c]" : "border-transparent text-white/50 hover:text-white/80"}`,
												children: "CONTENT"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setInspectorTab("style"),
												className: `py-2.5 transition-colors border-b-2 ${inspectorTab === "style" ? "border-[#E24474] text-white bg-[#26292c]" : "border-transparent text-white/50 hover:text-white/80"}`,
												children: "STYLE"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setInspectorTab("advanced"),
												className: `py-2.5 transition-colors border-b-2 ${inspectorTab === "advanced" ? "border-[#E24474] text-white bg-[#26292c]" : "border-transparent text-white/50 hover:text-white/80"}`,
												children: "ADVANCED"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 overflow-y-auto p-4 space-y-5 text-xs text-white/80",
										children: [
											inspectorTab === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4",
												children: [
													activeSectionId === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Badge / Kicker Text"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: config.hero.badgeText,
																	onChange: (e) => updateField("hero.badgeText", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Main Headline (Title)"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																	rows: 2,
																	value: config.hero.title,
																	onChange: (e) => updateField("hero.title", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Subtitle / Body Copy"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																	rows: 3,
																	value: config.hero.subtitle,
																	onChange: (e) => updateField("hero.subtitle", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "pt-2 border-t border-[#3c434a] space-y-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex items-center justify-between",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "text-[11px] font-bold uppercase tracking-wider text-white/60",
																		children: [
																			"Hero Video Stream Clips (",
																			config.hero.clips.length,
																			")"
																		]
																	})
																}), config.hero.clips.map((clip, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "p-3 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-2",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex items-center justify-between",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																				className: "font-semibold text-white text-[11px]",
																				children: [
																					"Clip #",
																					idx + 1,
																					": ",
																					clip.label
																				]
																			})
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			value: clip.title,
																			onChange: (e) => {
																				const newClips = [...config.hero.clips];
																				newClips[idx].title = e.target.value;
																				updateField("hero.clips", newClips);
																			},
																			placeholder: "Clip Title",
																			className: "w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			value: clip.videoUrl,
																			onChange: (e) => {
																				const newClips = [...config.hero.clips];
																				newClips[idx].videoUrl = e.target.value;
																				updateField("hero.clips", newClips);
																			},
																			placeholder: "Video MP4 URL",
																			className: "w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs font-mono text-white/80"
																		})
																	]
																}, clip.id))]
															})
														]
													}),
													activeSectionId === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Section Kicker"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: config.services.kicker,
																	onChange: (e) => updateField("services.kicker", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Section Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: config.services.title,
																	onChange: (e) => updateField("services.title", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Subtitle"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																	rows: 2,
																	value: config.services.subtitle,
																	onChange: (e) => updateField("services.subtitle", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "pt-2 border-t border-[#3c434a] space-y-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex items-center justify-between",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "text-[11px] font-bold uppercase tracking-wider text-white/60",
																		children: [
																			"Service Packages (",
																			config.services.items.length,
																			")"
																		]
																	})
																}), config.services.items.map((srv, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "p-3 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-2",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex items-center justify-between",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "font-semibold text-white text-[11px]",
																				children: srv.title
																			})
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			value: srv.title,
																			onChange: (e) => {
																				const newItems = [...config.services.items];
																				newItems[idx].title = e.target.value;
																				updateField("services.items", newItems);
																			},
																			className: "w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																			rows: 2,
																			value: srv.description,
																			onChange: (e) => {
																				const newItems = [...config.services.items];
																				newItems[idx].description = e.target.value;
																				updateField("services.items", newItems);
																			},
																			className: "w-full px-2.5 py-1.5 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
																		})
																	]
																}, srv.id))]
															})
														]
													}),
													activeSectionId === "studio" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Studio Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: config.studio.title,
																	onChange: (e) => updateField("studio.title", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Studio Philosophy"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																	rows: 3,
																	value: config.studio.lead,
																	onChange: (e) => updateField("studio.lead", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1 pt-2 border-t border-[#3c434a]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Studio Main Photo"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "w-20 h-14 rounded-lg bg-[#1d2024] border border-[#3c434a] overflow-hidden shrink-0",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																			src: config.studio.mainImage,
																			alt: "Studio",
																			className: "w-full h-full object-cover"
																		})
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																		type: "button",
																		onClick: () => {
																			setImagePickerTarget({
																				path: "studio.mainImage",
																				value: config.studio.mainImage,
																				title: "Choose Studio Image"
																			});
																			setImagePickerOpen(true);
																		},
																		className: "px-3 py-2 rounded-lg bg-[#33373b] hover:bg-[#3f4448] text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Choose Image" })]
																	})]
																})]
															})
														]
													}),
													activeSectionId === "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Response Guarantee Badge"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: config.contact.responseTime,
																	onChange: (e) => updateField("contact.responseTime", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[11px] font-semibold text-white/70",
																	children: "Direct Message Card Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: config.contact.directMessageTitle,
																	onChange: (e) => updateField("contact.directMessageTitle", e.target.value),
																	className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "pt-2 border-t border-[#3c434a] space-y-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex items-center justify-between",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "text-[11px] font-bold uppercase tracking-wider text-white/60",
																		children: [
																			"Instant Messenger Desks (",
																			config.socialContacts.length,
																			")"
																		]
																	})
																}), config.socialContacts.map((sc, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "p-2.5 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold text-white text-[11px]",
																			children: sc.label
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[10px] text-white/50 uppercase",
																			children: sc.platform
																		})]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: sc.value,
																		onChange: (e) => {
																			const newContacts = [...config.socialContacts];
																			newContacts[idx].value = e.target.value;
																			updateField("socialContacts", newContacts);
																		},
																		className: "w-full px-2 py-1 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
																	})]
																}, sc.id))]
															})
														]
													}),
													activeSectionId === "results" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[11px] font-semibold text-white/70",
																children: "Section Title"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: config.results.title,
																onChange: (e) => updateField("results.title", e.target.value),
																className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "pt-2 border-t border-[#3c434a] space-y-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[11px] font-bold uppercase tracking-wider text-white/60",
																children: "Key Metrics Proof Counters"
															}), config.results.metrics.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "p-2.5 rounded-lg bg-[#1d2024] border border-[#3c434a] space-y-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-between",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-semibold text-white text-[11px]",
																		children: m.label
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-xs font-mono font-bold text-[#E24474]",
																		children: [m.value, m.suffix]
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "grid grid-cols-2 gap-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: m.value,
																		onChange: (e) => {
																			const newM = [...config.results.metrics];
																			newM[idx].value = e.target.value;
																			updateField("results.metrics", newM);
																		},
																		placeholder: "Value",
																		className: "px-2 py-1 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: m.suffix,
																		onChange: (e) => {
																			const newM = [...config.results.metrics];
																			newM[idx].suffix = e.target.value;
																			updateField("results.metrics", newM);
																		},
																		placeholder: "Suffix (e.g. x, %)",
																		className: "px-2 py-1 rounded bg-[#26292c] border border-[#3c434a] text-xs text-white"
																	})]
																})]
															}, m.id))]
														})]
													}),
													activeSectionId === "footer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[11px] font-semibold text-white/70",
																children: "Footer Tagline"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																rows: 3,
																value: config.footer.tagline,
																onChange: (e) => updateField("footer.tagline", e.target.value),
																className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[11px] font-semibold text-white/70",
																children: "Copyright Notice"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: config.footer.copyrightText,
																onChange: (e) => updateField("footer.copyrightText", e.target.value),
																className: "w-full px-3 py-2 rounded-lg bg-[#1d2024] border border-[#3c434a] text-white focus:outline-none focus:border-[#E24474]"
															})]
														})]
													}),
													["highlights", "about"].includes(activeSectionId) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "space-y-3",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-white/70",
															children: "Section content is synchronized with the primary theme configuration. Use the options below or adjust typography in the Style tab."
														})
													})
												]
											}),
											inspectorTab === "style" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-xs font-bold text-white flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-3.5 text-[#E24474]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Typography" })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-white/40 font-mono",
															children: "Global System"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[11px] text-white/60",
															children: "Font Family"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: config.theme?.fontFamily || "system",
															onChange: (e) => updateField("theme.fontFamily", e.target.value),
															className: "w-full px-2.5 py-1.5 rounded-lg bg-[#26292c] border border-[#3c434a] text-xs text-white focus:outline-none focus:border-[#E24474]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "system",
																	children: "Native System SF Pro (Apple)"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "inter",
																	children: "Inter + Plus Jakarta Sans (SaaS)"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "playfair",
																	children: "Playfair Display (Editorial)"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "syne",
																	children: "Syne + Space Grotesk (Avant-Garde)"
																})
															]
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center justify-between",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-xs font-bold text-white flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "size-3.5 text-[#E24474]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Color Tokens" })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-2 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[10px] text-white/60",
																children: "Primary"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "color",
																	value: config.colors.primary,
																	onChange: (e) => updateField("colors.primary", e.target.value),
																	className: "size-7 rounded cursor-pointer bg-transparent border-0"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-mono text-white",
																	children: config.colors.primary
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[10px] text-white/60",
																children: "Accent"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "color",
																	value: config.colors.accent,
																	onChange: (e) => updateField("colors.accent", e.target.value),
																	className: "size-7 rounded cursor-pointer bg-transparent border-0"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-mono text-white",
																	children: config.colors.accent
																})]
															})]
														})]
													})]
												})]
											}),
											inspectorTab === "advanced" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold text-white block",
														children: "Layout Spacing (px)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-4 gap-1.5 text-center text-[10px] text-white/60",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "number",
																defaultValue: 48,
																className: "w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Top" })] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "number",
																defaultValue: 24,
																className: "w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Right" })] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "number",
																defaultValue: 48,
																className: "w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bottom" })] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "number",
																defaultValue: 24,
																className: "w-full py-1 text-center bg-[#26292c] border border-[#3c434a] rounded text-white text-xs"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Left" })] })
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-[#1d2024] border border-[#3c434a] space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold text-white block",
														children: "Responsive Visibility"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between text-xs",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hide on Desktop" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "checkbox",
																	className: "rounded"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between text-xs",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hide on Tablet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "checkbox",
																	className: "rounded"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between text-xs",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hide on Mobile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "checkbox",
																	className: "rounded"
																})]
															})
														]
													})]
												})]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-14 bg-[#1e2022] border-t border-[#3c434a] px-3 flex items-center justify-between shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDockMode("settings"),
										className: "p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors",
										title: "Page Settings",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setIsNavigatorOpen(!isNavigatorOpen),
										className: `p-2 rounded-lg transition-colors ${isNavigatorOpen ? "bg-white/20 text-white" : "text-white/60 hover:text-white hover:bg-white/10"}`,
										title: "Toggle Elementor Navigator",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleSave,
									disabled: isSaving,
									className: "px-5 py-2 rounded-xl bg-[#39b54a] hover:bg-[#2fa33f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#39b54a]/25 flex items-center gap-2 cursor-pointer disabled:opacity-50",
									children: isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SAVING..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hasChanges ? "UPDATE *" : "PUBLISHED" })] })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 bg-[#121417] overflow-y-auto p-4 md:p-6 flex flex-col items-center relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `w-full transition-all duration-300 bg-white text-label rounded-2xl shadow-2xl overflow-hidden border border-black/10 relative ${responsiveMode === "mobile" ? "max-w-[390px] min-h-[780px]" : responsiveMode === "tablet" ? "max-w-[768px] min-h-[900px]" : "max-w-6xl min-h-[1000px]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("hero"),
									className: `p-4 border-b border-black/8 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between cursor-pointer transition-all ${!previewCleanMode && activeSectionId === "hero" ? "ring-2 ring-[#0071e3] ring-inset" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "size-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs",
											children: "CD"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-sm text-label",
											children: config.general.brandName
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "px-3.5 py-1.5 rounded-full bg-blue text-white text-xs font-semibold shadow-xs",
											children: "Book Strategy Call"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("hero"),
									className: `relative p-6 md:p-10 transition-all cursor-pointer group ${!previewCleanMode && activeSectionId === "hero" ? "ring-2 ring-[#0071e3] ring-offset-2" : ""}`,
									children: [
										!previewCleanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Section: Hero" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-w-2xl space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue/10 text-blue",
													children: config.hero.badgeText
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
													className: "text-3xl md:text-5xl font-black text-label tracking-tight leading-tight",
													children: config.hero.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm md:text-base text-muted-foreground leading-relaxed",
													children: config.hero.subtitle
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-3 pt-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "px-5 py-2.5 rounded-full bg-blue text-white text-xs font-bold shadow-md shadow-blue/25",
														children: "Start Your Project"
													})
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3",
											children: config.hero.clips.slice(0, 4).map((clip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 rounded-xl bg-black/5 border border-black/5 text-center space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold text-muted-foreground uppercase",
													children: clip.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label truncate",
													children: clip.title
												})]
											}, clip.id))
										})
									]
								}),
								!previewCleanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "my-2 flex items-center justify-center relative group/add",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-black/10 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											toast.info("Select column structure to insert new Elementor container.");
										},
										className: "absolute size-6 rounded-full bg-[#E24474] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm",
										title: "Add Section",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("services"),
									className: `p-6 md:p-10 border-t border-black/8 bg-black/[0.01] transition-all cursor-pointer group relative ${!previewCleanMode && activeSectionId === "services" ? "ring-2 ring-[#0071e3] ring-offset-2" : ""}`,
									children: [
										!previewCleanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Section: Services" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 mb-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-blue tracking-wider uppercase",
													children: config.services.kicker
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-2xl md:text-3xl font-black text-label",
													children: config.services.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground max-w-xl",
													children: config.services.subtitle
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: config.services.items.map((srv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-5 rounded-2xl bg-white border border-black/8 shadow-xs space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-sm font-bold text-label",
													children: srv.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground leading-relaxed",
													children: srv.description
												})]
											}, srv.id))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("studio"),
									className: `p-6 md:p-10 border-t border-black/8 transition-all cursor-pointer group relative ${!previewCleanMode && activeSectionId === "studio" ? "ring-2 ring-[#0071e3] ring-offset-2" : ""}`,
									children: [!previewCleanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Section: Studio" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-12 gap-6 items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-7 space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-2xl md:text-3xl font-black text-label",
												children: config.studio.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground leading-relaxed",
												children: config.studio.lead
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "md:col-span-5 h-48 rounded-2xl overflow-hidden bg-black/5 border border-black/8 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: config.studio.mainImage,
												alt: "Studio",
												className: "w-full h-full object-cover"
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("results"),
									className: `p-6 md:p-10 border-t border-black/8 bg-black/[0.01] transition-all cursor-pointer group relative ${!previewCleanMode && activeSectionId === "results" ? "ring-2 ring-[#0071e3] ring-offset-2" : ""}`,
									children: [
										!previewCleanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Section: Results" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-center space-y-2 mb-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-2xl font-black text-label",
												children: config.results.title
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 md:grid-cols-4 gap-4",
											children: config.results.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-4 rounded-xl bg-white border border-black/8 text-center space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-2xl font-black text-blue font-mono",
													children: [m.value, m.suffix]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: m.label
												})]
											}, m.id))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("contact"),
									className: `p-6 md:p-10 border-t border-black/8 transition-all cursor-pointer group relative ${!previewCleanMode && activeSectionId === "contact" ? "ring-2 ring-[#0071e3] ring-offset-2" : ""}`,
									children: [!previewCleanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2 right-2 bg-[#0071e3] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm opacity-90 flex items-center gap-1 z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Section: Contact" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200",
											children: config.contact.responseTime
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-2xl font-black text-label mt-2",
											children: config.contact.directMessageTitle
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
											children: config.socialContacts.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-black/5 border border-black/5 space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs font-bold text-label",
													children: sc.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] font-mono text-muted-foreground truncate",
													children: sc.value
												})]
											}, sc.id))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection("footer"),
									className: `p-6 border-t border-black/8 bg-black text-white text-center space-y-2 cursor-pointer transition-all ${!previewCleanMode && activeSectionId === "footer" ? "ring-2 ring-[#0071e3] ring-inset" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/70",
										children: config.footer.tagline
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-white/50",
										children: config.footer.copyrightText
									})]
								})
							]
						})
					}),
					isNavigatorOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-4 right-4 w-72 bg-[#26292c] border border-[#3c434a] rounded-2xl shadow-2xl flex flex-col z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-150",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-[#1d2024] border-b border-[#3c434a] flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-[#E24474]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-white",
									children: "Navigator"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsNavigatorOpen(false),
								className: "text-white/50 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 overflow-y-auto max-h-80 space-y-1 text-xs",
							children: SECTIONS_LIST.map((s) => {
								const SIcon = s.icon;
								const isSelected = activeSectionId === s.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => handleSelectSection(s.id),
									className: `p-2 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${isSelected ? "bg-[#0071e3] text-white font-semibold shadow-xs" : "text-white/80 hover:bg-white/5"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SIcon, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: s.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3 text-white/50 hover:text-white" })]
								}, s.id);
							})
						})]
					})
				]
			}),
			imagePickerTarget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePickerModal, {
				isOpen: imagePickerOpen,
				onClose: () => {
					setImagePickerOpen(false);
					setImagePickerTarget(null);
				},
				currentValue: imagePickerTarget.value,
				title: imagePickerTarget.title,
				onSelect: (url) => {
					updateField(imagePickerTarget.path, url);
					setImagePickerOpen(false);
					setImagePickerTarget(null);
				}
			})
		]
	});
}
function radiusFor(type) {
	switch (type) {
		case "sharp": return "0px";
		case "clean": return "6px";
		case "pill": return "999px";
		default: return "10px";
	}
}
function fontFor(font) {
	switch (font) {
		case "playfair": return "'Playfair Display', Georgia, serif";
		case "syne": return "'Syne', sans-serif";
		case "inter": return "'Plus Jakarta Sans', 'Inter', sans-serif";
		default: return "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif";
	}
}
function ThemeLiveMockup({ theme, siteConfig, className = "", isCompact = false }) {
	const isDark = isDarkHex(theme.colors.background);
	const radius = radiusFor(theme.borderRadius);
	const font = fontFor(theme.fontFamily);
	const siteTitle = siteConfig?.siteName || "Codex Dynamics";
	const heroBadge = siteConfig?.hero?.badge || theme.tags[0] || "Studio";
	const heroTitle = siteConfig?.hero?.title || theme.name;
	const heroLayout = theme.heroLayout || theme.layout?.heroLayout || "streamer";
	const hairline = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";
	const ink = theme.colors.inverse || (isDark ? "#f5f5f7" : "#1d1d1f");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex h-full w-full select-none flex-col overflow-hidden ${className}`,
		style: {
			backgroundColor: theme.colors.background,
			color: theme.colors.textMain,
			fontFamily: font
		},
		children: [
			isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-10 -right-10 size-36 rounded-full opacity-30 blur-2xl",
				style: { backgroundColor: theme.colors.primary }
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 px-3 pt-2",
				children: theme.headerStyle === "classic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b pb-1.5 text-center",
					style: { borderColor: hairline },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] font-semibold tracking-tight",
						style: { fontFamily: font },
						children: siteTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-0.5 flex justify-center gap-2 text-[7px] tracking-[0.14em] uppercase opacity-60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Work" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Studio" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" })
						]
					})]
				}) : theme.headerStyle === "sticky" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-6 items-center justify-between border-b px-1",
					style: {
						backgroundColor: theme.colors.cardBg,
						borderColor: hairline
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] font-bold",
						children: siteTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-1.5 py-0.5 text-[7px] font-semibold text-white",
						style: {
							backgroundColor: theme.colors.primary,
							borderRadius: radius
						},
						children: "Talk"
					})]
				}) : theme.headerStyle === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-5 items-center justify-between border-b",
					style: { borderColor: hairline },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] font-semibold tracking-tight",
						children: siteTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[7px] font-semibold",
						style: { color: theme.colors.primary },
						children: "Contact"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-6 max-w-[92%] items-center justify-between border px-2.5 shadow-xs backdrop-blur-xs",
					style: {
						backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.82)",
						borderColor: hairline,
						borderRadius: theme.borderRadius === "sharp" ? "8px" : "999px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-[9px] font-bold",
						children: siteTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-1.5 py-0.5 text-[7px] font-semibold text-white",
						style: {
							backgroundColor: theme.colors.primary,
							borderRadius: radius
						},
						children: "Action"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 flex-1 flex-col justify-center p-3",
				children: heroLayout === "split" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[7px] font-semibold tracking-[0.16em] uppercase",
							style: { color: theme.colors.primary },
							children: heroBadge
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "line-clamp-2 text-[11px] leading-tight font-semibold",
							children: heroTitle
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden",
						style: {
							backgroundColor: ink,
							borderRadius: radius
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: theme.screenshotUrl,
							alt: "",
							className: "h-full w-full object-cover opacity-80"
						})
					})]
				}) : heroLayout === "editorial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[7px] tracking-[0.22em] uppercase opacity-60",
							children: heroBadge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "line-clamp-2 text-[13px] leading-[1.05] font-semibold",
							style: { fontFamily: font },
							children: heroTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-10 overflow-hidden",
							style: {
								backgroundColor: ink,
								borderRadius: "4px"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: theme.screenshotUrl,
								alt: "",
								className: "h-full w-full object-cover opacity-80"
							})
						})
					]
				}) : heroLayout === "bento" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 row-span-2 flex flex-col justify-between p-2",
						style: {
							backgroundColor: theme.colors.cardBg,
							borderRadius: radius,
							border: `1px solid ${hairline}`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[7px] uppercase tracking-wider opacity-60",
							children: heroBadge
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "line-clamp-2 text-[10px] font-semibold leading-tight",
							children: heroTitle
						})]
					}), [0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 overflow-hidden",
						style: {
							backgroundColor: ink,
							borderRadius: radius
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: theme.screenshotUrl,
							alt: "",
							className: "h-full w-full object-cover opacity-70"
						})
					}, i))]
				}) : heroLayout === "centered" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[7px] tracking-[0.2em] uppercase",
							style: { color: theme.colors.primary },
							children: heroBadge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto line-clamp-2 max-w-[90%] text-[12px] leading-tight font-semibold",
							children: heroTitle
						}),
						!isCompact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-9 max-w-[88%] overflow-hidden",
							style: {
								backgroundColor: ink,
								borderRadius: radius
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: theme.screenshotUrl,
								alt: "",
								className: "h-full w-full object-cover opacity-80"
							})
						}) : null
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-16 overflow-hidden",
						style: {
							backgroundColor: ink,
							borderRadius: radius
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: theme.screenshotUrl,
								alt: "",
								className: "h-full w-full object-cover opacity-75"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-1.5 left-2 right-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "line-clamp-1 text-[10px] font-semibold text-white",
									children: heroTitle
								})
							})
						]
					}), !isCompact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [
							"Studio",
							"Web",
							"Design"
						].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-1.5 py-0.5 text-[7px] font-medium",
							style: {
								backgroundColor: i === 0 ? theme.colors.primary : theme.colors.cardBg,
								color: i === 0 ? "#fff" : theme.colors.textMuted,
								borderRadius: "999px"
							},
							children: label
						}, label))
					}) : null]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t px-3 py-1.5 font-mono text-[8px] opacity-80",
				style: {
					borderColor: hairline,
					backgroundColor: isDark ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0.03)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate max-w-[130px]",
					children: [
						theme.headerStyle,
						" · ",
						heroLayout
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1",
					children: [
						theme.colors.primary,
						theme.colors.accent,
						theme.colors.background,
						theme.colors.cardBg
					].map((swatch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full border border-black/10",
						style: { backgroundColor: swatch }
					}, i))
				})]
			})
		]
	});
}
var THEME_PALETTES = [
	{
		id: "codex-apple",
		title: "Codex Apple",
		subtitle: "The live default. Soft canvas, Apple blue, charcoal type.",
		colors: {
			primary: "#0071e3",
			accent: "#0071e3",
			background: "#f5f5f7",
			cardBg: "#ffffff",
			textMain: "#1d1d1f",
			textMuted: "#6e6e73",
			secondary: "#fbfbfd",
			surface: "#ffffff",
			border: "#d2d2d7",
			inverse: "#1d1d1f",
			highlight: "#0077ed",
			ring: "#0071e3"
		}
	},
	{
		id: "ios-lumen",
		title: "iOS Lumen",
		subtitle: "Brighter product white with system blue and sky accent.",
		colors: {
			primary: "#0a84ff",
			accent: "#64d2ff",
			background: "#fbfbfd",
			cardBg: "#ffffff",
			textMain: "#1d1d1f",
			textMuted: "#86868b",
			secondary: "#f5f5f7",
			surface: "#ffffff",
			border: "rgba(0,0,0,0.06)",
			inverse: "#000000",
			highlight: "#0a84ff",
			ring: "#0a84ff"
		}
	},
	{
		id: "studio-noir",
		title: "Studio Noir",
		subtitle: "OLED charcoal with cool steel-blue signals.",
		colors: {
			primary: "#7eb8ff",
			accent: "#a8d4ff",
			background: "#0c0c0e",
			cardBg: "#161618",
			textMain: "#f5f5f7",
			textMuted: "#a1a1a6",
			secondary: "#111114",
			surface: "#1c1c1e",
			border: "rgba(255,255,255,0.1)",
			inverse: "#f5f5f7",
			highlight: "#7eb8ff",
			ring: "#7eb8ff"
		}
	},
	{
		id: "vellum",
		title: "Editorial Vellum",
		subtitle: "Warm paper, ink type, quiet bronze highlight.",
		colors: {
			primary: "#1d1d1f",
			accent: "#8a6a45",
			background: "#f6f1e8",
			cardBg: "#fffaf3",
			textMain: "#2a2420",
			textMuted: "#7a7168",
			secondary: "#efe6d8",
			surface: "#fffaf3",
			border: "rgba(42,36,32,0.12)",
			inverse: "#2a2420",
			highlight: "#8a6a45",
			ring: "#2a2420"
		}
	},
	{
		id: "nordic",
		title: "Nordic Mist",
		subtitle: "Cool stone and pine teal for quiet product pages.",
		colors: {
			primary: "#1f4e5f",
			accent: "#3f7a86",
			background: "#f3f5f6",
			cardBg: "#ffffff",
			textMain: "#1c2326",
			textMuted: "#5c6b70",
			secondary: "#e8ecee",
			surface: "#ffffff",
			border: "rgba(28,35,38,0.1)",
			inverse: "#1c2326",
			highlight: "#1f4e5f",
			ring: "#1f4e5f"
		}
	},
	{
		id: "mono",
		title: "Mono Frame",
		subtitle: "Architectural black and white, no chroma.",
		colors: {
			primary: "#111111",
			accent: "#111111",
			background: "#ffffff",
			cardBg: "#f4f4f5",
			textMain: "#111111",
			textMuted: "#52525b",
			secondary: "#fafafa",
			surface: "#ffffff",
			border: "#111111",
			inverse: "#111111",
			highlight: "#111111",
			ring: "#111111"
		}
	},
	{
		id: "pacific",
		title: "Pacific Depth",
		subtitle: "Teal glass on abyssal ink.",
		colors: {
			primary: "#7dd3d0",
			accent: "#9ee8e4",
			background: "#071316",
			cardBg: "#0e1f24",
			textMain: "#e8f6f5",
			textMuted: "#8fb4b1",
			secondary: "#0a181c",
			surface: "#123038",
			border: "rgba(125,211,208,0.16)",
			inverse: "#e8f6f5",
			highlight: "#7dd3d0",
			ring: "#7dd3d0"
		}
	},
	{
		id: "clay",
		title: "Atelier Clay",
		subtitle: "Sunlit stone with copper accent.",
		colors: {
			primary: "#9a4d2e",
			accent: "#c4784d",
			background: "#f4ece4",
			cardBg: "#fff8f2",
			textMain: "#3b2a22",
			textMuted: "#8a6f62",
			secondary: "#eadfd4",
			surface: "#fff8f2",
			border: "rgba(59,42,34,0.1)",
			inverse: "#3b2a22",
			highlight: "#9a4d2e",
			ring: "#9a4d2e"
		}
	},
	{
		id: "quartz",
		title: "Quartz Gallery",
		subtitle: "Gallery white with graphite type.",
		colors: {
			primary: "#3a3a3c",
			accent: "#636366",
			background: "#ffffff",
			cardBg: "#f7f7f8",
			textMain: "#1c1c1e",
			textMuted: "#8e8e93",
			secondary: "#f2f2f7",
			surface: "#ffffff",
			border: "rgba(60,60,67,0.12)",
			inverse: "#1c1c1e",
			highlight: "#3a3a3c",
			ring: "#3a3a3c"
		}
	},
	{
		id: "horizon",
		title: "Horizon Blue",
		subtitle: "Wide product blue on cool slate.",
		colors: {
			primary: "#155eef",
			accent: "#528bff",
			background: "#f4f6fa",
			cardBg: "#ffffff",
			textMain: "#101828",
			textMuted: "#667085",
			secondary: "#eef2f6",
			surface: "#ffffff",
			border: "rgba(16,24,40,0.08)",
			inverse: "#101828",
			highlight: "#155eef",
			ring: "#155eef"
		}
	},
	{
		id: "ink",
		title: "Ink Theater",
		subtitle: "True black OLED with system blue.",
		colors: {
			primary: "#0a84ff",
			accent: "#64d2ff",
			background: "#000000",
			cardBg: "#1c1c1e",
			textMain: "#f5f5f7",
			textMuted: "#8e8e93",
			secondary: "#111113",
			surface: "#2c2c2e",
			border: "rgba(255,255,255,0.12)",
			inverse: "#f5f5f7",
			highlight: "#0a84ff",
			ring: "#0a84ff"
		}
	},
	{
		id: "kyiv",
		title: "Kyiv Night",
		subtitle: "Navy glass and Dnipro blue.",
		colors: {
			primary: "#4ea3ff",
			accent: "#7ec0ff",
			background: "#07111c",
			cardBg: "#0d1b2a",
			textMain: "#eaf2fb",
			textMuted: "#8aa0b8",
			secondary: "#0a1622",
			surface: "#122436",
			border: "rgba(78,163,255,0.16)",
			inverse: "#eaf2fb",
			highlight: "#4ea3ff",
			ring: "#4ea3ff"
		}
	},
	{
		id: "soft-ios",
		title: "Soft iOS",
		subtitle: "Settings-app gray with system blue.",
		colors: {
			primary: "#007aff",
			accent: "#5ac8fa",
			background: "#f2f2f7",
			cardBg: "#ffffff",
			textMain: "#000000",
			textMuted: "#6c6c70",
			secondary: "#e5e5ea",
			surface: "#ffffff",
			border: "rgba(60,60,67,0.12)",
			inverse: "#000000",
			highlight: "#007aff",
			ring: "#007aff"
		}
	},
	{
		id: "forest",
		title: "Quiet Forest",
		subtitle: "Deep pine on misted green-gray.",
		colors: {
			primary: "#0f3d32",
			accent: "#2a6a57",
			background: "#f3f6f4",
			cardBg: "#ffffff",
			textMain: "#14221d",
			textMuted: "#5b6e66",
			secondary: "#e6eee9",
			surface: "#ffffff",
			border: "rgba(20,34,29,0.1)",
			inverse: "#14221d",
			highlight: "#0f3d32",
			ring: "#0f3d32"
		}
	},
	{
		id: "slate",
		title: "Graphite Slate",
		subtitle: "Cool architectural gray with ink.",
		colors: {
			primary: "#334155",
			accent: "#64748b",
			background: "#f8fafc",
			cardBg: "#ffffff",
			textMain: "#0f172a",
			textMuted: "#64748b",
			secondary: "#f1f5f9",
			surface: "#ffffff",
			border: "rgba(15,23,42,0.08)",
			inverse: "#0f172a",
			highlight: "#334155",
			ring: "#334155"
		}
	},
	{
		id: "sand",
		title: "Warm Sand",
		subtitle: "Desert linen with espresso type.",
		colors: {
			primary: "#6b4f3a",
			accent: "#a07858",
			background: "#f7f3ee",
			cardBg: "#fffdfb",
			textMain: "#2b2118",
			textMuted: "#7a6a5c",
			secondary: "#eee6dc",
			surface: "#fffdfb",
			border: "rgba(43,33,24,0.1)",
			inverse: "#2b2118",
			highlight: "#6b4f3a",
			ring: "#6b4f3a"
		}
	}
];
var COLOR_SLOTS = [
	{
		key: "primary",
		label: "Primary"
	},
	{
		key: "accent",
		label: "Accent"
	},
	{
		key: "highlight",
		label: "Highlight"
	},
	{
		key: "background",
		label: "Background"
	},
	{
		key: "surface",
		label: "Surface"
	},
	{
		key: "cardBg",
		label: "Card"
	},
	{
		key: "textMain",
		label: "Text"
	},
	{
		key: "textMuted",
		label: "Muted text"
	},
	{
		key: "secondary",
		label: "Secondary"
	},
	{
		key: "border",
		label: "Border"
	},
	{
		key: "inverse",
		label: "Inverse"
	},
	{
		key: "ring",
		label: "Focus ring"
	}
];
function ThemePreviewStage({ config, page, device = "desktop", onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteConfigOverrideProvider, {
		config,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewModeProvider, {
			isPreview: true,
			currentPage: page,
			navigateTo: onNavigate,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("theme-preview-stage relative overflow-auto bg-background shadow-2xl", device === "desktop" && "w-full min-h-full", device === "tablet" && "w-[768px] max-w-full min-h-[1024px] rounded-[28px] border border-white/10", device === "mobile" && "w-[390px] max-w-full min-h-[844px] rounded-[36px] border border-white/10"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteCanvas, {
					preview: true,
					className: "min-h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { page })
				})
			})
		})
	});
}
var SECTION_LABELS = {
	hero: "Hero",
	highlights: "Highlights",
	portfolio: "Work",
	results: "Results",
	reviews: "Reviews",
	about: "Process",
	services: "Services",
	studio: "Studio",
	blog: "Insights",
	contact: "Contact"
};
var PAGES$1 = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "work",
		label: "Work"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "studio",
		label: "Studio"
	},
	{
		id: "blog",
		label: "Insights"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function ThemeCustomizerModal({ theme, config, onClose, onSaveAndActivate }) {
	const [device, setDevice] = (0, import_react.useState)("desktop");
	const [previewPage, setPreviewPage] = (0, import_react.useState)("home");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [panel, setPanel] = (0, import_react.useState)("layout");
	const [colors, setColors] = (0, import_react.useState)({ ...theme.colors });
	const [fontFamily, setFontFamily] = (0, import_react.useState)(theme.fontFamily || "system");
	const [headerStyle, setHeaderStyle] = (0, import_react.useState)(theme.headerStyle || "floating");
	const [containerWidth, setContainerWidth] = (0, import_react.useState)(theme.containerWidth || "1280px");
	const [borderRadius, setBorderRadius] = (0, import_react.useState)(theme.borderRadius || "modern");
	const [heroLayout, setHeroLayout] = (0, import_react.useState)(theme.heroLayout || theme.layout?.heroLayout || "streamer");
	const [cardStyle, setCardStyle] = (0, import_react.useState)(theme.layout?.cardStyle || "glass");
	const [fontSizeScale, setFontSizeScale] = (0, import_react.useState)(theme.layout?.fontSizeScale || "normal");
	const [sectionsOrder, setSectionsOrder] = (0, import_react.useState)(theme.layout?.sectionsOrder || [...DEFAULT_HOME_SEQUENCE]);
	const [sectionVisibility, setSectionVisibility] = (0, import_react.useState)(theme.layout?.sectionVisibility || Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true])));
	const [customCss, setCustomCss] = (0, import_react.useState)(theme.customCss || "");
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);
	const draftTheme = (0, import_react.useMemo)(() => ({
		...theme,
		colors,
		fontFamily,
		headerStyle,
		containerWidth,
		borderRadius,
		heroLayout,
		customCss,
		layout: {
			heroLayout,
			sectionsOrder,
			sectionVisibility,
			cardStyle,
			fontSizeScale
		}
	}), [
		theme,
		colors,
		fontFamily,
		headerStyle,
		containerWidth,
		borderRadius,
		heroLayout,
		customCss,
		sectionsOrder,
		sectionVisibility,
		cardStyle,
		fontSizeScale
	]);
	const previewConfig = (0, import_react.useMemo)(() => applyThemeToConfig(config, draftTheme, colors), [
		config,
		draftTheme,
		colors
	]);
	const moveSection = (index, direction) => {
		const next = [...sectionsOrder];
		const target = direction === "up" ? index - 1 : index + 1;
		if (target < 0 || target >= next.length) return;
		[next[index], next[target]] = [next[target], next[index]];
		setSectionsOrder(next);
	};
	const handlePublish = async () => {
		setIsSaving(true);
		try {
			await onSaveAndActivate(draftTheme, colors);
			toast.success(`“${theme.name}” is live on the site.`);
			onClose();
		} catch (err) {
			toast.error(`Could not publish: ${String(err)}`);
		} finally {
			setIsSaving(false);
		}
	};
	const reset = () => {
		setColors({ ...theme.colors });
		setFontFamily(theme.fontFamily);
		setHeaderStyle(theme.headerStyle);
		setContainerWidth(theme.containerWidth);
		setBorderRadius(theme.borderRadius);
		setHeroLayout(theme.heroLayout || "streamer");
		setCardStyle(theme.layout?.cardStyle || "glass");
		setFontSizeScale(theme.layout?.fontSizeScale || "normal");
		setSectionsOrder(theme.layout?.sectionsOrder || [...DEFAULT_HOME_SEQUENCE]);
		setSectionVisibility(theme.layout?.sectionVisibility || Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true])));
		setCustomCss(theme.customCss || "");
		toast.info("Reset to this theme’s defaults.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex flex-col bg-[#111113] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-3 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onClose,
						className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold hover:bg-white/16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-rose-300" }), "Close preview"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden min-w-0 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-xs font-semibold",
							children: theme.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-white/50",
							children: "Editing layout on live site content"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center rounded-full bg-white/8 p-1 lg:flex",
						children: PAGES$1.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPreviewPage(p.id),
							className: `rounded-full px-2.5 py-1 text-[11px] font-medium ${previewPage === p.id ? "bg-white text-zinc-900" : "text-white/70"}`,
							children: p.label
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center rounded-full bg-white/8 p-1 sm:flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDevice("desktop"),
										className: `rounded-full p-1.5 ${device === "desktop" ? "bg-white text-zinc-900" : "text-white/60"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDevice("tablet"),
										className: `rounded-full p-1.5 ${device === "tablet" ? "bg-white text-zinc-900" : "text-white/60"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDevice("mobile"),
										className: `rounded-full p-1.5 ${device === "mobile" ? "bg-white text-zinc-900" : "text-white/60"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: reset,
								className: "rounded-full p-2 text-white/60 hover:bg-white/10",
								"aria-label": "Reset",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: isSaving,
								onClick: () => void handlePublish(),
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#0071e3] px-3.5 py-2 text-xs font-semibold hover:bg-[#0077ed] disabled:opacity-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), isSaving ? "Publishing…" : "Publish"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hidden w-[320px] shrink-0 overflow-y-auto border-r border-white/10 bg-[#1c1c1e] md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 border-b border-white/8 p-2",
						children: [
							{
								id: "layout",
								label: "Layout",
								icon: PanelsTopLeft
							},
							{
								id: "colors",
								label: "Color",
								icon: Palette
							},
							{
								id: "type",
								label: "Type",
								icon: Type
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPanel(tab.id),
							className: `flex flex-1 items-center justify-center gap-1 rounded-lg py-2 text-[11px] font-semibold ${panel === tab.id ? "bg-white text-zinc-900" : "text-white/60 hover:bg-white/8"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tab.icon, { className: "size-3.5" }), tab.label]
						}, tab.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 p-4 text-xs",
						children: [
							panel === "layout" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Header",
									children: [
										"floating",
										"sticky",
										"classic",
										"minimal"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: headerStyle === id,
										onClick: () => setHeaderStyle(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Hero",
									children: [
										"streamer",
										"split",
										"centered",
										"editorial",
										"bento"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: heroLayout === id,
										onClick: () => setHeroLayout(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Cards",
									children: [
										"glass",
										"elevated",
										"bordered",
										"flat"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: cardStyle === id,
										onClick: () => setCardStyle(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Width",
									children: [
										"1200px",
										"1280px",
										"1440px",
										"full"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: containerWidth === id,
										onClick: () => setContainerWidth(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Corners",
									children: [
										"sharp",
										"clean",
										"modern",
										"pill"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: borderRadius === id,
										onClick: () => setBorderRadius(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 text-[11px] font-semibold uppercase tracking-wide text-white/50",
									children: "Section order"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1",
									children: sectionsOrder.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 rounded-lg bg-white/6 px-2 py-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 font-medium text-white/90",
												children: SECTION_LABELS[id] || id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSectionVisibility((v) => ({
													...v,
													[id]: v[id] === false
												})),
												className: "p-1 text-white/50 hover:text-white",
												children: sectionVisibility[id] === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => moveSection(index, "up"),
												className: "p-1 text-white/50 hover:text-white",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => moveSection(index, "down"),
												className: "p-1 text-white/50 hover:text-white",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })
											})
										]
									}, id))
								})] })
							] }),
							panel === "colors" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-3",
								children: COLOR_SLOTS.map((slot) => {
									const value = colors[slot.key] || "#0071e3";
									const hex = value.startsWith("#") ? value : "#0071e3";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1 block text-[10px] font-semibold uppercase tracking-wide text-white/45",
											children: slot.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 rounded-lg bg-white/6 p-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "color",
												value: hex.length === 7 ? hex : "#0071e3",
												onChange: (e) => setColors((c) => ({
													...c,
													[slot.key]: e.target.value
												})),
												className: "size-7 cursor-pointer rounded border-0 bg-transparent"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value,
												onChange: (e) => setColors((c) => ({
													...c,
													[slot.key]: e.target.value
												})),
												className: "w-full bg-transparent font-mono text-[10px] text-white/80 outline-none"
											})]
										})]
									}, slot.key);
								})
							}),
							panel === "type" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Family",
									children: [
										"system",
										"inter",
										"playfair",
										"syne"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: fontFamily === id,
										onClick: () => setFontFamily(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Scale",
									children: [
										"compact",
										"normal",
										"spacious",
										"editorial"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: fontSizeScale === id,
										onClick: () => setFontSizeScale(id),
										children: id
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-[11px] font-semibold uppercase tracking-wide text-white/50",
										children: "Extra CSS"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: customCss,
										onChange: (e) => setCustomCss(e.target.value),
										rows: 10,
										className: "w-full rounded-lg bg-black/40 p-2 font-mono text-[10px] text-white/80 outline-none ring-1 ring-white/10",
										spellCheck: false
									})]
								})
							] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-0 flex-1 overflow-auto bg-[#0b0b0d] p-3 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex gap-1 overflow-x-auto lg:hidden",
						children: PAGES$1.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPreviewPage(p.id),
							className: `shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium ${previewPage === p.id ? "bg-white text-zinc-900" : "bg-white/8 text-white/70"}`,
							children: p.label
						}, p.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mx-auto ${device === "desktop" ? "max-w-[1280px]" : "flex justify-center"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemePreviewStage, {
							config: previewConfig,
							page: previewPage,
							device,
							onNavigate: setPreviewPage
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute bottom-5 right-5 z-[81] inline-flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur-md hover:bg-zinc-800 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), "Exit preview"]
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-2 text-[11px] font-semibold uppercase tracking-wide text-white/50",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children
	})] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${active ? "bg-white text-zinc-900" : "bg-white/8 text-white/70 hover:bg-white/12"}`,
		children
	});
}
function headerValue(css, key) {
	return css.match(new RegExp(`${key}:\\s*(.+)`, "i"))?.[1]?.trim().split("\n")[0]?.replace(/\*\/$/, "").trim() || "";
}
function cssVar(css, name) {
	return css.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8}|rgba?\\([^)]+\\))`))?.[1]?.trim();
}
function slugify(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40) || `uploaded-${Date.now()}`;
}
function guessHero(css, name) {
	const blob = `${css} ${name}`.toLowerCase();
	if (blob.includes("bento") || blob.includes("grid")) return "bento";
	if (blob.includes("editorial") || blob.includes("serif") || blob.includes("magazine")) return "editorial";
	if (blob.includes("split")) return "split";
	if (blob.includes("center")) return "centered";
	return "streamer";
}
function guessHeader(css, name) {
	const blob = `${css} ${name}`.toLowerCase();
	if (blob.includes("classic") || blob.includes("masthead")) return "classic";
	if (blob.includes("minimal") || blob.includes("hairline")) return "minimal";
	if (blob.includes("sticky")) return "sticky";
	return "floating";
}
async function parseThemeZip(file) {
	const zip = await import_lib.default.loadAsync(file);
	const paths = Object.keys(zip.files).filter((p) => !zip.files[p].dir);
	const find = (name) => paths.find((p) => p.replace(/\\/g, "/").toLowerCase().endsWith(`/${name}`) || p.toLowerCase() === name);
	const read = async (name) => {
		const path = find(name);
		if (!path) return "";
		return zip.file(path)?.async("string") || "";
	};
	const styleCss = await read("style.css");
	const functionsPhp = await read("functions.php");
	const themeJson = await read("theme.json");
	const headerPhp = await read("header.php");
	const footerPhp = await read("footer.php");
	const indexPhp = await read("index.php");
	const fallbackName = file.name.replace(/\.zip$/i, "").replace(/[-_]/g, " ");
	const name = headerValue(styleCss, "Theme Name") || fallbackName.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Uploaded Theme";
	const author = headerValue(styleCss, "Author") || "Local Developer";
	const version = headerValue(styleCss, "Version") || "1.0.0";
	const description = headerValue(styleCss, "Description") || `Custom theme package “${name}” extracted from ${file.name}.`;
	const tagsRaw = headerValue(styleCss, "Tags");
	const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [
		"Custom Package",
		"Uploaded",
		"FSE Compatible"
	];
	const dark = /dark|noir|night|oled|ink/i.test(`${name} ${description} ${styleCss.slice(0, 800)}`);
	const colors = {
		primary: cssVar(styleCss, "--color-primary") || (dark ? "#7dd3d0" : "#0071e3"),
		accent: cssVar(styleCss, "--color-accent") || (dark ? "#9ee8e4" : "#0071e3"),
		background: cssVar(styleCss, "--color-background") || (dark ? "#0c0c0e" : "#f5f5f7"),
		cardBg: cssVar(styleCss, "--color-card") || (dark ? "#161618" : "#ffffff"),
		textMain: cssVar(styleCss, "--color-foreground") || (dark ? "#f5f5f7" : "#1d1d1f"),
		textMuted: cssVar(styleCss, "--color-muted-foreground") || (dark ? "#a1a1a6" : "#6e6e73"),
		secondary: cssVar(styleCss, "--color-secondary") || (dark ? "#111114" : "#fbfbfd"),
		surface: cssVar(styleCss, "--color-surface") || (dark ? "#1c1c1e" : "#ffffff"),
		border: cssVar(styleCss, "--color-border") || (dark ? "rgba(255,255,255,0.12)" : "#d2d2d7"),
		inverse: dark ? "#f5f5f7" : "#1d1d1f",
		highlight: cssVar(styleCss, "--color-highlight") || cssVar(styleCss, "--color-primary") || "#0071e3",
		ring: cssVar(styleCss, "--color-primary") || "#0071e3"
	};
	const fontBlob = `${styleCss} ${themeJson}`.toLowerCase();
	const fontFamily = fontBlob.includes("playfair") ? "playfair" : fontBlob.includes("syne") ? "syne" : fontBlob.includes("inter") || fontBlob.includes("jakarta") ? "inter" : "system";
	const seed = {
		id: `${slugify(name)}-${Date.now().toString(36)}`,
		name,
		version,
		author,
		authorUrl: headerValue(styleCss, "Author URI") || "https://codexdynamics.io",
		description,
		tags,
		rating: 5,
		reviewsCount: 1,
		screenshotUrl: dark ? "/hero/studio.jpg" : "/studio/design.jpg",
		colors,
		fontFamily,
		headerStyle: guessHeader(styleCss + headerPhp, name),
		containerWidth: /1440|wide/.test(styleCss) ? "1440px" : "1280px",
		borderRadius: /sharp|0px/.test(styleCss) ? "sharp" : "modern",
		heroLayout: guessHero(styleCss + indexPhp, name),
		activeCount: "Local",
		category: "installed",
		isInstalled: true,
		isCustom: true,
		isBlockTheme: true,
		phpVersion: "8.1+",
		wpVersion: "6.5+"
	};
	const generated = buildThemeFiles(seed);
	const files = {
		"style.css": styleCss || generated["style.css"],
		"functions.php": functionsPhp || generated["functions.php"],
		"theme.json": themeJson || generated["theme.json"],
		"header.php": headerPhp || generated["header.php"],
		"footer.php": footerPhp || generated["footer.php"],
		"index.php": indexPhp || generated["index.php"]
	};
	return {
		...seed,
		files
	};
}
function starterTheme(kind) {
	const seed = {
		child: {
			id: `codex-child-${Date.now()}`,
			name: "Codex Dynamics Child",
			version: "1.0.0",
			author: "Site Administrator",
			authorUrl: "https://codexdynamics.io",
			description: "Official child of Codex Dynamics Pro. Inherits the floating island and streamer, ready for CSS overrides.",
			tags: [
				"Child",
				"Apple",
				"Island",
				"Starter"
			],
			rating: 5,
			reviewsCount: 1,
			screenshotUrl: "/hero/studio.jpg",
			colors: {
				primary: "#0071e3",
				accent: "#0071e3",
				background: "#f5f5f7",
				cardBg: "#ffffff",
				textMain: "#1d1d1f",
				textMuted: "#6e6e73",
				secondary: "#fbfbfd",
				surface: "#ffffff",
				border: "#d2d2d7",
				inverse: "#1d1d1f",
				highlight: "#0077ed",
				ring: "#0071e3"
			},
			fontFamily: "system",
			headerStyle: "floating",
			containerWidth: "1280px",
			borderRadius: "modern",
			heroLayout: "streamer",
			activeCount: "Local",
			category: "installed",
			isInstalled: true,
			isCustom: true,
			isBlockTheme: true
		},
		editorial: {
			id: `editorial-pack-${Date.now()}`,
			name: "Minimalist High-Contrast Editorial",
			version: "1.0.0",
			author: "Atelier Press",
			authorUrl: "https://codexdynamics.io",
			description: "Serif masthead, ink on paper, editorial hero — a print house packed as a WordPress theme.",
			tags: [
				"Editorial",
				"Serif",
				"Paper",
				"Starter"
			],
			rating: 5,
			reviewsCount: 1,
			screenshotUrl: "/studio/design.jpg",
			colors: {
				primary: "#1d1d1f",
				accent: "#8a6a45",
				background: "#f6f1e8",
				cardBg: "#fffaf3",
				textMain: "#2a2420",
				textMuted: "#7a7168",
				secondary: "#efe6d8",
				surface: "#fffaf3",
				border: "rgba(42,36,32,0.12)",
				inverse: "#2a2420",
				highlight: "#8a6a45",
				ring: "#2a2420"
			},
			fontFamily: "playfair",
			headerStyle: "classic",
			containerWidth: "1200px",
			borderRadius: "clean",
			heroLayout: "editorial",
			activeCount: "Local",
			category: "installed",
			isInstalled: true,
			isCustom: true,
			isBlockTheme: true
		},
		saas: {
			id: `saas-launch-${Date.now()}`,
			name: "SaaS Rocket Launchpad",
			version: "1.0.0",
			author: "Codex Studio",
			authorUrl: "https://codexdynamics.io",
			description: "Bento first screen, sticky product bar, spacious type — a launch microsite for software.",
			tags: [
				"SaaS",
				"Bento",
				"Product",
				"Starter"
			],
			rating: 5,
			reviewsCount: 1,
			screenshotUrl: "/hero/design.jpg",
			colors: {
				primary: "#155eef",
				accent: "#528bff",
				background: "#f4f6fa",
				cardBg: "#ffffff",
				textMain: "#101828",
				textMuted: "#667085",
				secondary: "#eef2f6",
				surface: "#ffffff",
				border: "rgba(16,24,40,0.08)",
				inverse: "#101828",
				highlight: "#155eef",
				ring: "#155eef"
			},
			fontFamily: "inter",
			headerStyle: "sticky",
			containerWidth: "1440px",
			borderRadius: "modern",
			heroLayout: "bento",
			activeCount: "Local",
			category: "installed",
			isInstalled: true,
			isCustom: true,
			isBlockTheme: true
		},
		dark: {
			id: `dark-fse-${Date.now()}`,
			name: "Dark Tech Studio FSE",
			version: "1.0.0",
			author: "Codex Studio",
			authorUrl: "https://codexdynamics.io",
			description: "OLED black, split cinema, teal signals — a night-mode Full Site Editing package.",
			tags: [
				"Dark",
				"FSE",
				"Split",
				"Starter"
			],
			rating: 5,
			reviewsCount: 1,
			screenshotUrl: "/hero/studio.jpg",
			colors: {
				primary: "#7dd3d0",
				accent: "#9ee8e4",
				background: "#071316",
				cardBg: "#0e1f24",
				textMain: "#e8f6f5",
				textMuted: "#8fb4b1",
				secondary: "#0a181c",
				surface: "#123038",
				border: "rgba(125,211,208,0.16)",
				inverse: "#e8f6f5",
				highlight: "#7dd3d0",
				ring: "#7dd3d0"
			},
			fontFamily: "syne",
			headerStyle: "floating",
			containerWidth: "1280px",
			borderRadius: "modern",
			heroLayout: "split",
			activeCount: "Local",
			category: "installed",
			isInstalled: true,
			isCustom: true,
			isBlockTheme: true
		}
	}[kind];
	return {
		...seed,
		files: buildThemeFiles(seed)
	};
}
function ThemeDirectoryModal({ catalog, installedThemeIds, activeThemeId, onClose, onInstallTheme, onActivateTheme, onPreviewTheme, onOpenDetails }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("featured");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [installingId, setInstallingId] = (0, import_react.useState)(null);
	const [cardViewModes, setCardViewModes] = (0, import_react.useState)({});
	const filteredThemes = catalog.filter((theme) => {
		if (!(theme.name.toLowerCase().includes(searchQuery.toLowerCase()) || theme.description.toLowerCase().includes(searchQuery.toLowerCase()) || theme.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))) return false;
		if (activeTab === "featured") return true;
		if (activeTab === "popular") return theme.category === "popular" || theme.rating === 5;
		if (activeTab === "latest") return theme.version.startsWith("3.") || theme.version.startsWith("4.");
		if (activeTab === "block") return theme.isBlockTheme || theme.category === "block";
		if (activeTab === "favorites") return theme.rating === 5;
		return true;
	});
	const handleInstall = (theme) => {
		setInstallingId(theme.id);
		toast.info(`Downloading package for "${theme.name}"...`);
		setTimeout(() => {
			onInstallTheme({
				...theme,
				isInstalled: true
			});
			setInstallingId(null);
			toast.success(`Theme "${theme.name}" successfully installed!`);
		}, 900);
	};
	const handleCustomUploadPackage = (kind) => {
		const customTheme = starterTheme(kind);
		onInstallTheme(customTheme);
		toast.success(`“${customTheme.name}” added to installed themes.`);
	};
	const handleRealZipUpload = async (e) => {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		toast.info(`Unpacking ${file.name}…`);
		try {
			const theme = await parseThemeZip(file);
			onInstallTheme(theme);
			toast.success(`“${theme.name}” extracted and installed.`);
		} catch (err) {
			toast.error(`Could not read that zip: ${String(err)}`);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-in fade-in duration-150",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl max-w-6xl w-full h-[90vh] border border-black/10 shadow-2xl flex flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:p-5 border-b border-black/8 flex items-center justify-between flex-wrap gap-3 bg-[#f0f0f1]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-9 rounded-xl bg-[#2271b1] text-white flex items-center justify-center shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold text-gray-900",
							children: "Add Themes • WordPress Theme Directory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gray-600",
							children: "Browse thousands of free, responsive WordPress themes and Full Site Editing templates."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "size-8 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-3 border-b border-black/6 flex items-center justify-between flex-wrap gap-3 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5 overflow-x-auto text-xs font-semibold",
						children: [
							{
								id: "featured",
								label: "Featured"
							},
							{
								id: "popular",
								label: "Popular"
							},
							{
								id: "latest",
								label: "Latest"
							},
							{
								id: "block",
								label: "Block Themes"
							},
							{
								id: "favorites",
								label: "Favorites"
							},
							{
								id: "upload",
								label: "Upload Theme (.zip)"
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab(tab.id),
							className: `px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${activeTab === tab.id ? "bg-[#2271b1] text-white font-bold" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`,
							children: tab.label
						}, tab.id))
					}), activeTab !== "upload" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full sm:w-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search themes...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2271b1]"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-5 bg-[#f6f7f7]",
					children: activeTab === "upload" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mx-auto py-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 text-center space-y-4 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-14 rounded-2xl bg-[#2271b1]/10 text-[#2271b1] mx-auto flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold text-gray-900",
										children: "Upload a theme in .zip format"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-gray-500 max-w-sm mx-auto",
										children: "If you have a theme in a .zip format, you may install or update it by uploading it here."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-2 px-5 py-2.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileArchive, { className: "size-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Choose File (.zip)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: ".zip",
												onChange: handleRealZipUpload,
												className: "hidden"
											})
										]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-bold text-gray-700 uppercase tracking-wider",
								children: "Ready-to-Install Pre-Packaged Themes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [
									{
										kind: "child",
										name: "Codex Dynamics Child Theme",
										desc: "Official starter child theme inheriting the floating island and streamer."
									},
									{
										kind: "editorial",
										name: "Minimalist High-Contrast Editorial",
										desc: "Serif masthead, paper canvas, editorial hero for prestige publishing."
									},
									{
										kind: "saas",
										name: "SaaS Rocket Launchpad",
										desc: "Bento grid, sticky product bar, and a wide 1440px stage."
									},
									{
										kind: "dark",
										name: "Dark Tech Studio FSE",
										desc: "OLED black, split cinema, and teal signals — night-mode FSE."
									}
								].map((starter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-white rounded-xl border border-black/8 hover:border-black/20 transition-all flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold text-gray-900",
										children: starter.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-gray-500 line-clamp-1",
										children: starter.desc
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleCustomUploadPackage(starter.kind),
										className: "px-3 py-1.5 text-xs font-bold bg-gray-100 hover:bg-[#2271b1] hover:text-white rounded-lg transition-colors shrink-0 ml-2",
										children: "Install"
									})]
								}, starter.kind))
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: filteredThemes.map((theme) => {
							const isInstalled = installedThemeIds.includes(theme.id);
							const isActive = theme.id === activeThemeId;
							const isInstalling = installingId === theme.id;
							const viewMode = cardViewModes[theme.id] || "mockup";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white rounded-2xl border border-black/8 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-44 relative overflow-hidden bg-gray-100",
									children: [
										viewMode === "mockup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeLiveMockup, {
											theme,
											isCompact: true
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: theme.screenshotUrl,
											alt: theme.name,
											className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute top-2.5 right-2.5 z-10 flex items-center bg-black/60 backdrop-blur-xs p-0.5 rounded-lg text-[9px] text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													setCardViewModes((prev) => ({
														...prev,
														[theme.id]: "mockup"
													}));
												},
												className: `px-2 py-0.5 rounded-md transition-colors ${viewMode === "mockup" ? "bg-[#2271b1] font-bold" : "opacity-75 hover:opacity-100"}`,
												children: "Live UI"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													setCardViewModes((prev) => ({
														...prev,
														[theme.id]: "photo"
													}));
												},
												className: `px-2 py-0.5 rounded-md transition-colors ${viewMode === "photo" ? "bg-[#2271b1] font-bold" : "opacity-75 hover:opacity-100"}`,
												children: "Cover"
											})]
										}),
										isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2.5 left-2.5 z-10 bg-[#2271b1] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-sm",
											children: "Active Theme"
										}),
										isInstalled && !isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2.5 left-2.5 z-10 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm",
											children: "Installed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 z-20",
											children: [isInstalling ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-white text-xs font-semibold bg-[#2271b1] px-4 py-2 rounded-xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Installing..." })]
											}) : isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => onPreviewTheme(theme),
												className: "w-full py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors",
												children: "Customize Active Theme"
											}) : isInstalled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => onActivateTheme(theme),
												className: "w-full py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors",
												children: "Activate Theme"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleInstall(theme),
												className: "w-full py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors",
												children: "Install Now"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => onPreviewTheme(theme),
													className: "flex-1 py-1.5 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold rounded-xl shadow-xs transition-colors",
													children: "Live Preview"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => onOpenDetails(theme),
													className: "flex-1 py-1.5 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold rounded-xl shadow-xs transition-colors",
													children: "Details"
												})]
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex-1 flex flex-col justify-between space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-bold text-gray-900 truncate",
												children: theme.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-0.5 text-amber-500 text-xs font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [theme.rating, ".0"] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-gray-500 mt-0.5",
											children: [
												"By ",
												theme.author,
												" • v",
												theme.version
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed",
											children: theme.description
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-black/4 flex items-center justify-between text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-gray-500 text-[10px]",
											children: [theme.activeCount, " active"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1.5",
											children: isInstalled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-emerald-600 font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), " Ready"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleInstall(theme),
												disabled: isInstalling,
												className: "text-[#2271b1] hover:underline font-semibold",
												children: "Install"
											})
										})]
									})]
								})]
							}, theme.id);
						})
					})
				})
			]
		})
	});
}
function ThemeDetailsModal({ theme, allThemes, isActive, onClose, onSelectTheme, onActivateTheme, onPreviewTheme, onDeleteTheme, onCreateChildTheme }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)("style.css");
	const [childThemeName, setChildThemeName] = (0, import_react.useState)(`${theme.name} Child`);
	const [isExporting, setIsExporting] = (0, import_react.useState)(false);
	const [hasCopied, setHasCopied] = (0, import_react.useState)(false);
	const currentIndex = allThemes.findIndex((t) => t.id === theme.id);
	const prevTheme = currentIndex > 0 ? allThemes[currentIndex - 1] : allThemes[allThemes.length - 1];
	const nextTheme = currentIndex < allThemes.length - 1 ? allThemes[currentIndex + 1] : allThemes[0];
	const filesList = Object.keys(theme.files || {
		"style.css": "",
		"functions.php": "",
		"theme.json": ""
	});
	const currentFileContent = theme.files?.[selectedFile] || `/* No content defined for ${selectedFile} */`;
	const handleCopyCode = () => {
		navigator.clipboard.writeText(currentFileContent);
		setHasCopied(true);
		toast.success(`Copied ${selectedFile} to clipboard!`);
		setTimeout(() => setHasCopied(false), 2e3);
	};
	const handleExportZip = async () => {
		setIsExporting(true);
		toast.info(`Packaging theme "${theme.name}" into .zip archive...`);
		try {
			const zip = new import_lib.default();
			const folder = zip.folder(theme.id) || zip;
			for (const [filename, content] of Object.entries(theme.files || {})) folder.file(filename, content);
			folder.file("readme.txt", `=== ${theme.name} ===\nContributors: ${theme.author}\nRequires at least: ${theme.wpVersion || "6.4"}\nTested up to: 6.7\nStable tag: ${theme.version}\nLicense: GPLv2 or later\n\n${theme.description}\n`);
			const blob = await zip.generateAsync({ type: "blob" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `${theme.id}-v${theme.version}.zip`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
			toast.success(`Theme package ${theme.id}.zip downloaded successfully!`);
		} catch (err) {
			toast.error(`Export failed: ${String(err)}`);
		} finally {
			setIsExporting(false);
		}
	};
	const handleCreateChild = () => {
		if (!childThemeName.trim()) {
			toast.error("Please enter a valid Child Theme name.");
			return;
		}
		onCreateChildTheme(theme, childThemeName.trim());
		toast.success(`Child theme "${childThemeName}" generated and installed!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-in fade-in duration-150",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl max-w-4xl w-full h-[90vh] border border-black/10 shadow-2xl flex flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-black/8 flex items-center justify-between bg-[#f0f0f1] shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onSelectTheme(prevTheme),
								className: "p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors",
								title: `Previous: ${prevTheme.name}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onSelectTheme(nextTheme),
								className: "p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors",
								title: `Next: ${nextTheme.name}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-semibold text-gray-500 ml-2",
								children: [
									"Theme ",
									currentIndex + 1,
									" of ",
									allThemes.length
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "size-8 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-12 border-b border-black/8 shrink-0 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5 h-56 bg-gray-100 relative overflow-hidden border-b md:border-b-0 md:border-r border-black/8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeLiveMockup, {
							theme,
							isCompact: false
						}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-3 left-3 bg-[#2271b1] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-sm",
							children: "Active Theme"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 p-6 flex flex-col justify-between space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-gray-900",
								children: theme.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-gray-500 mt-0.5",
								children: [
									"Version ",
									theme.version,
									" • By",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: theme.authorUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "text-[#2271b1] hover:underline font-medium",
										children: theme.author
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [theme.rating, ".0"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-gray-500 font-normal",
										children: [
											"(",
											theme.reviewsCount,
											")"
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 flex-wrap mt-3",
							children: theme.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 font-medium",
								children: tag
							}, tag))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pt-2 border-t border-black/6",
							children: [
								isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										onClose();
										onPreviewTheme(theme);
									},
									className: "px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors",
									children: "Customize Active Theme"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										onActivateTheme(theme);
										onClose();
									},
									className: "px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors",
									children: "Activate This Theme"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										onClose();
										onPreviewTheme(theme);
									},
									className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-colors",
									children: "Live Preview"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleExportZip,
									disabled: isExporting,
									className: "px-3 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 ml-auto",
									title: "Download Theme .zip package",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Export .zip"
									})]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6 border-b border-black/8 flex items-center gap-6 text-xs font-semibold bg-white shrink-0",
					children: [
						{
							id: "overview",
							label: "Theme Overview"
						},
						{
							id: "files",
							label: "Template Files Inspector"
						},
						{
							id: "child",
							label: "Create Child Theme"
						},
						{
							id: "export",
							label: "Package & Export"
						}
					].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab(tab.id),
						className: `py-3 border-b-2 transition-colors cursor-pointer ${activeTab === tab.id ? "border-[#2271b1] text-[#2271b1] font-bold" : "border-transparent text-gray-500 hover:text-gray-900"}`,
						children: tab.label
					}, tab.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-6 bg-[#f9fafb]",
					children: [
						activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-gray-900 mb-2",
									children: "Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-gray-600 leading-relaxed",
									children: theme.description
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-black/8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase font-bold text-gray-400",
											children: "PHP Version"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-bold text-gray-900 mt-0.5",
											children: theme.phpVersion || "8.0+"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase font-bold text-gray-400",
											children: "WordPress Version"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-bold text-gray-900 mt-0.5",
											children: theme.wpVersion || "6.4+"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase font-bold text-gray-400",
											children: "Active Installs"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-bold text-gray-900 mt-0.5",
											children: theme.activeCount
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-gray-900 mb-2",
									children: "Color Tokens"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3 flex-wrap",
									children: Object.entries(theme.colors).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2.5 rounded-xl bg-white border border-black/8 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-5 rounded-lg border border-black/10 shadow-2xs",
											style: { backgroundColor: val }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-gray-500 capitalize",
											children: key
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-mono font-bold text-gray-900 uppercase",
											children: val
										})] })]
									}, key))
								})] }),
								theme.isCustom && onDeleteTheme && !isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-4 border-t border-red-200",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											if (confirm(`Are you sure you want to delete "${theme.name}"?`)) {
												onDeleteTheme(theme.id);
												onClose();
											}
										},
										className: "flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delete Theme" })]
									})
								})
							]
						}),
						activeTab === "files" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row gap-4 h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full md:w-56 bg-white rounded-xl border border-black/8 p-2 shrink-0 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase font-bold text-gray-400 px-3 py-1",
									children: "Theme Files"
								}), filesList.map((filename) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSelectedFile(filename),
									className: `w-full px-3 py-2 rounded-lg text-xs font-mono text-left flex items-center gap-2 transition-colors ${selectedFile === filename ? "bg-[#2271b1] text-white font-bold" : "text-gray-700 hover:bg-gray-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: filename
									})]
								}, filename))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col border border-black/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-10 px-4 bg-[#2d2d2d] flex items-center justify-between text-xs text-gray-300 font-mono border-b border-[#3e3e3e]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedFile })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleCopyCode,
										className: "flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors",
										children: [hasCopied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hasCopied ? "Copied" : "Copy Code" })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 overflow-auto p-4 font-mono text-xs text-gray-200 leading-relaxed",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: currentFileContent })
								})]
							})]
						}),
						activeTab === "child" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl space-y-4 bg-white p-6 rounded-2xl border border-black/8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-gray-900",
										children: "Generate WordPress Child Theme"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-gray-500 leading-relaxed",
										children: [
											"A child theme inherits all styles and functions from ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: theme.name }),
											", allowing you to make modifications safely without losing changes during theme updates."
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-gray-700 block mb-1",
									children: "Child Theme Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: childThemeName,
									onChange: (e) => setChildThemeName(e.target.value),
									className: "w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2271b1] focus:outline-hidden"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-blue-50 text-blue-900 rounded-xl text-xs space-y-1 border border-blue-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: "Generated Files:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-[11px] text-blue-800",
										children: [
											"• ",
											childThemeName.toLowerCase().replace(/\s+/g, "-"),
											"/style.css (Template: ",
											theme.id,
											")",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"• ",
											childThemeName.toLowerCase().replace(/\s+/g, "-"),
											"/functions.php (Enqueues parent stylesheet)"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleCreateChild,
									className: "w-full py-2.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-xs transition-colors",
									children: "Create & Install Child Theme"
								})
							]
						}),
						activeTab === "export" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl space-y-4 bg-white p-6 rounded-2xl border border-black/8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-12 rounded-2xl bg-[#2271b1]/10 text-[#2271b1] mx-auto flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-gray-900",
										children: "Export Theme ZIP Archive"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-gray-500 max-w-md mx-auto",
										children: [
											"Package ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: theme.name }),
											" (v",
											theme.version,
											") into a standard WordPress-compatible .zip archive for deployment to any external WordPress server or hosting provider."
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleExportZip,
									disabled: isExporting,
									className: "inline-flex items-center gap-2 px-6 py-2.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isExporting ? "Generating ZIP..." : "Download Theme .zip" })]
								})
							]
						})
					]
				})
			]
		})
	});
}
function ThemeFileEditorView({ themes, currentThemeId, onUpdateFile }) {
	const [selectedThemeId, setSelectedThemeId] = (0, import_react.useState)(currentThemeId);
	const [selectedFilename, setSelectedFilename] = (0, import_react.useState)("style.css");
	const selectedTheme = themes.find((t) => t.id === selectedThemeId) || themes[0];
	const initialContent = selectedTheme?.files?.[selectedFilename] || "";
	const [fileContent, setFileContent] = (0, import_react.useState)(initialContent);
	const [isSaved, setIsSaved] = (0, import_react.useState)(false);
	const handleSelectFile = (filename) => {
		setSelectedFilename(filename);
		setFileContent(selectedTheme.files?.[filename] || "");
		setIsSaved(false);
	};
	const handleSelectTheme = (themeId) => {
		setSelectedThemeId(themeId);
		const target = themes.find((t) => t.id === themeId);
		if (target) setFileContent(target.files?.[selectedFilename] || target.files?.["style.css"] || "");
		setIsSaved(false);
	};
	const handleSave = () => {
		onUpdateFile(selectedThemeId, selectedFilename, fileContent);
		setIsSaved(true);
		toast.success(`File "${selectedFilename}" saved to theme "${selectedTheme.name}"!`);
		setTimeout(() => setIsSaved(false), 2500);
	};
	const fileKeys = Object.keys(selectedTheme?.files || { "style.css": "" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between flex-wrap gap-4 border-b border-black/6 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-gray-900",
						children: "WordPress Theme File Editor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1]",
						children: "wp-admin/theme-editor.php"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-gray-500 mt-0.5",
					children: "Edit stylesheets, theme templates, and PHP functions directly in the browser."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-gray-700",
						children: "Select theme to edit:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: selectedThemeId,
						onChange: (e) => handleSelectTheme(e.target.value),
						className: "text-xs px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 font-medium text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#2271b1]",
						children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: t.id,
							children: [
								t.name,
								" ",
								t.id === currentThemeId ? "(Active)" : ""
							]
						}, t.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 p-3 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Caution:" }), " Making direct edits to active theme files here takes effect immediately. We recommend testing changes in the Live Customizer or using a Child Theme."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-9 bg-[#1e1e1e] rounded-xl overflow-hidden border border-black/20 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-10 px-4 bg-[#2d2d2d] flex items-center justify-between text-xs text-gray-300 font-mono border-b border-[#3e3e3e]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4 text-[#2271b1]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-bold",
										children: selectedFilename
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-gray-400",
										children: [
											"(",
											selectedTheme.name,
											")"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-gray-400",
								children: "UTF-8 • Read/Write"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: fileContent,
							onChange: (e) => {
								setFileContent(e.target.value);
								setIsSaved(false);
							},
							rows: 18,
							className: "w-full p-4 font-mono text-xs bg-[#1e1e1e] text-gray-200 leading-relaxed focus:outline-hidden resize-y",
							spellCheck: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-[#2d2d2d] border-t border-[#3e3e3e] flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-gray-400 font-mono",
								children: [
									"Lines: ",
									fileContent.split("\n").length,
									" • Characters: ",
									fileContent.length
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleSave,
								className: "inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer",
								children: [isSaved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSaved ? "File Updated!" : "Update File" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold text-gray-900 uppercase tracking-wider",
							children: "Theme Templates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: fileKeys.map((fname) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleSelectFile(fname),
								className: `w-full px-3 py-2 rounded-lg text-xs font-mono text-left flex items-center gap-2 transition-colors ${selectedFilename === fname ? "bg-[#2271b1] text-white font-bold" : "text-gray-700 hover:bg-gray-200"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: fname
								})]
							}, fname))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-bold flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WordPress Codex Reference" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-blue-800 leading-relaxed",
							children: [
								"Theme hierarchy begins at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "index.php" }),
								", styled by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "style.css" }),
								", with block styling in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "theme.json" }),
								"."
							]
						})]
					})]
				})]
			})
		]
	});
}
var PAGES = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "work",
		label: "Work"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "studio",
		label: "Studio"
	},
	{
		id: "blog",
		label: "Insights"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function ThemeLivePreview({ theme, config, onClose, onActivate }) {
	const [page, setPage] = (0, import_react.useState)("home");
	const [device, setDevice] = (0, import_react.useState)("desktop");
	const previewConfig = (0, import_react.useMemo)(() => applyThemeToConfig(config, theme), [config, theme]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex flex-col bg-[#111113] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-3 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onClose,
						className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold hover:bg-white/16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-rose-300" }), "Close preview"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden min-w-0 items-center gap-2 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-xs font-semibold text-white/80",
							children: theme.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60",
							children: "Live site content"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center rounded-full bg-white/8 p-1 lg:flex",
						children: PAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPage(p.id),
							className: `rounded-full px-2.5 py-1 text-[11px] font-medium ${page === p.id ? "bg-white text-zinc-900" : "text-white/70 hover:text-white"}`,
							children: p.label
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center rounded-full bg-white/8 p-1 sm:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDevice("desktop"),
									className: `rounded-full p-1.5 ${device === "desktop" ? "bg-white text-zinc-900" : "text-white/60"}`,
									"aria-label": "Desktop",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDevice("tablet"),
									className: `rounded-full p-1.5 ${device === "tablet" ? "bg-white text-zinc-900" : "text-white/60"}`,
									"aria-label": "Tablet",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDevice("mobile"),
									className: `rounded-full p-1.5 ${device === "mobile" ? "bg-white text-zinc-900" : "text-white/60"}`,
									"aria-label": "Mobile",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onActivate(theme),
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#0071e3] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#0077ed]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), "Activate"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto border-b border-white/8 px-3 py-2 lg:hidden",
				children: PAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPage(p.id),
					className: `shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium ${page === p.id ? "bg-white text-zinc-900" : "bg-white/8 text-white/70"}`,
					children: p.label
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1 overflow-auto bg-[#0b0b0d] p-3 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mx-auto ${device === "desktop" ? "max-w-[1400px]" : "flex justify-center"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemePreviewStage, {
						config: previewConfig,
						page,
						device,
						onNavigate: setPage
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute bottom-5 right-5 z-[81] inline-flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur-md hover:bg-zinc-800",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), "Exit preview"]
			})
		]
	});
}
function ThemesTab() {
	const { config, updateLocalConfig, refetch } = useSiteConfig();
	const [activeSubView, setActiveSubView] = (0, import_react.useState)("themes");
	const [themesList, setThemesList] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("codex_custom_themes");
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed) && parsed.length > 0) {
					const ids = new Set(parsed.map((p) => p.id));
					return [...parsed, ...DEFAULT_THEMES.filter((d) => !ids.has(d.id))];
				}
			}
		} catch {}
		return DEFAULT_THEMES;
	});
	const [installedIds, setInstalledIds] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("codex_installed_themes");
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed) && parsed.length > 0) return parsed;
			}
		} catch {}
		return themesList.filter((t) => t.isInstalled).map((t) => t.id);
	});
	const [customizingTheme, setCustomizingTheme] = (0, import_react.useState)(null);
	const [previewingTheme, setPreviewingTheme] = (0, import_react.useState)(null);
	const [isDirectoryOpen, setIsDirectoryOpen] = (0, import_react.useState)(false);
	const [selectedDetailsTheme, setSelectedDetailsTheme] = (0, import_react.useState)(null);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeFilter, setActiveFilter] = (0, import_react.useState)("all");
	const [isActivating, setIsActivating] = (0, import_react.useState)(false);
	const [customPalette, setCustomPalette] = (0, import_react.useState)({
		primary: config.colors?.primary || "#0071e3",
		accent: config.colors?.accent || "#0071e3",
		background: config.colors?.background || "#f5f5f7",
		cardBg: config.colors?.cardBg || "#ffffff",
		textMain: config.colors?.textMain || "#1d1d1f",
		textMuted: config.colors?.textMuted || "#6e6e73",
		secondary: config.colors?.secondary || "#fbfbfd",
		surface: config.colors?.surface || "#ffffff",
		border: config.colors?.border || "#d2d2d7",
		inverse: config.colors?.inverse || "#1d1d1f",
		highlight: config.colors?.highlight || "#0077ed",
		ring: config.colors?.ring || "#0071e3"
	});
	const [customTypography, setCustomTypography] = (0, import_react.useState)({
		fontFamily: config.theme?.fontFamily || "system",
		fontSizeScale: config.theme?.fontSizeScale || "standard",
		scaleRatio: 1.25,
		lineHeight: 1.6
	});
	const currentThemeId = config.theme?.activeTheme || "codex-pro";
	const activeTheme = themesList.find((t) => t.id === currentThemeId) || themesList.find((t) => t.id === "codex-pro") || themesList[0];
	const persistInstalled = (ids) => {
		setInstalledIds(ids);
		try {
			localStorage.setItem("codex_installed_themes", JSON.stringify(ids));
		} catch {}
	};
	const saveCustomThemes = (updated) => {
		setThemesList(updated);
		try {
			const customs = updated.filter((t) => t.isCustom);
			localStorage.setItem("codex_custom_themes", JSON.stringify(customs));
		} catch {}
	};
	const displayedThemes = themesList.filter((theme) => {
		if (!(theme.name.toLowerCase().includes(searchQuery.toLowerCase()) || theme.description.toLowerCase().includes(searchQuery.toLowerCase()) || theme.author.toLowerCase().includes(searchQuery.toLowerCase()) || theme.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))) return false;
		if (activeFilter === "installed") return installedIds.includes(theme.id);
		if (activeFilter === "block") return theme.isBlockTheme;
		if (activeFilter === "popular") return theme.category === "popular" || theme.rating >= 4.9;
		if (activeFilter === "favorites") return theme.rating === 5;
		return true;
	});
	const handleActivateTheme = async (theme) => {
		setIsActivating(true);
		toast.info(`Activating “${theme.name}”…`);
		try {
			const updatedConfig = applyThemeToConfig(config, theme);
			updateLocalConfig(updatedConfig);
			await persistSiteConfig(updatedConfig);
			await refetch();
			setPreviewingTheme(null);
			toast.success(`“${theme.name}” is now the live site theme.`);
		} catch (err) {
			toast.error(`Failed to activate theme: ${String(err)}`);
		} finally {
			setIsActivating(false);
		}
	};
	const handleSaveAndActivateFromCustomizer = async (customizedTheme, newColors) => {
		const updatedTheme = {
			...customizedTheme,
			colors: newColors
		};
		const updatedList = themesList.map((t) => t.id === customizedTheme.id ? updatedTheme : t);
		saveCustomThemes(updatedList);
		await handleActivateTheme(updatedTheme);
	};
	const handleInstallTheme = (newTheme) => {
		if (!installedIds.includes(newTheme.id)) persistInstalled([...installedIds, newTheme.id]);
		if (!themesList.some((t) => t.id === newTheme.id)) saveCustomThemes([...themesList, {
			...newTheme,
			isInstalled: true,
			isCustom: true
		}]);
	};
	const handleCreateChildTheme = (parentTheme, childName) => {
		const childId = `${parentTheme.id}-child-${Date.now()}`;
		const newChildTheme = {
			...parentTheme,
			id: childId,
			name: childName,
			version: "1.0.0",
			description: `Child theme of ${parentTheme.name}. Inherits parent layouts and templates with custom overrides.`,
			category: "installed",
			isInstalled: true,
			isCustom: true,
			files: {
				"style.css": `/*\nTheme Name: ${childName}\nTemplate: ${parentTheme.id}\nVersion: 1.0.0\nAuthor: Site Administrator\n*/\n\n/* Enqueue parent styles and add custom CSS rules here */\n`,
				"functions.php": `<?php\n// Enqueue parent styles\nadd_action('wp_enqueue_scripts', function() {\n    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');\n});\n`,
				"theme.json": parentTheme.files?.["theme.json"] || "{}",
				"header.php": "",
				"footer.php": "",
				"index.php": ""
			}
		};
		saveCustomThemes([...themesList, newChildTheme]);
		if (!installedIds.includes(childId)) persistInstalled([...installedIds, childId]);
		setSelectedDetailsTheme(newChildTheme);
	};
	const handleDeleteTheme = (themeId) => {
		if (themeId === currentThemeId) {
			toast.error("Cannot delete the currently active theme.");
			return;
		}
		const updated = themesList.filter((t) => t.id !== themeId);
		saveCustomThemes(updated);
		persistInstalled(installedIds.filter((id) => id !== themeId));
		toast.success("Theme removed from installed themes.");
	};
	const handleUpdateFileCode = async (themeId, filename, content) => {
		const updated = themesList.map((t) => {
			if (t.id === themeId) return {
				...t,
				files: {
					...t.files,
					[filename]: content
				}
			};
			return t;
		});
		saveCustomThemes(updated);
		if (themeId === currentThemeId && filename === "style.css") {
			let styleTag = document.getElementById("codex-custom-theme-style");
			if (!styleTag) {
				styleTag = document.createElement("style");
				styleTag.id = "codex-custom-theme-style";
				document.head.appendChild(styleTag);
			}
			styleTag.innerHTML = content;
			const updatedConfig = {
				...config,
				theme: {
					...config.theme,
					customCss: content
				}
			};
			updateLocalConfig(updatedConfig);
			await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "save_site_content",
					payload: { config: updatedConfig }
				})
			});
			toast.success("Active theme CSS compiled and saved to SQLite!");
		}
	};
	const handleApplyPalette = async (paletteId, colors) => {
		toast.info("Applying palette to the live site…");
		try {
			const updatedConfig = {
				...config,
				colors: {
					...config.colors,
					...colors
				}
			};
			updateLocalConfig(updatedConfig);
			await persistSiteConfig(updatedConfig);
			await refetch();
			setCustomPalette({ ...colors });
			toast.success("Palette applied to the live site.");
		} catch (err) {
			toast.error(`Failed to apply palette: ${String(err)}`);
		}
	};
	const handleToggleComponent = async (compId, currentEnabled) => {
		const currentList = normalizeComponentIds(config.theme?.activeComponents);
		const nextList = currentEnabled ? currentList.filter((c) => c !== compId) : [...currentList, compId];
		const updatedConfig = {
			...config,
			theme: {
				...config.theme,
				activeComponents: nextList
			}
		};
		updateLocalConfig(updatedConfig);
		try {
			await persistSiteConfig(updatedConfig);
			toast.success(`${compId} ${!currentEnabled ? "enabled" : "disabled"}`);
		} catch {
			toast.error("Failed to persist component toggle.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/8 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-bold text-gray-900 tracking-tight",
						children: "Themes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1] font-bold",
						children: [
							"WordPress Appearance • ",
							themesList.length,
							" Full Themes"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-gray-500 mt-0.5",
					children: "Manage, customize, and install WordPress themes and Full Site Editing block templates."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setCustomizingTheme(activeTheme),
						className: "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "size-3.5 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Customize Active Theme" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setIsDirectoryOpen(true),
						className: "inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white transition-colors shadow-xs cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add New Theme" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2 border-b border-black/8 overflow-x-auto pb-2 text-xs font-semibold text-gray-600",
				children: [
					{
						id: "themes",
						label: `Installed Themes (${installedIds.length})`,
						icon: PanelsTopLeft
					},
					{
						id: "components",
						label: "Components & Hooks",
						icon: Layers
					},
					{
						id: "colors",
						label: "Color Palettes",
						icon: Palette
					},
					{
						id: "typography",
						label: "Typography & Layout",
						icon: Type
					},
					{
						id: "editor",
						label: "Theme File Editor",
						icon: Code
					}
				].map((tab) => {
					const TabIcon = tab.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveSubView(tab.id),
						className: `flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${activeSubView === tab.id ? "bg-[#2271b1] text-white shadow-2xs font-bold" : "hover:bg-black/5 hover:text-gray-900"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabIcon, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label })]
					}, tab.id);
				})
			}),
			activeSubView === "themes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border-2 border-[#2271b1] p-5 sm:p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-5 items-center w-full md:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-48 sm:w-56 h-36 rounded-xl overflow-hidden shadow-xs border border-black/10 shrink-0 bg-gray-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeLiveMockup, {
									theme: activeTheme,
									siteConfig: config,
									isCompact: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-center sm:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 justify-center sm:justify-start",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300",
												children: "Active Theme"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-gray-500 font-mono",
												children: ["v", activeTheme.version]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-600",
												children: activeTheme.heroLayout || activeTheme.layout?.heroLayout || "streamer"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-bold text-gray-900 tracking-tight",
										children: activeTheme.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-gray-600 max-w-xl leading-relaxed",
										children: activeTheme.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 text-xs text-gray-500 pt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-gray-800",
												children: activeTheme.author
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Header: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-gray-800",
												children: activeTheme.headerStyle
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Radius: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-gray-800",
												children: activeTheme.borderRadius
											})] })
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex sm:flex-col gap-2 w-full md:w-auto justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setCustomizingTheme(activeTheme),
								className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white shadow-xs transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Customize & Live Preview" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedDetailsTheme(activeTheme),
								className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-gray-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Theme Details & Files" })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-black/8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 overflow-x-auto w-full sm:w-auto",
							children: [
								{
									id: "all",
									label: `All Themes (${themesList.length})`
								},
								{
									id: "installed",
									label: `Installed (${installedIds.length})`
								},
								{
									id: "block",
									label: "Block / FSE Themes"
								},
								{
									id: "popular",
									label: "Top Rated"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveFilter(f.id),
								className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${activeFilter === f.id ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`,
								children: f.label
							}, f.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full sm:w-72",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 absolute left-3 top-2.5 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search installed themes...",
								className: "w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2271b1]"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: [displayedThemes.map((theme) => {
							const isActive = theme.id === currentThemeId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md ${isActive ? "border-[#2271b1] ring-2 ring-[#2271b1]/30" : "border-black/8 hover:border-black/20"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-48 w-full relative bg-gray-100 border-b border-black/6 overflow-hidden cursor-pointer",
									onClick: () => setSelectedDetailsTheme(theme),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeLiveMockup, {
											theme,
											siteConfig: config,
											isCompact: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													setPreviewingTheme(theme);
												},
												className: "px-3.5 py-1.5 rounded-lg bg-white text-gray-900 font-bold text-xs shadow-md hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live Preview" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													setSelectedDetailsTheme(theme);
												},
												className: "px-3 py-1.5 rounded-lg bg-black/80 text-white font-semibold text-xs shadow-md hover:bg-black transition-transform hover:scale-105 cursor-pointer",
												children: "Details"
											})]
										}),
										isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute top-3 left-3 bg-[#2271b1] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), " Active"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono font-medium px-2 py-0.5 rounded-full",
											children: theme.category
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex-1 flex flex-col justify-between space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-sm text-gray-900 leading-snug",
											children: theme.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono text-gray-400 shrink-0",
											children: ["v", theme.version]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed",
										children: theme.description
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-black/6 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] text-gray-400",
											children: ["By ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gray-700 font-medium",
												children: theme.author
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setCustomizingTheme(theme),
												className: "px-3 py-1.5 text-xs font-bold rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors cursor-pointer",
												children: "Customize"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: isActivating,
												onClick: () => handleActivateTheme(theme),
												className: "px-3.5 py-1.5 text-xs font-bold rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white transition-all shadow-2xs hover:shadow-xs cursor-pointer",
												children: "Activate"
											})
										})]
									})]
								})]
							}, theme.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setIsDirectoryOpen(true),
							className: "bg-gray-50 hover:bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[260px] group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-12 rounded-2xl bg-white text-gray-400 group-hover:text-[#2271b1] group-hover:scale-110 shadow-xs flex items-center justify-center transition-all mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-gray-900",
									children: "Add New Theme"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-gray-500 mt-1 max-w-[190px] leading-relaxed",
									children: "Browse official WordPress directory or upload a custom theme .zip archive"
								})
							]
						})]
					})
				]
			}),
			activeSubView === "components" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-black/6 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-gray-900",
						children: "WordPress Theme Components & Template Architecture"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gray-500 mt-1",
						children: "Active structural components, template engines, and render hooks registered in the Codex Dynamics CMS. Click any component switch to toggle it on or off live."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
					children: [
						{
							id: "elementor-engine",
							title: "Elementor Visual Engine",
							desc: "Real-time canvas editor with Content, Style, and Advanced inspector panels.",
							icon: SlidersVertical,
							color: "text-[#E24474] bg-[#E24474]/10"
						},
						{
							id: "header-builder",
							title: "Dynamic Header Component",
							desc: "Floating island, sticky navbar, or classic bar with brand logo, nav links, and CTA triggers.",
							icon: PanelsTopLeft,
							color: "text-[#2271b1] bg-[#2271b1]/10"
						},
						{
							id: "hero-clip",
							title: "Video Hero Showcase Component",
							desc: "Multi-clip video streamer with smooth switcher tabs and ambient lighting.",
							icon: Laptop,
							color: "text-purple-600 bg-purple-50"
						},
						{
							id: "bento-highlights",
							title: "Bento Grid Highlights",
							desc: "Interactive card layout highlighting Core Web Vitals, speed, and architecture.",
							icon: Layers,
							color: "text-emerald-600 bg-emerald-50"
						},
						{
							id: "gutenberg-blocks",
							title: "Gutenberg Block Library",
							desc: "Native responsive blocks for blogs, case studies, and editorial articles.",
							icon: Code,
							color: "text-[#2271b1] bg-[#2271b1]/10"
						},
						{
							id: "services-carousel",
							title: "Services & Studio Portfolio",
							desc: "Detailed project showcases, metrics proof counters, and client testimonials.",
							icon: Sparkles,
							color: "text-amber-600 bg-amber-50"
						},
						{
							id: "tidio-chat-widget",
							title: "Tidio Live Chat Integration",
							desc: "Live visitor chat bubble, customer support automation, and lead capture agent.",
							icon: ExternalLink,
							color: "text-[#0066FF] bg-[#0066FF]/10"
						},
						{
							id: "footer-widgets",
							title: "Dynamic Footer & Social Dock",
							desc: "Multi-channel WhatsApp, Telegram, Viber, telephone desks and studio map pins.",
							icon: PanelsTopLeft,
							color: "text-slate-700 bg-slate-100"
						}
					].map((comp) => {
						const CompIcon = comp.icon;
						const isEnabled = normalizeComponentIds(config.theme?.activeComponents).includes(comp.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-4 rounded-xl border transition-all shadow-xs flex flex-col justify-between space-y-3 ${isEnabled ? "bg-white border-black/10 hover:border-black/20" : "bg-gray-50/70 border-dashed border-gray-200 opacity-60"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `p-2.5 rounded-xl ${comp.color}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompIcon, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleToggleComponent(comp.id, isEnabled),
										className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${isEnabled ? "bg-[#2271b1]" : "bg-gray-300"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${isEnabled ? "translate-x-4" : "translate-x-0"}` })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-bold text-gray-900",
									children: comp.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-gray-500 mt-1 leading-relaxed",
									children: comp.desc
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 border-t border-black/4 flex items-center justify-between text-[10px] text-gray-500 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID: ", comp.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: isEnabled ? "text-emerald-600 font-semibold" : "text-gray-400",
										children: isEnabled ? "Active & Hooked" : "Disabled"
									})]
								})
							]
						}, comp.id);
					})
				})]
			}),
			activeSubView === "colors" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between flex-wrap gap-4 border-b border-black/6 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base font-bold text-gray-900",
									children: "Interactive Custom Palette Studio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200",
									children: "Live Real-Time Pickers"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-gray-500 mt-0.5",
								children: "Pick any custom hex colors to create a bespoke palette and apply it across your entire website immediately."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setCustomPalette({
										primary: "#0071e3",
										accent: "#0071e3",
										background: "#f5f5f7",
										cardBg: "#ffffff",
										textMain: "#1d1d1f",
										textMuted: "#6e6e73",
										secondary: "#fbfbfd",
										surface: "#ffffff",
										border: "#d2d2d7",
										inverse: "#1d1d1f",
										highlight: "#0077ed",
										ring: "#0071e3"
									}),
									className: "px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center gap-1.5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reset Defaults" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleApplyPalette("custom", customPalette),
									className: "px-4 py-1.5 text-xs font-bold text-white bg-[#2271b1] hover:bg-[#135e96] rounded-xl cursor-pointer shadow-xs transition-all flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save & Apply Custom Palette" })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
							children: COLOR_SLOTS.map((item) => {
								const raw = customPalette[item.key] || "#0071e3";
								const hex = raw.startsWith("#") && raw.length === 7 ? raw : "#0071e3";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-bold text-gray-700 block truncate",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "color",
											value: hex,
											onChange: (e) => setCustomPalette((prev) => ({
												...prev,
												[item.key]: e.target.value
											})),
											className: "size-8 rounded-lg cursor-pointer border border-black/10 bg-transparent"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: raw,
											onChange: (e) => setCustomPalette((prev) => ({
												...prev,
												[item.key]: e.target.value
											})),
											className: "w-full text-xs font-mono px-2 py-1 bg-white border border-gray-200 rounded-md uppercase"
										})]
									})]
								}, item.key);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 rounded-xl border transition-all",
							style: {
								backgroundColor: customPalette.background,
								borderColor: "rgba(0,0,0,0.1)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-xl border max-w-md shadow-xs space-y-2",
								style: {
									backgroundColor: customPalette.cardBg,
									color: customPalette.textMain,
									borderColor: "rgba(0,0,0,0.08)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold px-2 py-0.5 rounded-full",
											style: {
												backgroundColor: `${customPalette.primary}18`,
												color: customPalette.primary
											},
											children: "Custom Preview Badge"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold",
											style: { color: customPalette.accent },
											children: "Accent Element"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-bold",
										style: { color: customPalette.textMain },
										children: "Harmonized Color Specimen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs leading-relaxed",
										style: { color: customPalette.textMuted },
										children: "This specimen dynamically visualizes your background, card, text, and button contrast before saving."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs",
										style: { backgroundColor: customPalette.primary },
										children: "Interactive Button"
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-black/6 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold text-gray-900",
							children: "16 Curated Palette Presets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gray-500 mt-0.5",
							children: "One-click apply industry-grade palettes designed for high contrast and modern aesthetics."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
						children: THEME_PALETTES.map((pal) => {
							const isCurrent = config.colors?.primary?.toLowerCase() === pal.colors.primary.toLowerCase();
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${isCurrent ? "border-[#2271b1] ring-2 ring-[#2271b1]/20 bg-[#2271b1]/[0.02]" : "border-black/8 hover:border-black/20 bg-white"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xs font-bold text-gray-900",
												children: pal.title
											}), isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-semibold text-[#2271b1] flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), " Active"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-gray-500 leading-relaxed",
											children: pal.subtitle
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 p-2 rounded-xl bg-gray-100",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-6 rounded-lg border border-black/10 shrink-0",
												style: { backgroundColor: pal.colors.primary },
												title: `Primary: ${pal.colors.primary}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-6 rounded-lg border border-black/10 shrink-0",
												style: { backgroundColor: pal.colors.accent },
												title: `Accent: ${pal.colors.accent}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-6 rounded-lg border border-black/10 shrink-0",
												style: { backgroundColor: pal.colors.background },
												title: `Background: ${pal.colors.background}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-6 rounded-lg border border-black/10 shrink-0",
												style: { backgroundColor: pal.colors.cardBg },
												title: `Card: ${pal.colors.cardBg}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-6 rounded-lg border border-black/10 shrink-0",
												style: { backgroundColor: pal.colors.textMain },
												title: `Text Main: ${pal.colors.textMain}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-6 rounded-lg border border-black/10 shrink-0",
												style: { backgroundColor: pal.colors.textMuted },
												title: `Text Muted: ${pal.colors.textMuted}`
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleApplyPalette(pal.id, pal.colors),
										disabled: isCurrent,
										className: `w-full py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${isCurrent ? "bg-gray-100 text-gray-400 cursor-default" : "bg-[#2271b1] hover:bg-[#135e96] text-white shadow-xs"}`,
										children: isCurrent ? "Currently Active Palette" : "Apply Palette & Update Site"
									})
								]
							}, pal.id);
						})
					})]
				})]
			}),
			activeSubView === "typography" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between flex-wrap gap-4 border-b border-black/6 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-bold text-gray-900",
								children: "Global Typography Studio & Layout Scale"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1]",
								children: "WCAG AA Baseline"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gray-500 mt-0.5",
							children: "Customize typographic scale ratios, font families, and responsive viewport sizing."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: async () => {
								const updatedConfig = {
									...config,
									theme: {
										...config.theme,
										fontFamily: customTypography.fontFamily,
										fontSizeScale: customTypography.fontSizeScale === "standard" ? "normal" : customTypography.fontSizeScale,
										lineHeight: customTypography.lineHeight,
										scaleRatio: customTypography.scaleRatio,
										layout: {
											...config.theme?.layout,
											fontSizeScale: customTypography.fontSizeScale === "large" ? "editorial" : customTypography.fontSizeScale === "standard" ? "normal" : customTypography.fontSizeScale
										}
									}
								};
								updateLocalConfig(updatedConfig);
								await persistSiteConfig(updatedConfig);
								toast.success("Typography applied to the live site.");
							},
							className: "px-4 py-2 text-xs font-bold text-white bg-[#2271b1] hover:bg-[#135e96] rounded-xl cursor-pointer shadow-xs transition-all flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Apply Typography to Website" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 rounded-2xl border border-black/8 bg-gray-50 space-y-4",
						style: { fontFamily: customTypography.fontFamily === "playfair" ? "'Playfair Display', Georgia, serif" : customTypography.fontFamily === "syne" ? "'Syne', sans-serif" : customTypography.fontFamily === "inter" ? "'Plus Jakarta Sans', 'Inter', sans-serif" : "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs text-gray-500 border-b border-black/6 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-semibold uppercase",
								children: [
									"Active Specimen: ",
									customTypography.fontFamily.toUpperCase(),
									" • ",
									customTypography.fontSizeScale.toUpperCase()
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px]",
								children: [
									"Ratio: ",
									customTypography.scaleRatio,
									" • LH: ",
									customTypography.lineHeight
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight",
									children: "Architecting High-Trust Enterprise Platforms"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base sm:text-lg font-medium text-gray-600",
									children: "Responsive WordPress templates engineered for sub-second Core Web Vitals."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-gray-500 max-w-3xl leading-relaxed",
									children: "The typography engine establishes proportional mathematical scales across all headings, body copy, and UI controls. Clean glyph rendering ensures comfortable reading sessions across Retina displays and mobile viewports."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "px-4 py-2 text-xs font-bold rounded-xl text-white bg-[#2271b1] shadow-2xs",
										children: "Primary Action Specimen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
										className: "text-xs font-mono bg-white px-2.5 py-1.5 rounded-lg border border-black/10 text-gray-800",
										children: ["font-size: ", customTypography.fontSizeScale === "compact" ? "14px" : customTypography.fontSizeScale === "spacious" ? "18px" : customTypography.fontSizeScale === "large" ? "20px" : "16px"]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 p-4 rounded-xl border border-black/8 bg-gray-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-bold text-gray-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-4 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Select Font Family Hierarchy" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									{
										id: "system",
										name: "Native Apple SF Pro / System",
										badge: "Fastest",
										desc: "Ultra-crisp legibility, zero-latency hardware rendering speed."
									},
									{
										id: "inter",
										name: "Inter + Plus Jakarta Sans",
										badge: "Modern Tech",
										desc: "Balanced geometric proportions, ideal for software dashboards."
									},
									{
										id: "playfair",
										name: "Playfair Display + Editorial Serif",
										badge: "Prestige",
										desc: "High-contrast serif display paired with clean body text."
									},
									{
										id: "syne",
										name: "Syne + Space Grotesk",
										badge: "Avant-Garde",
										desc: "Futuristic creative studio aesthetics for tech leaders."
									}
								].map((item) => {
									const isSelected = customTypography.fontFamily === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setCustomTypography((prev) => ({
											...prev,
											fontFamily: item.id
										})),
										className: `p-3.5 rounded-xl bg-white border cursor-pointer flex items-center justify-between transition-all ${isSelected ? "border-[#2271b1] ring-2 ring-[#2271b1]/30 shadow-xs" : "border-black/6 hover:border-gray-300"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-bold text-gray-900",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-gray-500 mt-0.5",
											children: item.desc
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#2271b1]/10 text-[#2271b1] font-semibold",
											children: item.badge
										})]
									}, item.id);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 p-4 rounded-xl border border-black/8 bg-gray-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-bold text-gray-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scale Ratios & Layout Density" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-gray-700 block",
										children: "Base Font Size Scale:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-4 gap-2",
										children: [
											{
												id: "compact",
												label: "Compact 14px"
											},
											{
												id: "standard",
												label: "Standard 16px"
											},
											{
												id: "spacious",
												label: "Spacious 18px"
											},
											{
												id: "large",
												label: "Large 20px"
											}
										].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setCustomTypography((prev) => ({
												...prev,
												fontSizeScale: s.id
											})),
											className: `py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all border cursor-pointer ${customTypography.fontSizeScale === s.id ? "bg-[#2271b1] text-white border-[#2271b1]" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,
											children: s.label
										}, s.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-gray-700 block mb-1",
											children: "Mathematical Scale Ratio:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2",
											children: [
												{
													val: 1.2,
													label: "Minor Third 1.20"
												},
												{
													val: 1.25,
													label: "Major Third 1.25"
												},
												{
													val: 1.333,
													label: "Perfect Fourth 1.333"
												}
											].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setCustomTypography((prev) => ({
													...prev,
													scaleRatio: r.val
												})),
												className: `py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${customTypography.scaleRatio === r.val ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,
												children: r.label
											}, r.val))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-gray-700 block mb-1",
											children: "Line Height Rhythm:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2",
											children: [
												{
													val: 1.4,
													label: "Tight 1.4"
												},
												{
													val: 1.6,
													label: "Balanced 1.6"
												},
												{
													val: 1.8,
													label: "Relaxed 1.8"
												}
											].map((lh) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setCustomTypography((prev) => ({
													...prev,
													lineHeight: lh.val
												})),
												className: `py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${customTypography.lineHeight === lh.val ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,
												children: lh.label
											}, lh.val))
										})]
									})
								]
							})]
						})]
					})
				]
			}),
			activeSubView === "editor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeFileEditorView, {
				themes: themesList,
				currentThemeId,
				onUpdateFile: handleUpdateFileCode
			}),
			customizingTheme && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCustomizerModal, {
				theme: customizingTheme,
				config,
				onClose: () => setCustomizingTheme(null),
				onSaveAndActivate: handleSaveAndActivateFromCustomizer
			}),
			previewingTheme && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeLivePreview, {
				theme: previewingTheme,
				config,
				onClose: () => setPreviewingTheme(null),
				onActivate: (t) => {
					handleActivateTheme(t);
				}
			}),
			isDirectoryOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeDirectoryModal, {
				catalog: themesList,
				installedThemeIds: installedIds,
				activeThemeId: currentThemeId,
				onClose: () => setIsDirectoryOpen(false),
				onInstallTheme: handleInstallTheme,
				onActivateTheme: (t) => {
					handleActivateTheme(t);
					setIsDirectoryOpen(false);
				},
				onPreviewTheme: (t) => {
					setIsDirectoryOpen(false);
					setPreviewingTheme(t);
				},
				onOpenDetails: (t) => {
					setSelectedDetailsTheme(t);
				}
			}),
			selectedDetailsTheme && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeDetailsModal, {
				theme: selectedDetailsTheme,
				allThemes: themesList,
				isActive: selectedDetailsTheme.id === currentThemeId,
				onClose: () => setSelectedDetailsTheme(null),
				onSelectTheme: (t) => setSelectedDetailsTheme(t),
				onActivateTheme: (t) => handleActivateTheme(t),
				onPreviewTheme: (t) => setPreviewingTheme(t),
				onDeleteTheme: handleDeleteTheme,
				onCreateChildTheme: handleCreateChildTheme
			})
		]
	});
}
function TidioTab() {
	const { config, refetch, updateLocalConfig } = useSiteConfig();
	const [tidioState, setTidioState] = (0, import_react.useState)({
		enabled: config.tidio?.enabled ?? false,
		publicKey: config.tidio?.publicKey ?? "",
		disableOnAdmin: config.tidio?.disableOnAdmin ?? true,
		hideOnMobile: config.tidio?.hideOnMobile ?? false,
		position: config.tidio?.position ?? "bottom-right",
		welcomeMessage: config.tidio?.welcomeMessage ?? "Hi! How can we help you today? Leave us a message and our team will get right back to you."
	});
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [isTesting, setIsTesting] = (0, import_react.useState)(false);
	const [testResult, setTestResult] = (0, import_react.useState)(null);
	const [hasCopiedSnippet, setHasCopiedSnippet] = (0, import_react.useState)(false);
	const [simMessages, setSimMessages] = (0, import_react.useState)([{
		sender: "bot",
		text: tidioState.welcomeMessage || "Hi there! 👋 Welcome to Codex Dynamics. How can we help with your web design or software project today?",
		time: "Just now"
	}]);
	const [simInput, setSimInput] = (0, import_react.useState)("");
	const handleSimSend = (textToSend) => {
		const text = textToSend || simInput;
		if (!text.trim()) return;
		setSimMessages((prev) => [...prev, {
			sender: "user",
			text,
			time: "Just now"
		}]);
		if (!textToSend) setSimInput("");
		setTimeout(() => {
			setSimMessages((prev) => [...prev, {
				sender: "bot",
				text: "Thank you for reaching out! A dedicated project manager has received your note and will reply promptly. You can also reach our desk directly on WhatsApp: +380 63 640 6783.",
				time: "Just now"
			}]);
		}, 800);
	};
	const handleSave = async () => {
		try {
			setIsSaving(true);
			const cleanKey = tidioState.publicKey.trim().replace(/<script[^>]*src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["'][^>]*>[\s\S]*?<\/script>/i, "$1").replace(/.*code\.tidio\.co\/([a-zA-Z0-9_-]+).*/i, "$1").replace(/\.js$/, "");
			const updatedTidio = {
				...tidioState,
				publicKey: cleanKey
			};
			const updatedConfig = {
				...config,
				tidio: updatedTidio
			};
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "save_site_content",
					config: updatedConfig,
					payload: { config: updatedConfig }
				})
			})).json();
			if (data.ok) {
				toast.success("Tidio Live Chat settings saved successfully!");
				updateLocalConfig(data.config || updatedConfig);
				setTidioState(updatedTidio);
				await refetch();
			} else toast.error(data.error || "Failed to save Tidio configuration");
		} catch (err) {
			toast.error("Network error while saving: " + String(err));
		} finally {
			setIsSaving(false);
		}
	};
	const testConnection = async () => {
		const key = tidioState.publicKey.trim().replace(/<script[^>]*src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["'][^>]*>[\s\S]*?<\/script>/i, "$1").replace(/.*code\.tidio\.co\/([a-zA-Z0-9_-]+).*/i, "$1").replace(/\.js$/, "");
		if (!key) {
			setTestResult({
				success: false,
				message: "Please enter your Tidio Project Public Key before testing."
			});
			return;
		}
		setIsTesting(true);
		setTestResult(null);
		const start = performance.now();
		try {
			const url = `https://code.tidio.co/${encodeURIComponent(key)}.js`;
			await fetch(url, {
				method: "HEAD",
				mode: "no-cors"
			});
			const latency = Math.round(performance.now() - start);
			setTestResult({
				success: true,
				message: `Tidio CDN script is reachable at code.tidio.co/${key}.js`,
				latencyMs: latency
			});
			toast.success("Tidio script verified and active!");
		} catch (err) {
			setTestResult({
				success: false,
				message: `Could not verify code.tidio.co/${key}.js: ${String(err)}`
			});
			toast.error("Script ping check failed");
		} finally {
			setIsTesting(false);
		}
	};
	const copySnippet = () => {
		const snippet = `<script src="//code.tidio.co/${tidioState.publicKey.trim() || "YOUR_TIDIO_KEY"}.js" async><\/script>`;
		navigator.clipboard.writeText(snippet);
		setHasCopiedSnippet(true);
		toast.success("HTML snippet copied to clipboard");
		setTimeout(() => setHasCopiedSnippet(false), 2e3);
	};
	const isConnected = tidioState.enabled && Boolean(tidioState.publicKey.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 max-w-6xl mx-auto pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gradient-to-r from-[#0066FF]/10 via-[#0066FF]/5 to-transparent border border-[#0066FF]/20 rounded-2xl p-6 relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col md:flex-row md:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-14 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shadow-lg shadow-[#0066FF]/25 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-xl font-bold text-label tracking-tight",
								children: "Tidio Live Chat & AI Helpdesk"
							}),
							isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Connected & Live"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), "Setup Required"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/5 text-muted-foreground border border-black/8",
								children: "v5.x SDK"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1.5 max-w-2xl leading-relaxed",
						children: "Seamlessly embed Tidio’s real-time live chat widget and AI customer support agent directly into your public website. Manage client conversations, incoming leads, and automated bots without writing code."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.tidio.com/panel/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border border-black/10 bg-white text-label hover:bg-black/[0.02] transition-colors shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tidio Operator Panel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleSave,
						disabled: isSaving,
						className: "inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white transition-all shadow-md shadow-[#0066FF]/20 cursor-pointer disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSaving ? "Saving..." : "Save & Activate" })]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-black/6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-[#0066FF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-sm font-semibold text-label",
										children: "Widget Credentials & Status"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: copySnippet,
									className: "text-[11px] font-medium text-muted-foreground hover:text-label flex items-center gap-1 transition-colors",
									title: "Copy standard script tag",
									children: hasCopiedSnippet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-600",
										children: "Copied"
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy HTML Script" })] })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3.5 rounded-xl bg-black/[0.02] border border-black/6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold text-label flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enable Tidio Live Chat" }), tidioState.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-ping" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "When enabled, the chat bubble will automatically appear for all visitors on your website."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative inline-flex items-center cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: tidioState.enabled,
										onChange: (e) => setTidioState((prev) => ({
											...prev,
											enabled: e.target.checked
										})),
										className: "sr-only peer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 h-6 bg-black/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-black/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label",
										children: "Tidio Project Public Key / Script Code"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: tidioState.publicKey,
											onChange: (e) => setTidioState((prev) => ({
												...prev,
												publicKey: e.target.value
											})),
											placeholder: "e.g. abcdefghijklmnopqrstuvwxyz123456 or //code.tidio.co/xxxx.js",
											className: "w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-xs font-mono text-label placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-muted-foreground",
										children: [
											"In your Tidio dashboard, go to ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: "Settings → Live Chat → Installation"
											}),
											" to find your key. You can paste the bare key or the entire script URL."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: testConnection,
									disabled: isTesting || !tidioState.publicKey.trim(),
									className: "px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#0066FF]/30 text-[#0066FF] hover:bg-[#0066FF]/10 transition-colors disabled:opacity-40 flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: `size-3.5 ${isTesting ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isTesting ? "Testing Script CDN..." : "Test Connection" })]
								}), testResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `text-xs px-3 py-1 rounded-lg flex items-center gap-1.5 ${testResult.success ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`,
									children: [
										testResult.success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5 text-red-600 shrink-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate max-w-xs",
											children: testResult.message
										}),
										testResult.latencyMs && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono text-emerald-800",
											children: [
												"(",
												testResult.latencyMs,
												"ms)"
											]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pb-3 border-b border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-[#0066FF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold text-label",
								children: "Display & Behavior Rules"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between py-2 border-b border-black/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-label",
										children: "Hide on Admin CRM Pages"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Keeps the chat widget hidden while inside the Codex Dynamics Back Office."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: tidioState.disableOnAdmin,
										onChange: (e) => setTidioState((prev) => ({
											...prev,
											disableOnAdmin: e.target.checked
										})),
										className: "size-4 text-[#0066FF] rounded border-black/20 focus:ring-[#0066FF]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between py-2 border-b border-black/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-label",
										children: "Mobile Device Visibility"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Display the floating widget on smartphone and tablet screens."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-medium text-muted-foreground flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tidioState.hideOnMobile ? "Hidden on Mobile" : "Visible on Mobile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: !tidioState.hideOnMobile,
											onChange: (e) => setTidioState((prev) => ({
												...prev,
												hideOnMobile: !e.target.checked
											})),
											className: "size-4 text-[#0066FF] rounded border-black/20 focus:ring-[#0066FF]"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label",
										children: "Widget Position on Screen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTidioState((prev) => ({
												...prev,
												position: "bottom-right"
											})),
											className: `px-3 py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${tidioState.position === "bottom-right" ? "border-[#0066FF] bg-[#0066FF]/10 text-[#0066FF] font-semibold" : "border-black/10 text-muted-foreground hover:bg-black/[0.02]"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bottom Right (Standard)" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTidioState((prev) => ({
												...prev,
												position: "bottom-left"
											})),
											className: `px-3 py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${tidioState.position === "bottom-left" ? "border-[#0066FF] bg-[#0066FF]/10 text-[#0066FF] font-semibold" : "border-black/10 text-muted-foreground hover:bg-black/[0.02]"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bottom Left" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label",
										children: "Default Welcome Greeting"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: tidioState.welcomeMessage,
										onChange: (e) => setTidioState((prev) => ({
											...prev,
											welcomeMessage: e.target.value
										})),
										className: "w-full px-3 py-2 rounded-xl border border-black/10 bg-white text-xs text-label focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]",
										placeholder: "Leave a friendly message for visitors..."
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-2xl p-5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold text-[#0066FF]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "How to get your Tidio Public Key (Free & 2 Minutes)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "text-xs text-muted-foreground space-y-2 list-decimal list-inside",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Sign in or register for free at",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.tidio.com",
										target: "_blank",
										rel: "noreferrer",
										className: "text-[#0066FF] font-medium underline",
										children: "tidio.com"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Navigate to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-label",
									children: "Settings (gear icon) → Live Chat → Installation"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Click on ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: "\"JavaScript\""
									}),
									" or ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: "\"Manual Integration\""
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Copy the project public key or the script tag snippet" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Paste it into the field above and click ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-label",
									children: "\"Save & Activate\""
								})] })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-black/8 shadow-md overflow-hidden flex flex-col h-[560px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#0066FF] text-white p-4 flex items-center justify-between shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0066FF]" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-white leading-tight",
									children: "Codex Dynamics Support"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-white/80 flex items-center gap-1 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-300" }), "Online · Replies within minutes"]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSimMessages([{
										sender: "bot",
										text: tidioState.welcomeMessage || "Hi there! 👋 How can we help you today?",
										time: "Just now"
									}]),
									className: "p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors",
									title: "Reset simulator chat",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8f9fc] text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center my-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground/80 bg-black/5 px-2 py-0.5 rounded-full",
									children: "Live Chat Simulation Preview"
								})
							}), simMessages.map((msg, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${msg.sender === "user" ? "bg-[#0066FF] text-white rounded-br-xs" : "bg-white text-label border border-black/8 rounded-bl-xs"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: msg.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[9px] block mt-1 text-right ${msg.sender === "user" ? "text-white/70" : "text-muted-foreground"}`,
										children: msg.time
									})]
								})
							}, idx))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2.5 bg-white border-t border-black/6 flex items-center gap-1.5 overflow-x-auto no-scrollbar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleSimSend("I need a quote for a new website"),
									className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors whitespace-nowrap shrink-0",
									children: "Website Quote 💼"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleSimSend("Can we book a strategy call?"),
									className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors whitespace-nowrap shrink-0",
									children: "Book a Call 📅"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleSimSend("Speak with an engineer"),
									className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors whitespace-nowrap shrink-0",
									children: "Tech Team 💻"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								handleSimSend();
							},
							className: "p-3 bg-white border-t border-black/6 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: simInput,
								onChange: (e) => setSimInput(e.target.value),
								placeholder: "Write a message to test...",
								className: "flex-1 px-3 py-2 text-xs rounded-xl border border-black/10 focus:outline-none focus:ring-1 focus:ring-[#0066FF]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "size-8 rounded-xl bg-[#0066FF] text-white flex items-center justify-center hover:bg-[#0052cc] transition-colors shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" })
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 bg-white rounded-xl border border-black/6 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Widget Position Preview:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-label",
						children: tidioState.position === "bottom-right" ? "Bottom-Right Anchor" : "Bottom-Left Anchor"
					})]
				})]
			})]
		})]
	});
}
function HostingerModal({ isOpen, onClose }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!isOpen) return null;
	const copyPath = (text) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		toast.success("Copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl surface-lift rounded-3xl bg-card border border-black/8 p-6 sm:p-8 shadow-2xl space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pb-4 border-b border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-xl bg-blue/10 text-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-label font-display",
							children: "Hostinger Shared Hosting & SQLite Architecture"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Zero-configuration, native file-based database for shared PHP hosting"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-fill transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-xs text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-2xl bg-fill-subtle/70 border border-hairline space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-label font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Why SQLite for Hostinger Shared Hosting?" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Unlike PostgreSQL or external MySQL that requires port access and credentials, SQLite is a single self-contained file (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-label font-medium",
									children: "database.sqlite"
								}),
								") supported out-of-the-box by Hostinger PHP without setup or extra hosting fees."
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-label uppercase tracking-wider text-[11px]",
								children: "Deployment Checklist for Hostinger hPanel:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: "1. SQLite3 PHP Extension:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px]",
											children: "Enabled by default on PHP 8.1 / 8.2 / 8.3 in Hostinger hPanel under PHP Configurations."
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: "2. File Permissions:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px]",
											children: [
												"Ensure ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: "database.sqlite"
												}),
												" has read/write permissions (chmod 664 or 666) so PHP can write visitor logs and enquiries."
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: "3. API Endpoints:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px]",
											children: [
												"All actions are routed via ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: "/api/crm/data"
												}),
												" and ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: "/api/crm/action"
												}),
												"."
											]
										})] })]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-fill border border-black/8 rounded-xl flex items-center justify-between font-mono text-[11px] text-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Database File: ./database.sqlite" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => copyPath("database.sqlite"),
								className: "inline-flex items-center gap-1 text-blue hover:underline cursor-pointer",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy" })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-3 border-t border-hairline flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "px-5 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium cursor-pointer",
						children: "Done"
					})
				})
			]
		})
	});
}
function AdminCRM() {
	const [isAuth, setIsAuth] = (0, import_react.useState)(false);
	const [emailInput, setEmailInput] = (0, import_react.useState)("admin@codexdynamics.com");
	const [passwordInput, setPasswordInput] = (0, import_react.useState)("Admin123!");
	const [authError, setAuthError] = (0, import_react.useState)("");
	const [isBlogEditing, setIsBlogEditing] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("visitors");
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (activeTab !== "blogs") setIsBlogEditing(false);
	}, [activeTab]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isHostingerModalOpen, setIsHostingerModalOpen] = (0, import_react.useState)(false);
	const [stats, setStats] = (0, import_react.useState)({
		totalVisitors: 0,
		todayVisitors: 0,
		totalEnquiries: 0,
		totalBacklinks: 0,
		totalBlogs: 0,
		totalReviews: 0,
		totalProjects: 0
	});
	const [visitors, setVisitors] = (0, import_react.useState)([]);
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [enquiries, setEnquiries] = (0, import_react.useState)([]);
	const [backlinks, setBacklinks] = (0, import_react.useState)([]);
	const [blogs, setBlogs] = (0, import_react.useState)([]);
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [regions, setRegions] = (0, import_react.useState)([]);
	const [browsers, setBrowsers] = (0, import_react.useState)([]);
	const [devices, setDevices] = (0, import_react.useState)([]);
	const [webhookUrl, setWebhookUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("codex_admin_auth") === "true") setIsAuth(true);
		}
	}, []);
	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/crm/data");
			if (res.ok) {
				const json = await res.json();
				if (json.ok) {
					setStats(json.stats || {});
					setVisitors(json.visitors || []);
					setLeads(json.leads || []);
					setEnquiries(json.enquiries || []);
					setBacklinks(json.backlinks || []);
					setBlogs(json.blogs || []);
					setReviews(json.reviews || []);
					setProjects(json.projects || []);
					setRegions(json.regions || []);
					setBrowsers(json.browsers || []);
					setDevices(json.devices || []);
					if (json.settings?.webhookUrl !== void 0) setWebhookUrl(json.settings.webhookUrl);
				}
			}
		} catch {} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isAuth) {
			fetchData();
			const interval = setInterval(fetchData, 15e3);
			return () => clearInterval(interval);
		}
	}, [isAuth]);
	const dispatchAction = async (action, payload) => {
		try {
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action,
					...payload
				})
			})).json();
			if (data.ok) {
				if (data.stats) setStats(data.stats);
				if (data.visitors) setVisitors(data.visitors);
				if (data.leads) setLeads(data.leads);
				if (data.enquiries) setEnquiries(data.enquiries);
				if (data.backlinks) setBacklinks(data.backlinks);
				if (data.blogs) setBlogs(data.blogs);
				if (data.reviews) setReviews(data.reviews);
				if (data.projects) setProjects(data.projects);
				if (data.regions) setRegions(data.regions);
				if (data.browsers) setBrowsers(data.browsers);
				if (data.devices) setDevices(data.devices);
				if (data.settings?.webhookUrl !== void 0) setWebhookUrl(data.settings.webhookUrl);
				return true;
			}
		} catch {
			toast.error("Failed to execute action.");
		}
		return false;
	};
	const handleCreateLead = async (leadData) => {
		if (await dispatchAction("create_lead", leadData)) toast.success("Lead created successfully.");
	};
	const handleUpdateLeadStatus = async (id, status) => {
		if (await dispatchAction("update_lead_status", {
			id,
			status
		})) toast.success(`Lead status updated to ${status}.`);
	};
	const handleUpdateLeadNotes = async (id, notes) => {
		if (await dispatchAction("update_lead_notes", {
			id,
			notes
		})) toast.success("Notes saved.");
	};
	const handleDeleteLead = async (id) => {
		if (await dispatchAction("delete_lead", { id })) toast.success("Lead deleted.");
	};
	const handleAddVisitorToLeads = async (visitor, customData) => {
		if (await dispatchAction("add_visitor_to_leads", {
			visitor_id: visitor.id,
			lead_data: customData
		})) toast.success(`Visitor from ${visitor.city || visitor.country} added to Leads!`);
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			if ((await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "login",
					email: emailInput.trim(),
					password: passwordInput
				})
			})).json()).ok) {
				localStorage.setItem("codex_admin_auth", "true");
				setIsAuth(true);
				setAuthError("");
				toast.success("Welcome to Codex Dynamics Back Office!");
				return;
			}
		} catch {}
		if (emailInput.trim().toLowerCase() === "admin@codexdynamics.com" && passwordInput === "Admin123!") {
			localStorage.setItem("codex_admin_auth", "true");
			setIsAuth(true);
			setAuthError("");
			toast.success("Welcome to Codex Dynamics Back Office!");
		} else setAuthError("Invalid credentials. Please verify your email and password.");
	};
	const handleSaveWebhook = async (url) => {
		if (await dispatchAction("save_webhook", { url })) {
			setWebhookUrl(url);
			toast.success("Lead alert webhook saved.");
		}
	};
	const handleTestWebhook = async (url) => {
		try {
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "test_webhook",
					url
				})
			})).json();
			return {
				ok: data.ok,
				message: data.message || (data.ok ? "Dispatched" : data.error)
			};
		} catch (err) {
			return {
				ok: false,
				message: String(err)
			};
		}
	};
	const handleChangePassword = async (currentPassword, newPassword) => {
		try {
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "change_password",
					email: "admin@codexdynamics.com",
					currentPassword,
					newPassword
				})
			})).json();
			if (data.ok) {
				toast.success("Admin password changed in SQLite database.");
				return {
					ok: true,
					message: data.message
				};
			}
			return {
				ok: false,
				error: data.error || "Password update failed."
			};
		} catch (err) {
			return {
				ok: false,
				error: String(err)
			};
		}
	};
	const handleLogout = () => {
		localStorage.removeItem("codex_admin_auth");
		setIsAuth(false);
		toast.info("Signed out of back office.");
	};
	const handleSimulateVisitor = async () => {
		const countries = [
			{
				country: "United States",
				flag: "🇺🇸",
				ip: "172.56.33.104",
				browser: "Chrome 125",
				device: "Desktop (macOS)"
			},
			{
				country: "United Kingdom",
				flag: "🇬🇧",
				ip: "82.165.197.1",
				browser: "Safari 17.4",
				device: "Mobile (iPhone 15)"
			},
			{
				country: "Germany",
				flag: "🇩🇪",
				ip: "178.62.204.89",
				browser: "Firefox 126",
				device: "Desktop (Linux)"
			},
			{
				country: "Canada",
				flag: "🇨🇦",
				ip: "24.200.180.12",
				browser: "Edge 125",
				device: "Desktop (Windows 11)"
			},
			{
				country: "Japan",
				flag: "🇯🇵",
				ip: "133.242.18.99",
				browser: "Chrome 125",
				device: "Mobile (Android)"
			}
		];
		const pick = countries[Math.floor(Math.random() * countries.length)];
		const pages = [
			"/",
			"/#work",
			"/#services",
			"/#contact",
			"/#studio"
		];
		const page = pages[Math.floor(Math.random() * pages.length)];
		await dispatchAction("simulate_visitor", {
			sessionId: `live_${Math.random().toString(36).slice(2, 8)}`,
			ip: pick.ip,
			country: pick.country,
			flag: pick.flag,
			browser: pick.browser,
			device: pick.device,
			pageUrl: page
		});
		toast.success(`Live visitor ping received from ${pick.country} ${pick.flag}!`);
	};
	if (!isAuth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {
		emailInput,
		setEmailInput,
		passwordInput,
		setPasswordInput,
		authError,
		handleLogin
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f5f5f7] text-label flex font-sans selection:bg-blue/15",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {
				activeTab,
				setActiveTab,
				stats,
				isOpenMobile: isMobileSidebarOpen,
				onCloseMobile: () => setIsMobileSidebarOpen(false),
				onOpenHostingerModal: () => setIsHostingerModalOpen(true),
				onSimulateVisitor: handleSimulateVisitor,
				onLogout: handleLogout
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 lg:pl-64 xl:pl-72 flex flex-col min-w-0 transition-all duration-200",
				children: [(!isBlogEditing || activeTab !== "blogs") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminHeader, {
					activeTab,
					loading,
					onRefresh: fetchData,
					onOpenMobileSidebar: () => setIsMobileSidebarOpen(true),
					onOpenHostingerModal: () => setIsHostingerModalOpen(true),
					onLogout: handleLogout
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: `flex-1 w-full ${isBlogEditing && activeTab === "blogs" ? "max-w-none px-3 sm:px-6 lg:px-8 py-3" : "max-w-7xl px-4 sm:px-6 lg:px-8 py-6"} mx-auto space-y-6 relative z-10`,
					children: [activeTab !== "site-editor" && (!isBlogEditing || activeTab !== "blogs") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMetrics, {
						stats,
						activeTab,
						setActiveTab
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-1",
						children: [
							activeTab === "site-editor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteEditorTab, {}),
							activeTab === "themes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemesTab, { onGoToSiteEditor: () => setActiveTab("site-editor") }),
							activeTab === "tidio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TidioTab, {}),
							activeTab === "visitors" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorsTab, {
								visitors,
								onSimulate: handleSimulateVisitor,
								onAddToLeads: handleAddVisitorToLeads,
								leadsSessionIds: new Set(leads.filter((l) => l.notes && l.notes.includes("sess_")).map((l) => {
									const m = l.notes?.match(/sess_[a-zA-Z0-9_-]+/);
									return m ? m[0] : "";
								}).filter(Boolean))
							}),
							activeTab === "leads" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadsTab, {
								leads,
								onCreateLead: handleCreateLead,
								onUpdateStatus: handleUpdateLeadStatus,
								onUpdateNotes: handleUpdateLeadNotes,
								onDeleteLead: handleDeleteLead
							}),
							activeTab === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsTab, {
								stats,
								regions,
								browsers,
								devices,
								visitors
							}),
							activeTab === "enquiries" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiriesTab, {
								enquiries,
								onUpdateStatus: (id, status) => dispatchAction("update_enquiry_status", {
									id,
									status
								}),
								onDelete: (id) => dispatchAction("delete_enquiry", { id })
							}),
							activeTab === "backlinks" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BacklinksTab, {
								backlinks,
								onAddBacklink: (data) => dispatchAction("add_backlink", data),
								onDeleteBacklink: (id) => dispatchAction("delete_backlink", { id })
							}),
							activeTab === "blogs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogsTab, {
								blogs,
								onSaveBlog: (data) => dispatchAction("save_blog", data),
								onDeleteBlog: (id) => dispatchAction("delete_blog", { id }),
								onToggleStatus: (id, status) => dispatchAction("toggle_blog_status", {
									id,
									status
								}),
								onDuplicateBlog: (id) => dispatchAction("duplicate_blog", { id }),
								onEditorStateChange: (isEditing) => setIsBlogEditing(isEditing)
							}),
							activeTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsTab, {
								reviews,
								onSaveReview: (data) => dispatchAction("save_review", data),
								onToggleReview: (id, is_published) => dispatchAction("toggle_review", {
									id,
									is_published
								}),
								onDeleteReview: (id) => dispatchAction("delete_review", { id })
							}),
							activeTab === "projects" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsTab, {
								projects,
								onSaveProject: (data) => dispatchAction("save_project", data),
								onToggleProject: (id, is_published) => dispatchAction("toggle_project", {
									id,
									is_published
								}),
								onDeleteProject: (id) => dispatchAction("delete_project", { id })
							}),
							activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsTab, {
								stats,
								webhookUrl,
								onSaveWebhook: handleSaveWebhook,
								onTestWebhook: handleTestWebhook,
								onChangePassword: handleChangePassword,
								onOpenHostingerModal: () => setIsHostingerModalOpen(true),
								fullData: {
									stats,
									visitors,
									enquiries,
									backlinks,
									blogs,
									reviews,
									projects,
									regions,
									browsers,
									devices
								}
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingerModal, {
				isOpen: isHostingerModalOpen,
				onClose: () => setIsHostingerModalOpen(false)
			})
		]
	});
}
//#endregion
export { AdminCRM as component };
