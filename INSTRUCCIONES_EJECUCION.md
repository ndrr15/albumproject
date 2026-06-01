# 🚀 Guía de Ejecución Local

## Configuración de Puertos

- **Backend .NET**: `http://localhost:5000`
- **Frontend Web (Angular)**: `http://localhost:4200`
- **Mobile (Ionic)**: `http://localhost:8100`

## Requisitos Previos

1. **Instalar .NET 10 SDK**
   - Descarga desde: https://dotnet.microsoft.com/download
   - Verifica la instalación: `dotnet --version`

2. **Node.js y npm** (ya están instalados)

## Ejecutar en Paralelo

### Terminal 1: Backend .NET

```powershell
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\AlbumProject"
dotnet restore
dotnet run
```

La API estará disponible en: `http://localhost:5000`
- Documentación Swagger: `http://localhost:5000/swagger`

### Terminal 2: Frontend Web Angular

```powershell
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\Client"
npm start
```

La aplicación web estará disponible en: `http://localhost:4200`

### Terminal 3: Mobile Ionic

```powershell
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\mobile\albumproject-mobile"
npm start
```

La aplicación móvil estará disponible en: `http://localhost:8100`

## Cómo Usar Ambos Frontends

### 🌐 Frontend Web (Cliente)
- URL: http://localhost:4200
- **Ideal para**: Navegar, agregar y eliminar álbumes con interfaz completa
- **Características**: 
  - Página única (SPA) con Bootstrap visual
  - Formulario para agregar álbumes
  - Lista de álbumes con opciones de eliminar
  - Indicador de conexión a API

### 📱 Frontend Mobile (Ionic)
- URL: http://localhost:8100
- **Ideal para**: Simular la experiencia móvil iOS/Android
- **Características**:
  - Interfaz Ionic con componentes nativos
  - Misma funcionalidad que la web
  - Optimizado para pantallas pequeñas
  - Mismo código Angular reutilizado

## Flujo de Pruebas

1. Abre 3 terminales PowerShell
2. Inicia los 3 servidores (backend, frontend, mobile)
3. Accede a:
   - http://localhost:5000/swagger → Ver API
   - http://localhost:4200 → Interfaz Web
   - http://localhost:8100 → Interfaz Móvil
4. Prueba agregar/eliminar álbumes desde ambas interfaces
5. Los cambios se sincronizan en tiempo real entre ambos frontends

## Troubleshooting

### API no responde
- Asegúrate que el backend .NET está corriendo
- Verifica que el puerto 5000 no está bloqueado

### Frontend no carga
- Borra `node_modules` y ejecuta `npm install` nuevamente
- Verifica que `npm start` se ejecutó sin errores

### CORS errors
- El backend tiene CORS habilitado para localhost:4200 y localhost:8100
- Si cambias puertos, actualiza CORS en `AlbumProject/Program.cs`

## Detener los Servidores

En cada terminal, presiona `Ctrl+C`
