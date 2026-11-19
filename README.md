# Clase 5 — Estilos CSS y SCSS en Angular

Proyecto Angular 20 elaborado a partir de **CLASE 5 PRACTICA.docx**: catálogo interactivo de tarjetas, temas claro/oscuro, Sass/SCSS, `ngClass`, `ngStyle`, `:host`, `:host-context`, `::ng-deep`, `ViewEncapsulation.Emulated` y `ViewEncapsulation.None`.

## Requisitos

- Node.js 20.19+ o 22.12+ (recomendado Node 22 o 24 compatible con Angular 20).
- npm y Visual Studio Code.

## Ejecución local en Windows / PowerShell

1. Descomprime el ZIP.
2. Abre la carpeta `estilos-angular-demo` en Visual Studio Code.
3. Abre una terminal en **esa carpeta** (donde está `package.json`).
4. Ejecuta:

```powershell
npm install
npm start
```

Se abrirá **http://localhost:4200**. Si no se abre automáticamente, pega esa dirección en Chrome.

Para detener el servidor pulsa `Ctrl + C`.

## Interacciones para la práctica

1. **Modo claro / oscuro** en el encabezado: agrega o elimina `body.theme-light`; las tarjetas se adaptan con `:host-context`.
2. **Destacar producto**: cambia `destacado` y se aplica `[ngClass]` (borde y sombra morados); `[ngStyle]` cambia el tamaño/peso del precio.
3. **Marcar agotado / Reponer stock**: cambia `enStock`, el badge y la apariencia de la imagen.
4. **Filtros** Todos / Disponibles / Destacados: renderizan tarjetas mediante `*ngFor`, con mensaje vacío por `*ngIf`.
5. **Demostración de encapsulamiento**: `ProductoCardComponent` utiliza Emulated; `EncapsulamientoGlobalComponent` utiliza None. La clase `.insignia-global` del componente None también afecta al texto de la página padre.
6. **Pseudo-selectores**: `:host` en la tarjeta; `:host-context(body.theme-light)` en tarjeta y componente padre; `:host ::ng-deep` en el padre para personalizar un título en el componente hijo.

## Estructura principal

```text
src/
  app/
    models/producto.model.ts
    componentes/
      producto-card/
        producto-card.component.ts
        producto-card.component.html
        producto-card.component.scss
      encapsulamiento-global/
        encapsulamiento-global.component.ts
        encapsulamiento-global.component.scss
    app.component.ts
    app.component.html
    app.component.scss
  styles/
    _tokens.scss
  styles.scss
  index.html
  main.ts
public/
  favicon.svg
  productos/*.svg
angular.json
package.json
vercel.json
netlify.toml
```

Las variables, el mixin de sombras y la función SCSS están centralizados en `src/styles/_tokens.scss`, importado por las hojas de estilo de componentes mediante `@use`.

## Compilar para producción

```powershell
npm run build
```

Resultado: carpeta `dist/estilos-angular-demo`.

## Publicar (obtener enlace público)

### Opción A: Netlify Drop — sin subir a GitHub

1. Ejecuta `npm install` y `npm run build`.
2. Entra en https://app.netlify.com/drop
3. Arrastra la carpeta **`dist/estilos-angular-demo`** (no el ZIP ni la carpeta `src`).
4. Netlify mostrará el enlace público del proyecto.

### Opción B: Vercel + GitHub

1. Sube este proyecto a un repositorio GitHub propio.
2. En https://vercel.com/new importa el repositorio.
3. Root Directory: `./`.
4. Build Command: `npm run build`.
5. Output Directory: `dist/estilos-angular-demo`.
6. Haz clic en Deploy. `vercel.json` ya contiene esta configuración.

**Nota:** `http://localhost:4200` es una dirección local; no es un enlace público hasta que publiques el proyecto en un hosting.

## Verificaciones recomendadas

- `npm run build` sin errores.
- Botón de tema cambia el fondo del sitio y el de las tarjetas.
- Borde morado para productos destacados y opacidad de agotados.
- Color/tamaño del precio se modifica dinámicamente.
- Los filtros funcionan y no generan errores en consola.
- Se aprecia la diferencia entre CSS encapsulado y global desde F12.
