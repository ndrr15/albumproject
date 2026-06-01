# AlbumProject 🎵

Aplicación completa para gestionar álbumes con:
- **Backend**: .NET 10 Web API
- **Frontend Web**: Angular 21 (SPA)
- **Frontend Mobile**: Ionic + Angular (iOS/Android)

---

## 📁 Estructura del Proyecto

```
albumproject/
├── AlbumProject/           # Backend .NET 10
├── Client/                 # Frontend Web Angular
├── mobile/
│   └── albumproject-mobile/ # Frontend Mobile Ionic + Angular
└── README.md
```

---

## 🚀 Comandos para Ejecutar

### **Backend .NET 10** (Puerto 5000)

Abre una terminal PowerShell y ejecuta:

```powershell
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\AlbumProject"
dotnet run
```

**Accesos:**
- 🌐 API Base: http://localhost:5000
- 📚 Swagger Docs: http://localhost:5000/swagger
- 📊 API Endpoints: http://localhost:5000/api/albums

---

### **Frontend Web Angular** (Puerto 4200)

Abre una **nueva terminal PowerShell** y ejecuta:

```powershell
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\Client"
npm start
```

**Acceso:**
- 🌐 Web App: http://localhost:4200

---

### **Frontend Mobile Ionic** (Puerto 8100)

Abre una **tercera terminal PowerShell** y ejecuta:

```powershell
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\mobile\albumproject-mobile"
npm start
```

**Acceso:**
- 📱 Mobile App: http://localhost:8100

---

## 📋 Inicialización (primera vez)

### 1. Instalar .NET 10 SDK

Descarga desde: https://dotnet.microsoft.com/download

Verifica la instalación:
```powershell
dotnet --version
```

### 2. Instalar dependencias del Frontend

```powershell
# Frontend Web
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\Client"
npm install

# Frontend Mobile
cd "c:\Users\ndrr1\OneDrive\Documents\albumproject\mobile\albumproject-mobile"
npm install
```

---

## 🎯 Flujo de Pruebas Completo

1. **Inicia Backend** (Terminal 1): `dotnet run`
2. **Inicia Frontend Web** (Terminal 2): `npm start` en `Client/`
3. **Inicia Frontend Mobile** (Terminal 3): `npm start` en `mobile/albumproject-mobile/`

Luego:
- Abre http://localhost:4200 (web)
- Abre http://localhost:8100 (mobile)
- Ambos conectan a http://localhost:5000 (API)

---

## 📊 Funcionalidades

Ambos frontends permiten:
- ✅ Conectarse a la API
- ✅ Listar todos los álbumes
- ✅ Agregar nuevos álbumes (título, artista, género)
- ✅ Eliminar álbumes
- ✅ Ver indicador de conexión a API

---

## 🗄️ Base de Datos

**Desarrollo:**
- SQLite local: `albums.db`
- Ubicada en: `AlbumProject/albums.db`

**Producción (Recomendado):**
- Supabase (PostgreSQL gratuito)
- Neon / Railway (PostgreSQL)
- PlanetScale (MySQL)

---

## 🔧 Configuración

### CORS (Cross-Origin Resource Sharing)

El backend permite requests desde:
- `http://localhost:4200` (Frontend Web)
- `http://localhost:8100` (Frontend Mobile)

Para agregar más orígenes, edita: `AlbumProject/Program.cs` en la sección `AddCors`

### API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/albums` | Listar todos los álbumes |
| GET | `/api/albums/{id}` | Obtener un álbum por ID |
| POST | `/api/albums` | Crear nuevo álbum |
| PUT | `/api/albums/{id}` | Actualizar álbum |
| DELETE | `/api/albums/{id}` | Eliminar álbum |

---

## 📚 Tecnologías

- **Backend**: .NET 10, Entity Framework Core, SQLite
- **Frontend Web**: Angular 21, HttpClient, Reactive Forms
- **Frontend Mobile**: Ionic 8, Angular 20, Capacitor
- **API Docs**: Swagger/OpenAPI

---

## ⚠️ Troubleshooting

### Error: "Port X is already in use"

```powershell
# Matar proceso en puerto específico (ejemplo puerto 5000)
Get-NetTCPConnection -LocalPort 5000 | 
  ForEach-Object { Stop-Process -ID $_.OwningProcess -Force }
```

### Error: "dotnet: command not found"

Asegúrate de tener .NET 10 SDK instalado:
```powershell
dotnet --version
```

Si falta, descárgalo desde: https://dotnet.microsoft.com/download

### API no conecta desde el frontend

1. Verifica que el backend esté corriendo en http://localhost:5000
2. Abre la consola del navegador (F12) y busca errores CORS
3. Revisa que el puerto 5000 sea accesible

---

## 🎨 Próximos Pasos (Opcional)

- [ ] Agregar autenticación (JWT con .NET)
- [ ] Mejorar UI/UX con más páginas
- [ ] Conectar a base de datos cloud
- [ ] Compilar mobile app nativa con Capacitor
- [ ] Desplegar en producción (Azure, Vercel, Netlify)

---

## 📝 Notas

- Los datos se guardan en SQLite y persisten mientras la DB no se elimine
- Hot reload activado en ambos frontends (cambios en tiempo real)
- La API incluye documentación interactiva en `/swagger`

¡Listo para empezar a desarrollar! 🚀
