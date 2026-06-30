const sourceData = {
  Resumen: [
    { metrica: "Llamadas realizadas", valor: 1248, variacion: "+18%", referencia: "vs. semana anterior" },
    { metrica: "Contactos conectados", valor: 312, variacion: "+14%", referencia: "vs. semana anterior" },
    { metrica: "Tasa de contacto", valor: "25.0%", variacion: "-2.3 pp", referencia: "vs. semana anterior" },
    { metrica: "Confirmaciones", valor: 97, variacion: "+21%", referencia: "vs. semana anterior" },
    { metrica: "Tasa de confirmación", valor: "31.1%", variacion: "+3.4 pp", referencia: "vs. semana anterior" },
    { metrica: "Cola de confirmación", valor: 12, variacion: "+2", referencia: "pendientes" },
  ],
  Analitica: [
    { fecha: "2025-05-12", llamadas_realizadas: 148, contactos_conectados: 32, confirmaciones: 8, tasa_contacto: 21.6, tasa_confirmacion: 25 },
    { fecha: "2025-05-13", llamadas_realizadas: 186, contactos_conectados: 45, confirmaciones: 11, tasa_contacto: 24.2, tasa_confirmacion: 24.4 },
    { fecha: "2025-05-14", llamadas_realizadas: 212, contactos_conectados: 53, confirmaciones: 13, tasa_contacto: 25, tasa_confirmacion: 24.5 },
    { fecha: "2025-05-15", llamadas_realizadas: 301, contactos_conectados: 70, confirmaciones: 19, tasa_contacto: 23.3, tasa_confirmacion: 27.1 },
    { fecha: "2025-05-16", llamadas_realizadas: 265, contactos_conectados: 61, confirmaciones: 18, tasa_contacto: 23, tasa_confirmacion: 29.5 },
    { fecha: "2025-05-17", llamadas_realizadas: 209, contactos_conectados: 34, confirmaciones: 16, tasa_contacto: 16.3, tasa_confirmacion: 47.1 },
    { fecha: "2025-05-18", llamadas_realizadas: 126, contactos_conectados: 17, confirmaciones: 12, tasa_contacto: 13.5, tasa_confirmacion: 70.6 },
  ],
  Llamadas: [
    { fecha_hora: "2025-05-18 08:00", transportista: "RouteMaster Inc.", telefono: "(773) 555-9821", resultado: "Aceptado", agente: "Carlos Méndez", duracion_seg: 159 },
    { fecha_hora: "2025-05-18 08:07", transportista: "AGL Transport", telefono: "(312) 555-7710", resultado: "Pendiente", agente: "Ana Gómez", duracion_seg: 347 },
    { fecha_hora: "2025-05-18 08:14", transportista: "BlueLine Carriers", telefono: "(773) 555-9821", resultado: "Contraoferta", agente: "Ana Gómez", duracion_seg: 156 },
    { fecha_hora: "2025-05-18 08:21", transportista: "Prime Carriers", telefono: "(773) 555-9821", resultado: "Rechazado", agente: "Carlos Méndez", duracion_seg: 411 },
    { fecha_hora: "2025-05-18 08:28", transportista: "BlueLine Carriers", telefono: "(281) 555-3321", resultado: "Handoff", agente: "Sofía Rivera", duracion_seg: 48 },
    { fecha_hora: "2025-05-18 08:35", transportista: "AGL Transport", telefono: "(305) 555-0198", resultado: "Fallo OTP", agente: "Sofía Rivera", duracion_seg: 124 },
    { fecha_hora: "2025-05-18 08:42", transportista: "Prime Carriers", telefono: "(214) 555-6677", resultado: "Aceptado", agente: "Ana Gómez", duracion_seg: 239 },
    { fecha_hora: "2025-05-18 08:49", transportista: "RouteMaster Inc.", telefono: "(214) 555-6677", resultado: "Pendiente", agente: "Sofía Rivera", duracion_seg: 67 },
    { fecha_hora: "2025-05-18 08:56", transportista: "SwiftHaul Solutions", telefono: "(312) 555-7710", resultado: "Contraoferta", agente: "Ana Gómez", duracion_seg: 327 },
    { fecha_hora: "2025-05-18 09:03", transportista: "Desert Freight Co.", telefono: "(214) 555-6677", resultado: "Rechazado", agente: "Carlos Méndez", duracion_seg: 405 },
    { fecha_hora: "2025-05-18 09:10", transportista: "RouteMaster Inc.", telefono: "(773) 555-9821", resultado: "Handoff", agente: "Sofía Rivera", duracion_seg: 85 },
    { fecha_hora: "2025-05-18 09:17", transportista: "Prime Carriers", telefono: "(312) 555-7710", resultado: "Fallo OTP", agente: "Sofía Rivera", duracion_seg: 277 },
    { fecha_hora: "2025-05-18 09:24", transportista: "Northline Carriers", telefono: "(915) 555-2044", resultado: "Aceptado", agente: "Sofía Rivera", duracion_seg: 152 },
    { fecha_hora: "2025-05-18 09:31", transportista: "Desert Freight Co.", telefono: "(312) 555-7710", resultado: "Pendiente", agente: "Carlos Méndez", duracion_seg: 318 },
    { fecha_hora: "2025-05-18 09:38", transportista: "Prime Carriers", telefono: "(915) 555-2044", resultado: "Contraoferta", agente: "Luis Ramírez", duracion_seg: 183 },
    { fecha_hora: "2025-05-18 09:45", transportista: "Prime Carriers", telefono: "(214) 555-6677", resultado: "Rechazado", agente: "Carlos Méndez", duracion_seg: 61 },
    { fecha_hora: "2025-05-18 09:52", transportista: "Northline Carriers", telefono: "(305) 555-0198", resultado: "Handoff", agente: "Ana Gómez", duracion_seg: 153 },
    { fecha_hora: "2025-05-18 09:59", transportista: "Northline Carriers", telefono: "(281) 555-3321", resultado: "Fallo OTP", agente: "Luis Ramírez", duracion_seg: 374 },
  ],
  Contactos: [
    { contacto: "James Mitchell", empresa: "BlueLine Carriers", telefono: "(915) 555-2044", email: "contacto1@empresa-demo.com", estado: "En seguimiento", ultimo_contacto: "2025-05-18 08:00" },
    { contacto: "María González", empresa: "Prime Carriers", telefono: "(305) 555-0198", email: "contacto2@empresa-demo.com", estado: "Nuevo", ultimo_contacto: "2025-05-18 09:00" },
    { contacto: "Carlos Méndez", empresa: "Desert Freight Co.", telefono: "(915) 555-2044", email: "contacto3@empresa-demo.com", estado: "En seguimiento", ultimo_contacto: "2025-05-18 10:00" },
    { contacto: "Ana Torres", empresa: "BlueLine Carriers", telefono: "(915) 555-2044", email: "contacto4@empresa-demo.com", estado: "No interesado", ultimo_contacto: "2025-05-18 11:00" },
    { contacto: "Brandon Lee", empresa: "AGL Transport", telefono: "(713) 555-0144", email: "contacto5@empresa-demo.com", estado: "No interesado", ultimo_contacto: "2025-05-18 12:00" },
    { contacto: "Lucía Sánchez", empresa: "SwiftHaul Solutions", telefono: "(602) 555-8890", email: "contacto6@empresa-demo.com", estado: "En seguimiento", ultimo_contacto: "2025-05-18 13:00" },
    { contacto: "Roberto García", empresa: "Desert Freight Co.", telefono: "(281) 555-3321", email: "contacto7@empresa-demo.com", estado: "En seguimiento", ultimo_contacto: "2025-05-18 14:00" },
    { contacto: "Emily Davis", empresa: "Desert Freight Co.", telefono: "(713) 555-0144", email: "contacto8@empresa-demo.com", estado: "En seguimiento", ultimo_contacto: "2025-05-18 15:00" },
    { contacto: "Juan Torres", empresa: "BlueLine Carriers", telefono: "(713) 555-0144", email: "contacto9@empresa-demo.com", estado: "No interesado", ultimo_contacto: "2025-05-18 16:00" },
    { contacto: "María Cedeño", empresa: "RouteMaster Inc.", telefono: "(915) 555-2044", email: "contacto10@empresa-demo.com", estado: "No interesado", ultimo_contacto: "2025-05-18 17:00" },
  ],
  Cargadores: [
    { cargador: "Walmart Logistics", ciudad_origen: "Dallas, TX", volumen_mensual_cargas: 122, score_relacion: 91, estado: "Aceptada" },
    { cargador: "Home Depot Supply", ciudad_origen: "Chicago, IL", volumen_mensual_cargas: 98, score_relacion: 88, estado: "Pendiente" },
    { cargador: "Target Freight", ciudad_origen: "Atlanta, GA", volumen_mensual_cargas: 145, score_relacion: 93, estado: "Aceptada" },
    { cargador: "Costco Distribution", ciudad_origen: "Phoenix, AZ", volumen_mensual_cargas: 76, score_relacion: 79, estado: "Cancelada" },
    { cargador: "Best Buy Logistics", ciudad_origen: "Memphis, TN", volumen_mensual_cargas: 83, score_relacion: 81, estado: "Pendiente" },
    { cargador: "Amazon Relay", ciudad_origen: "Houston, TX", volumen_mensual_cargas: 211, score_relacion: 95, estado: "Aceptada" },
    { cargador: "Lowe's Shipping", ciudad_origen: "Charlotte, NC", volumen_mensual_cargas: 59, score_relacion: 74, estado: "Cancelada" },
    { cargador: "Sysco Foods", ciudad_origen: "Indianapolis, IN", volumen_mensual_cargas: 67, score_relacion: 77, estado: "Pendiente" },
  ],
  Transportistas: [
    { transportista: "SwiftHaul Solutions", mc_numero: 872144, otp_validado_pct: 78, cargas_cerradas: 14, tarifa_promedio_usd: 2450, estado: "Activo" },
    { transportista: "BlueLine Carriers", mc_numero: 872145, otp_validado_pct: 72, cargas_cerradas: 11, tarifa_promedio_usd: 1980, estado: "Activo" },
    { transportista: "Frontier Logistics", mc_numero: 872146, otp_validado_pct: 80, cargas_cerradas: 9, tarifa_promedio_usd: 2150, estado: "Activo" },
    { transportista: "Maverick Transport", mc_numero: 872147, otp_validado_pct: 69, cargas_cerradas: 8, tarifa_promedio_usd: 2300, estado: "Activo" },
    { transportista: "Pinnacle Freight", mc_numero: 872148, otp_validado_pct: 65, cargas_cerradas: 7, tarifa_promedio_usd: 1875, estado: "En revisión" },
    { transportista: "JB Hunt", mc_numero: 872149, otp_validado_pct: 88, cargas_cerradas: 18, tarifa_promedio_usd: 2210, estado: "Activo" },
    { transportista: "Werner Enterprises", mc_numero: 872150, otp_validado_pct: 74, cargas_cerradas: 12, tarifa_promedio_usd: 2090, estado: "Activo" },
    { transportista: "Knight-Swift", mc_numero: 872151, otp_validado_pct: 71, cargas_cerradas: 10, tarifa_promedio_usd: 2140, estado: "Activo" },
  ],
  Campanas: [
    { campana: "Spot Market Semana 20", tipo: "Outbound", inicio: "2025-05-05", fin: "2025-05-19", contactos: 420, conversion_pct: 11.2 },
    { campana: "Reactivación carriers Q2", tipo: "Email + Calls", inicio: "2025-05-08", fin: "2025-05-22", contactos: 310, conversion_pct: 9.7 },
    { campana: "New lanes Midwest", tipo: "Phone", inicio: "2025-05-10", fin: "2025-05-24", contactos: 188, conversion_pct: 13.5 },
    { campana: "High-value lanes", tipo: "Phone", inicio: "2025-05-12", fin: "2025-05-28", contactos: 95, conversion_pct: 17.1 },
    { campana: "Cold outreach cargadores", tipo: "Outbound", inicio: "2025-05-14", fin: "2025-05-30", contactos: 220, conversion_pct: 6.2 },
    { campana: "Re-booking junio", tipo: "Mixed", inicio: "2025-05-16", fin: "2025-06-04", contactos: 180, conversion_pct: 12.8 },
  ],
};

const transcriptTemplate = [
  "User joined call",
  "0:01",
  "",
  "Carrier: Hola, buenas.",
  "0:03",
  "Agent: Hola. Para poder ayudarte a buscar cargas disponibles, me puedes indicar tu numero MC?",
  "0:11",
  "Carrier: Por supuesto, es 112233.",
  "0:18",
  "System: Verificacion de autoridad para el numero MC proporcionado.",
  "{ \"numero_mc\": \"112233\", \"verificado\": true, \"siguiente_paso\": \"enviar_otp\", \"estado_autoridad\": \"activa\" }",
  "0:23",
  "System: Envio de codigo OTP por SMS para continuar con la verificacion.",
  "{ \"canal\": \"sms\", \"codigo_demo\": \"123456\", \"otp_enviado\": true, \"siguiente_paso\": \"validar_otp\" }",
  "0:32",
  "Carrier: Por supuesto, es 123456.",
  "0:41",
  "System: Validacion del codigo OTP proporcionado por el transportista.",
  "{ \"otp_valido\": true, \"siguiente_paso\": \"recoger_preferencias_carga\" }",
  "0:48",
  "Agent: Codigo verificado correctamente. Desde que provincia quieres cargar, hacia donde te gustaria ir y que tipo de equipo llevas?",
  "0:53",
  "Carrier: Voy de Valencia a Madrid y tengo una caja seca.",
  "0:58",
  "System: Buscar cargas disponibles de Valencia a Madrid para caja seca.",
  "{ \"id_carga\": \"LDES000001\", \"origen_ciudad\": \"Valencia\", \"destino_ciudad\": \"Madrid\", \"tarifa_publicada\": 1250, \"estado\": \"abierta\" }",
  "1:20",
  "Agent: Tengo una carga disponible de Valencia a Madrid para el 1 de julio. La tarifa publicada es de 1.250 euros. Te encaja o quieres hacer una contraoferta?",
  "1:29",
  "Carrier: Me vendria mejor unos 1.000 euros.",
  "1:36",
  "System: El transportista propone 1.000 euros como contraoferta.",
  "{ \"decision\": \"aceptar\", \"tarifa_acordada\": 1000, \"siguiente_paso\": \"reservar_carga\" }",
  "1:45",
  "System: Crear handoff simulado tras reserva tentativa.",
  "{ \"estado\": \"reservada\", \"referencia_reserva\": \"RES000001233\", \"handoff_creado\": true }",
  "1:59",
  "Agent: La carga queda reservada de forma tentativa por 1.000 euros. Un compañero del equipo de ventas contactara para completar la confirmacion final.",
].join("\n");

const callOutcomes = ["Aceptado", "Pendiente", "Contraoferta", "Rechazado", "Handoff", "Fallo OTP"];
const callSummaries = {
  Aceptado: "Carga Valencia-Madrid aceptada tras contraoferta de 1.000 euros y handoff creado para confirmacion final.",
  Pendiente: "Transportista verificado por OTP; queda pendiente confirmar disponibilidad y tarifa final.",
  Contraoferta: "Transportista propone una contraoferta y queda abierta la negociacion con operaciones.",
  Rechazado: "La tarifa publicada no encaja y el transportista rechaza continuar con la reserva.",
  Handoff: "Reserva tentativa creada; requiere seguimiento de un senior rep para cerrar la confirmacion.",
  "Fallo OTP": "No se completa la validacion OTP y la llamada queda bloqueada por verificacion.",
};

sourceData.Llamadas.forEach((call, index) => {
  const resultado = callOutcomes[index % callOutcomes.length];
  call.resultado = resultado;
  call.resumen = callSummaries[resultado];
  call.transcripcion = transcriptTemplate.replaceAll("112233", String(112233 + index)).replaceAll("LDES000001", `LDES${String(index + 1).padStart(6, "0")}`);
});

const state = {
  language: "en",
  page: "analitica",
  query: "",
  filters: {
    analyticsMetric: "llamadas_realizadas",
    analyticsResult: "all",
    analyticsAgent: "all",
    callsResult: "all",
    callsAgent: "all",
    callsDuration: "all",
    contactsStatus: "all",
    contactsOwner: "all",
    shippersStatus: "all",
    shippersCity: "all",
    shippersScore: "all",
    carriersStatus: "all",
    carriersOtp: "all",
    carriersRate: "all",
    intelResult: "all",
    intelAgent: "all",
    intelClient: "all",
    intelFocus: "all",
  },
  shipperSegment: null,
  shipperSegmentPinned: false,
  resultSegment: null,
  resultSegmentPinned: false,
  resultHoverSuspended: false,
  queue: [
    { id: 1, name: "SwiftHaul Solutions", lane: "Dallas, TX → Houston, TX", agent: "Ana Gómez", time: "Hace 8 min", status: "pending" },
    { id: 2, name: "BlueLine Carriers", lane: "Chicago, IL → Memphis, TN", agent: "Carlos Méndez", time: "Hace 12 min", status: "pending" },
    { id: 3, name: "Frontier Logistics", lane: "Atlanta, GA → Charlotte, NC", agent: "Sofía Rivera", time: "Hace 18 min", status: "pending" },
    { id: 4, name: "Maverick Transport", lane: "Phoenix, AZ → Los Angeles, CA", agent: "Ana Gómez", time: "Hace 22 min", status: "pending" },
    { id: 5, name: "Pinnacle Freight", lane: "Indianapolis, IN → Columbus, OH", agent: "Carlos Méndez", time: "Hace 25 min", status: "pending" },
  ],
};

const resultColors = {
  Aceptado: "#22a55a",
  Pendiente: "#f59e0b",
  Contraoferta: "#5b8def",
  Rechazado: "#ef4444",
  Handoff: "#7c3aed",
  "Fallo OTP": "#94a3b8",
};

const pageMeta = {
  analitica: ["Analitica de operaciones", "Vista general del rendimiento de llamadas y resultados."],
  llamadas: ["Llamadas", "Gestiona y da seguimiento a todas tus llamadas."],
  contactos: ["Lead", "Gestiona y da seguimiento a tus leads y oportunidades."],
  cargadores: ["Cargas", "Gestiona y analiza tu base de cargas y su estado operativo."],
  transportistas: ["Transportistas", "Gestiona y valida tu red de transportistas."],
  intelligence: ["Intelligence", "Insights ejecutivos para seniors: pricing, clientes, riesgo y siguiente mejor accion."],
};

const exactEnglish = new Map([
  ["Operaciones", "Operations"],
  ["Llamadas", "Calls"],
  ["Cargas", "Loads"],
  ["Transportistas", "Carriers"],
  ["Gerente de Operaciones", "Operations Manager"],
  ["Analitica de operaciones", "Operations analytics"],
  ["Vista general del rendimiento de llamadas y resultados.", "Overview of call performance and outcomes."],
  ["Gestiona y da seguimiento a todas tus llamadas.", "Manage and follow up on all your calls."],
  ["Gestiona y da seguimiento a tus leads y oportunidades.", "Manage and follow up on your leads and opportunities."],
  ["Gestiona y analiza tu base de cargas y su estado operativo.", "Manage and analyze your load base and operating status."],
  ["Gestiona y valida tu red de transportistas.", "Manage and validate your carrier network."],
  ["Insights ejecutivos para seniors: pricing, clientes, riesgo y siguiente mejor accion.", "Executive insights for senior teams: pricing, clients, risk, and next best action."],
  ["Actualizado: hace 5 min", "Updated: 5 min ago"],
  ["Cola de confirmacion", "Confirmation queue"],
  ["Confirma o rechaza los resultados pendientes para mantener tus datos actualizados.", "Confirm or reject pending outcomes to keep your data up to date."],
  ["Llamadas realizadas", "Calls made"],
  ["Contactos conectados", "Connected contacts"],
  ["Tasa de contacto", "Contact rate"],
  ["Confirmaciones", "Confirmations"],
  ["Tasa de confirmación", "Confirmation rate"],
  ["Cola de confirmación", "Confirmation queue"],
  ["vs. semana anterior", "vs. previous week"],
  ["vs. semana pasada", "vs. last week"],
  ["vs. mes anterior", "vs. previous month"],
  ["pendientes", "pending"],
  ["Metrica", "Metric"],
  ["Llamadas por dia", "Calls per day"],
  ["Leads conectados", "Connected leads"],
  ["Confirmaciones por dia", "Confirmations per day"],
  ["Resultado", "Result"],
  ["Agente", "Agent"],
  ["Duracion", "Duration"],
  ["Estado", "Status"],
  ["Ciudad", "City"],
  ["Score", "Score"],
  ["Tarifa", "Rate"],
  ["Cliente", "Client"],
  ["Foco", "Focus"],
  ["Todos", "All"],
  ["Todas", "All"],
  ["Todo", "All"],
  ["Limpiar", "Clear"],
  ["Buscar transportista o telefono", "Search carrier or phone"],
  ["Buscar transportista, telefono o agente", "Search carrier, phone, or agent"],
  ["Buscar lead, empresa o email", "Search lead, company, or email"],
  ["Buscar cargador o ciudad", "Search shipper or city"],
  ["Buscar transportista o MC", "Search carrier or MC"],
  ["Buscar cliente, transportista o agente", "Search client, carrier, or agent"],
  ["Fecha y hora", "Date and time"],
  ["Transportista", "Carrier"],
  ["Telefono", "Phone"],
  ["Transcripcion", "Transcript"],
  ["Grabacion", "Recording"],
  ["Ver", "View"],
  ["Reproducir llamada", "Play call"],
  ["Resultados de llamadas", "Call results"],
  ["Ultimas llamadas", "Latest calls"],
  ["Ver todas", "View all"],
  ["Metricas operativas detalladas", "Detailed operational metrics"],
  ["llamadas filtradas", "filtered calls"],
  ["Pipeline recuperable", "Recoverable pipeline"],
  ["Oportunidad", "Opportunity"],
  ["Fuga potencial", "Potential leakage"],
  ["Riesgo", "Risk"],
  ["Win-rate negociacion", "Negotiation win rate"],
  ["Pricing", "Pricing"],
  ["Velocidad a reserva", "Speed to booking"],
  ["Eficiencia", "Efficiency"],
  ["Agente con mas impacto", "Highest-impact agent"],
  ["Prioridad automatica", "Automatic priority"],
  ["Cierre operativo", "Operational close"],
  ["Pendientes", "Pending"],
  ["Contraofertas", "Counteroffers"],
  ["Fallo OTP", "OTP failure"],
  ["Duracion media", "Average duration"],
  ["Valor reservado", "Booked value"],
  ["Backlog activo", "Active backlog"],
  ["Bloqueos", "Blocks"],
  ["Funnel operativo", "Operational funnel"],
  ["Por agente", "By agent"],
  ["Acciones inmediatas", "Immediate actions"],
  ["Seguimientos de hoy", "Today's follow-ups"],
  ["Historial de llamadas", "Call history"],
  ["Total de llamadas", "Total calls"],
  ["Promedio duracion", "Average duration"],
  ["Aceptadas", "Accepted"],
  ["Leads totales", "Total leads"],
  ["Nuevos", "New"],
  ["En seguimiento", "In follow-up"],
  ["Calificados", "Qualified"],
  ["Todos los leads", "All leads"],
  ["Empresa", "Company"],
  ["Ultimo contacto", "Last contact"],
  ["Owner", "Owner"],
  ["Segmentos", "Segments"],
  ["Actividad reciente", "Recent activity"],
  ["Cargas aceptadas", "Accepted loads"],
  ["Cargas pendientes", "Pending loads"],
  ["Cargas canceladas", "Canceled loads"],
  ["Volumen mensual", "Monthly volume"],
  ["Cuenta", "Account"],
  ["Ciudad origen", "Origin city"],
  ["Volumen mensual de cargas", "Monthly load volume"],
  ["Score de relacion", "Relationship score"],
  ["Top cargas", "Top loads"],
  ["Concentracion por ciudad origen", "Concentration by origin city"],
  ["Transportistas activos", "Active carriers"],
  ["En revision", "Under review"],
  ["MC verificados", "Verified MCs"],
  ["Cargas cerradas", "Closed loads"],
  ["Tarifa promedio", "Average rate"],
  ["Resumen de transportistas", "Carrier summary"],
  ["MC numero", "MC number"],
  ["OTP validado %", "OTP validated %"],
  ["Verificacion y onboarding", "Verification and onboarding"],
  ["Rendimiento de OTP validado", "Validated OTP performance"],
  ["Precio aceptado medio", "Average accepted price"],
  ["Referencia realista de cierre para lanes similares.", "Realistic closing reference for similar lanes."],
  ["Contraoferta mas repetida", "Most repeated counteroffer"],
  ["Mejor cliente", "Best client"],
  ["Cliente con riesgo", "At-risk client"],
  ["Revenue recuperable", "Recoverable revenue"],
  ["Riesgo OTP", "OTP risk"],
  ["Ranking senior de agentes", "Senior agent ranking"],
  ["Playbook recomendado", "Recommended playbook"],
  ["Clientes", "Clients"],
  ["Operaciones", "Operations"],
  ["Siguiente accion", "Next action"],
  ["Aceptado", "Accepted"],
  ["Pendiente", "Pending"],
  ["Contraoferta", "Counteroffer"],
  ["Rechazado", "Rejected"],
  ["Handoff", "Handoff"],
  ["Nuevo", "New"],
  ["No interesado", "Not interested"],
  ["Aceptada", "Accepted"],
  ["Cancelada", "Canceled"],
  ["Activo", "Active"],
  ["En revisión", "Under review"],
  ["registros", "records"],
  ["cargas", "loads"],
  ["Sin datos", "No data"],
  ["Sin llamadas para los filtros actuales.", "No calls for the current filters."],
  ["Sin resultados para los filtros actuales.", "No results for the current filters."],
  ["Pasa el cursor sobre un resultado", "Hover over a result"],
  ["Pasa el cursor sobre una ciudad", "Hover over a city"],
  ["Resultado operativo registrado.", "Operational outcome recorded."],
  ["Datos actualizados desde el Excel sintetico.", "Data refreshed from the synthetic Excel file."],
  ["Filtros limpiados.", "Filters cleared."],
  ["Vista lista para conectar en la siguiente fase.", "View ready to connect in the next phase."],
  ["Exportacion CSV generada.", "CSV export generated."],
  ["Carga Valencia-Madrid aceptada tras contraoferta de 1.000 euros y handoff creado para confirmacion final.", "Valencia-Madrid load accepted after a EUR 1,000 counteroffer, with handoff created for final confirmation."],
  ["Transportista verificado por OTP; queda pendiente confirmar disponibilidad y tarifa final.", "Carrier verified by OTP; availability and final rate still need confirmation."],
  ["Transportista propone una contraoferta y queda abierta la negociacion con operaciones.", "Carrier proposes a counteroffer and the negotiation remains open with operations."],
  ["La tarifa publicada no encaja y el transportista rechaza continuar con la reserva.", "The posted rate does not work and the carrier declines to continue with the booking."],
  ["Reserva tentativa creada; requiere seguimiento de un senior rep para cerrar la confirmacion.", "Tentative booking created; requires senior rep follow-up to close confirmation."],
  ["No se completa la validacion OTP y la llamada queda bloqueada por verificacion.", "OTP validation is not completed and the call remains blocked by verification."],
  ["Hola. Para poder ayudarte a buscar cargas disponibles, me puedes indicar tu numero MC?", "Hi. To help you find available loads, can you share your MC number?"],
  ["Por supuesto, es", "Sure, it is"],
  ["Autoridad verificada para el numero MC proporcionado.", "Authority verified for the provided MC number."],
  ["Codigo OTP enviado por SMS para continuar con la verificacion.", "OTP code sent by SMS to continue verification."],
  ["Perfecto, te acabo de enviar un codigo OTP por SMS. Me puedes decir el codigo recibido?", "Perfect, I just sent you an OTP code by SMS. Can you tell me the code you received?"],
  ["No lo encuentro ahora mismo, creo que no me ha llegado.", "I cannot find it right now; I do not think it came through."],
  ["Por supuesto, es 123456.", "Sure, it is 123456."],
  ["El flujo queda bloqueado por verificacion incompleta.", "The flow remains blocked because verification is incomplete."],
  ["Codigo verificado correctamente.", "Code verified successfully."],
  ["Desde que provincia quieres cargar, hacia donde te gustaria ir y que tipo de equipo llevas?", "Where do you want to pick up, where would you like to go, and what equipment type do you have?"],
  ["Voy de Valencia a Madrid y tengo una caja seca.", "I am going from Valencia to Madrid and I have a Dry van."],
  ["Carga disponible encontrada para Valencia-Madrid con caja seca.", "Available Valencia-Madrid load found for Dry van."],
  ["Tengo una carga disponible de Valencia a Madrid para el 1 de julio. La tarifa publicada es de 1.250 euros. Te encaja o quieres hacer una contraoferta?", "I have an available Valencia to Madrid load for July 1. The posted rate is EUR 1,250. Does that work, or would you like to make a counteroffer?"],
  ["No, por esa tarifa no me encaja.", "No, that rate does not work for me."],
  ["Me vendria mejor unos 1.000 euros.", "EUR 1,000 would work better for me."],
  ["El transportista rechaza la carga por tarifa.", "The carrier rejects the load because of the rate."],
  ["Contraoferta aceptada y reserva tentativa preparada.", "Counteroffer accepted and tentative booking prepared."],
  ["Reserva tentativa creada y handoff simulado realizado.", "Tentative booking created and simulated handoff completed."],
  ["No se crea handoff final para este resultado.", "No final handoff is created for this outcome."],
  ["No he podido completar la validacion OTP. Vamos a dejar la llamada pendiente para reintentar la verificacion.", "I could not complete OTP validation. We will leave the call pending so verification can be retried."],
  ["Entiendo, dejamos esta carga descartada por tarifa. Gracias por tu tiempo.", "Understood, we will mark this load as declined because of the rate. Thank you for your time."],
  ["La carga queda reservada de forma tentativa por 1.000 euros. Un companero del equipo de ventas contactara para completar la confirmacion final.", "The load is tentatively booked for EUR 1,000. A sales teammate will reach out to complete the final confirmation."],
  ["Reproduccion de audio", "Audio playback"],
  ["Para esta demo de Sergio Passalacqua, no esta disponible la reproduccion de audio.", "Audio playback is not available for this Sergio Passalacqua demo."],
  ["Entendido", "Got it"],
  ["Transcripcion de llamada", "Call transcript"],
  ["Detalle", "Details"],
  ["Resumen", "Summary"],
  ["Inicio", "Start"],
  ["User joined call", "User joined call"],
  ["Hola, buenas.", "Hi there."],
  ["Transportista", "Carrier"],
  ["HappyRobot", "HappyRobot"],
  ["Verificacion", "Verification"],
  ["Respuesta de autoridad", "Authority response"],
  ["OTP", "OTP"],
  ["Respuesta OTP", "OTP response"],
  ["Validacion OTP", "OTP validation"],
  ["Estado de verificacion", "Verification status"],
  ["Busqueda de cargas", "Load search"],
  ["Carga sugerida", "Suggested load"],
  ["Decision comercial", "Commercial decision"],
  ["Resultado operativo", "Operational outcome"],
  ["Lead de seguimiento", "Follow-up lead"],
  ["Agente asignado", "Assigned agent"],
  ["Prioridad", "Priority"],
  ["Alta", "High"],
  ["Media", "Medium"],
  ["Ultima llamada", "Last call"],
  ["Referencia", "Reference"],
  ["Ver transcripcion", "View transcript"],
  ["Reproducir audio", "Play audio"],
  ["Email", "Email"],
  ["Seguimiento", "Follow-up"],
  ["Ranking", "Ranking"],
  ["OTP validado", "OTP validated"],
  ["Normal", "Normal"],
  ["Revisar verificacion", "Review verification"],
  ["Documentos en evaluacion", "Documents under review"],
  ["Invitados sin iniciar", "Invites not started"],
  ["Invitaciones en proceso", "Invitations in progress"],
  ["Completados", "Completed"],
  ["Duracion media de llamadas que terminan aceptadas o en handoff.", "Average duration for calls that end accepted or in handoff."],
  ["Cierre aceptado/handoff", "Accepted/handoff close"],
  ["Validacion o continuidad", "Validation or continuity"],
  ["Seguimiento comercial", "Commercial follow-up"],
  ["Perdidas o bloqueadas", "Lost or blocked"],
  ["Pendientes para rellamada", "Pending callbacks"],
  ["Contraofertas que revisar", "Counteroffers to review"],
  ["OTP fallidos para reintento", "Failed OTPs to retry"],
  ["Rellamar pendientes", "Call back pending"],
  ["Cerrar contraofertas", "Close counteroffers"],
  ["Reintentar OTP", "Retry OTP"],
  ["Escalar handoffs", "Escalate handoffs"],
  ["Llamada entrante", "Inbound call"],
  ["Confirmacion creada", "Confirmation created"],
  ["Contacto conectado", "Contact connected"],
  ["Llamada saliente", "Outbound call"],
  ["Campaña iniciada", "Campaign started"],
  ["Nuevo lead agregado", "New lead added"],
  ["Llamada completada", "Call completed"],
  ["Lead actualizado", "Lead updated"],
  ["Email enviado", "Email sent"],
  ["Todos los segmentos", "All segments"],
  ["Lista para cierre", "Ready to close"],
  ["Requiere confirmacion", "Requires confirmation"],
  ["Revisar motivo de cancelacion", "Review cancellation reason"],
  ["Atacar primero llamadas con contraoferta y duracion superior a 2 minutos.", "Prioritize calls with a counteroffer and duration above 2 minutes."],
  ["Enviar segundo canal OTP por defecto cuando SMS falle o tarde mas de 60s.", "Send a second OTP channel by default when SMS fails or takes more than 60s."],
  ["Aprobar automaticamente contraofertas entre 950 y 1.050 EUR para lanes con score alto.", "Automatically approve counteroffers between EUR 950 and EUR 1,050 for high-score lanes."],
  ["Reintentar OTP por email si SMS falla y no esperar al siguiente contacto.", "Retry OTP by email if SMS fails instead of waiting for the next contact."],
  ["Priorizar llamadas con estado Pendiente antes de nuevas prospecciones.", "Prioritize calls in Pending status before new prospecting."],
  ["Usar este precio como ancla inicial y permitir margen hasta 1.050 EUR si hay urgencia.", "Use this price as the starting anchor and allow margin up to EUR 1,050 when urgent."],
  ["Preparar aprobacion rapida para ofertas en la banda 950-1.050 EUR.", "Prepare fast approval for offers in the EUR 950-1,050 band."],
  ["Priorizar cobertura y crear playbook dedicado para sus lanes.", "Prioritize coverage and create a dedicated playbook for its lanes."],
  ["Revisar motivo operativo, precio y calidad de handoff antes de seguir escalando.", "Review operational reason, price, and handoff quality before escalating further."],
  ["Valor estimado en pendientes + contraofertas abiertas.", "Estimated value in pending calls plus open counteroffers."],
  ["Friccion de verificacion que impide llegar a pricing.", "Verification friction that prevents reaching pricing."],
  ["Contactar hoy y resolver el bloqueo antes de perder la oportunidad.", "Contact today and resolve the blocker before losing the opportunity."],
  ["Mantener en seguimiento y confirmar disponibilidad para la siguiente carga compatible.", "Keep in follow-up and confirm availability for the next compatible load."],
  ["Revisar el ultimo contacto y priorizar seguimiento si el lead esta en seguimiento o nuevo.", "Review the last contact and prioritize follow-up if the lead is in follow-up or new."],
]);

const exactSpanish = new Map([
  ["Operations", "Operaciones"],
  ["Calls", "Llamadas"],
  ["Loads", "Cargas"],
  ["Carriers", "Transportistas"],
  ["Operations Manager", "Gerente de Operaciones"],
  ["Audio playback", "Reproduccion de audio"],
  ["Audio playback is not available for this Sergio Passalacqua demo.", "Para esta demo de Sergio Passalacqua, no esta disponible la reproduccion de audio."],
  ["Got it", "Entendido"],
  ["Call transcript", "Transcripcion de llamada"],
  ["Details", "Detalle"],
  ["Close", "Cerrar"],
  ["Main navigation", "Navegacion principal"],
  ["Switch to English", "Cambiar a ingles"],
  ["Switch to Spanish", "Cambiar a español"],
  ["Language selector", "Selector de idioma"],
  ["Updated: 5 min ago", "Actualizado: hace 5 min"],
  ["Clear", "Limpiar"],
  ["View", "Ver"],
  ["View all", "Ver todas"],
  ["Play call", "Reproducir llamada"],
]);

exactEnglish.forEach((english, spanish) => {
  if (!exactSpanish.has(english)) exactSpanish.set(english, spanish);
});

const regexEnglish = [
  [/^(\d+) llamadas filtradas$/, "$1 filtered calls"],
  [/^(\d+) llamadas$/, "$1 calls"],
  [/^(\d+) clientes$/, "$1 clients"],
  [/^Foco: todo$/, "Focus: all"],
  [/^Foco: (.+)$/, "Focus: $1"],
  [/^(\d+)% del total$/, "$1% of total"],
  [/^(\d+) conversaciones aun pueden convertirse si se atacan hoy\.$/, "$1 conversations can still convert if handled today."],
  [/^(\d+) llamadas bloqueadas o perdidas por rechazo\/OTP\.$/, "$1 calls blocked or lost due to rejection/OTP."],
  [/^(\d+) cierres sobre (\d+) conversaciones con decision economica\.$/, "$1 closes across $2 conversations with a pricing decision."],
  [/^(\d+) cierres en (\d+) llamadas filtradas\.$/, "$1 closes in $2 filtered calls."],
  [/^(\d+) llamadas muestran riesgo de demora o seguimiento\.$/, "$1 calls show delay or follow-up risk."],
  [/^(\d+) contraofertas convergen alrededor de este punto\.$/, "$1 counteroffers converge around this point."],
  [/^(.+) cargas\/mes · score (\d+)\.$/, "$1 loads/month · score $2."],
  [/^Score (\d+) y estado (.+)\.$/, "Score $1 and status $2."],
  [/^(.+) con seguimiento senior diario y alerta si cae el score\.$/, "Protect $1 with daily senior follow-up and an alert if the score drops."],
  [/^Carga en estado (.+) con (.+) cargas mensuales desde (.+) y score comercial (.+)\.$/, "Load in $1 status with $2 monthly loads from $3 and commercial score $4."],
  [/^(.+) acumula (\d+) cargas cerradas con tarifa media de (.+) USD\.$/, "$1 has $2 closed loads with an average rate of USD $3."],
  [/^Por supuesto, es (\d+)\.$/, "Sure, it is $1."],
  [/^(\d+)% cierre$/, "$1% close"],
  [/^(.+) cierre$/, "$1 close"],
  [/^(\d+)% del total filtrado$/, "$1% of filtered total"],
  [/^Hace (\d+) min$/, "$1 min ago"],
  [/^Hace (\d+) h$/, "$1h ago"],
  [/^(.+): resultado confirmado$/, "$1: result confirmed"],
  [/^(.+): resultado rechazado$/, "$1: result rejected"],
  [/^Transcripcion · (.+)$/, "Transcript · $1"],
  [/^Llamada · (.+)$/, "Call · $1"],
  [/^Lead de seguimiento · (.+)$/, "Follow-up lead · $1"],
  [/^Carga · (.+)$/, "Load · $1"],
  [/^Transportista · (.+)$/, "Carrier · $1"],
  [/^Lead · (.+)$/, "Lead · $1"],
  [/^(\d+) · (\d+)%$/, "$1 · $2%"],
];

const regexSpanish = [
  [/^(\d+) filtered calls$/, "$1 llamadas filtradas"],
  [/^(\d+) calls$/, "$1 llamadas"],
  [/^(\d+) clients$/, "$1 clientes"],
  [/^Focus: all$/, "Foco: todo"],
  [/^Focus: (.+)$/, "Foco: $1"],
  [/^(\d+)% of total$/, "$1% del total"],
  [/^(\d+) min ago$/, "Hace $1 min"],
  [/^(\d+)h ago$/, "Hace $1 h"],
  [/^(.+): result confirmed$/, "$1: resultado confirmado"],
  [/^(.+): result rejected$/, "$1: resultado rechazado"],
  [/^Transcript · (.+)$/, "Transcripcion · $1"],
  [/^Call · (.+)$/, "Llamada · $1"],
  [/^Follow-up lead · (.+)$/, "Lead de seguimiento · $1"],
  [/^Load · (.+)$/, "Carga · $1"],
  [/^Carrier · (.+)$/, "Transportista · $1"],
];

function translateCore(text) {
  const exact = state.language === "en" ? exactEnglish : exactSpanish;
  const regexes = state.language === "en" ? regexEnglish : regexSpanish;
  if (exact.has(text)) return exact.get(text);
  for (const [pattern, replacement] of regexes) {
    if (pattern.test(text)) return text.replace(pattern, replacement);
  }
  if (state.language === "en") {
    return text
      .replaceAll("ultimos 7 dias", "last 7 days")
      .replaceAll("con reserva tentativa", "with tentative booking")
      .replaceAll("requieren seguimiento", "require follow-up")
      .replaceAll("click para ver todos", "click to view all")
      .replaceAll("click para filtrar", "click to filter")
      .replaceAll("vs. semana pasada", "vs. last week")
      .replaceAll("vs. mes anterior", "vs. previous month")
      .replaceAll("del total", "of total")
      .replaceAll("caja seca", "Dry van")
      .replaceAll("Caja seca", "Dry van")
      .replaceAll("numero", "number")
      .replaceAll("Numero", "Number");
  }
  return text
    .replaceAll("last 7 days", "ultimos 7 dias")
    .replaceAll("with tentative booking", "con reserva tentativa")
    .replaceAll("require follow-up", "requieren seguimiento")
    .replaceAll("click to view all", "click para ver todos")
    .replaceAll("click to filter", "click para filtrar")
    .replaceAll("vs. last week", "vs. semana pasada")
    .replaceAll("vs. previous month", "vs. mes anterior")
    .replaceAll("of total", "del total");
}

function translateText(value) {
  const text = String(value);
  const trimmed = text.trim();
  if (!trimmed) return text;
  const leading = text.match(/^\s*/)[0];
  const trailing = text.match(/\s*$/)[0];
  return `${leading}${translateCore(trimmed)}${trailing}`;
}

function translateElement(root = document.body) {
  const skipTags = new Set(["SCRIPT", "STYLE", "PRE", "CODE"]);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || skipTags.has(parent.tagName) || parent.closest(".language-switcher")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = translateText(node.nodeValue);
  });
  root.querySelectorAll("[placeholder], [aria-label], [title]").forEach((node) => {
    ["placeholder", "aria-label", "title"].forEach((attr) => {
      if (node.hasAttribute(attr)) node.setAttribute(attr, translateText(node.getAttribute(attr)));
    });
  });
}

function applyLanguageToDom(root = document.body) {
  document.documentElement.lang = state.language;
  document.title = "HappyRobot Logistics | Dashboard";
  document.querySelectorAll('[data-action="language"]').forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  translateElement(root);
  document.querySelector('[data-language="en"]')?.setAttribute("aria-label", state.language === "es" ? "Cambiar a ingles" : "Switch to English");
  document.querySelector('[data-language="es"]')?.setAttribute("aria-label", state.language === "es" ? "Cambiar a español" : "Switch to Spanish");
}

function setLanguage(language) {
  state.language = language === "es" ? "es" : "en";
}

function el(selector) {
  return document.querySelector(selector);
}

function fmt(n) {
  return Number(n).toLocaleString("en-US");
}

function mmss(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function shortDate(value) {
  const date = new Date(value.replace(" ", "T"));
  const day = date.getDate();
  const monthNames = {
    en: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
    es: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."],
  };
  const month = monthNames[state.language][date.getMonth()];
  if (value.includes(":")) {
    return `${day} ${month} 2025, ${date.toLocaleTimeString(state.language === "en" ? "en-US" : "es-ES", { hour: "2-digit", minute: "2-digit" })}`;
  }
  return `${day} ${month}`;
}

function slug(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-");
}

function metric(name) {
  return sourceData.Resumen.find((item) => item.metrica === name);
}

function changeClass(value) {
  return String(value).trim().startsWith("-") ? "negative" : "";
}

function option(value, label, current) {
  return `<option value="${value}" ${String(current) === String(value) ? "selected" : ""}>${label}</option>`;
}

function uniqueOptions(rows, key) {
  return [...new Set(rows.map((row) => row[key]).filter(Boolean))];
}

function filterSelect(label, filterKey, options) {
  return `
    <label class="select-control filter-select">
      <span>${label}</span>
      <select data-filter="${filterKey}">
        ${options.map(([value, text]) => option(value, text, state.filters[filterKey])).join("")}
      </select>
    </label>`;
}

function filterSearch(placeholder) {
  return `<label class="select-control filter-search"><span>⌕</span><input data-search placeholder="${placeholder}" value="${state.query}"></label>`;
}

function kpiCards(items, extraClass = "") {
  return `<section class="kpi-grid ${extraClass}">${items
    .map(
      (item) => {
        const attrs = item.action ? ` data-action="${item.action}" data-status="${item.status || ""}" aria-pressed="${Boolean(item.active)}"` : "";
        return `
        <article class="kpi-card ${item.action ? "clickable-kpi" : ""} ${item.active ? "active" : ""}"${attrs}>
          <span class="kpi-icon" style="background: var(--${item.color || "blue"}-soft); color: var(--${item.color || "blue"})">${item.icon}</span>
          <div>
            <span class="kpi-label">${item.label}</span>
            <strong class="kpi-value">${item.value}</strong>
          </div>
          <span class="kpi-change ${changeClass(item.change)}"><strong>${item.change || "—"}</strong> ${item.ref || ""}</span>
        </article>`;
      }
    )
    .join("")}</section>`;
}

function topbar(extra = "") {
  const [title, subtitle] = pageMeta[state.page];
  return `
    <header class="topbar">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="top-actions">
        ${extra}
        <span>Actualizado: hace 5 min</span>
        <button class="icon-button" type="button" data-action="refresh" aria-label="Actualizar datos">↻</button>
      </div>
    </header>`;
}

function resultsFromCalls(rows = sourceData.Llamadas) {
  return Object.entries(
    rows.reduce((acc, call) => {
      acc[call.resultado] = (acc[call.resultado] || 0) + 1;
      return acc;
    }, {})
  ).map(([label, value]) => ({ label, value, color: resultColors[label] || "#94a3b8" }));
}

function callsTable(rows, limit = rows.length) {
  return `
    <div class="table-scroll">
      <table>
        <thead><tr><th>Fecha y hora</th><th>Transportista</th><th>Telefono</th><th>Resultado</th><th>Transcripcion</th><th>Agente</th><th>Duracion</th><th>Grabacion</th></tr></thead>
        <tbody>${rows
          .slice(0, limit)
          .map(
            (call) => `
              <tr class="clickable-row" data-detail-type="call" data-detail-id="${sourceData.Llamadas.indexOf(call)}">
                <td>${shortDate(call.fecha_hora)}</td>
                <td>${call.transportista}</td>
                <td>${call.telefono}</td>
                <td><span class="badge ${slug(call.resultado)}">${call.resultado}</span></td>
                <td><span class="transcript-preview">${call.resumen}</span><button class="text-link transcript-link" type="button" data-action="transcript" data-call="${sourceData.Llamadas.indexOf(call)}">Ver</button></td>
                <td>${call.agente}</td>
                <td>${mmss(call.duracion_seg)}</td>
                <td><button class="play-button" type="button" data-action="audio" aria-label="Reproducir llamada">▶</button></td>
              </tr>`
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function queuePanel() {
  const pending = state.queue.filter((item) => item.status === "pending");
  return `
    <aside class="queue-panel">
      <div class="queue-head">
        <div>
          <h2>Cola de confirmacion</h2>
          <p>Confirma o rechaza los resultados pendientes para mantener tus datos actualizados.</p>
        </div>
        <span>${pending.length + 7}</span>
      </div>
      <div class="queue-list">${pending
        .map(
          (item) => `
            <article class="queue-item">
              <div>
                <h3>${item.name}</h3>
                <p>${item.lane}</p>
                <div class="queue-meta"><span>${item.agent}</span><span>${item.time}</span></div>
              </div>
              <div class="queue-actions">
                <button class="approve" type="button" data-action="queue" data-id="${item.id}" data-value="approved">✓</button>
                <button class="reject" type="button" data-action="queue" data-id="${item.id}" data-value="rejected">×</button>
              </div>
            </article>`
        )
        .join("")}</div>
    </aside>`;
}

function analyticsCards(includeQueue = false) {
  const cards = [
    { icon: "☎", color: "blue", label: "Llamadas realizadas", ...metricCard("Llamadas realizadas") },
    { icon: "⊙", color: "orange", label: "Contactos conectados", ...metricCard("Contactos conectados") },
    { icon: "♙", color: "blue", label: "Tasa de contacto", ...metricCard("Tasa de contacto") },
    { icon: "✓", color: "green", label: "Confirmaciones", ...metricCard("Confirmaciones") },
    { icon: "★", color: "orange", label: "Tasa de confirmación", ...metricCard("Tasa de confirmación") },
  ];
  if (includeQueue) cards.push({ icon: "♙", color: "orange", label: "Cola de confirmación", value: metric("Cola de confirmación").valor, change: metric("Cola de confirmación").variacion, ref: "pendientes" });
  return kpiCards(cards);
}

function metricCard(name) {
  const item = metric(name);
  return { value: item.valor, change: item.variacion, ref: item.referencia };
}

function pct(value, total) {
  if (!total) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function opsMetric(label, value, sub, color, bar) {
  return `
    <article class="ops-metric">
      <div>
        <span class="ops-dot" style="background: var(--${color})"></span>
        <small>${label}</small>
      </div>
      <strong>${value}</strong>
      <p>${sub}</p>
      <span class="ops-metric-bar"><i style="width:${Math.max(0, Math.min(100, bar))}%"></i></span>
    </article>`;
}

function progressRow(label, value, total, color = "blue") {
  const width = total ? Math.round((value / total) * 100) : 0;
  return `
    <div class="ops-progress-row">
      <div><span>${label}</span><strong>${value}</strong></div>
      <i><b class="${color}" style="width:${width}%"></b></i>
      <small>${pct(value, total)} del total filtrado</small>
    </div>`;
}

function insightCard(title, value, tag, detail, tone = "blue") {
  return `
    <article class="ops-insight-card ${tone}">
      <span>${tag}</span>
      <strong>${value}</strong>
      <h3>${title}</h3>
      <p>${detail}</p>
    </article>`;
}

function operationalMetrics(calls) {
  const total = calls.length;
  const counts = countBy(calls, "resultado");
  const accepted = counts.Aceptado || 0;
  const pending = counts.Pendiente || 0;
  const counter = counts.Contraoferta || 0;
  const rejected = counts.Rechazado || 0;
  const handoff = counts.Handoff || 0;
  const otpFail = counts["Fallo OTP"] || 0;
  const closed = accepted + handoff;
  const followUp = pending + counter;
  const blocked = rejected + otpFail;
  const avgDuration = total ? Math.round(calls.reduce((sum, call) => sum + call.duracion_seg, 0) / total) : 0;
  const closedCalls = calls.filter((call) => ["Aceptado", "Handoff"].includes(call.resultado));
  const avgClosedDuration = closedCalls.length ? Math.round(closedCalls.reduce((sum, call) => sum + call.duracion_seg, 0) / closedCalls.length) : 0;
  const reservedValue = closed * 1000;
  const recoveryValue = followUp * 1000;
  const leakageValue = blocked * 1000;
  const negotiationBase = closed + counter + rejected;
  const negotiationWin = pct(closed, negotiationBase);
  const slaRisk = calls.filter((call) => call.duracion_seg > 300 || call.resultado === "Pendiente").length;
  const operationScore = Math.max(0, Math.min(100, Math.round(50 + (closed * 9 + followUp * 3 - blocked * 7 - otpFail * 4) / Math.max(total, 1))));
  const agentRows = Object.entries(countBy(calls, "agente"))
    .map(([agent, count]) => {
      const agentCalls = calls.filter((call) => call.agente === agent);
      const agentClosed = agentCalls.filter((call) => ["Aceptado", "Handoff"].includes(call.resultado)).length;
      return { agent, count, closed: agentClosed, rateValue: count ? agentClosed / count : 0, rate: pct(agentClosed, count) };
    })
    .sort((a, b) => b.count - a.count);
  const bestAgent = [...agentRows].sort((a, b) => b.rateValue - a.rateValue || b.count - a.count)[0];
  const nextMove = pending ? "Rellamar pendientes" : counter ? "Cerrar contraofertas" : otpFail ? "Reintentar OTP" : "Escalar handoffs";

  return `
    <section class="panel ops-detail-panel">
      <div class="panel-header">
        <h2>Metricas operativas detalladas</h2>
        <span class="count-pill">${total} llamadas filtradas</span>
      </div>
      <div class="ops-insights-grid">
        ${insightCard("Pipeline recuperable", `${fmt(recoveryValue)} EUR`, "Oportunidad", `${followUp} conversaciones aun pueden convertirse si se atacan hoy.`, "green")}
        ${insightCard("Fuga potencial", `${fmt(leakageValue)} EUR`, "Riesgo", `${blocked} llamadas bloqueadas o perdidas por rechazo/OTP.`, "red")}
        ${insightCard("Win-rate negociacion", negotiationWin, "Pricing", `${closed} cierres sobre ${negotiationBase} conversaciones con decision economica.`, "blue")}
        ${insightCard("Velocidad a reserva", avgClosedDuration ? mmss(avgClosedDuration) : "0:00", "Eficiencia", "Duracion media de llamadas que terminan aceptadas o en handoff.", "purple")}
        ${insightCard("Agente con mas impacto", bestAgent ? bestAgent.agent : "Sin datos", bestAgent ? `${bestAgent.rate} cierre` : "Sin datos", bestAgent ? `${bestAgent.closed} cierres en ${bestAgent.count} llamadas filtradas.` : "No hay llamadas en este filtro.", "orange")}
        ${insightCard("Prioridad automatica", nextMove, `${operationScore}/100`, `${slaRisk} llamadas muestran riesgo de demora o seguimiento.`, "blue")}
      </div>
      <div class="ops-metrics-grid">
        ${opsMetric("Cierre operativo", pct(closed, total), `${closed} aceptadas o handoff`, "green", total ? (closed / total) * 100 : 0)}
        ${opsMetric("Pendientes", pending, "requieren seguimiento", "orange", total ? (pending / total) * 100 : 0)}
        ${opsMetric("Contraofertas", counter, "negociacion abierta", "blue", total ? (counter / total) * 100 : 0)}
        ${opsMetric("Fallo OTP", otpFail, "bloqueadas por verificacion", "red", total ? (otpFail / total) * 100 : 0)}
        ${opsMetric("Duracion media", mmss(avgDuration), "tiempo medio por llamada", "purple", Math.min(100, (avgDuration / 420) * 100))}
        ${opsMetric("Valor reservado", `${fmt(reservedValue)} EUR`, "tarifa demo de 1.000 EUR", "green", Math.min(100, closed * 18))}
        ${opsMetric("Backlog activo", followUp, "pendientes + contraofertas", "orange", total ? (followUp / total) * 100 : 0)}
        ${opsMetric("Bloqueos", blocked, "rechazos + OTP fallido", "red", total ? (blocked / total) * 100 : 0)}
      </div>
      <div class="ops-breakdown-grid">
        <article>
          <h3>Funnel operativo</h3>
          ${progressRow("Validacion o continuidad", total - otpFail, total, "blue")}
          ${progressRow("Cierre aceptado/handoff", closed, total, "green")}
          ${progressRow("Seguimiento comercial", followUp, total, "orange")}
          ${progressRow("Perdidas o bloqueadas", blocked, total, "red")}
        </article>
        <article>
          <h3>Por agente</h3>
          <div class="ops-agent-list">
            ${agentRows.length ? agentRows.map((row) => `<div><span>${row.agent}</span><strong>${row.count}</strong><small>${row.rate} cierre</small></div>`).join("") : `<p class="empty-state">Sin llamadas para los filtros actuales.</p>`}
          </div>
        </article>
        <article>
          <h3>Acciones inmediatas</h3>
          <div class="ops-action-list">
            <div><strong>${pending}</strong><span>Pendientes para rellamada</span></div>
            <div><strong>${counter}</strong><span>Contraofertas que revisar</span></div>
            <div><strong>${otpFail}</strong><span>OTP fallidos para reintento</span></div>
          </div>
        </article>
      </div>
    </section>`;
}

function renderResumen() {
  el("#pageContent").innerHTML = `
    ${topbar()}
    ${analyticsCards(true)}
    <section class="page-grid with-queue">
      <div class="content-column">
        <section class="chart-row">
          <article class="panel">
            <div class="panel-header"><h2>Llamadas realizadas <span class="muted">(ultimos 7 dias)</span></h2><select><option>7 dias</option></select></div>
            <div class="line-chart-wrap"><canvas id="lineChart"></canvas></div>
          </article>
          ${resultsPanel()}
        </section>
        <article class="panel">
          <div class="panel-header"><h2>Ultimas llamadas</h2><button class="text-link" type="button" data-page="llamadas">Ver todas <span>→</span></button></div>
          ${callsTable(sourceData.Llamadas, 5)}
        </article>
      </div>
      ${queuePanel()}
    </section>`;
  drawLineChart(sourceData.Analitica.map((d) => ({ label: shortDate(d.fecha), value: d.llamadas_realizadas })), "lineChart");
  drawDonut(resultsFromCalls(), "donutChart");
}

function resultsPanel(rows = sourceData.Llamadas) {
  const donutData = resultsFromCalls(rows);
  const total = donutData.reduce((sum, item) => sum + item.value, 0);
  const selectedSegment = donutData.find((item) => item.label === state.resultSegment);
  const centerValue = selectedSegment ? selectedSegment.value : total;
  const centerLabel = selectedSegment && total ? `${Math.round((selectedSegment.value / total) * 100)}% del total` : "registros";
  return `
    <article class="panel donut-panel compact-donut-panel">
      <div class="panel-header"><h2>Resultados de llamadas</h2></div>
      <div class="donut-content compact-donut-content">
        <div class="donut-wrap"><canvas id="donutChart"></canvas><div class="donut-center"><strong>${fmt(centerValue)}</strong><span>${centerLabel}</span></div></div>
        <div class="legend compact-legend" id="resultLegend">${resultLegend(donutData, total)}</div>
      </div>
    </article>`;
}

function renderAnalitica() {
  const calls = filteredAnalyticsCalls();
  el("#pageContent").innerHTML = `
    ${topbar()}
    ${analyticsCards()}
    ${operationalMetrics(calls)}
    <section class="filters filters-rich filters-in-flow">
      ${filterSelect("Metrica", "analyticsMetric", [["llamadas_realizadas", "Llamadas por dia"], ["contactos_conectados", "Leads conectados"], ["confirmaciones", "Confirmaciones por dia"]])}
      ${filterSelect("Resultado", "analyticsResult", [["all", "Todos"], ...uniqueOptions(sourceData.Llamadas, "resultado").map((x) => [x, x])])}
      ${filterSelect("Agente", "analyticsAgent", [["all", "Todos"], ...uniqueOptions(sourceData.Llamadas, "agente").map((x) => [x, x])])}
      ${filterSearch("Buscar transportista o telefono")}
      <button class="filter-button" type="button" data-action="clearFilters">Limpiar</button>
    </section>
    <section class="page-grid with-queue">
      <div class="content-column">
        <section class="chart-row">
          <article class="panel">
            <div class="panel-header"><h2>Llamadas realizadas <span class="muted">(ultimos 7 dias)</span></h2></div>
            <div class="line-chart-wrap"><canvas id="lineChart"></canvas></div>
          </article>
          ${resultsPanel(calls)}
        </section>
        <article class="panel"><div class="panel-header"><h2>Ultimas llamadas</h2><button class="text-link" type="button" data-page="llamadas">Ver todas <span>→</span></button></div>${callsTable(calls, 5)}</article>
      </div>
      ${queuePanel()}
    </section>`;
  drawLineChart(sourceData.Analitica.map((d) => ({ label: shortDate(d.fecha), value: d[state.filters.analyticsMetric] })), "lineChart");
  drawDonut(resultsFromCalls(calls), "donutChart");
}

function eventsTable() {
  const events = sourceData.Llamadas.slice(0, 5).map((call, index) => ({
    date: shortDate(call.fecha_hora),
    event: ["Llamada entrante", "Confirmacion creada", "Contacto conectado", "Llamada saliente", "Campaña iniciada"][index],
    detail: index === 4 ? "Spot Market Semana 20" : call.telefono,
  }));
  return `<div class="table-scroll"><table><thead><tr><th>Fecha y hora</th><th>Evento</th><th>Detalle</th></tr></thead><tbody>${events.map((e) => `<tr><td>${e.date}</td><td>${e.event}</td><td>${e.detail}</td></tr>`).join("")}</tbody></table></div>`;
}

function renderLlamadas() {
  const rows = filtered(sourceData.Llamadas, ["transportista", "telefono", "agente", "resultado"]);
  const avg = Math.round(sourceData.Llamadas.reduce((sum, c) => sum + c.duracion_seg, 0) / sourceData.Llamadas.length);
  const accepted = sourceData.Llamadas.filter((c) => c.resultado === "Aceptado").length;
  const pending = sourceData.Llamadas.filter((c) => c.resultado === "Pendiente").length;
  el("#pageContent").innerHTML = `
    ${topbar()}
    <section class="filters filters-rich">
      ${filterSearch("Buscar transportista, telefono o agente")}
      ${filterSelect("Resultado", "callsResult", [["all", "Todos"], ...uniqueOptions(sourceData.Llamadas, "resultado").map((x) => [x, x])])}
      ${filterSelect("Agente", "callsAgent", [["all", "Todos"], ...uniqueOptions(sourceData.Llamadas, "agente").map((x) => [x, x])])}
      ${filterSelect("Duracion", "callsDuration", [["all", "Todas"], ["short", "< 2 min"], ["medium", "2-5 min"], ["long", "> 5 min"]])}
      <button class="filter-button" type="button" data-action="clearFilters">Limpiar</button>
    </section>
    ${kpiCards([
      { icon: "☎", color: "blue", label: "Total de llamadas", value: metric("Llamadas realizadas").valor, change: "+18%", ref: "vs. semana pasada" },
      { icon: "◷", color: "orange", label: "Promedio duracion", value: mmss(avg), change: "+9%", ref: "vs. semana pasada" },
      { icon: "✓", color: "green", label: "Aceptadas", value: accepted, change: "+21%", ref: "con reserva tentativa" },
      { icon: "◷", color: "orange", label: "Pendientes", value: pending, change: "+2", ref: "requieren seguimiento" },
    ], "calls-kpis")}
    <section class="page-grid detail-grid">
      <article class="panel large-panel">
        <div class="panel-header"><h2>Historial de llamadas <span class="count-pill">${rows.length}</span></h2></div>
        ${callsTable(rows, 10)}
      </article>
      <aside class="side-stack">
        <article class="panel"><div class="panel-header"><h2>Seguimientos de hoy</h2><span class="count-pill">${Math.min(8, rows.length)}</span></div>${followUps()}</article>
        ${resultsPanel(rows)}
      </aside>
    </section>`;
  drawDonut(resultsFromCalls(rows), "donutChart");
}

function followUps() {
  return `<div class="mini-list">${sourceData.Llamadas.slice(0, 5).map((c) => `<div class="mini-row follow-up-row"><span>${shortDate(c.fecha_hora).split(", ")[1] || "Hoy"}</span><div class="follow-up-info"><strong>${c.transportista}</strong><small>${c.agente}</small></div><button class="play-button" type="button" data-action="leadInfo" data-call="${sourceData.Llamadas.indexOf(c)}" aria-label="Ver informacion de ${c.transportista}">☎</button></div>`).join("")}</div>`;
}

function renderContactos() {
  const rows = filtered(sourceData.Contactos, ["contacto", "empresa", "telefono", "email", "estado"]);
  const counts = countBy(sourceData.Contactos, "estado");
  el("#pageContent").innerHTML = `
    ${topbar()}
    ${kpiCards([
      { icon: "♙", color: "blue", label: "Leads totales", value: sourceData.Contactos.length, change: "—", ref: "click para ver todos", action: "contactSegment", status: "all", active: state.filters.contactsStatus === "all" },
      { icon: "+", color: "purple", label: "Nuevos", value: counts.Nuevo || 0, change: "+50%", ref: "click para filtrar", action: "contactSegment", status: "Nuevo", active: state.filters.contactsStatus === "Nuevo" },
      { icon: "◷", color: "green", label: "En seguimiento", value: counts["En seguimiento"] || 0, change: "+33%", ref: "click para filtrar", action: "contactSegment", status: "En seguimiento", active: state.filters.contactsStatus === "En seguimiento" },
      { icon: "★", color: "orange", label: "Calificados", value: counts.Calificado || 0, change: "+100%", ref: "click para filtrar", action: "contactSegment", status: "Calificado", active: state.filters.contactsStatus === "Calificado" },
    ])}
    <section class="filters filters-rich">
      ${filterSearch("Buscar lead, empresa o email")}
      ${filterSelect("Estado", "contactsStatus", [["all", "Todos"], ...uniqueOptions(sourceData.Contactos, "estado").map((x) => [x, x])])}
      ${filterSelect("Owner", "contactsOwner", [["all", "Todos"], ["Ana Gómez", "Ana Gómez"], ["Carlos Méndez", "Carlos Méndez"], ["Sofía Rivera", "Sofía Rivera"]])}
      <button class="filter-button" type="button" data-action="clearFilters">Limpiar</button>
    </section>
    <section class="page-grid detail-grid">
      <article class="panel large-panel">
        <div class="panel-header"><h2>Todos los leads <span class="count-pill">${rows.length}</span></h2></div>
        <div class="table-scroll"><table><thead><tr><th>Lead</th><th>Empresa</th><th>Telefono</th><th>Email</th><th>Estado</th><th>Ultimo contacto</th><th>Owner</th></tr></thead><tbody>
          ${rows.map((c) => `<tr class="clickable-row" data-detail-type="lead" data-detail-id="${sourceData.Contactos.indexOf(c)}"><td><span class="avatar tiny">${initials(c.contacto)}</span> ${c.contacto}</td><td>${c.empresa}</td><td>${c.telefono}</td><td>${c.email}</td><td><span class="badge ${slug(c.estado)}">${c.estado}</span></td><td>${shortDate(c.ultimo_contacto)}</td><td>${ownerForContact(c)}</td></tr>`).join("")}
        </tbody></table></div>
      </article>
      <aside class="side-stack">
        <article class="panel"><div class="panel-header"><h2>Segmentos</h2></div>${segmentList(counts, sourceData.Contactos.length)}</article>
        <article class="panel"><div class="panel-header"><h2>Actividad reciente</h2></div>${activityList()}</article>
      </aside>
    </section>`;
}

function renderCargadores() {
  const rows = filtered(sourceData.Cargadores, ["cargador", "ciudad_origen", "estado"]);
  const accepted = sourceData.Cargadores.filter((s) => s.estado === "Aceptada").length;
  const pending = sourceData.Cargadores.filter((s) => s.estado === "Pendiente").length;
  const canceled = sourceData.Cargadores.filter((s) => s.estado === "Cancelada").length;
  const volume = sourceData.Cargadores.reduce((sum, s) => sum + s.volumen_mensual_cargas, 0);
  const shipperDonutData = sourceData.Cargadores.map((s) => ({ label: s.ciudad_origen, shortLabel: shortCity(s.ciudad_origen), value: s.volumen_mensual_cargas, color: colorFor(s.ciudad_origen) }));
  const selectedSegment = shipperDonutData.find((item) => item.label === state.shipperSegment);
  const centerValue = selectedSegment ? selectedSegment.value : volume;
  const centerLabel = selectedSegment ? `${Math.round((selectedSegment.value / volume) * 100)}% del total` : "cargas";
  el("#pageContent").innerHTML = `
    ${topbar()}
    ${kpiCards([
      { icon: "✓", color: "green", label: "Cargas aceptadas", value: accepted, change: "+20%", ref: "vs. mes anterior" },
      { icon: "◷", color: "orange", label: "Cargas pendientes", value: pending, change: "+33%", ref: "vs. mes anterior" },
      { icon: "×", color: "red", label: "Cargas canceladas", value: canceled, change: "-8%", ref: "vs. mes anterior" },
      { icon: "▧", color: "blue", label: "Volumen mensual", value: fmt(volume), change: "+14%", ref: "vs. mes anterior" },
    ])}
    <section class="filters filters-rich">
      ${filterSearch("Buscar cargador o ciudad")}
      ${filterSelect("Estado", "shippersStatus", [["all", "Todos"], ...uniqueOptions(sourceData.Cargadores, "estado").map((x) => [x, x])])}
      ${filterSelect("Ciudad", "shippersCity", [["all", "Todas"], ...uniqueOptions(sourceData.Cargadores, "ciudad_origen").map((x) => [x, x])])}
      ${filterSelect("Score", "shippersScore", [["all", "Todos"], ["high", "85+"], ["medium", "75-84"], ["low", "< 75"]])}
      <button class="filter-button" type="button" data-action="clearFilters">Limpiar</button>
    </section>
    <section class="page-grid detail-grid">
      <article class="panel large-panel">${shipperTable(rows)}</article>
      <aside class="side-stack">
        <article class="panel"><div class="panel-header"><h2>Top cargas</h2></div>${ranking(sourceData.Cargadores, "cargador", "score_relacion")}</article>
        <article class="panel donut-panel compact-donut-panel">
          <div class="panel-header"><h2>Concentracion por ciudad origen</h2></div>
          <div class="donut-content compact-donut-content">
            <div class="donut-wrap"><canvas id="shipperDonut"></canvas><div class="donut-center"><strong>${fmt(centerValue)}</strong><span>${centerLabel}</span></div></div>
            <div class="legend compact-legend" id="shipperLegend">${shipperLegend(shipperDonutData, volume)}</div>
          </div>
        </article>
      </aside>
    </section>`;
  drawShipperDonut(shipperDonutData, "shipperDonut");
}

function shipperTable(rows) {
  return `<div class="panel-header"><h2>Cargas</h2></div><div class="table-scroll"><table><thead><tr><th>Cuenta</th><th>Ciudad origen</th><th>Volumen mensual de cargas</th><th>Score de relacion</th><th>Estado</th></tr></thead><tbody>${rows.map((s) => `<tr class="clickable-row" data-detail-type="load" data-detail-id="${sourceData.Cargadores.indexOf(s)}"><td><span class="logo-chip">${s.cargador[0]}</span>${s.cargador}</td><td>${s.ciudad_origen}</td><td>${s.volumen_mensual_cargas}</td><td><strong>${s.score_relacion}</strong> ${stars(s.score_relacion)}</td><td><span class="badge ${slug(s.estado)}">${s.estado}</span></td></tr>`).join("")}</tbody></table></div>`;
}

function renderTransportistas() {
  const rows = filtered(sourceData.Transportistas, ["transportista", "estado", "mc_numero"]);
  const active = sourceData.Transportistas.filter((c) => c.estado === "Activo").length;
  const review = sourceData.Transportistas.filter((c) => c.estado === "En revisión").length;
  const closed = sourceData.Transportistas.reduce((sum, c) => sum + c.cargas_cerradas, 0);
  const rate = Math.round(sourceData.Transportistas.reduce((sum, c) => sum + c.tarifa_promedio_usd, 0) / sourceData.Transportistas.length);
  el("#pageContent").innerHTML = `
    ${topbar()}
    ${kpiCards([
      { icon: "♙", color: "blue", label: "Transportistas activos", value: active, change: "+16%", ref: "vs. semana pasada" },
      { icon: "◷", color: "orange", label: "En revision", value: review, change: "-20%", ref: "vs. semana pasada" },
      { icon: "▣", color: "green", label: "MC verificados", value: sourceData.Transportistas.length, change: "+14%", ref: "vs. semana pasada" },
      { icon: "▧", color: "blue", label: "Cargas cerradas", value: closed, change: "+18%", ref: "vs. semana pasada" },
      { icon: "$", color: "orange", label: "Tarifa promedio", value: `${fmt(rate)} USD`, change: "+8%", ref: "vs. semana pasada" },
    ])}
    <section class="filters filters-rich">
      ${filterSearch("Buscar transportista o MC")}
      ${filterSelect("Estado", "carriersStatus", [["all", "Todos"], ...uniqueOptions(sourceData.Transportistas, "estado").map((x) => [x, x])])}
      ${filterSelect("OTP", "carriersOtp", [["all", "Todos"], ["high", "80%+"], ["medium", "70-79%"], ["low", "< 70%"]])}
      ${filterSelect("Tarifa", "carriersRate", [["all", "Todas"], ["low", "< 2,100 USD"], ["mid", "2,100-2,299 USD"], ["high", "2,300+ USD"]])}
      <button class="filter-button" type="button" data-action="clearFilters">Limpiar</button>
    </section>
    <section class="page-grid detail-grid">
      <article class="panel large-panel">
        <div class="panel-header"><h2>Resumen de transportistas <span class="count-pill">${rows.length}</span></h2></div>
        <div class="table-scroll"><table><thead><tr><th>Transportista</th><th>MC numero</th><th>OTP validado %</th><th>Cargas cerradas</th><th>Tarifa promedio</th><th>Estado</th></tr></thead><tbody>${rows.map((c) => `<tr class="clickable-row" data-detail-type="carrier" data-detail-id="${sourceData.Transportistas.indexOf(c)}"><td><span class="logo-chip">${c.transportista[0]}</span>${c.transportista}</td><td>MC ${c.mc_numero}</td><td><span class="bar"><i style="width:${c.otp_validado_pct}%"></i></span>${c.otp_validado_pct}%</td><td>${c.cargas_cerradas}</td><td>${fmt(c.tarifa_promedio_usd)} USD</td><td><span class="badge ${slug(c.estado)}">${c.estado}</span></td></tr>`).join("")}</tbody></table></div>
      </article>
      <aside class="side-stack">
        <article class="panel"><div class="panel-header"><h2>Verificacion y onboarding</h2></div>${onboarding()}</article>
        <article class="panel"><div class="panel-header"><h2>Rendimiento de OTP validado</h2></div><strong class="big-number">${Math.round(sourceData.Transportistas.reduce((s, c) => s + c.otp_validado_pct, 0) / sourceData.Transportistas.length)}%</strong><div class="line-chart-wrap small"><canvas id="otpChart"></canvas></div></article>
      </aside>
    </section>`;
  drawLineChart(sourceData.Transportistas.map((c) => ({ label: c.transportista.split(" ")[0], value: c.otp_validado_pct })), "otpChart", 100);
}

function syntheticRate(call) {
  const index = sourceData.Llamadas.indexOf(call);
  if (call.resultado === "Aceptado" || call.resultado === "Handoff") return 1000 + (index % 3) * 50;
  if (call.resultado === "Contraoferta") return [950, 1000, 1050][index % 3];
  if (call.resultado === "Rechazado") return 1250;
  return 1100;
}

function modeValue(values) {
  const counts = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 0;
}

function intelligenceCard(label, value, insight, action, tone = "blue") {
  return `
    <article class="intel-card ${tone}" tabindex="0">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${insight}</p>
      <div class="intel-hover"><b>Siguiente accion</b>${action}</div>
    </article>`;
}

function filteredIntelligenceCalls() {
  const q = state.query.trim().toLowerCase();
  return sourceData.Llamadas.filter((call) => {
    const matchesQuery = !q || [call.transportista, call.telefono, call.agente, call.resultado].some((value) => String(value).toLowerCase().includes(q));
    const matchesResult = state.filters.intelResult === "all" || call.resultado === state.filters.intelResult;
    const matchesAgent = state.filters.intelAgent === "all" || call.agente === state.filters.intelAgent;
    const matchesFocus =
      state.filters.intelFocus === "all" ||
      (state.filters.intelFocus === "pricing" && ["Aceptado", "Contraoferta", "Handoff"].includes(call.resultado)) ||
      (state.filters.intelFocus === "risk" && ["Fallo OTP", "Rechazado", "Pendiente"].includes(call.resultado)) ||
      (state.filters.intelFocus === "opportunity" && ["Pendiente", "Contraoferta"].includes(call.resultado));
    return matchesQuery && matchesResult && matchesAgent && matchesFocus;
  });
}

function filteredIntelligenceClients() {
  const q = state.query.trim().toLowerCase();
  return sourceData.Cargadores.filter((client) => {
    const matchesQuery = !q || [client.cargador, client.ciudad_origen, client.estado].some((value) => String(value).toLowerCase().includes(q));
    const matchesClient = state.filters.intelClient === "all" || client.cargador === state.filters.intelClient;
    const matchesFocus =
      state.filters.intelFocus === "all" ||
      state.filters.intelFocus === "pricing" ||
      (state.filters.intelFocus === "risk" && (client.score_relacion < 80 || client.estado === "Cancelada")) ||
      (state.filters.intelFocus === "opportunity" && client.estado !== "Cancelada");
    return matchesQuery && matchesClient && matchesFocus;
  });
}

function renderIntelligence() {
  const calls = filteredIntelligenceCalls();
  const clients = filteredIntelligenceClients();
  const closedCalls = calls.filter((call) => ["Aceptado", "Handoff"].includes(call.resultado));
  const counterCalls = calls.filter((call) => call.resultado === "Contraoferta");
  const acceptedAvg = closedCalls.length ? Math.round(closedCalls.reduce((sum, call) => sum + syntheticRate(call), 0) / closedCalls.length) : 0;
  const repeatedCounter = Number(modeValue(counterCalls.map(syntheticRate)));
  const bestClient = [...clients].sort((a, b) => b.volumen_mensual_cargas * b.score_relacion - a.volumen_mensual_cargas * a.score_relacion)[0] || sourceData.Cargadores[0];
  const worstClient = [...clients].sort((a, b) => a.score_relacion - b.score_relacion || a.volumen_mensual_cargas - b.volumen_mensual_cargas)[0] || sourceData.Cargadores[0];
  const otpFails = calls.filter((call) => call.resultado === "Fallo OTP").length;
  const pendingValue = calls.filter((call) => ["Pendiente", "Contraoferta"].includes(call.resultado)).length * (repeatedCounter || 1000);
  const agentRows = Object.entries(countBy(calls, "agente"))
    .map(([agent, count]) => {
      const rows = calls.filter((call) => call.agente === agent);
      const closed = rows.filter((call) => ["Aceptado", "Handoff"].includes(call.resultado)).length;
      return { agent, count, closed, rate: count ? closed / count : 0 };
    })
    .sort((a, b) => b.rate - a.rate || b.closed - a.closed);

  el("#pageContent").innerHTML = `
    ${topbar()}
    <section class="filters filters-rich intel-filters">
      ${filterSearch("Buscar cliente, transportista o agente")}
      ${filterSelect("Resultado", "intelResult", [["all", "Todos"], ...uniqueOptions(sourceData.Llamadas, "resultado").map((x) => [x, x])])}
      ${filterSelect("Agente", "intelAgent", [["all", "Todos"], ...uniqueOptions(sourceData.Llamadas, "agente").map((x) => [x, x])])}
      ${filterSelect("Cliente", "intelClient", [["all", "Todos"], ...uniqueOptions(sourceData.Cargadores, "cargador").map((x) => [x, x])])}
      ${filterSelect("Foco", "intelFocus", [["all", "Todo"], ["pricing", "Pricing"], ["risk", "Riesgo"], ["opportunity", "Oportunidad"]])}
      <button class="filter-button" type="button" data-action="clearFilters">Limpiar</button>
    </section>
    <div class="intel-scope"><span>${calls.length} llamadas</span><span>${clients.length} clientes</span><span>Foco: ${state.filters.intelFocus === "all" ? "todo" : state.filters.intelFocus}</span></div>
    <section class="intel-grid">
      ${intelligenceCard("Precio aceptado medio", `${fmt(acceptedAvg)} EUR`, "Referencia realista de cierre para lanes similares.", "Usar este precio como ancla inicial y permitir margen hasta 1.050 EUR si hay urgencia.", "green")}
      ${intelligenceCard("Contraoferta mas repetida", `${fmt(repeatedCounter)} EUR`, `${counterCalls.length} contraofertas convergen alrededor de este punto.`, "Preparar aprobacion rapida para ofertas en la banda 950-1.050 EUR.", "blue")}
      ${intelligenceCard("Mejor cliente", bestClient.cargador, `${fmt(bestClient.volumen_mensual_cargas)} cargas/mes · score ${bestClient.score_relacion}.`, "Priorizar cobertura y crear playbook dedicado para sus lanes.", "purple")}
      ${intelligenceCard("Cliente con riesgo", worstClient.cargador, `Score ${worstClient.score_relacion} y estado ${worstClient.estado.toLowerCase()}.`, "Revisar motivo operativo, precio y calidad de handoff antes de seguir escalando.", "red")}
      ${intelligenceCard("Revenue recuperable", `${fmt(pendingValue)} EUR`, "Valor estimado en pendientes + contraofertas abiertas.", "Atacar primero llamadas con contraoferta y duracion superior a 2 minutos.", "orange")}
      ${intelligenceCard("Riesgo OTP", `${otpFails} bloqueos`, "Friccion de verificacion que impide llegar a pricing.", "Enviar segundo canal OTP por defecto cuando SMS falle o tarde mas de 60s.", "red")}
    </section>
    <section class="intel-layout">
      <article class="panel">
        <div class="panel-header"><h2>Ranking senior de agentes</h2></div>
        <div class="intel-ranking">${agentRows.length ? agentRows.map((row, index) => `<div><span>${index + 1}</span><strong>${row.agent}</strong><i><b style="width:${Math.round(row.rate * 100)}%"></b></i><em>${Math.round(row.rate * 100)}% cierre</em></div>`).join("") : `<p class="empty-state">Sin llamadas para los filtros actuales.</p>`}</div>
      </article>
      <article class="panel">
        <div class="panel-header"><h2>Playbook recomendado</h2></div>
        <div class="intel-playbook">
          <button type="button" data-action="toast"><strong>Pricing</strong><span>Aprobar automaticamente contraofertas entre 950 y 1.050 EUR para lanes con score alto.</span></button>
          <button type="button" data-action="toast"><strong>Clientes</strong><span>Blindar ${bestClient.cargador} con seguimiento senior diario y alerta si cae el score.</span></button>
          <button type="button" data-action="toast"><strong>Riesgo</strong><span>Reintentar OTP por email si SMS falla y no esperar al siguiente contacto.</span></button>
          <button type="button" data-action="toast"><strong>Operaciones</strong><span>Priorizar llamadas con estado Pendiente antes de nuevas prospecciones.</span></button>
        </div>
      </article>
    </section>`;
}

function filtered(rows, keys) {
  const q = state.query.trim().toLowerCase();
  let out = rows;
  if (q) out = out.filter((row) => keys.some((key) => String(row[key] || "").toLowerCase().includes(q)));
  if (state.page === "llamadas") {
    if (state.filters.callsResult !== "all") out = out.filter((row) => row.resultado === state.filters.callsResult);
    if (state.filters.callsAgent !== "all") out = out.filter((row) => row.agente === state.filters.callsAgent);
    if (state.filters.callsDuration === "short") out = out.filter((row) => row.duracion_seg < 120);
    if (state.filters.callsDuration === "medium") out = out.filter((row) => row.duracion_seg >= 120 && row.duracion_seg < 300);
    if (state.filters.callsDuration === "long") out = out.filter((row) => row.duracion_seg >= 300);
  }
  if (state.page === "contactos") {
    if (state.filters.contactsStatus !== "all") out = out.filter((row) => row.estado === state.filters.contactsStatus);
    if (state.filters.contactsOwner !== "all") out = out.filter((row) => ownerForContact(row) === state.filters.contactsOwner);
  }
  if (state.page === "cargadores") {
    if (state.filters.shippersStatus !== "all") out = out.filter((row) => row.estado === state.filters.shippersStatus);
    if (state.filters.shippersCity !== "all") out = out.filter((row) => row.ciudad_origen === state.filters.shippersCity);
    if (state.filters.shippersScore === "high") out = out.filter((row) => row.score_relacion >= 85);
    if (state.filters.shippersScore === "medium") out = out.filter((row) => row.score_relacion >= 75 && row.score_relacion < 85);
    if (state.filters.shippersScore === "low") out = out.filter((row) => row.score_relacion < 75);
  }
  if (state.page === "transportistas") {
    if (state.filters.carriersStatus !== "all") out = out.filter((row) => row.estado === state.filters.carriersStatus);
    if (state.filters.carriersOtp === "high") out = out.filter((row) => row.otp_validado_pct >= 80);
    if (state.filters.carriersOtp === "medium") out = out.filter((row) => row.otp_validado_pct >= 70 && row.otp_validado_pct < 80);
    if (state.filters.carriersOtp === "low") out = out.filter((row) => row.otp_validado_pct < 70);
    if (state.filters.carriersRate === "low") out = out.filter((row) => row.tarifa_promedio_usd < 2100);
    if (state.filters.carriersRate === "mid") out = out.filter((row) => row.tarifa_promedio_usd >= 2100 && row.tarifa_promedio_usd < 2300);
    if (state.filters.carriersRate === "high") out = out.filter((row) => row.tarifa_promedio_usd >= 2300);
  }
  return out;
}

function filteredAnalyticsCalls() {
  const q = state.query.trim().toLowerCase();
  return sourceData.Llamadas.filter((row) => {
    const matchesQuery = !q || [row.transportista, row.telefono, row.agente, row.resultado].some((value) => String(value).toLowerCase().includes(q));
    const matchesResult = state.filters.analyticsResult === "all" || row.resultado === state.filters.analyticsResult;
    const matchesAgent = state.filters.analyticsAgent === "all" || row.agente === state.filters.analyticsAgent;
    return matchesQuery && matchesResult && matchesAgent;
  });
}

function ownerFor(index) {
  return ["Ana Gómez", "Carlos Méndez", "Sofía Rivera"][index % 3];
}

function ownerForContact(contact) {
  const index = sourceData.Contactos.indexOf(contact);
  return ownerFor(index < 0 ? 0 : index);
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + 1;
    return acc;
  }, {});
}

function segmentList(counts, total) {
  const reset = state.filters.contactsStatus !== "all" ? `<button class="segment-reset" type="button" data-action="contactSegment" data-status="all">Todos los segmentos</button>` : "";
  return `<div class="segments">${reset}${Object.entries(counts).map(([label, value]) => `<button class="${state.filters.contactsStatus === label ? "active" : ""}" type="button" data-action="contactSegment" data-status="${label}" aria-pressed="${state.filters.contactsStatus === label}"><span class="segment-label ${slug(label)}">${label}</span><strong>${value}</strong><small>${Math.round((value / total) * 100)}% del total</small><i>›</i></button>`).join("")}</div>`;
}

function activityList() {
  return `<div class="mini-list">${sourceData.Contactos.slice(0, 4).map((c, i) => `<div class="mini-row"><span>${["Nuevo lead agregado", "Llamada completada", "Lead actualizado", "Email enviado"][i]}</span><strong>${c.contacto}</strong><small>Hace ${i + 1} h</small></div>`).join("")}</div>`;
}

function ranking(rows, labelKey, valueKey) {
  return `<div class="ranking">${[...rows].sort((a, b) => b[valueKey] - a[valueKey]).slice(0, 5).map((row, i) => `<div><span>${i + 1}</span><strong>${row[labelKey]}</strong><b>${row[valueKey]}</b><em>↑</em></div>`).join("")}</div>`;
}

function barRanking(rows, labelKey, valueKey, suffix = "") {
  const max = Math.max(...rows.map((r) => r[valueKey]));
  return `<div class="bar-ranking">${[...rows].sort((a, b) => b[valueKey] - a[valueKey]).map((row) => `<div><span>${row[labelKey]}</span><i><b style="width:${(row[valueKey] / max) * 100}%"></b></i><strong>${row[valueKey]}${suffix}</strong></div>`).join("")}</div>`;
}

function onboarding() {
  const verified = sourceData.Transportistas.length;
  const review = sourceData.Transportistas.filter((c) => c.estado === "En revisión").length;
  return `<div class="mini-list"><div class="mini-row"><span>✓ MC verificados</span><strong>${verified}</strong><small>Completados</small></div><div class="mini-row"><span>♙ En revision</span><strong>${review}</strong><small>Documentos en evaluacion</small></div><div class="mini-row"><span>▧ Pendientes</span><strong>2</strong><small>Invitados sin iniciar</small></div><div class="mini-row"><span>✦ Invitados enviados</span><strong>5</strong><small>Invitaciones en proceso</small></div></div>`;
}

function stars(score) {
  const filled = Math.round(score / 20);
  return `<span class="stars">${"★".repeat(filled)}${"☆".repeat(5 - filled)}</span>`;
}

function initials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("");
}

function colorFor(text) {
  const colors = ["#2563eb", "#f59e0b", "#22a55a", "#7c3aed", "#94a3b8", "#14b8a6", "#ef4444", "#6366f1"];
  return colors[Math.abs([...text].reduce((sum, ch) => sum + ch.charCodeAt(0), 0)) % colors.length];
}

function shortCity(city) {
  return city.split(",")[0];
}

function shipperLegend(data, total) {
  const reset = state.shipperSegment
    ? `<button class="legend-chip reset" type="button" data-action="shipperSegment" data-city="">Todas</button>`
    : "";
  return `${reset}${data
    .map(
      (item) => `
        <button class="legend-chip ${state.shipperSegment === item.label ? "active" : ""}" type="button" data-action="shipperSegment" data-city="${item.label}">
          <span class="legend-dot" style="background:${item.color}"></span>
          <span>${item.shortLabel}</span>
          <strong>${item.value} · ${Math.round((item.value / total) * 100)}%</strong>
        </button>`
    )
    .join("")}`;
}

function resultLegend(data, total) {
  if (!total) return `<span class="empty-state">Sin resultados para los filtros actuales.</span>`;
  const reset = state.resultSegment
    ? `<button class="legend-chip reset" type="button" data-action="resultSegment" data-result="">Todas</button>`
    : "";
  return `${reset}${data
    .map(
      (item) => `
        <button class="legend-chip ${state.resultSegment === item.label ? "active" : ""}" type="button" data-action="resultSegment" data-result="${item.label}">
          <span class="legend-dot" style="background:${item.color}"></span>
          <span>${item.label}</span>
          <strong>${item.value} · ${Math.round((item.value / total) * 100)}%</strong>
        </button>`
    )
    .join("")}`;
}

function currentResultRows() {
  if (state.page === "analitica") return filteredAnalyticsCalls();
  if (state.page === "llamadas") return filtered(sourceData.Llamadas, ["transportista", "telefono", "agente", "resultado"]);
  return sourceData.Llamadas;
}

function updateResultSegment(segment) {
  state.resultSegment = segment || null;
  const data = resultsFromCalls(currentResultRows());
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const selected = data.find((item) => item.label === state.resultSegment);
  const centerValue = selected ? selected.value : total;
  const centerLabel = selected && total ? `${Math.round((selected.value / total) * 100)}% del total` : "registros";
  const center = el(".donut-panel .donut-center");
  if (center) {
    center.querySelector("strong").textContent = fmt(centerValue);
    center.querySelector("span").textContent = centerLabel;
  }
  document.querySelectorAll('#resultLegend [data-action="resultSegment"]').forEach((chip) => chip.classList.toggle("active", Boolean(state.resultSegment) && chip.dataset.result === state.resultSegment));
  drawDonut(data, "donutChart");
  applyLanguageToDom();
}

function showDonutTooltip(item, event, total) {
  let tooltip = el("#donutTooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "donutTooltip";
    tooltip.className = "chart-tooltip";
    document.body.appendChild(tooltip);
  }
  const pctValue = total ? Math.round((item.value / total) * 100) : 0;
  tooltip.innerHTML = `<strong>${item.label}</strong><span>${item.value} llamadas · ${pctValue}% del total</span><small>${callSummaries[item.label] || "Resultado operativo registrado."}</small>`;
  applyLanguageToDom(tooltip);
  tooltip.classList.add("show");
  const x = Math.min(window.innerWidth - 260, event.clientX + 16);
  const y = Math.min(window.innerHeight - 120, event.clientY + 16);
  tooltip.style.left = `${Math.max(12, x)}px`;
  tooltip.style.top = `${Math.max(12, y)}px`;
}

function hideDonutTooltip() {
  el("#donutTooltip")?.classList.remove("show");
}

function drawLineChart(data, id, fixedMax) {
  const canvas = el(`#${id}`);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(rect.width, 1) * dpr;
  canvas.height = Math.max(rect.height, 1) * dpr;
  ctx.scale(dpr, dpr);
  const width = rect.width;
  const height = rect.height;
  const pad = { top: 18, right: 18, bottom: 42, left: 44 };
  const max = fixedMax || Math.ceil(Math.max(...data.map((d) => d.value)) / 100) * 100;
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  ctx.clearRect(0, 0, width, height);
  ctx.font = "13px Inter, system-ui, sans-serif";
  for (let i = 0; i <= 4; i += 1) {
    const value = (max / 4) * i;
    const y = pad.top + chartH - (value / max) * chartH;
    ctx.strokeStyle = "#e5e7eb";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillStyle = "#667085";
    ctx.fillText(Math.round(value), 4, y + 4);
  }
  const points = data.map((d, i) => ({ x: pad.left + (chartW / (data.length - 1 || 1)) * i, y: pad.top + chartH - (d.value / max) * chartH, ...d }));
  const gradient = ctx.createLinearGradient(0, pad.top, 0, height - pad.bottom);
  gradient.addColorStop(0, "rgba(37,99,235,.22)");
  gradient.addColorStop(1, "rgba(37,99,235,0)");
  ctx.beginPath();
  points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  ctx.lineTo(points.at(-1).x, height - pad.bottom);
  ctx.lineTo(points[0].x, height - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.beginPath();
  points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 3;
  ctx.stroke();
  points.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#2563eb";
    ctx.fill();
    ctx.fillStyle = "#344054";
    ctx.textAlign = "center";
    ctx.fillText(p.label, p.x, height - 16);
  });
}

function drawDonut(allData, id) {
  const canvas = el(`#${id}`);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(rect.width, 1) * dpr;
  canvas.height = Math.max(rect.height, 1) * dpr;
  ctx.scale(dpr, dpr);
  const selected = allData.some((item) => item.label === state.resultSegment) ? state.resultSegment : null;
  const data = allData;
  const fullTotal = allData.reduce((sum, item) => sum + item.value, 0);
  if (!fullTotal) {
    ctx.clearRect(0, 0, rect.width, rect.height);
    return;
  }
  const center = { x: rect.width / 2, y: rect.height / 2 };
  const radius = Math.min(rect.width, rect.height) / 2 - 8;
  const arcs = [];
  let start = -Math.PI / 2;
  ctx.clearRect(0, 0, rect.width, rect.height);
  data.forEach((item) => {
    const angle = (item.value / fullTotal) * Math.PI * 2;
    const end = start + angle;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = selected && item.label !== selected ? "#d8dee8" : item.color;
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = selected && item.label === selected ? 5 : 3;
    ctx.stroke();
    arcs.push({ ...item, start, end });
    start = end;
  });
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius * 0.62, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";

  canvas.onmousemove = (event) => {
    if (state.resultSegmentPinned) return;
    const hit = donutHit(event, canvas, center, radius, arcs);
    if (hit && hit.label !== state.resultSegment) {
      updateResultSegment(hit.label);
    }
    if (hit) showDonutTooltip(hit, event, fullTotal);
    if (!hit) hideDonutTooltip();
  };
  canvas.onmouseleave = () => {
    if (!state.resultSegmentPinned && state.resultSegment) {
      updateResultSegment(null);
    }
    hideDonutTooltip();
  };
  canvas.onclick = (event) => {
    const hit = donutHit(event, canvas, center, radius, arcs);
    if (!hit) return;
    state.resultSegment = state.resultSegment === hit.label && state.resultSegmentPinned ? null : hit.label;
    state.resultSegmentPinned = Boolean(state.resultSegment);
    rerenderCurrent();
    showDonutTooltip(hit, event, fullTotal);
  };
  canvas.title = selected ? `${selected} · ${data[0]?.value || 0} de ${fullTotal}` : "Pasa el cursor sobre un resultado";
}

function drawShipperDonut(allData, id) {
  const canvas = el(`#${id}`);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(rect.width, 1) * dpr;
  canvas.height = Math.max(rect.height, 1) * dpr;
  ctx.scale(dpr, dpr);

  const selected = state.shipperSegment;
  const data = selected ? allData.filter((item) => item.label === selected) : allData;
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const fullTotal = allData.reduce((sum, item) => sum + item.value, 0);
  const center = { x: rect.width / 2, y: rect.height / 2 };
  const radius = Math.min(rect.width, rect.height) / 2 - 8;
  const arcs = [];
  let start = -Math.PI / 2;

  ctx.clearRect(0, 0, rect.width, rect.height);
  data.forEach((item) => {
    const angle = selected ? Math.PI * 2 : (item.value / total) * Math.PI * 2;
    const end = start + angle;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.stroke();
    arcs.push({ ...item, start, end });
    start = end;
  });
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius * 0.62, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";

  canvas.onmousemove = (event) => {
    if (state.shipperSegmentPinned) return;
    const hit = donutHit(event, canvas, center, radius, arcs);
    if (hit && hit.label !== state.shipperSegment) {
      state.shipperSegment = hit.label;
      rerenderCurrent();
    }
  };
  canvas.onmouseleave = () => {
    if (!state.shipperSegmentPinned && state.shipperSegment) {
      state.shipperSegment = null;
      rerenderCurrent();
    }
  };
  canvas.onclick = (event) => {
    const hit = donutHit(event, canvas, center, radius, arcs);
    if (!hit) return;
    state.shipperSegment = state.shipperSegment === hit.label && state.shipperSegmentPinned ? null : hit.label;
    state.shipperSegmentPinned = Boolean(state.shipperSegment);
    rerenderCurrent();
  };
  canvas.title = selected ? `${shortCity(selected)} · ${data[0]?.value || 0} de ${fullTotal}` : "Pasa el cursor sobre una ciudad";
}

function donutHit(event, canvas, center, radius, arcs) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const dx = x - center.x;
  const dy = y - center.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance > radius || distance < radius * 0.62) return null;
  let angle = Math.atan2(dy, dx);
  if (angle < -Math.PI / 2) angle += Math.PI * 2;
  return arcs.find((arc) => angle >= arc.start && angle <= arc.end) || null;
}

function render() {
  state.query = "";
  const renderers = { analitica: renderAnalitica, llamadas: renderLlamadas, contactos: renderContactos, cargadores: renderCargadores, transportistas: renderTransportistas, intelligence: renderIntelligence };
  if (!renderers[state.page]) state.page = "analitica";
  renderers[state.page]();
  updateNav();
  applyLanguageToDom();
}

function rerenderCurrent() {
  const renderers = { analitica: renderAnalitica, llamadas: renderLlamadas, contactos: renderContactos, cargadores: renderCargadores, transportistas: renderTransportistas, intelligence: renderIntelligence };
  if (!renderers[state.page]) state.page = "analitica";
  renderers[state.page]();
  updateNav();
  applyLanguageToDom();
}

function updateNav() {
  document.querySelectorAll("[data-page]").forEach((button) => button.classList.toggle("active", button.dataset.page === state.page));
}

function showToast(message) {
  const toast = el("#toast");
  toast.textContent = translateText(message);
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function openAudioModal() {
  el("#audioModal").classList.add("show");
  el("#audioModal").setAttribute("aria-hidden", "false");
  applyLanguageToDom(el("#audioModal"));
}

function closeAudioModal() {
  el("#audioModal").classList.remove("show");
  el("#audioModal").setAttribute("aria-hidden", "true");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function transcriptJson(title, payload) {
  return `
    <details class="transcript-json">
      <summary>${title}</summary>
      <pre>${escapeHtml(JSON.stringify(payload, null, 2))}</pre>
    </details>`;
}

function transcriptItem(type, time, label, text, extra = "") {
  return `
    <article class="transcript-item ${type}">
      <span class="transcript-time">${time}</span>
      <div class="transcript-card">
        <div class="transcript-speaker"><span>${label}</span></div>
        <p>${text}</p>
        ${extra}
      </div>
    </article>`;
}

function formattedTranscript(call, index) {
  const mc = String(112233 + index);
  const loadId = `LDES${String(index + 1).padStart(6, "0")}`;
  const reservation = `RES${String(index + 1233).padStart(9, "0")}`;
  const negotiatedRate = call.resultado === "Rechazado" ? null : 1000;
  const closingText =
    call.resultado === "Fallo OTP"
      ? "No he podido completar la validacion OTP. Vamos a dejar la llamada pendiente para reintentar la verificacion."
      : call.resultado === "Rechazado"
        ? "Entiendo, dejamos esta carga descartada por tarifa. Gracias por tu tiempo."
        : "La carga queda reservada de forma tentativa por 1.000 euros. Un companero del equipo de ventas contactara para completar la confirmacion final.";

  return `
    ${transcriptItem("event", "0:01", "Inicio", "User joined call")}
    ${transcriptItem("carrier", "0:03", "Transportista", "Hola, buenas.")}
    ${transcriptItem("agent", "0:11", "HappyRobot", "Hola. Para poder ayudarte a buscar cargas disponibles, me puedes indicar tu numero MC?")}
    ${transcriptItem("carrier", "0:14", "Transportista", `Por supuesto, es ${mc}.`)}
    ${transcriptItem(
      "system",
      "0:18",
      "Verificacion",
      "Autoridad verificada para el numero MC proporcionado.",
      transcriptJson("Respuesta de autoridad", {
        numero_mc: mc,
        verificado: true,
        siguiente_paso: "enviar_otp",
        estado_autoridad: "activa",
        id_transportista: `TRANS-${mc}`,
        nombre_transportista: call.transportista,
        canales_otp_disponibles: ["sms", "email"],
      })
    )}
    ${transcriptItem(
      "system",
      "0:23",
      "OTP",
      "Codigo OTP enviado por SMS para continuar con la verificacion.",
      transcriptJson("Respuesta OTP", {
        canal: "sms",
        codigo_demo: "123456",
        otp_enviado: true,
        siguiente_paso: "validar_otp",
        expira_en_segundos: 300,
      })
    )}
    ${transcriptItem("agent", "0:32", "HappyRobot", "Perfecto, te acabo de enviar un codigo OTP por SMS. Me puedes decir el codigo recibido?")}
    ${transcriptItem("carrier", "0:37", "Transportista", call.resultado === "Fallo OTP" ? "No lo encuentro ahora mismo, creo que no me ha llegado." : "Por supuesto, es 123456.")}
    ${transcriptItem(
      "system",
      "0:41",
      "Validacion OTP",
      call.resultado === "Fallo OTP" ? "El flujo queda bloqueado por verificacion incompleta." : "Codigo verificado correctamente.",
      transcriptJson("Estado de verificacion", {
        otp_valido: call.resultado !== "Fallo OTP",
        siguiente_paso: call.resultado === "Fallo OTP" ? "reintentar_otp" : "recoger_preferencias_carga",
      })
    )}
    ${transcriptItem("agent", "0:48", "HappyRobot", "Desde que provincia quieres cargar, hacia donde te gustaria ir y que tipo de equipo llevas?")}
    ${transcriptItem("carrier", "0:53", "Transportista", "Voy de Valencia a Madrid y tengo una caja seca.")}
    ${transcriptItem(
      "system",
      "0:58",
      "Busqueda de cargas",
      "Carga disponible encontrada para Valencia-Madrid con caja seca.",
      transcriptJson("Carga sugerida", {
        id_carga: loadId,
        origen_ciudad: "Valencia",
        destino_ciudad: "Madrid",
        tipo_equipo: "caja_seca",
        kilometros: 355,
        tarifa_publicada: 1250,
        estado: "abierta",
      })
    )}
    ${transcriptItem("agent", "1:20", "HappyRobot", "Tengo una carga disponible de Valencia a Madrid para el 1 de julio. La tarifa publicada es de 1.250 euros. Te encaja o quieres hacer una contraoferta?")}
    ${transcriptItem("carrier", "1:29", "Transportista", call.resultado === "Rechazado" ? "No, por esa tarifa no me encaja." : "Me vendria mejor unos 1.000 euros.")}
    ${transcriptItem(
      "system",
      "1:36",
      "Decision comercial",
      call.resultado === "Rechazado" ? "El transportista rechaza la carga por tarifa." : "Contraoferta aceptada y reserva tentativa preparada.",
      transcriptJson("Resultado operativo", {
        resultado: call.resultado,
        decision: call.resultado === "Rechazado" ? "rechazar" : "aceptar",
        tarifa_acordada: negotiatedRate,
        siguiente_paso: call.resultado === "Rechazado" ? "cerrar_llamada" : "reservar_carga",
      })
    )}
    ${transcriptItem(
      "system",
      "1:45",
      "Handoff",
      call.resultado === "Aceptado" || call.resultado === "Handoff" ? "Reserva tentativa creada y handoff simulado realizado." : "No se crea handoff final para este resultado.",
      transcriptJson("Handoff", {
        id_carga: loadId,
        referencia_reserva: call.resultado === "Aceptado" || call.resultado === "Handoff" ? reservation : null,
        requiere_handoff: call.resultado === "Aceptado" || call.resultado === "Handoff",
        cola: call.resultado === "Aceptado" || call.resultado === "Handoff" ? "cola_senior_rep" : null,
      })
    )}
    ${transcriptItem("agent", "1:59", "HappyRobot", closingText)}
  `;
}

function openTranscriptModal(index) {
  const call = sourceData.Llamadas[Number(index)] || sourceData.Llamadas[0];
  const callIndex = sourceData.Llamadas.indexOf(call);
  el("#transcriptModalTitle").textContent = `Transcripcion · ${call.transportista}`;
  el("#transcriptMeta").innerHTML = `
    <span>${shortDate(call.fecha_hora)}</span>
    <span>${call.agente}</span>
    <span>${mmss(call.duracion_seg)}</span>
    <span class="badge ${slug(call.resultado)}">${call.resultado}</span>`;
  el("#transcriptSummary").innerHTML = `<strong>Resumen</strong><p>${call.resumen}</p>`;
  el("#transcriptBody").innerHTML = formattedTranscript(call, callIndex < 0 ? Number(index) || 0 : callIndex);
  el("#transcriptModal").classList.add("show");
  el("#transcriptModal").setAttribute("aria-hidden", "false");
  applyLanguageToDom(el("#transcriptModal"));
}

function closeTranscriptModal() {
  el("#transcriptModal").classList.remove("show");
  el("#transcriptModal").setAttribute("aria-hidden", "true");
}

function detailField(label, value) {
  return `<div class="detail-field"><span>${label}</span><strong>${value ?? "—"}</strong></div>`;
}

function openLeadInfoModal(index) {
  const call = sourceData.Llamadas[Number(index)] || sourceData.Llamadas[0];
  const isUrgent = ["Pendiente", "Contraoferta", "Fallo OTP"].includes(call.resultado);
  el("#detailModalTitle").textContent = `Lead de seguimiento · ${call.transportista}`;
  el("#detailModalBody").innerHTML = `
    <div class="detail-grid">
      ${detailField("Telefono", call.telefono)}
      ${detailField("Agente asignado", call.agente)}
      ${detailField("Resultado", `<span class="badge ${slug(call.resultado)}">${call.resultado}</span>`)}
      ${detailField("Prioridad", isUrgent ? "Alta" : "Media")}
      ${detailField("Ultima llamada", shortDate(call.fecha_hora))}
      ${detailField("Duracion", mmss(call.duracion_seg))}
    </div>
    <div class="detail-note"><span>Siguiente accion</span><p>${isUrgent ? "Contactar hoy y resolver el bloqueo antes de perder la oportunidad." : "Mantener en seguimiento y confirmar disponibilidad para la siguiente carga compatible."}</p></div>`;
  el("#detailModal").classList.add("show");
  el("#detailModal").setAttribute("aria-hidden", "false");
  applyLanguageToDom(el("#detailModal"));
}

function openDetailModal(type, id) {
  const index = Number(id);
  let title = "Detalle";
  let body = "";

  if (type === "call") {
    const call = sourceData.Llamadas[index];
    title = `Llamada · ${call.transportista}`;
    body = `
      <div class="detail-grid">
        ${detailField("Fecha y hora", shortDate(call.fecha_hora))}
        ${detailField("Telefono", call.telefono)}
        ${detailField("Resultado", `<span class="badge ${slug(call.resultado)}">${call.resultado}</span>`)}
        ${detailField("Agente", call.agente)}
        ${detailField("Duracion", mmss(call.duracion_seg))}
        ${detailField("Referencia", `MC ${112233 + index}`)}
      </div>
      <div class="detail-note"><span>Resumen</span><p>${call.resumen}</p></div>
      <div class="detail-actions">
        <button class="export-button" type="button" data-action="transcript" data-call="${index}">Ver transcripcion</button>
        <button class="export-button" type="button" data-action="audio">Reproducir audio</button>
      </div>`;
  }

  if (type === "lead") {
    const lead = sourceData.Contactos[index];
    title = `Lead · ${lead.contacto}`;
    body = `
      <div class="detail-grid">
        ${detailField("Empresa", lead.empresa)}
        ${detailField("Telefono", lead.telefono)}
        ${detailField("Email", lead.email)}
        ${detailField("Estado", `<span class="badge ${slug(lead.estado)}">${lead.estado}</span>`)}
        ${detailField("Ultimo contacto", shortDate(lead.ultimo_contacto))}
        ${detailField("Owner", ownerForContact(lead))}
      </div>
      <div class="detail-note"><span>Siguiente accion</span><p>Revisar el ultimo contacto y priorizar seguimiento si el lead esta en seguimiento o nuevo.</p></div>`;
  }

  if (type === "load") {
    const load = sourceData.Cargadores[index];
    title = `Carga · ${load.cargador}`;
    body = `
      <div class="detail-grid">
        ${detailField("Ciudad origen", load.ciudad_origen)}
        ${detailField("Volumen mensual", `${fmt(load.volumen_mensual_cargas)} cargas`)}
        ${detailField("Score relacion", `${load.score_relacion} / 100`)}
        ${detailField("Estado", `<span class="badge ${slug(load.estado)}">${load.estado}</span>`)}
        ${detailField("Seguimiento", load.estado === "Aceptada" ? "Lista para cierre" : load.estado === "Pendiente" ? "Requiere confirmacion" : "Revisar motivo de cancelacion")}
        ${detailField("Ranking", `#${[...sourceData.Cargadores].sort((a, b) => b.score_relacion - a.score_relacion).indexOf(load) + 1}`)}
      </div>
      <div class="detail-note"><span>Resumen</span><p>Carga en estado ${load.estado.toLowerCase()} con ${fmt(load.volumen_mensual_cargas)} cargas mensuales desde ${load.ciudad_origen} y score comercial ${load.score_relacion}.</p></div>`;
  }

  if (type === "carrier") {
    const carrier = sourceData.Transportistas[index];
    title = `Transportista · ${carrier.transportista}`;
    body = `
      <div class="detail-grid">
        ${detailField("MC numero", `MC ${carrier.mc_numero}`)}
        ${detailField("OTP validado", `${carrier.otp_validado_pct}%`)}
        ${detailField("Cargas cerradas", carrier.cargas_cerradas)}
        ${detailField("Tarifa promedio", `${fmt(carrier.tarifa_promedio_usd)} USD`)}
        ${detailField("Estado", `<span class="badge ${slug(carrier.estado)}">${carrier.estado}</span>`)}
        ${detailField("Riesgo", carrier.otp_validado_pct < 70 ? "Revisar verificacion" : "Normal")}
      </div>
      <div class="detail-note"><span>Resumen</span><p>${carrier.transportista} acumula ${carrier.cargas_cerradas} cargas cerradas con tarifa media de ${fmt(carrier.tarifa_promedio_usd)} USD.</p></div>`;
  }

  el("#detailModalTitle").textContent = title;
  el("#detailModalBody").innerHTML = body;
  el("#detailModal").classList.add("show");
  el("#detailModal").setAttribute("aria-hidden", "false");
  applyLanguageToDom(el("#detailModal"));
}

function closeDetailModal() {
  el("#detailModal").classList.remove("show");
  el("#detailModal").setAttribute("aria-hidden", "true");
}

function exportCsv() {
  const keys = {
    analitica: sourceData.Analitica,
    llamadas: sourceData.Llamadas,
    contactos: sourceData.Contactos,
    cargadores: sourceData.Cargadores,
    transportistas: sourceData.Transportistas,
  }[state.page];
  const headers = Object.keys(keys[0]);
  const csv = [headers.join(","), ...keys.map((row) => headers.map((key) => `"${String(row[key]).replaceAll('"', '""')}"`).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `happyrobot-${state.page}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Exportacion CSV generada.");
}

function clearPageFilters() {
  state.query = "";
  if (state.page === "cargadores") {
    state.shipperSegment = null;
    state.shipperSegmentPinned = false;
  }
  if (["analitica", "llamadas"].includes(state.page)) {
    state.resultSegment = null;
    state.resultSegmentPinned = false;
  }
  const groups = {
    analitica: { analyticsMetric: "llamadas_realizadas", analyticsResult: "all", analyticsAgent: "all" },
    llamadas: { callsResult: "all", callsAgent: "all", callsDuration: "all" },
    contactos: { contactsStatus: "all", contactsOwner: "all" },
    cargadores: { shippersStatus: "all", shippersCity: "all", shippersScore: "all" },
    transportistas: { carriersStatus: "all", carriersOtp: "all", carriersRate: "all" },
    intelligence: { intelResult: "all", intelAgent: "all", intelClient: "all", intelFocus: "all" },
  };
  Object.assign(state.filters, groups[state.page] || {});
}

document.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    state.page = pageButton.dataset.page;
    render();
    return;
  }
  const action = event.target.closest("[data-action]");
  if (action?.dataset.action === "language") {
    setLanguage(action.dataset.language);
    rerenderCurrent();
    return;
  }
  if (action?.dataset.action === "audio") {
    openAudioModal();
    return;
  }
  if (action?.dataset.action === "transcript") {
    openTranscriptModal(action.dataset.call);
    return;
  }
  if (action?.dataset.action === "leadInfo") {
    openLeadInfoModal(action.dataset.call);
    return;
  }
  if (action?.dataset.action === "refresh") {
    showToast("Datos actualizados desde el Excel sintetico.");
    return;
  }
  if (action?.dataset.action === "export") {
    exportCsv();
    return;
  }
  if (action?.dataset.action === "clearFilters") {
    clearPageFilters();
    rerenderCurrent();
    showToast("Filtros limpiados.");
    return;
  }
  if (action?.dataset.action === "shipperSegment") {
    state.shipperSegment = action.dataset.city || null;
    state.shipperSegmentPinned = Boolean(action.dataset.city);
    rerenderCurrent();
    return;
  }
  if (action?.dataset.action === "resultSegment") {
    state.resultSegment = action.dataset.result || null;
    state.resultSegmentPinned = Boolean(action.dataset.result);
    state.resultHoverSuspended = !state.resultSegment;
    if (!state.resultSegment) hideDonutTooltip();
    rerenderCurrent();
    return;
  }
  if (action?.dataset.action === "contactSegment") {
    state.filters.contactsStatus = action.dataset.status || "all";
    rerenderCurrent();
    return;
  }
  if (action?.dataset.action === "toast") {
    showToast("Vista lista para conectar en la siguiente fase.");
    return;
  }
  if (action?.dataset.action === "queue") {
    const item = state.queue.find((q) => q.id === Number(action.dataset.id));
    item.status = action.dataset.value;
    rerenderCurrent();
    showToast(`${item.name}: resultado ${action.dataset.value === "approved" ? "confirmado" : "rechazado"}.`);
    return;
  }

  const detailRow = event.target.closest("[data-detail-type]");
  if (detailRow) openDetailModal(detailRow.dataset.detailType, detailRow.dataset.detailId);
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-search]")) return;
  state.query = event.target.value;
  rerenderCurrent();
  const input = el("[data-search]");
  if (input) {
    input.focus();
    input.setSelectionRange(state.query.length, state.query.length);
  }
});

document.addEventListener("change", (event) => {
  if (!event.target.matches("[data-filter]")) return;
  state.filters[event.target.dataset.filter] = event.target.value;
  rerenderCurrent();
});

document.addEventListener("mouseover", (event) => {
  const chip = event.target.closest('[data-action="shipperSegment"][data-city]');
  if (!chip || state.shipperSegmentPinned) return;
  const nextCity = chip.dataset.city || null;
  if (state.shipperSegment === nextCity) return;
  state.shipperSegment = nextCity;
  rerenderCurrent();
});

document.addEventListener("mouseout", (event) => {
  const chip = event.target.closest('[data-action="shipperSegment"][data-city]');
  if (!chip || state.shipperSegmentPinned) return;
  state.shipperSegment = null;
  rerenderCurrent();
});

document.addEventListener("mouseover", (event) => {
  const chip = event.target.closest('[data-action="resultSegment"][data-result]');
  if (!chip || state.resultSegmentPinned) return;
  if (state.resultHoverSuspended) return;
  if (event.relatedTarget && chip.contains(event.relatedTarget)) return;
  const nextResult = chip.dataset.result || null;
  if (state.resultSegment === nextResult) return;
  updateResultSegment(nextResult);
  const data = resultsFromCalls(currentResultRows());
  const item = data.find((entry) => entry.label === nextResult);
  if (item) showDonutTooltip(item, event, data.reduce((sum, entry) => sum + entry.value, 0));
});

document.addEventListener("mouseout", (event) => {
  const chip = event.target.closest('[data-action="resultSegment"][data-result]');
  if (!chip || state.resultSegmentPinned) return;
  if (state.resultHoverSuspended) {
    const related = event.relatedTarget instanceof Element ? event.relatedTarget : null;
    if (!related?.closest("#resultLegend")) state.resultHoverSuspended = false;
    return;
  }
  if (event.relatedTarget && chip.contains(event.relatedTarget)) return;
  updateResultSegment(null);
  hideDonutTooltip();
});

el("#closeAudioModal").addEventListener("click", closeAudioModal);
el("#acceptAudioModal").addEventListener("click", closeAudioModal);
el("#audioModal").addEventListener("click", (event) => {
  if (event.target.id === "audioModal") closeAudioModal();
});
el("#closeTranscriptModal").addEventListener("click", closeTranscriptModal);
el("#transcriptModal").addEventListener("click", (event) => {
  if (event.target.id === "transcriptModal") closeTranscriptModal();
});
el("#closeDetailModal").addEventListener("click", closeDetailModal);
el("#detailModal").addEventListener("click", (event) => {
  if (event.target.id === "detailModal") closeDetailModal();
});
window.addEventListener("resize", rerenderCurrent);

render();
