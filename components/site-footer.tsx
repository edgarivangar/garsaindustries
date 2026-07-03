import { GarsaLogo } from '@/components/garsa-logo'
import { Mail, Phone, MapPin } from 'lucide-react'

const columns = [
  { title: 'Productos', links: ['Válvulas de Bola', 'Válvulas de Compuerta', 'Válvulas Mariposa', 'Actuadores', 'Instrumentación'] },
  { title: 'Industrias', links: ['Oil & Gas', 'Petroquímica', 'Agua y Saneamiento', 'Minería', 'Energía'] },
  { title: 'Empresa', links: ['Nosotros', 'Recursos', 'Contacto', 'Cotización'] },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0a1a2f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-3xl blue-gradient p-8 shadow-2xl shadow-primary/20 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">Request for quotation</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">¿Necesitas una cotización?</h2>
              <p className="mt-2 max-w-2xl text-white/75">Compártenos tu requerimiento y revisamos la mejor ruta de suministro para tu proyecto.</p>
            </div>
            <a href="#contacto" className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 font-bold text-primary shadow-lg transition hover:bg-white/90">
              Solicitar cotización
            </a>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <GarsaLogo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Soluciones de control de flujo industrial para aplicaciones críticas. Ingeniería, válvulas, automatización e instrumentación con cobertura nacional en México.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-3"><Mail className="size-4 text-[#5cb6ff]" />ventas@garsaindustries.com</li>
              <li className="flex items-center gap-3"><Phone className="size-4 text-[#5cb6ff]" />56 6264 6379</li>
              <li className="flex items-center gap-3"><MapPin className="size-4 text-[#5cb6ff]" />Ciudad de México, México</li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#contacto" className="text-sm text-white/60 transition-colors hover:text-[#5cb6ff]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} GARSA Industries. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white">Aviso de privacidad</a>
            <a href="#" className="text-sm text-white/50 hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
