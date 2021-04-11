# Reproduction for .mjs issues + transpile issues

This repro has a packaged vue library (`sample-vue-library-0.0.5.tgz`). See https://github.com/nuxt-community/composition-api/issues/415 for history of repro (originally provided by @emiller12).

This repro is set up to test three different versions of the Nuxt Composition API, with pre-built & packed tarballs.

## Scenario 1: .mjs + transpiling VCA

`"@nuxtjs/composition-api": "file:./nuxtjs-composition-api-mjs+vca-transpile.tgz",`

1. Replace version as above
2. `yarn && yarn dev`
3. See webpack4 error - complaining about `ufo@0.6.11`.

```bash
Can't import the named export 'joinURL' from non EcmaScript module (only default export is available)
```

**Note**: I removed the package exports fields from the source NCA `package.json` just in case this was causing the issue.

## Scenario 2: .es.js + transpiling VCA

`"@nuxtjs/composition-api": "file:./nuxtjs-composition-api-es+vca-transpile.tgz",`

This simply renames module outputs to `.es.js` to avoid issue in #1 to reveal second issue.

1. Replace version as above
2. `yarn && yarn dev`
3. Load page twice and see the following SSR error:

```bash
ERROR  [Vue warn]: [vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.
```

## Scenario 3: .es.js + not transpiling VCA

`"@nuxtjs/composition-api": "file:./nuxtjs-composition-api-es+no-vca-transpile.tgz",`

1. Replace version as above
2. `yarn && yarn dev`

This version doesn't seem to have any issues but is here for comparison.
