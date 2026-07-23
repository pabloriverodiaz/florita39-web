/* Florita 39 — bilingual layer (EN default / ES).
   Translates the rendered DOM via an EN→ES dictionary, re-applying on
   React re-renders. English strings stay as-authored; ES swaps in on toggle. */
(function () {
  var DICT = {
    // ---- home (Mega landing) ----
    'Boutique Hotel · Isla Mujeres, Mexico': 'Hotel Boutique · Isla Mujeres, México',
    'Your summer in Isla Mujeres starts here': 'Tu verano en Isla Mujeres empieza aquí',
    'suites with private entrances': 'suites con entrada privada',
    'from the Ultramar ferry': 'del ferry Ultramar',
    'from Playa Norte': 'de Playa Norte',
    'pool & club': 'alberca & club',
    'Book direct': 'Reserva directa',
    'Welcome to Florita 39': 'Bienvenido a Florita 39',
    'Boutique, not generic.': 'Boutique, no genérico.',
    'In the heart of the island, steps from the malecón and the ferry, Florita 39 is a small six-suite hotel with a character of its own: sage-green stucco, chukum details, a tropical garden and a rooftop pool to watch the sun go down. A home by the sea, made to stay a while.':
      'En el corazón de la isla, a unos pasos del malecón y del ferry, Florita 39 es un hotel pequeño de seis suites con personalidad propia: estuco verde sage, detalles de chukum, jardín tropical y una azotea con alberca para ver caer el sol. Una casa frente al mar pensada para quedarse.',
    'See the suites': 'Ver las suites', 'Discover the island': 'Descubre la isla',
    'Unique suites with private entrances': 'Suites únicas con entrada privada',
    'Guest rating': 'Calificación de huéspedes',
    'Walk to the Ultramar ferry': 'Caminando al ferry Ultramar',
    'Sunsets from the rooftop': 'Atardeceres desde la azotea',
    'The suites · Six models': 'Las suites · Seis modelos', 'Find your own.': 'Encuentra la tuya.',
    'A ground-floor suite with a king bed and a private garden patio — a green willow view through floor-to-ceiling glass.':
      'Una suite en planta baja con cama king y patio-jardín privado — vista verde al sauce a través de cristal de piso a techo.',
    'From an intimate loft for two to duplexes and family suites with two beds. Each model has its own character — choose by trip, not by category.':
      'Desde un loft íntimo para parejas hasta dúplex y suites familiares con dos camas. Cada modelo tiene su carácter — elige por viaje, no por categoría.',
    'Balcony Loft': 'Loft con balcón', 'Playa Norte Suite': 'Suite Playa Norte', 'Rubber Tree Retreat': 'Rubber Tree',
    'Families · up to 4': 'Familias · hasta 4',
    'An open loft with a queen bed and a balcony over Av. Hidalgo. No stairs — bright and serene.':
      'Loft abierto con cama queen y balcón a la calle Hidalgo. Sin escaleras, luminoso y sereno.',
    'A suite with a bedroom and a lounge with a second queen bed. Room for the whole family.':
      'Suite con recámara y sala con segunda cama queen. Espacio amplio para toda la familia.',
    'A queen bed plus a second queen in the lounge. Comfortable, cool and superbly located.':
      'Cama queen más una segunda cama queen en la sala. Cómoda, fresca y muy bien ubicada.',
    'A two-level duplex with a private bedroom upstairs. More space and privacy for longer stays.':
      'Dúplex de dos niveles con dormitorio privado arriba. Más espacio y privacidad para estancias largas.',
    'A spacious duplex with a garden view and two levels. Our largest, for groups and big families.':
      'Dúplex amplio con vista al jardín y dos niveles. El más espacioso, para grupos y familias grandes.',
    'Family': 'Familia', 'Kitchen': 'Cocina', 'Duplex': 'Dúplex',
    'Can’t decide?': '¿No te decides?', 'Let’s find': 'Vemos juntos', 'your dates': 'tu fecha',
    'Tell us who’s travelling and we’ll recommend the perfect suite.':
      'Cuéntanos quiénes viajan y te recomendamos la suite perfecta.', 'Message us': 'Escríbenos',
    'Promotions · Summer 2026': 'Promociones · Verano 2026', 'Book direct and save.': 'Reserva directo y ahorra.',
    'The best rates are always here, direct with us — no intermediary fees.':
      'Las mejores tarifas siempre están aquí, directo con nosotros — sin comisiones de intermediarios.',
    'Summer for families,': 'Verano en familia,', '−30% on villas 2 & 4': '−30% en villas 2 y 4',
    'The family suites with two beds, a rooftop pool and a car-free island — now 30% off this summer. Book direct on the site or by WhatsApp.':
      'Las suites familiares con dos camas, alberca de azotea e isla sin coches — ahora con 30% de descuento este verano. Reserva directa por la página o WhatsApp.',
    'Book the offer': 'Reservar la promo',
    'An unhurried, car-free island.': 'Una isla sin prisa, sin coches.',
    'Playa Norte · turquoise water': 'Playa Norte · agua turquesa', 'Eastern cliffs': 'Acantilados del este',
    'Malecón & centre': 'Malecón & centro', 'Open sea': 'Mar abierto', 'Sunset on the pier': 'Atardecer en el muelle',
    'Exclusive partnership · Beach Club': 'Convenio exclusivo · Beach Club', 'Zama Beach Club, included.': 'Zama Beach Club, incluido.',
    'As a Florita 39 guest you enter Zama Beach Club': 'Como huésped de Florita 39 entras a Zama Beach Club',
    'with no minimum spend': 'sin consumo mínimo',
    '— enjoy the pool, the loungers and the sea, and order freely, no strings attached.':
      '— disfruta la alberca, los camastros y el mar, y consume lo que quieras, sin compromisos.',
    'The day by the sea, sorted.': 'El día de playa, resuelto.',
    'A beachfront pool, house coconuts, ceviches and aguachiles. Arrive, settle in and relax — we connect you with the club.':
      'Alberca frente al mar, cocos de la casa, ceviches y aguachiles. Llega, instálate y relájate — nosotros te conectamos con el club.',
    'No minimum spend': 'Sin consumo mínimo', 'for Florita 39 guests.': 'para huéspedes de Florita 39.',
    'Pool, loungers and full food & drink service.': 'Alberca, camastros y servicio completo de alimentos y bebidas.',
    'Minutes away by golf cart from the hotel.': 'A unos minutos en carrito de golf desde el hotel.',
    'Book your day': 'Reserva tu día',
    'Getting around the island': 'Movilidad en la isla', 'We rent golf carts.': 'Rentamos carritos de golf.',
    'The best way to explore Isla Mujeres. We leave a cart ready at the hotel so you can roam at your own pace — from Playa Norte to Punta Sur, on nobody’s schedule.':
      'La mejor forma de recorrer Isla Mujeres. Te dejamos el carrito listo en el hotel para que explores a tu ritmo — de Playa Norte a Punta Sur sin depender de nadie.',
    'Easy rental': 'Renta fácil', 'Your island, your pace.': 'Tu isla, a tu ritmo.',
    'Well-kept carts, delivery at the hotel and routes we recommend. By the hour or by the day, for couples or families.':
      'Carritos en buen estado, entrega en el hotel y rutas recomendadas por nosotros. Por horas o por día, para parejas o familias.',
    'Pickup and drop-off at Florita 39.': 'Entrega y devolución en Florita 39.',
    'Hourly or full-day rates.': 'Tarifas por hora o por día completo.',
    'A map with the island’s must-sees.': 'Mapa con los imperdibles de la isla.',
    'Reserve your cart': 'Aparta tu carrito',
    'Experiences at sea': 'Experiencias en el mar', 'Fishing tours.': 'Tours de pesca.',
    'Head out into the Caribbean with local captains: sport fishing, snorkel and open-water afternoons. We coordinate your departure from the hotel — just bring the enthusiasm (and sunscreen).':
      'Sal al Caribe con capitanes locales: pesca deportiva, snorkel y tardes de mar abierto. Coordinamos tu salida desde el hotel — solo trae ganas (y bloqueador).',
    'With a local captain': 'Con capitán local', 'Out to sea at dawn.': 'Mar adentro al amanecer.',
    'Half or full days, gear included. One of our guests’ favourite experiences on the island.':
      'Medias jornadas o día completo, equipo incluido. Una de las experiencias favoritas de nuestros huéspedes en la isla.',
    'Private and shared departures.': 'Salidas privadas y compartidas.',
    'Fishing gear and drinks on board.': 'Equipo de pesca y bebidas a bordo.',
    'Optional reef snorkel.': 'Opción de snorkel en arrecife.', 'Book your trip': 'Reserva tu salida',
    'Sister property': 'Propiedad hermana',
    'A different experience: intimate cabins with a bamboo garden, loungers and a plunge pool. Perfect for a couples’ escape with all the island charm.':
      'Una experiencia distinta: cabañas íntimas con jardín de bambú, camastros y plunge pool. Perfectas para una escapada en pareja con todo el encanto isleño.',
    'Private cabin': 'Cabaña privada', 'Bamboo garden': 'Jardín de bambú', 'Couples escape': 'Escapada en pareja',
    'Ask about The Tiny House': 'Pregunta por The Tiny House',
    'In the hotel': 'En el hotel', 'Everything you need.': 'Todo lo que necesitas.',
    'Rooftop & pool': 'Azotea & alberca', 'A rooftop club with a pool and loungers for the sunset.': 'Club de azotea con alberca y camastros para el atardecer.',
    'Rubén’s Restaurant': 'Restaurante Rubén’s', 'Fresh cooking and a coffee shop in the heart of the hotel.': 'Cocina fresca y cafetería en el corazón del hotel.',
    'Tropical garden': 'Jardín tropical', 'Sage stucco and green all around — the mark of the house.': 'Estuco sage y verde por todos lados — la marca de la casa.',
    'Spa & rest': 'Spa & descanso', 'Moments of calm without leaving the hotel.': 'Momentos de calma sin salir del hotel.',
    'See all rooms': 'Ver todas las habitaciones',
    'Book your stay': 'Reserva tu estancia',
    'Best rates, direct — taxes included and free cancellation on most dates. Your booking is confirmed with our reservation system.':
      'Mejores tarifas, directo — impuestos incluidos y cancelación gratis en la mayoría de fechas. Tu reserva se confirma con nuestro sistema de reservaciones.',
    'Open the booking engine in a new tab': 'Abrir el motor de reservas en una pestaña nueva',
    'Book by WhatsApp': 'Reservar por WhatsApp',
    'The booking engine opens in its own page.': 'El motor de reservas se abre en su propia página.',
    'Check availability & book →': 'Ver disponibilidad y reservar →',
    'Live rates & dates on our booking system': 'Tarifas y fechas en tiempo real en nuestro motor de reservas',
    'Check live availability and rates and book securely on our reservation system. The best rates are always here, direct with us.':
      'Consulta disponibilidad y tarifas en tiempo real y reserva de forma segura en nuestro sistema de reservaciones. Las mejores tarifas siempre están aquí, directo con nosotros.',
    'Best rate, direct': 'Mejor tarifa, directo',
    'Taxes included': 'Impuestos incluidos',
    'Free cancellation on most dates': 'Cancelación gratis en la mayoría de fechas',
    'Check availability & book': 'Ver disponibilidad y reservar',
    'You continue to our secure booking system to choose dates and pay.':
      'Continúas a nuestro sistema de reservaciones seguro para elegir fechas y pagar.',
    'Six intimate layouts, each with a kitchenette and the island a step away.':
      'Seis distribuciones íntimas, cada una con kitchenette y la isla a un paso.',

    // ---- nav / chrome ----
    'Stay': 'Hospedaje', 'Rooms': 'Habitaciones', 'Amenities': 'Amenidades',
    'Experiences': 'Experiencias', 'The Island': 'La Isla', 'Dining': 'Restaurante',
    'Reserve': 'Reservar', 'All rooms': 'Todas las habitaciones', 'Reserve your stay': 'Reserva tu estancia',
    'Explore rooms': 'Ver habitaciones', 'Check availability': 'Ver disponibilidad', 'Discover the hotel': 'Conoce el hotel',
    'Plan your stay': 'Planea tu estancia', 'See the rooms': 'Ver habitaciones', 'Book': 'Reservar',
    'Book now': 'Reservar', 'Learn more': 'Saber más', 'Ask the concierge': 'Pregunta al concierge',
    'Contact the concierge': 'Contacta al concierge', 'Reserve your day': 'Reserva tu día',
    'Book a table with your stay': 'Reserva mesa con tu estancia', 'Send': 'Enviar', 'WhatsApp us': 'Escríbenos por WhatsApp',
    'Visit website': 'Ir al sitio web', 'You won’t be charged yet': 'No se te cobrará todavía',
    'Taxes included · free cancellation': 'Impuestos incluidos · cancelación gratis',
    'Check in': 'Entrada', 'Check out': 'Salida', 'Guests': 'Huéspedes',
    '1 guest': '1 huésped', '2 guests': '2 huéspedes', '3 guests': '3 huéspedes', '4 guests': '4 huéspedes',
    'Up to 4': 'Hasta 4', '2 guests ': '2 huéspedes', 'In this room': 'En esta habitación',
    'Kitchenette': 'Cocineta', 'Open loft': 'Loft abierto', 'Suite': 'Suite', 'Two levels': 'Dos niveles',
    'Queen bed': 'Cama queen', 'King bed': 'Cama king', '2 Queen beds': '2 camas queen', 'Queen + King': 'Queen + King',

    // ---- home ----
    'Welcome to · Isla Mujeres': 'Bienvenido a · Isla Mujeres',
    'A home\nby the sea': 'Un hogar\nfrente al mar', 'A home': 'Un hogar', 'by the sea': 'frente al mar',
    'One of the best locations along the famous walking street — an intimate boutique hotel built to feel like home.':
      'Una de las mejores ubicaciones sobre la famosa calle peatonal — un hotel boutique íntimo, hecho para sentirse como en casa.',
    'The concept': 'El concepto', 'Intimate by design': 'Íntimo por diseño',
    'Florita 39 was genuinely designed to preserve the original sense of a home — a place with special attention to detail, architecture and comfort.':
      'Florita 39 fue diseñado para conservar el sentido original de un hogar — un lugar con atención especial al detalle, la arquitectura y el confort.',
    'For those who seek not only the privacy of a boutique hotel, but a genuinely memorable experience on the island — surrounded by natural beauty and an unwavering care for the environment.':
      'Para quienes buscan no solo la privacidad de un hotel boutique, sino una experiencia memorable en la isla — rodeados de belleza natural y un cuidado genuino por el entorno.',
    'Know our rooms': 'Conoce nuestras habitaciones', 'Stay your way': 'Hospédate a tu manera',
    'View room': 'Ver habitación', 'Know our amenities': 'Conoce nuestras amenidades',
    'Everything, close at hand': 'Todo, a la mano', 'Guests': 'Huéspedes', 'Memorable by nature': 'Memorable por naturaleza',
    'The location': 'La ubicación', 'On the walking street': 'En la calle peatonal',
    'Steps from Playa Norte, the Ultramar ferry and Av. Hidalgo.': 'A pasos de Playa Norte, el ferry Ultramar y la Av. Hidalgo.',

    // ---- rooms screen ----
    'Rooms & rates': 'Habitaciones y tarifas',
    'Six intimate layouts, each with a kitchenette and the island a step away. Rates are per night, taxes included.':
      'Seis espacios íntimos, cada uno con cocineta y la isla a un paso. Tarifas por noche, impuestos incluidos.',
    'All rooms': 'Todas', 'Ocean view': 'Vista al mar', 'Family': 'Familias',
    'Best for couples': 'Ideal para parejas', 'Great for families': 'Ideal para familias',
    'Families · two levels': 'Familias · dos niveles', 'Groups · two levels': 'Grupos · dos niveles',
    'Couples · private garden': 'Parejas · jardín privado',

    // ---- room blurbs ----
    'An open, light-filled loft with a queen bed and a private balcony over Av. Hidalgo. No stairs, no rush — our most intimate layout, made for two.':
      'Un loft abierto y luminoso con cama queen y un balcón privado sobre la Av. Hidalgo. Sin escaleras, sin prisa — nuestro espacio más íntimo, hecho para dos.',
    'A suite with a private balcony: a bedroom plus a lounge with a second bed. Comfortable space for a family or a group of friends in the heart of the island.':
      'Una suite con balcón privado: una recámara más una sala con segunda cama. Espacio cómodo para una familia o un grupo de amigos en el corazón de la isla.',
    'A bright twin to Hidalgo Heritage with a private balcony, a queen bedroom and a second queen in the lounge — well located and easy for families.':
      'Gemela luminosa de Hidalgo Heritage con balcón privado, recámara queen y una segunda cama queen en la sala — bien ubicada y cómoda para familias.',
    'A two-level duplex with a breakfast bar and a balcony — a queen downstairs and a king upstairs. More space and privacy for longer stays.':
      'Un dúplex de dos niveles con barra de desayuno y balcón — queen abajo y king arriba. Más espacio y privacidad para estancias largas.',
    'Our most spacious duplex: a round dining table for four, an L-shaped kitchen and two levels — a queen downstairs and a king above. Made for groups and larger families.':
      'Nuestro dúplex más amplio: mesa redonda para cuatro, cocina en L y dos niveles — queen abajo y king arriba. Hecho para grupos y familias grandes.',
    'A 30 m² ground-floor suite with a king bed and a private garden patio, with a green willow view through floor-to-ceiling glass. Two lounge chairs, a kitchenette and a travertine rain shower.':
      'Una suite de 30 m² en planta baja con cama king y patio-jardín privado, con vista verde al sauce a través de cristal de piso a techo. Dos sillones, cocineta y regadera de travertino.',

    // ---- room tags ----
    'Private balcony': 'Balcón privado', 'No stairs': 'Sin escaleras', 'Walking street': 'Calle peatonal',
    'Lounge': 'Sala', 'Second bed': 'Segunda cama', 'Balcony': 'Balcón', 'Breakfast bar': 'Barra de desayuno',
    'Private': 'Privado', 'Dining for 4': 'Comedor para 4', 'L-shaped kitchen': 'Cocina en L',
    'Garden view': 'Vista al jardín', 'Private garden': 'Jardín privado', 'Willow view': 'Vista al sauce', 'Ground floor': 'Planta baja',

    // ---- amenities / services ----
    'The hotel': 'El hotel', 'At your service': 'A tu servicio', 'Services': 'Servicios',
    'Beyond the hotel': 'Más allá del hotel', 'Explore Florita 39': 'Explora Florita 39',
    'Rooftop Pool': 'Alberca de azotea', 'Private Rooftop Club': 'Club de azotea privado', 'Spa': 'Spa',
    'Coffee Shop': 'Cafetería', "Rubén's Restaurant": "Restaurante Rubén's", 'Tropical Garden': 'Jardín tropical',
    'Open 7am – 9pm': 'Abierto 7am – 9pm', 'Sunset views over Playa Norte': 'Atardeceres sobre Playa Norte',
    'Treatments by appointment': 'Tratamientos con cita', 'Locally roasted, all day': 'Café de la casa, todo el día',
    'Regional Yucatán kitchen': 'Cocina regional yucateca', 'A quiet green courtyard': 'Un patio verde y tranquilo',
    'Housekeeping': 'Limpieza', 'Airport transfer': 'Traslado al aeropuerto', 'Golf-cart rental': 'Renta de carrito de golf',
    'Private chef': 'Chef privado', 'Babysitter': 'Niñera', 'Butler service': 'Servicio de mayordomo',
    'Tours & rentals': 'Tours y rentas', 'Island concierge': 'Concierge de la isla',
    'Experiences & tours': 'Experiencias y tours', 'Fishing, snorkel & golf carts': 'Pesca, snorkel y carritos',
    'Zama Beach Club': 'Zama Beach Club', 'Included · no minimum spend': 'Incluido · sin consumo mínimo',
    'Regional kitchen & coffee': 'Cocina regional y café', 'The island': 'La isla', 'Playa Norte & beyond': 'Playa Norte y más',
    'Gallery': 'Galería', 'See the hotel & island': 'El hotel y la isla', 'Offers': 'Ofertas', 'Summer −30% & more': 'Verano −30% y más',

    // ---- experiences ----
    'Things to do': 'Qué hacer', 'The island, on your terms. We arrange the experiences our guests love most — from fishing mornings to golf-cart days.':
      'La isla, a tu manera. Organizamos las experiencias favoritas de nuestros huéspedes — de mañanas de pesca a días en carrito de golf.',
    'Included for guests': 'Incluido para huéspedes', 'Plan with us': 'Planea con nosotros',
    'Tell us what you’d love to do': 'Cuéntanos qué te encantaría hacer',
    'Fishing tours': 'Tours de pesca', 'Half or full day · with a local captain': 'Medio día o día completo · con capitán local',
    'Head out into the Caribbean with local captains — sport fishing, open-water mornings and an optional reef snorkel. We coordinate your departure from the hotel.':
      'Sal al Caribe con capitanes locales — pesca deportiva, mañanas de mar abierto y snorkel opcional en el arrecife. Coordinamos tu salida desde el hotel.',
    'Golf-cart rental': 'Renta de carrito de golf', 'By the hour or by the day': 'Por hora o por día',
    'The best way to explore Isla Mujeres. We leave a cart ready at the hotel so you can roam at your own pace — from Playa Norte to Punta Sur, no schedules.':
      'La mejor forma de explorar Isla Mujeres. Dejamos un carrito listo en el hotel para que recorras a tu ritmo — de Playa Norte a Punta Sur, sin horarios.',
    'Snorkel & reef': 'Snorkel y arrecife', 'Reef trips & MUSA underwater museum': 'Arrecife y museo submarino MUSA',
    'Clear turquoise water and living reef just offshore. Snorkel the reef or visit the famous underwater sculpture museum — gear and guide included.':
      'Agua turquesa y arrecife vivo a unos metros. Haz snorkel en el arrecife o visita el famoso museo de esculturas submarinas — equipo y guía incluidos.',
    'Included for guests · no minimum spend': 'Incluido para huéspedes · sin consumo mínimo',
    'As a Florita 39 guest you enter Zama Beach Club with no minimum spend — the pool, the loungers and the sea, on your terms.':
      'Como huésped de Florita 39 entras a Zama Beach Club sin consumo mínimo — la alberca, los camastros y el mar, a tu manera.',

    // ---- zama ----
    'Beach-club partnership': 'Convenio con beach club', 'Your day by the sea — included with every stay, with no minimum spend.':
      'Tu día junto al mar — incluido con cada estancia, sin consumo mínimo.',
    'Guests only': 'Solo huéspedes', 'The day by the sea, sorted': 'El día de playa, resuelto',
    'A short golf-cart ride from the hotel, Zama Beach Club is your day-by-the-sea — and as a guest of Florita 39 you enjoy it with no minimum spend.':
      'A unos minutos en carrito de golf del hotel, Zama Beach Club es tu día junto al mar — y como huésped de Florita 39 lo disfrutas sin consumo mínimo.',
    'No minimum spend for Florita 39 guests': 'Sin consumo mínimo para huéspedes de Florita 39',
    'Beachfront pool, loungers and shade': 'Alberca frente al mar, camastros y sombra',
    'Full food & drink service — order freely': 'Servicio completo de alimentos y bebidas — consume libremente',
    'Minutes away by golf cart from the hotel': 'A minutos del hotel en carrito de golf',

    // ---- island ----
    'About Isla Mujeres': 'Sobre Isla Mujeres', 'Around the island': 'Alrededor de la isla', 'Close at hand': 'A la mano',
    'Eight kilometres of Caribbean across from Cancún: turquoise water, walkable streets, golf carts and sunsets on the malecón. Florita 39 sits right in the centre — everything a few steps or a short ride away.':
      'Ocho kilómetros de Caribe frente a Cancún: agua turquesa, calles peatonales, carritos de golf y atardeceres en el malecón. Florita 39 está justo en el centro — todo a unos pasos o un corto trayecto.',
    'Playa Norte': 'Playa Norte', '10 min away': 'a 10 min', 'South tip': 'Punta sur', 'At your door': 'En tu puerta', '3 min away': 'a 3 min',
    'Shallow turquoise water and soft sand — one of the most beautiful beaches in the Caribbean.':
      'Agua turquesa y poco profunda con arena suave — una de las playas más bellas del Caribe.',
    'Cliffs, sculptures and the first sunrise in Mexico at the island’s southern point.':
      'Acantilados, esculturas y el primer amanecer de México en el extremo sur de la isla.',
    'The walking street': 'La calle peatonal', 'Av. Hidalgo — shops, restaurants and island life, right outside the hotel.':
      'Av. Hidalgo — tiendas, restaurantes y vida isleña, justo afuera del hotel.',
    'Ultramar ferry': 'Ferry Ultramar', 'Twenty minutes from Cancún. Step off the ferry and you’re almost home.':
      'Veinte minutos desde Cancún. Bajas del ferry y casi estás en casa.',
    'Right in the centre': 'Justo en el centro', '3 min from the ferry': 'A 3 min del ferry',

    // ---- restaurant ----
    'Eat & drink': 'Comer y beber',
    'Fresh regional cooking and an all-day coffee shop in the heart of the hotel — open to guests and the island alike.':
      'Cocina regional fresca y una cafetería de todo el día en el corazón del hotel — abierta a huéspedes y a la isla.',
    'All-day coffee': 'Café todo el día', 'Locally roasted': 'Tostado local', 'Regional kitchen': 'Cocina regional',
    'Yucatán & Caribbean': 'Yucateca y caribeña', 'Sunset drinks': 'Tragos al atardecer', 'On the rooftop': 'En la azotea',

    // ---- offers ----
    'Promotions': 'Promociones', 'Offers & packages': 'Ofertas y paquetes',
    'The best rates are always direct with us. Here’s what’s on right now.':
      'Las mejores tarifas siempre son directo con nosotros. Esto es lo que hay ahora.',
    'Summer in the family villas': 'Verano en las villas familiares',
    'Villas 2 & 4 at 30% off this summer — two beds, rooftop pool and a car-free island.':
      'Villas 2 y 4 con 30% de descuento este verano — dos camas, alberca de azotea e isla sin coches.',
    'Select summer dates · direct booking only.': 'Fechas selectas de verano · solo reserva directa.',
    'Book direct & save': 'Reserva directo y ahorra',
    'The lowest rates are always here, direct with us — no intermediary fees.':
      'Las tarifas más bajas siempre están aquí, directo con nosotros — sin comisiones de intermediarios.',
    'Always on · hotelflorita39.com or WhatsApp.': 'Siempre activa · hotelflorita39.com o WhatsApp.',
    'Zama Beach Club access': 'Acceso a Zama Beach Club',
    'Every stay includes Zama Beach Club entry with no minimum spend.':
      'Cada estancia incluye entrada a Zama Beach Club sin consumo mínimo.',
    'For registered guests during their stay.': 'Para huéspedes registrados durante su estancia.',

    // ---- about ----
    'Our story': 'Nuestra historia', 'A home by the sea': 'Un hogar frente al mar',
    'An intimate boutique hotel in the heart of Isla Mujeres, built to feel like home.':
      'Un hotel boutique íntimo en el corazón de Isla Mujeres, hecho para sentirse como en casa.',
    'Florita 39 was designed to preserve the original sense of a home — with special attention to detail, architecture and comfort.':
      'Florita 39 fue diseñado para conservar el sentido original de un hogar — con atención especial al detalle, la arquitectura y el confort.',
    'Six suites with private entrances, a rooftop pool and club, a tropical garden and a genuine care for the island and its environment. For those who seek the privacy of a boutique hotel and a truly memorable stay.':
      'Seis suites con entrada privada, alberca y club de azotea, jardín tropical y un cuidado genuino por la isla y su entorno. Para quienes buscan la privacidad de un hotel boutique y una estancia memorable.',

    // ---- contact ----
    'Get in touch': 'Contáctanos', 'Contact': 'Contacto',
    'We’re happy to help plan your stay, a tour or a table. Reach us any way you like.':
      'Con gusto te ayudamos a planear tu estancia, un tour o una mesa. Escríbenos como prefieras.',
    'Visit us': 'Visítanos', 'Send a message': 'Envía un mensaje', 'Name': 'Nombre', 'Your name': 'Tu nombre',
    'Email': 'Correo', 'Message': 'Mensaje', 'How can we help?': '¿Cómo podemos ayudarte?',

    // ---- faq ----
    'Good to know': 'Bueno saber', 'Frequently asked': 'Preguntas frecuentes',
    'Everything you need before you arrive. Still curious? Just message us.':
      'Todo lo que necesitas antes de llegar. ¿Más dudas? Solo escríbenos.',
    'How do I get to the hotel from Cancún?': '¿Cómo llego al hotel desde Cancún?',
    'Take the Ultramar ferry from Puerto Juárez (about 20 minutes). Florita 39 is a 3-minute walk from the ferry terminal, on Av. Hidalgo in the centre.':
      'Toma el ferry Ultramar desde Puerto Juárez (unos 20 minutos). Florita 39 está a 3 minutos a pie de la terminal, sobre la Av. Hidalgo en el centro.',
    'Is there parking? Do I need a car?': '¿Hay estacionamiento? ¿Necesito coche?',
    'Isla Mujeres is a car-free island in the centre — you won’t need one. We rent golf carts at the hotel, the best way to get around.':
      'El centro de Isla Mujeres es una isla sin coches — no necesitas uno. Rentamos carritos de golf en el hotel, la mejor forma de moverte.',
    'What time is check-in and check-out?': '¿A qué hora es la entrada y la salida?',
    'Check-in is from 3:00 pm and check-out is at 12:00 pm. Early check-in and late check-out are subject to availability.':
      'La entrada es a partir de las 3:00 pm y la salida a las 12:00 pm. Entrada temprana y salida tardía sujetas a disponibilidad.',
    'Do the rooms have kitchens?': '¿Las habitaciones tienen cocina?',
    'Yes — every model has a kitchenette or full kitchen. The duplex layouts also have a dining area.':
      'Sí — cada modelo tiene cocineta o cocina completa. Los dúplex además tienen comedor.',
    'Is Zama Beach Club really included?': '¿De verdad está incluido Zama Beach Club?',
    'Yes. As a Florita 39 guest you enter Zama with no minimum spend and order freely. Ask us to arrange your day.':
      'Sí. Como huésped de Florita 39 entras a Zama sin consumo mínimo y consumes libremente. Pídenos organizar tu día.',
    'Can you help with tours and transfers?': '¿Ayudan con tours y traslados?',
    'Of course. Our concierge arranges fishing tours, snorkel trips, airport transfers, a private chef and more — just ask before or during your stay.':
      'Por supuesto. Nuestro concierge organiza tours de pesca, snorkel, traslados, chef privado y más — solo pídelo antes o durante tu estancia.',

    // ---- gallery ----
    'See the hotel': 'Conoce el hotel', 'The rooms, the rooftop, the dining and the island around us.':
      'Las habitaciones, la azotea, el restaurante y la isla a nuestro alrededor.',
    'All': 'Todo', 'Rooms ': 'Habitaciones', 'Rooftop': 'Azotea', 'Island': 'Isla', 'Dining': 'Restaurante',

    // ---- footer ----
    'Explore': 'Explorar', 'Rooms & rates': 'Habitaciones y tarifas',
    'A boutique hotel genuinely designed to preserve the feeling of a home — intimate, calm, and steps from Playa Norte.':
      'Un hotel boutique diseñado para conservar la sensación de un hogar — íntimo, tranquilo y a pasos de Playa Norte.',
    'Experiences & tours': 'Experiencias y tours', 'FAQ': 'Preguntas frecuentes', 'Visit': 'Visita',
    'Hotel Boutique': 'Hotel Boutique',
  };

  var lang = 'en';
  try {
    // A /es/... path (the prerendered Spanish pages) wins; then ?lang=es|en
    // (used by SEO redirects from the old site); then the saved choice.
    var pathEs = location.pathname === '/es' || location.pathname.indexOf('/es/') === 0;
    var qpLang = new URLSearchParams(location.search).get('lang');
    if (pathEs) { lang = 'es'; localStorage.setItem('f39_lang', 'es'); }
    else if (qpLang === 'es' || qpLang === 'en') { lang = qpLang; localStorage.setItem('f39_lang', qpLang); }
    else { lang = localStorage.getItem('f39_lang') || 'en'; }
  } catch (e) {}
  window.F39_LANG = lang;
  window.F39_DICT = DICT; // read by scripts/prerender.mjs to emit the /es pages
  var observer = null;

  function walk(node) {
    if (node.nodeType === 3) {
      if (node.__en == null) node.__en = node.nodeValue;
      var key = node.__en.trim();
      if (lang === 'es' && DICT[key] != null) {
        node.nodeValue = node.__en.replace(key, DICT[key]);
      } else if (node.nodeValue !== node.__en) {
        node.nodeValue = node.__en;
      }
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE') return;
    if (node.placeholder != null && node.placeholder !== '') {
      if (node.__phEn == null) node.__phEn = node.placeholder;
      node.placeholder = (lang === 'es' && DICT[node.__phEn]) ? DICT[node.__phEn] : node.__phEn;
    }
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }

  function apply() {
    var root = document.getElementById('root');
    if (!root) return;
    if (observer) observer.disconnect();
    walk(root);
    if (observer) observer.observe(root, { childList: true, subtree: true, characterData: true });
  }

  window.F39setLang = function (l) {
    lang = (l === 'es') ? 'es' : 'en';
    window.F39_LANG = lang;
    try { localStorage.setItem('f39_lang', lang); } catch (e) {}
    try {
      // Keep the URL's /es prefix in sync with the chosen language.
      var p = location.pathname;
      var onEs = p === '/es' || p.indexOf('/es/') === 0;
      if (lang === 'es' && !onEs) history.replaceState(null, '', '/es' + (p === '/' ? '/' : p) + location.search);
      else if (lang === 'en' && onEs) history.replaceState(null, '', (p.slice(3) || '/') + location.search);
    } catch (e) {}
    document.documentElement.lang = lang;
    try { window.dispatchEvent(new CustomEvent('f39:lang', { detail: lang })); } catch (e) {}
    apply();
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-lang-btn') === lang;
      btns[i].classList.toggle('is-active', on);
      btns[i].style.opacity = on ? '1' : '0.5';
      btns[i].style.fontWeight = on ? '600' : '400';
    }
  };

  window.F39initI18N = function () {
    var root = document.getElementById('root');
    if (!root) { setTimeout(window.F39initI18N, 50); return; }
    observer = new MutationObserver(function () { apply(); });
    document.documentElement.lang = lang;
    apply();
  };
})();
