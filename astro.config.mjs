// @ts-check
import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import compressor from "astro-compressor";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // para que las colecciones funcionen URL dinámicas...
  // output: "server",
  // variable site para que funcione sitemap()
  site: "http://localhost:8888/",
  integrations: [
    alpinejs({
      entrypoint: "/src/entrypoint",
    }),
    tailwind({
      // Disable injecting a basic `base.css` import on every page.
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
    compressor(),
  ],
  // adaptador para netlify
  adapter: netlify({
    edgeMiddleware: true,
  }),
  redirects: {
    // TODO Eliminar estas redirecciones cuando hayamos hecho los categories de todo
    "/historias": "/historia/1",
    "/historia/1": "/historia/noiteboa-1924-unha-muineira-para-ruth",
    "/roteiros": "/roteiro/2",
    "/roteiro/2": "/roteiro/ruth-na-rua",
  },
});
