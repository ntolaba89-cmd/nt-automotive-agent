# Reglas del proyecto — NT Automotive Agent

## Stack
- React + Vite + TypeScript
- Tailwind CSS
- Supabase (auth + Postgres + Edge Functions)
- Sin llamadas directas al LLM desde el frontend, siempre via Edge Function de Supabase (la API key del modelo nunca va en el bundle del cliente)

## Arquitectura
- Separar /src/core (logica de negocio, agnostica de marca/concesionaria) de /src/config (datos especificos de cada tenant: branding, colores, vehiculos, sucursales)
- El sistema debe poder instanciarse para multiples concesionarias sin modificar /src/core

## Reglas de negocio fijas (no reinventar ni "mejorar" sin avisar)
- Lead score: suma de criterios, con techo fijo en 100. Formula: scoreFinal = Math.min(sumaDeCriterios, 100)
- Criterios: Modelo definido +15, Intencion de compra +20, Financiacion +10, Test Drive +20, Cita solicitada +25, Compra en 1 mes +20, Vehiculo a entregar +10
- Clasificacion: 0-29 BAJA, 30-59 MEDIA, 60+ ALTA
- El lead score NUNCA se muestra al cliente/visitante, solo al asesor en el dashboard interno
- Texto fijo del disclaimer en "Preparar conversacion", exacto, no parafrasear: "Esto NO envia mensajes automaticos."
- El boton "Preparar conversacion" solo genera un texto sugerido para que el asesor lo copie y use manualmente. Nunca envia nada automaticamente.
- Jerarquia de marca: "NT Automotive Agent" es el producto (aparece en el header). El nombre de la concesionaria (ej. "Dealer Premier") es el tenant/cliente, aparece como dato secundario, nunca reemplaza la marca del producto en el header principal.

## Fuera de alcance del MVP (no implementar aunque parezca facil o Cursor lo sugiera solo)
- Integracion real de WhatsApp
- CRM real / integraciones con CRMs externos
- Inventario de vehiculos en tiempo real
- Pagos
- Modulos de "Inventory" o "Service" en el panel de asesor (no estaban en el alcance original, no agregarlos aunque el diseno de referencia los haya sugerido en alguna iteracion)
- Aplicacion movil nativa
- Multiempresa avanzado mas alla de la separacion core/config

## Diseno
- Referencia visual completa en /design-reference (export de Stitch). Usar SOLO como referencia de estilo y estructura, NUNCA copiar el HTML tal cual como componente de produccion.
- Sistema de diseno base: /design-reference/stitch_nt_automotive_sales_concierge/lux_aura_automotive/DESIGN.md (paleta, tipografia, spacing, respetar estos tokens al construir los componentes reales en Tailwind)
- Iconos: reconstruir con lucide-react, no reusar el export de Material Symbols de Stitch
- Imagenes de vehiculos en el export apuntan a URLs temporales de Google, no reutilizarlas, usar placeholders propios o imagenes reales

## Idioma
- Toda la interfaz en espanol latino, sin textos en ingles, incluyendo labels de botones, estados, mensajes de error y placeholders
