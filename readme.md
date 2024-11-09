# Aplicación de Trivia en Ionic

_Este es un proyecto de ejemplo desarrollado en Ionic con una barra de pestañas (tab bar) que incluye tres secciones: Login, Trivia, e Información. La aplicación permite al usuario iniciar sesión, responder preguntas de trivia y ver una sección de información sobre la aplicación._

## Descripción

La aplicación está diseñada para ofrecer una experiencia simple y amigable, donde el usuario puede:

- Login: Iniciar sesión en la aplicación (simulado).
- Trivia: Generar preguntas de trivia aleatorias.
- Información: Ver detalles sobre la aplicación y cómo usarla.

## Estructura del Proyecto

- www/: Carpeta principal que contiene los archivos HTML, CSS y JavaScript necesarios para la aplicación.
- scss/: Carpeta donde se encuentran los archivos SCSS para personalizar los estilos de la aplicación.
- resources/: Iconos y pantallas de carga (splash screens) para diferentes resoluciones de dispositivos.
- lib/: Contiene las bibliotecas de Ionic y AngularJS necesarias para ejecutar la aplicación.

## Requisitos Previos

- Node.js y npm deben estar instalados en tu sistema.
- Ionic CLI y Cordova deben estar instalados globalmente:

```bash
npm install -g @ionic/cli cordova

```

## Instalación

- Clonar el repositorio (si es necesario):

```bash
git clone https://github.com/VarelaCristianFacundo/trivia.git
cd Varela1
```

- Instalar las dependencias:

```bash
npm install
```

- Compilar archivos SCSS y otros activos: Ejecuta Gulp para compilar los estilos y otros recursos de la aplicación.

```bash
gulp
```

## Ejecución del Proyecto

Para ver el proyecto en un servidor de desarrollo, ejecuta el siguiente comando en la carpeta www:

- Iniciar un servidor estático (si no lo tienes, instálalo con npm install -g http-server):

```bash
http-server www
```

- Accede a la aplicación: Visita http://localhost:8080 en tu navegador para ver la aplicación en funcionamiento.

## Ejecución en Dispositivos Móviles

_Para compilar y probar la aplicación en dispositivos móviles, puedes usar los siguientes comandos:_

- Para Android:

```bash
ionic cordova run android
```

- Para iOS (requiere macOS):

```bash
ionic cordova run ios
```

## Funcionalidades

- Login: Permite al usuario simular un inicio de sesión.
- Trivia: Genera preguntas de trivia que el usuario puede responder.
- Información: Muestra detalles sobre la aplicación y sus funcionalidades.

## Estructura de Archivos

```
└── 📁trivia
    └── 📁hooks
        └── 📁after_prepare
        └── README.md
    └── 📁resources
        └── 📁android
            └── 📁icon
            └── 📁splash
        └── icon.png
        └── splash.png
    └── 📁scss
        └── ionic.app.scss
    └── 📁www
        └── 📁css
            └── style.css
        └── 📁img
        └── 📁js
            └── app.js
            └── controllers.js
            └── services.js
        └── 📁lib
            └── 📁ionic
                └── 📁css
                └── 📁fonts
                └── 📁js
                    └── 📁angular
                    └── 📁angular-ui
                └── 📁scss
                    └── 📁ionicons
                └── version.json
        └── 📁templates
            └── chat-detail.html
            └── tab-account.html
            └── tab-chats.html
            └── tab-dash.html
            └── tabs-sinLogin.html
            └── tabs.html
        └── index.html
    └── .bowerrc
    └── .editorconfig
    └── .gitattributes
    └── .gitignore
    └── bower.json
    └── config.xml
    └── Desert.png
    └── gulpfile.js
    └── ionic.config.json
    └── package-lock.json
    └── package.json
    └── readme.md
```

## Notas

**Esta aplicación de trivia está diseñada como una demostración de Ionic y AngularJS y puede ser expandida para añadir más funcionalidades o mejorar el diseño.**

## Contact

If you have any questions or suggestions, feel free to get in touch at **cvarelagarcia@gmail.com.**

## Author

- [@VarelaCristianFacundo](https://github.com/VarelaCristianFacundo)
