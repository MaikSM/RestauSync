# 03_backend

Esta carpeta contiene la implementación del backend API moderno para RestauSync.

## Arquitectura

El backend está construido con Node.js y TypeScript, utilizando Express.js como framework web. Implementa una arquitectura modular con separación clara de responsabilidades.

## Estructura

### backend/
- **src/**: Código fuente TypeScript
  - **modules/**: Módulos funcionales
    - **auth/**: Autenticación y autorización
    - **inventario/**: Gestión de inventario e ingredientes
    - **menu/**: Gestión de menús y platos
    - **mesas/**: Gestión de mesas
    - **reservas/**: Sistema de reservas
    - **role/**: Gestión de roles de usuario
    - **user/**: Gestión de usuarios
    - **asistencia/**: Control de asistencias
    - **categorias/**: Categorías de menú
  - **core/**: Componentes transversales
    - **config/**: Configuración de base de datos
    - **middlewares/**: Middlewares personalizados
  - **utils/**: Utilidades (bcrypt, jwt)
  - **server.ts**: Punto de entrada del servidor

- **docs/**: Documentación OpenAPI/Swagger
- **dist/**: Código compilado JavaScript

## Tecnologías

- **Runtime**: Node.js 18+
- **Variables de Entorno**: Archivo .env para configuración segura
- **Lenguaje**: TypeScript
- **Framework**: Express.js
- **Base de Datos**: MySQL con mysql2
- **Autenticación**: JWT (JSON Web Tokens)
- **Encriptación**: bcrypt
- **Validación**: DTOs personalizados
- **Documentación**: Swagger/OpenAPI

## Instalación y Ejecución

```bash
cd backend
npm install
npm run build
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

## Endpoints Principales

- **Auth**: `/api/auth/login`, `/api/auth/register`
- **Usuarios**: `/api/users`
- **Inventario**: `/api/inventario`, `/api/ingredientes`
- **Menús**: `/api/platos`, `/api/categorias`
- **Mesas**: `/api/mesas`
- **Reservas**: `/api/reservas`
- **Roles**: `/api/roles`

## Características

- Autenticación JWT con roles (admin, mesero, chef)
- Validación de datos con DTOs
- Manejo de errores centralizado
- Middlewares de autorización
- Documentación automática con Swagger
- Configuración de CORS
- Variables de entorno para configuración

Este backend proporciona una API RESTful completa para todas las operaciones del sistema RestauSync.