# Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL

En este reto, debes construir operaciones básicas de CRUD (crear, obtener, actualizar y eliminar) en bases de datos SQL y NoSQL utilizando definición y manipulación de datos (DDL y DML). El dominio elegido es una tienda online donde se gestionan productos. Los productos tienen atributos como nombre, precio, descripción y categoría. Debes asegurarte de que las operaciones CRUD se realicen correctamente en las bases de datos DynamoDB y MongoDB.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del Entorno

**Objetivo:** Configurar el entorno de desarrollo para trabajar con DynamoDB y MongoDB.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura las conexiones a DynamoDB y MongoDB en tu proyecto.
- Asegúrate de que el proyecto esté preparado para usar TypeScript y React hooks para el manejo del estado.

**Entregable:** Entorno de desarrollo configurado con conexiones a DynamoDB y MongoDB, y proyecto preparado para usar TypeScript y React hooks.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y probar las conexiones a las bases de datos.

</details>

### Fase 2: Implementación de Operaciones CRUD en DynamoDB

**Objetivo:** Implementar operaciones CRUD en DynamoDB para gestionar productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea las funciones necesarias para realizar operaciones CRUD en DynamoDB.
- Asegúrate de que las operaciones se realicen correctamente y manejen posibles errores.

**Entregable:** Funciones para realizar operaciones CRUD en DynamoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y probar las funciones de CRUD en DynamoDB.

</details>

### Fase 3: Implementación de Operaciones CRUD en MongoDB

**Objetivo:** Implementar operaciones CRUD en MongoDB para gestionar productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea las funciones necesarias para realizar operaciones CRUD en MongoDB.
- Asegúrate de que las operaciones se realicen correctamente y manejen posibles errores.

**Entregable:** Funciones para realizar operaciones CRUD en MongoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar y probar las funciones de CRUD en MongoDB.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las operaciones CRUD y cómo se implementan en bases de datos SQL y NoSQL?
- **paraQueSirve**: ¿Para qué sirven las operaciones CRUD en el contexto de una tienda online?
- **comoSeUsa**: ¿Cómo se utilizan las operaciones CRUD en DynamoDB y MongoDB para gestionar productos?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar operaciones CRUD en bases de datos y cómo se manejan?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo con conexiones a DynamoDB y MongoDB.
- Implementación correcta de operaciones CRUD en DynamoDB.
- Implementación correcta de operaciones CRUD en MongoDB.
- Manejo correcto de posibles errores en las operaciones CRUD.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
