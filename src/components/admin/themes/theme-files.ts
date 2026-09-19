import type { FullThemeItem, ThemeTemplateFiles } from "./theme-types";

export function buildThemeFiles(theme: Omit<FullThemeItem, "files"> & { files?: ThemeTemplateFiles }): ThemeTemplateFiles {
  const c = theme.colors;
  const fonts =
    theme.fontFamily === "playfair"
      ? { display: "Playfair Display", body: "Inter" }
      : theme.fontFamily === "syne"
        ? { display: "Syne", body: "Space Grotesk" }
        : theme.fontFamily === "inter"
          ? { display: "Plus Jakarta Sans", body: "Plus Jakarta Sans" }
          : { display: "SF Pro Display", body: "SF Pro Text" };

  const css = `/*
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
`;

  return {
    "style.css": css,
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
    "theme.json": JSON.stringify(
      {
        $schema: "https://schemas.wp.org/trunk/theme.json",
        version: 3,
        settings: {
          appearanceTools: true,
          color: {
            palette: [
              { slug: "primary", color: c.primary, name: "Primary" },
              { slug: "accent", color: c.accent, name: "Accent" },
              { slug: "background", color: c.background, name: "Background" },
              { slug: "card", color: c.cardBg, name: "Card" },
              { slug: "foreground", color: c.textMain, name: "Foreground" },
              { slug: "muted", color: c.textMuted, name: "Muted" },
            ],
          },
          typography: {
            fontFamilies: [
              { slug: "display", fontFamily: fonts.display, name: "Display" },
              { slug: "body", fontFamily: fonts.body, name: "Body" },
            ],
          },
          layout: {
            contentSize: theme.containerWidth === "full" ? "100%" : theme.containerWidth,
          },
        },
      },
      null,
      2,
    ),
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
`,
  };
}
