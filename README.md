# Compartamos

¡Bienvenido a Compartamos! 
Esta plataforma fue diseñada pensando en brindar a las personas mayores la oportunidad de encontrar un compañero de piso con intereses similares y garantizar un entorno de convivencia cómodo y seguro.

## Características Principales

- **Perfil Personalizado:** Cada usuario puede crear un perfil detallado con información relevante sobre sus preferencias, estilo de vida y preferencias de convivencia.

- **Búsqueda Inteligente:** La aplicación utiliza un algoritmo avanzado para sugerir posibles compañeros de piso basados en la compatibilidad de perfiles.

- **Seguridad y Privacidad:** Priorizamos la seguridad y privacidad de nuestros usuarios. La información personal está encriptada y solo se comparte con el consentimiento de los usuarios.

- **Diseño Responsive:** La aplicación es totalmente responsive, adaptándose a dispositivos móviles para facilitar el acceso y uso desde cualquier lugar y en cualquier momento.

## Tecnologías Utilizadas

- **HTML:** Utilizamos HTML para la estructura básica de la aplicación, garantizando un marcado semántico.

- **SCSS:** La hoja de estilo está escrita en SCSS para un código más limpio y mantenible, mejorando la apariencia y la experiencia del usuario.

- **React:** La interfaz de usuario dinámica y reactiva está construida con React, facilitando la creación de componentes reutilizables y el manejo eficiente del estado de la aplicación.

- **Express:** Para la creación del servidor y el manejo de las rutas, utilizamos Express, un framework de Node.js que simplifica el desarrollo del lado del servidor.

- **MySQL:** La base de datos relacional MySQL almacena de forma segura la información de los usuarios y facilita consultas eficientes para la búsqueda de compañeros de piso.

## Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/compis-app.git
cd compis-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura la base de datos MySQL con el script proporcionado en `database.sql`.

4. Configura las variables de entorno en un archivo `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=tuusuario
DB_PASSWORD=tucontraseña
DB_NAME=compis_db
```

5. Inicia la aplicación:

```bash
npm start
```

Visita `http://localhost:3000` en tu navegador para comenzar a utilizar la aplicación.

## Contribuciones

¡Agradecemos cualquier contribución para mejorar esta aplicación! Si encuentras errores, tienes ideas para nuevas características o mejoras, no dudes en crear un pull request.

## Contacto

Para cualquier pregunta o problema, no dudes en ponerte en contacto en [contacto@compartamos.com](mailto:contacto@compartamos.com).

¡Esperamos que disfrutes usando Compañeros de Vivienda para Personas Mayores!