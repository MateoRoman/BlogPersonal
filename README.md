Blog Personal con Nest.js
Este es un proyecto de blog personal desarrollado con Nest.js, una plataforma de Node.js para construir aplicaciones web eficientes y escalables. En este proyecto, se ha creado una API REST para manejar las operaciones CRUD en publicaciones de un blog, así como la funcionalidad adicional de comentarios en las publicaciones.

1.- Mejoras Implementadas

- Se implemento un comentarios.controller.ts:
En este archivo se definió un controlador denominado ComentariosController, encargado de gestionar las solicitudes HTTP relacionadas con los comentarios. Se implementaron los siguientes métodos:

getComentarios(): Maneja las solicitudes GET para obtener todos los comentarios.

postComentarios(newComentario: CreateComenarioDto): Gestiona las solicitudes POST para agregar un nuevo comentario.

deleteComentario(id: string): Encargado de manejar las solicitudes DELETE para eliminar un comentario existente.

updateComentario(id: string, updatedComentario: CreateComenarioDto): Maneja las solicitudes PUT para actualizar un comentario existente.

- Se implemento un comentario.entity.ts:
En este archivo se definió la estructura de datos para representar un comentario en el blog mediante la clase Comentario. Esta clase incluye propiedades como id, comentario, idpost y autor, que representan distintas partes de un comentario.

- Se implemento un comentarios.module.ts:
Se creó un módulo llamado ComentariosModule, el cual proporciona la configuración necesaria para el uso de los servicios y controladores relacionados con los comentarios en la aplicación.

Se implemento un comentarios.service.ts:
En este archivo se implementó un servicio denominado ComentariosService encargado de la lógica de negocio relacionada con los comentarios. Los principales métodos implementados son:

getComentarios(): Retorna todos los comentarios almacenados en el servicio.

postComentarios(comentario, idpost, autor): Agrega un nuevo comentario al servicio utilizando los datos proporcionados.

deleteComentario(id): Elimina un comentario existente del servicio utilizando el ID proporcionado.

updateComentario(id, updatedComentario): Actualiza un comentario existente en el servicio utilizando el ID proporcionado y los datos actualizados.