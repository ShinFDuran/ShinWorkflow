ShinWorkflow
============

## Introducción
Los conceptos de productividad, performance y aspectos relacionados con mejorar el workflow son puntos que me resultan muy interesantes, es el continuo esfuerzo de maximizar el rendimiento de nuestro tiempo.  

Anteriormente cree un workflow usando Gulp basado en un tutorial de [John Papa](https://twitter.com/john_papa) y su tutorial en **Pluralsight** [JavaScript Build Automation With Gulp.js](https://www.pluralsight.com/courses/javascript-build-automation-gulpjs).  Sin embargo, el tiempo pasa y si bien **Gulp** fue una buena base, ahora ya los *"Task runners"* han sido desplazados por **NPM-Scripts**.

En este nuevo workflow usaré parte de lo aprendido en el curso [EscuelaIT: Automatización y Optimización Frontend](https://escuela.it/cursos/taller-automatizacion-optimizacion-frontend) impartido por [Jonathan Mircha](https://twitter.com/jonmircha) podéis ver los workflows que él realizó durante el curso en el repositorio: [taller-frontend-2017](https://github.com/EscuelaIt/taller-frontend-2017)

## Estructura
Inicialmente la estructura es la siguiente:
  - \src\ Carpeta que incluye el código base (sass, js, pug,...)
  - \dev\ Carpeta donde se generan los archivos para poder cargarlos en el navegador durante el desarrollo
  - \dist\ Carpeta donde se generarán los archivos finales minificados y compactados

## Package
- Para facilitar su comprensión en package.json uso nombres que faciliten la fase.
- Utilizo sass, babel y pug como script temporales que forman parte de watch:metalang.
- A partir de ahí *dev:XX* para la build de desarrollo y *dist:XX* para la build de producción.
- Usaré el script *start* para el script más utilizado (el que prepara el servidor en desarrollo).
- La build de producción se hace a partir de la de desarrollo, de momento es necesario haber trabajado en desarrollo para poder crear una build de producción.
