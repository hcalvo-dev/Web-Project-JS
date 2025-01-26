// 1. Definimos los recursos de traducción para i18next:

export const resources = {
  es: {
    translation: {
      // Barra de navegación
      brandName: 'WorldTravel',
      nav_home: 'Inicio',
      nav_destino: 'Destino',
      nav_contacto: 'Contacto',
      btn_login: 'Login',
      nav_search: 'Buscar...',

      // -- Home --
      home_titulo: 'VIAJES EXÓTICOS',
      home_subtitulo: 'Encuentra las vacaciones perfectas.<br/>Viajes a medida y en privado.<br/>Experiencias inolvidables.',
      home_boton: 'Quiero mi plan',
      home_subtitulo2: 'Agencia especializada en viajes exóticos',
      home_parrafo1: "Nuestro equipo de expertos en viajes exóticos trabaja contigo para crear <span class='text-primary'><strong>itinerarios personalizados</strong></span>.",
      home_parrafo2: 'Asegurándonos de que cada detalle de tu viaje sea perfecto.',
      home_parrafo3: 'En Travel creamos experiencias que despiertan tus sentidos.',
      home_parrafo4: "Porque cada uno de tus viajes es <span class='text-primary'><strong>una historia que está esperando a ser vivida.</strong></span>",
      home_recomendadoPor: "Recomendado <span class='text-primary'><strong>por</strong></span>",

      // Slide 1
      carousel_slide1_days: '8 noches - 9 días',
      carousel_slide1_name: 'Sri Lanka',
      carousel_slide1_description: 'El tour Vacaciones de Lujo en Sri ha sido especialmente diseñado...',
      carousel_slide1_price: 'Desde 2.280€',
      carousel_slide1_button: 'Ver más',

      // Slide 2
      carousel_slide2_days: '10 noches - 11 días',
      carousel_slide2_name: 'Dubái & Seuchelles',
      carousel_slide2_description: 'Con este viaje combinado Dubái & Seuchelles podrás explorar...',
      carousel_slide2_price: 'Desde 3.460€',
      carousel_slide2_button: 'Ver más',

      // Slide 3
      carousel_slide3_days: '8 noches - 9 días',
      carousel_slide3_name: 'Golden Triangle & Udaipur',
      carousel_slide3_description: 'Con el tour Descubre India 8 noches, podrás conocer...',
      carousel_slide3_price: 'Desde 2.560€',
      carousel_slide3_button: 'Ver más',

      // Slide 4
      carousel_slide4_days: '7 noches - 8 días',
      carousel_slide4_name: 'Kenia Luxury Safari',
      carousel_slide4_description: 'El Luxury Safari es el itinerario indicado para quien busca...',
      carousel_slide4_price: 'Desde 4.040€',
      carousel_slide4_button: 'Ver más',

      // Slide 5
      carousel_slide5_days: '6 noches - 7 días',
      carousel_slide5_name: 'Grandes Parques de Tanzania',
      carousel_slide5_description: '¿Quieres ver de cerca a los Big Five en...',
      carousel_slide5_price: 'Desde 4.830€',
      carousel_slide5_button: 'Ver más',

      // Slide 6
      carousel_slide6_days: '6 noches - 7 días',
      carousel_slide6_name: 'Constancia Ephelia Seychelles',
      carousel_slide6_description: 'Vive todo lo mejor que puede ofrecerte un viaje a...',
      carousel_slide6_price: 'Desde 2.730€',
      carousel_slide6_button: 'Ver más',

      // Slide 7
      carousel_slide7_days: '9 noches - 10 días',
      carousel_slide7_name: 'Tahiti, Moore & Bora Bora',
      carousel_slide7_description: 'Descubre la joya del pacífico con este viaje a Polinesia...',
      carousel_slide7_price: 'Desde 6.595€',
      carousel_slide7_button: 'Ver más',

      // Recomendaciones
      home_recomendaciones: 'Recomendado por',

      // -- CONTACTO --
      contact_dudas: '¿Tienes Dudas?',
      contact_disposicion: 'Estamos a tu disposición para solucionar cualquier duda las 24 horas del día.',
      contact_titulo: 'Contáctanos',
      contact_form_titulo: 'Formulario de Contacto',

      contact_form_labelNombre: 'Nombre',
      contact_form_name: 'Tu nombre',
      contact_form_helpNombre: 'Introduce tu nombre completo.',
      contact_form_errorNombre: 'El nombre es obligatorio.',

      contact_form_labelEmail: 'Correo Electrónico',
      contact_form_email: 'tucorreo@email.com',
      contact_form_helpEmail: 'Introduce una dirección de correo válida.',
      contact_form_errorEmail: 'El correo electrónico es obligatorio y debe ser válido.',

      contact_form_labelMensaje: 'Mensaje',
      contact_form_message: 'Escribe tu mensaje',
      contact_form_helpMensaje: 'Incluye los detalles de tu consulta o mensaje.',
      contact_form_errorMensaje: 'El mensaje no puede estar vacío.',

      contact_form_botonEnviar: 'Enviar',

      // -- MAPA --
      contact_nuestraUbicacion: 'Nuestra Ubicación',

      // -- PREGUNTAS FRECUENTES --
      contact_preguntasFrecuentes: 'Preguntas frecuentes',
      contact_faq_pregunta: 'Pregunta',
      contact_faq_respuesta: 'Respuesta',
      contact_faq_1q: '¿Qué servicios ofrece la agencia?',
      contact_faq_1a: 'Organizamos viajes personalizados, tours en grupo, paquetes de luna de miel y viajes de aventura.',
      contact_faq_2q: '¿Se pueden modificar los itinerarios?',
      contact_faq_2a: 'Sí, nuestros paquetes son flexibles y podemos adaptarlos a tus necesidades y preferencias.',
      contact_faq_3q: '¿Ofrecen asistencia durante el viaje?',
      contact_faq_3a: 'Contamos con asistencia 24/7 a través de nuestro servicio de atención al cliente.',
      contact_faq_4q: '¿Cómo puedo realizar una reserva?',
      contact_faq_4a: 'Puedes reservar a través de nuestra web, llamando al teléfono de atención o visitándonos en nuestras oficinas.',
      contact_faq_5q: '¿Qué métodos de pago aceptan?',
      contact_faq_5a: 'Aceptamos pagos con tarjeta de crédito/débito, transferencias bancarias y PayPal.',
      contact_faq_6q: '¿Tienen opciones para viajes de aventura?',
      contact_faq_6a: 'Sí, ofrecemos paquetes de aventura que incluyen actividades como senderismo, buceo y safaris.',
      contact_faq_7q: '¿Qué destinos son los más populares?',
      contact_faq_7a: 'Nuestros destinos más solicitados son Maldivas, Tailandia, Italia y Costa Rica.',
      contact_faq_8q: '¿Qué documentación necesito para viajar?',
      contact_faq_8a: 'Dependiendo del destino, necesitarás tu pasaporte, visado y otros documentos que nuestro equipo te ayudará a gestionar.',
      contact_faq_9q: '¿Ofrecen descuentos para grupos grandes?',
      contact_faq_9a: 'Sí, contamos con descuentos especiales para grupos de más de 10 personas.',
      contact_faq_10q: '¿Se puede cambiar la fecha de un viaje reservado?',
      contact_faq_10a: 'Sí, puedes cambiar la fecha sujeto a disponibilidad y a nuestras políticas de modificación.',
      contact_faq_11q: '¿Incluyen seguro de viaje en los paquetes?',
      contact_faq_11a: 'Ofrecemos seguros de viaje opcionales que puedes añadir a tu paquete.',
      contact_faq_12q: '¿Qué sucede si necesito cancelar mi viaje?',
      contact_faq_12a: 'Aplica nuestra política de cancelación, que incluye reembolsos según el tiempo de anticipación.',
      contact_faq_13q: '¿Hay paquetes familiares disponibles?',
      contact_faq_13a: 'Sí, tenemos paquetes especialmente diseñados para familias con actividades para todas las edades.',
      contact_faq_14q: '¿Se pueden reservar vuelos a través de su agencia?',
      contact_faq_14a: 'Sí, ofrecemos reserva de vuelos junto con los paquetes o como servicio independiente.',
      contact_faq_15q: '¿Qué sucede si pierdo mi vuelo?',
      contact_faq_15a: 'Nuestro equipo de asistencia te ayudará a gestionar un vuelo alternativo según las políticas de la aerolínea.',
      contact_faq_16q: '¿Ofrecen paquetes todo incluido?',
      contact_faq_16a: 'Sí, contamos con paquetes todo incluido que cubren transporte, alojamiento y actividades.',
      contact_faq_17q: '¿Puedo pagar en cuotas?',
      contact_faq_17a: 'Sí, ofrecemos planes de pago en cuotas con ciertas condiciones.',
      contact_faq_18q: '¿Qué actividades ofrecen en destinos de playa?',
      contact_faq_18a: 'Incluimos actividades como snorkel, paseos en bote y deportes acuáticos.',
      contact_faq_19q: '¿Es posible incluir transporte desde mi casa al aeropuerto?',
      contact_faq_19a: 'Sí, podemos gestionar transporte privado desde tu domicilio al aeropuerto.',
      contact_faq_20q: '¿Ofrecen tours para personas mayores?',
      contact_faq_20a: 'Sí, contamos con paquetes especialmente diseñados para personas mayores con actividades adaptadas.',
      contact_faq_21q: '¿Hay paquetes exclusivos para lunas de miel?',
      contact_faq_21a: 'Sí, ofrecemos paquetes exclusivos para parejas en su luna de miel.',
      contact_faq_22q: '¿Se pueden incluir guías turísticos en los paquetes?',
      contact_faq_22a: 'Sí, puedes añadir guías turísticos en varios destinos.',
      contact_faq_23q: '¿Qué tipo de alojamientos incluyen los paquetes?',
      contact_faq_23a: 'Ofrecemos alojamientos que van desde hoteles económicos hasta resorts de lujo.',
      contact_faq_24q: '¿Hay descuentos para estudiantes?',
      contact_faq_24a: 'Sí, ofrecemos descuentos especiales para estudiantes con identificación válida.',
      contact_faq_25q: '¿Puedo elegir los horarios de vuelo?',
      contact_faq_25a: 'Hacemos lo posible por adaptarnos a los horarios que prefieras, sujeto a disponibilidad.',
      contact_faq_26q: '¿Ofrecen asistencia en caso de emergencia médica durante el viaje?',
      contact_faq_26a: 'Sí, contamos con seguros de viaje que cubren emergencias médicas.',
      contact_faq_27q: '¿Cómo sé si necesito un visado para mi destino?',
      contact_faq_27a: 'Nuestro equipo te informará si necesitas visado y cómo tramitarlo.',
      contact_faq_28q: '¿Qué opciones de transporte incluyen los paquetes?',
      contact_faq_28a: 'Ofrecemos transporte terrestre, aéreo y marítimo dependiendo del paquete.',
      contact_faq_29q: '¿Hay promociones por reservar con anticipación?',
      contact_faq_29a: 'Sí, ofrecemos descuentos especiales por reservas realizadas con más de 6 meses de anticipación.',
      contact_faq_30q: '¿Qué medidas de seguridad tienen en destinos internacionales?',
      contact_faq_30a: 'Trabajamos con proveedores certificados y brindamos asistencia durante todo el viaje.',

      // -- DESTINOS --

      // Main Content
      main_title: 'Explora el Mundo',
      main_subtitle: 'Descubre destinos únicos y vive aventuras inolvidables',
      video_aria_label: 'Video de viajes exóticos mostrando destinos de lujo',

      // Sección Sri Lanka
      sri_lanka_header: '<strong>Viaje a Sri Lanka</strong></span>',
      sri_lanka_paragraph1: 'Añade las <span class="text-primary"><strong>excursiones</strong></span> y <span class="text-primary"><strong>experiencias</strong></span> que quieras y elige los <span class="text-primary"><strong>hoteles</strong></span> en cada zona que visites.',
      sri_lanka_paragraph2: 'Por eso, organizamos todos nuestros tours con disposición de <span class="text-primary"><strong>vehículos climatizados y un chófer privado</strong></span>,',
      sri_lanka_paragraph3: 'con la mayor comodidad.',
      sri_lanka_subheader: '<span class="text-primary"><strong>Viajes a medida</strong></span>',
      sri_lanka_description: 'Sri Lanka es una isla situada en el <span class=\'text-primary\'><strong>Océano Índico</strong></span>, al sureste de la India, con forma de lágrima.',
      sri_lanka_features1: 'Es famosa por su <span class=\'text-primary\'><strong>clima tropical</strong></span>, su hospitalidad, un rico <span class=\'text-primary\'><strong>patrimonio cultural</strong></span>,',
      sri_lanka_features2: ', sus <span class=\'text-primary\'><strong>playas</strong></span> de palmeras y aguas cálidas y, muy especialmente,</br> por su <span class=\'text-primary\'><strong>exuberante naturaleza</strong></span>.',
      sri_lanka_price: '<span class="text-primary"><strong> Precio : 2.280€ </strong></span>',
      sri_lanka_button: 'Añadir al carrito',
      sri_lanka_image_alt: 'Elefantes cruzando por un rio de Sri Lanka',

      // Sección Dubái
      dubai_header: '<strong>Viaje a Dubái</strong></span>',
      dubai_paragraph1: 'Alojate en el maravilloso <span class=\'text-primary\'><strong>Pullman Dubai Downtown 5*</strong></span> con una excelente ubicación en la <span class=\'text-primary\'><strong>Business Bay de Dubái muy cerca del iconico Burj Khalifa.</strong></span>',
      dubai_paragraph2: 'Disfruta de emocionantes <span class=\'text-primary\'><strong>excursiónes en 4x4 por las dunas del desierto de Dubái</strong></span>',
      dubai_paragraph3: ' o sumergete en el agua para hacer <span class=\'text-primary\'><strong>Snorkel</strong></span>.',
      dubai_subheader: '<span class="text-primary"><strong>Visita lugares Increibles</strong></span>',
      dubai_description: 'Dubái es una ciudad emblemática en los <span class=\'text-primary\'><strong>Emiratos Árabes Unidos</strong></span>, <br />conocida por su modernidad y lujo.',
      dubai_features1: 'Es famosa por su <span class=\'text-primary\'><strong>arquitectura vanguardista</strong></span>, su deslumbrante <span class=\'text-primary\'><strong>vida nocturna</strong></span>,',
      dubai_features2: ' sus <span class=\'text-primary\'><strong>playas</strong></span> de arena blanca y su impresionante <span class=\'text-primary\'><strong>desierto</strong></span> que ofrece <br /> experiencias únicas como paseos en camello y safaris.',
      dubai_price: '<span class="text-primary"><strong> Precio : 3.460€ </strong></span>',
      dubai_button: 'Añadir al carrito',
      dubai_image_alt: 'La ciudad de Dubái iluminada por la noche',

      // Sección Udaipur
      udaipur_header: '<span class="text-primary"><strong>Viaje a Golden Triangle & Udaipur</strong></span>',
      udaipur_paragraph1: 'India es uno de esos <span class=\'text-primary\'><strong>lugares mágicos</strong></span> donde todo el mundo debería ir <span class=\'text-primary\'><strong>una vez en la vida</strong></span>.',
      udaipur_paragraph2: 'Diseñamos los viajes a India totalmente <span class=\'text-primary\'><strong>personalizados</strong></span>, planificando los itinerarios con las excursiones, experiencias y',
      udaipur_paragraph3: 'hoteles que quieras incluir. Además, todos nuestros tours en India son <span class=\'text-primary\'><strong>privados y a medida</strong></span>.',
      udaipur_subheader: '<span class="text-primary"><strong>Viajes a medida</strong></span>',
      udaipur_description: 'India es un país fascinante situado en el <span class=\'text-primary\'><strong>subcontinente asiático</strong></span>, conocido<br /> por su rica historia y diversidad cultural.',
      udaipur_features1: 'Es famosa por su <span class=\'text-primary\'><strong>arquitectura antigua</strong></span>, sus <span class=\'text-primary\'><strong>festivales vibrantes</strong></span> y su ',
      udaipur_features2: '<span class="text-primary"><strong>gastronomía única</strong></span>. Además de sus <span class=\'text-primary\'><strong>templos sagrados</strong></span><br /> y <span class=\'text-primary\'><strong>monumentos emblemáticos</strong></span>.',
      udaipur_price: '<span class="text-primary"><strong> Precio : 2.560€ </strong></span>',
      udaipur_button: 'Añadir al carrito',
      udaipur_image_alt: 'Vista panorámica del Templo akshardham de la India',

      // Sección en Construcción
      construction_header: '<strong>Próximos Destinos</strong>',
      construction_spinner: '<span class="visually-hidden">Cargando...</span>',
      construction_working: 'Estamos trabajando en ello',
      construction_text: 'Estamos preparando nuevos destinos increíbles para ti. <br />¡Pronto estarán disponibles!',
      construction_button: 'Explorar otros destinos',
      construction_alert: '¡No te lo pierdas! Actualizaremos nuestro catalogo en breves.',

      // -- Popover --
      popover_title: 'Carrito actualizado',
      popover_content: 'Plan añadido correctamente!',

      // -- AVISO LEGAL --
      loading: 'Cargando...',
      coming_soon: '¡Estamos trabajando en ello!',
      coming_soon_text: 'Estamos preparando algo increíble para ti. Por favor, vuelve pronto.',
      return_home: 'Volver al inicio',

      // -- LOGIN --
      login_title: 'Inciar Sesión',
      login_form_labelPassword: 'Contraseña',
      login_form_password: 'Tu contraseña',
      login_button: 'Entrar',
      login_form_rememberMe: 'Recuerdame',
      login_form_boton: 'Iniciar sesión',
      error_message_validationCustomPassword: 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.',
      error_message_validationCustomEmail: 'Por favor, introduce un correo electrónico válido.',
      valid_message_validationCustomEmail: 'Correo válido.',
      valid_message_validationCustomPassword: 'Contraseña válida.',

      // -- FOOTER --
      footer_nuestrasOficinas: 'NUESTRAS OFICINAS',
      footer_espana: 'España',
      footer_reinoUnido: 'Reino Unido',
      footer_portugal: 'Portugal',
      footer_italia: 'Italia',
      footer_francia: 'Francia',
      footer_maldivas: 'Maldivas',
      footer_avisoLegal: 'Aviso legal',
      footer_condiciones: 'Condiciones Generales',
      footer_privacidad: 'Política de Privacidad',
      footer_cookies: 'Política de Cookies',
      footer_mediakit: 'Media Kit',
      footer_siguenos: 'Síguenos:',
      footer_copyright:
            'Copyright ©2024 Travel.'

    }
  },
  en: {
    translation: {
      // -- NAVIGATION BAR --
      brandName: 'WorldTravel',
      nav_home: 'Home',
      nav_destino: 'Destinations',
      nav_contacto: 'Contact',
      btn_login: 'Login',
      nav_search: 'Search...',

      // -- HOME --
      home_titulo: 'EXOTIC TRIPS',
      home_subtitulo: 'Find the perfect vacation.<br/>Tailor-made and private trips.<br/>Unforgettable experiences.',
      home_boton: 'I want my plan',
      home_subtitulo2: 'Agency specialized in exotic travel',
      home_parrafo1: "Our team of exotic travel experts works with you to create <span class='text-primary'><strong>personalized itineraries</strong></span>.",
      home_parrafo2: 'Ensuring every detail of your trip is perfect.',
      home_parrafo3: 'At Travel, we create experiences that awaken your senses.',
      home_parrafo4: "Because each of your trips is <span class='text-primary'><strong>a story waiting to be lived.</strong></span>",
      home_recomendadoPor: "Recommended <span class='text-primary'><strong>by</strong></span>",

      // Slide 1
      carousel_slide1_days: '8 nights - 9 days',
      carousel_slide1_name: 'Sri Lanka',
      carousel_slide1_description: 'The Luxury Vacation in Sri tour has been specially designed...',
      carousel_slide1_price: 'From 2,280$',
      carousel_slide1_button: 'See more',

      // Slide 2
      carousel_slide2_days: '10 nights - 11 days',
      carousel_slide2_name: 'Dubai & Seychelles',
      carousel_slide2_description: 'With this combined trip Dubai & Seychelles you can explore...',
      carousel_slide2_price: 'From 3,460$',
      carousel_slide2_button: 'See more',

      // Slide 3
      carousel_slide3_days: '8 nights - 9 days',
      carousel_slide3_name: 'Golden Triangle & Udaipur',
      carousel_slide3_description: 'With the Discover India 8-night tour, you can get to know...',
      carousel_slide3_price: 'From 2,560$',
      carousel_slide3_button: 'See more',

      // Slide 4
      carousel_slide4_days: '7 nights - 8 days',
      carousel_slide4_name: 'Kenya Luxury Safari',
      carousel_slide4_description: 'The Luxury Safari is the perfect itinerary for those looking for...',
      carousel_slide4_price: 'From 4,040$',
      carousel_slide4_button: 'See more',

      // Slide 5
      carousel_slide5_day: '6 nights - 7 days',
      carousel_slide5_name: 'Tanzania’s Great Parks',
      carousel_slide5_description: 'Do you want to see the Big Five up close in...',
      carousel_slide5_price: 'From 4,830$',
      carousel_slide5_button: 'See more',

      // Slide 6
      carousel_slide6_days: '6 nights - 7 days',
      carousel_slide6_name: 'Constance Ephelia Seychelles',
      carousel_slide6_description: 'Experience all the best a trip to ... can offer',
      carousel_slide6_price: 'From 2,730$',
      carousel_slide6_button: 'See more',

      // Slide 7
      carousel_slide7_days: '9 nights - 10 days',
      carousel_slide7_name: 'Tahiti, Moore & Bora Bora',
      carousel_slide7_description: 'Discover the jewel of the Pacific with this trip to Polynesia...',
      carousel_slide7_price: 'From 6,595$',
      carousel_slide7_button: 'See more',

      // Recomendaciones
      home_recomendaciones: 'Recommended by',

      // -- CONTACT --
      contact_dudas: 'Have any questions?',
      contact_disposicion: 'We are available 24/7 to solve any query you have.',
      contact_titulo: 'Contact Us',
      contact_form_titulo: 'Contact Form',

      contact_form_labelNombre: 'Name',
      contact_form_name: 'Your name',
      contact_form_helpNombre: 'Enter your full name.',
      contact_form_errorNombre: 'Name is required.',

      contact_form_labelEmail: 'Email',
      contact_form_email: 'youremail@email.com',
      contact_form_helpEmail: 'Enter a valid email address.',
      contact_form_errorEmail: 'A valid email is required.',

      contact_form_labelMensaje: 'Message',
      contact_form_message: 'Write your message',
      contact_form_helpMensaje: 'Include the details of your query or message.',
      contact_form_errorMensaje: 'Message cannot be empty.',

      contact_form_botonEnviar: 'Send',

      // -- MAP --
      contact_nuestraUbicacion: 'Our Location',

      // -- FAQ --
      contact_preguntasFrecuentes: 'Frequently Asked Questions',
      contact_faq_pregunta: 'Question',
      contact_faq_respuesta: 'Answer',
      contact_faq_1q: 'What services does the agency offer?',
      contact_faq_1a: 'We organize personalized trips, group tours, honeymoon packages, and adventure travels.',
      contact_faq_2q: 'Can the itineraries be modified?',
      contact_faq_2a: 'Yes, our packages are flexible and we can adapt them to your needs and preferences.',
      contact_faq_3q: 'Do you offer assistance during the trip?',
      contact_faq_3a: 'We provide 24/7 assistance through our customer support service.',
      contact_faq_4q: 'How can I make a reservation?',
      contact_faq_4a: 'You can book through our website, by phone or by visiting our offices.',
      contact_faq_5q: 'What payment methods do you accept?',
      contact_faq_5a: 'We accept credit/debit cards, bank transfers, and PayPal.',
      contact_faq_6q: 'Do you offer adventure travel options?',
      contact_faq_6a: 'Yes, we offer adventure packages including hiking, diving, and safaris.',
      contact_faq_7q: 'What are the most popular destinations?',
      contact_faq_7a: 'Our most requested destinations are Maldives, Thailand, Italy, and Costa Rica.',
      contact_faq_8q: 'What documentation do I need to travel?',
      contact_faq_8a: 'Depending on the destination, you will need your passport, visa, and other documents our team will help you manage.',
      contact_faq_9q: 'Do you offer discounts for large groups?',
      contact_faq_9a: 'Yes, we provide special discounts for groups of more than 10 people.',
      contact_faq_10q: 'Can I change the date of a booked trip?',
      contact_faq_10a: 'Yes, you can change the date subject to availability and our modification policies.',
      contact_faq_11q: 'Do the packages include travel insurance?',
      contact_faq_11a: 'We offer optional travel insurance that you can add to your package.',
      contact_faq_12q: 'What happens if I need to cancel my trip?',
      contact_faq_12a: 'Our cancellation policy applies, which includes refunds depending on the notice period.',
      contact_faq_13q: 'Are family packages available?',
      contact_faq_13a: 'Yes, we have packages specifically designed for families with activities for all ages.',
      contact_faq_14q: 'Can I book flights through your agency?',
      contact_faq_14a: 'Yes, we offer flight bookings along with packages or as a standalone service.',
      contact_faq_15q: 'What happens if I miss my flight?',
      contact_faq_15a: 'Our support team will help you arrange an alternative flight according to the airline’s policies.',
      contact_faq_16q: 'Do you offer all-inclusive packages?',
      contact_faq_16a: 'Yes, we have all-inclusive packages that cover transportation, accommodation, and activities.',
      contact_faq_17q: 'Can I pay in installments?',
      contact_faq_17a: 'Yes, we offer installment payment plans under certain conditions.',
      contact_faq_18q: 'What activities are available in beach destinations?',
      contact_faq_18a: 'We include activities like snorkeling, boat rides, and water sports.',
      contact_faq_19q: 'Is it possible to include transportation from my home to the airport?',
      contact_faq_19a: 'Yes, we can arrange private transportation from your home to the airport.',
      contact_faq_20q: 'Do you offer tours for seniors?',
      contact_faq_20a: 'Yes, we have packages specially designed for seniors with adapted activities.',
      contact_faq_21q: 'Are there exclusive honeymoon packages?',
      contact_faq_21a: 'Yes, we offer exclusive packages for couples on their honeymoon.',
      contact_faq_22q: 'Can I include tour guides in the packages?',
      contact_faq_22a: 'Yes, you can add tour guides in various destinations.',
      contact_faq_23q: 'What type of accommodations are included in the packages?',
      contact_faq_23a: 'We offer accommodations ranging from budget hotels to luxury resorts.',
      contact_faq_24q: 'Do you offer discounts for students?',
      contact_faq_24a: 'Yes, we provide special discounts for students with valid identification.',
      contact_faq_25q: 'Can I choose flight schedules?',
      contact_faq_25a: 'We do our best to accommodate your preferred schedules, subject to availability.',
      contact_faq_26q: 'Do you offer assistance in case of medical emergencies during the trip?',
      contact_faq_26a: 'Yes, we provide travel insurance that covers medical emergencies.',
      contact_faq_27q: 'How do I know if I need a visa for my destination?',
      contact_faq_27a: 'Our team will inform you if a visa is required and guide you through the application process.',
      contact_faq_28q: 'What transportation options are included in the packages?',
      contact_faq_28a: 'We offer land, air, and sea transportation depending on the package.',
      contact_faq_29q: 'Are there promotions for early bookings?',
      contact_faq_29a: 'Yes, we provide special discounts for bookings made more than six months in advance.',
      contact_faq_30q: 'What safety measures are in place for international destinations?',
      contact_faq_30a: 'We work with certified providers and provide support throughout the trip.',

      // -- DESTINOS --

      // Main Content
      main_title: '<strong>Explore the World</strong>',
      main_subtitle: 'Discover unique destinations and live unforgettable adventures',
      video_aria_label: 'Exotic travel video showing luxury destinations',

      // Sección Sri Lanka
      sri_lanka_header: '<strong>Travel to Sri Lanka</strong>',
      sri_lanka_paragraph1: 'Add the <span class="text-primary"><strong>excursions</strong></span> and <span class="text-primary"><strong>experiences</strong></span> you want and choose the <span class="text-primary"><strong>hotels</strong></span> in each area you visit.',
      sri_lanka_paragraph2: 'We will take care of the rest.',
      sri_lanka_paragraph3: 'That is why we organize all our tours with <span class="text-primary"><strong>air-conditioned vehicles and a private driver</strong></span>,',
      sri_lanka_subheader: '<span class="text-primary"><strong>Tailor-made trips</strong></span>',
      sri_lanka_description: 'Sri Lanka is an island located in the <span class=\'text-primary\'><strong>Indian Ocean</strong></span>, southeast of India, shaped like a teardrop.',
      sri_lanka_features1: 'It is famous for its <span class=\'text-primary\'><strong>tropical climate</strong></span>, hospitality, rich <span class=\'text-primary\'><strong>cultural heritage</strong></span>,',
      sri_lanka_features2: ', its <span class=\'text-primary\'><strong>beaches</strong></span> of palm trees and cool waters and, above all, for its <span class=\'text-primary\'><strong>exuberant nature</strong></span>.',
      sri_lanka_price: '<span class="text-primary"><strong> Price : 2,280$ </strong></span>',
      sri_lanka_button: 'Add to cart',
      sri_lanka_image_alt: 'Elephants crossing a river in Sri Lanka',

      // Sección Dubái
      dubai_header: '<strong>Travel to Dubai</strong>',
      dubai_paragraph1: 'Stay at the wonderful <span class=\'text-primary\'><strong>Pullman Dubai Downtown 5*</strong></span> with an excellent location in <span class=\'text-primary\'><strong>Business Bay Dubai very close to the iconic Burj Khalifa.</strong></span>',
      dubai_paragraph2: 'Enjoy exciting <span class=\'text-primary\'><strong>4x4 excursions through the Dubai desert dunes</strong></span>',
      dubai_paragraph3: ' or dive into the water for <span class=\'text-primary\'><strong>Snorkeling</strong></span>.',
      dubai_subheader: '<span class="text-primary"><strong>Visit Incredible Places</strong></span>',
      dubai_description: 'Dubai is an iconic city in the <span class=\'text-primary\'><strong>United Arab Emirates</strong></span>, known for its modernity and luxury.',
      dubai_features1: 'It is famous for its <span class=\'text-primary\'><strong>avant-garde architecture</strong></span>, its dazzling <span class=\'text-primary\'><strong>nightlife</strong></span>,',
      dubai_features2: ' its white sandy <span class=\'text-primary\'><strong>beaches</strong></span> and its impressive <span class=\'text-primary\'><strong>desert</strong></span> that offers <br /> unique experiences like camel rides and safaris.',
      dubai_price: '<span class="text-primary"><strong> Price : 3,460$ </strong></span>',
      dubai_button: 'Add to cart',
      dubai_image_alt: 'Dubai city illuminated at night',

      // Sección Udaipur
      udaipur_header: '<span class="text-primary"><strong>Travel to Golden Triangle & Udaipur</strong></span>',
      udaipur_paragraph1: 'India is one of those <span class=\'text-primary\'><strong>magical places</strong></span> where everyone should go <span class=\'text-primary\'><strong>once in a lifetime</strong></span>.',
      udaipur_paragraph2: 'We design trips to India completely <span class=\'text-primary\'><strong>personalized</strong></span>, planning itineraries with <span class=\'text-primary\'><strong>excursions</strong></span>, <span class=\'text-primary\'><strong>experiences</strong></span>, and',
      udaipur_paragraph3: '<span class=\'text-primary\'><strong>hotels</strong></span> you want to include. Plus, all our tours in India are <span class=\'text-primary\'><strong>private and tailor-made</strong></span>.',
      udaipur_subheader: '<span class="text-primary"><strong>Tailor-made trips</strong></span>',
      udaipur_description: 'India is a fascinating country located in the <span class=\'text-primary\'><strong>Asian subcontinent</strong></span>, known for its rich history and cultural diversity.',
      udaipur_features1: 'It is famous for its <span class=\'text-primary\'><strong>ancient architecture</strong></span>, its <span class=\'text-primary\'><strong>vibrant festivals</strong></span> and its ',
      udaipur_features2: '<span class="text-primary"><strong>unique gastronomy</strong></span>. Besides its <span class=\'text-primary\'><strong>sacred temples</strong></span><br /> and <span class=\'text-primary\'><strong>emblematic monuments</strong></span>.',
      udaipur_price: '<span class="text-primary"><strong> Price : 2,560$ </strong></span>',
      udaipur_button: 'Add to cart',
      udaipur_image_alt: 'Panoramic view of the Akshardham Temple in India',

      // Sección en Construcción
      construction_header: '<strong>Upcoming Destinations</strong>',
      construction_spinner: '<span class="visually-hidden">Loading...</span>',
      construction_working: 'We are working on it',
      construction_text: 'We are preparing new incredible destinations for you. <br />Coming soon!',
      construction_button: 'Explore other destinations',
      construction_alert: 'Don\'t miss it! We will update our catalog soon.',

      // -- Popover --
      popover_title: 'Cart Updated',
      popover_content: 'Plan added successfully!',

      // -- AVISO LEGAL --
      loading: 'Loading...',
      coming_soon: 'We are working on it!',
      coming_soon_text: 'We are preparing something incredible for you. Please come back soon.',
      return_home: 'Back to top',

      // -- LOGIN --
      login_title: 'Login',
      login_form_labelPassword: 'Password',
      login_form_password: 'Your password',
      login_form_rememberMe: 'Remember me',
      login_form_boton: 'Login',
      error_message_validationCustomPassword: 'Password must be at least 8 characters long, including an uppercase, a lowercase, a number, and a special character.',
      error_message_validationCustomEmail: 'Please enter a valid email address.',
      valid_message_validationCustomEmail: 'Valid email.',
      valid_message_validationCustomPassword: 'Valid password.',

      // -- FOOTER --
      footer_nuestrasOficinas: 'OUR OFFICES',
      footer_espana: 'Spain',
      footer_reinoUnido: 'United Kingdom',
      footer_portugal: 'Portugal',
      footer_italia: 'Italy',
      footer_francia: 'France',
      footer_maldivas: 'Maldives',
      footer_avisoLegal: 'Legal Notice',
      footer_condiciones: 'General Conditions',
      footer_privacidad: 'Privacy Policy',
      footer_cookies: 'Cookies Policy',
      footer_mediakit: 'Media Kit',
      footer_siguenos: 'Follow us:',
      footer_copyright:
            'Copyright ©2024 Travel.'
    }
  }
}
