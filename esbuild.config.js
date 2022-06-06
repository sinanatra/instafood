import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/js/index.js"],
    bundle: true,
    outfile: "www/main.js",
    sourcemap: true,
  },
  { root: "www" }
);
