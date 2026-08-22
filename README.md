# React Toast Notifications Demo

Interactive bilingual landing page for [@zilver/react-toast-notifications](https://github.com/miguelbonifaz/react-toast-notifications).

## English

### Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
npm start
```

The demo installs the package directly from its public GitHub repository until it is published to npm.

### Deploy on Laravel Cloud

Create a new Next.js application from this repository and use:

```bash
npm ci --audit false
npm run build
```

Laravel Cloud will use the `start` script from `package.json` to serve the application.

## Español

### Ejecutar localmente

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para crear una compilación de producción:

```bash
npm run build
npm start
```

La demo instala el paquete directamente desde su repositorio público de GitHub hasta que se publique en npm.

### Desplegar en Laravel Cloud

Crea una aplicación Next.js usando este repositorio y configura:

```bash
npm ci --audit false
npm run build
```

Laravel Cloud usará el script `start` de `package.json` para servir la aplicación.

## Repositories

- Demo: https://github.com/miguelbonifaz/react-toast-notifications-demo
- Package: https://github.com/miguelbonifaz/react-toast-notifications
