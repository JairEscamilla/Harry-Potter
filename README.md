# Harry Potter App
[Harry Potter App (calm-bunny-a6e13f.netlify.app)](https://calm-bunny-a6e13f.netlify.app/)
Version de Node: v14.15.0

### Instrucciones para levantar proyecto

Para ejecutar el proyecto de manera local, solamente es necesario clonar el repositorio y ejecutar los siguientes comandos en la raíz del proyecto:

```console
foo@bar:~$ npm i
foo@bar:~$ npm run dev
```

Finalmente, para levantar la base de datos de json-server, se tendrá que ejecutar el siguiente comando:

```console
foo@bar:~$ npm run start:db
```

### ¿Qué es lo que más me gustó de mi desarrollo?

Lo que más me gustó de mi desarrollo fue el hecho de que logré desarrollar la interfaz requerida implementando componentes reutilizables y que son fáciles de extender llegado el momento en que se necesite hacer crecer la aplicación, además de que, apoyándome de las props de cada componente, pude desarrollar distintas variantes de estilo según lo que fuera necesitando

### Si hubieras tenido más tiempo ¿qué hubiera mejorado o qué más hubieras hecho?

Con un poco más de tiempo me hubiera gustado mucho poder darle persistencia a las imágenes de los nuevos personajes que se suben a la aplicación, implementando conexión con Firebase para almacenar las nuevas imágenes, ya que actualmente en la aplicación se crea una URL para las imagenes en memoria y no tienen persistencia. Además, me hubiera gustado tener un poco más de tiempo para agregarle pruebas unitarias

### Pain Point / Bug

Para lograr hacer que en pantalla se mostraran los personajes que ya se encontraban en la API y, además, aquellos personajes nuevos que el usuario fuera agregando, se me complicó un poco implementar los filtros de estudiante o staff porque en ocasiones, solamente aparecían los personajes de la API sin los nuevos personajes agregados por el usuario, por lo que tuve que dividir el código que se encargaba de esas tareas en custom hooks distintos para que fuera más fácil analizar el flujo de la información en fragmentos de código más pequeños y de esta forma encontrar el error de lógica que estaba provocando este comportamiento inesperado.

#### Autor: Jair Escamilla
