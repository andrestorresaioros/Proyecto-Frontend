# Proyecto Frontend — Galería con Web Components

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Web Components](https://img.shields.io/badge/Web_Components-29ABE2?style=flat&logo=webcomponentsdotorg&logoColor=white)
[![Demo](https://img.shields.io/badge/demo-en%20línea-2ea44f?style=flat)](https://andrestorresaioros.github.io/Proyecto-Frontend/)

Galería de imágenes inspirada en el diseño de Pinterest, construida con JavaScript nativo y un **Custom Element** propio (`<my-card>`) encapsulado con Shadow DOM.

**Demo:** https://andrestorresaioros.github.io/Proyecto-Frontend/

## Características

- Componente reutilizable `<my-card>` definido con `customElements.define`.
- Atributos del componente: `img` (imagen), `autor` y `icono` (pie con el autor, opcional).
- Estilos encapsulados en Shadow DOM, sin interferir con el resto de la página.
- Barra superior con navegación (Inicio, Hoy, Crear), buscador y accesos rápidos.
- Sin frameworks ni dependencias externas.

## Uso del componente

```html
<script src="myCard.js"></script>

<my-card img="Imagenes/curry.jpeg" autor="Autor" icono="Iconos/ico6.jpg"></my-card>
<my-card img="Imagenes/pat.jpg"></my-card>
```

## Estructura

```
.
├── index.html   # Página principal y uso de <my-card>
├── myCard.js    # Definición del Web Component
├── styles.css   # Estilos generales y de la barra superior
├── Iconos/      # Iconografía
└── Imagenes/    # Imágenes de la galería
```

## Ejecución local

No requiere instalación. Abre `index.html` en el navegador o sirve la carpeta:

```bash
python -m http.server 8000
```

## Autor

**César Andrés Torres Bernal** · [GitHub](https://github.com/andrestorresaioros) · [LinkedIn](https://www.linkedin.com/in/andr%C3%A9s-torres10)

## Licencia

El código se distribuye bajo la licencia MIT ([LICENSE](LICENSE)). Las imágenes de la galería pertenecen a sus respectivos autores y se usan solo con fines de práctica.
