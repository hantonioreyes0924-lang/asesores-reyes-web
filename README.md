# Asesores Reyes — Portal profesional v3

## Qué incluye
- Página principal responsive.
- Identidad visual basada en el logo oficial suministrado.
- Áreas: jurídica, ambiental, administrativa, empresarial, metodología y tesis.
- Seguimiento de procesos con pantalla de acceso preparada para correo + contraseña.
- Consultas Express y contacto.
- Sin expedientes reales, sin usuarios reales y sin contraseñas almacenadas.

## Importante sobre seguridad
La pantalla de acceso es únicamente interfaz visual. No debe utilizarse con datos reales hasta conectar:
1. autenticación segura,
2. base de datos,
3. control de acceso por usuario,
4. panel administrativo,
5. políticas de recuperación de contraseña y sesiones.

No se deben guardar contraseñas en HTML, JavaScript ni archivos del sitio.

## Probar localmente
Desde esta carpeta:
```bash
python -m http.server 8000
```
Abrir:
`http://localhost:8000`

## Publicación inicial
Esta versión puede publicarse como sitio estático en GitHub Pages o en un hosting tradicional.

### GitHub Pages
Es apropiado para la parte pública del sitio. En GitHub Free, Pages se publica desde un repositorio público. Admite dominio personalizado.

### Vercel
Es técnicamente cómodo para evolucionar a una aplicación con funciones de servidor. El plan Hobby gratuito está orientado a uso personal/no comercial; para uso profesional/comercial conviene revisar el plan Pro vigente.

## Siguiente fase recomendada
Separar el portal privado del sitio público:
- Frontend del cliente.
- Autenticación por correo y contraseña.
- Base de datos de clientes y expedientes.
- Relación 1 usuario -> múltiples procesos.
- Documentos con permisos.
- Panel administrativo.
- Registro de actualizaciones.

Una opción práctica será conectar un servicio de autenticación y base de datos administrado, manteniendo el sitio público independiente.
