import { Zap, Headset, Handshake, MapPin } from 'lucide-react'

const reasons = [
  { icon: Zap, title: 'Respuesta técnica ágil', text: 'Cotizaciones ágiles y tiempos de entrega optimizados para no detener tu operación.' },
  { icon: Headset, title: 'Soporte especializado', text: 'Asesoría para seleccionar la válvula, material y configuración adecuada.' },
  { icon: Handshake, title: 'Proveedores confiables', text: 'Suministro con marcas y fabricantes alineados a estándares industriales.' },
  { icon: MapPin, title: 'Cobertura nacional', text: 'Atención a proyectos y requerimientos en toda la República Mexicana.' },
]

export function WhySection() {
  return (
    <section id="recursos" className="relative isolate overflow-hidden bg-secondary py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute right-0 top-16 -z-10 size-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Por qué GARSA</span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Modernidad y confiabilidad para tu suministro industrial
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Una experiencia comercial clara, profesional y enfocada en resolver requerimientos técnicos sin complicar tu compra.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex size-12 items-center justify-center rounded-2xl blue-gradient text-white shadow-md shadow-primary/15">
                  <r.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
