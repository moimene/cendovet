import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const PrivacyPolicyContent = () => (
    <>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Última actualización: Noviembre 2025</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">1. Responsable del Tratamiento</h2>
        <p className="mb-2"><strong>Identidad:</strong> CENDOVET - Centro de Especialidades Veterinarias</p>
        <p className="mb-2"><strong>Dirección:</strong> Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz</p>
        <p className="mb-2"><strong>Email:</strong> info@cvcampogibraltar.es</p>
        <p className="mb-4"><strong>Teléfono:</strong> 956 097 060</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">2. Principios Aplicables</h2>
        <p className="mb-4">El tratamiento de sus datos personales se regirá por los siguientes principios recogidos en el artículo 5 del RGPD:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Licitud, lealtad y transparencia:</strong> Requerimos su consentimiento previo e informado.</li>
            <li><strong>Limitación de la finalidad:</strong> Tratamos sus datos para fines específicos, explícitos y legítimos.</li>
            <li><strong>Minimización de datos:</strong> Solicitamos únicamente los datos necesarios.</li>
            <li><strong>Exactitud:</strong> Mantenemos sus datos actualizados.</li>
            <li><strong>Limitación del plazo de conservación:</strong> Conservamos datos solo el tiempo necesario.</li>
            <li><strong>Integridad y confidencialidad:</strong> Garantizamos seguridad mediante medidas técnicas y organizativas.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">3. Obtención de Datos Personales</h2>
        <p className="mb-4">Los datos personales que tratamos en CENDOVET proceden directamente del interesado a través de:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Formularios de contacto en nuestra web</li>
            <li>Formularios de referencia de casos clínicos</li>
            <li>Comunicaciones por email o teléfono</li>
            <li>Visitas a nuestras instalaciones</li>
            <li>Cookies y tecnologías similares (ver Política de Cookies)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">4. Datos Personales que Tratamos</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">4.1. Datos de Clínicas Veterinarias</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Nombre de la clínica y veterinario de contacto</li>
            <li>Dirección postal y email</li>
            <li>Teléfono de contacto</li>
            <li>Número de colegiado</li>
            <li>Datos de casos clínicos referidos</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">4.2. Datos de Propietarios de Mascotas</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Nombre y apellidos</li>
            <li>DNI/NIE (cuando sea legalmente requerido)</li>
            <li>Dirección postal</li>
            <li>Teléfono y email</li>
            <li>Datos de la mascota (nombre, especie, raza, historial médico)</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">4.3. Datos de Navegación</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Dirección IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas visitadas</li>
            <li>Tiempo de permanencia</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">5. Finalidades del Tratamiento</h2>
        <p className="mb-2"><strong>Gestión de servicios veterinarios</strong><br /><span className="text-sm text-slate-500">Base legal: Ejecución de contrato y consentimiento</span></p>
        <p className="mb-2"><strong>Atención de consultas y solicitudes</strong><br /><span className="text-sm text-slate-500">Base legal: Consentimiento del interesado</span></p>
        <p className="mb-2"><strong>Envío de comunicaciones profesionales</strong><br /><span className="text-sm text-slate-500">Base legal: Interés legítimo y consentimiento</span></p>
        <p className="mb-2"><strong>Cumplimiento de obligaciones legales</strong><br /><span className="text-sm text-slate-500">Base legal: Obligación legal (normativa veterinaria)</span></p>
        <p className="mb-4"><strong>Mejora de servicios mediante análisis estadísticos</strong><br /><span className="text-sm text-slate-500">Base legal: Interés legítimo</span></p>

        <h2 className="text-2xl font-bold mt-6 mb-3">6. Conservación de Datos</h2>
        <p className="mb-4">Los datos personales se conservarán durante:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Datos médicos veterinarios:</strong> Mínimo 5 años desde el último servicio (normativa veterinaria)</li>
            <li><strong>Datos de facturación:</strong> 6 años (obligación fiscal)</li>
            <li><strong>Datos de marketing:</strong> Hasta que se retire el consentimiento</li>
            <li><strong>Datos de navegación:</strong> Máximo 2 años</li>
        </ul>
        <p>Transcurridos estos plazos, los datos serán eliminados o anonimizados.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">7. Destinatarios de Datos</h2>
        <p className="mb-4">Sus datos personales podrán ser comunicados a:</p>
         <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Laboratorios de análisis clínicos: Para diagnósticos veterinarios</li>
            <li>Clínicas veterinarias remitentes: Para seguimiento de casos</li>
            <li>Gestores contables y fiscales: Para cumplimiento de obligaciones</li>
            <li>Proveedores de servicios tecnológicos: Hosting, email, CRM</li>
            <li>Organismos públicos: Cuando exista obligación legal</li>
        </ul>
        <p>Todos los terceros están obligados contractualmente a garantizar la seguridad y confidencialidad de sus datos.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">8. Derechos del Interesado</h2>
        <p className="mb-4">Conforme al RGPD, puede ejercitar los siguientes derechos:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"><strong>Derecho de Acceso:</strong> Conocer qué datos tratamos sobre usted.</div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"><strong>Derecho de Rectificación:</strong> Modificar datos inexactos o incompletos.</div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"><strong>Derecho de Supresión:</strong> Solicitar la eliminación de sus datos.</div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"><strong>Derecho de Oposición:</strong> Oponerse a determinados tratamientos.</div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"><strong>Derecho de Limitación:</strong> Solicitar la limitación del tratamiento.</div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg"><strong>Derecho de Portabilidad:</strong> Recibir sus datos en formato estructurado.</div>
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">¿Cómo ejercitar sus derechos?</h3>
        <p>Puede ejercitar sus derechos mediante:</p>
        <ul className="list-disc list-inside space-y-2 my-2">
            <li><strong>Email:</strong> info@cvcampogibraltar.es</li>
            <li><strong>Correo postal:</strong> CENDOVET, Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz</li>
        </ul>
        <p className="mb-4">Debe adjuntar copia de su DNI o documento identificativo equivalente.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Derecho a reclamar ante la Autoridad de Control</h3>
        <p>Si considera que el tratamiento no se ajusta a la normativa, puede presentar reclamación ante la <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Agencia Española de Protección de Datos (AEPD)</a>.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">9. Medidas de Seguridad</h2>
        <p className="mb-4">CENDOVET ha implementado medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos:</p>
        <ul className="space-y-2">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Cifrado SSL/TLS en todas las comunicaciones web</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Acceso restringido mediante autenticación y perfiles de usuario</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Copias de seguridad periódicas</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Sistemas de detección de intrusiones</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Formación del personal en protección de datos</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Auditorías periódicas de seguridad</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Contratos de confidencialidad con todo el personal</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">10. Transferencias Internacionales</h2>
        <p className="mb-4">CENDOVET no realiza transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE). En caso de ser necesario en el futuro, se garantizará que existan garantías adecuadas conforme al RGPD.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">11. Menores de Edad</h2>
        <p className="mb-4">Nuestros servicios no están dirigidos a menores de 14 años. Si es tutor legal de un menor y desea que tratemos datos de su mascota, deberá proporcionar su consentimiento expreso.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">12. Actualizaciones de la Política</h2>
        <p className="mb-4">Esta Política de Privacidad puede ser modificada. Cualquier cambio será comunicado en esta página con suficiente antelación. La fecha de última actualización se indica en la parte superior del documento.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">13. Contacto</h2>
        <p>Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de sus datos personales, puede contactarnos a través de los medios indicados en la sección "Responsable del Tratamiento".</p>
    </>
);

const LegalNoticeContent = () => (
    <>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Última actualización: Noviembre 2025</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">1. Datos Identificativos</h2>
        <p><strong>Denominación social:</strong> CENDOVET - Centro de Especialidades Veterinarias</p>
        <p><strong>Domicilio social:</strong> Av. Virgen de la Palma, 3, 11203 Algeciras, Cádiz</p>
        <p><strong>Email de contacto:</strong> info@cvcampogibraltar.es</p>
        <p className="mb-4"><strong>Teléfono:</strong> 956 097 060</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">2. Objeto</h2>
        <p className="mb-4">El presente Aviso Legal regula el uso y utilización del sitio web www.cendovet.com (en adelante, el "Sitio Web"), del que es titular CENDOVET. La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">3. Condiciones de Acceso y Utilización</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">3.1. Carácter Gratuito</h3>
        <p className="mb-4">El acceso al Sitio Web tiene carácter gratuito para los usuarios, salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">3.2. Registro de Usuarios</h3>
        <p className="mb-4">Con carácter general, la prestación de servicios no exige la previa suscripción o registro de los usuarios. No obstante, determinados servicios podrán estar condicionados a la previa cumplimentación del correspondiente registro.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">3.3. Veracidad de la Información</h3>
        <p className="mb-4">El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique a CENDOVET y será el único responsable de las manifestaciones falsas o inexactas que realice.</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">3.4. Menores de Edad</h3>
        <p className="mb-4">Para el uso de los servicios, los menores de edad deben obtener siempre previamente el consentimiento de los padres, tutores o representantes legales, responsables últimos de todos los actos realizados por los menores a su cargo.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">4. Obligaciones del Usuario</h2>
        <p className="mb-4">El usuario se compromete a:</p>
        <ul className="space-y-2 mb-4">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-600 mr-2" /> Hacer un uso adecuado y lícito del Sitio Web</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-600 mr-2" /> No utilizar el Sitio Web para actividades ilícitas o contrarias a la buena fe</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-600 mr-2" /> No introducir virus informáticos, archivos defectuosos o cualquier otro programa que pueda causar daños</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-600 mr-2" /> No acceder a cuentas de correo electrónico ajenas</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-600 mr-2" /> No reproducir, copiar, distribuir o modificar los contenidos sin autorización expresa</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-600 mr-2" /> No realizar ingeniería inversa, descompilación o cualquier otro proceso para obtener el código fuente</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">5. Propiedad Intelectual e Industrial</h2>
        <p className="mb-4">Todos los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, iconos, etc., son propiedad intelectual de CENDOVET o de terceros. Quedan expresamente prohibidas la reproducción, distribución y comunicación pública de los contenidos sin autorización expresa. Las marcas y nombres comerciales son titularidad de CENDOVET o terceros.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">6. Exclusión de Garantías y Responsabilidad</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">6.3. De la Información Médico-Veterinaria</h3>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 p-4 my-4 rounded-lg" role="alert">
            <p className="font-bold flex items-center"><AlertTriangle className="mr-2"/> Advertencia Importante</p>
            <p>La información médico-veterinaria proporcionada en este Sitio Web tiene carácter informativo y educativo. No sustituye en ningún caso el diagnóstico, consejo o tratamiento médico profesional. Ante cualquier duda sobre la salud de su mascota, consulte siempre con su veterinario. En caso de urgencia, acuda inmediatamente a un centro veterinario.</p>
        </div>
        <p className="mb-4">CENDOVET excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad del Sitio Web, a la veracidad de los contenidos o a la presencia de virus.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">7. Modificaciones</h2>
        <p className="mb-4">CENDOVET se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su Sitio Web.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">8. Enlaces desde Otros Sitios Web</h2>
        <p className="mb-4">El establecimiento de un enlace desde otro sitio web al de CENDOVET deberá cumplir ciertas condiciones, como no realizar manifestaciones falsas y no utilizar frames. El sitio enlazante no podrá contener contenidos ilícitos.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">9. Protección de Datos</h2>
        <p className="mb-4">El tratamiento de datos personales se rige por lo dispuesto en la <a href="/politica-privacidad" className="text-teal-600 hover:underline">Política de Privacidad</a>.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">10. Cookies</h2>
        <p className="mb-4">Para más información, consulte nuestra <a href="/politica-cookies" className="text-teal-600 hover:underline">Política de Cookies</a>.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">11. Legislación Aplicable y Jurisdicción</h2>
        <p className="mb-4">Las presentes Condiciones Generales se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, o a los de Cádiz (España) si el domicilio está fuera de España.</p>
    </>
);

const CookiesPolicyContent = () => (
    <>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Última actualización: Noviembre 2025</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">1. ¿Qué son las Cookies?</h2>
        <p className="mb-4">Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando se navega por Internet. Su función principal es reconocer al usuario y recordar sus preferencias para facilitar la navegación y usabilidad de nuestra web.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">2. Tipos de Cookies Según su Finalidad</h2>
        <p className="mb-2"><strong>Cookies Técnicas (Necesarias)</strong>: Imprescindibles para la correcta navegación. No requieren consentimiento.</p>
        <p className="mb-2"><strong>Cookies de Preferencias</strong>: Permiten recordar información como el idioma. No requieren consentimiento.</p>
        <p className="mb-2"><strong>Cookies Analíticas</strong>: Permiten cuantificar el número de usuarios y realizar análisis estadísticos (ej: Google Analytics). Requieren consentimiento.</p>
        <p className="mb-2"><strong>Cookies Publicitarias</strong>: Permiten la gestión de espacios publicitarios. Requieren consentimiento.</p>
        <p className="mb-4"><strong>Cookies de Publicidad Comportamental</strong>: Almacenan información del comportamiento de los usuarios para mostrar publicidad personalizada. Requieren consentimiento explícito.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">3. Cookies Utilizadas en CENDOVET</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b p-2">Nombre/Proveedor</th>
                        <th className="border-b p-2">Tipo</th>
                        <th className="border-b p-2">Duración</th>
                        <th className="border-b p-2">Finalidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-slate-50 dark:bg-slate-700"><td colSpan={4} className="p-2 font-bold">Cookies Propias</td></tr>
                    <tr><td className="border-b p-2">cookieConsent</td><td className="border-b p-2">Técnica</td><td className="border-b p-2">1 año</td><td className="border-b p-2">Almacena las preferencias de cookies.</td></tr>
                    <tr><td className="border-b p-2">language</td><td className="border-b p-2">Preferencia</td><td className="border-b p-2">1 año</td><td className="border-b p-2">Recuerda el idioma seleccionado.</td></tr>
                    <tr><td className="border-b p-2">sessionID</td><td className="border-b p-2">Técnica</td><td className="border-b p-2">Sesión</td><td className="border-b p-2">Mantiene la sesión del usuario.</td></tr>
                    <tr className="bg-slate-50 dark:bg-slate-700"><td colSpan={4} className="p-2 font-bold">Cookies de Terceros</td></tr>
                    <tr><td className="border-b p-2">Google Analytics</td><td className="border-b p-2">Analítica</td><td className="border-b p-2">2 años</td><td className="border-b p-2">Análisis estadístico del tráfico.</td></tr>
                    <tr><td className="border-b p-2">Google Maps</td><td className="border-b p-2">Técnica</td><td className="border-b p-2">6 meses</td><td className="border-b p-2">Mostrar mapas interactivos.</td></tr>
                </tbody>
            </table>
        </div>
        <p className="text-sm mt-2">Para más información, consulte las políticas de privacidad de cada proveedor, como la de <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Google</a>.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">4. Base Legal para el Uso de Cookies</h2>
        <p className="mb-4">El uso de cookies técnicas se basa en nuestro interés legítimo, mientras que las analíticas y de marketing se basan en su consentimiento explícito.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">5. Cómo Gestionar las Cookies</h2>
        <p className="mb-4">Puede aceptar, rechazar o configurar sus preferencias de cookies a través del banner que aparece en su primera visita. También puede gestionar las cookies desde la configuración de su navegador:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Microsoft Edge</a></li>
        </ul>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 p-4 my-4 rounded-lg" role="alert">
            <p className="font-bold flex items-center"><AlertTriangle className="mr-2"/> Advertencia</p>
            <p>Bloquear o eliminar cookies puede afectar negativamente la experiencia de usuario.</p>
        </div>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">6. Cookies de Terceros - Google Analytics</h2>
        <p className="mb-4">Utilizamos Google Analytics para obtener estadísticas anónimas sobre el uso de nuestro sitio. Puede desactivarlo con el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">complemento de inhabilitación para navegadores</a>.</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">7. Actualización de la Política de Cookies</h2>
        <p className="mb-4">CENDOVET puede modificar esta Política de Cookies. Cualquier cambio significativo será comunicado en el sitio web.</p>
    </>
);


const LegalPage = ({ pageTitle }) => {
    
    const getContent = () => {
        switch(pageTitle) {
            case 'Política de Privacidad':
                return <PrivacyPolicyContent />;
            case 'Aviso Legal':
                 return <LegalNoticeContent />;
            case 'Política de Cookies':
                return <CookiesPolicyContent />;
            default:
                return <p>Contenido no encontrado.</p>;
        }
    }

    return (
        <>
            <Helmet>
                <title>{pageTitle} - CENDOVET</title>
                <meta name="description" content={`Documento legal de CENDOVET: ${pageTitle}.`} />
            </Helmet>
            <div className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-6">{pageTitle}</h1>
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                           {getContent()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LegalPage;