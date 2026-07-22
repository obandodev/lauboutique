# LauBoutique

Catálogo web de ropa femenina (vestidos, tops y blusas), construido con React y Vite. Combina un diseño elegante y cálido con filtros de compra en cascada, carrusel de fotos por producto y compra directa por WhatsApp — sin necesidad de backend ni pasarela de pagos.

## Identidad de marca

- **Vibra:** femenino contemporáneo con punch — elegante y casual tranquila a la vez.
- **Paleta:** crema cálido (base), ciruela (acento elegante), coral (acento vivo), mostaza (acento cálido).
- **Tipografía:** Fraunces (serif, títulos) + Inter (sans, cuerpo), cargadas desde Google Fonts.
- **Logo:** ícono de flor de línea fina + wordmark en degradé ciruela → coral → mostaza.

## Stack técnico

- **React 18** + **Vite** como bundler.
- **react-router-dom** para la navegación entre páginas.
- CSS plano por componente, con variables CSS centralizadas (`src/styles/variables.css`) como sistema de design tokens.
- Estado manejado con hooks nativos de React (`useState`, `useEffect`, `useMemo`) — sin librerías externas de estado.
- Datos del catálogo en un archivo estático (`src/data/products.js`), sin base de datos.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Esto levanta el proyecto en `http://localhost:5173`.

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
lauboutique-app/
├── index.html                 Punto de entrada HTML, título y favicon
├── public/
│   ├── placeholders/          Imágenes de productos (placeholders)
│   └── favicon*.png           Favicon circular en varios tamaños
└── src/
    ├── main.jsx                Arranque de React + BrowserRouter
    ├── App.jsx                 Layout general (Header + rutas + Footer)
    ├── styles/
    │   ├── variables.css       Paleta, tipografía, espaciados (design tokens)
    │   └── global.css          Estilos base globales
    ├── data/
    │   └── products.js         Productos, tipos, variantes de color, tallas, precios
    ├── hooks/
    │   └── useProductFilters.js  Lógica del filtro en cascada
    ├── utils/
    │   └── whatsapp.js         Arma el link de WhatsApp con mensaje pre-cargado
    ├── components/
    │   ├── layout/              Header (con menú hamburguesa) y Footer
    │   ├── catalog/              ColorSwatch, FilterBar, ProductCard, ProductGrid, ProductModal
    │   ├── home/                 Categories, CategoryCard, BrandStory, TrustBar, InstagramCta, FeaturedProducts
    │   └── ui/                   Carousel y SocialLinks (reutilizables, sin lógica de negocio)
    └── pages/
        ├── Home.jsx              Ruta "/"
        ├── Catalogo.jsx          Ruta "/catalogo"
        └── SobreNosotros.jsx     Ruta "/sobre-nosotros"
```

## Rutas del sitio

| Ruta | Página | Contenido |
|---|---|---|
| `/` | Home | Hero, categorías destacadas, productos destacados, historia de marca, franja de confianza, Instagram |
| `/catalogo` | Catálogo | Filtros en cascada (prenda → color → talla), grid de productos, modal de detalle |
| `/sobre-nosotros` | Sobre Nosotros | Historia de la marca + contacto por WhatsApp e Instagram |

## Funcionalidades principales

- **Filtro en cascada:** tipo de prenda → color disponible → talla disponible. Nunca se muestra un filtro sin resultados.
- **Variantes de color por producto:** cada producto puede tener varios colores, cada uno con su propio set de fotos.
- **Carrusel de fotos:** navegación con flechas y puntos, cambia según el color seleccionado.
- **Modal de producto:** al tocar una tarjeta se abre una vista ampliada con carrusel grande, selector de color y talla, y botón de compra.
- **Compra por WhatsApp:** arma automáticamente un mensaje con nombre del producto, color, talla (si está elegida) y precio.
- **Header responsive:** menú hamburguesa en pantallas chicas, navegación normal en desktop.

## Cómo agregar un producto nuevo

Editar `src/data/products.js` y agregar un objeto con esta forma al array `products`:

```js
{
  id: "nombre-unico",
  name: "Nombre del producto",
  type: "vestidos", // "vestidos" | "tops" | "blusas"
  sizes: ["S", "M", "L"],
  price: 150000,
  colors: [
    { name: "coral", photos: ["/placeholders/foto1.jpg", "/placeholders/foto2.jpg"] },
  ],
}
```

**Importante:** el nombre del color (`name`) debe existir como variable en `src/styles/variables.css` (por ejemplo `--color-coral`) y estar mapeado en `src/components/catalog/ColorSwatch.jsx`, o el círculo de color no se va a pintar correctamente.

## Cómo cambiar la paleta de colores

Todos los colores del sitio están centralizados en `src/styles/variables.css`. Al cambiar un valor ahí, se actualiza en todo el proyecto automáticamente — pero si se **renombra** una variable (por ejemplo `--color-coral` a `--color-otro`), hay que revisar manualmente los archivos CSS de `components/` y `pages/` que puedan estar usando el nombre viejo, ya que las referencias a una variable inexistente fallan en silencio (el navegador ignora la propiedad sin avisar).

## Número de WhatsApp

El número de contacto para compras está definido en `src/utils/whatsapp.js`:

```js
const WHATSAPP_NUMBER = "573103070804";
```

