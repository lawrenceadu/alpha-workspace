import { helpers } from '@alpha/utils';

export interface BadgeProps {
  variant: string;
  children: any;
}

export function Badge({ variant, children }: BadgeProps) {
  /**
   * variants
   */
  variant = variant.toLowerCase();

  return (
    <div
      className={helpers.classNames(
        'py-1 px-2 rounded-[4px] inline-block text-xs',
        ['success', 'fulfilled', 'active'].includes(variant) &&
          'text-green-500 bg-green-50',
        ['rejected', 'failed', 'suspended'].includes(variant) && 'text-red-600 bg-red-50',
        ['warning', 'pending'].includes(variant) && 'text-amber-500 bg-amber-50'
      )}
    >
      {children}
    </div>
  );
}

export default Badge;
