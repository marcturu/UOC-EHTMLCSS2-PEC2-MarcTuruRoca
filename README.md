# <img src="src/assets/images/ACMateria.png" alt="Asociación Cultural Materia" width="200"/> — Artisan Workshops

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Parcel](https://img.shields.io/badge/Parcel-E7A93D?style=for-the-badge&logo=parcel&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

<sub>🗓️ Developed in May 2026 </sub>

This project is a website for **artisan workshops** organized by the **Asociación Cultural Materia**, in collaboration with the Barcelona City Council.

Developed using version 3.x of [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) as the starter template: a modern frontend development base that includes Parcel, a Sass compiler, an ES6 transpiler, minifiers, an image transformer, and development tools. Created by Jordi Tarrida (jorditarrida@uoc.edu).

---

## ✅ Pages

- **Home**: welcome poster with essential information about the workshops.
- **Speakers**: cards featuring the speakers taking part in the workshops.
- **Blog**: article with varied information about the workshops and their context.
- **Contact**: location details for the workshops and contact information for the association.

---

## ⚡ Features

The project incorporates modern CSS functionality and advanced layout techniques to improve scalability, performance, and design adaptability.

#### Cascade layers architecture
- `@layer` → CSS layering system that allows explicit control over style priority.

#### Modern CSS conditionals and queries
- `@supports` → detects support for CSS properties before applying them.
- `@container` → styles based on the container's size rather than the viewport.
- `:is(), :where(), :has()` → refined selectors and advanced conditional logic in CSS.

#### Modern viewport units
- `dvh, svh, ...` → dynamic viewport height units, adapted to changes in mobile browsers.
- `cqw, cqh, ...` → units relative to container size (Container Query Units).

#### Advanced color system
- `oklch` → perceptually uniform color model for improved visual consistency.
- `display-p3` → support for wider color gamuts on compatible screens.

#### Modern layout
- `CSS Flex` → flexible one-dimensional layout system.
- `CSS Grid` → two-dimensional layout system for complex structures.

---

## 🛠 Installation & Setup

### a0. Prerequisites
Make sure you have installed:
- **[Node.js](http://nodejs.org/) 20.x** or higher

Check the version:
```bash
node -v
```

### a1. Clone the repository
```bash
git clone https://github.com/marcturu/ac-materia.git
cd ac-materia
```

### a2. Install dependencies
```bash
npm install
```

### a3. Run locally
```bash
npm run dev
```
The app will be available at **http://localhost:8123**, with live reload enabled.

### b1. Try the website
You can try the deployed version directly in the browser:

- **Netlify (browser testing):**
  WebApp: [https://ac-materia.netlify.app/](https://ac-materia.netlify.app/)

> ℹ️ **Deployment details:**
> The project is deployed on [Netlify](https://netlify.com) from the `main` branch.
> - **Build command:** `npm run build`
> - **Publish directory:** `dist`

### c1. Watch the Demo
🎥 **A [Recorded Demo](https://www.dropbox.com/scl/fi/61tv4sov7ii0irer1ywf9/AC-Materia-Demo.mkv?rlkey=j20h8zqdvdu72deh6wk4zvl9r&st=ybb735dq&dl=0) is also available**.

---

## 🧩 Methodology

- **ITCSS**: style architecture (settings, tools, generic, elements, objects, components, utilities)
- **BEM**: CSS class naming convention
- **OOCSS**: reusable object classes (`o-container`, `o-section`)
- Responsive, *desktop-first* design, due to the wireframes produced beforehand.

---

## 🧰 Built With

### Core

| Technology | Purpose |
| --- | --- |
| [Parcel v2](https://parceljs.org) | Bundler — development server, production build, asset pipeline |
| [Sass/SCSS](https://sass-lang.com) | CSS preprocessor — variables, nesting, functions, mixins, partials (`@parcel/transformer-sass`) |
| [PostCSS](https://postcss.org/) | CSS transpilation — vendor prefixes and compatibility with older browsers (`@parcel/transformer-postcss`, `postcss-preset-env`) |
| [PostHTML](https://github.com/posthtml/posthtml) | HTML partials via `posthtml-include` (`@parcel/transformer-posthtml`) |
| [Stylelint](https://stylelint.io/) | SCSS linting with custom BEM and SCSS rules (`stylelint-config-prettier-scss`, `stylelint-config-recommended-scss`, `stylelint-scss`), configured in `.stylelintrc` |

### Optimization (production build)

| Technology | Purpose |
| --- | --- |
| [`lightningcss`](https://github.com/parcel-bundler/lightningcss) | CSS minification and optimization (`@parcel/optimizer-css`) |
| [`htmlnano`](https://github.com/posthtml/htmlnano) | HTML minification (`@parcel/optimizer-htmlnano`) |
| [SWC](https://swc.rs/) | JavaScript minification (`@parcel/optimizer-swc`) |
| [Babel](https://babeljs.io/) | JavaScript transpilation for older browsers (`@parcel/transformer-babel`) |
| [`sharp`](https://sharp.pixelplumbing.com/) | Image transformation and WebP conversion (`@parcel/transformer-image`) |

### Dependencies

| Dependency | Purpose |
| --- | --- |
| [Bootstrap](https://getbootstrap.com/) | CSS styling library `"bootstrap": "^5.3.8"` |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations `"aos": "^2.3.4"` |
| [Font Awesome](https://fontawesome.com/) | Icons `"@fortawesome/fontawesome-free": "^7.2.0"` |

---

## 📜 Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server at http://localhost:8123 with live reload |
| `npm run build` | Compiles and optimizes the files for production into `dist/` |
| `npm run clean` | Removes the `dist/` folder and caches |
| `npm run stylelint` | Validates the SCSS files against the configured rules |

---

## 📂 Project Structure

```
src/
├── index.html
├── blog.html
├── speakers.html
├── contact.html
├── views/
│   ├── partials/               # PostHTML partials
│   │   ├── header.html
│   │   └── footer.html
│   ├── home/
│   │   └── hero.html
│   ├── speakers/
│   │   └── cards.html
│   ├── blog/
│   │   ├── hero.html
│   │   ├── intro.html
│   │   ├── list.html
│   │   └── final.html
│   └── contact/
│       ├── hero.html
│       ├── section.html
│       ├── cards.html
│       ├── form.html
│       └── map.html
├── assets/
│   ├── fonts/                  # Self-hosted fonts (League Gothic, DM Sans)
│   ├── images/                 # Optimized images in WebP
│   ├── scripts/
│   │   ├── main.js
│   │   └── modules/            # JS modules (aos, header)
│   └── styles/
│       ├── main.scss
│       ├── layers.scss
│       ├── _dependencies.scss
│       ├── settings/           # Variables, fonts, Bootstrap overrides
│       ├── tools/              # Functions, mixins
│       ├── generic/            # Reset
│       ├── elements/           # Base styles
│       ├── objects/            # OOCSS objects
│       ├── components/
│       │   ├── partials/
│       │   ├── home/
│       │   ├── speakers/
│       │   ├── blog/
│       │   └── contact/
│       └── utilities/          # Utility classes
```

---

## 📷 Screenshots 

