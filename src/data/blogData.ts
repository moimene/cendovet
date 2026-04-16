import blogDirofilaria from '@/assets/blog_dirofilaria.png';
import blogProcesionaria from '@/assets/blog_procesionaria.png';
import blogParacetamol from '@/assets/blog_paracetamol.png';
import blogCriptorquidia from '@/assets/blog_criptorquidia.png';
import blogExtraccionVideo from '@/assets/blog_extraccion_endoscopica.mp4';
import blogFilariasVideo from '@/assets/blog_filarias_endovascular.mp4';
import blogCromoendoscopiaVideo from '@/assets/blog_cromoendoscopia.mp4';
import blogCuerpoExtranoVideo from '@/assets/blog_cuerpo_extrano_gastrico.mp4';

export const blogPosts = [
  {
    slug: 'dirofilariosis-gusano-del-corazon',
    title: 'Dirofilariosis (Gusano del corazón): Diagnóstico y Tratamiento',
    category: 'Medicina Interna',
    serviceMIS: null,
    summary: 'Una guía completa sobre la dirofilariosis, una enfermedad parasitaria grave transmitida por mosquitos. Aprende sobre sus síntomas, métodos de diagnóstico avanzados y el tratamiento especializado que puede salvar vidas.',
    date: '2025-01-15',
    readingTime: 5,
    tags: ['Cardiología', 'Parasitología', 'Diagnóstico', 'Prevención'],
    author: 'Dra. Eva G. Gato',
    image: blogDirofilaria,
    content: `
      <p>La dirofilariosis, comúnmente conocida como la enfermedad del gusano del corazón, es una patología parasitaria grave y potencialmente mortal que afecta principalmente a perros, pero también a gatos y otros mamíferos. Es causada por el nematodo <em>Dirofilaria immitis</em>, un parásito que se transmite a través de la picadura de mosquitos infectados.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Síntomas y Detección</h3>
      <p>Los síntomas pueden tardar meses o incluso años en aparecer y varían según la carga parasitaria. Los signos más comunes incluyen:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Tos persistente, especialmente después del ejercicio.</li>
        <li>Intolerancia al ejercicio y fatiga.</li>
        <li>Dificultad para respirar (disnea).</li>
        <li>En fases avanzadas, signos de insuficiencia cardíaca congestiva como ascitis (líquido en el abdomen).</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Protocolo Diagnóstico</h3>
      <p>Un diagnóstico preciso es crucial y se basa en varias pruebas:</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Test de Antígenos:</strong> Detecta proteínas específicas de las hembras adultas del parásito. Es la prueba de screening principal.</li>
        <li><strong>Test de Microfilarias:</strong> Búsqueda de larvas en una muestra de sangre.</li>
        <li><strong>Ecocardiografía:</strong> Permite visualizar directamente los gusanos adultos en las arterias pulmonares y el corazón.</li>
        <li><strong>Radiografía Torácica:</strong> Evalúa el daño en el corazón y las arterias pulmonares.</li>
      </ol>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Tratamiento y Prevención</h3>
      <p>El tratamiento es complejo y requiere una supervisión veterinaria estricta. Incluye una terapia adulticida con inyecciones de melarsomina para eliminar los gusanos adultos, combinado con un reposo absoluto para minimizar el riesgo de tromboembolismo. El seguimiento post-tratamiento es fundamental.</p>
      <p class="mt-4 font-semibold">La prevención es la mejor estrategia. Existen tratamientos preventivos mensuales (orales o tópicos) y una inyección anual que son altamente eficaces para proteger a tu mascota.</p>
    `
  },
  {
    slug: 'intoxicacion-oruga-procesionaria',
    title: 'Intoxicación por Oruga Procesionaria del Pino: Actuación de Urgencia',
    category: 'Urgencias',
    serviceMIS: null,
    summary: 'La oruga procesionaria es un peligro estacional para nuestras mascotas. Conoce los síntomas de la intoxicación y el protocolo de actuación de urgencia que puede evitar consecuencias graves como la necrosis de la lengua.',
    date: '2025-02-20',
    readingTime: 4,
    tags: ['Toxicología', 'Urgencias', 'Primavera', 'Prevención'],
    author: 'Dra. Eva G. Gato',
    image: blogProcesionaria,
    content: `
      <p>La oruga procesionaria del pino (<em>Thaumetopoea pityocampa</em>) representa una seria amenaza para perros y gatos durante los meses de finales de invierno y primavera (generalmente de febrero a abril). Sus pelos urticantes contienen una potente toxina llamada thaumatopoeina que provoca reacciones alérgicas e inflamatorias severas.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Síntomas según el Contacto</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Contacto Oral:</strong> Es el más común y grave. Causa hipersalivación intensa, inflamación de la lengua (glositis), labios y cara. Si no se trata rápidamente, puede evolucionar a una necrosis (muerte del tejido) de la lengua.</li>
        <li><strong>Contacto Ocular:</strong> Provoca conjuntivitis severa, úlceras corneales y blefaroespasmo (cierre involuntario de los párpados).</li>
        <li><strong>Inhalación:</strong> Puede causar dificultad respiratoria y edema de glotis, una urgencia vital.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Protocolo de Urgencia</h3>
      <p>La rapidez es clave. Si sospechas que tu mascota ha tenido contacto, acude inmediatamente al veterinario. El tratamiento de urgencia consiste en:</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Lavado Profuso:</strong> Limpiar la zona afectada con agua tibia para eliminar los pelos urticantes. ¡Nunca frotar!</li>
        <li><strong>Tratamiento Farmacológico:</strong> Administración de corticoides de acción rápida, antihistamínicos y analgésicos para controlar la inflamación, la reacción alérgica y el dolor.</li>
        <li><strong>Soporte:</strong> En casos graves, puede ser necesaria la hospitalización con fluidoterapia y soporte nutricional.</li>
      </ol>
      <p class="mt-4 font-semibold">La mejor medida es la prevención: evita pasear por zonas de pinares durante la temporada de riesgo y vigila atentamente a tu mascota.</p>
    `
  },
  {
    slug: 'intoxicacion-paracetamol-mascotas',
    title: 'Intoxicación por Paracetamol en Mascotas: Una Urgencia Veterinaria',
    category: 'Urgencias',
    serviceMIS: null,
    summary: 'El paracetamol es extremadamente tóxico para las mascotas, especialmente para los gatos. Este artículo detalla por qué es tan peligroso, los síntomas de intoxicación y el tratamiento de urgencia con el antídoto N-acetilcisteína (NAC).',
    date: '2025-03-10',
    readingTime: 6,
    tags: ['Toxicología', 'Urgencias', 'Medicina Interna', 'Prevención'],
    author: 'Dra. Eva G. Gato',
    image: blogParacetamol,
    content: `
      <p>El paracetamol (acetaminofén) es un analgésico y antipirético común en medicina humana, pero es <strong>extremadamente tóxico y potencialmente letal</strong> para nuestras mascotas, con una peligrosidad especialmente alta en gatos.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">¿Por qué es tan tóxico?</h3>
      <p>Los perros y, sobre todo, los gatos, tienen una deficiencia en la enzima glucuronil transferasa, necesaria para metabolizar correctamente el paracetamol. Esto provoca la acumulación de un metabolito tóxico (NAPQI) que causa dos problemas principales:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Daño Hepático (Hepatotoxicidad):</strong> Causa una necrosis masiva del hígado, llevando a un fallo hepático agudo.</li>
        <li><strong>Metahemoglobinemia:</strong> Oxida la hemoglobina de los glóbulos rojos, impidiendo que transporten oxígeno. Esto provoca cianosis (mucosas azuladas) y asfixia a nivel celular.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Síntomas y Diagnóstico</h3>
      <p>Los síntomas aparecen en fases: inicialmente vómitos y depresión, seguidos de cianosis, edema facial, dificultad respiratoria y, finalmente, signos de fallo hepático como ictericia. El diagnóstico se basa en la historia de exposición y los signos clínicos.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Tratamiento de Urgencia con Antídoto</h3>
      <p>El tratamiento debe ser inmediato e incluye la descontaminación (si la ingestión es reciente) y la administración del antídoto específico: <strong>N-acetilcisteína (NAC)</strong>. La NAC ayuda a restaurar los niveles de glutatión, protegiendo el hígado y revirtiendo la metahemoglobinemia. Se combina con oxigenoterapia y fluidoterapia.</p>
      <p class="mt-4 font-bold text-red-600 dark:text-red-400">Mensaje clave: NUNCA administres medicamentos de uso humano a tu mascota sin la prescripción explícita de un veterinario.</p>
    `
  },
  {
    slug: 'caso-clinico-criptorquidia-laparoscopica',
    title: 'Caso Clínico: Resolución Laparoscópica de Criptorquidia Bilateral',
    category: 'Caso Clínico',
    serviceMIS: 'Laparoscopia',
    summary: 'Presentamos el caso de "Max", un Golden Retriever con criptorquidia bilateral resuelta mediante laparoscopia. Un ejemplo claro de cómo la cirugía de mínima invasión reduce el dolor y acelera la recuperación.',
    date: '2025-01-28',
    readingTime: 8,
    tags: ['Laparoscopia', 'Cirugía', 'Criptorquidia', 'Caso Clínico'],
    author: 'Dra. Eva G. Gato',
    image: blogCriptorquidia,
    content: `
      <p><strong>Paciente:</strong> Max, un Golden Retriever macho de 2 años.</p>
      <p><strong>Clínica Remitente:</strong> Clínica Veterinaria San Roque, Algeciras.</p>
      <p><strong>Historia:</strong> Max fue presentado para una castración rutinaria, pero durante el examen prequirúrgico no se palparon ninguno de los dos testículos en la bolsa escrotal. Una ecografía abdominal confirmó la presencia de ambos testículos en localización intraabdominal.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Abordaje por Mínima Invasión</h3>
      <p>Se optó por un abordaje laparoscópico para la extracción de los testículos retenidos. Esta técnica ofrece una visualización excelente de la cavidad abdominal y evita la necesidad de una gran incisión (laparotomía media), lo que se traduce en un postoperatorio mucho menos doloroso.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Procedimiento Quirúrgico</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Duración:</strong> 45 minutos.</li>
        <li><strong>Técnica:</strong> Se realizaron 3 pequeñas incisiones (portales) de 5 mm. Se utilizó un sistema de sellado vascular para ligar los vasos testiculares, asegurando una hemostasia perfecta.</li>
        <li><strong>Hallazgos:</strong> Ambos testículos se localizaron cerca de los riñones, eran de menor tamaño y consistencia anormal.</li>
        <li><strong>Histopatología:</strong> El análisis confirmó atrofia testicular y descartó la presencia de neoplasia, un riesgo elevado en testículos no descendidos.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Recuperación y Ventajas</h3>
      <p>Max recibió el alta el mismo día de la cirugía, con mínimas molestias. A los 5 días, ya realizaba su actividad normal. Este caso demuestra las ventajas de la laparoscopia frente a la cirugía abierta: mínimo dolor, recuperación exprés y menor riesgo de complicaciones.</p>
    `
  },
  {
    slug: 'caso-clinico-extraccion-endoscopica-cuerpo-extrano',
    title: 'Caso Clínico: Extracción Endoscópica de Cuerpo Extraño Gástrico',
    category: 'Caso Clínico',
    serviceMIS: 'Endoscopia',
    summary: 'Luna, una Labrador de 3 años, se tragó un juguete de goma. Gracias a la endoscopia, se pudo extraer el objeto en 22 minutos sin necesidad de cirugía abierta, permitiendo un alta hospitalaria en solo 4 horas.',
    date: '2025-02-15',
    readingTime: 9,
    tags: ['Endoscopia', 'Urgencias', 'Cuerpo Extraño', 'Caso Clínico'],
    author: 'Dra. Eva G. Gato',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    content: `
      <p><strong>Paciente:</strong> Luna, una Labrador Retriever hembra de 3 años.</p>
      <p><strong>Clínica Remitente:</strong> Clínica Veterinaria Los Barrios.</p>
      <p><strong>Historia:</strong> Los propietarios de Luna acudieron a su veterinario porque la vieron jugar y romper un juguete de goma, y sospechaban que podría haberse tragado un trozo. Luna presentaba vómitos esporádicos.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Diagnóstico por Imagen</h3>
      <p>Una radiografía abdominal reveló una imagen compatible con un cuerpo extraño en el estómago. La ecografía confirmó la presencia de un objeto de goma de aproximadamente 8 cm.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Resolución por Endoscopia</h3>
      <p>Dada la naturaleza y localización del objeto, se decidió intentar la extracción mediante endoscopia para evitar una gastrotomía (cirugía abierta del estómago).</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Duración del procedimiento:</strong> 22 minutos.</li>
        <li><strong>Técnica:</strong> Bajo anestesia general, se introdujo un videoendoscopio Olympus a través de la boca hasta el estómago. Se utilizó una pinza de cocodrilo para sujetar firmemente el juguete y se extrajo de forma segura, protegiendo el esófago con un overtube.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Postoperatorio y Conclusión</h3>
      <p>Luna se recuperó de la anestesia sin incidentes y fue dada de alta 4 horas después del procedimiento, con medicación para proteger la mucosa gástrica. Este caso ilustra cómo la endoscopia es la técnica de elección para la extracción de cuerpos extraños gástricos, evitando la morbilidad, el dolor y el tiempo de recuperación asociados a una cirugía convencional.</p>
    `
  },
  {
    slug: 'caso-clinico-extraccion-filarias-endovascular',
    title: 'Caso Clínico: Primera Extracción de Filarias por Terapia Endovascular en el Campo de Gibraltar',
    category: 'Caso Clínico',
    serviceMIS: 'Fluoroscopia',
    summary: 'Laika, una perrita de 7 kg con alta carga parasitaria de Dirofilaria immitis, fue tratada mediante terapia endovascular con fluoroscopia y ecografía. Un procedimiento pionero en nuestra zona que amplía las opciones frente a la dirofilariosis.',
    date: '2026-03-01',
    readingTime: 7,
    tags: ['Fluoroscopia', 'Cardiología', 'Dirofilaria', 'Caso Clínico', 'Terapia Endovascular'],
    author: 'Dra. Eva G. Gato',
    image: blogFilariasVideo,
    video: blogFilariasVideo,
    instagramReel: 'https://www.instagram.com/reel/DVWQ-d8CIy7/',
    content: `
      <p><strong>Paciente:</strong> Laika, una perrita mestiza de 7 kg, adoptada recientemente.</p>
      <p><strong>Historia:</strong> Laika acudió referenciada a CENDOVET para una ecografía cardíaca porque tenía diagnosticada la enfermedad del gusano del corazón (<em>Dirofilaria immitis</em>). En la ecocardiografía observamos una gran cantidad de parásitos en la arteria pulmonar, lo que suponía un alto riesgo de tromboembolismo si se realizaba el tratamiento adulticida convencional.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Abordaje: Terapia Endovascular</h3>
      <p>Ante el elevado riesgo del tratamiento convencional, optamos por la <strong>terapia endovascular</strong>, un procedimiento de alta complejidad que permite la retirada mecánica de las filarias adultas directamente desde la arteria pulmonar.</p>
      <p>Este procedimiento fue posible gracias al uso combinado de <strong>fluoroscopia y ecografía</strong>, que nos permitió navegar con precisión hasta la arteria pulmonar para la extracción de los parásitos.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Equipo Multidisciplinar</h3>
      <p>Un caso de esta complejidad requiere un equipo de élite y multidisciplinar:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Diego G. Casas:</strong> Gran experiencia en intervencionismo endovascular.</li>
        <li><strong>Maurici Batalla:</strong> Reconocido especialista mundial en procedimientos de mínima invasión.</li>
        <li><strong>Eva Gato:</strong> Especialista en cardiología y mínima invasión.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Resultado y Conclusión</h3>
      <p>La intervención fue un éxito. Laika pudo continuar con el tratamiento de la enfermedad de forma segura. Traer esta técnica al Campo de Gibraltar supone ampliar las opciones terapéuticas frente a una enfermedad endémica en nuestra zona.</p>
      <p class="mt-4 font-semibold">La prevención sigue siendo la herramienta más importante frente a la dirofilariosis. Protege a tu perro, a tu gato y recuerda: los hurones también pueden contraer la enfermedad.</p>
    `
  },
  {
    slug: 'cromoendoscopia-oncologica-veterinaria',
    title: 'Endoscopia Oncológica: Cromoendoscopia Digital Avanzada en CENDOVET',
    category: 'Tecnología',
    serviceMIS: 'Endoscopia',
    summary: 'CENDOVET incorpora el procesador endoscópico Fujifilm EP-8000 con cromoendoscopia digital avanzada (LCI, BLI, ACI), tecnología de hospitales humanos de referencia para la detección precoz del cáncer gastrointestinal en veterinaria.',
    date: '2026-02-13',
    readingTime: 5,
    tags: ['Endoscopia', 'Oncología', 'Tecnología', 'Cromoendoscopia', 'Diagnóstico'],
    author: 'Dra. Eva G. Gato',
    image: blogCromoendoscopiaVideo,
    video: blogCromoendoscopiaVideo,
    content: `
      <p>En CENDOVET damos un nuevo paso hacia la excelencia en endoscopia y cirugía de mínima invasión con la incorporación del <strong>procesador endoscópico Fujifilm EP-8000</strong>, una plataforma de cromoendoscopia digital avanzada utilizada en hospitales humanos de referencia para la detección precoz del cáncer gastrointestinal.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">¿Qué es la Cromoendoscopia?</h3>
      <p>La cromoendoscopia es una técnica que utiliza filtros de luz especiales para resaltar patrones de la mucosa que son invisibles con la endoscopia convencional. Esto permite identificar lesiones neoplásicas en fases muy iniciales.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Tecnologías Disponibles</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>LCI (Linked Color Imaging):</strong> Mejora la detección de lesiones sutiles ampliando las diferencias de color en la mucosa.</li>
        <li><strong>BLI (Blue Light Imaging):</strong> Permite la visualización detallada de la microestructura vascular superficial, clave para la caracterización de lesiones.</li>
        <li><strong>ACI (Amber-Red Color Imaging):</strong> Mejora la visualización del patrón vascular y del sangrado asociado a lesiones, aportando información clave para la planificación terapéutica.</li>
        <li><strong>Resolución 4K:</strong> Una calidad de imagen que permite una exploración exhaustiva de la mucosa, reduciendo el margen de error en la detección de lesiones sutiles y tumores incipientes.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Impacto Clínico</h3>
      <p>Esta tecnología, integrada en un enfoque de medicina mínimamente invasiva avanzada, nos permite abordar casos complejos derivados de otros centros de España y Europa. La detección precoz del cáncer gastrointestinal marca la diferencia en el pronóstico del paciente.</p>
    `
  },
  {
    slug: 'caso-clinico-anzuelos-esofago-rox',
    title: 'Caso Clínico: Extracción Endoscópica de 2 Anzuelos Clavados en Esófago',
    category: 'Caso Clínico',
    serviceMIS: 'Endoscopia',
    summary: 'Rox, un perrito de solo 3,7 kg, se tragó dos anzuelos unidos en la playa. La extracción endoscópica fue compleja por el desgarro esofágico previo, pero se resolvió con éxito. Un caso que recuerda la importancia de actuar rápido.',
    date: '2025-12-13',
    readingTime: 6,
    tags: ['Endoscopia', 'Urgencias', 'Cuerpo Extraño', 'Caso Clínico', 'Esófago'],
    author: 'Dra. Eva G. Gato',
    image: blogExtraccionVideo,
    video: blogExtraccionVideo,
    content: `
      <p><strong>Paciente:</strong> Rox, un perro mestizo de 3,7 kg.</p>
      <p><strong>Clínica Remitente:</strong> CV Mediterranea, Sabinillas (Málaga).</p>
      <p><strong>Historia:</strong> Rox paseaba por la playa cuando su familia vio que llevaba un hilo rojo colgando de la boca. Al tirar del hilo, no salió y Rox empezó a encontrarse mal, por lo que acudieron de urgencia a su veterinario, que lo remitió inmediatamente a CENDOVET para una endoscopia.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Diagnóstico</h3>
      <p>En la radiografía comprobamos que los dos anzuelos estaban en el esófago. Al entrar con la endoscopia, vimos que al tirar del hilo se había producido un <strong>desgarro grave</strong> en la mucosa esofágica. Los anzuelos estaban clavados en una zona muy delicada, justo donde coincide con la laringe.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Procedimiento</h3>
      <p>Fue una endoscopia difícil. El pequeño tamaño de Rox (solo 3,7 kg) hacía que cada milímetro contara. Con mucha paciencia y precisión, conseguimos extraer ambos anzuelos sin complicaciones adicionales.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Recuperación</h3>
      <p>Aunque Rox salió muy bien de la endoscopia, necesitó dos días de hospitalización y vigilancia estrecha para controlar las secuelas del desgarro. Hoy Rox está completamente recuperado.</p>

      <p class="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <strong class="text-red-600 dark:text-red-400">MUY IMPORTANTE:</strong> Si tu perro se traga un anzuelo, <strong>NUNCA tires del hilo</strong>. Solo conseguirás que se clave más. Acude de inmediato a tu veterinario.
      </p>
    `
  },
  {
    slug: 'caso-clinico-litotricia-laser-bonnie',
    title: 'Caso Clínico: Litotricia Láser — Eliminación de Cálculos Vesicales sin Cirugía',
    category: 'Caso Clínico',
    serviceMIS: 'Litotricia',
    summary: 'Bonnie, de 12 años, tenía múltiples cálculos en la vejiga. Gracias a la litotricia láser por endoscopia, se eliminaron todos sin cirugía abierta: sin puntos, sin collar isabelino y con una recuperación mucho más rápida.',
    date: '2026-04-03',
    readingTime: 5,
    tags: ['Litotricia', 'Endoscopia', 'Caso Clínico', 'Urología', 'Mínima Invasión'],
    author: 'Dra. Eva G. Gato',
    image: blogCuerpoExtranoVideo,
    video: blogCuerpoExtranoVideo,
    content: `
      <p><strong>Paciente:</strong> Bonnie, una perra de 12 años.</p>
      <p><strong>Historia:</strong> Bonnie acudió referenciada a CENDOVET para eliminar varios cálculos (piedras) en su vejiga que le estaban ocasionando problemas urinarios.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">¿Qué es la Litotricia Láser?</h3>
      <p>La litotricia láser es un procedimiento mínimamente invasivo que permite fragmentar y extraer cálculos urinarios mediante endoscopia (cistoscopia), <strong>sin necesidad de cirugía abierta</strong>. Se introduce un cistoscopio por la uretra hasta la vejiga, y se utiliza una fibra láser para fragmentar las piedras.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Procedimiento</h3>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Fragmentación:</strong> Se fragmentó el cálculo más grande con el láser hasta un tamaño apropiado para su extracción.</li>
        <li><strong>Extracción:</strong> Se extrajeron los fragmentos con una cesta especial diseñada para endoscopia.</li>
      </ol>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Resultado</h3>
      <p>El resultado fue excelente: una recuperación mucho más rápida que con cirugía convencional, <strong>sin puntos y sin collar isabelino</strong>. Bonnie pudo volver a su rutina en muy poco tiempo.</p>

      <p class="mt-4 font-semibold">Si tu mascota tiene cálculos en la vejiga, la litotricia láser puede ser una alternativa menos invasiva. Consulta con tu veterinario o contáctanos para valorar el caso.</p>
    `
  },
  {
    slug: 'caso-clinico-anzuelo-esofago-peluso',
    title: 'Caso Clínico: Extracción Endoscópica de Anzuelo en Esófago — Peluso',
    category: 'Caso Clínico',
    serviceMIS: 'Endoscopia',
    summary: 'Peluso se tragó un anzuelo paseando por la playa de Algeciras. El anzuelo estaba clavado en una zona crítica del esófago, junto a la laringe. Con precisión endoscópica, se extrajo sin complicaciones.',
    date: '2026-04-02',
    readingTime: 4,
    tags: ['Endoscopia', 'Urgencias', 'Cuerpo Extraño', 'Caso Clínico', 'Esófago'],
    author: 'Dra. Eva G. Gato',
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
    content: `
      <p><strong>Paciente:</strong> Peluso, un perro referido desde CV Taraguilla (San Roque).</p>
      <p><strong>Historia:</strong> Peluso se tragó un anzuelo mientras paseaba por la playa. El anzuelo quedó clavado en una zona muy compleja: justo al inicio del esófago, donde coincide con la laringe. Es una zona crítica por las estructuras tan delicadas que hay y el escaso espacio para trabajar.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Procedimiento Endoscópico</h3>
      <p>Con mucha paciencia y precisión, conseguimos desclavar el anzuelo y extraerlo sin complicaciones mediante endoscopia. La localización era especialmente difícil por la proximidad a la laringe y las estructuras vasculares del cuello.</p>

      <h3 class="text-xl font-semibold mt-6 mb-3 text-cyan-800 dark:text-cyan-300">Recuperación</h3>
      <p>Peluso se despertó genial de la anestesia y salió muy contento al ver que su familia lo estaba esperando.</p>

      <p class="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <strong class="text-red-600 dark:text-red-400">ATENCIÓN:</strong> Si ves que tu perro se traga un anzuelo o tiene un hilo colgando de la boca, <strong>¡NUNCA tires!</strong> Solo conseguirás que se clave más. Acude de inmediato a tu veterinario.
      </p>

      <p class="mt-4 font-semibold">Somos Centro de Referencia en Endoscopia Veterinaria desde hace más de 9 años. Si tu mascota necesita una endoscopia urgente, contáctanos.</p>
    `
  }
];
