  README - Prueba Técnica Parte 01

**Prueba Técnica - Parte 01**
=============================

Una aplicación interactiva de consola desarrollada en **TypeScript**, diseñada para ejecutar diferentes tareas programadas de manera dinámica. Este proyecto es modular y fácilmente escalable, permitiendo agregar nuevas tareas sin afectar la funcionalidad existente.

* * *

**Estructura del Proyecto**
---------------------------

    src/
    │
    ├── tasks/         # Tareas disponibles.
    │   ├── Task01.ts  # Manipulación de Arrays.
    │   ├── Task02.ts  # Promesas y manejo de asincronía.
    │   ├── Task03.ts  # Clases en JavaScript.
    │
    ├── ITask.ts       # Interfaz para estandarizar las tareas.
    ├── question.ts    # Entrada interactiva desde consola.
    └── index.ts       # Punto de entrada del programa.
  

* * *

**Tareas Incluidas**
--------------------

### **1\. Manipulación de Arrays (`Task01.ts`)**

Multiplica los números pares de un array por 2 y los impares por 3.

*   **Ejemplo:**
*   Entrada: `[1, 2, 3, 4]`
*   Salida: `[3, 4, 9, 8]`

### **2\. Promesas y Manejo de Asincronía (`Task02.ts`)**

Simula la obtención de datos desde una API utilizando una promesa con un retraso de 2 segundos.

*   El usuario ingresa un mensaje y este se muestra después del retraso.

### **3\. Clases en JavaScript (`Task03.ts`)**

Define una clase `Persona` con propiedades de nombre y edad, además de un método `saludar` que imprime un mensaje personalizado.

*   **Ejemplo:**
*   Entrada: Nombre: `Juan`, Edad: `25`
*   Salida: `Hola, soy Juan y tengo 25 años.`

* * *

**Ejecución del Proyecto**
--------------------------

Para ejecutar la aplicación, asegúrate de tener instalado **Node.js** y sigue estos pasos:

1.  Clona el repositorio y navega hasta la carpeta del proyecto.
2.  Instala las dependencias ejecutando:
    
        npm run dev
    
3.  Inicia el programa ejecutando:
    
        npm start
    

El programa se ejecutará en la consola, mostrando las tareas disponibles.

## Capturas de Funcionamiento
![01](https://github.com/user-attachments/assets/93f58005-8823-4f64-bf3e-ad50f0861a4b)

![02](https://github.com/user-attachments/assets/ef32aaca-5f48-4534-ae4e-a3766e0ba347)

![03](https://github.com/user-attachments/assets/c34a8b7a-6ec8-4a65-b199-46529f72e5e3)

![04](https://github.com/user-attachments/assets/c8b2eaee-bbb3-43f4-a330-1fee5a29efea)

