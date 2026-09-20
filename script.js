/* ==========================================================================
   Proyect-Park-Share — Landing page
   Lógica de la página (script.js). Se carga con `defer`: el DOM ya existe.
   ========================================================================== */
'use strict';

/* --------------------------------------------------------------------------
   1. TRADUCCIONES (EN / ES) — idioma por defecto: EN
   -------------------------------------------------------------------------- */
let currentLang = 'EN';
let currentRole = 'driver';

const i18nData = {
  EN: {
    metaTitle: "Proyect-Park-Share | Your Private Parking Network in Lima",
    metaDesc: "Forget traffic and find secure parking by the hour or rent out your empty parking space to earn extra money.",
    "nav.search": "Search",
    "nav.howItWorks": "How it works",
    "nav.videos": "Media & Demos",
    "nav.team": "Team",
    "nav.pricing": "Pricing",
    "nav.calculator": "Calculator",
    "nav.verification": "Verification",
    "nav.menu": "Open menu",
    "btn.login": "Log In",
    "btn.register": "Register Now",
    "role.driver": "I'm a Driver",
    "role.owner": "I'm a Parking Owner",
    "hero.driverTitle": "Find secure parking in Lima or rent out your garage easily",
    "hero.ownerTitle": "Monetize your empty garage and generate passive income safely",
    "hero.driverDesc": "Connect with nearby verified garage owners. Book by the hour, save time, and park safely with transparent pricing.",
    "hero.ownerDesc": "Set your availability hours, accept verified driver requests, and receive automated secure payouts.",
    "hero.ctaPrimary": "Book Now",
    "hero.ctaSecondary": "Learn More",
    "searchCard.title": "Quick Garage Finder",
    "searchCard.locationLabel": "District or Avenue in Lima",
    "searchCard.vehicleLabel": "Vehicle Type",
    "searchCard.priceLabel": "Max Price / Hr",
    "searchCard.btnSearch": "Search Parking Spaces",
    "vehicle.compact": "Compact Sedan",
    "vehicle.suv": "SUV / Pickup",
    "vehicle.moto": "Motorcycle",
    "split.title": "Available Parking Spaces Nearby",
    "split.subtitle": "Real-time dynamic map and parking cards with instant reservation options.",
    "badge.available": "Available",
    "badge.pending": "1 spot left",
    "btn.bookNow": "Book Now",
    "videos.heading": "Platform Video Demonstrations & Case Studies",
    "video1.headerLeft": "ABOUT-THE-TEAM VIDEO",
    "video1.title": "About the Team: Development Process & Urban Vision",
    "video1.desc": "A comprehensive walkthrough of our agile team dynamics, sprint iterations, geospatial architecture, and collaborative urban parking validation.",
    "video1.link": "Explore team profile & mission",
    "video2.headerLeft": "OFFICIAL DEMO VIDEO",
    "video2.title": "ParkShare: Official Presentation and Needs Validation",
    "video2.desc": "Interviews with garage owners, city drivers, and an end-to-end real-time reservation & verification telemetry demonstration.",
    "video2.link": "Request a personalized demo",
    "video.duration": "DURATION",
    "video.methodology": "METHODOLOGY",
    "video.specialization": "SPECIALIZATION",
    "video.validation": "VALIDATION",
    "video.standard": "STANDARD",
    "team.eyebrow": "THE PEOPLE BEHIND PARKSHARE",
    "team.title": "Meet our team",
    "team.subtitle": "A multidisciplinary team working to make parking in Lima simpler, safer, and more accessible.",
    "team.member1Role": "Product Lead",
    "team.member1Desc": "Shapes the experience so every reservation feels clear from search to arrival.",
    "team.member2Role": "Technology Lead",
    "team.member2Desc": "Builds the reliable platform that connects drivers, owners, and live availability.",
    "team.member3Role": "Community Manager",
    "team.member3Desc": "Supports our community and helps garage owners turn unused space into opportunity.",
    "team.member4Role": "Operations Manager",
    "team.member4Desc": "Keeps verification, availability, and the day-to-day parking operation moving smoothly.",
    "team.member5Role": "Design & Research",
    "team.member5Desc": "Turns driver and owner insights into thoughtful, accessible product decisions.",
    "pricing.title": "Transparent Pricing & Flexible Plans",
    "pricing.subtitle": "Choose the perfect plan whether you are looking for hourly parking or monetizing your garage space.",
    "pricing.plan1Title": "Pay As You Go",
    "pricing.plan1Desc": "Ideal for occasional drivers who need fast parking without commitments.",
    "pricing.plan1Feat1": "Instant map search and booking",
    "pricing.plan1Feat2": "Pay strictly for time used",
    "pricing.plan1Feat3": "Standard customer support",
    "pricing.plan1Feat4": "Verified garage security",
    "pricing.plan2Title": "Driver Pass",
    "pricing.plan2Desc": "Designed for daily commuters seeking reduced hourly rates and priority spots.",
    "pricing.popularBadge": "Most Popular",
    "pricing.plan2Feat1": "15% discount on all hourly rates",
    "pricing.plan2Feat2": "Priority reservation queue",
    "pricing.plan2Feat3": "Zero booking service fees",
    "pricing.plan2Feat4": "24/7 Premium customer care",
    "pricing.btnSubscribe": "Subscribe Now",
    "pricing.plan3Title": "Garage Owner",
    "pricing.plan3Desc": "For property owners looking to turn unused space into steady passive income.",
    "pricing.plan3Feat1": "Free listing and automated scheduling",
    "pricing.plan3Feat2": "Automated direct bank payouts",
    "pricing.plan3Feat3": "Verified driver identification",
    "pricing.plan3Feat4": "Coverage & incident protection",
    "timeline.title": "Simple Step-by-Step Flow",
    "timeline.subtitle": "Our system guides you continuously with transparent real-time state rules.",
    "timeline.step1Title": "Requested",
    "timeline.step1Desc": "Select a garage on the map, choose your timeframe, and send the request.",
    "timeline.step2Title": "Confirmed",
    "timeline.step2Desc": "The owner receives the instant notification and secures your spot.",
    "timeline.step3Title": "In Use",
    "timeline.step3Desc": "Park safely. The timer runs only while your vehicle is inside.",
    "timeline.step4Title": "Finished",
    "timeline.step4Desc": "Confirm exit, automatic secure payment release, and mutual review.",
    "calc.title": "Calculate Your Monthly Earnings as an Owner",
    "calc.subtitle": "Turn your empty garage into passive income in Lima.",
    "calc.hoursLabel": "Available Hours per Day",
    "calc.priceLabel": "Hourly Rate (S/.)",
    "calc.resultTitle": "ESTIMATED MONTHLY EARNINGS",
    "calc.resultSubtitle": "Based on 21 days per month availability.",
    "calc.btnPublish": "Publish My Garage Now",
    "verif.title": "Trust & Document Verification",
    "verif.subtitle": "Every user and garage is verified to ensure maximum security for community members.",
    "verif.doc1Title": "National ID / DNI",
    "verif.doc1Desc": "Verifies official identity of both drivers and garage owners.",
    "verif.doc2Title": "Driver's License & Plate",
    "verif.doc2Desc": "Confirms authorized driver and registered vehicle plate.",
    "verif.doc3Title": "Property Title or Utility Bill",
    "verif.doc3Desc": "Ensures the garage owner is legitimate and authorized.",
    "verif.btnUpload": "Upload Document",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How is the hourly fee calculated?",
    "faq.a1": "The fee is clearly displayed on the card and map prior to confirmation. Billing starts when your vehicle entry is verified and stops upon departure.",
    "faq.q2": "What happens if my vehicle exceeds the garage size?",
    "faq.a2": "Our flow rules automatically block reservations if your registered vehicle dimensions exceed the garage specifications set by the owner.",
    "faq.q3": "How do owners receive payments?",
    "faq.a3": "Earnings accumulate in your 'My Earnings' balance and can be transferred directly to your bank account via the platform.",
    "footer.desc": "Connecting drivers and private garage owners in Lima through clarity, security, and operational speed.",
    "footer.col1": "Navigation",
    "footer.col2": "Modules",
    "footer.col3": "Contact & Legal",
    "mod.bookings": "My Bookings",
    "mod.garages": "My Garages",
    "mod.earnings": "My Earnings",
    "mod.verification": "Verification",
    "btn.cancel": "Cancel",
    "btn.confirm": "Confirm Reservation"
  },
  ES: {
    metaTitle: "Proyect-Park-Share | Tu Red de Cocheras Privadas en Lima",
    metaDesc: "Olvídate del tráfico y busca un estacionamiento seguro por horas o pon en alquiler tu cochera libre para generar dinero extra.",
    "nav.search": "Buscador",
    "nav.howItWorks": "Cómo funciona",
    "nav.videos": "Demos y Videos",
    "nav.team": "Equipo",
    "nav.pricing": "Precios",
    "nav.calculator": "Calculadora",
    "nav.verification": "Verificación",
    "nav.menu": "Abrir menú",
    "btn.login": "Entrar",
    "btn.register": "Registrarse",
    "role.driver": "Soy Conductor",
    "role.owner": "Soy Propietario",
    "hero.driverTitle": "Encuentra un estacionamiento seguro en Lima o alquila tu cochera fácilmente",
    "hero.ownerTitle": "Rentabiliza tu cochera desocupada y genera ingresos de forma segura",
    "hero.driverDesc": "Conecta con propietarios de cocheras verificadas. Reserva por hora, ahorra tiempo y estaciona seguro con precios transparentes.",
    "hero.ownerDesc": "Define tus horarios libres, recibe solicitudes de conductores verificados y recibe pagos automáticos.",
    "hero.ctaPrimary": "Reservar Ahora",
    "hero.ctaSecondary": "Saber Más",
    "searchCard.title": "Buscador Rápido de Cocheras",
    "searchCard.locationLabel": "Distrito o Avenida en Lima",
    "searchCard.vehicleLabel": "Tipo de Vehículo",
    "searchCard.priceLabel": "Precio Máx / Hr",
    "searchCard.btnSearch": "Buscar Estacionamientos",
    "vehicle.compact": "Auto Compacto / Sedán",
    "vehicle.suv": "Camioneta / SUV",
    "vehicle.moto": "Motocicleta",
    "split.title": "Cocheras Disponibles Cercanas",
    "split.subtitle": "Mapa dinámico en tiempo real y tarjetas con opciones de reserva instantánea.",
    "badge.available": "Disponible",
    "badge.pending": "Último cupo",
    "btn.bookNow": "Reservar ahora",
    "videos.heading": "Demostraciones en Video y Casos de Estudio",
    "video1.headerLeft": "VIDEO SOBRE EL EQUIPO",
    "video1.title": "Sobre el Equipo: Proceso de Desarrollo y Visión Urbana",
    "video1.desc": "Un recorrido completo sobre la dinámica ágil de nuestro equipo, iteraciones de sprint, arquitectura geoespacial y validación colaborativa.",
    "video1.link": "Explorar perfil del equipo y misión",
    "video2.headerLeft": "VIDEO DEMO OFICIAL",
    "video2.title": "ParkShare: Presentación Oficial y Validación de Necesidades",
    "video2.desc": "Entrevistas con propietarios de cocheras, conductores urbanos y demostración telemática de reserva y verificación en tiempo real.",
    "video2.link": "Solicitar una demo personalizada",
    "video.duration": "DURACIÓN",
    "video.methodology": "METODOLOGÍA",
    "video.specialization": "ESPECIALIZACIÓN",
    "video.validation": "VALIDACIÓN",
    "video.standard": "ESTÁNDAR",
    "team.eyebrow": "EL EQUIPO DETRÁS DE PARKSHARE",
    "team.title": "Conoce a nuestro equipo",
    "team.subtitle": "Un equipo multidisciplinario que trabaja para hacer el estacionamiento en Lima más simple, seguro y accesible.",
    "team.member1Role": "Líder de Producto",
    "team.member1Desc": "Diseña una experiencia clara para cada reserva, desde la búsqueda hasta la llegada.",
    "team.member2Role": "Líder de Tecnología",
    "team.member2Desc": "Construye la plataforma confiable que conecta conductores, propietarios y disponibilidad.",
    "team.member3Role": "Gestora de Comunidad",
    "team.member3Desc": "Acompaña a la comunidad y ayuda a convertir espacios libres en oportunidades.",
    "team.member4Role": "Gerente de Operaciones",
    "team.member4Desc": "Coordina la verificación, disponibilidad y operación diaria de los estacionamientos.",
    "team.member5Role": "Diseño e Investigación",
    "team.member5Desc": "Convierte las necesidades de conductores y propietarios en decisiones de producto.",
    "pricing.title": "Precios Transparentes y Planes Flexibles",
    "pricing.subtitle": "Elige el plan ideal tanto si buscas estacionar por horas como si deseas monetizar tu espacio.",
    "pricing.plan1Title": "Pago Por Uso",
    "pricing.plan1Desc": "Ideal para conductores ocasionales que necesitan estacionar rápido y sin compromisos.",
    "pricing.plan1Feat1": "Búsqueda y reserva inmediata en el mapa",
    "pricing.plan1Feat2": "Pago exacto solo por el tiempo consumido",
    "pricing.plan1Feat3": "Soporte al cliente estándar",
    "pricing.plan1Feat4": "Seguridad en cocheras verificadas",
    "pricing.plan2Title": "Pase Conductor",
    "pricing.plan2Desc": "Diseñado para quienes se desplazan a diario y buscan tarifas reducidas y prioridad.",
    "pricing.popularBadge": "Más Popular",
    "pricing.plan2Feat1": "15% de descuento en todas las tarifas",
    "pricing.plan2Feat2": "Cola de reserva prioritaria",
    "pricing.plan2Feat3": "Sin tarifas de servicio por reserva",
    "pricing.plan2Feat4": "Atención al cliente Premium 24/7",
    "pricing.btnSubscribe": "Suscribirme Ahora",
    "pricing.plan3Title": "Propietario",
    "pricing.plan3Desc": "Para dueños que desean convertir su espacio libre en ingresos pasivos estables.",
    "pricing.plan3Feat1": "Publicación gratis y horarios automáticos",
    "pricing.plan3Feat2": "Depósitos bancarios directos",
    "pricing.plan3Feat3": "Identificación de conductores verificados",
    "pricing.plan3Feat4": "Protección y cobertura de incidentes",
    "timeline.title": "Flujo Paso a Paso Simplificado",
    "timeline.subtitle": "El sistema te guía en todo momento con reglas de estado claras en tiempo real.",
    "timeline.step1Title": "Solicitado",
    "timeline.step1Desc": "Elige la cochera en el mapa, define el horario y envía la solicitud.",
    "timeline.step2Title": "Confirmado",
    "timeline.step2Desc": "El propietario recibe la alerta instantánea y asegura tu lugar.",
    "timeline.step3Title": "En uso",
    "timeline.step3Desc": "Estaciona seguro. El temporizador corre solo mientras estás dentro.",
    "timeline.step4Title": "Finalizado",
    "timeline.step4Desc": "Confirma la salida, pago automático seguro y calificación mutua.",
    "calc.title": "Calcula tus Ingresos Mensuales como Propietario",
    "calc.subtitle": "Convierte tu espacio libre en dinero extra en Lima.",
    "calc.hoursLabel": "Horas Disponibles al Día",
    "calc.priceLabel": "Tarifa por Hora (S/.)",
    "calc.resultTitle": "GANANCIA MENSUAL ESTIMADA",
    "calc.resultSubtitle": "Basado en 21 días de disponibilidad al mes.",
    "calc.btnPublish": "Publicar mi Cochera Ahora",
    "verif.title": "Verificación y Seguridad",
    "verif.subtitle": "Cada usuario y espacio se verifica para garantizar máxima seguridad.",
    "verif.doc1Title": "Documento de Identidad / DNI",
    "verif.doc1Desc": "Verifica la identidad oficial de conductores y propietarios.",
    "verif.doc2Title": "Licencia de Conducir y Placa",
    "verif.doc2Desc": "Confirma el conductor autorizado y la placa del vehículo.",
    "verif.doc3Title": "Título de Propiedad o Recibo",
    "verif.doc3Desc": "Asegura la legitimidad del propietario del garage.",
    "verif.btnUpload": "Subir Documento",
    "faq.title": "Preguntas Frecuentes",
    "faq.q1": "¿Cómo se calcula la tarifa por hora?",
    "faq.a1": "La tarifa se muestra con claridad en la tarjeta y mapa antes de confirmar. El cobro inicia al confirmar el ingreso y termina al salir.",
    "faq.q2": "¿Qué ocurre si mi vehículo supera el tamaño de la cochera?",
    "faq.a2": "El sistema bloquea automáticamente la solicitud si las dimensiones del vehículo exceden el límite registrado por el propietario.",
    "faq.q3": "¿Cómo reciben el dinero los propietarios?",
    "faq.a3": "Las ganancias se acumulan en la sección 'Mis Ingresos' y se pueden transferir directamente a tu cuenta bancaria.",
    "footer.desc": "Conectando conductores y dueños de cocheras en Lima con claridad, seguridad y agilidad operacional.",
    "footer.col1": "Navegación",
    "footer.col2": "Módulos",
    "footer.col3": "Contacto y Legal",
    "mod.bookings": "Mis Reservas",
    "mod.garages": "Mis Cocheras",
    "mod.earnings": "Mis Ingresos",
    "mod.verification": "Verificación",
    "btn.cancel": "Cancelar",
    "btn.confirm": "Confirmar Reserva"
  }
};

/* --------------------------------------------------------------------------
   2. IDIOMA (EN / ES)
   -------------------------------------------------------------------------- */
const langToggleBtn = document.getElementById('lang-toggle-btn');
const langEnLabel = document.getElementById('lang-en');
const langEsLabel = document.getElementById('lang-es');
const metaDesc = document.getElementById('meta-desc');

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'EN' ? 'ES' : 'EN';
  updateLanguageUI();
});

function updateLanguageUI() {
  const t = i18nData[currentLang];
  const isEN = currentLang === 'EN';

  langEnLabel.classList.toggle('active', isEN);
  langEsLabel.classList.toggle('active', !isEN);

  document.documentElement.lang = isEN ? 'en' : 'es';
  document.title = t.metaTitle;
  metaDesc.setAttribute('content', t.metaDesc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = t[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const text = t[el.dataset.i18nAria];
    if (text) el.setAttribute('aria-label', text);
  });

  // Textos dinámicos que dependen del idioma
  setRole(currentRole);
  updateCalculation();
}

/* --------------------------------------------------------------------------
   3. ROL (CONDUCTOR / PROPIETARIO)
   -------------------------------------------------------------------------- */
function setRole(role) {
  currentRole = role;
  const isDriver = role === 'driver';
  const t = i18nData[currentLang];

  document.getElementById('btn-role-driver').classList.toggle('active', isDriver);
  document.getElementById('btn-role-owner').classList.toggle('active', !isDriver);
  document.getElementById('hero-title').textContent = t[isDriver ? 'hero.driverTitle' : 'hero.ownerTitle'];
  document.getElementById('hero-desc').textContent = t[isDriver ? 'hero.driverDesc' : 'hero.ownerDesc'];
}

/* --------------------------------------------------------------------------
   4. CALCULADORA DE INGRESOS
   -------------------------------------------------------------------------- */
function updateCalculation() {
  const hours = parseInt(document.getElementById('calc-hours').value, 10);
  const price = parseFloat(document.getElementById('calc-price').value);

  document.getElementById('hours-val').textContent = `${hours} hrs / ${currentLang === 'EN' ? 'day' : 'día'}`;
  document.getElementById('price-val').textContent = `S/. ${price.toFixed(2)} / hr`;

  // Fórmula: horas × tarifa × 21 días
  const monthlyEarnings = hours * price * 21;
  document.getElementById('calc-result').textContent =
    `S/. ${monthlyEarnings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/* --------------------------------------------------------------------------
   5. MAPA Y BÚSQUEDA
   -------------------------------------------------------------------------- */
function highlightPin(id) {
  document.querySelectorAll('.map-pin').forEach(pin => { pin.style.transform = 'scale(1)'; });
  const activePin = document.getElementById(`pin-${id}`);
  if (activePin) {
    activePin.style.transform = 'scale(1.25)';
    showToast(currentLang === 'EN' ? `Garage #${id} selected on map` : `Cochera #${id} seleccionada en el mapa`);
  }
}

function triggerSearch() {
  const val = document.getElementById('search-input').value;
  showToast(currentLang === 'EN' ? `Searching garages in '${val}'...` : `Buscando cocheras en '${val}'...`);
}

/* --------------------------------------------------------------------------
   6. MODALES Y NOTIFICACIONES (TOAST)
   -------------------------------------------------------------------------- */
let selectedGarageName = '';

function bookParking(name) {
  selectedGarageName = name;
  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-body').textContent = currentLang === 'EN'
    ? `Send booking request for ${name}? The owner will verify availability immediately.`
    : `¿Enviar solicitud de reserva para ${name}? El propietario verificará disponibilidad de inmediato.`;
  openModal('action-modal');
}

function confirmModalAction() {
  closeModal('action-modal');
  showToast(currentLang === 'EN'
    ? `Reservation requested for ${selectedGarageName}!`
    : `¡Reserva solicitada para ${selectedGarageName}!`);
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');

  // textContent (no innerHTML): el mensaje puede incluir texto escrito por el usuario
  const icon = document.createElement('span');
  icon.textContent = '🔔';
  const text = document.createElement('span');
  text.textContent = msg;
  toast.append(icon, text);
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function simulateUpload(docName) {
  showToast(currentLang === 'EN' ? `Uploading ${docName}... Verified!` : `Cargando ${docName}... ¡Verificado!`);
}

function playDemoVideo(title) {
  showToast(currentLang === 'EN' ? `Playing video demo: ${title}` : `Reproduciendo video demo: ${title}`);
}

function toggleFaq(el) {
  el.classList.toggle('active');
}

/* --------------------------------------------------------------------------
   7. NAVBAR: menú móvil, sombra al hacer scroll y sección activa
   -------------------------------------------------------------------------- */
const header = document.getElementById('site-header');
const nav = document.getElementById('primary-nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = Array.from(nav.querySelectorAll('.nav-links a'));
const desktopQuery = window.matchMedia('(min-width: 1181px)');

// 7.1 Menú desplegable (tablet / móvil)
function setMenu(open) {
  header.classList.toggle('menu-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
}

navToggle.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

// Al elegir un enlace o un botón dentro del menú, se cierra
nav.addEventListener('click', e => {
  if (e.target.closest('a, button')) setMenu(false);
});

// Clic fuera del header o tecla Escape también lo cierran
document.addEventListener('click', e => {
  if (!header.contains(e.target)) setMenu(false);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && header.classList.contains('menu-open')) {
    setMenu(false);
    navToggle.focus();
  }
});

// Si la ventana se ensancha, el menú vuelve al modo escritorio
desktopQuery.addEventListener('change', e => {
  if (e.matches) setMenu(false);
});

// 7.2 Sombra sutil cuando la página deja de estar arriba
function onScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 7.3 Resalta en el menú la sección que se está viendo
function setActiveLink(id) {
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveLink(entry.target.id); // el hero no tiene id → limpia la selección
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)
    .forEach(section => spy.observe(section));
  spy.observe(document.querySelector('.hero'));
}
