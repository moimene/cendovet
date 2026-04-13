

## Plan: Añadir sección de reseñas de Google en la HomePage

### Objetivo
Incorporar una sección de testimonios reales de Google Reviews entre la sección "¿Por qué CENDOVET?" y "Cobertura Geográfica", mostrando la puntuación general (4.7/5, 99 reseñas) y un carrusel de reseñas destacadas.

### Diseño
- Badge superior con logo de Google + "4.7 ★ · 99 reseñas en Google"
- 5 estrellas visuales con la puntuación destacada
- Carrusel/grid de tarjetas con las mejores reseñas (selección de ~8 reseñas representativas)
- Cada tarjeta: nombre del autor, estrellas, fecha relativa, extracto del texto, y la respuesta de la clínica (colapsable o resumida)
- Botón "Ver todas las reseñas en Google" que enlace al perfil
- Animaciones con framer-motion consistentes con el resto de la página

### Reseñas seleccionadas (las más impactantes)
1. Estefanía Nussio - "Eva tiene un don con los perritos..."
2. Lima - "Mi perra Lady tenía un cuerpo extraño..."
3. Alba Escudero - "Tuvimos una urgencia con mi Pastor Alemán..."
4. Nerea Ruiz - "No puedo estar más agradecida con Eva y Raquel..."
5. Elena Álvarez - "Mi gatita Ginebra tuvo una obstrucción intestinal..."
6. Rafa - "¡Cinco estrellas me parecen pocas!"
7. Jorge Alvarez - "Mi veterinario me habló de esta clínica un sábado y el mismo domingo Eva ya me..."
8. Ana Palomeque - "Gracias a Eva mi gatita está a día de hoy con nosotros..."

### Cambios técnicos
1. **Crear `src/data/reviewsData.ts`** — Array con las reseñas seleccionadas (nombre, texto, fecha, rating, respuesta de la clínica)
2. **Editar `src/pages/HomePage.tsx`** — Añadir sección de reseñas después de "¿Por qué CENDOVET?", usando un grid responsive (1 col mobile, 2 cols tablet, 3 cols desktop) con tarjetas animadas y auto-scroll opcional

