# Sitio Web Simple - Tarea de Nivelación

Este repositorio contiene dos implementaciones de un sitio web simple con dos funcionalidades básicas:
1. Una caja de texto que, al presionar una tecla (por ejemplo, Enter), muestra una ventana emergente con el texto ingresado.
2. Un botón que cambia los colores de fondo y texto alternando entre tres combinaciones: blanco/negro, negro/blanco y celeste/rojo.

Las implementaciones son:
- **Versión sin servidor**: utiliza solo HTML y JavaScript puro, se ejecuta directamente en el navegador.
- **Versión con servidor**: utiliza Node.js y Express para servir los archivos y debe ejecutarse con un comando en la terminal.

## 📁 Archivos incluidos

- `tarea.html` – Contiene la caja de texto y el botón para mostrar la alerta (funcionalidad 1).
- `Tarea2.html` – Contiene el botón para cambiar colores (funcionalidad 2) y enlaza el script `back.js`.
- `back.js` – Archivo JavaScript con la lógica de cambio de colores para la funcionalidad 2.
- `main.js` – Servidor básico con Express (escucha en el puerto 3000, pero aún no sirve archivos estáticos).
- `package.json` – Define la dependencia de Express.

## 🚀 Instrucciones para ejecutar

### Implementación 1 – JavaScript puro (sin servidor web)

1. **Asegúrate de tener los archivos HTML y JavaScript necesarios, ejecute npm i en el proyecto para instalar las dependencias (asegurarse de tener node.js instalado).**  

