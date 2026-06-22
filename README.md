# 🎓 API REST - Sistema de Administración de Estudiantes

Este proyecto consiste en el desarrollo de una **API REST** para la gestión de estudiantes, construida utilizando **Node.js** y el framework **Express.js**. La persistencia de datos se maneja de forma temporal mediante un array de objetos en memoria (*datos quemados/hardcoded*).

---

## 🛠️ Tecnologías Utilizadas

* **Runtime:** Node.js (v18+)
* **Framework:** Express.js (v5.2.1)
* **Gestor de Paquetes:** pnpm (v11.1.1)
* **Módulo de Sistema:** ES Modules (`"type": "module"`)
* **Herramientas de Desarrollo:** Nodemon (para reinicio automático del servidor)

---
## 🚀 Cómo Ejecutar el Proyecto

Sigue estos pasos para clonar el proyecto y ejecutar el servidor en tu máquina local.

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar el servidor en modo desarrollo

Para iniciar el servidor con recarga automática:

```bash
pnpm dev
```

---

## 📌 Endpoints Disponibles

| Método HTTP | Endpoint            | Descripción                              | Body        |
| ----------- | ------------------- | ---------------------------------------- | ----------- |
| GET         | `/api/students`     | Obtiene la lista completa de estudiantes | No requiere |
| GET         | `/api/students/:id` | Obtiene un estudiante por ID             | No requiere |
| POST        | `/api/students`     | Registra un nuevo estudiante             | JSON        |
| PUT         | `/api/students/:id` | Actualiza un estudiante                  | JSON        |
