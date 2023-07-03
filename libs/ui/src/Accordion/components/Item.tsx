import { Dispatch, HtmlHTMLAttributes, SetStateAction, Children, cloneElement } from 'react'; // prettier-ignore
import { helpers } from '@alpha/utils';

// eslint-disable-next-line
export interface ItemProps extends HtmlHTMLAttributes<HTMLElement> {
  eventKey: string;
  active?: string | string[];
  setActive?: Dispatch<SetStateAction<string | string[]>>;
}

export default function Item({
  active,
  children,
  eventKey,
  className,
  setActive,
  ...props
}: ItemProps) {
  /**
   * function
   */
  const handleActive = () => {
    setActive?.((active) =>
      Array.isArray(active)
        ? active.includes(eventKey)
          ? active.filter((i) => i !== eventKey)
          : [...active, eventKey]
        : active === eventKey
        ? ''
        : eventKey
    );
  };

  return (
    <div className={helpers.classNames(className)}>
      {Children.map(
        children,
        (child: any) =>
          child &&
          cloneElement(child, {
            ...child.props,
            eventKey,
            setActive: handleActive,
            active: Array.isArray(active)
              ? active?.includes(eventKey)
              : active === eventKey,
          })
      )}
    </div>
  );
}
