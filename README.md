# Trinity Launcher Website

<div align="center">

![Trinity Launcher](assets/images/trinity-launcher-preview.jpg)

**Sitio web oficial de Trinity Launcher — el launcher open source para Minecraft Bedrock en Linux**

[![Website](https://img.shields.io/website?url=https%3A//trinity-app.vercel.app)](https://trinity-app.vercel.app)
[![License](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black)](https://vercel.com)

[🌐 Sitio Web](https://trinity-app.vercel.app) •
[📖 Wiki](https://trinity-app.vercel.app/pages/wiki.html) •
[❓ FAQ](https://trinity-app.vercel.app/pages/faq.html)

</div>

---

## 📋 Descripción

Sitio web moderno y responsive de **Trinity Launcher**, construido con tecnologías web estáticas y **VitePress**. Incluye documentación completa, preguntas frecuentes y recursos para la comunidad de Minecraft Bedrock en Linux.

### ✨ Características principales

- **Diseño moderno** con modo oscuro nativo y animaciones suaves.
- **Completamente responsive**, optimizado para móviles y escritorio.
- **Documentación técnica** gestionada de forma modular.
- **Carga rápida** gracias al renderizado estático.
- **SEO optimizado** con meta tags completos para buscadores.

## 🛠️ Tecnologías utilizadas

- **Core**: [VitePress](https://vitepress.dev/) (Vue.js + Vite)
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Styling**: PostCSS con Nesting + CSS personalizado
- **Deployment**: [Vercel](https://vercel.com/)
- **Utilidades**: @vueuse/core, dayjs, glightbox

## 📁 Estructura del proyecto

```text
trinity-app/
├── .vitepress/          # Configuración del sitio y temas
├── api/                 # Funciones backend (si aplica)
├── assets/              # Recursos multimedia e imágenes
├── css/                 # Estilos globales y componentes
├── data/                # Archivos JSON para FAQ y contenido
├── js/                  # Lógica de navegación y utilidades
├── pages/               # Páginas estáticas y documentación
├── index.html           # Punto de entrada principal
├── package.json         # Dependencias y scripts
└── README.md            # Documentación del repositorio
````

## 🚀 Instalación y desarrollo

### Prerrequisitos

* **Node.js** (versión 20 o superior recomendada)
* **Navegador web moderno**

### Desarrollo local

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/ezequielgk/Trinity.app.git
   cd Trinity.app
   ```

2. **Instalar las dependencias**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

   El sitio estará disponible en:
   `http://localhost:5173`

4. **Construcción para producción**

   ```bash
   npm run build
   ```

## 📄 Licencia

Este proyecto está bajo la licencia **BSD-3-Clause**.
Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">Hecho con ❤️ por el Trinity Team</p>
