import Link from 'next/link';
import clsx from 'clsx';

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 dark:bg-zinc-700',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-300',
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  disabled?: boolean;
  submitted?: boolean;
  error?: boolean;
} & (
    | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
    | React.ComponentPropsWithoutRef<typeof Link>
  );

export function Button({ variant = 'primary', className, disabled, submitted, error, ...props }: ButtonProps) {
  const isSubmitted = submitted || false;
  const isDisabled = disabled || false;
  const isError = error || false;
  const isAnchor = typeof props.href !== 'undefined';

  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
    {
      'bg-emerald-600 dark:bg-emerald-800': isSubmitted,
      'cursor-not-allowed': isDisabled,
      'bg-red-500 dark:bg-red-400': isError,
      'hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70': !isDisabled && variantStyles['primary'],
      'hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:hover:bg-zinc-800 dark:hover:text-red-400 hover:text-red-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70': !isDisabled && variantStyles['secondary'],
    }
  );

  return isAnchor ? (
    <Link className={className} {...props} />
  ) : (
    <button className={className} disabled={isDisabled} {...props} />
  );
}
