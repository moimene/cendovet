export interface Review {
  name: string;
  rating: number;
  text: string;
  clinicResponse?: string;
}

export const reviewsData: Review[] = [
  {
    name: "Estefanía Nussio",
    rating: 5,
    text: "Eva tiene un don con los perritos: es profesional, intuitiva, guerrera y atenta. Me faltan las palabras para agradecer todo lo que ha hecho por mi hijo. No es una veterinaria convencional, es extraordinaria y consigue milagros.",
    clinicResponse: "Muchísimas gracias Estefanía, Chaco es un luchador nato como su madre y con muchas ganas de vivir, pelearemos con vosotros hasta el final."
  },
  {
    name: "Lima",
    rating: 5,
    text: "Mi veterinaria habitual me derivó a esta clínica ya que mi perra Lady tenía un cuerpo extraño en el estómago, le hicieron una endoscopia y efectivamente tenía un calcetín, el cual sacaron sin problemas.",
    clinicResponse: "Muchísimas gracias por tu confianza, nos alegramos mucho de que Lady esté mejor!"
  },
  {
    name: "Alba Escudero Ribeiro",
    rating: 5,
    text: "Tuve una urgencia con mi Pastor Alemán porque se había comido un anzuelo y nos recomendaron venir aquí para endoscopia; la doctora Eva y compañeros nos ayudaron y solucionaron el problema de manera rápida y eficaz.",
    clinicResponse: "Muchísimas gracias Alba, Pepo es fantástico y nos alegra que todo quedara en un susto."
  },
  {
    name: "Nerea Ruiz",
    rating: 5,
    text: "No puedo estar más agradecida con Eva y con Raquel, la implicación, el amor en sus palabras, en el trato, el sostén que te ofrecen sin tener porqué hacerlo... son grandísimas profesionales.",
    clinicResponse: "Muchísimas gracias Nerea... Tito es un guerrero y estamos con él para lo que sea."
  },
  {
    name: "Elena Álvarez Caravaca",
    rating: 5,
    text: "Mi gatita Ginebra tuvo una obstrucción intestinal y fueron momentos de muchísima angustia, pero gracias al gran equipo de esta clínica hoy está con nosotros y recuperándose muy bien.",
    clinicResponse: "Muchísimas gracias Elena por tu reseña y palabras tan cariñosas, un abrazo muy fuerte!"
  },
  {
    name: "Rafa",
    rating: 5,
    text: "¡Cinco estrellas me parecen pocas a la hora de valorar la atención que nos dispensaron Eva y su equipo! Vinimos desde Granada y mereció totalmente la pena.",
    clinicResponse: "Muchísimas gracias Rafa por venir desde Granada a vernos y por vuestras palabras tan cariñosas y motivadoras."
  },
  {
    name: "Jorge Alvarez",
    rating: 5,
    text: "Mi veterinario me habló de esta clínica un sábado y el mismo domingo Eva ya me atendió. Nuestro perro salchicha tenía piedras en la uretra y lo solucionaron con litotricia láser.",
    clinicResponse: "Muchísimas gracias Jorge por vuestra confianza desde el primer momento. Un abrazo!"
  },
  {
    name: "Ana Palomeque",
    rating: 5,
    text: "Gracias a Eva mi gatita está a día de hoy con nosotros y goza de calidad de vida. Gracias por intentar lo imposible, por personas como vosotros la veterinaria siempre será la profesión más bonita del mundo.",
    clinicResponse: "Muchas gracias de todo corazón Ana, vuestro apoyo y cariño nos da fuerzas en los momentos más difíciles."
  },
];

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sa=X&sca_esv=ca0ac730e1a720b1&q=opiniones+de+cl%C3%ADnica+veterinaria+campo+de+gibraltar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MjE0N7U0sTSzMDQ1NTE3sTC03MDI-IrRJL8gMy8zPy-1WCElVSE55_DavMzkRIWy1JLUosy8xKLMRIXkxNyCfJBsemZSUWJOSWLRIlaytAEAczVLs4gAAAA&rldimm=2417594968155474819&tbm=lcl&hl=es-ES#lkt=LocalPoiReviews";
export const AVERAGE_RATING = 4.7;
export const TOTAL_REVIEWS = 99;
