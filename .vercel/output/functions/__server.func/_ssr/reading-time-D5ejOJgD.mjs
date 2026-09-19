//#region node_modules/.nitro/vite/services/ssr/assets/reading-time-D5ejOJgD.js
/**
* Estimates reading time in minutes for a given text or markdown string.
* Uses the industry standard reading speed of 200–225 words per minute.
*/
function calculateReadingTime(content, wpm = 200) {
	if (!content || typeof content !== "string") return {
		minutes: 1,
		text: "1 min read",
		words: 0
	};
	const cleanText = content.replace(/!\[.*?\]\(.*?\)/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[#*`_~>[\]()-]/g, " ").replace(/\s+/g, " ").trim();
	const words = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
	const minutes = Math.max(1, Math.ceil(words / wpm));
	return {
		minutes,
		text: `${minutes} min read`,
		words
	};
}
//#endregion
export { calculateReadingTime as t };
