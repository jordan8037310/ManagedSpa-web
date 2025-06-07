import { useLocation } from "wouter";

interface ScrollLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function ScrollLink({ href, className, children }: ScrollLinkProps) {
  const [, setLocation] = useLocation();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(href);
    // Scroll to top after a short delay to allow navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}