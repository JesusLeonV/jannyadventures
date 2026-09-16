(function() {
  'use strict';

  var TOURS = [
    {
      id: 'city-tour',
      title: 'City Tour Iquique + Navegación',
      img: 'iquique1.webp',
      gallery: ['iquique2.jpg', 'iquique3.png'],
      category: 'City Tour',
      price: 50000,
      familyDiscount: false,
      desc: 'Conoce los espectaculares paisajes de Iquique, sus playas, arquitectura y patrimonios. Incluye navegación por la costa.',
      fullDesc: 'Recorrido por los sitios históricos más importantes de Iquique: Playa Cavancha, Mercado Centenario, Escuela Santa María, Catedral, Estación de Trenes, Museo Corbeta Esmeralda, Navegación Muelle de Pasajeros, Marinero Desconocido y ZOFRI.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentación y Bebidas', 'Ticket de Ingreso (CLP 3.000)', 'Seguro de Viaje'],
      schedule: 'Mañana (AM) / Tarde (PM)',
      destinations: ['Playa Cavancha', 'Mercado Centenario', 'Escuela Santa María', 'Catedral', 'Estación de Trenes', 'Museo Corbeta Esmeralda', 'Navegación', 'ZOFRI'],
      tickets: 'Ticket de Ingreso CLP 3.000',
      reviews: [
        { name: 'Carolina M.', text: '¡Excelente experiencia! El guía fue muy amable y conocedor. La navegación fue espectacular.', rating: 5 },
        { name: 'Andrés L.', text: 'Muy buen recorrido, conoces toda la ciudad en pocas horas. Súper recomendado.', rating: 5 }
      ]
    },
    {
      id: 'salitreras-oasis',
      title: 'Tour Salitreras & Oasis de Pica',
      img: 'salitreras1.jpg',
      gallery: ['gigantetarapaca1.jpeg', 'valledelafelicidad1.webp'],
      category: 'Full Day',
      price: 75000,
      familyDiscount: true,
      desc: 'Visita guiada a las ex oficinas salitreras y el hermoso Oasis de Pica en pleno desierto.',
      fullDesc: 'Imperdible de Tarapacá. Recorre las oficinas salitreras Humberstone y Santa Laura (Patrimonio UNESCO), donde conocerás la historia del "oro blanco". Continúa por la Pampa del Tamarugal, pasando por Pozo Almonte, el Santuario de La Tirana, y llega al Oasis de Pica con su cocha resbaladero. Finaliza en el Pueblo de Matilla y el Parque de los Dinosaurios.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Salitreras (CLP 8.000)', 'Ticket de Ingreso Oasis Pica (CLP 7.000)'],
      schedule: 'Salida 08:00 hrs - Retorno 19:30 hrs',
      destinations: ['Oficinas Salitreras Humberstone y Santa Laura', 'Pozo Almonte', 'Pueblo de La Tirana', 'Oasis de Pica', 'Pueblo de Matilla', 'Parque de Dinosaurios'],
      tickets: 'Salitreras CLP 8.000 + Oasis Pica CLP 7.000',
      reviews: [
        { name: 'Roberto S.', text: 'Muy bien organizado. Conoces la historia del salitre de una forma muy didáctica.', rating: 5 },
        { name: 'María P.', text: 'El oasis de Pica es increíble. Un día completo que vale totalmente la pena.', rating: 5 }
      ]
    },
    {
      id: 'parque-isluga',
      title: 'Tour Parque Nacional Volcan Isluga',
      img: 'parqueisluga1.jpg',
      gallery: ['puebloisluga1.jpg', 'lagunaroja1.jpg'],
      category: 'Naturaleza',
      price: 110000,
      familyDiscount: true,
      desc: 'Paisajes únicos con variedad de fauna y flora, con su imponente cultura, artesanía y gastronomía.',
      fullDesc: 'Desde Iquique hacia el norte, llegando al majestuoso Cerro Unita para observar el Gigante de Tarapacá. Continúa al Mirador de Chusmiza para aclimatarte a la altura. Luego visita el pueblo de Isluga, el Valle de la Felicidad y Cariquima.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Desayuno y Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Termas (CLP 6.000)', 'Seguro de Viaje'],
      schedule: 'Salida 05:30 hrs - Retorno 21:00 hrs',
      destinations: ['Gigante de Tarapacá', 'Mirador de Chusmiza', 'Termas de Chusmiza', 'Pueblo de Isluga', 'Valle de la Felicidad', 'Cariquima'],
      tickets: 'Ticket de Ingreso Termas CLP 6.000',
      reviews: [
        { name: 'Felipe G.', text: 'Un día agotador pero increíble. Los paisajes del altiplano son impresionantes.', rating: 5 }
      ]
    },
    {
      id: 'laguna-roja',
      title: 'Tour Laguna Roja',
      img: 'lagunaroja1.jpg',
      gallery: ['lagunaroja2.avif', 'lagunaroja3.jpg'],
      category: 'Naturaleza',
      price: 150000,
      familyDiscount: true,
      desc: 'Mágica y misteriosa Laguna Roja, única en Chile. Rodeada de historias sagradas.',
      fullDesc: 'El secreto mejor guardado del norte de Chile. Salida desde Iquique rumbo a la cordillera altiplánica para visitar la Laguna Roja a 3.700 msnm, junto a las lagunas Verde y Amarilla.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso (CLP 3.000)', 'Seguro de Viaje'],
      schedule: 'Salida 05:00 hrs - Retorno 21:00 hrs',
      destinations: ['Camina', 'Laguna Roja', 'Laguna Amarilla', 'Laguna Verde', 'Petroglifos de Chillayza'],
      tickets: 'Ticket de Ingreso CLP 3.000',
      reviews: [
        { name: 'Valentina R.', text: 'Un lugar mágico. Las fotos no le hacen justicia a la belleza de la laguna.', rating: 5 }
      ]
    },
    {
      id: 'salar-huasco',
      title: 'Tour Parque Nacional Salar del Huasco',
      img: 'salarhuasco1.webp',
      gallery: ['salarhuasco2.jpg', 'salarhuasco3.webp'],
      category: 'Naturaleza',
      price: 95000,
      familyDiscount: true,
      desc: 'Increíbles paisajes del Salar del Huasco, donde podrás observar flamencos y aves.',
      fullDesc: 'Descubre el Parque Nacional Salar del Huasco, un humedal altoandino declarado Sitio Ramsar. Observa flamencos, taguas y otras aves.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso al Parque Nacional', 'Seguro de Viaje'],
      schedule: 'Salida 07:00 hrs - Retorno 21:00 hrs',
      destinations: ['Parque Nacional Salar del Huasco', 'Reserva Nacional del Tamarugal', 'Oasis de Pica'],
      tickets: 'Ticket de Ingreso al Parque Nacional',
      reviews: [
        { name: 'Camila V.', text: 'Ver los flamencos en su habitat natural es una experiencia unica.', rating: 5 }
      ]
    },
    {
      id: 'huatacondo',
      title: 'Tour Huatacondo',
      img: 'huatacondo1.jpeg',
      gallery: ['huatacondo2.jpg', 'huatacondo3.jpg'],
      category: 'Aventura',
      price: 80000,
      familyDiscount: true,
      desc: 'Naturaleza, cultura andina y deportes de aventura. Aldea prehispánica, huellas de dinosaurios y cascadas.',
      fullDesc: 'El tour al pueblo de Huatacondo es una experiencia donde podrás disfrutar de la naturaleza, la cultura de los pueblos andinos y de los deportes de aventura.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Desayuno y Almuerzo)', 'Equipo de Sandboard', 'Set Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 05:00 hrs - Retorno 20:00 hrs',
      destinations: ['Aldea Prehispanica', 'Huellas de Dinosaurios', 'Cascadas Petrificadas', 'Pueblo de Huatacondo', 'Dunas de Chele'],
      tickets: null,
      reviews: [
        { name: 'Maria P.', text: 'Una aventura increible! El sandboard y las cascadas petrificadas son imperdibles.', rating: 5 },
        { name: 'Diego F.', text: 'El mejor tour que he hecho. Naturaleza pura y aventura toda la jornada.', rating: 5 }
      ]
    },
    {
      id: 'termas-mamina',
      title: 'Tour Mamiña',
      img: 'mamiña1.avif',
      gallery: ['mamiña2.jpg', 'mamiña3.jpg'],
      category: 'Relax',
      price: 80000,
      familyDiscount: true,
      desc: 'Aguas termales curativas y barros chinos en un pueblo de raíces quechuas a 2.800 msnm.',
      fullDesc: 'Nos dirigiremos hacia el interior del altiplano, donde podremos apreciar cómo el imponente paisaje desértico da paso a hermosos escenarios andinos.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Barros Chinos (CLP 5.000)', 'Ticket de Ingreso Termas Ipla (CLP 5.000)'],
      schedule: 'Salida 08:00 hrs - Retorno 18:30 hrs',
      destinations: ['Termas de Barros Chinos', 'Termas de Ipla', 'Recorrido por el Pueblo', 'Visita a Fabrica de Quesos'],
      tickets: 'Barros Chinos CLP 5.000 + Ipla CLP 5.000',
      reviews: [
        { name: 'Laura G.', text: 'Las termas son increibles y el pueblo tiene un encanto especial. Muy relajante.', rating: 5 }
      ]
    },
    {
      id: 'salitreras',
      title: 'Tour Salitreras Humberstone & Santa Laura',
      img: 'salitreras2.jpg',
      gallery: ['salitreras3.jpg', 'dinosaurios1.jpg'],
      category: 'Cultura',
      price: 50000,
      familyDiscount: true,
      desc: 'Visita guiada a las ex oficinas salitreras, Patrimonio de la Humanidad UNESCO.',
      fullDesc: 'Recorrido por las oficinas salitreras Humberstone y Santa Laura, Patrimonio de la Humanidad por la UNESCO.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Ticket de Ingreso Salitreras (CLP 8.000)', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 14:00 hrs',
      destinations: ['Oficina Salitrera Humberstone', 'Oficina Salitrera Santa Laura'],
      tickets: 'Ticket de Ingreso CLP 8.000',
      reviews: [
        { name: 'Javiera R.', text: 'Un viaje al siglo XIX. Muy bien conservado y el guia explicaba todo con pasion.', rating: 5 }
      ]
    },
    {
      id: 'pisagua',
      title: 'Tour Pisagua',
      img: 'pisagua1.png',
      gallery: ['pisagua2.webp', 'pisagua3.jpg'],
      category: 'Cultura',
      price: 70000,
      familyDiscount: true,
      desc: 'Lugar histórico basado en la Guerra del Pacífico y el mundo salitrero.',
      fullDesc: 'Pisagua, el gran puerto salitrero. Visitaremos este lugar histórico basado en la Guerra del Pacífico y el mundo salitrero.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Alimentacion y Bebidas (A&B)', 'Seguro de Viaje'],
      schedule: 'Salida 07:30 hrs - Retorno 19:00 hrs',
      destinations: ['Batalla de Dolores', 'Recorrido Historico', 'Monumento de Desembarcacion', 'Cementerio de Pisagua'],
      tickets: null,
      reviews: [
        { name: 'Carlos M.', text: 'Pisagua es un lugar lleno de historia. El recorrido es muy completo.', rating: 5 }
      ]
    },
    {
      id: 'geoglifos',
      title: 'Tour Geoglifos de Pintados',
      img: 'geoglifospintados1.webp',
      gallery: ['geoglifospintados2.jpg', 'geoglifospintados3.jpeg', 'dinosaurios2.jpg'],
      category: 'Cultura',
      price: 50000,
      familyDiscount: true,
      desc: 'Arte rupestre de nuestros antepasados, segunda concentración más grande del mundo de geoglifos.',
      fullDesc: 'Arte rupestre de nuestros antepasados, en la segunda concentración más grande del mundo de geoglifos.',
      includes: ['Transporte', 'Guía Turístico', 'Protocolos Sanitarios'],
      excludes: ['Alimentacion y Bebidas', 'Ticket de Ingreso a Geoglifos de Pintados', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 14:00 hrs',
      destinations: ['Geoglifos de Pintados', 'Salar Crespo de Pintados', 'Centro de Educacion Ambiental', 'Pozo Almonte'],
      tickets: 'Ticket de Ingreso Geoglifos',
      reviews: [
        { name: 'Ana S.', text: 'Increible ver el arte de nuestros antepasados. Un lugar sagrado y misterioso.', rating: 5 }
      ]
    },
    {
      id: 'termas-chusmiza',
      title: 'Tour Termas Chusmiza & Gigante de Tarapaca',
      img: 'termaschusmiza1.jpg',
      gallery: ['miradorchusmiza1.avif', 'huatacondo2.jpg'],
      category: 'Relax',
      price: 80000,
      familyDiscount: true,
      desc: 'Aguas termales mineralizadas a 3.200 msnm y el geoglifo más grande del mundo. Trekking con llamas.',
      fullDesc: 'Las termas se encuentran en la comuna de Huara a 3.200 msnm. Oasis termal con propiedades terapéuticas.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Termas Chusmiza (CLP 6.000)', 'Seguro de Viaje'],
      schedule: 'Salida 07:00 hrs - Retorno 19:00 hrs',
      destinations: ['Mirador del Pueblo de Pachica', 'Pueblo de Chusmiza', 'Termas de Chusmiza', 'Gigante de Tarapaca', 'Trekking con Llamas'],
      tickets: 'Termas CLP 6.000',
      reviews: [
        { name: 'Pedro A.', text: 'El trekking con llamas es una experiencia unica. Las termas son muy relax.', rating: 5 }
      ]
    },
    {
      id: 'sandboard',
      title: 'Sandboard Cerro Dragon',
      img: 'sandboard1.webp',
      gallery: ['sandboard2.avif', 'sandboard3.webp'],
      category: 'Deporte',
      price: 40000,
      familyDiscount: false,
      desc: 'Deporte de aventura en el Cerro Dragón, la duna de arena urbana más grande del mundo.',
      fullDesc: 'Se realiza en el Cerro Dragón, la duna de arena urbana más grande del mundo. Tarde entre las 17:00 y 19:30 hrs.',
      includes: ['Traslado al punto de inicio', 'Instructor', 'Equipo para la actividad', 'Equipo Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Seguro de Viaje'],
      schedule: 'Tarde a partir de las 15:00 hrs',
      destinations: ['Cerro Dragon'],
      tickets: null,
      reviews: [
        { name: 'Andres L.', text: 'Experiencia unica! Los instructores son muy profesionales y el lugar es impresionante.', rating: 5 },
        { name: 'Camila V.', text: 'Adrenalina pura! Subir la duna es duro pero la bajada lo vale todo.', rating: 5 }
      ]
    },
    {
      id: 'parapente',
      title: 'Parapente en Iquique',
      img: 'parapente1.jpg',
      gallery: ['parapente2.webp', 'parapente3.jpg'],
      category: 'Deporte',
      price: 65000,
      familyDiscount: false,
      desc: 'Vuela sobre el Cerro Dragon y la costa de Iquique. Impresionantes vistas desde el aire.',
      fullDesc: 'Actividad de aventura con vistas impresionantes de la costa y la ciudad desde el aire.',
      includes: ['Traslado al punto de inicio', 'Instructor', 'Equipo para la actividad', 'Equipo Fotografico', 'Protocolos Sanitarios'],
      excludes: ['Seguro de Viaje'],
      schedule: 'Manana a partir de las 09:00 hrs',
      destinations: ['Alto Hospicio'],
      tickets: null,
      reviews: [
        { name: 'Felipe G.', text: 'Volar sobre Iquique es una experiencia que todos deberian vivir. Simplemente espectacular!', rating: 5 },
        { name: 'Laura G.', text: 'Las vistas desde arriba son impresionantes. Un recuerdo inolvidable.', rating: 5 }
      ]
    },
    {
      id: 'buceo',
      title: 'Buceo en Iquique',
      img: 'buceo1.jpg',
      gallery: ['buceo2.webp', 'buceo3.jpg'],
      category: 'Deporte',
      price: 60000,
      familyDiscount: false,
      desc: 'Buceo en la costa de Iquique, condiciones ideales durante todo el año.',
      fullDesc: 'Buceo en Playa Blanca, condiciones ideales durante todo el año. Horarios AM o PM.',
      includes: ['Instructor', 'Equipo para la actividad', 'Equipo Fotográfico', 'Protocolos Sanitarios'],
      excludes: ['Transporte', 'Seguro de Viaje'],
      schedule: 'Manana (AM) / Tarde (PM)',
      destinations: ['Playa Blanca'],
      tickets: null,
      reviews: [
        { name: 'Javiera R.', text: 'El agua es cristalina y la vida marina es increible. Muy buena experiencia.', rating: 5 }
      ]
    },
    {
      id: 'oasis-pica-matilla',
      title: 'Tour Oasis de Pica & Matilla',
      img: 'pica1.jpg',
      gallery: ['pica2.jpg', 'pisagua1.png'],
      category: 'Naturaleza',
      price: 40000,
      familyDiscount: false,
      desc: 'Disfruta del Oasis de Pica con sus chacras y frutas exquisitas como el mango, la guayaba y el famoso limón de Pica.',
      fullDesc: 'Nos dirigimos al Oasis de Pica, lugar donde podremos disfrutar de sus chacras y probar sus exquisitas frutas como el mango, guayaba, naranjas y el famoso limón de Pica. Luego conoceremos la historia del vino del lugar pasando por Matilla y La Huayca para finalizar en el pueblo de La Tirana.',
      includes: ['Transporte', 'Guía Turístico', 'Alimentación (Almuerzo)', 'Protocolos Sanitarios'],
      excludes: ['Bebidas', 'Ticket de Ingreso Cocha Resbaladero (CLP 7.000)', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 19:00 hrs',
      destinations: ['Oasis de Pica', 'Recorrido por Chacras', 'Parque de los Dinosaurios', 'Pueblo de Matilla', 'La Huayca', 'Pueblo de La Tirana', 'Geoglifos de Pintados'],
      tickets: 'Cocha Resbaladero CLP 7.000',
      reviews: [
        { name: 'Roberto S.', text: 'Las frutas del oasis son deliciosas. Un tour tranquilo y muy instructivo.', rating: 5 }
      ]
    },
    {
      id: 'arriendo-bicicletas',
      title: 'Arriendo de Bicicletas',
      img: 'bicicletas.jpeg',
      gallery: [],
      category: 'Deporte',
      price: 10000,
      familyDiscount: false,
      desc: 'Arrienda bicicletas por 2 horas para recorrer Iquique y su costa. Ideal para familias y parejas.',
      fullDesc: 'Arriendo de bicicletas por 2 horas para disfrutar de Iquique a tu ritmo. Recorre la costa, el centro y los principales puntos turísticos de la ciudad. Incluye casco y candado. Por seguridad se deja el carnet de identidad como garantía y se firman documentos de responsabilidad.',
      includes: ['Bicicleta', 'Casco', 'Candado', 'Instrucciones de seguridad'],
      excludes: ['Alimentación', 'Seguro de Viaje'],
      schedule: 'Lunes a Domingo 09:00 - 19:00 hrs',
      destinations: ['Playa Cavancha', 'Costa de Iquique', 'Centro de la ciudad'],
      tickets: null,
      reviews: []
    },

    /* ====== BRASIL ÔÇö Salvador de Bahia ====== */
    {
      id: 'arraial-bahia',
      title: 'Arraijal Full Day (Bahía)',
      img: 'arraial-bahia.jpeg',
      gallery: [],
      category: 'Brasil',
      price: 64000,
      familyDiscount: false,
      desc: 'Recorrido completo por Arraijal de Cima y Abajo en Bahía. Transporte, almuerzo, Cristo Redentor y Almoço incluidos.',
      fullDesc: 'Visita guiada completa por Arraijal de Cima y Abajo en la costa de Bahía. Incluye transporte, almuerzo en el Cristo Redentor y Almoço típico.',
      includes: ['Transporte', 'Guía Turístico', 'Ingreso Cristo Redentor', 'Almuerzo'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 18:00 hrs',
      destinations: ['Arraijal de Cima', 'Arraijal de Abajo', 'Cristo Redentor', 'Almoço típico'],
      tickets: null,
      reviews: [
        { name: 'Maria L.', stars: 5, text: 'Increible experiencia en Bahia! El Christo Redentor es impresionante.', date: '10/07/2026' }
      ]
    },
    /* ====== BRASIL ÔÇö Buzios a Arraial do Cabo ====== */
    {
      id: 'arraial-buzios',
      title: 'Buzios a Arraial do Cabo',
      img: 'arraial-rio.jpeg',
      gallery: [],
      category: 'Brasil',
      price: 33000,
      familyDiscount: false,
      desc: 'Paseo en barco de 3.5 a 4 horas desde Buzios. Visita la Isla del Farol, Prainhas do Pontal de Atalaia y Playa del Forno. Almuerzo buffet incluido.',
      fullDesc: 'Paseo en barco de 3 a 4 horas partiendo desde Buzios hacia Arraial do Cabo. Recorreras la Isla del Farol, las cristalinas Prainhas do Pontal de Atalaia y la Playa del Forno. Almuerzo buffet incluido en el trayecto. Disfruta de aguas turquesas y paisajes paradisiacos.',
      includes: ['Barco', 'Guía Turístico', 'Almuerzo Buffet', 'Tiempo de baño'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Diario - Salida 09:00 hrs',
      destinations: ['Isla del Farol', 'Prainhas do Pontal de Atalaia', 'Playa del Forno', 'Costa de Arraial do Cabo'],
      tickets: null,
      reviews: [
        { name: 'Ana P.', stars: 5, text: 'Increíble paseo, las playas son paradisíacas y el almuerzo buffet estuvo delicioso.', date: '05/07/2026' }
      ]
    },
    /* ====== BRASIL ÔÇö Rio de Janeiro ====== */
    {
      id: 'arraial-rio',
      title: 'Arraijal do Cabo (Rio)',
      img: 'arraial-rio.jpeg',
      gallery: [],
      category: 'Brasil',
      price: 44000,
      familyDiscount: false,
      desc: 'Tour de Arraijal do Cabo desde Río de Janeiro. Transporte, barco, guía y almuerzo.',
      fullDesc: 'Recorrido completo a Arraijal do Cabo desde Río de Janeiro. Incluye transporte, paseo en barco, guía turístico y almuerzo.',
      includes: ['Transporte', 'Barco', 'Guía Turístico', 'Almuerzo'],
      excludes: ['Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 07:00 hrs - Retorno 19:00 hrs',
      destinations: ['Arraijal do Cabo', 'Costa', 'Barco', 'Playas'],
      tickets: null,
      reviews: [
        { name: 'Ana P.', stars: 5, text: 'Excelente tour, el barco es genial y las playas son paradisiacas.', date: '05/07/2026' }
      ]
    },
    {
      id: 'rio-tour',
      title: 'Tour Río de Janeiro (desde Buzios o Rio)',
      img: 'rio-tour.jpeg',
      gallery: [],
      category: 'Brasil',
      price: 50000,
      familyDiscount: false,
      desc: 'Recorrido completo por Río de Janeiro: Maracaná, Sambódromo, Catedral Metropolitana, Escalera Selarón, Cristo Redentor, Ipanema, Leblón y Copacabana.',
      fullDesc: 'Tour completo por los iconos de Río de Janeiro. Visitaremos el estadio Maracaná, el Sambódromo, la Catedral Metropolitana y la famosa Escalera Selarón. Continuaremos hacia el Cristo Redentor con vistas panorámicas de la ciudad. Recorreremos las playas de Ipanema, Leblón y finalizaremos en Copacabana. Salida desde Río o Búzios.',
      includes: ['Transporte', 'Guía Turístico', 'Ingreso Cristo Redentor', 'Almuerzo'],
      excludes: ['Bebidas extras', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 20:00 hrs',
      destinations: ['Maracaná', 'Sambódromo', 'Catedral Metropolitana', 'Escalera Selarón', 'Cristo Redentor', 'Ipanema', 'Leblón', 'Copacabana'],
      tickets: null,
      reviews: [
        { name: 'Sofia G.', stars: 5, text: 'Río es impresionante! El Cristo y la Escalera Selarón son imperdibles.', date: '12/06/2026' },
        { name: 'Diego L.', stars: 5, text: 'Un día perfecto, todo muy bien organizado. Recomendado 100%.', date: '28/05/2026' }
      ]
    },
    {
      id: 'buzios',
      title: 'Buzios (Rio)',
      img: 'buzios.jpeg',
      gallery: [],
      category: 'Brasil',
      price: 90000,
      familyDiscount: false,
      desc: 'Excursión a Búzios desde Río de Janeiro. Transporte, guía, recorrido por las playas.',
      fullDesc: 'Excursión completa a Búzios, el San Tropez de Brasil. Recorrido por las principales playas y el centro de la ciudad.',
      includes: ['Transporte', 'Guía Turístico', 'Recorrido por playas'],
      excludes: ['Alimentacion', 'Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 20:00 hrs',
      destinations: ['Buzios', 'Playas de Buzios', 'Centro de Buzios'],
      tickets: null,
      reviews: [
        { name: 'Laura M.', stars: 5, text: 'Buzios es un lugar magico. Las playas son hermosas.', date: '18/06/2026' }
      ]
    },
    /* ====== BRASIL ÔÇö Buzios a Cabo Frio ====== */
    {
      id: 'buzios-cabo-frio',
      title: 'Buzios a Cabo Frio',
      img: 'arraial-rio.jpeg',
      gallery: [],
      category: 'Brasil',
      price: 25000,
      familyDiscount: false,
      desc: 'Excursión a Cabo Frio desde Búzios. Visita Playa Las Conchas (1h), Playa Peró (1h) e Isla del Japonés (1h).',
      fullDesc: 'Viaje de un día desde Búzios hasta Cabo Frio. Recorreras tres destinos imperdibles: 1 hora en la hermosa Playa Las Conchas, 1 hora en Playa Peró y 1 hora en la Isla del Japonés. Transporte incluido.',
      includes: ['Transporte', 'Guía Turístico', 'Tiempo de playa en 3 destinos'],
      excludes: ['Alimentación', 'Bebidas', 'Seguro de Viaje'],
      schedule: 'Salida 08:00 hrs - Retorno 18:00 hrs',
      destinations: ['Playa Las Conchas', 'Playa Peró', 'Isla del Japonés', 'Cabo Frio'],
      tickets: null,
      reviews: []
    },
    /* ====== BRASIL ÔÇö Buceo en Buzios ====== */
    {
      id: 'buceo-buzios',
      title: 'Buceo en Búzios',
      img: 'buceo1.jpg',
      gallery: [],
      category: 'Brasil',
      price: 19000,
      familyDiscount: false,
      desc: 'Buceo en Playa João Fernandes, en el parque de corales de Búzios. Equipo y instructor incluidos.',
      fullDesc: 'Experiencia de buceo en la Playa João Fernandes de Búzios, ubicada en el parque de corales. Equipo de buceo e instructor profesional incluidos. Disfruta de la rica vida marina y los corales tropicales.',
      includes: ['Equipo de buceo', 'Instructor', 'Tiempo de buceo'],
      excludes: ['Transporte', 'Seguro de Viaje'],
      schedule: 'Diario - Mañana (AM)',
      destinations: ['Playa João Fernandes', 'Parque de Corales', 'Búzios'],
      tickets: null,
      reviews: []
    },
    /* ====== BRASIL ÔÇö Tour Astronómico ====== */
    {
      id: 'tour-astronomico',
      title: 'Tour Astronómico (Iquique)',
      img: 'buzios.jpeg',
      gallery: [],
      category: 'Astronomía',
      price: 45000,
      familyDiscount: false,
      desc: 'Experiencia astronómica nocturna en el desierto de Tarapacá. Observación de estrellas, planetas y constelaciones con telescopio profesional.',
      fullDesc: 'Tour astronómico nocturno en los alrededores de Iquique, en pleno desierto de Tarapacá. Acompañado de un guía astronómico, observarás estrellas, planetas y constelaciones a través de un telescopio profesional. El cielo desértico sin contaminación lumínica ofrece una visión privilegiada del hemisferio sur.',
      includes: ['Telescopio profesional', 'Guía Astronómico', 'Equipo de observación'],
      excludes: ['Transporte', 'Alimentación', 'Seguro de Viaje'],
      schedule: 'Nocturno - Según fase lunar',
      destinations: ['Desierto de Tarapacá', 'Cielo del hemisferio sur'],
      tickets: null,
      reviews: []
    }
  ];

  var BOOKING_CONFIG = {
    'sandboard': { type: 'activity', needsPickup: true, perPersonFields: [{name: 'talla', label: 'Talla de zapato', type: 'text', placeholder: 'Ej: 38'}] },
    'parapente': { type: 'activity', needsPickup: true, perPersonFields: [{name: 'peso', label: 'Peso (kg)', type: 'text', placeholder: 'Ej: 70'}, {name: 'edad', label: 'Edad', type: 'number', placeholder: 'Ej: 25'}] },
    'buceo': { type: 'activity', perPersonFields: [{name: 'edad', label: 'Edad', type: 'number', placeholder: 'Ej: 30'}] },
    'termas-mamina': { type: 'tour-pickup', needsPickup: true },
    'arriendo-bicicletas': { type: 'tour' },
    /* Brasil */
    'arraial-bahia': { type: 'tour', needsPickup: true },
    'arraial-buzios': { type: 'tour', needsPickup: true },
    'arraial-rio': { type: 'tour', needsPickup: true },
    'rio-tour': { type: 'tour', needsPickup: true },
    'buzios': { type: 'tour', needsPickup: true },
    'buzios-cabo-frio': { type: 'tour', needsPickup: true },
    'buceo-buzios': { type: 'activity' },
    'tour-astronomico': { type: 'tour' }
  };

  /* =============================================
     REVIEWS ÔÇö localStorage
     ============================================= */
  function getReviews(tourId) {
    try { return JSON.parse(localStorage.getItem('ja_reviews_' + tourId)) || []; }
    catch(e) { return []; }
  }

  function addReview(tourId, name, stars, text) {
    var reviews = getReviews(tourId);
    var now = new Date();
    var date = (now.getDate() < 10 ? '0' : '') + now.getDate() + '/' + (now.getMonth()+1 < 10 ? '0' : '') + (now.getMonth()+1) + '/' + now.getFullYear();
    reviews.unshift({ name: name, stars: stars, text: text, date: date });
    localStorage.setItem('ja_reviews_' + tourId, JSON.stringify(reviews));
  }

  function getAvgRating(tourId) {
    var reviews = getReviews(tourId);
    if (!reviews.length) return null;
    var sum = reviews.reduce(function(a, r) { return a + r.stars; }, 0);
    return (sum / reviews.length).toFixed(1);
  }

  function renderStarsStr(count) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += i <= count ? '★' : '☆';
    return s;
  }

  function seedReviews() {
    var VER = '4';
    if (localStorage.getItem('ja_seed_version') === VER) return;
    var seeds = {
      'city-tour': [
        { name: 'Carolina M.', stars: 5, text: '¡Excelente experiencia! El guía fue muy amable y conocedor. La navegación fue espectacular.', date: '15/06/2026' },
        { name: 'Andrés L.', stars: 5, text: 'Muy buen recorrido, conoces toda la ciudad en pocas horas. Súper recomendado.', date: '02/05/2026' }
      ],
      'salitreras-oasis': [
        { name: 'María G.', stars: 5, text: '¡Un día increíble! Las salitreras son impresionantes y el oasis de Pica es un paraíso.', date: '10/06/2026' },
        { name: 'Carlos P.', stars: 5, text: 'Excelente organización, el almuerzo en Pica fue delicioso.', date: '28/04/2026' }
      ],
      'parque-isluga': [
        { name: 'Lucía F.', stars: 5, text: 'Un lugar mágico, la Laguna Verde es espectacular.', date: '05/06/2026' }
      ],
      'laguna-roja': [
        { name: 'Pedro S.', stars: 5, text: 'La laguna es hermosa, el color rojo es impresionante.', date: '20/05/2026' },
        { name: 'Ana R.', stars: 4, text: 'Muy bonito el paisaje, el viaje es largo pero vale la pena.', date: '12/04/2026' }
      ],
      'salar-huasco': [
        { name: 'Jorge M.', stars: 5, text: 'Único, el salar parece de otro planeta.', date: '18/05/2026' }
      ],
      'huatacondo': [
        { name: 'Sofía L.', stars: 5, text: 'Historia viva, los geoglifos son fascinantes.', date: '01/06/2026' }
      ],
      'termas-mamina': [
        { name: 'Roberto C.', stars: 5, text: 'Agua termal perfecta, relajo total.', date: '22/05/2026' }
      ],
      'salitreras': [
        { name: 'Valentina R.', stars: 5, text: 'Historia del salitre en su máximo esplendor.', date: '14/04/2026' }
      ],
      'pisagua': [
        { name: 'Diego A.', stars: 5, text: 'Pueblo histórico con vistas al mar impresionantes.', date: '30/05/2026' }
      ],
      'geoglifos': [
        { name: 'Camila V.', stars: 5, text: 'Los geoglifos son misteriosos y fascinantes.', date: '08/05/2026' }
      ],
      'termas-chusmiza': [
        { name: 'Fernando G.', stars: 5, text: 'Aguas termales en pleno desierto, experiencia única.', date: '25/04/2026' }
      ],
      'sandboard': [
        { name: 'Martín L.', stars: 4, text: 'Emocionante, las dunas son gigantes. Recomendado para valientes.', date: '12/06/2026' },
        { name: 'Isabella C.', stars: 5, text: 'La mejor aventura de mi vida! El instructor fue genial.', date: '03/05/2026' }
      ],
      'parapente': [
        { name: 'Mateo R.', stars: 5, text: 'Volar sobre Iquique es una experiencia única. Vistas increíbles.', date: '19/06/2026' },
        { name: 'Paula D.', stars: 5, text: 'Seguridad y diversión al máximo. Repetiré sin dudar.', date: '07/05/2026' },
        { name: 'Sebastián H.', stars: 5, text: 'Experiencia transformadora, las vistas son de otro mundo.', date: '28/04/2026' }
      ],
      'buceo': [
        { name: 'Laura M.', stars: 5, text: 'El mundo submarino de Iquique es espectacular.', date: '15/05/2026' }
      ],
      'oasis-pica-matilla': [
        { name: 'Andrés V.', stars: 5, text: 'Un oasis escondido en el desierto, mágico.', date: '20/04/2026' }
      ],
      'arraial-bahia': [
        { name: 'María L.', stars: 5, text: '¡Increíble experiencia en Bahía! El Cristo Redentor es impresionante.', date: '10/07/2026' }
      ],
      'arraial-rio': [
        { name: 'Ana P.', stars: 5, text: 'Excelente tour, el barco es genial y las playas son paradisíacas.', date: '05/07/2026' }
      ],
      'rio-tour': [
        { name: 'Sofía G.', stars: 5, text: '¡Río es impresionante! El Cristo y la Escalera Selarón son imperdibles.', date: '12/06/2026' },
        { name: 'Diego L.', stars: 5, text: 'Un día perfecto, todo muy bien organizado. Recomendado 100%.', date: '28/05/2026' }
      ],
      'buzios': [
        { name: 'Laura M.', stars: 5, text: 'Búzios es un lugar mágico. Las playas son hermosas.', date: '18/06/2026' }
      ]
    };
    Object.keys(seeds).forEach(function(tourId) {
      localStorage.setItem('ja_reviews_' + tourId, JSON.stringify(seeds[tourId]));
    });
    localStorage.setItem('ja_seed_version', VER);
  }
  seedReviews();

  /* --- Render main page testimonials from localStorage --- */
  function renderMainTestimonials() {
    var grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    var allReviews = [];
    TOURS.forEach(function(t) {
      var reviews = getReviews(t.id);
      reviews.forEach(function(r) {
        allReviews.push({ name: r.name, text: r.text, stars: r.stars, tour: t.title });
      });
    });
    allReviews.sort(function() { return Math.random() - 0.5; });
    var show = allReviews.slice(0, 6);
    if (!show.length) { grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);">Aún no hay opiniones</p>'; return; }
    grid.innerHTML = show.map(function(r) {
      var initials = r.name.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
      return '<blockquote class="testimonial-card">' +
        '<div class="testimonial-stars">' + renderStarsStr(r.stars) + '</div>' +
        '<p class="testimonial-text">"' + r.text + '"</p>' +
        '<footer class="testimonial-author">' +
          '<span class="testimonial-avatar">' + initials + '</span>' +
          '<cite><span class="testimonial-name">' + r.name + '</span><span class="testimonial-tour">' + r.tour + '</span></cite>' +
        '</footer>' +
      '</blockquote>';
    }).join('');
  }
  renderMainTestimonials();

  /* --- Guide dynamic rating --- */
  function getGlobalRating() {
    var totalSum = 0, totalCount = 0;
    TOURS.forEach(function(t) {
      var reviews = getReviews(t.id);
      if (reviews && reviews.length) {
        reviews.forEach(function(r) {
          totalSum += (r.stars || r.rating || 0);
          totalCount++;
        });
      }
    });
    return totalCount > 0 ? (totalSum / totalCount).toFixed(1) : '5.0';
  }

  function updateGuideRating() {
    var el = document.getElementById('guide-rating');
    if (!el) return;
    el.textContent = getGlobalRating() + ' ★';
  }
  updateGuideRating();

  function updateHeroRating() {
    var el = document.getElementById('hero-rating');
    if (!el) return;
    el.textContent = getGlobalRating() + '★';
  }
  updateHeroRating();

  function formatPrice(n) {
    return n.toLocaleString('es-CL');
  }

  function sendMessage(tourTitle) {
    var msg = encodeURIComponent('Hola! Me interesa el tour: ' + tourTitle + '. Quisiera mas informacion y disponibilidad.');
    window.open('https://wa.me/56986183253?text=' + msg, '_blank');
  }

  function cardIncludesHTML(t) {
    var inc = (t.includes || []).slice(0, 3).map(function(i) { return '<li>' + i + '</li>'; }).join('');
    var exc = (t.excludes || []).slice(0, 2).map(function(x) { return '<li>' + x + '</li>'; }).join('');
    var html = '<div class="tour-inc-exc">' +
      '<div class="tour-inc"><span class="tie-label">Incluye</span><ul>' + inc + '</ul></div>';
    if (exc) html += '<div class="tour-exc"><span class="tie-label">No incluye</span><ul>' + exc + '</ul></div>';
    html += '</div>';
    return html;
  }

  function renderPersonBlock(num, fields) {
    var html = '<div class="per-person-block"><span class="per-person-title">Persona ' + num + '</span>';
    html += '<div class="booking-row">';
    html += '<div class="form-group"><label>Nombre</label><input type="text" class="bk-p-name" data-person="' + num + '" placeholder="Nombre completo" required></div>';
    fields.forEach(function(f) {
      html += '<div class="form-group"><label>' + f.label + '</label><input type="' + f.type + '" class="bk-p-' + f.name + '" data-person="' + num + '" placeholder="' + (f.placeholder || '') + '" required></div>';
    });
    html += '</div></div>';
    return html;
  }

  /* --- NAV --- */
  var navHeader = document.getElementById('nav-header');
  window.addEventListener('scroll', function() {
    navHeader.classList.toggle('scrolled', window.scrollY > 50);
  });

  var menuToggle = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { navLinks.classList.remove('open'); });
    });
  }

  /* --- SMOOTH SCROLL --- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* --- RENDER TOUR CARDS --- */
  var container = document.getElementById('tours-grid');
  var activeRegion = 'all';
  var activeCategory = 'all';

  function getRegion(t) {
    return t.category === 'Brasil' ? 'Brasil' : 'Chile';
  }

  function getCategoriesForRegion(region) {
    var cats = {};
    TOURS.forEach(function(t) {
      var r = getRegion(t);
      if (region === 'all' || r === region) {
        cats[t.category] = true;
      }
    });
    return Object.keys(cats).sort();
  }

  function renderSubFilters() {
    var subContainer = document.getElementById('sub-filters');
    if (!subContainer) return;
    var cats = getCategoriesForRegion(activeRegion);
    var html = '<button class="sub-filter-btn' + (activeCategory === 'all' ? ' active' : '') + '" data-category="all">Todos</button>';
    cats.forEach(function(c) {
      html += '<button class="sub-filter-btn' + (activeCategory === c ? ' active' : '') + '" data-category="' + c + '">' + c + '</button>';
    });
    subContainer.innerHTML = html;
  }

  function renderCards() {
    if (!container) return;
    container.innerHTML = '';
    var filtered = TOURS.slice();
    if (activeRegion !== 'all') {
      filtered = filtered.filter(function(t) { return getRegion(t) === activeRegion; });
    }
    if (activeCategory !== 'all') {
      filtered = filtered.filter(function(t) { return t.category === activeCategory; });
    }
    filtered.sort(function(a, b) {
      var avgA = parseFloat(getAvgRating(a.id)) || 0;
      var avgB = parseFloat(getAvgRating(b.id)) || 0;
      return avgB - avgA;
    });
    filtered.forEach(function(t, i) {
      var card = document.createElement('article');
      card.className = 'tour-card';
      card.style.animationDelay = (i * 0.05) + 's';
      var discountBadge = t.familyDiscount ? '<span class="tour-card-discount">-10% Familia</span>' : '';
      var reviews = getReviews(t.id);
      var avg = getAvgRating(t.id);
      var ratingHTML = avg ? '<span class="tour-card-rating"><span class="rating-num">' + avg + '</span><span class="rating-star">★</span><span class="rating-count">· ' + reviews.length + ' opiniones</span></span>' : '';
      var incItems = (t.includes || []).slice(0, 4).map(function(i) { return '<li>' + i + '</li>'; }).join('');
      var excItems = (t.excludes || []).slice(0, 3).map(function(x) { return '<li>' + x + '</li>'; }).join('');
      card.innerHTML =
        '<div class="tour-card-inner">' +
          /* FRONT */
          '<div class="tour-card-front">' +
            '<div class="tour-card-image">' +
              '<div class="tour-slides">' +
                '<div class="tour-slide active" style="background-image:url(img/tours/' + t.img + ')"></div>' +
                (t.gallery || []).map(function(g) {
                  return '<div class="tour-slide" style="background-image:url(img/tours/' + g + ')"></div>';
                }).join('') +
              '</div>' +
              '<span class="tour-card-badge">' + t.category + '</span>' + discountBadge + ratingHTML +
              '<div class="tour-card-dots">' +
                '<span class="dot active"></span>' +
                (t.gallery || []).map(function() { return '<span class="dot"></span>'; }).join('') +
              '</div>' +
              '<div class="tour-card-overlay"></div>' +
            '</div>' +
            '<div class="tour-card-front-info">' +
              '<h3>' + t.title + '</h3>' +
              '<div class="price-row">' +
                '<span class="tour-card-price">$' + formatPrice(t.price) + '</span>' +
                '<span class="schedule-tag">' + t.schedule.split(' - ')[0] + '</span>' +
              '</div>' +
              '<div class="hover-hint">Hover para ver detalles →</div>' +
            '</div>' +
          '</div>' +
          /* BACK */
          '<div class="tour-card-back">' +
            '<div class="tour-card-back-header">' +
              '<h3>' + t.title + '</h3>' +
              '<div class="back-price">$' + formatPrice(t.price) + '</div>' +
            '</div>' +
            '<div class="tour-card-back-body">' +
              '<p class="back-desc">' + t.desc + '</p>' +
              (incItems ? '<div class="back-section"><div class="back-label">Incluye</div><ul class="back-list">' + incItems + '</ul></div>' : '') +
              (excItems ? '<div class="back-section"><div class="back-label">No incluye</div><ul class="back-list back-excludes">' + excItems + '</ul></div>' : '') +
              '<div class="back-section"><div class="back-label">Horario</div><div style="font-size:11px;color:rgba(255,255,255,0.8)">' + t.schedule + '</div></div>' +
            '</div>' +
            '<div class="tour-card-back-actions">' +
              '<button class="btn-back-details" data-tour-id="' + t.id + '">Ver detalles</button>' +
              '<button class="btn-back-agendar" data-tour-id="' + t.id + '">Agendar</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      container.appendChild(card);
    });
  }

  renderSubFilters();
  renderCards();

  /* Region filter buttons */
  var regionBar = document.getElementById('region-filters');
  if (regionBar) {
    regionBar.addEventListener('click', function(e) {
      var btn = e.target.closest('.region-btn');
      if (!btn) return;
      var r = btn.getAttribute('data-region');
      if (r === activeRegion) return;
      activeRegion = r;
      activeCategory = 'all';
      regionBar.querySelectorAll('.region-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderSubFilters();
      renderCards();
    });
  }

  /* Sub-filter buttons (delegated) */
  var subFilterBar = document.getElementById('sub-filters');
  if (subFilterBar) {
    subFilterBar.addEventListener('click', function(e) {
      var btn = e.target.closest('.sub-filter-btn');
      if (!btn) return;
      var c = btn.getAttribute('data-category');
      if (c === activeCategory) return;
      activeCategory = c;
      subFilterBar.querySelectorAll('.sub-filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderCards();
    });
  }

  /* --- MODAL --- */
  var overlay = document.getElementById('modal-overlay');
  var closeBtn = document.getElementById('modal-close');

  function openModal(id, booking) {
    var t = TOURS.find(function(x) { return x.id === id; });
    if (!t) return;

    document.getElementById('modal-hero').style.backgroundImage = 'url(img/tours/' + t.img + ')';
    modalImages = [t.img].concat(t.gallery || []);
    modalImageIndex = 0;
    document.getElementById('modal-title').textContent = t.title;

    var meta = document.getElementById('modal-meta');
    meta.innerHTML = '<span>' + t.category + '</span><span>' + t.schedule + '</span>';
    if (t.familyDiscount) meta.innerHTML += '<span>-10% Familia</span>';
    if (t.tickets) meta.innerHTML += '<span>' + t.tickets + '</span>';

    document.getElementById('modal-desc').textContent = t.fullDesc || t.desc;

    var grid = document.getElementById('modal-grid');
    grid.innerHTML = '';

    if (t.includes && t.includes.length) {
      var incDiv = document.createElement('div');
      incDiv.className = 'modal-section';
      incDiv.innerHTML = '<h4>Incluye</h4><ul>' + t.includes.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
      grid.appendChild(incDiv);
    }
    if (t.excludes && t.excludes.length) {
      var excDiv = document.createElement('div');
      excDiv.className = 'modal-section modal-excludes';
      excDiv.innerHTML = '<h4>No incluye</h4><ul>' + t.excludes.map(function(e) { return '<li>' + e + '</li>'; }).join('') + '</ul>';
      grid.appendChild(excDiv);
    }
    if (t.destinations && t.destinations.length) {
      var destDiv = document.createElement('div');
      destDiv.className = 'modal-section modal-destinations';
      destDiv.innerHTML = '<h4>Destinos</h4><div class="dest-tags">' + t.destinations.map(function(d) { return '<span class="dest-tag">' + d + '</span>'; }).join('') + '</div>';
      grid.appendChild(destDiv);
    }

    /* Reviews from localStorage */
    var reviewsContainer = document.getElementById('modal-reviews');
    reviewsContainer.innerHTML = '';
    var reviews = getReviews(t.id);
    var avg = getAvgRating(t.id);
    var reviewsHTML = '<h4>Opiniones' + (avg ? ' <span class="reviews-avg">' + avg + ' ★ (' + reviews.length + ')</span>' : (reviews.length ? ' (' + reviews.length + ')' : '')) + '</h4>';
    reviewsHTML += '<div class="reviews-list">';
    if (reviews.length) {
      reviews.forEach(function(r) {
        reviewsHTML +=
          '<div class="review-item">' +
            '<div class="review-header">' +
              '<span class="review-name">' + r.name + '</span>' +
              '<span class="review-stars">' + renderStarsStr(r.stars) + '</span>' +
            '</div>' +
            '<p class="review-text">"' + r.text + '"</p>' +
          '</div>';
      });
    } else {
      reviewsHTML += '<p class="reviews-empty">Sé el primero en dejar tu opinión sobre este tour</p>';
    }
    reviewsHTML += '</div>';

    /* Review submission form */
    reviewsHTML +=
      '<div class="review-form-section">' +
        '<h4>Deja tu opinión</h4>' +
        '<form class="review-form" id="review-form">' +
          '<div class="review-form-stars" id="review-stars">' +
            '<button type="button" class="star-btn" data-val="1">★</button>' +
            '<button type="button" class="star-btn" data-val="2">★</button>' +
            '<button type="button" class="star-btn" data-val="3">★</button>' +
            '<button type="button" class="star-btn" data-val="4">★</button>' +
            '<button type="button" class="star-btn" data-val="5">★</button>' +
          '</div>' +
          '<input type="text" id="review-name" placeholder="Tu nombre" required>' +
          '<textarea id="review-text" placeholder="Cuéntanos tu experiencia..." rows="3" required></textarea>' +
          '<button type="submit" class="btn-submit-review">Enviar opinión</button>' +
        '</form>' +
        '<div class="review-success" id="review-success" style="display:none;">¡Gracias por tu opinión!</div>' +
      '</div>';

    reviewsContainer.innerHTML = reviewsHTML;

    /* Star selector logic */
    var selectedStars = 0;
    var starBtns = reviewsContainer.querySelectorAll('#review-stars .star-btn');
    function updateStars(hoverVal) {
      starBtns.forEach(function(b) {
        var v = parseInt(b.getAttribute('data-val'), 10);
        b.classList.toggle('active', v <= (hoverVal || selectedStars));
      });
    }
    starBtns.forEach(function(b) {
      b.addEventListener('mouseenter', function() { updateStars(parseInt(this.getAttribute('data-val'), 10)); });
      b.addEventListener('mouseleave', function() { updateStars(0); });
      b.addEventListener('click', function() {
        selectedStars = parseInt(this.getAttribute('data-val'), 10);
        updateStars(selectedStars);
      });
    });

    /* Form submission */
    var reviewForm = document.getElementById('review-form');
    if (reviewForm) {
      reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = (document.getElementById('review-name').value || '').trim();
        var text = (document.getElementById('review-text').value || '').trim();
        if (!name || !text || !selectedStars) {
          alert('Completa tu nombre, opinión y selecciona una puntuación.');
          return;
        }
        addReview(t.id, name, selectedStars, text);
        reviewForm.style.display = 'none';
        document.getElementById('review-success').style.display = 'block';
        renderCards();
        setTimeout(function() {
          reviewForm.style.display = '';
          document.getElementById('review-success').style.display = 'none';
          reviewForm.reset();
          selectedStars = 0;
          updateStars(0);
          var updatedReviews = getReviews(t.id);
          var updatedAvg = getAvgRating(t.id);
          var listEl = reviewsContainer.querySelector('.reviews-list');
          var titleEl = reviewsContainer.querySelector('h4');
          if (titleEl) titleEl.innerHTML = 'Opiniones' + (updatedAvg ? ' <span class="reviews-avg">' + updatedAvg + ' ★ (' + updatedReviews.length + ')</span>' : ' (' + updatedReviews.length + ')');
          if (listEl) {
            listEl.innerHTML = '';
            updatedReviews.forEach(function(r) {
              listEl.innerHTML +=
                '<div class="review-item">' +
                  '<div class="review-header">' +
                    '<span class="review-name">' + r.name + '</span>' +
                    '<span class="review-stars">' + renderStarsStr(r.stars) + '</span>' +
                  '</div>' +
                  '<p class="review-text">"' + r.text + '"</p>' +
                '</div>';
            });
          }
        }, 2000);
      });
    }

    var priceEl = document.getElementById('modal-price');
    priceEl.innerHTML = '$' + formatPrice(t.price) + '<small>/ persona</small>';

    var wspBtn = document.getElementById('btn-wsp-modal');
    var msg = encodeURIComponent('Hola! Me interesa el tour: ' + t.title + '. Quisiera informacion.');
    wspBtn.href = 'https://wa.me/56986183253?text=' + msg;

    /* Booking form state */
    var bookingEl = document.getElementById('modal-booking');
    if (bookingEl) {
      bookingEl.setAttribute('data-tour-id', t.id);
      var config = BOOKING_CONFIG[t.id] || { type: 'tour-pickup', needsPickup: true };

      var formHtml = '<h4>Agenda tu fecha</h4>';

      /* Personas + Bebes */
      formHtml += '<div class="booking-row">' +
        '<div class="form-group"><label for="bk-personas">Personas</label><select id="bk-personas"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="10">10+</option></select></div>' +
        '<div class="form-group"><label for="bk-bebes">Bebes (gratis)</label><select id="bk-bebes"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>' +
      '</div>';

      /* Per-person fields for activities */
      if (config.type === 'activity' && config.perPersonFields) {
        formHtml += '<div id="per-person-container">';
        for (var p = 1; p <= 2; p++) {
          formHtml += renderPersonBlock(p, config.perPersonFields);
        }
        formHtml += '</div>';
      }

      /* Pickup for tours */
      if (config.type === 'tour-pickup' && config.needsPickup) {
        formHtml += '<div class="pickup-section"><div class="form-group"><label for="bk-pickup">Direccion de recogida y retorno</label><input type="text" id="bk-pickup" placeholder="Ej: Av. Arturo Prat 123, Iquique" required></div></div>';
      }

      /* Pickup for activities (solo ida) */
      if (config.type === 'activity' && config.needsPickup) {
        formHtml += '<div class="pickup-section"><div class="form-group"><label for="bk-pickup">Direccion de recogida</label><input type="text" id="bk-pickup" placeholder="Ej: Av. Arturo Prat 123, Iquique" required></div></div>';
      }

      /* Standard fields */
      formHtml += '<div class="booking-row">' +
        '<div class="form-group"><label for="bk-nombre">Tu nombre</label><input type="text" id="bk-nombre" placeholder="Nombre y apellido" required></div>' +
        '<div class="form-group"><label for="bk-telefono">Telefono</label><input type="tel" id="bk-telefono" placeholder="+56 9 ..." required></div>' +
        '<div class="form-group"><label for="bk-fecha">Fecha</label><input type="date" id="bk-fecha" required></div>' +
      '</div>';

      if (config.type === 'activity') {
        formHtml += '<p class="form-note">Ingresa los datos de cada persona que realizara la actividad.</p>';
      } else if (config.type === 'tour-pickup') {
        formHtml += '<p class="form-note">Te recogemos y dejamos en tu direccion.</p>';
      } else {
        formHtml += '<p class="form-note">Mas de 5 personas restamos $10.000 por persona. Los bebes viajan gratis.</p>';
      }

      formHtml += '<button class="btn-primary btn-submit" id="btn-booking">Agendar por WhatsApp</button>';

      bookingEl.innerHTML = formHtml;

      /* Update per-person fields when personas changes */
      if (config.type === 'activity' && config.perPersonFields) {
        var bkPers = document.getElementById('bk-personas');
        if (bkPers) {
          bkPers.addEventListener('change', function() {
            var n = parseInt(this.value, 10) || 2;
            var container = document.getElementById('per-person-container');
            if (!container) return;
            var html = '';
            for (var p = 1; p <= n; p++) {
              html += renderPersonBlock(p, config.perPersonFields);
            }
            container.innerHTML = html;
          });
        }
      }
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (booking && bookingEl) {
      var bkDate = document.getElementById('bk-fecha');
      if (bkDate) bkDate.value = '';
      var bkPers = document.getElementById('bk-personas');
      if (bkPers) bkPers.value = '2';
      setTimeout(function() {
        bookingEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 120);
    }
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  /* --- MODAL IMAGE NAVIGATION --- */
  var modalImages = [];
  var modalImageIndex = 0;

  function setModalImage(idx) {
    if (!modalImages.length) return;
    modalImageIndex = ((idx % modalImages.length) + modalImages.length) % modalImages.length;
    document.getElementById('modal-hero').style.backgroundImage = 'url(img/tours/' + modalImages[modalImageIndex] + ')';
  }

  var modalArrowLeft = document.getElementById('modal-arrow-left');
  var modalArrowRight = document.getElementById('modal-arrow-right');
  if (modalArrowLeft) modalArrowLeft.addEventListener('click', function(e) { e.stopPropagation(); setModalImage(modalImageIndex - 1); });
  if (modalArrowRight) modalArrowRight.addEventListener('click', function(e) { e.stopPropagation(); setModalImage(modalImageIndex + 1); });

  var modalHeroEl = document.getElementById('modal-hero');
  if (modalHeroEl) modalHeroEl.addEventListener('click', function() { setModalImage(modalImageIndex + 1); });

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-details, .btn-back-details');
    if (btn) {
      e.preventDefault();
      openModal(btn.getAttribute('data-tour-id'), btn.classList.contains('btn-agendar') || btn.classList.contains('btn-back-agendar'));
      return;
    }
    var ag = e.target.closest('.btn-agendar, .btn-back-agendar');
    if (ag) {
      e.preventDefault();
      openModal(ag.getAttribute('data-tour-id'), true);
    }
  });

  /* --- COTIZACIóN FORM --- */
  var cotizacionForm = document.getElementById('cotizacion-form');
  if (cotizacionForm) {
    cotizacionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var tourId = document.getElementById('cot-tour').value;
      var personas = parseInt(document.getElementById('cot-personas').value, 10);
      var bebes = parseInt(document.getElementById('cot-bebes').value, 10) || 0;
      var fecha = document.getElementById('cot-fecha').value;
      var nombre = document.getElementById('cot-nombre').value;
      var telefono = document.getElementById('cot-telefono').value;

      if (!tourId || !personas || !fecha || !nombre || !telefono) {
        alert('Por favor completa todos los campos.');
        return;
      }

      var tour = TOURS.find(function(t) { return t.id === tourId; });
      var precioBase = tour ? tour.price : 0;
      var descuento = personas > 5;
      var precioFinal = descuento ? precioBase - 10000 : precioBase;
      var total = precioFinal * personas;

      var msg = encodeURIComponent(
        'Hola! Quiero cotizar:\n' +
        'Tour: ' + (tour ? tour.title : tourId) + '\n' +
        'Personas: ' + personas + '\n' +
        'Bebés (gratis): ' + bebes + '\n' +
        'Fecha: ' + fecha + '\n' +
        'Nombre: ' + nombre + '\n' +
        'Teléfono: ' + telefono + '\n' +
        (descuento ? 'Descuento grupal aplicado: -$10.000 por persona\n' : '') +
        'Precio estimado: $' + formatPrice(precioFinal) + ' por persona\n' +
        'Total estimado: $' + formatPrice(total)
      );
      window.open('https://wa.me/56986183253?text=' + msg, '_blank');
      cotizacionForm.reset();
    });
  }

  /* --- NEWSLETTER --- */
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('newsletter-email').value;
      var msg = encodeURIComponent('Hola! Quiero suscribirme al newsletter con el email: ' + email);
      window.open('https://wa.me/56986183253?text=' + msg, '_blank');
      newsletterForm.reset();
      alert('Gracias por suscribirte! Te contactaremos pronto.');
    });
  }

  /* --- MODAL BOOKING (Agendar) --- */
  document.addEventListener('click', function(e) {
    if (e.target.id !== 'btn-booking') return;
    e.preventDefault();

    var bookingEl = document.getElementById('modal-booking');
    var tourId = bookingEl.getAttribute('data-tour-id');
    var t = TOURS.find(function(x) { return x.id === tourId; });
    if (!t) return;

    var config = BOOKING_CONFIG[tourId] || { type: 'tour-pickup', needsPickup: true };
    var nombre = (document.getElementById('bk-nombre') || {}).value || '';
    var telefono = (document.getElementById('bk-telefono') || {}).value || '';
    var fecha = (document.getElementById('bk-fecha') || {}).value || '';
    var personas = parseInt(document.getElementById('cot-personas') ? document.getElementById('cot-personas').value : document.getElementById('bk-personas') ? document.getElementById('bk-personas').value : 2, 10);
    var bebes = parseInt(document.getElementById('cot-bebes') ? document.getElementById('cot-bebes').value : document.getElementById('bk-bebes') ? document.getElementById('bk-bebes').value : 0, 10) || 0;

    if (!nombre || !telefono || !fecha) {
      alert('Completa tu nombre, telefono y fecha.');
      return;
    }

    var descuento = personas > 5;
    var precioFinal = descuento ? t.price - 10000 : t.price;
    var total = precioFinal * personas;

    var lines = [
      'Hola! Quiero AGENDAR:',
      'Tour: ' + t.title,
      'Personas: ' + personas,
      'Bebes (gratis): ' + bebes,
      'Nombre: ' + nombre,
      'Telefono: ' + telefono,
      'Fecha: ' + fecha
    ];

    /* Activity per-person data */
    if (config.type === 'activity' && config.perPersonFields) {
      for (var p = 1; p <= personas; p++) {
        var pName = (bookingEl.querySelector('.bk-p-name[data-person="' + p + '"]') || {}).value || '';
        var pData = 'Persona ' + p + ': ' + (pName || 'Sin nombre');
        config.perPersonFields.forEach(function(f) {
          var val = (bookingEl.querySelector('.bk-p-' + f.name + '[data-person="' + p + '"]') || {}).value || '';
          pData += ' | ' + f.label + ': ' + (val || '-');
        });
        lines.push(pData);
      }
    }

    /* Pickup address */
    if (config.type === 'tour-pickup' && config.needsPickup) {
      var pickup = (document.getElementById('bk-pickup') || {}).value || '';
      if (!pickup) {
        alert('Ingresa la direccion de recogida.');
        return;
      }
      lines.push('Direccion de recogida: ' + pickup);
    }

    if (descuento) lines.push('Descuento grupal: -$10.000 por persona');
    lines.push('Precio estimado: $' + formatPrice(precioFinal) + ' por persona');
    lines.push('Total estimado: $' + formatPrice(total));

    var msg = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/56986183253?text=' + msg, '_blank');
    setTimeout(function() { closeModal(); }, 300);
  });


/* --- TOUR CARD CAROUSEL ON HOVER --- */
(function() {
  document.addEventListener('mouseenter', function(e) {
    var card = e.target.closest('.tour-card');
    if (!card) return;
    var slides = card.querySelectorAll('.tour-slide');
    if (slides.length <= 1) return;
    var dots = card.querySelectorAll('.tour-card-dots .dot');
    var current = 0;
    function nextSlide() {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    card._carouselInterval = setInterval(nextSlide, 2000);
  }, true);
  document.addEventListener('mouseleave', function(e) {
    var card = e.target.closest('.tour-card');
    if (!card) return;
    if (card._carouselInterval) {
      clearInterval(card._carouselInterval);
      card._carouselInterval = null;
    }
    var slides = card.querySelectorAll('.tour-slide');
    var dots = card.querySelectorAll('.tour-card-dots .dot');
    slides.forEach(function(s, i) { s.classList.toggle('active', i === 0); });
    dots.forEach(function(d, i) { d.classList.toggle('active', i === 0); });
  }, true);
})();
})();
