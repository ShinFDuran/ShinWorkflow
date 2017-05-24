// Este package entre otras tareas concatenará los archivos CSS y JavaScript
// El orden en el array es importante, en el CSS los últimos estilos prevalecerán
// En el JS si es necesaria alguna dependencia debe colocarse antes
const  buildify = require('buildify'),
  filesJS = [
    './dev/js/main.js',
  ],
  filesCSS = [
    './dev/css/styles.css',
  ];

  buildify()
    .concat( filesCSS )
    .cssmin()
    .save( './dist/css/styles.min.css' );

  buildify()
    .concat( filesJS )
    .save( './dist/js/main.js' )
    .uglify()
    .save( './dist/js/main.min.js' );
