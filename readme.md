## Please read `me`

### Environment

It uses:
 - Vue 2.5.16
 - Vue-Router 3.0.1
 - TypeScript 2.9.2
 - Vuetify 1.1.8
 - webpack 4.16.2
 - Vuex 3.0.1

### Folders & Docs

 - `src/` Source Folder
   - `Pages/` Router's Pages Components Folder
   - `Components/` Packed components Folder
   - `Methods/` Methods Folder
    - `Api/`
      - `apis.ts` Api routes
      - `config.sample.ts` Api URL config's sample file,edit it & rename it to `config.ts`
      - `index.ts` Api loader
   - `routes.ts` Routes, edit it to manage routes
   - `index.ts` Entrance file
 - `dist/` Distributed Folder
   - `index.html` Entrance of the website
   - `index.js` Compiled File

### Scripts

Compile:
```bash
npm run build
```

Run a hot refresh server:
```bash
npm run serve
```
