/**
 * Casos clínicos destacados de Instagram para cada landing de servicio.
 *
 * Para actualizar una URL de Instagram:
 *   Reemplaza el valor de `instagramUrl` con el enlace directo al post/reel.
 *   Ejemplo: "https://www.instagram.com/reel/ABC123/"
 *   o:       "https://www.instagram.com/p/XYZ789/"
 */

export interface InstagramCase {
  title: string;
  description: string;
  instagramUrl: string;
  petName?: string;
  emoji: string;
}

export interface ServiceCases {
  [serviceKey: string]: InstagramCase[];
}

const IG_BASE = "https://www.instagram.com/cvcampogibraltar/";

export const instagramCasesData: ServiceCases = {

  // ─── ENDOSCOPIA ──────────────────────────────────────────────
  'endoscopia': [
    {
      title: "Extracción de anzuelo sin cirugía",
      description: "Kiara, una cachorrita, se tragó un anzuelo. Gracias a la endoscopia, logramos extraerlo del esófago de forma rápida y segura, evitando una cirugía abierta compleja y dolorosa.",
      instagramUrl: "https://www.instagram.com/p/DSMgZi3CKN6/", // Rox - caso anzuelo esófago
      petName: "Kiara",
      emoji: "🪝",
    },
    {
      title: "Cuando cogen lo que no es suyo: Extracción de pelota",
      description: "Joy llegó a consulta tras ingerir un cuerpo extraño. Mediante una gastroscopia, pudimos retirar la pelota del estómago sin necesidad de bisturí, permitiéndole volver a correr el mismo día.",
      instagramUrl: "https://www.instagram.com/reel/DWIgsb3CF0I/", // Zeus - extracción cuerpo extraño
      petName: "Joy",
      emoji: "⚾",
    },
    {
      title: "Diagnóstico oncológico preciso mediante biopsia",
      description: "Merlí presentaba alteraciones digestivas. La endoscopia nos permitió observar directamente la mucosa intestinal y tomar biopsias precisas, logrando diagnosticar un linfoma intestinal en fases iniciales para comenzar su tratamiento.",
      instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/", // Cromoendoscopia oncológica
      petName: "Merlí",
      emoji: "🔬",
    },
  ],

  // ─── LAPAROSCOPIA ────────────────────────────────────────────
  'laparoscopia': [
    {
      title: "Castración con solo dos pequeñas incisiones",
      description: "Sofía, una pequeña chihuahua, fue esterilizada mediante laparoscopia. Esta técnica requiere incisiones milimétricas, lo que se traduce en mucho menos dolor postoperatorio y una recuperación casi inmediata en casa.",
      instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/", // Peluso - cirugía MIS
      petName: "Sofía",
      emoji: "🐕",
    },
    {
      title: "Criptorquidia resuelta con mínima invasión",
      description: "Cuando un testículo no desciende al escroto y se queda en el abdomen, la laparoscopia ofrece la mejor visualización para localizarlo y extraerlo con el mínimo trauma quirúrgico para el paciente.",
      instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/", // Peluso - cirugía MIS
      emoji: "🔍",
    },
    {
      title: "Precisión absoluta con visión 3D y 4K",
      description: "Hemos incorporado la plataforma RUBINA de Karl Storz. La visión 3D y la resolución 4K suponen un avance decisivo en los procedimientos más complejos, mejorando la percepción de profundidad y la seguridad de tu mascota.",
      instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/", // Tecnología avanzada
      petName: "Trufa",
      emoji: "🖥️",
    },
  ],

  // ─── CIRUGÍA MIS (página general) ───────────────────────────
  'cirugia-mis': [
    {
      title: "Castración con solo dos pequeñas incisiones",
      description: "Sofía, una pequeña chihuahua, fue esterilizada mediante laparoscopia. Esta técnica requiere incisiones milimétricas, lo que se traduce en mucho menos dolor postoperatorio y una recuperación casi inmediata en casa.",
      instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/",
      petName: "Sofía",
      emoji: "🐕",
    },
    {
      title: "Extracción de anzuelo sin cirugía",
      description: "Kiara, una cachorrita, se tragó un anzuelo. Gracias a la endoscopia, logramos extraerlo del esófago de forma rápida y segura, evitando una cirugía abierta compleja y dolorosa.",
      instagramUrl: "https://www.instagram.com/p/DSMgZi3CKN6/",
      petName: "Kiara",
      emoji: "🪝",
    },
    {
      title: "Precisión absoluta con visión 3D y 4K",
      description: "Hemos incorporado la plataforma RUBINA de Karl Storz. La visión 3D y la resolución 4K suponen un avance decisivo en los procedimientos más complejos, mejorando la percepción de profundidad y la seguridad.",
      instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/",
      emoji: "🖥️",
    },
  ],

  // ─── CARDIOLOGÍA ─────────────────────────────────────────────
  'cardiologia': [
    {
      title: "Ecocardiografía: Viendo el corazón en tiempo real",
      description: "Mila viajó desde Ceuta para un estudio ecográfico completo. Esta prueba no invasiva e indolora —¡Mila no paraba de ronronear!— nos permite evaluar la función cardíaca y detectar problemas valvulares con máxima precisión.",
      instagramUrl: "https://www.instagram.com/p/DVWQ-d8CIy7/", // Laika - filarias/ecocardiografía
      petName: "Mila",
      emoji: "💓",
    },
    {
      title: "Prevención y diagnóstico de la Dirofilariosis",
      description: "Vivimos en una zona endémica del gusano del corazón, una enfermedad grave transmitida por mosquitos. La prevención y el diagnóstico temprano mediante ecocardiografía son vitales para salvar la vida de nuestras mascotas.",
      instagramUrl: "https://www.instagram.com/p/DVWQ-d8CIy7/", // Laika - filarias relacionado
      emoji: "🦟",
    },
  ],

  // ─── FLUOROSCOPIA ────────────────────────────────────────────
  'fluoroscopia': [
    {
      title: "Extracción de filarias por intervencionismo",
      description: "Mediante el uso combinado de fluoroscopia y ecografía, realizamos la extracción mecánica de gusanos del corazón (filarias) de forma mínimamente invasiva, un procedimiento pionero en el Campo de Gibraltar.",
      instagramUrl: "https://www.instagram.com/p/DVWQ-d8CIy7/", // Laika - extracción filarias endovascular
      emoji: "🫀",
    },
    {
      title: "Colocación de stent para el colapso traqueal",
      description: "El colapso traqueal dificulta gravemente la respiración. Gracias a la fluoroscopia en tiempo real, podemos diagnosticar el grado de colapso y colocar un stent traqueal con precisión milimétrica para devolverle el aliento al paciente.",
      instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/", // Peluso - procedimiento guiado
      emoji: "🌬️",
    },
  ],

  // ─── LITOTRICIA LÁSER ────────────────────────────────────────
  'litotricia-laser': [
    {
      title: "Litotricia láser: Adiós a las piedras sin bisturí",
      description: "Pocholo sufría una obstrucción urinaria grave. La combinación de endoscopia y litotricia láser nos permitió pulverizar los cálculos en la uretra y vejiga, resolviendo la obstrucción sin necesidad de cirugía abierta.",
      instagramUrl: "https://www.instagram.com/p/DWqV038iHQx/", // Bonnie - litotricia láser
      petName: "Pocholo",
      emoji: "💎",
    },
    {
      title: "Obstrucción urinaria resuelta sin cirugía",
      description: "Mediante la combinación de cistoscopia y litotricia con láser Holmium, fragmentamos y eliminamos los cálculos vesicales, restaurando el flujo urinario normal y evitando la cistotomía tradicional.",
      instagramUrl: "https://www.instagram.com/p/DWqV038iHQx/", // Bonnie - litotricia láser
      emoji: "✨",
    },
  ],

  // ─── MEDICINA FELINA ─────────────────────────────────────────
  'medicina-felina': [
    {
      title: "Diagnóstico mínimamente invasivo para gatos",
      description: "Gracie acudió referenciada por problemas respiratorios. Utilizamos endoscopios de pequeño calibre adaptados a la anatomía felina para explorar y tomar biopsias con el mínimo estrés, logrando un diagnóstico rápido y certero.",
      instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/", // Cromoendoscopia - diagnóstico felino
      petName: "Gracie",
      emoji: "🐱",
    },
    {
      title: "Ecografía de alta resolución para pequeños felinos",
      description: "Los gatos requieren equipamiento específico. Para realizar ecografías abdominales precisas en pacientes pequeños como Zeus, utilizamos sondas especiales de alta frecuencia que nos permiten visualizar cada órgano con máximo detalle.",
      instagramUrl: "https://www.instagram.com/reel/DWIgsb3CF0I/", // Zeus - ecografía/endoscopia
      petName: "Zeus",
      emoji: "🔊",
    },
  ],

  // ─── ECOGRAFÍA ───────────────────────────────────────────────
  'ecografia': [
    {
      title: "Ecocardiografía: Viendo el corazón en tiempo real",
      description: "Mila viajó desde Ceuta para un estudio ecográfico completo. Esta prueba no invasiva e indolora nos permite evaluar la función cardíaca y detectar problemas valvulares con máxima precisión.",
      instagramUrl: "https://www.instagram.com/p/DVWQ-d8CIy7/",
      petName: "Mila",
      emoji: "💓",
    },
    {
      title: "Ecografía de alta resolución para pequeños felinos",
      description: "Para realizar ecografías abdominales precisas en pacientes pequeños como Zeus, utilizamos sondas especiales de alta frecuencia que nos permiten visualizar cada órgano con máximo detalle.",
      instagramUrl: "https://www.instagram.com/reel/DWIgsb3CF0I/",
      petName: "Zeus",
      emoji: "🔊",
    },
  ],

  // ─── TRAUMATOLOGÍA ───────────────────────────────────────────
  'traumatologia': [
    {
      title: "Criptorquidia resuelta con mínima invasión",
      description: "Cuando un testículo no desciende al escroto y se queda en el abdomen, la laparoscopia ofrece la mejor visualización para localizarlo y extraerlo con el mínimo trauma quirúrgico para el paciente.",
      instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/",
      emoji: "🔍",
    },
    {
      title: "Precisión absoluta con visión 3D y 4K",
      description: "Hemos incorporado la plataforma RUBINA de Karl Storz. La visión 3D y la resolución 4K suponen un avance decisivo en los procedimientos más complejos, mejorando la percepción de profundidad y la seguridad.",
      instagramUrl: "https://www.instagram.com/p/DUr-f_4CJNl/",
      emoji: "🖥️",
    },
  ],

  // ─── NEUROLOGÍA ──────────────────────────────────────────────
  'neurologia': [
    {
      title: "Colocación de stent para el colapso traqueal",
      description: "El colapso traqueal dificulta gravemente la respiración. Gracias a la fluoroscopia en tiempo real, podemos diagnosticar el grado de colapso y colocar un stent traqueal con precisión milimétrica.",
      instagramUrl: "https://www.instagram.com/p/DWor0MHCF7p/",
      emoji: "🌬️",
    },
    {
      title: "Extracción de filarias por intervencionismo",
      description: "Mediante el uso combinado de fluoroscopia y ecografía, realizamos la extracción mecánica de gusanos del corazón de forma mínimamente invasiva, un procedimiento pionero en el Campo de Gibraltar.",
      instagramUrl: "https://www.instagram.com/p/DVWQ-d8CIy7/",
      emoji: "🫀",
    },
  ],
};
