# 02_base_datos

Esta carpeta contiene scripts adicionales de base de datos para el proyecto RestauSync.

## Archivos

- **consultas.sql**: Consultas SQL para operaciones comunes en la base de datos
- **datos.sql**: Scripts para insertar datos de prueba y configuración inicial
- **funciones.sql**: Funciones almacenadas en MySQL para lógica de negocio
- **procedures.sql**: Procedimientos almacenados para operaciones complejas
- **restausync (5).sql**: Script completo de creación de la base de datos

## Base de Datos

La base de datos `restausync` está diseñada con MySQL y requiere MySQL 8.0 o superior. Contiene las siguientes entidades principales:
- Usuarios (con roles: admin, chef, mesero, cliente)
- Inventario (ingredientes, productos)
- Menús (platos, categorías)
- Pedidos
- Mesas
- Reservas
- Asistencias

## Uso

Para configurar la base de datos:
1. Crear una base de datos MySQL llamada `restausync`
2. Ejecutar primero `restausync (5).sql` para crear las tablas
3. Ejecutar `datos.sql` para poblar con datos iniciales
4. Usar `consultas.sql` para operaciones comunes
5. Los procedures y funciones están disponibles para lógica del servidor

Estos scripts complementan los scripts principales en `01_proyecto/trimestre_4/Base de datos/`.