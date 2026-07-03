import {
  Circle,
  ArrowDownUp,
  Globe,
  ShieldCheck,
  RotateCw,
  Plug,
  Scissors,
  Cog,
  Activity,
  ArrowRight,
} from 'lucide-react'

const products = [
  { icon: Circle, name: 'Válvulas de Bola', desc: 'Cierre hermético y operación rápida para servicio on/off en líneas de proceso.' },
  { icon: ArrowDownUp, name: 'Válvulas de Compuerta', desc: 'Aislamiento total con baja caída de presión para grandes diámetros.' },
  { icon: Globe, name: 'Válvulas de Globo', desc: 'Regulación y estrangulamiento preciso del flujo en aplicaciones críticas.' },
  { icon: ShieldCheck, name: 'Válvulas Check', desc: 'Prevención de retorno de flujo para proteger equipos y bombas.' },
  { icon: RotateCw, name: 'Válvulas Mariposa', desc: 'Diseño compacto y ligero para control y aislamiento eficiente.' },
  { icon: Plug, name: 'Válvulas Plug', desc: 'Sello confiable para fluidos abrasivos, viscosos y con sólidos.' },
  { icon: Scissors, name: 'Válvulas de Cuchilla', desc: 'Ideales para pulpas, lodos y servicios con material particulado.' },
  { icon: Cog, name: 'Actuadores', desc: 'Automatización neumática y eléctrica para operación remota y segura.' },
  { icon: Activity, name: 'Instrumentación', desc: 'Medición y control de presión, temperatura, nivel y caudal.' },
]

export function ProductsSection() {
  return (
    <section id="productos" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Productos</span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Líneas de producto para control de flujo
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Portafolio de válvulas, actuadores e instrumentación respaldado por proveedores confiables y estándares internacionales.
            </p>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
            Solicitar lista completa <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-primary transition-colors group-hover:blue-gradient group-hover:text-white">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a href="#contacto" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-all hover:gap-2.5">
                Cotizar <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
