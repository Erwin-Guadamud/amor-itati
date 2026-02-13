# 💕 Página Web de Momentos Románticos

Una página web interactiva para celebrar momentos especiales con tu pareja, con música, fotos y un video sorpresa.

## 📋 Instrucciones de uso

### 1. Agregar tus fotos
- Coloca todas tus fotos en la carpeta `fotos/`
- Nómbralas como: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.
- Puedes usar formatos: .jpg, .jpeg, .png

### 2. Agregar música
- Coloca tu canción especial en la carpeta raíz (junto a index.html)
- Nómbrala como: `musica.mp3`
- Si quieres otro formato, edita la línea 23 de `index.html`

### 3. Agregar el video final
- Coloca tu video compilado en la carpeta raíz
- Nómbralo como: `video.mp4`
- Puede ser un video que hayas creado con todas las fotos

### 4. Personalizar los textos
Abre `index.html` y edita:
- **Línea 33**: Cambia la fecha principal (actualmente: 13/10/2023)
- **Línea 34**: Modifica el mensaje "Han sido los mejores 2 años de mi vida"
- **Líneas 46-51**: Personaliza el mensaje de amor para Cris
- **Líneas 63-71, 73-81, etc.**: Edita cada tarjeta de momento:
  - `<h3>`: Título del momento
  - `<p>`: Descripción de ese momento
  - `<span class="date">`: La fecha de ese momento

### 5. Agregar más momentos
Para agregar más fotos/momentos, copia este código dentro de la sección `.moments-gallery`:

```html
<!-- Momento nuevo -->
<div class="moment-card">
    <div class="moment-image">
        <img src="fotos/fotoX.jpg" alt="Momento especial">
    </div>
    <div class="moment-text">
        <h3>Título del momento</h3>
        <p>Descripción de este momento especial...</p>
        <span class="date">Fecha</span>
    </div>
</div>
```

Alterna entre `<div class="moment-card">` y `<div class="moment-card reverse">` para que las fotos aparezcan intercaladas a la izquierda y derecha.

### 6. Ver la página web
- Abre el archivo `index.html` con tu navegador (doble clic)
- O haz clic derecho → "Abrir con" → Tu navegador favorito

### 7. Generar código QR

Para crear el código QR como en la imagen:

1. **Opción A - Hosting gratuito:**
   - Sube los archivos a GitHub Pages (gratis)
   - O usa Netlify Drop (arrastra la carpeta)
   - O usa Vercel
   
2. **Opción B - Servidor local:**
   - Usa Ngrok para crear una URL temporal
   - O configura un servidor local

3. **Generar el QR:**
   - Ve a: https://www.qr-code-generator.com/
   - Pega la URL de tu página
   - Descarga el código QR
   - Imprímelo y enmárcalo (como en tu imagen)

## 🎨 Personalización de colores

Si quieres cambiar los colores, edita las variables en `style.css` (líneas 8-13):

```css
:root {
    --rose-pink: #ffd6d6;      /* Rosa claro
    --soft-pink: #ffb3ba;      /* Rosa suave */
    --dark-pink: #ff8fa3;      /* Rosa oscuro */
    --text-dark: #5a3e3e;      /* Color del texto */
    --white: #ffffff;          /* Blanco */
}
```

## 📱 Compatible con móviles

La página es responsive y se ve bien en:
- ✅ Computadoras
- ✅ Tablets
- ✅ Teléfonos móviles

## 🎵 Nota sobre la música

Algunos navegadores bloquean la reproducción automática de música. Si la música no suena automáticamente, los usuarios pueden hacer clic en el botón de play en la esquina superior derecha.

## ❤️ ¡Disfruta tu regalo!

¡Espero que a Cris le encante este detalle tan especial!
