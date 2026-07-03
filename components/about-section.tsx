import { Target, Gauge, Wrench } from 'lucide-react'

const pillars = [
  { icon: Target, title: 'Precisión de ingeniería', text: 'Selección técnica de válvulas y actuadores según presión, temperatura y tipo de fluido.' },
  { icon: Gauge, title: 'Aplicaciones críticas', text: 'Soluciones para servicios exigentes en industrias donde la confiabilidad importa.' },
  { icon: Wrench, title: 'Integración y soporte', text: 'Automatización, instrumentación y acompañamiento técnico durante el proceso de compra.' },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Nosotros</span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Un socio industrial confiable en control de flujo
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              GARSA Industries es una empresa mexicana enfocada en el suministro de válvulas industriales, actuadores e instrumentación para aplicaciones críticas.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Combinamos criterio técnico, proveedores confiables y una operación comercial ágil para ayudarte a encontrar la solución correcta sin frenar tu proyecto.
            </p>

            <div className="mt-8 grid gap-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-2xl border border-primary/10 bg-secondary/60 p-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-xl" />
            <div className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white p-3 shadow-xl shadow-primary/10">
              <img src="/plant-engineers.png" alt="Ingenieros revisando una instalación industrial" className="aspect-[4/3] w-full rounded-[1.1rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-xl sm:block">
              <p className="text-3xl font-bold text-primary">México</p>
              <p className="mt-1 max-w-[11rem] text-sm text-muted-foreground">Cobertura nacional para proyectos industriales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
