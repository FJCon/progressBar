# Practica de aplicacion Electron + React + SQL
El objetivo es aprender las bases del desarrollo con Electron haciendo incapie en la comunicacion entre el procesos Main y Render.

## ¿Qué hace esta aplicación?
- Permite a los usuarios registrar su nombre y los horarios de trabajo para cada día de la semana
-Muestra un reloj en tiempo real
- Muestra una barra de progreso con un porcentaje que representa el porcentaje de la jornada laboral transcurrido.

Ejemplo:
> Si un empleado registra que trabaja de 7:00 a 16:00, cuando el reloj marque las 11:30hs, la barra de progreso indicará que ya se ha cumplido un 50% de la jornada laboral, y mostrará un 75% cuando el reloj marque las 13:45hs.

## ¿Como funciona la aplicacion?
- Al iniciarse, comprueba si existe registro de un usuario. En caso de no encontrar dicha informacion, se muestra un formulario para completar los datos básicos que necesita la apliacion.
- Los datos se almacenan en una base de datos SQLite.
- Se muestra una interfaz con el nombre del usuario, un reloj en tiempo real y una barra de progreso ubicada entre el hoario de entrada y horario de salida (obtenidos de la base de datos y provistos por el usuario)
- A medida que la barra de progreso crece su color va cambiando siguiente la secuencia de rejo-amarillo-verde.

## ¿Por qué crear algo tan absurdo?
La respuesta es simple y solo necesita un poco de contexto:
Un amigo está muy desmotivado y desanimado en su trabajo actual y en una charla casual hizo el siguiente comentario:

>Lo único que me motiva es saber que a X hora, ya cumplí con la mitad de mi jornada laboral. Saber que solo falta la mitad del tiempo para volver a casa me hace ver el día de una forma diferente.

Al escuchar ésto primero sentí un poco de tristeza por él pero también me propuse crearle una barra de progreso para tratar de animar un poco sus días.
