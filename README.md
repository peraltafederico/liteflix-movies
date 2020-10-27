## litebox-test-back

# Caso

El proyecto consiste en un Catálogo de Películas dinámico. Las películas se encuentran categorizadas y provienen de una API pública.

Sin embargo, el catálogo debería poder ser actualizado, pudiendo agregar nuevas películas. No se dispone de un endpoint para agregar nuevas películas, sino que debería crearse una API para guardar las mismas y poder listarlas.

Se espera, de esta manera, que el Catálogo de Películas final, liste las películas que provienen de la API pública + la nueva API que creemos.

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn start:dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run all tests
yarn test

# run linting
yarn lint
```