import { Flame, FlaskConical, Beaker, Droplets, Pill, Utensils, Mountain, Zap } from 'lucide-react'

const industries = [
  { icon: Flame, name: 'Oil & Gas' },
  { icon: FlaskConical, name: 'Petroquímica' },
  { icon: Beaker, name: 'Química' },
  { icon: Droplets, name: 'Agua y Saneamiento' },
  { icon: Pill, name: 'Farmacéutica' },
  { icon: Utensils, name: 'Alimentos' },
  { icon: Mountain, name: 'Minería' },
  { icon: Zap, name: 'Energía' },
]

export function IndustriesSection() {
  return (
    <section id="industrias" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Industrias</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sectores que exigen precisión y confiabilidad
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Soluciones de control de flujo para plantas, líneas de proceso, mantenimiento y proyectos industriales.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.name} className="group rounded-2xl border border-primary/10 bg-secondary/70 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-primary/10">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm transition-colors group-hover:blue-gradient group-hover:text-white">
                <ind.icon className="size-6" />
              </div>
              <span className="mt-5 block font-bold text-foreground">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
