import { ArrowRight, ShieldCheck, Check, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  'Respuesta técnica ágil',
  'Soporte especializado',
  'Cobertura nacional',
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 -z-10 soft-grid opacity-70" />
      <div className="absolute -right-40 top-20 -z-10 size-[34rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -left-32 bottom-0 -z-10 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-1.5 shadow-sm">
            <ShieldCheck className="size-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Soluciones de control de flujo · México
            </span>
          </div>

          <h1 className="mt-7 text-balance text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ingeniería para el <span className="text-primary">control de flujo</span> industrial
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Válvulas industriales, actuadores e instrumentación para aplicaciones críticas.
            Suministro confiable, asesoría técnica y respuesta en el menor tiempo posible para tu operación.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 blue-gradient px-6 text-base text-white shadow-lg shadow-primary/20 [a]:hover:opacity-95"
              render={
                <a href="#contacto">
                  Solicitar cotización
                  <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 border-primary/25 bg-white px-6 text-base text-primary hover:bg-secondary hover:text-primary"
              render={<a href="#productos">Ver productos</a>}
            />
          </div>

          <ul className="mt-12 grid max-w-2xl gap-3 border-t border-border pt-8 sm:grid-cols-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="flex size-6 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-4" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl" />
          <div className="overflow-hidden rounded-[1.6rem] border border-primary/10 bg-white p-3 shadow-2xl shadow-primary/15">
            <img
              src="/hero-valve.png"
              alt="Válvula industrial en una planta de proceso"
              className="aspect-[4/3] w-full rounded-[1.2rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-xl shadow-primary/10 sm:flex sm:items-center sm:gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Gauge className="size-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Aplicaciones críticas</p>
              <p className="text-xs text-muted-foreground">Presión · temperatura · fluido · norma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
