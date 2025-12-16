# 05_frontend_movil

Esta carpeta contiene la implementación de la aplicación móvil para RestauSync usando Capacitor para desarrollo híbrido.

## Arquitectura

Aplicación móvil híbrida que comparte código con el frontend web pero optimizada para experiencia móvil nativa. Construida con Ionic y Angular, empaquetada con Capacitor.

## Estructura

### android/
Contiene el proyecto Android generado por Capacitor:
- **app/**: Código fuente Android
  - **src/main/assets/public/**: Assets web empaquetados
  - **src/main/res/**: Recursos Android (iconos, splash screens)
- **gradle/**: Configuración de build de Android

### ios/ (si existe)
Proyecto iOS generado por Capacitor.

### www/ (generado)
Archivos web compilados que se empaquetan en la app móvil.

## Tecnologías

- **Framework**: Angular 17+ con Ionic 7+
- **Empaquetado**: Capacitor 5+
- **Plataforma**: Android (primaria), iOS (opcional)
- **Build**: Gradle para Android
- **Lenguaje**: TypeScript, Java/Kotlin para nativo

## Instalación y Ejecución

### Desarrollo
```bash
npm install
npm start  # Para desarrollo web
```

### Build para Móvil
```bash
# Build web
npm run build

# Sincronizar con Capacitor
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

## Funcionalidades

La app móvil incluye las mismas funcionalidades que el frontend web pero optimizadas para móvil:

- **Autenticación**: Login/registro con JWT
- **Meseros**: Gestión de mesas y pedidos
- **Clientes**: Visualización de menú
- **Administradores**: Panel completo de gestión

## Características Móviles

- **Nativo**: Acceso a APIs nativas (cámara, GPS, notificaciones)
- **Offline**: Cache inteligente para funcionamiento offline
- **Push Notifications**: Notificaciones push para pedidos
- **PWA**: Funciona como PWA en navegador móvil
- **Responsive**: Diseño adaptado a pantallas táctiles

## Build de Producción

```bash
# Build optimizado
npm run build --prod

# Generar APK
npx cap build android
npx cap open android  # Abrir en Android Studio para firmar y generar APK
```

## Configuración

- **capacitor.config.ts**: Configuración de Capacitor
- **android/app/build.gradle**: Configuración específica de Android
- **Variables de entorno**: Configurar API endpoints para móvil

## Requisitos

- **Node.js** 18+
- **Android Studio** con SDK 30+
- **Java JDK** 11+ (recomendado JDK 17)
- **Capacitor CLI** instalado globalmente

Esta aplicación móvil permite a los usuarios gestionar el restaurante desde cualquier dispositivo Android con una experiencia nativa fluida.