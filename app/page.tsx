"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import Image from "next/image";
import {
  Menu, X, Layers, ShieldCheck, Star, MessageCircle,
  Instagram, Mail, Phone, MapPin, ChevronUp, ChevronLeft,
  ChevronRight, ArrowRight, ShoppingBag, Youtube,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "INICIO", href: "#inicio" },
    { label: "TIENDA", href: "#tienda" },
  ];

  return (
    <nav role="banner" className="fixed top-0 left-0 right-0 z-50 bg-atila-black/90 backdrop-blur-md border-b border-atila-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logoFinalBlanco.png"
            alt="ATILA PÁDEL"
            width={160}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-atila-gray-200 hover:text-atila-accent uppercase tracking-wider text-xs transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizador"
            className="bg-atila-accent text-atila-black px-5 py-2 uppercase tracking-wider text-xs hover:brightness-110 transition-all"
          >
            COTIZAR
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-atila-gray-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-atila-black border-t border-atila-gray-700 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-atila-gray-200 hover:text-atila-accent uppercase tracking-wider text-sm border-b border-atila-gray-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizador"
            className="mt-4 block text-center bg-atila-accent text-atila-black px-5 py-2 uppercase tracking-wider text-xs"
            onClick={() => setOpen(false)}
          >
            COTIZAR
          </a>
        </div>
      )}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: 3D court render video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/render-hero.webp"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/render-remuxed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-atila-black/85 via-atila-black/60 to-atila-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.95]">
          CANCHAS DE PÁDEL PROFESIONALES
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-atila-accent uppercase tracking-wider">
          100% PERSONALIZADAS
        </p>
        <p className="mt-6 text-base md:text-lg text-atila-gray-300 max-w-2xl mx-auto leading-relaxed">
          DISEÑAMOS E INSTALAMOS CANCHAS PREMIUM PARA CLUBES, COMPLEJOS DEPORTIVOS E INVERSORES
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cotizador"
            className="bg-atila-accent text-atila-black px-10 py-4 uppercase tracking-wider text-sm hover:brightness-110 hover:scale-[1.02] transition-all"
          >
            SOLICITAR PRESUPUESTO
          </a>
          <a
            href="https://calendly.com/atilapadel/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-atila-accent text-atila-accent px-10 py-4 uppercase tracking-wider text-sm hover:bg-atila-accent/10 transition-all"
          >
            AGENDAR VIDEOLLAMADA
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROPUESTA DE VALOR B2B                                             */
/* ------------------------------------------------------------------ */
const b2bCards = [
  {
    icon: Layers,
    title: "DISEÑO PERSONALIZADO",
    text: "Personalización total en estética, identidad y terminaciones. Una cancha que eleva la imagen y el posicionamiento de tu espacio.",
  },
  {
    icon: MessageCircle,
    title: "ASESORAMIENTO INTEGRAL",
    text: "Te acompañamos de principio a fin en todo el proyecto para que tu inversión rinda y tu cancha funcione desde el primer día.",
  },
  {
    icon: ShieldCheck,
    title: "ESTRUCTURA CERTIFICADA",
    text: "Diseñada para resistir viento, uso intensivo y condiciones sísmicas. Cristales templados certificados bajo norma UNE.",
  },
];

function PropuestaValor() {
  return (
    <section id="servicios" className="py-24 bg-atila-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl uppercase tracking-tight mb-16">
          POR QUÉ <span className="text-atila-accent">ELEGIRNOS</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {b2bCards.map((c) => (
            <div
              key={c.title}
              className="bg-atila-gray-900 border border-atila-gray-700 p-8 text-center hover:border-atila-accent/50 transition-colors"
            >
              <c.icon className="mx-auto text-atila-accent" size={40} strokeWidth={1.5} />
              <h3 className="mt-6 text-lg uppercase tracking-wider">
                {c.title}
              </h3>
              <p className="mt-3 text-atila-gray-400 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TIPOS DE CANCHAS — 2 MODELOS                                       */
/* ------------------------------------------------------------------ */
const canchas = [
  {
    title: "MODELO CLUB",
    subtitle: "Cancha profesional esencial",
    description: "La base sólida para comenzar tu proyecto. Estructura resistente, componentes profesionales y excelente relación inversión–rendimiento.",
    image: "/brochure-images/esencial-hero.webp",
    features: [
      "Estructura reforzada de acero galvanizado",
      "Full panorámica 360° (sin esquinas)",
      "Vidrios templados de 12mm certificados (norma UNE)",
      "Césped profesional de alto rendimiento",
      "Iluminación LED para uso intensivo",
    ],
    footer: "Ideal para proyectos que buscan eficiencia sin resignar calidad",
  },
  {
    title: "MODELO COMPETITION PRO",
    subtitle: "Nuestro modelo insignia",
    description: "La máxima expresión de calidad, durabilidad y diseño. Pensada para clubes que buscan diferenciarse y llevar su proyecto a otro nivel.",
    image: "/brochure-images/competition-pro-final-v2.webp",
    features: [
      "Personalización TOTAL (colores, identidad, logos, detalles)",
      "Estructura reforzada + sistema de amortiguación PRO",
      "Full panorámica 360° (sin esquinas)",
      "Vidrios templados de 12mm certificados (norma UNE)",
      "Estructura galvanizada, pintura electroestática",
      "Rejas electrosoldadas de 4 mm (mayor rigidez y durabilidad)",
      "Césped premium de última generación (mayor vida útil y mejor rebote)",
      "Incluye vidrio de repuesto",
    ],
    footer: "Experiencia premium en cada detalle",
  },
];

function Canchas() {
  return (
    <section id="canchas" className="py-24 bg-atila-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl uppercase tracking-tight mb-4">
          NUESTROS <span className="text-atila-accent">MODELOS</span>
        </h2>
        <p className="text-center text-atila-gray-400 mb-16 max-w-2xl mx-auto">
          Dos líneas de construcción para cada nivel de exigencia. Todas con garantía de calidad ATILA.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {canchas.map((c) => (
            <div
              key={c.title}
              className="bg-atila-gray-900 border border-atila-gray-700 overflow-hidden hover:border-atila-accent/50 transition-colors group"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`Cancha ${c.title} de pádel ATILA`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atila-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-atila-accent uppercase tracking-widest text-lg">{c.title}</h3>
                  <p className="text-atila-gray-200 text-xs uppercase tracking-wider">{c.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-atila-gray-400 text-sm leading-relaxed mb-5">{c.description}</p>
                <ul className="space-y-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-atila-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-atila-accent flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                {c.footer && (
                  <p className="mt-4 text-atila-gray-500 text-xs italic border-t border-atila-gray-700 pt-3">
                    {c.footer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CARRUSEL / GALLERY — EXPERIENCIA PREMIUM                           */
/* ------------------------------------------------------------------ */
const carouselImages = [
  { src: "/carousel-1.webp", caption: "Estructura reforzada en acero galvanizado", model: "COMPETITION PRO" },
  { src: "/carousel-2.webp", caption: "Sistema de amortiguación profesional", model: "COMPETITION PRO" },
  { src: "/carousel-3.webp", caption: "Iluminación profesional, tipo cuello de cisne", model: "COMPETITION PRO" },
  { src: "/carousel-4.webp", caption: "Iluminación LED profesional integrada", model: "COMPETITION PRO" },
  { src: "/carousel-5.webp", caption: "Detalles de corte láser personalizados", model: "COMPETITION PRO" },
  { src: "/carousel-6.webp", caption: "Acabados premium en cada componente", model: "COMPETITION PRO" },
];

function CarouselGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -400 : 400;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-atila-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <span className="text-atila-accent text-xs uppercase tracking-[0.3em]">Detalle constructivo</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.95]">
              EXPERIENCIA PREMIUM<br />
              <span className="text-atila-accent">EN CADA DETALLE</span>
            </h2>
            <p className="mt-6 text-atila-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              Cada componente de una cancha ATILA está seleccionado para ofrecer el máximo rendimiento, seguridad y estética. Desde la estructura galvanizada hasta el césped fibrilado, cada detalle cuenta.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="block h-px w-12 bg-atila-accent" />
              <span className="text-atila-accent text-xs uppercase tracking-wider">Calidad certificada</span>
            </div>
          </div>

          {/* Desktop stacked preview — 3 images visible */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {carouselImages.slice(0, 3).map((img, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden border border-atila-gray-700">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atila-black/70 to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-atila-accent bg-atila-black/60 px-2 py-1">
                  {img.model}
                </span>
                <p className="absolute bottom-3 left-3 right-3 text-atila-gray-200 text-[11px] uppercase tracking-wider leading-snug">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal scroll carousel — mobile + tablet */}
        <div className="lg:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {carouselImages.map((img, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-72 sm:w-80 relative aspect-[3/4] overflow-hidden border border-atila-gray-700"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                  sizes="80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atila-black/70 to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-atila-accent bg-atila-black/60 px-2 py-1">
                  {img.model}
                </span>
                <p className="absolute bottom-3 left-3 right-3 text-atila-gray-200 text-[11px] uppercase tracking-wider leading-snug">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
          {/* Scroll hint indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-atila-gray-600" />
            ))}
          </div>
        </div>

        {/* Desktop bottom row — 3 more images */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-4">
          {carouselImages.slice(3).map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden border border-atila-gray-700">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atila-black/70 to-transparent" />
              <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-atila-accent bg-atila-black/60 px-2 py-1">
                {img.model}
              </span>
              <p className="absolute bottom-3 left-3 right-3 text-atila-gray-200 text-[11px] uppercase tracking-wider leading-snug">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COTIZADOR INTERACTIVO — Simplified                                  */
/* ------------------------------------------------------------------ */
interface CotizadorForm {
  nombre: string;
  apellido: string;
  localidad: string;
  cantidad: string;
  observaciones: string;
}

const cotizadorDefaults: CotizadorForm = {
  nombre: "",
  apellido: "",
  localidad: "",
  cantidad: "",
  observaciones: "",
};

function Cotizador() {
  const [form, setForm] = useState<CotizadorForm>(cotizadorDefaults);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof CotizadorForm, string>>>({});

  const requiredFields: (keyof CotizadorForm)[] = ["nombre", "apellido", "localidad", "cantidad"];

  function validate(): boolean {
    const e: typeof errors = {};
    for (const k of requiredFields) {
      if (!form[k].trim()) e[k] = "Este campo es obligatorio";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const mensaje = `¡Hola! Quiero cotizar mi cancha de pádel

• Nombre: ${form.nombre} ${form.apellido}
• Ubicación: ${form.localidad}
• Cantidad de canchas: ${form.cantidad}
• Observaciones: ${form.observaciones.trim() || "Sin observaciones adicionales"}

¡Gracias!`;

    const url = `https://wa.me/5493415607480?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setForm(cotizadorDefaults);
      setSubmitted(false);
    }, 3000);
  }

  const inputCls =
    "w-full bg-atila-gray-800 border border-atila-gray-700 px-4 py-3 text-atila-gray-200 text-sm placeholder:text-atila-gray-500 focus:outline-none focus:border-atila-accent transition-colors";

  return (
    <section id="cotizador" className="py-24 bg-atila-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl uppercase tracking-tight mb-4">
          COTIZÁ <span className="text-atila-accent">TU CANCHA</span>
        </h2>
        <p className="text-center text-atila-gray-400 mb-12">
          Completá el formulario y recibí tu presupuesto.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-atila-gray-900 border border-atila-accent/30 p-8 shadow-[0_0_30px_rgba(65,215,167,0.08)] space-y-5"
        >
          {/* Row 1: Nombre + Apellido */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-atila-gray-400 mb-1">
                Nombre *
              </label>
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                className={`${inputCls} ${errors.nombre ? "border-red-500" : ""}`}
              />
              {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-atila-gray-400 mb-1">
                Apellido *
              </label>
              <input
                type="text"
                value={form.apellido}
                onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                placeholder="Tu apellido"
                className={`${inputCls} ${errors.apellido ? "border-red-500" : ""}`}
              />
              {errors.apellido && <p className="text-red-400 text-xs mt-1">{errors.apellido}</p>}
            </div>
          </div>

          {/* Row 2: Localidad + Cantidad */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-atila-gray-400 mb-1">
                Localidad / Provincia *
              </label>
              <input
                type="text"
                value={form.localidad}
                onChange={(e) => setForm({ ...form, localidad: e.target.value })}
                placeholder="Ej: Rosario, Santa Fe"
                className={`${inputCls} ${errors.localidad ? "border-red-500" : ""}`}
              />
              {errors.localidad && <p className="text-red-400 text-xs mt-1">{errors.localidad}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-atila-gray-400 mb-1">
                Cantidad de canchas *
              </label>
              <select
                value={form.cantidad}
                onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
                className={`w-full bg-atila-gray-800 border border-atila-gray-700 px-4 py-3 text-atila-gray-200 text-sm focus:outline-none focus:border-atila-accent transition-colors appearance-none ${errors.cantidad ? "border-red-500" : ""}`}
              >
                <option value="">Seleccioná</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                ))}
              </select>
              {errors.cantidad && <p className="text-red-400 text-xs mt-1">{errors.cantidad}</p>}
            </div>
          </div>

          {/* Observaciones */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-atila-gray-400 mb-1">
              Observaciones adicionales
            </label>
            <textarea
              value={form.observaciones}
              onChange={(e) => setForm({ ...form, observaciones: e.target.value })}
              placeholder="Contanos más sobre tu proyecto..."
              rows={4}
              className={inputCls}
            />
          </div>

          {/* Submit */}
          {submitted ? (
            <div className="bg-atila-accent/10 border border-atila-accent/40 p-6 text-center animate-fade-in-up">
              <p className="text-atila-accent text-lg">
                ¡Tu solicitud fue enviada! Te contactamos en 24hs para detallar tu cotización.
              </p>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-atila-accent text-atila-black py-4 uppercase tracking-wider text-sm hover:brightness-110 hover:scale-[1.02] transition-all"
              aria-label="Obtener presupuesto"
            >
              OBTENER PRESUPUESTO
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TIENDA OFICIAL B2C — Header                                         */
/* ------------------------------------------------------------------ */
function TiendaHeader() {
  return (
    <section id="tienda" className="pt-24 pb-4 bg-atila-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl uppercase tracking-tight">
          TIENDA OFICIAL ATILA: PALETAS Y ACCESORIOS DE <span className="text-atila-accent">ALTA CALIDAD</span>
        </h2>
        <p className="mt-4 text-atila-gray-400 max-w-2xl mx-auto">
          Compra online y directo
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="block h-px w-16 bg-atila-gray-700" />
          <span className="block h-1.5 w-1.5 bg-atila-accent" />
          <span className="block h-px w-16 bg-atila-gray-700" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRODUCT GRID                                                        */
/* ------------------------------------------------------------------ */
const products = [
  {
    name: "Paleta Atila Conquista Carbono 12k Diamante Eva Feel",
    price: "$299.202",
    oldPrice: "$325.220",
    discount: "8% OFF",
    badge: "MÁS VENDIDA",
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2NGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a0faf0610b203968e7be604db56dd489378ccdb2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_653715-MLA105260751117_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEFGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8347864fac24a48a660a0610aa654ef2466a1e29/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_736012-MLA104700736004_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOFFGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--41f207cee67cbd2e55a0cd262ae1e935f420e752/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_863903-MLA105262677135_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOGtGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--de251670a8252f5d7ac3406ef0a36017007ef388/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_705499-MLA105262230985_012026-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-conquista-carbono-12k-diamante-eva-feel",
  },
  {
    name: "Paleta Padel Conquista Atila Full Carbono Liviana",
    price: "$227.900",
    oldPrice: "$285.702",
    discount: "20% OFF",
    badge: null,
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMW5EQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e5d9c29479d90eb1a9d86a153db7d9700fd56bfb/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_759527-MLA89215781940_082025-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTNEQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--25beaf4d941c62c15cc46b0171d147d2099be10a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_986104-MLA75813007742_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlREQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2e5db58e970d2354ab7c3b3786d03b6c23a0d9ac/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_747128-MLA75813137218_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMjNEQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--85ab157415bfac7cfbc48d281439b8ca8bb56d5e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_859502-MLA75813077608_042024-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-conquista-atila-full-carbono-liviana-mla1423245577?taxon_id=5753",
  },
  {
    name: "Paleta Atila Bleda Gota Full Carbono Liviana",
    price: "$259.729",
    oldPrice: null,
    discount: null,
    badge: null,
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXJXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--111c3f12e6cc6bf72b736db70ac55a51a9030d58/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_709831-MLA89460924132_082025-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNkxXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e1f2559b65ac831dbeab8e36d076c6a2fc76ac89/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_640817-MLA75832591278_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNmJXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a26b871db677fc4be0c7267c9cccbeb14df4e3fe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_645494-MLA76004699077_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnpXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--316d55ac04e60da55c7ff2e65efe311cdf726030/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_630871-MLA75832254090_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN1RXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cc78988ebf57b398db4e7d6ed7f65142da988a36/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_642549-MLA75832591312_042024-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-bleda-gota-full-carbono-liviana",
  },
  {
    name: "Paleta Atila Imperia Diamante Full Carbono",
    price: "$285.702",
    oldPrice: null,
    discount: null,
    badge: null,
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeVBYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--019833c8df275c6d6eb46a13efbae909f91713c9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_939270-MLA75984819823_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDNYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0e917b3eebe3f094cad0f005b5a1eed5295d673f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_617778-MLA75984937185_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBempYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5a0606f563ca8fc7f2df07a2c9e36c09c1a5b648/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_992548-MLA75984532033_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeXJYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a7887630bc4937d269cd73ee6851e9106f746c1b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_783768-MLA75813611380_042024-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-imperia-atila-diamante-full-carbono",
  },
  {
    name: "Paleta Atila Soberbia Diamante Full Carbono",
    price: "$285.702",
    oldPrice: null,
    discount: null,
    badge: null,
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeWkxQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7a28a0e51bee8617d93bc56dbffab498488144ea/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_738924-MLA76004056125_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeSsxQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e08aed6d7a8fb25c52754b8ae86885cdea93a583/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_678159-MLA75831474682_042024-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBemkxQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ca5355d50a5c6b45a79665b08289b7cdb1d8aa60/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_699225-MLA76003383995_042024-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-soberbia-diamante-full-carbono-2497499679614431?taxon_id=5753",
  },
  {
    name: "Paleta Atila Bleda Carbono 12k Diamante Eva Soft",
    price: "$240.755",
    oldPrice: "$261.690",
    discount: "8% OFF",
    badge: "NUEVA",
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3E1QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cd4dae4b2598a77135732f64ec68efa7c31b52dc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_698724-MLA103231524584_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd2E2QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cea1b23bee494d1edda161761f86734ebb0d293c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_980021-MLA103233017962_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzI2QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--449218a8aae24bf2863f898052ead49a857f20ba/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_915686-MLA103231546928_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeGU2QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--895d12041d2b01326130b95e546636d9e3b7f7fb/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_664026-MLA103231513624_012026-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-bleda-carbono-12k-diamante-eva-soft",
  },
  {
    name: "Paleta Atila Impune Fibra de Vidrio Diamante Eva",
    price: "$175.619",
    oldPrice: "$190.890",
    discount: "8% OFF",
    badge: "KIT COMBO",
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2k5Qmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dee28c762dff77f60595ddcb9e6d3e9fcbc8b0e2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_755130-MLA110382728201_042026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeUhEQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a80f8255f910d52893c13e6101f41fcc4ff410ff/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_908279-MLA105262278961_012026-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeXpEQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--be1bc6415a6c0fb92a91eced0939898ef7eb005b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_706822-MLA109511698380_042026-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-impune-fibra-de-vidrio-diamante-nucleo-eva",
  },
  {
    name: "Paleta Atila Huno Redonda Fibra Vidrio Foam",
    price: "$159.209",
    oldPrice: null,
    discount: null,
    badge: null,
    images: [
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUc1QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--12bf2ee7812900cd1ddc9d00e9f4846039ac50f9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_834340-MLA102996133909_122025-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOGU1QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--15299867cb843e81052f1da456ba7ab0abb6242a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_735572-MLA102996134051_122025-F.webp",
      "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3U1QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fafa6267eebdf8433cd4dd62556ecda814028a56/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQW1zRE1BPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--aa8de4e355790c0144fef8391369ebad02ad8e4f/D_790910-MLA75812958136_042024-F.webp",
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-huno-redonda-fibra-vidrio-nucleo-foam",
  },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [currentImg, setCurrentImg] = useState(0);
  const hasMultiple = product.images.length > 1;

  const prev = () => setCurrentImg((i) => (i === 0 ? product.images.length - 1 : i - 1));
  const next = () => setCurrentImg((i) => (i === product.images.length - 1 ? 0 : i + 1));

  return (
    <div className="bg-atila-gray-900 border border-atila-gray-700 overflow-hidden hover:border-atila-accent transition-colors group flex flex-col">
      <div className="relative bg-atila-gray-800 aspect-square overflow-hidden">
        <Image
          src={product.images[currentImg]}
          alt={`${product.name} - imagen ${currentImg + 1}`}
          fill
          className="object-contain p-4 transition-opacity"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-atila-accent text-atila-black text-[10px] uppercase tracking-wider px-2.5 py-1">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] uppercase tracking-wider px-2 py-1">
            {product.discount}
          </span>
        )}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-atila-gray-900/70 hover:bg-atila-gray-900 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-atila-gray-900/70 hover:bg-atila-gray-900 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  className={`w-2 h-2 transition-colors ${
                    i === currentImg ? "bg-atila-accent" : "bg-atila-gray-500"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm uppercase tracking-wider leading-snug mb-2">
          {product.name}
        </h3>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <p className="text-atila-accent text-xl">{product.price}</p>
            {product.oldPrice && (
              <p className="text-atila-gray-500 text-sm line-through">{product.oldPrice}</p>
            )}
          </div>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${product.name} en Gravedad X`}
            className="mt-4 flex items-center justify-center gap-2 bg-atila-accent text-atila-black hover:brightness-110 w-full py-3 uppercase tracking-wider text-xs transition-colors"
          >
            <ShoppingBag size={16} />
            COMPRAR
          </a>
          <p className="mt-2 text-atila-gray-500 text-[10px] uppercase tracking-wider text-center">
            Sin intermediarios — compra directa en Gravedad X
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="pb-16 bg-atila-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  RESEÑAS — Instagram Reels                                           */
/* ------------------------------------------------------------------ */
const reels = [
  { url: "https://www.instagram.com/reel/DVriHJnkTqQ/embed/", label: "Reel 1" },
  { url: "https://www.instagram.com/reel/DRNvIAZkm7q/embed/", label: "Reel 2" },
  { url: "https://www.instagram.com/reel/DXu3uACk6cq/embed/", label: "Reel 3" },
];

function Resenas() {
  return (
    <section className="py-24 relative overflow-hidden bg-atila-gray-950">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-atila-gray-900/50 via-atila-gray-950 to-atila-black/80" />
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(65,215,167,0.5) 40px, rgba(65,215,167,0.5) 41px)",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl uppercase tracking-tight mb-16">
          NUESTRO TRABAJO <span className="text-atila-accent">EN ACCIÓN</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reels.map((r, i) => (
            <div
              key={i}
              className="border border-atila-gray-700 overflow-hidden bg-atila-gray-900"
            >
              <iframe
                src={r.url}
                width="100%"
                height="550"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                className="w-full"
                title={r.label}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer role="contentinfo" id="contacto" className="bg-atila-gray-900 border-t border-atila-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logoFinalBlanco.png"
              alt="ATILA PÁDEL"
              width={180}
              height={72}
              className="h-20 w-auto mb-4"
            />
            <p className="text-atila-gray-400 text-sm leading-relaxed">
              Construimos complejos de pádel de clase mundial. Diseño, instalación y garantía.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-atila-gray-400">
              <a href="mailto:info@atilapadel.com" className="flex items-center gap-2 hover:text-atila-accent transition-colors">
                <Mail size={16} /> info@atilapadel.com
              </a>
              <a href="tel:+5493415607480" className="flex items-center gap-2 hover:text-atila-accent transition-colors">
                <Phone size={16} /> +54 9 3415 60-7480
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> La Paz 3940, Rosario, Santa Fe
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4">Seguinos</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/atilapadel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-atila-gray-400 hover:text-atila-accent transition-colors"
              >
                <Instagram size={20} />
                <span className="text-sm">@atilapadel</span>
              </a>
              <a
                href="https://www.tiktok.com/@atilapadel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-atila-gray-400 hover:text-atila-accent transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z"/>
                </svg>
                <span className="text-sm">@atilapadel</span>
              </a>
              <a
                href="https://www.youtube.com/@atilapadel/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-atila-gray-400 hover:text-atila-accent transition-colors"
              >
                <Youtube size={20} />
                <span className="text-sm">ATILA PÁDEL</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-atila-gray-700 text-center">
          <p className="text-atila-gray-500 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} ATILA PÁDEL. Todos los derechos reservados.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="text-atila-gray-600 text-[10px] uppercase tracking-wider">Powered by</span>
            <Image
              src="/moveup-logo.png"
              alt="MoveUp"
              width={50}
              height={15}
              className="h-4 w-auto opacity-50 hover:opacity-80 transition-opacity"
              unoptimized
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  FLOATING WHATSAPP                                                   */
/* ------------------------------------------------------------------ */
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5493415607480"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con un asesor por WhatsApp"
      className="pulse-teal fixed bottom-6 right-6 z-50 bg-atila-accent text-atila-black w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-all"
    >
      <MessageCircle size={28} />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  SCROLL TO TOP                                                       */
/* ------------------------------------------------------------------ */
function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 bg-atila-gray-800 hover:bg-atila-gray-700 text-atila-gray-300 p-3 transition-colors"
      aria-label="Volver arriba"
    >
      <ChevronUp size={20} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data                                             */
/* ------------------------------------------------------------------ */
function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ATILA PÁDEL",
    description: "Diseño e instalación de canchas de pádel profesionales en Argentina",
    url: "https://atilapadel.com",
    telephone: "+5493415607480",
    email: "info@atilapadel.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "La Paz 3940",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-32.9442",
      longitude: "-60.6505",
    },
    sameAs: [
      "https://www.instagram.com/atilapadel/",
      "https://www.tiktok.com/@atilapadel",
      "https://www.youtube.com/@atilapadel/videos",
    ],
    priceRange: "$$$",
    image: "https://atilapadel.com/logoFinalBlanco.png",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ATILA PÁDEL",
    url: "https://atilapadel.com",
    logo: "https://atilapadel.com/isologotipo-page3.png",
    sameAs: [
      "https://www.instagram.com/atilapadel/",
      "https://www.tiktok.com/@atilapadel",
      "https://www.youtube.com/@atilapadel/videos",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusiness, organization]),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <main className="min-h-screen">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-atila-accent focus:text-atila-black focus:px-4 focus:py-2 focus:text-sm focus:uppercase focus:tracking-wider focus:rounded"
      >
        Ir al contenido principal
      </a>
      <JsonLd />
      <Navbar />
      <Hero />
      <PropuestaValor />
      <Canchas />
      <CarouselGallery />
      <Cotizador />
      <Resenas />
      <TiendaHeader />
      <ProductGrid />
      <Footer />
      <FloatingWhatsApp />
      <ScrollTop />
    </main>
  );
}
