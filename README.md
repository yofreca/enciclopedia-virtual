# Enciclopedia Virtual Animada

Una enciclopedia interactiva que combina visualizaciones 3D del universo con anatomía humana animada, creada con React, Three.js y Framer Motion.

## Características

### Sistema Solar Interactivo (Completado)
- Visualización 3D completa del sistema solar
- 8 planetas con texturas realistas y colores distintivos
- Sol con iluminación y efecto de brillo pulsante
- Órbitas circulares visibles para cada planeta
- Rotación realista de cada planeta sobre su eje
- Anillos de Saturno animados
- Controles de cámara 3D (rotación, zoom, paneo)
- Sistema de información detallada al hacer clic en planetas/sol
- Controles de velocidad (0.1x a 10x)
- Pausa/reproducción
- Botón de reinicio
- Campo estelar de fondo animado

### Fases Lunares Animadas (Completado)
- Visualización SVG de la Luna con textura de cráteres
- 8 fases lunares completas (Nueva, Creciente, Cuarto Creciente, Gibosa Creciente, Llena, Gibosa Menguante, Cuarto Menguante, Menguante)
- Animación automática del ciclo lunar completo
- Timeline interactiva con miniatura de cada fase
- Selección manual de cualquier fase
- Efectos de iluminación y brillo realistas
- Panel lateral con información detallada de cada fase
- Datos científicos de la Luna
- Controles avanzados (Play/Pausa, velocidad, navegación fase por fase)
- Transiciones suaves entre fases
- Barra de progreso del ciclo
- Diseño responsivo

### Próximamente
- Constelaciones Interactivas
- Atlas del Cuerpo Humano:
  - Sistema Nervioso
  - Sistema Circulatorio
  - Sistema Respiratorio

## Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS v4** - Estilos con tema personalizado
- **Three.js** - Motor 3D
- **React Three Fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers para R3F
- **Framer Motion** - Animaciones 2D
- **React Router** - Navegación
- **React Icons** - Iconografía

## Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd enciclopedia-virtual

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── common/              # Componentes compartidos
│   │   ├── Layout.tsx
│   │   ├── PlanetInfoCard.tsx
│   │   └── SolarSystemControls.tsx
│   ├── navigation/          # Navegación
│   │   └── Navbar.tsx
│   └── animations/          # Componentes 3D y animados
│       ├── SolarSystemScene.tsx
│       ├── Sun.tsx
│       └── Planet.tsx
├── pages/                   # Páginas de la aplicación
│   ├── Home.tsx
│   ├── SistemaSolar.tsx
│   ├── FasesLunares.tsx
│   ├── Constelaciones.tsx
│   └── CuerpoHumano/
│       ├── index.tsx
│       ├── SistemaNervioso.tsx
│       ├── SistemaCirculatorio.tsx
│       └── SistemaRespiratorio.tsx
├── data/                    # Datos de planetas, etc.
│   └── planetsData.ts
└── utils/                   # Utilidades
```

## Controles del Sistema Solar

- **Clic derecho + Arrastrar**: Rotar cámara
- **Scroll**: Zoom in/out
- **Clic izquierdo en planeta/sol**: Ver información detallada
- **Botones de control**:
  - Play/Pausa: Pausar animación
  - +/- : Ajustar velocidad de órbita
  - Reset: Reiniciar vista y configuración

## Controles de Fases Lunares

- **Timeline superior**: Clic en cualquier fase para saltar directamente
- **Botones de navegación**: Anterior/Siguiente para cambiar fase manualmente
- **Botones de control**:
  - Play/Pausa: Pausar ciclo automático
  - +/- : Ajustar velocidad del ciclo (0.1x a 5x)
  - Reset: Volver a Luna Nueva
- **Panel lateral**: Información detallada de la fase actual
- **Animación automática**: Cambia de fase cada 3 segundos (ajustable)

## Progreso del Desarrollo

- [x] **Fase 1**: Setup inicial del proyecto
- [x] **Fase 2**: Sistema Solar Interactivo 3D
- [x] **Fase 3**: Fases Lunares Animadas
- [ ] **Fase 4**: Constelaciones Animadas
- [ ] **Fase 5**: Sistema Nervioso
- [ ] **Fase 6**: Sistema Circulatorio
- [ ] **Fase 7**: Sistema Respiratorio
- [ ] **Fase 8**: Integración y Pulido Final

Ver [PLAN.md](./PLAN.md) para detalles completos del plan de trabajo.

## Datos de los Planetas

El sistema incluye información detallada de todos los planetas:
- Mercurio, Venus, Tierra, Marte (Planetas rocosos)
- Júpiter, Saturno (Gigantes gaseosos)
- Urano, Neptuno (Gigantes de hielo)

Cada planeta incluye:
- Diámetro
- Distancia al Sol
- Período orbital
- Duración del día
- Temperatura
- Número de lunas

## Licencia

MIT

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores.
