'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GarsaLogo } from '@/components/garsa-logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl transition-all duration-300',
        scrolled ? 'shadow-sm' : 'shadow-none',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="GARSA Industries inicio">
          <GarsaLogo variant="default" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            size="lg"
            nativeButton={false}
            className="blue-gradient px-5 text-white shadow-md shadow-primary/20 [a]:hover:opacity-95"
            render={<a href="#contacto">Solicitar cotización</a>}
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="lg"
              nativeButton={false}
              className="mt-2 blue-gradient text-white"
              render={<a href="#contacto" onClick={() => setOpen(false)}>Solicitar cotización</a>}
            />
          </nav>
        </div>
      )}
    </header>
  )
}
