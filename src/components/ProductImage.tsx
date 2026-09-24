import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  arch?: boolean; // Arch top for vitrina effect
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
  arch = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F8EADE] border border-[#CFB59E]/40 ${
        arch ? 'rounded-t-[80px] md:rounded-t-[100px] rounded-b-[4px]' : 'rounded-[4px]'
      } ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Elegant Fallback for bakery showcase if image is not yet placed in /public */}
      {hasError || !isLoaded ? (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F8EADE] ${
            isLoaded && !hasError ? 'hidden' : 'flex'
          }`}
        >
          {/* Botanical Petal Mark */}
          <div className="w-12 h-12 rounded-full border border-[#CFB59E] flex items-center justify-center mb-3 bg-[#FEFAF8]/80 text-[#402D21]">
            <svg
              viewBox="0 0 32 32"
              className="w-6 h-6 stroke-[#402D21] fill-none"
              strokeWidth="1.2"
            >
              <path d="M16 6 C18 11 21 14 21 18 C21 21.5 18.5 24 16 24 C13.5 24 11 21.5 11 18 C11 14 14 11 16 6 Z" />
              <path d="M16 11 L16 21" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A] mb-1">
            Pastelería Artesanal
          </span>
          <p className="font-serif-sentida text-sm md:text-base text-[#402D21] line-clamp-2 max-w-[200px]">
            {alt}
          </p>
          <div className="flex flex-col items-center gap-[2px] mt-2">
            <span className="w-6 h-[1px] bg-[#8FB1C9]" />
            <span className="w-4 h-[1px] bg-[#8FB1C9]" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
