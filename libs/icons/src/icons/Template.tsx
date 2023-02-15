import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  variant?: 'solid' | 'line';
}

export function Template({ size, children, ...props }: IconProps) {
  return (
    <svg
      fill="none"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}
