import Image from 'next/image'
import { cn } from '@/lib/utils'

export function GarsaLogo({
  className,
  showText = true,
  variant = 'default',
}: {
  className?: string
  showText?: boolean
  variant?: 'default' | 'light'
}) {
  const textColor = variant === 'light' ? 'text-white' : 'text-foreground'
  const subColor =
    variant === 'light' ? 'text-white/60' : 'text-muted-foreground'
  const markSrc =
    variant === 'light' ? '/garsa-mark-light-t.png' : '/garsa-mark-t.png'

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src={markSrc || "/placeholder.svg"}
        alt="GARSA Industries"
        width={265}
        height={294}
        priority
        className="h-10 w-auto shrink-0"
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('text-base font-bold tracking-tight', textColor)}>
            GARSA{' '}
            <span className="font-medium text-accent">Industries</span>
          </span>
          <span
            className={cn(
              'mt-1 font-mono text-[10px] uppercase tracking-[0.2em]',
              subColor,
            )}
          >
            Engineered Flow Control
          </span>
        </div>
      )}
    </div>
  )
}
