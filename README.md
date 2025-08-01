# Start Framework

A modern React + Vite starter project featuring modular components, responsive design with Tailwind CSS, and routing via React Router DOM. This project is ideal for building portfolio websites or as a foundation for scalable React applications.

## Features

- ⚡ **Vite** for fast development and builds
- ⚛️ **React 19** with functional components and hooks
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **Component-based architecture** (Card, Modal, Navbar, Footer, etc.)
- 🗂️ **Organized folder structure** for scalability
- 🖼️ **Dynamic image imports** using Vite's glob import
- 🌐 **React Router DOM v7** for client-side routing
- 🧹 **ESLint** for code quality and consistency
- 📱 **Responsive design** out of the box

## Project Structure

```
├── public/
│   └── react.svg
├── src/
│   ├── assets/           # Static images (SVG, PNG)
│   ├── components/       # Reusable UI components
│   │   ├── Card/
│   │   ├── Container/
│   │   ├── FloatingInput/
│   │   ├── Footer/
│   │   ├── Heading/
│   │   ├── Modal/
│   │   └── Navbar/
│   ├── pages/            # Route pages (Home, About, Portfolio, Contact, etc.)
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── MainLayout/
│   │   ├── NoFoundPage/
│   │   └── Portfolio/
│   ├── utils/            # Utility functions (images.js, title.js)
│   ├── App.jsx           # Main app with routing
│   ├── index.css         # Tailwind and custom styles
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd start-framwork
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Scripts

- `dev` – Start development server
- `build` – Build for production
- `preview` – Preview production build
- `lint` – Run ESLint

## Customization

- **Add new pages:** Create a folder in `src/pages/` and add your component. Register the route in [`src/App.jsx`](src/App.jsx).
- **Add new components:** Place reusable components in `src/components/`.
- **Add images:** Place images in `src/assets/` and import them using [`src/utils/images.js`](src/utils/images.js).
- **Change theme colors:** Edit Tailwind config or CSS variables in [`src/index.css`](src/index.css).

## Notable Files

- [`src/App.jsx`](src/App.jsx): Main router and app structure.
- [`src/pages/MainLayout/MainLayout.jsx`](src/pages/MainLayout/MainLayout.jsx): Layout with Navbar and Footer.
- [`src/components/Navbar/Navbar.jsx`](src/components/Navbar/Navbar.jsx): Responsive navigation bar.
- [`src/components/Footer/Footer.jsx`](src/components/Footer/Footer.jsx): Footer with social links.
- [`src/pages/Portfolio/Portfolio.jsx`](src/pages/Portfolio/Portfolio.jsx): Portfolio grid with modal image viewer.
- [`src/utils/images.js`](src/utils/images.js): Dynamic image import utility.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using React, Vite, and Tailwind CSS.**