import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";


export default defineConfig({
 plugins: [tailwindcss()],
 base: "/repo/",
 build: {
   rollupOptions: {
     input: {
       accueil: resolve(__dirname, "index.html"),
       produit: resolve(__dirname, "pages/produit.html"),
       page_produit: resolve(__dirname, "pages/page_produit.html"),
       click_and_collect: resolve(__dirname, "pages/click_and_collect.html"),
       panier: resolve(__dirname, "pages/panier.html"),
     },
   },
 },
});
