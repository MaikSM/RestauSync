# Restausync Oficial

Sistema completo de gestión para restaurantes con control de asistencia, inventario, pedidos y más.

## 🚀 Características Principales

- **Control de Asistencia**: Registro de entrada/salida de empleados mediante QR
- **Escaneo QR**: Integración con Capacitor ML Kit para escaneo nativo
- **Cámara**: Captura de fotos para diferentes funcionalidades
- **Gestión de Inventario**: Control de productos y existencias con movimientos detallados
- **Sistema de Pedidos**: Gestión completa de pedidos del restaurante con estados
- **Gestión de Mesas**: Control de disponibilidad y reservas de mesas
- **Sistema de Reservas**: Gestión de reservas de clientes
- **Catálogo de Platillos**: Menú digital con categorías y alérgenos
- **Gestión de Clientes**: Base de datos de clientes con favoritos
- **Roles de Usuario**: Admin, Chef, Mesero, Inventario
- **Interfaz Moderna**: Angular con Tailwind CSS y DaisyUI
- **API Documentada**: Documentación completa con Swagger/OpenAPI 3.0

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 19**: Framework principal
- **Capacitor**: Desarrollo de aplicaciones móviles híbridas
- **Tailwind CSS**: Framework de estilos
- **Capacitor ML Kit Barcode Scanning**: Escaneo QR nativo
- **Capacitor Camera**: Captura de fotos
- **QRCode.js**: Generación de códigos QR

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **TypeScript**: Tipado estático
- **TypeORM**: ORM para bases de datos
- **MySQL**: Base de datos relacional
- **JWT**: Autenticación basada en tokens
- **Bcrypt**: Encriptación de contraseñas
- **Swagger/OpenAPI 3.0**: Documentación de API
- **Class Validator**: Validación de datos
- **Multer**: Manejo de archivos
- **CORS**: Configuración de origen cruzado
- **Helmet**: Seguridad de headers HTTP
- **Morgan**: Logging de requests

## 📦 Instalación

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm o yarn
- MySQL
- Android Studio (para desarrollo Android)
- Xcode (para desarrollo iOS, solo en macOS)

### Instalación Automática (Recomendado)

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd restausync-oficcial
   ```

2. **Ejecuta el instalador automático**
   ```bash
   # En Windows
   setup.bat

   # En Linux/Mac
   chmod +x setup.sh && ./setup.sh
   ```

   Esto instalará dependencias, construirá el proyecto y verificará la configuración.

### Instalación Manual

Si prefieres instalar manualmente:

1. **Instala todas las dependencias**
   ```bash
   npm run install:all
   ```

2. **Configura las variables de entorno**
   ```bash
   cp .env.example backend/.env
   # Edita backend/.env con tus configuraciones
   ```

3. **Construye el proyecto**
   ```bash
   npm run build
   ```

### Instalación Manual

Si prefieres instalar manualmente:

1. **Instalar dependencias del frontend**
   ```bash
   npm run install:frontend
   ```

2. **Instalar dependencias del backend**
   ```bash
   npm run install:backend
   ```

## 🚀 Ejecución

### Inicio Automático (Recomendado)

```bash
# En Windows
start.bat

# En Linux/Mac
./start.sh
```

Esto iniciará tanto el backend como el frontend automáticamente.

### Inicio Manual

#### Desarrollo

1. **Iniciar el backend**
   ```bash
   npm run dev:backend
   ```

2. **Iniciar el frontend** (en otra terminal)
   ```bash
   npm run dev:frontend
   ```

### Producción

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Iniciar en producción**
   ```bash
   npm run start
   ```

## 📱 Desarrollo Móvil

### Android

1. **Agregar plataforma Android**
   ```bash
   cd frontend
   npx cap add android
   ```

2. **Sincronizar cambios**
   ```bash
   npx cap sync android
   ```

3. **Abrir en Android Studio**
   ```bash
   npx cap open android
   ```

### iOS

1. **Agregar plataforma iOS**
   ```bash
   cd frontend
   npx cap add ios
   ```

2. **Sincronizar cambios**
   ```bash
   npx cap sync ios
   ```

3. **Abrir en Xcode**
   ```bash
   npx cap open ios
   ```

## 🏗️ Arquitectura del Proyecto

### Estructura General
```
restausync/
├── backend/                 # API REST (Node.js + TypeScript)
│   ├── src/
│   │   ├── modules/         # Módulos por funcionalidad
│   │   │   ├── auth/        # Autenticación y usuarios
│   │   │   ├── categorias/  # Categorías de menú
│   │   │   ├── ingredientes/# Gestión de ingredientes
│   │   │   ├── menu/        # Platillos y recetas
│   │   │   ├── mesas/       # Gestión de mesas
│   │   │   ├── clientes/    # Gestión de clientes
│   │   │   ├── pedidos/     # Sistema de pedidos
│   │   │   ├── inventario/  # Control de inventario
│   │   │   ├── asistencia/  # Control de asistencia
│   │   │   └── seeder/      # Datos de prueba
│   │   ├── core/            # Configuración central
│   │   ├── utils/           # Utilidades comunes
│   │   └── docs/            # Documentación Swagger
│   └── uploads/             # Archivos subidos
├── frontend/                # Aplicación web (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/        # Módulos de autenticación
│   │   │   ├── admin/       # Panel administrativo
│   │   │   ├── private/     # Área privada de usuario
│   │   │   ├── front/       # Área pública
│   │   │   └── shared/      # Componentes compartidos
│   └── android/ios/         # Proyectos móviles (Capacitor)
└── docs/                    # Documentación adicional
```

### Patrón Arquitectónico
- **Backend**: Arquitectura modular con separación de responsabilidades
  - Controllers: Manejo de requests/responses
  - Services: Lógica de negocio
  - Repositories: Acceso a datos
  - Entities: Modelos de datos
  - DTOs: Validación de datos
  - Middlewares: Autenticación y autorización

- **Frontend**: Arquitectura basada en componentes
  - Feature modules por funcionalidad
  - Guards para protección de rutas
  - Interceptors para manejo de requests
  - Servicios para comunicación con API

## 🔧 Configuración

Crea un archivo `.env` en la carpeta `backend` con:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=restausync

JWT_SECRET=tu_jwt_secret

PORT=3000
```

### Base de Datos

1. **Crear la base de datos**
   ```sql
   CREATE DATABASE restausync;
   ```

2. **Ejecutar seeders** (desde el backend)
   ```bash
   # Los seeders se ejecutan automáticamente al iniciar la aplicación
   # O puedes crear un endpoint para ejecutarlos manualmente
   ```

## 📋 Scripts Disponibles

### Raíz del proyecto
- `npm run install:all` - Instala dependencias de frontend y backend
- `npm run dev` - Inicia el frontend en modo desarrollo
- `npm run build` - Construye frontend y backend
- `npm run start` - Inicia el backend en producción

### Frontend
- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye la aplicación
- `npm run test` - Ejecuta tests
- `npm run lint` - Ejecuta linter
- `npm run format` - Formatea el código

### Backend
- `npm run dev` - Inicia servidor en modo desarrollo con recarga automática
- `npm run build` - Compila TypeScript
- `npm run start` - Inicia servidor en producción

## 🔐 Funcionalidades de Seguridad

- Autenticación JWT
- Encriptación de contraseñas con bcrypt
- Validación de datos con class-validator
- Sanitización de entradas
- CORS configurado
- Helmet para headers de seguridad

## 📋 Documentación de API

La API está completamente documentada usando **Swagger/OpenAPI 3.0**.

### Acceder a la Documentación
- **URL**: `http://localhost:4003/api-docs`
- **Formato**: Interfaz interactiva de Swagger UI
- **Especificación**: Archivo `backend/docs/openapi.yaml`

### Endpoints Principales

#### 🔐 Autenticación
- `POST /api/v1/auth/login` - Iniciar sesión
- `POST /api/v1/auth/logout` - Cerrar sesión
- `GET /api/v1/auth/me` - Perfil de usuario

#### 👥 Usuarios
- `GET /api/v1/usuarios` - Listar usuarios
- `POST /api/v1/usuarios` - Crear usuario
- `GET /api/v1/usuarios/{id}` - Obtener usuario
- `PUT /api/v1/usuarios/{id}` - Actualizar usuario
- `DELETE /api/v1/usuarios/{id}` - Eliminar usuario

#### 📂 Categorías
- `GET /api/v1/categorias` - Listar categorías
- `POST /api/v1/categorias` - Crear categoría
- `PUT /api/v1/categorias/{id}` - Actualizar categoría
- `DELETE /api/v1/categorias/{id}` - Eliminar categoría

#### 🥕 Ingredientes
- `GET /api/v1/ingredientes` - Listar ingredientes
- `POST /api/v1/ingredientes` - Crear ingrediente
- `GET /api/v1/ingredientes/{id}` - Obtener ingrediente
- `PUT /api/v1/ingredientes/{id}` - Actualizar ingrediente
- `DELETE /api/v1/ingredientes/{id}` - Eliminar ingrediente

#### 🍽️ Platillos
- `GET /api/v1/platillos` - Listar platillos
- `POST /api/v1/platillos` - Crear platillo
- `GET /api/v1/platillos/{id}` - Obtener platillo
- `PUT /api/v1/platillos/{id}` - Actualizar platillo
- `DELETE /api/v1/platillos/{id}` - Eliminar platillo

#### 🪑 Mesas
- `GET /api/v1/mesas` - Listar mesas
- `POST /api/v1/mesas` - Crear mesa
- `PUT /api/v1/mesas/{id}` - Actualizar mesa
- `PATCH /api/v1/mesas/{id}/estado` - Cambiar estado

#### 👥 Clientes
- `GET /api/v1/clientes` - Listar clientes
- `POST /api/v1/clientes` - Crear cliente
- `GET /api/v1/clientes/{id}` - Obtener cliente
- `PUT /api/v1/clientes/{id}` - Actualizar cliente
- `DELETE /api/v1/clientes/{id}` - Eliminar cliente

#### 🧾 Pedidos
- `GET /api/v1/pedidos` - Listar pedidos
- `POST /api/v1/pedidos` - Crear pedido
- `GET /api/v1/pedidos/{id}` - Obtener pedido
- `PATCH /api/v1/pedidos/{id}/estado` - Cambiar estado
- `DELETE /api/v1/pedidos/{id}` - Cancelar pedido

#### 📦 Inventario
- `GET /api/v1/inventario` - Ver movimientos
- `POST /api/v1/inventario/entrada` - Registrar entrada
- `POST /api/v1/inventario/salida` - Registrar salida
- `POST /api/v1/inventario/ajuste` - Registrar ajuste

#### 📊 Asistencia
- `GET /api/v1/asistencia` - Ver registros
- `POST /api/v1/asistencia` - Crear registro
- `PUT /api/v1/asistencia/{id}` - Actualizar registro
- `DELETE /api/v1/asistencia/{id}` - Eliminar registro

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Error de dependencias**: Ejecuta `npm run install:all` para reinstalar todas las dependencias

2. **Error de base de datos**: Verifica que MySQL esté corriendo y las credenciales sean correctas

3. **Error de permisos de cámara**: En aplicaciones móviles, asegúrate de que los permisos estén configurados en el manifiesto

4. **Error de QR**: Verifica que el formato del QR sea `user-id:{numero}`

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Contribuidores

- JEBC-DeV - Desarrollador principal

## 📞 Soporte

Para soporte técnico, por favor contacta al equipo de desarrollo.