## 🚀 RestauSync
![alt text](fondo.png) 

# RestauSync

**📊 Presentación trimestre 6:**
[Link](https://docs.google.com/presentation/d/1cb3NGtYcfXdklR3_MDdDhfMQn4S4nEf2/edit?usp=drivesdk&ouid=116668543162587748605&rtpof=true&sd=true)



## Descripción

RestauSync es un sistema integral de gestión para restaurantes que permite administrar usuarios, inventario, pedidos, menús, mesas y más. El proyecto se desarrolló de manera incremental a lo largo de varios trimestres, comenzando con la planificación y prototipos, hasta llegar a una aplicación web completa construida con Flask.

El sistema soporta múltiples roles de usuario: administradores, chefs, meseros, clientes, y gestiona operaciones clave como la toma de pedidos, control de inventario, gestión de menús y reportes.

## 🤖 Cronograma:**
[Link](https://docs.google.com/spreadsheets/d/1sU9yqRqmKJTXwxIzJmFOpNZCl_4W1LZl/edit?usp=drive_link&ouid=108198849053322034172&rtpof=true&sd=true)

## 🤖 Tablero Kanban:**
[Link](https://paulaacassiani.atlassian.net/jira/software/projects/SCRUM/boards/1?isEligibleForUserSurvey=true&visitedUserSeg=true)

## Estructura del Proyecto

El repositorio está organizado por fases de desarrollo y componentes principales:

```
RestauSync-main/
│
├── 01_proyecto/                          # Documentación y desarrollo del proyecto
│   ├── trimestre_2/                      # Segundo trimestre: Planificación y requerimientos
│   │   ├── 01_planteamiento_general/     # Planteamiento general del proyecto
│   │   ├── 02_mapa_de_procesos/          # Mapas de procesos (BPMN, PDF)
│   │   ├── 03_recoleccion_informacion/   # Recolección de información (entrevistas)
│   │   ├── 04_requerimientos/            # Requerimientos funcionales
│   │   ├── 05_casos_de_uso/              # Casos de uso
│   │   ├── 06_mockup/                    # Mockups del sistema
│   │   └── 07_ficha_tecnica/             # Ficha técnica y cotización
│   │
│   ├── trimestre_3/                      # Tercer trimestre: Diseño y prototipos
│   │   ├── 1_modelo_relacional/          # Modelo relacional de la base de datos
│   │   ├── 2_normalización/              # Normalización de la BD
│   │   ├── 3_diccionario_de_datos/       # Diccionario de datos
│   │   ├── 4_diagrama_de_clases/         # Diagramas de clases
│   │   ├── 5_diagrama_de_distribución/   # Diagramas de distribución
│   │   └── 6_prototipo_navegable/        # Prototipo navegable (HTML/CSS/JS)
│   │       ├── Gestión_Usuarios/         # Gestión de usuarios
│   │       ├── Inicio/                   # Página principal
│   │       ├── Inventario/               # Gestión de inventario
│   │       ├── Login_Register/           # Autenticación
│   │       ├── Pedidos/                  # Gestión de pedidos
│   │       ├── Reserva/                  # Reservas
│   │       └── usuarios/                 # Interfaces por rol (admin, cliente, cocinero)
│   │
│   ├── trimestre_4/                      # Cuarto trimestre: Implementación final
│   │   ├── Base de datos/                # Scripts SQL (consultas, datos, procedimientos)
│   │   ├── Diagrama de clases/           # Diagramas de clases finales
│   │   ├── Proyecto/                     # Aplicación Flask principal
│   │   │   ├── app/                      # Código de la aplicación
│   │   │   │   ├── controllers/          # Controladores (auth, admin, chef, etc.)
│   │   │   │   ├── models/               # Modelos de datos
│   │   │   │   ├── templates/            # Plantillas HTML
│   │   │   │   └── static/               # Archivos estáticos (CSS, JS, imágenes)
│   │   │   ├── config.py                 # Configuración
│   │   │   ├── run.py                    # Script de ejecución
│   │   │   ├── requirements.txt          # Dependencias Python
│   │   │   └── readme.md                 # Estructura de la app Flask
│   │   ├── Trabajo/                      # Versiones adicionales del proyecto
│   │   └── Vistas/                       # Vistas y prototipos adicionales
│   │
│   └── trimestre_5/                      # Quinto trimestre (en desarrollo)
│
├── 02_base_datos/                        # Scripts de base de datos adicionales
│   ├── consultas.sql
│   ├── datos.sql
│   ├── funciones.sql
│   ├── procedures.sql
│   └── restausync (5).sql
│
├── 03_backend/                           # Backend (en desarrollo)
├── 04_frontend_web/                      # Frontend web (en desarrollo)
└── 05_frontend_movil/                    # Frontend móvil (en desarrollo)
```

## Tecnologías Utilizadas

- **Backend:** Python, Flask
- **Base de Datos:** MySQL
- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap
- **Herramientas:** Git, GitHub
- **Diagramas:** MySQL Workbench, Visual Paradigm

## Instalación y Ejecución

### Prerrequisitos
- Python 3.8+
- MySQL
- pip

### Pasos de Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/RestauSync.git
   cd RestauSync-main
   ```

2. Instala las dependencias de la aplicación principal:
   ```bash
   cd 01_proyecto/trimestre_4/Proyecto
   pip install -r requirements.txt
   ```

3. Configura la base de datos:
   - Crea una base de datos MySQL llamada `restausync`
   - Ejecuta los scripts SQL en `01_proyecto/trimestre_4/Base de datos/` o `02_base_datos/`

4. Configura las variables de entorno:
   - Copia `.env.example` a `.env` y ajusta las configuraciones

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
- La aplicación final en `trimestre_4/Proyecto` es una implementación completa con Flask.
- Las carpetas `03_backend`, `04_frontend_web` y `05_frontend_movil` están reservadas para futuras expansiones

Commit 1: Actualización inicial.
Commit 2: Segunda actualización.