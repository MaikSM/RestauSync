# Restausync - Frontend

Aplicación web moderna para gestión de restaurantes, desarrollada con Angular y Capacitor para soporte móvil híbrido.

## 🚀 Características

- **Aplicación Web Moderna**: Desarrollada con Angular 19
- **Diseño Responsivo**: Interfaz adaptativa con Tailwind CSS y DaisyUI
- **Aplicación Móvil Híbrida**: Soporte para Android e iOS con Capacitor
- **Escaneo QR Nativo**: Integración con Capacitor ML Kit
- **Captura de Fotos**: Funcionalidad de cámara integrada
- **Sistema de Autenticación**: Login/registro con JWT
- **Panel Administrativo**: Gestión completa del restaurante
- **Área de Meseros**: Gestión de pedidos y mesas
- **Área Pública**: Menú digital para clientes
- **PWA Ready**: Preparado para instalación como PWA

## 🛠️ Tecnologías

### Core
- **Angular 19**: Framework principal
- **TypeScript**: Tipado estático
- **RxJS**: Programación reactiva
- **Angular Router**: Navegación SPA

### UI/UX
- **Tailwind CSS**: Framework de estilos utilitarios
- **DaisyUI**: Componentes UI sobre Tailwind
- **Angular Material**: Componentes adicionales

### Móvil
- **Capacitor**: Runtime para aplicaciones híbridas
- **Capacitor Camera**: Captura de fotos nativa
- **Capacitor ML Kit Barcode Scanning**: Escaneo QR nativo

### Utilidades
- **QRCode.js**: Generación de códigos QR
- **jspdf**: Generación de PDFs
- **Chart.js**: Gráficos y visualizaciones

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── auth/               # Módulos de autenticación
│   │   │   ├── pages/          # Páginas de login/registro
│   │   │   ├── services/       # Servicios de auth
│   │   │   └── guards/         # Guards de autenticación
│   │   ├── admin/              # Panel administrativo
│   │   │   ├── pages/          # Páginas del admin
│   │   │   ├── services/       # Servicios del admin
│   │   │   └── guards/         # Guards de admin
│   │   ├── private/            # Área privada de usuario
│   │   ├── front/              # Área pública
│   │   │   ├── pages/          # Páginas públicas
│   │   │   └── services/       # Servicios públicos
│   │   ├── shared/             # Componentes compartidos
│   │   │   ├── components/     # Componentes reutilizables
│   │   │   ├── guards/         # Guards compartidos
│   │   │   ├── interceptors/   # Interceptores HTTP
│   │   │   ├── interfaces/     # Interfaces TypeScript
│   │   │   ├── pipes/          # Pipes personalizados
│   │   │   └── services/       # Servicios compartidos
│   │   └── core/               # Configuración central
│   ├── assets/                 # Recursos estáticos
│   ├── environments/           # Configuración por entorno
│   └── styles.css              # Estilos globales
├── android/                    # Proyecto Android (generado)
├── ios/                        # Proyecto iOS (generado)
└── capacitor.config.ts         # Configuración Capacitor
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 18
- npm o yarn
- Angular CLI >= 19

### Instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Configurar entorno**
   ```bash
   cp src/environments/environment.ts src/environments/environment.local.ts
   # Editar environment.local.ts con la URL de la API
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación**
   - Web: `http://localhost:4200`
   - Admin: `http://localhost:4200/admin`

## ⚙️ Configuración

### Variables de Entorno

**`src/environments/environment.ts`** (Producción)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tu-api.com/api/v1',
  appName: 'RestauSync',
  version: '1.0.0'
};
```

**`src/environments/environment.development.ts`** (Desarrollo)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4003/api/v1',
  appName: 'RestauSync',
  version: '1.0.0'
};
```

## 📱 Desarrollo Móvil

### Android

1. **Agregar plataforma**
   ```bash
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

1. **Agregar plataforma** (solo en macOS)
   ```bash
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

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo
npm run build            # Construye para producción
npm run watch            # Construye en modo watch
npm run test             # Ejecuta tests unitarios
npm run lint             # Ejecuta ESLint
npm run format           # Formatea código con Prettier

# Capacitor
npm run cap:sync         # Sincroniza con plataformas móviles
npm run cap:android      # Abre proyecto Android
npm run cap:ios          # Abre proyecto iOS
```

## 🏗️ Arquitectura

### Patrón de Diseño

- **Component-based Architecture**: Componentes modulares y reutilizables
- **Feature Modules**: Módulos por funcionalidad
- **Smart/Dumb Components**: Separación de lógica y presentación
- **Services**: Lógica de negocio y comunicación con API
- **Guards**: Protección de rutas
- **Interceptors**: Manejo global de requests/responses

### Gestión de Estado

- **RxJS**: Programación reactiva para manejo de estado
- **BehaviorSubjects**: Estado compartido entre componentes
- **Local Storage**: Persistencia de sesión

### Seguridad

- **JWT Tokens**: Autenticación basada en tokens
- **Route Guards**: Protección de rutas por roles
- **HTTP Interceptors**: Inyección automática de tokens
- **Input Validation**: Validación de formularios

## 🚀 Despliegue

### Producción Web

1. **Construir aplicación**
   ```bash
   npm run build
   ```

2. **Desplegar archivos de `dist/`**
   - Vercel, Netlify, GitHub Pages
   - Servidor web tradicional
   - CDN

### Producción Móvil

1. **Construir aplicación web**
   ```bash
   npm run build
   ```

2. **Sincronizar con plataformas**
   ```bash
   npx cap sync
   ```

3. **Construir APKs/IPAs**
   ```bash
   # Android
   npx cap build android

   # iOS
   npx cap build ios
   ```

## 🔐 Funcionalidades por Rol

### Administrador
- Gestión completa de usuarios
- Configuración del sistema
- Reportes y estadísticas
- Gestión de menú e inventario

### Chef
- Gestión de platillos y recetas
- Control de inventario
- Gestión de categorías

### Mesero
- Gestión de pedidos
- Control de mesas
- Atención a clientes

### Cliente
- Ver menú
- Hacer pedidos
- Gestionar favoritos

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests end-to-end (si configurados)
npm run e2e
```

## 📊 Rendimiento

### Optimizaciones Incluidas

- **Lazy Loading**: Carga diferida de módulos
- **Tree Shaking**: Eliminación de código no usado
- **Bundle Splitting**: División de bundles
- **Image Optimization**: Optimización de imágenes
- **Caching**: Estrategias de cache

### PWA Features

- **Service Worker**: Cache offline
- **Web App Manifest**: Instalación como app
- **Push Notifications**: Notificaciones push

## 🐛 Solución de Problemas

### Errores Comunes

1. **Error de CORS**: Verificar configuración de API
2. **Error de cámara**: Verificar permisos en dispositivo
3. **Error de QR**: Verificar formato del código
4. **Error de build**: Limpiar node_modules y reinstall

### Debug Móvil

```bash
# Ver logs de consola
npx cap run android  # Para Android
npx cap run ios      # Para iOS
```

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Contribuidores

- JEBC-DeV - Desarrollador principal

## 📞 Soporte

Para soporte técnico, contactar al equipo de desarrollo.