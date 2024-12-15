
# Trabajo Práctico - React + Vite + Spring Boot

Este trabajo práctico utiliza **React** con **Vite** para el frontend y **Spring Boot** para el backend. A continuación, se detallan los pasos para ejecutar el proyecto.

## Requisitos Previos

1. **Node.js**: [Descargar](https://nodejs.org/)
2. **Java 17+**: [Descargar](https://adoptium.net/)
3. **Maven**: [Descargar](https://maven.apache.org/download.cgi)
4. **Git**: [Descargar](https://git-scm.com/)

## Pasos para Ejecutar el Proyecto

### Backend (Spring Boot)

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <nombre_del_directorio>
   ```

2. Instalar dependencias:

   ```bash
   mvn install
   ```

3. Ejecutar el backend:

   ```bash
   mvn spring-boot:run
   ```

   El servidor estará disponible en `http://localhost:8080`.

### Frontend (React + Vite)

1. Navegar al directorio del frontend:

   ```bash
   cd frontend
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   El frontend estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

```
/root
  /frontend            # Código de React con Vite
  /backend             # Código de Spring Boot
```

## Notas

- Asegúrese de que ambos servidores (frontend y backend) estén ejecutándose.


