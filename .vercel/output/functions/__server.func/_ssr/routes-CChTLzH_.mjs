import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as SiteCanvas, s as SEO } from "./Footer-CXqLKlrJ.mjs";
import { n as resolveGeoLocation, t as SiteChrome } from "./SiteChrome-CV6SHJK6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CChTLzH_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function detectBrowser(ua) {
	if (/edg/i.test(ua)) return "Edge 124";
	if (/opr|opera/i.test(ua)) return "Opera 109";
	if (/chrome|crios/i.test(ua)) return "Chrome 125";
	if (/firefox|fxios/i.test(ua)) return "Firefox 126";
	if (/safari/i.test(ua)) return "Safari 17.4";
	return "Modern Browser";
}
function detectDevice(ua) {
	if (/ipad|tablet/i.test(ua)) return "Tablet";
	if (/iphone/i.test(ua)) return "Mobile (iPhone)";
	if (/android/i.test(ua)) return "Mobile (Android)";
	if (/macintosh|mac os/i.test(ua)) return "Desktop (macOS)";
	if (/windows/i.test(ua)) return "Desktop (Windows)";
	if (/linux/i.test(ua)) return "Desktop (Linux)";
	return "Desktop";
}
function getCookie(name) {
	if (typeof document === "undefined") return null;
	const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
	return match ? decodeURIComponent(match[3]) : null;
}
function setCookie(name, value, days = 365) {
	if (typeof document === "undefined") return;
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}
function getAllCookiesMap() {
	if (typeof document === "undefined") return {};
	const pairs = document.cookie.split(";");
	const result = {};
	for (const pair of pairs) {
		const trimmed = pair.trim();
		if (!trimmed) continue;
		const eqIdx = trimmed.indexOf("=");
		if (eqIdx !== -1) {
			const key = trimmed.slice(0, eqIdx);
			result[key] = decodeURIComponent(trimmed.slice(eqIdx + 1));
		}
	}
	return result;
}
var sessionStartTime = Date.now();
var heartbeatInterval = null;
var isTrackerInitialized = false;
var lastTrackedUrl = "";
var lastTrackedTime = 0;
async function trackCurrentVisitor(page = "/") {
	if (typeof window === "undefined") return;
	const activeUrl = page || window.location.pathname + window.location.hash || "/";
	const now = Date.now();
	if (activeUrl === lastTrackedUrl && now - lastTrackedTime < 3e3) return;
	lastTrackedUrl = activeUrl;
	lastTrackedTime = now;
	try {
		let visitorUuid = getCookie("__cdx_vid");
		const isNewVisitor = !visitorUuid;
		if (!visitorUuid) {
			visitorUuid = `vid_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
			setCookie("__cdx_vid", visitorUuid, 365);
		}
		let visitCount = parseInt(getCookie("__cdx_visit_count") || "0", 10);
		if (!getCookie("__cdx_session")) {
			visitCount += 1;
			setCookie("__cdx_visit_count", String(visitCount), 365);
		}
		let firstVisit = getCookie("__cdx_first_visit");
		if (!firstVisit) {
			firstVisit = (/* @__PURE__ */ new Date()).toISOString();
			setCookie("__cdx_first_visit", firstVisit, 365);
		}
		let sessionId = sessionStorage.getItem("codex_session_id") || getCookie("__cdx_session");
		if (!sessionId) {
			sessionId = `sess_${Math.random().toString(36).slice(2, 8)}`;
			sessionStorage.setItem("codex_session_id", sessionId);
			setCookie("__cdx_session", sessionId, 1);
			sessionStartTime = Date.now();
		}
		if (!getCookie("__cdx_cookie_consent")) setCookie("__cdx_cookie_consent", "accepted", 365);
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get("utm_source")) setCookie("__cdx_utm_source", urlParams.get("utm_source") || "", 30);
		if (urlParams.get("utm_campaign")) setCookie("__cdx_utm_campaign", urlParams.get("utm_campaign") || "", 30);
		let pagesHistory = [];
		try {
			const storedHistory = getCookie("__cdx_pages_history") || sessionStorage.getItem("cdx_pages_history");
			if (storedHistory) pagesHistory = JSON.parse(storedHistory);
		} catch {
			pagesHistory = [];
		}
		const activeUrl = page || window.location.pathname + window.location.hash || "/";
		const lastPage = pagesHistory[pagesHistory.length - 1];
		if (!lastPage || lastPage.url !== activeUrl) {
			pagesHistory.push({
				url: activeUrl,
				title: document.title || "Codex Dynamics",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
			if (pagesHistory.length > 15) pagesHistory = pagesHistory.slice(pagesHistory.length - 15);
			const historyStr = JSON.stringify(pagesHistory);
			setCookie("__cdx_pages_history", historyStr, 30);
			try {
				sessionStorage.setItem("cdx_pages_history", historyStr);
			} catch {}
		}
		const durationSeconds = Math.max(1, Math.floor((Date.now() - sessionStartTime) / 1e3));
		setCookie("__cdx_duration_secs", String(durationSeconds), 1);
		const ua = navigator.userAgent;
		const browser = detectBrowser(ua);
		const device = detectDevice(ua);
		let countryGuess = "United States";
		let flagGuess = "🇺🇸";
		const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
		if (tz.includes("Europe/Kiev") || tz.includes("Kyiv")) {
			countryGuess = "Ukraine";
			flagGuess = "🇺🇦";
		} else if (tz.includes("London") || tz.includes("Europe/London")) {
			countryGuess = "United Kingdom";
			flagGuess = "🇬🇧";
		} else if (tz.includes("Berlin") || tz.includes("Europe/Berlin") || tz.includes("Paris") || tz.includes("Europe")) {
			countryGuess = "Germany";
			flagGuess = "🇩🇪";
		} else if (tz.includes("Dubai") || tz.includes("Asia/Dubai")) {
			countryGuess = "United Arab Emirates";
			flagGuess = "🇦🇪";
		} else if (tz.includes("Toronto") || tz.includes("Vancouver") || tz.includes("America/Toronto")) {
			countryGuess = "Canada";
			flagGuess = "🇨🇦";
		} else if (tz.includes("Tokyo") || tz.includes("Asia/Tokyo")) {
			countryGuess = "Japan";
			flagGuess = "🇯🇵";
		}
		const geo = resolveGeoLocation(countryGuess, flagGuess);
		const referrer = document.referrer ? new URL(document.referrer).hostname : "Direct";
		const allCookies = getAllCookiesMap();
		allCookies.__cdx_screen = `${window.screen.width}x${window.screen.height} (${window.devicePixelRatio}x DPR)`;
		allCookies.__cdx_lang = navigator.language;
		allCookies.__cdx_platform = navigator.platform;
		const email = getCookie("__cdx_lead_email") || "";
		const name = getCookie("__cdx_lead_name") || "";
		const phone = getCookie("__cdx_lead_phone") || "";
		const payload = {
			session_id: sessionId,
			page: activeUrl,
			country: geo.country,
			country_code: geo.countryCode,
			flag: geo.flag,
			city: geo.city,
			region: geo.region,
			postal_code: geo.postalCode,
			street: geo.street,
			browser,
			device,
			referrer,
			duration_seconds: durationSeconds,
			visit_count: visitCount,
			is_returning: visitCount > 1 || !isNewVisitor ? 1 : 0,
			pages_viewed: JSON.stringify(pagesHistory),
			cookies_data: JSON.stringify(allCookies),
			email,
			name,
			phone
		};
		await fetch("/api/track-visitor.php", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		}).catch(() => {});
		if (!isTrackerInitialized && typeof window !== "undefined") {
			isTrackerInitialized = true;
			let lastKnownPathname = window.location.pathname;
			window.addEventListener("popstate", () => {
				if (window.location.pathname !== lastKnownPathname) {
					lastKnownPathname = window.location.pathname;
					trackCurrentVisitor(window.location.pathname);
				}
			});
			if (!heartbeatInterval) heartbeatInterval = setInterval(() => {
				const currentDuration = Math.max(1, Math.floor((Date.now() - sessionStartTime) / 1e3));
				setCookie("__cdx_duration_secs", String(currentDuration), 1);
				fetch("/api/track-visitor.php", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						session_id: sessionId,
						duration_seconds: currentDuration,
						page: window.location.pathname + window.location.hash
					})
				}).catch(() => {});
			}, 15e3);
		}
	} catch {}
}
function Home() {
	(0, import_react.useEffect)(() => {
		trackCurrentVisitor(window.location.pathname);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteCanvas, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEO, {
		title: "High-Performance Websites & Digital Studio",
		description: "High-performance websites, web design, web development, and digital marketing studio. Precision engineering on every screen.",
		ogType: "website",
		keywords: [
			"web design",
			"web development",
			"digital studio",
			"high-performance websites",
			"UI/UX",
			"Rank Math SEO"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { page: "home" })] });
}
//#endregion
export { Home as component };
