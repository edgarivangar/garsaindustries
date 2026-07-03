'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojoprpp'

const productOptions = [
  'Válvulas de Bola',
  'Válvulas de Compuerta',
  'Válvulas de Globo',
  'Válvulas Check',
  'Válvulas Mariposa',
  'Válvulas Plug',
  'Válvulas de Cuchilla',
  'Actuadores',
  'Instrumentación',
  'Otro / No estoy seguro',
]

const fieldClass =
  'w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20'

export function RfqSection() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    setSending(false)

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    } else {
      alert('No se pudo enviar la solicitud. Inténtalo de nuevo.')
    }
  }

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Solicitar cotización
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cuéntanos sobre tu proyecto
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Completa el formulario y nuestro equipo te enviará una cotización
              a la medida.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl blue-gradient text-white shadow-md shadow-primary/15">
                  <Mail className="size-5" />
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Correo</dt>
                  <dd className="font-medium text-foreground">ventas@garsaindustries.com</dd>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl blue-gradient text-white shadow-md shadow-primary/15">
                  <Phone className="size-5" />
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Teléfono</dt>
                  <dd className="font-medium text-foreground">56 6264 6379</dd>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl blue-gradient text-white shadow-md shadow-primary/15">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Cobertura</dt>
                  <dd className="font-medium text-foreground">Nacional · México</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-2xl shadow-primary/10 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    Solicitud enviada
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Gracias por contactar a GARSA Industries. Revisaremos tu
                    requerimiento y te responderemos a la brevedad.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <input type="hidden" name="_subject" value="Nueva RFQ - GARSA Industries" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">
                        Nombre
                      </label>
                      <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre completo" className={fieldClass} />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-foreground">
                        Empresa
                      </label>
                      <input id="empresa" name="empresa" type="text" required placeholder="Nombre de la empresa" className={fieldClass} />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="correo" className="mb-1.5 block text-sm font-medium text-foreground">
                        Correo
                      </label>
                      <input id="correo" name="correo" type="email" required placeholder="correo@empresa.com" className={fieldClass} />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-foreground">
                        Teléfono
                      </label>
                      <input id="telefono" name="telefono" type="tel" placeholder="+52 55 0000 0000" className={fieldClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="producto" className="mb-1.5 block text-sm font-medium text-foreground">
                      Producto requerido
                    </label>
                    <select id="producto" name="producto" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>Selecciona un producto</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="especificaciones" className="mb-1.5 block text-sm font-medium text-foreground">
                      Especificaciones
                    </label>
                    <textarea
                      id="especificaciones"
                      name="especificaciones"
                      rows={4}
                      placeholder='Diámetro, presión, temperatura, fluido, material, cantidad...'
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="h-12 blue-gradient text-base text-white shadow-lg shadow-primary/20 hover:opacity-95 disabled:opacity-60"
                  >
                    {sending ? 'Enviando solicitud...' : 'Enviar solicitud'}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Al enviar aceptas ser contactado por el equipo de GARSA Industries.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
