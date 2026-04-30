"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Layers,
  Zap,
  ShieldCheck,
  Star,
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "INICIO", href: "#inicio" },
    { label: "SERVICIOS", href: "#servicios" },
    { label: "CANCHAS", href: "#canchas" },
    { label: "COTIZADOR", href: "#cotizador" },
    { label: "TIENDA", href: "#tienda" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo-sin-fondo.png"
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
              className="text-slate-200 hover:text-lime-400 uppercase tracking-wider text-xs font-semibold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizador"
            className="bg-lime-400 text-slate-950 px-5 py-2 rounded font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all"
          >
            COTIZAR
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-slate-200 hover:text-lime-400 uppercase tracking-wider text-sm font-semibold border-b border-slate-800"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizador"
            className="mt-4 block text-center bg-lime-400 text-slate-950 px-5 py-2 rounded font-bold uppercase tracking-wider text-xs"
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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/full-panoramica.avif"
          alt="Vista panorámica de cancha de pádel profesional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-widest leading-tight">
          CONSTRUIMOS TU COMPLEJO DE PÁDEL.{" "}
          <span className="text-lime-400">LLAVE EN MANO.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Calidad profesional y materiales premium para el club que buscas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cotizador"
            className="bg-lime-400 text-slate-950 px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:scale-105 hover:brightness-110 transition-all"
          >
            COTIZAR MI CANCHA
          </a>
          <a
            href="#tienda"
            className="border-2 border-lime-400 text-lime-400 px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:bg-lime-400/10 transition-all"
          >
            VER EQUIPAMIENTO OFICIAL
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
    title: "DISEÑO AVANZADO",
    text: "Tecnología en blindex, césped sintético pro y estructuras certificadas.",
  },
  {
    icon: Zap,
    title: "INSTALACIÓN RÁPIDA",
    text: "Equipo certificado con plazos reales y coordinación llave en mano.",
  },
  {
    icon: ShieldCheck,
    title: "GARANTÍA DE DURABILIDAD",
    text: "Materiales premium con respaldo post-instalación.",
  },
];

function PropuestaValor() {
  return (
    <section id="servicios" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-widest mb-16">
          POR QUÉ <span className="text-lime-400">ELEGIRNOS</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {b2bCards.map((c) => (
            <div
              key={c.title}
              className="bg-slate-900 border border-slate-700 rounded-lg p-8 text-center hover:border-lime-400/50 transition-colors"
            >
              <c.icon className="mx-auto text-lime-400" size={40} strokeWidth={1.5} />
              <h3 className="mt-6 text-lg font-bold uppercase tracking-wider">
                {c.title}
              </h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TIPOS DE CANCHAS                                                    */
/* ------------------------------------------------------------------ */
const canchas = [
  {
    title: "PANORÁMICA",
    subtitle: "Visibilidad total",
    description: "Canchas con cristal templado de piso a techo. La experiencia premium para jugadores y espectadores.",
    image: "/full-panoramica.avif",
    features: ["Cristal templado integral", "Iluminación LED profesional", "Césped sintético premium"],
  },
  {
    title: "PROFESIONAL",
    subtitle: "Rendimiento competitivo",
    description: "Estándar WPT con blindex de cristal y estructura certificada. Para quienes compiten en serio.",
    image: "/cerrada-profesional.jpeg",
    features: ["Blindex de cristal templado", "Estructura certificada WPT", "Césped monofilamento"],
  },
  {
    title: "ESTÁNDAR",
    subtitle: "Calidad accesible",
    description: "La puerta de entrada al pádel profesional. Malla tensionada y materiales duraderos.",
    image: "/abierta.webp",
    features: ["Malla tensionada reforzada", "Césped sintético estándar", "Estructura galvanizada"],
  },
];

function Canchas() {
  return (
    <section id="canchas" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4">
          NUESTRAS <span className="text-lime-400">CANCHAS</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Tres líneas de construcción para cada nivel de exigencia. Todas con garantía de calidad ATILA.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {canchas.map((c) => (
            <div
              key={c.title}
              className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-lime-400/50 transition-colors group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={c.image}
                  alt={`Cancha ${c.title} de pádel`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lime-400 font-bold uppercase tracking-widest text-lg">{c.title}</h3>
                  <p className="text-slate-300 text-xs uppercase tracking-wider">{c.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{c.description}</p>
                <ul className="space-y-2">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COTIZADOR INTERACTIVO                                               */
/* ------------------------------------------------------------------ */
interface QuoterForm {
  tipoCancha: string;
  cantidad: string;
  materialPiso: string;
  tipoBlindex: string;
  ubicacion: string;
  superficie: string;
  presupuesto: string;
  observaciones: string;
}

const defaults: QuoterForm = {
  tipoCancha: "",
  cantidad: "",
  materialPiso: "",
  tipoBlindex: "",
  ubicacion: "",
  superficie: "",
  presupuesto: "",
  observaciones: "",
};

function Cotizador() {
  const [form, setForm] = useState<QuoterForm>(defaults);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoterForm, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const required: (keyof QuoterForm)[] = [
    "tipoCancha",
    "cantidad",
    "materialPiso",
    "tipoBlindex",
    "ubicacion",
    "superficie",
    "presupuesto",
  ];

  function validate(): boolean {
    const e: typeof errors = {};
    for (const k of required) {
      if (!form[k].trim()) e[k] = "Este campo es obligatorio";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      setForm(defaults);
      setSubmitted(false);
    }, 3000);
  }

  const selectCls =
    "w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-lime-400 transition-colors appearance-none";
  const inputCls =
    "w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-lime-400 transition-colors";

  return (
    <section id="cotizador" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4">
          COTIZADOR <span className="text-lime-400">INTERACTIVO</span>
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Completá el formulario y recibí tu presupuesto detallado en 24hs.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-lime-400/30 rounded-lg p-8 shadow-[0_0_30px_rgba(163,230,53,0.08)] space-y-5"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                Tipo de Cancha *
              </label>
              <select
                value={form.tipoCancha}
                onChange={(e) => setForm({ ...form, tipoCancha: e.target.value })}
                className={`${selectCls} ${errors.tipoCancha ? "border-red-500" : ""}`}
              >
                <option value="">Seleccioná</option>
                <option>Panorámica</option>
                <option>Profesional</option>
                <option>Estándar</option>
              </select>
              {errors.tipoCancha && <p className="text-red-400 text-xs mt-1">{errors.tipoCancha}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                Cantidad de Canchas *
              </label>
              <select
                value={form.cantidad}
                onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
                className={`${selectCls} ${errors.cantidad ? "border-red-500" : ""}`}
              >
                <option value="">Seleccioná</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              {errors.cantidad && <p className="text-red-400 text-xs mt-1">{errors.cantidad}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                Material de Piso *
              </label>
              <select
                value={form.materialPiso}
                onChange={(e) => setForm({ ...form, materialPiso: e.target.value })}
                className={`${selectCls} ${errors.materialPiso ? "border-red-500" : ""}`}
              >
                <option value="">Seleccioná</option>
                <option>Césped Sintético Premium</option>
                <option>Césped Sintético Estándar</option>
                <option>Arcilla Sintética</option>
              </select>
              {errors.materialPiso && <p className="text-red-400 text-xs mt-1">{errors.materialPiso}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                Tipo de Blindex *
              </label>
              <select
                value={form.tipoBlindex}
                onChange={(e) => setForm({ ...form, tipoBlindex: e.target.value })}
                className={`${selectCls} ${errors.tipoBlindex ? "border-red-500" : ""}`}
              >
                <option value="">Seleccioná</option>
                <option>Cristal Templado</option>
                <option>Policarbonato</option>
                <option>Malla Tensionada</option>
              </select>
              {errors.tipoBlindex && <p className="text-red-400 text-xs mt-1">{errors.tipoBlindex}</p>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                Ubicación *
              </label>
              <input
                type="text"
                value={form.ubicacion}
                onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
                placeholder="Ciudad / Provincia"
                className={`${inputCls} ${errors.ubicacion ? "border-red-500" : ""}`}
              />
              {errors.ubicacion && <p className="text-red-400 text-xs mt-1">{errors.ubicacion}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                Superficie Aproximada (m²) *
              </label>
              <input
                type="text"
                value={form.superficie}
                onChange={(e) => setForm({ ...form, superficie: e.target.value })}
                placeholder="Ingresá los metros cuadrados disponibles"
                className={`${inputCls} ${errors.superficie ? "border-red-500" : ""}`}
              />
              {errors.superficie && <p className="text-red-400 text-xs mt-1">{errors.superficie}</p>}
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
              Presupuesto Estimado *
            </label>
            <select
              value={form.presupuesto}
              onChange={(e) => setForm({ ...form, presupuesto: e.target.value })}
              className={`${selectCls} ${errors.presupuesto ? "border-red-500" : ""}`}
            >
              <option value="">Seleccioná</option>
              <option>Hasta $100k</option>
              <option>$100k - $300k</option>
              <option>$300k - $500k</option>
              <option>Más de $500k</option>
            </select>
            {errors.presupuesto && <p className="text-red-400 text-xs mt-1">{errors.presupuesto}</p>}
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
              Observaciones Adicionales
            </label>
            <textarea
              value={form.observaciones}
              onChange={(e) => setForm({ ...form, observaciones: e.target.value })}
              placeholder="Cuéntanos más sobre tu proyecto (techos, iluminación, servicios complementarios, etc.)"
              rows={4}
              className={inputCls}
            />
          </div>

          {/* Submit */}
          {submitted ? (
            <div className="bg-lime-400/10 border border-lime-400/40 rounded-lg p-6 text-center animate-fade-in-up">
              <p className="text-lime-400 font-bold text-lg">
                ¡Tu solicitud fue enviada! Te contactamos en 24hs para detallar tu cotización.
              </p>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-lime-400 text-slate-950 py-4 rounded font-bold uppercase tracking-wider text-sm hover:brightness-110 hover:scale-[1.02] transition-all"
              aria-label="Obtener presupuesto detallado"
            >
              OBTENER PRESUPUESTO DETALLADO
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  RESEÑAS                                                             */
/* ------------------------------------------------------------------ */
const reviews = [
  {
    stars: 5,
    text: "ATILA construyó nuestras 4 canchas panorámicas en tiempo récord. La calidad del blindex y el césped es impecable. Nuestros socios están encantados con el resultado.",
    name: "Martín Leguizamón",
    role: "Director — Pádel Club San Isidro",
    location: "Buenos Aires, Argentina",
  },
  {
    stars: 5,
    text: "Desde el diseño hasta la entrega final, el equipo de ATILA fue profesional y transparente. Las canchas quedaron perfectas y el servicio post-instalación es excelente.",
    name: "Carolina Méndez",
    role: "Fundadora — Mega Pádel Rosario",
    location: "Rosario, Argentina",
  },
  {
    stars: 5,
    text: "Elegimos a ATILA por la garantía de durabilidad y no nos defraudaron. Dos años después, las canchas lucen como el primer día. Recomiendo sin dudas.",
    name: "Esteban Ruiz",
    role: "Gerente — Complejo Pádel Sur",
    location: "Córdoba, Argentina",
  },
];

function Resenas() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/abierta.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/80 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-widest mb-16">
          LO QUE DICEN NUESTROS <span className="text-lime-400">CLIENTES</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-700 rounded-lg p-8 hover:border-lime-400/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="text-lime-400 fill-lime-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-slate-700 pt-4">
                <p className="font-bold text-slate-50">{r.name}</p>
                <p className="text-lime-400 text-xs uppercase tracking-wider">
                  {r.role}
                </p>
                <p className="text-slate-500 text-xs mt-1">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TIENDA OFICIAL B2C — Header                                         */
/* ------------------------------------------------------------------ */
function TiendaHeader() {
  return (
    <section id="tienda" className="pt-24 pb-4 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
          TIENDA OFICIAL: ACCESORIOS DE <span className="text-lime-400">ÉLITE</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Potencia tu juego con tecnología ATILA. Paletas de carbono premium con la mejor tecnología. Comprá directo y sin intermediarios.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="block h-px w-16 bg-slate-700" />
          <span className="block h-1.5 w-1.5 rounded-full bg-lime-400" />
          <span className="block h-px w-16 bg-slate-700" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRODUCT GRID                                                        */
/* ------------------------------------------------------------------ */
const CDN = "https://d1v25kychuu7fe.cloudfront.net/web-experto/representations";

const products = [
  {
    name: "Paleta Atila Conquista Carbono 12k Diamante Eva Feel",
    price: "$271.005",
    oldPrice: "$325.220",
    discount: "17% OFF",
    badge: "MÁS VENDIDA",
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2NGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a0faf0610b203968e7be604db56dd489378ccdb2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--6b3e9e96fb12d3ce5d7f12b36f89e07d26fd26f5/D_653715-MLA105260751117_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEFGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8347864fac24a48a660a0610aa654ef2466a1e29/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8/D_736012-MLA104700736004_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOFFGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--41f207cee67cbd2e55a0cd262ae1e935f420e752/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7f8c3d2e1b0a9f4d6c5e8a7b3f0d2c4e/D_863903-MLA105262677135_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOGtGQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--de251670a8252f5d7ac3406ef0a36017007ef388/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--83d2eae51b3e2e22a4a9b6f6e5c0e1b2d4f8a9c2/D_705499-MLA105262230985_012026-F.webp`,
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-conquista-carbono-12k-diamante-eva-feel",
  },
  {
    name: "Paleta Atila Bleda Gota Full Carbono Liviana",
    price: "$259.729",
    oldPrice: null,
    discount: null,
    badge: null,
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXJXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--111c3f12e6cc6bf72b736db70ac55a51a9030d58/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_709831-MLA89460924132_082025-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNkxXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e1f2559b65ac831dbeab8e36d076c6a2fc76ac89/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--45d4e3b00b4fe7f2b1e56b3fbb97f90785a5f1b8/D_640817-MLA75832591278_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNmJXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a26b871db677fc4be0c7267c9cccbeb14df4e3fe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7f8c3d2e1b0a9f4d6c5e8a7b3f0d2c4e/D_645494-MLA76004699077_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnpXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--316d55ac04e60da55c7ff2e65efe311cdf726030/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--83d2eae51b3e2e22a4a9b6f6e5c0e1b2d4f8a9c2/D_630871-MLA75832254090_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN1RXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cc78988ebf57b398db4e7d6ed7f65142da988a36/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e8d7c6b5a4f3e2d1c0b/D_642549-MLA75832591312_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN3ZXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7f54f29ba2ad5a50a13f1795024833c8496fee20/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_760240-MLA75832561340_042024-F.webp`,
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-bleda-gota-full-carbono-liviana",
  },
  {
    name: "Paleta Atila Imperia Diamante Full Carbono",
    price: "$227.900",
    oldPrice: "$251.240",
    discount: "9% OFF",
    badge: null,
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeVBYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--019833c8df275c6d6eb46a13efbae909f91713c9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--45d4e3b00b4fe7f2b1e56b3fbb97f90785a5f1b8/D_939270-MLA75984819823_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeXJYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a7887630bc4937d269cd73ee6851e9106f746c1b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7f8c3d2e1b0a9f4d6c5e8a7b3f0d2c4e/D_783768-MLA75813611380_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBempYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5a0606f563ca8fc7f2df07a2c9e36c09c1a5b648/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--83d2eae51b3e2e22a4a9b6f6e5c0e1b2d4f8a9c2/D_992548-MLA75984532033_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBei9YQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5b334def20f6d7ba202beae50cfbdbe5424220a9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e8d7c6b5a4f3e2d1c0b/D_896332-MLA75984542233_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDNYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0e917b3eebe3f094cad0f005b5a1eed5295d673f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_617778-MLA75984937185_042024-F.webp`,
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-imperia-atila-diamante-full-carbono",
  },
  {
    name: "Paleta Atila Soberbia Diamante Full Carbono",
    price: "$227.900",
    oldPrice: "$251.240",
    discount: "9% OFF",
    badge: null,
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3BXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--07ef07ece2d2f9b27ea24b9d7b38db80d0b3b144/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--83d2eae51b3e2e22a4a9b6f6e5c0e1b2d4f8a9c2/D_879741-MLA75844976874_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0tXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e8d7c6b5a4f3e2d1c0b/D_699225-MLA76003383995_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK1lXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_738924-MLA76004056125_042024-F.webp`,
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-soberbia-diamante-full-carbono",
  },
  {
    name: "Paleta Atila Bleda Carbono 12k Diamante Eva Soft",
    price: "$237.900",
    oldPrice: "$261.690",
    discount: "9% OFF",
    badge: "NUEVA",
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTRXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0a8e32b72e91b92f4b2a3e55a74f15a9e2e07b74/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7f8c3d2e1b0a9f4d6c5e8a7b3f0d2c4e/D_658752-MLA103748156661_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOWlXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--83d2eae51b3e2e22a4a9b6f6e5c0e1b2d4f8a9c2/D_664026-MLA103231513624_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXNXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e8d7c6b5a4f3e2d1c0b/D_698724-MLA103231524584_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTJXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_710141-MLA103231547930_012026-F.webp`,
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-bleda-carbono-12k-diamante-eva-soft",
  },
  {
    name: "Paleta Atila Impune Fibra de Vidrio Diamante Eva",
    price: "$179.578",
    oldPrice: "$190.890",
    discount: "6% OFF",
    badge: "KIT COMBO",
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMFpXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--22fe8f00c8ab06688bf66bf18f52de20e7f5e74c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e8d7c6b5a4f3e2d1c0b/D_706822-MLA109511698380_042026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMG5XQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_877860-MLA105263911189_012026-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMHdXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--45d4e3b00b4fe7f2b1e56b3fbb97f90785a5f1b8/D_908279-MLA105262278961_012026-F.webp`,
    ],
    url: "https://www.gravedadx.com/products/paleta-padel-atila-impune-fibra-de-vidrio-diamante-nucleo-eva",
  },
  {
    name: "Paleta Atila Huno Redonda Fibra Vidrio Foam",
    price: "$124.750",
    oldPrice: "$132.000",
    discount: "5% OFF",
    badge: "ENVÍO GRATIS",
    images: [
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL1pXQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4e8a9d2c7f6b5a3e1d0c9b8a7f6e5d4c3b2a1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--1b5f12dfee01e8b63b0e3ef50b1c0bfcb069969d/D_684948-MLA102996590469_122025-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMGJYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--45d4e3b00b4fe7f2b1e56b3fbb97f90785a5f1b8/D_790910-MLA75812958136_042024-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMGtYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7f8c3d2e1b0a9f4d6c5e8a7b3f0d2c4e/D_834340-MLA102996133909_122025-F.webp`,
      `${CDN}/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMHRYQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MY21WemFYcGxYM0l6TkRvNE5EZytCam9HUlZRNkRHTnZiblpsY25RNkNYZGxZbkE2REhGMVlXeHBkSGxwTnc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--83d2eae51b3e2e22a4a9b6f6e5c0e1b2d4f8a9c2/D_947528-MLA102997038525_122025-F.webp`,
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
    <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-lime-400 transition-colors group flex flex-col">
      <div className="relative bg-slate-800 aspect-square overflow-hidden">
        <Image
          src={product.images[currentImg]}
          alt={`${product.name} - imagen ${currentImg + 1}`}
          fill
          className="object-contain p-4 transition-opacity"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-lime-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/70 hover:bg-slate-900 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/70 hover:bg-slate-900 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentImg ? "bg-lime-400" : "bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-sm uppercase tracking-wider leading-snug mb-2">
          {product.name}
        </h3>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <p className="text-lime-400 font-bold text-xl">{product.price}</p>
            {product.oldPrice && (
              <p className="text-slate-500 text-sm line-through">{product.oldPrice}</p>
            )}
          </div>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${product.name} en Gravedad X`}
            className="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white w-full py-3 rounded font-bold uppercase tracking-wider text-xs transition-colors"
          >
            <MessageCircle size={16} />
            Comprar Directo
          </a>
          <p className="mt-2 text-slate-500 text-[10px] uppercase tracking-wider text-center">
            Sin intermediarios — compra directa en Gravedad X
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="pb-16 bg-slate-950">
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
/*  FOOTER                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo-sin-fondo.png"
              alt="ATILA PÁDEL"
              width={200}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Construimos complejos de pádel de clase mundial. Diseño, instalación y garantía llave en mano.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="mailto:info@atilapadel.com" className="flex items-center gap-2 hover:text-lime-400 transition-colors">
                <Mail size={16} /> info@atilapadel.com
              </a>
              <a href="tel:+5491100000000" className="flex items-center gap-2 hover:text-lime-400 transition-colors">
                <Phone size={16} /> +54 9 11 0000-0000
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Buenos Aires, Argentina
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Seguinos</h4>
            <a
              href="https://www.instagram.com/atilapadel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-lime-400 transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@atilapadel</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} ATILA PÁDEL. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-slate-600 text-xs uppercase tracking-wider">Powered by</span>
            <Image
              src="/moveup-logo.png"
              alt="MoveUp"
              width={80}
              height={24}
              className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
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
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con un asesor por WhatsApp"
      className="pulse-lime fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
    >
      <MessageCircle size={28} />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  SCROLL TO TOP (accessibility bonus)                                  */
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
      className="fixed bottom-6 left-6 z-50 bg-slate-800 hover:bg-slate-700 text-slate-300 p-3 rounded-full transition-colors"
      aria-label="Volver arriba"
    >
      <ChevronUp size={20} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PropuestaValor />
      <Canchas />
      <Cotizador />
      <TiendaHeader />
      <ProductGrid />
      <Resenas />
      <Footer />
      <FloatingWhatsApp />
      <ScrollTop />
    </main>
  );
}