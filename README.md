## 🚀 RestauSync
![alt text](fondo.png) 

# RestauSync

**📊 Presentación trimestre 6:**
[Link](https://docs.google.com/presentation/d/1cb3NGtYcfXdklR3_MDdDhfMQn4S4nEf2/edit?usp=drivesdk&ouid=116668543162587748605&rtpof=true&sd=true)



## Descripción

RestauSync es un sistema integral de gestión para restaurantes que permite administrar usuarios, inventario, pedidos, menús, mesas y más. El proyecto se desarrolló de manera incremental a lo largo de varios trimestres, comenzando con la planificación y prototipos, hasta llegar a una aplicación completa con múltiples componentes: backend API, frontend web y aplicación móvil.

El sistema soporta múltiples roles de usuario: administradores, chefs, meseros, clientes, y gestiona operaciones clave como la toma de pedidos, control de inventario, gestión de menús, reservas y reportes.

## 🤖 Cronograma:**
[Link](https://docs.google.com/spreadsheets/d/1sU9yqRqmKJTXwxIzJmFOpNZCl_4W1LZl/edit?usp=drive_link&ouid=108198849053322034172&rtpof=true&sd=true)

## 🤖 Tablero Kanban:**
[Link](https://paulaacassiani.atlassian.net/jira/software/projects/SCRUM/boards/1?isEligibleForUserSurvey=true&visitedUserSeg=true)

## Estructura del Proyecto

El repositorio está organizado por componentes principales. Cada carpeta raíz contiene un README.md con documentación detallada de su funcionamiento.

```
RestauSync-main/
│
├── 01_proyecto/                          # 📁 Documentación completa del proyecto por trimestres
│   ├── trimestre_2/                      # Planificación y requerimientos
│   ├── trimestre_3/                      # Diseño y prototipos
│   ├── trimestre_4/                      # Implementación Flask (legacy)
│   └── trimestre_5/                      # Desarrollo adicional
│   └── README.md                         # 📖 Documentación detallada
│
├── 02_base_datos/                        # 🗄️ Scripts SQL adicionales
│   ├── consultas.sql
│   ├── datos.sql
│   ├── funciones.sql
│   ├── procedures.sql
│   └── restausync (5).sql
│   └── README.md                         # 📖 Guía de base de datos
│
├── 03_backend/                           # 🚀 Backend API moderno (Node.js/TypeScript)
│   └── backend/                          # Servidor Express con módulos RESTful
│   └── README.md                         # 📖 Documentación de la API
│
├── 04_frontend_web/                      # 💻 Frontend web (Angular/Ionic)
│   └── frontend/                         # SPA con interfaces por roles
│   └── README.md                         # 📖 Guía de desarrollo web
│
├── 05_frontend_movil/                    # 📱 Frontend móvil (Capacitor)
│   └── android/                          # Build nativo para Android
│   └── README.md                         # 📖 Documentación móvil
│
├── .gitignore                            # 🚫 Reglas de ignorar archivos
├── README.md                             # 📖 Documentación principal del proyecto
├── fondo.png                             # 🖼️ Imagen de fondo
└── readme.html                           # 🌐 Versión HTML del README
```

## Tecnologías Utilizadas

- **Backend API:** Node.js, TypeScript, Express.js
- **Frontend Web:** Angular, Ionic, TypeScript
- **Frontend Móvil:** Capacitor, Ionic
- **Backend Legacy:** Python, Flask
- **Base de Datos:** MySQL
- **Frontend Legacy:** HTML5, CSS3, JavaScript, Bootstrap
- **Herramientas:** Git, GitHub, VSCode
- **Diagramas:** MySQL Workbench, Visual Paradigm

## Instalación y Ejecución

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Python 3.8+ (para backend legacy)
- MySQL
- Android Studio (para móvil)

### Backend API (Node.js/TypeScript)

1. Navega al directorio del backend:
   ```bash
   cd 03_backend/backend
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura variables de entorno:
   - Copia `.env.example` a `.env` y ajusta configuraciones

4. Ejecuta el servidor:
   ```bash
   npm run dev
   ```

El API estará disponible en `http://localhost:3000`

### Frontend Web (Angular)

1. Navega al directorio del frontend web:
   ```bash
   cd 04_frontend_web/frontend
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm start
   ```

La aplicación web estará disponible en `http://localhost:4200`

### Frontend Móvil (Capacitor)

1. Navega al directorio del frontend móvil:
   ```bash
   cd 05_frontend_movil
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Construye para Android:
   ```bash
   npx cap build android
   ```

4. Abre en Android Studio:
   ```bash
   npx cap open android
   ```

### Backend Legacy (Python/Flask)

1. Navega al directorio del proyecto Flask:
   ```bash
   cd 01_proyecto/trimestre_4/Proyecto
   ```

2. Instala dependencias:
   ```bash
   pip install -r requirements.txt
   ```

3. Configura la base de datos:
   - Crea una base de datos MySQL llamada `restausync`
   - Ejecuta los scripts SQL en `01_proyecto/trimestre_4/Base de datos/` o `02_base_datos/`

4. Configura variables de entorno:
   - Copia `.env.example` a `.env` y ajusta configuraciones

5. Ejecuta la aplicación:
   ```bash
   python run.py
   ```

La aplicación estará disponible en `http://localhost:5000`

## Contribuidores

- [Lista de contribuidores del proyecto]

## Licencia

Este proyecto es de uso educativo y está disponible bajo la licencia MIT.

## Notas Adicionales

- El proyecto se desarrolló como parte de un curso académico, dividido en trimestres.
- Los prototipos en `trimestre_3` son versiones navegables en HTML/CSS/JS puro.
- La aplicación en `trimestre_4/Proyecto` es una implementación legacy con Flask.
- El backend moderno en `03_backend` proporciona una API RESTful con TypeScript.
- El frontend web en `04_frontend_web` es una aplicación SPA con Angular.
- El frontend móvil en `05_frontend_movil` es una app híbrida con Capacitor para Android.
- Todas las implementaciones comparten la misma base de datos MySQL.