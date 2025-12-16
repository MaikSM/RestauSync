# 04_frontend_web

Esta carpeta contiene la implementación del frontend web para RestauSync usando Angular e Ionic.

## Arquitectura

Aplicación web SPA (Single Page Application) construida con Angular 17+ y Ionic Framework. Implementa un diseño responsivo con interfaces específicas para cada rol de usuario.

## Estructura

### frontend/
- **src/app/**: Código fuente de la aplicación
  - **admin/**: Módulo de administración
    - **_layout/**: Layout compartido para admin
    - **pages/**: Páginas de dashboard, inventario, reservas, roles, usuarios
  - **auth/**: Módulo de autenticación
    - **pages/**: Login y registro
  - **front/**: Módulo público
    - **pages/**: Página de inicio
  - **private/**: Módulo privado para usuarios autenticados
  - **waiter/**: Módulo para meseros
    - **pages/**: Dashboard, mesas, pedidos, perfil
  - **shared/**: Componentes y servicios compartidos
    - **guards/**: Guards de autenticación y autorización
    - **interceptors/**: Interceptor para JWT
    - **interfaces/**: Definiciones TypeScript
    - **components/**: Componentes reutilizables

- **public/**: Archivos estáticos
- **ios/**: Configuración para iOS (Capacitor)
- **android/**: Configuración para Android (Capacitor)

## Tecnologías

- **Framework**: Angular 17+
- **UI Library**: Ionic 7+
- **Lenguaje**: TypeScript
- **Styling**: SCSS con Ionic components
- **Estado**: Servicios Angular con RxJS
- **HTTP**: HttpClient con interceptors
- **Routing**: Angular Router con guards
- **Build**: Angular CLI
- **Mobile**: Capacitor para híbrido

## Instalación y Ejecución

```bash
cd frontend
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

> Nota: el endpoint del backend se configura en [`src/environments/environment.ts`](RestauSync/04_frontend_web/frontend/src/environments/environment.ts:1) y [`src/environments/environment.development.ts`](RestauSync/04_frontend_web/frontend/src/environments/environment.development.ts:1).

## Roles y Funcionalidades

### Administrador
- Dashboard con estadísticas
- Gestión de usuarios y roles
- Control de inventario
- Gestión de menús y platos
- Administración de mesas y reservas

### Mesero
- Visualización de mesas disponibles
- Toma de pedidos
- Gestión de pedidos activos
- Perfil personal

### Cliente (Público)
- Visualización del menú
- Información del restaurante

## Características Técnicas

- **Autenticación JWT**: Persistencia de sesión
- **Guards de ruta**: Protección de rutas por roles
- **Interfaz responsiva**: Adaptable a móviles y desktop
- **Componentes Ionic**: UI consistente y nativa
- **Lazy loading**: Carga diferida de módulos
- **Servicios HTTP**: Comunicación con backend API
- **Validación de formularios**: Reactive Forms
- **PWA Ready**: Preparado para Progressive Web App

## Build para Producción

```bash
npm run build
```

Los archivos se generan en `dist/`

## Capacitor (Híbrido)

Para generar app móvil:
```bash
npx cap add android
npx cap build android
npx cap open android
```

Este frontend proporciona una experiencia completa de gestión de restaurante con interfaces intuitivas para cada tipo de usuario.