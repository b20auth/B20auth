import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: {
    b20: "text-lg",
    a: "text-2xl",
    uth: "text-sm",
  },
  md: {
    b20: "text-xl",
    a: "text-3xl",
    uth: "text-base",
  },
  lg: {
    b20: "text-3xl sm:text-4xl",
    a: "text-5xl sm:text-6xl",
    uth: "text-xl sm:text-2xl",
  },
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const s = sizeClasses[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-baseline leading-none ${className}`}
    >
      <span className={`font-bold tracking-tight text-base-blue ${s.b20}`}>
        B20
      </span>
      <span className={`font-semibold tracking-tight text-zinc-900 ${s.a}`}>
        A
      </span>
      <span className={`font-light tracking-tight text-zinc-900 ${s.uth}`}>
        uth
      </span>
    </Link>
  );
}
