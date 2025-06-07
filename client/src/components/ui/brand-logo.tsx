interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
}

export function BrandLogo({ className = "", onClick }: BrandLogoProps) {
  return (
    <span className={`font-heading cursor-pointer ${className}`} onClick={onClick}>
      <span className="font-bold">Managed</span>
      <span className="font-light">Spa</span>
    </span>
  );
}