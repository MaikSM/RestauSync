# Restausync - Backend API

API REST completa para el sistema de gestión de restaurante Restausync, desarrollada con Node.js, TypeScript y TypeORM.

## 🚀 Características

- **API RESTful**: Arquitectura REST completa con operaciones CRUD
- **TypeScript**: Tipado estático para mayor robustez
- **TypeORM**: ORM moderno para MySQL con migraciones automáticas
- **JWT Authentication**: Autenticación segura con tokens JWT
- **Role-based Access Control**: Control de acceso por roles (Admin, Chef, Mesero, Inventario)
- **Swagger Documentation**: Documentación interactiva completa en `/api-docs`
- **File Upload**: Manejo de imágenes para platillos
- **Data Validation**: Validación automática con class-validator
- **CORS**: Configuración flexible para desarrollo y producción
- **Security**: Headers de seguridad con Helmet, encriptación con bcrypt

## 🛠️ Tecnologías

- **Node.js** >= 18.0.0
- **TypeScript** >= 5.0.0
- **Express.js** >= 4.18.0
- **TypeORM** >= 0.3.0
- **MySQL** >= 8.0
- **JWT** para autenticación
- **bcryptjs** para encriptación
- **multer** para uploads
- **swagger-jsdoc** para documentación

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── modules/             # Módulos por funcionalidad
│   │   ├── auth/           # Autenticación y usuarios
│   │   ├── categorias/     # Categorías de menú
│   │   ├── ingredientes/   # Gestión de ingredientes
│   │   ├── menu/           # Platillos y recetas
│   │   ├── mesas/          # Gestión de mesas
│   │   ├── clientes/       # Gestión de clientes
│   │   ├── pedidos/        # Sistema de pedidos
│   │   ├── inventario/     # Control de inventario
│   │   ├── asistencia/     # Control de asistencia
│   │   └── seeder/         # Datos de prueba
│   ├── core/               # Configuración central
│   │   ├── config/         # Configuración de BD
│   │   └── middlewares/    # Middlewares personalizados
│   ├── utils/              # Utilidades comunes
│   └── docs/               # Configuración Swagger
├── uploads/                # Archivos subidos
├── dist/                   # Código compilado
└── docs/                   # Documentación OpenAPI
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 18
- MySQL >= 8.0
- npm o yarn

### Instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar .env con tus configuraciones
   ```

3. **Compilar TypeScript**
   ```bash
   npm run build
   ```

4. **Iniciar servidor**
   ```bash
   # Desarrollo (con recarga automática)
   npm run dev

   # Producción
   npm run start
   ```

## ⚙️ Configuración

### Variables de Entorno (.env)

```env
# Servidor
PORT=4003
API_PREFIX=/api/v1
NODE_ENV=development

# Base de datos
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=restausync

# JWT
JWT_SECRET=tu_jwt_secret_seguro

# Uploads
MAX_FILE_SIZE=5242880
UPLOAD_DIR=uploads
```

### Base de Datos

1. **Crear base de datos**
   ```sql
   CREATE DATABASE restausync;
   ```

2. **Ejecutar seeders** (datos de prueba)
   ```bash
   curl -X POST http://localhost:4003/api/v1/seed/rolesusers
   ```

## 📋 API Endpoints

### Documentación Interactiva

Accede a la documentación completa en: `http://localhost:4003/api-docs`

### Endpoints Principales

#### Autenticación
- `POST /api/v1/auth/login` - Iniciar sesión
- `POST /api/v1/auth/logout` - Cerrar sesión
- `GET /api/v1/auth/me` - Perfil de usuario

#### Usuarios
- `GET /api/v1/usuarios` - Listar usuarios
- `POST /api/v1/usuarios` - Crear usuario
- `GET /api/v1/usuarios/{id}` - Obtener usuario
- `PUT /api/v1/usuarios/{id}` - Actualizar usuario
- `DELETE /api/v1/usuarios/{id}` - Eliminar usuario

#### Platillos
- `GET /api/v1/platillos` - Listar platillos
- `POST /api/v1/platillos` - Crear platillo
- `GET /api/v1/platillos/{id}` - Obtener platillo
- `PUT /api/v1/platillos/{id}` - Actualizar platillo
- `DELETE /api/v1/platillos/{id}` - Eliminar platillo

#### Pedidos
- `GET /api/v1/pedidos` - Listar pedidos
- `POST /api/v1/pedidos` - Crear pedido
- `PATCH /api/v1/pedidos/{id}/estado` - Cambiar estado

#### Inventario
- `GET /api/v1/inventario` - Ver movimientos
- `POST /api/v1/inventario/entrada` - Registrar entrada
- `POST /api/v1/inventario/salida` - Registrar salida

## 🔐 Autenticación

La API utiliza autenticación JWT. Para acceder a endpoints protegidos:

1. **Obtener token**: `POST /api/v1/auth/login`
2. **Incluir en headers**: `Authorization: Bearer {token}`

### Roles y Permisos

- **admin**: Acceso completo a todas las funcionalidades
- **chef**: Gestión de menú, platillos e inventario
- **mesero**: Gestión de pedidos, mesas y clientes
- **inventario**: Solo gestión de inventario

## 📊 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia con nodemon (recarga automática)
npm run build        # Compila TypeScript
npm run start        # Inicia servidor en producción

# Testing
npm run test         # Ejecutar tests (si existen)

# Utilidades
npm run lint         # Ejecutar ESLint
npm run format       # Formatear código
```

## 🔧 Desarrollo

### Agregar Nuevo Módulo

1. Crear estructura en `src/modules/nombre_modulo/`
2. Implementar: controller, service, repository, entity, DTOs
3. Registrar rutas en `src/modules/_root/_root.routes.ts`
4. Agregar documentación JSDoc para Swagger

### Migraciones de Base de Datos

TypeORM maneja automáticamente las migraciones basadas en las entidades.

## 🚀 Despliegue

### Producción

1. **Construir aplicación**
   ```bash
   npm run build
   ```

2. **Configurar variables de entorno** para producción

3. **Iniciar servidor**
   ```bash
   npm run start
   ```

### Docker (Opcional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist/ ./dist/
EXPOSE 4003
CMD ["npm", "run", "start"]
```

## 🐛 Solución de Problemas

### Errores Comunes

1. **Error de conexión a BD**: Verificar credenciales en `.env`
2. **Puerto ocupado**: Cambiar PORT en `.env`
3. **CORS errors**: Verificar configuración de orígenes permitidos
4. **JWT errors**: Verificar JWT_SECRET

### Logs

Los logs se muestran en consola. Para producción, configurar logging apropiado.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Contribuidores

- JEBC-DeV - Desarrollador principal

## 📞 Soporte

Para soporte técnico, contactar al equipo de desarrollo.