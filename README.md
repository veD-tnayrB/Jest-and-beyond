# BeyondJS Jest Testing

Este repositorio contiene un caso de prueba utilizando Jest y el framework BeyondJS.

## For dummies

En este repositorio se muestra un caso de uso comun en donde se utiliza Jest y Beyond, el proposito de este repo es
mostrar un error que ocurre al intentar implementar pruebas usando Jest en un bundle de beyond que usa un componente
(llamese componente una clase, variable, funcion, etc) de otro bundle

Dada la explicacion general aqui el detalle:

En el archivo `project/modules/home/ts/store.ts` pertenciente al bundle `Home` se define una clase con un metodo `load`,
`initA` e `initB` mas alla de la funcionalidad que tengan estos metodos lo importante es que en el archivo se usa como
dependencia `AEntity` y `BEntity` pertenecientes a otro bundle el bundle entities cuya ubicacion es:
`project\modules\a\ts\a.ts`

A la hora de ejecutar las pruebas (Usando npm test dentro de la carpeta bryant-se-pico) este genera un error no comun
generado por Jest el cual da a enteder de que la importacion de `AEntity` y `BEntity` no pudo ser trackeada porque no se
encontro la ruta a la cual estos archivos pertenecen

Esto es una calle ciega porque Beyond maneja la importacion de componentes de otros bundles de una manera en especifo
que no es la misma que usa Jest para trackear las dependencias

## Requisitos

Para ejecutar las pruebas, necesitarás tener instalado Node.js y npm en tu máquina. Puedes descargar Node.js desde su
[sitio web oficial](https://nodejs.org/) y npm se instala automáticamente con Node.js.

## Instalación

Primero, clona el repositorio a tu máquina local utilizando git:

```bash
git clone <url del repositorio>
```

Luego, navega hasta el directorio del proyecto:

```bash
cd project
```

Instala las dependencias del proyecto con npm:

```bash
npm install
```

## Ejecución de las pruebas

Para ejecutar las pruebas, primero debes navegar hasta el directorio del paquete que deseas probar:

```bash
cd project
```

Luego, puedes ejecutar las pruebas con el siguiente comando:

```bash
npm test
```

Esto ejecutará Jest y correrá todas las pruebas en el directorio actual.

## Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de actualizar las pruebas según corresponda.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
