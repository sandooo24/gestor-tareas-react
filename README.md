## Instalación

1. **Importar la base de datos**: Primero, importa la base de datos desde el archivo **tareas.sql**.
2. **Configurar el archivo `.env`**: Modifica el archivo **.env** en la carpeta **api** con las credenciales de la base de datos.

---

### Configuración del servidor (API)

Dentro de la carpeta **api**, abre la consola y ejecuta el siguiente comando para inicializar un proyecto Node.js:

```bash
npm init -y
```
Luego, instala las siguientes dependencias:

1. **express**:
```bash
npm install express
```

2. **nodemon**:
```bash
npm install --save-dev nodemon
```

3. **dotenv**:
```bash
npm install dotenv
```

4. **mysql2** (para la conexión con la base de datos MySQL):
```bash
npm install mysql2
```

Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar la API:
```bash
npm run dev
```

---

### Configuración del frontend (React)

En la carpeta raíz de tu proyecto, ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
```bash
npm install
```

Luego instala **React Router**:
```bash
npm install react-router-dom@6
```

Una vez hecho esto, puedes ejecutar el siguiente comando para correr el proyecto completo:
```bash
npm run dev
```
