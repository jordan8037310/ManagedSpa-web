import { Link } from "wouter";

interface ScrollLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function ScrollLink({ href, className, children }: ScrollLinkProps) {
  const handleClick = () => {
    // Scroll to top after a short delay to allow navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}