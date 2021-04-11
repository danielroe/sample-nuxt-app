export default {
  target: "static",
  css: ["node_modules/sample-vue-library/dist/sample-vue-library.css"],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module"
  ],
};
