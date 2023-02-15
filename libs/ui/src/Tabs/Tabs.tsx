import { ComponentType } from 'react';
import * as Restart from '@restart/ui';
import { helpers } from '@alpha/utils';

import { Tab } from './Components/Tab';

export interface TabsProps extends Omit<Restart.TabsProps, 'onSelect'> {
  tabs: { name: string; slug: string; component: ComponentType }[];
  childProps?: { [x: string]: unknown };
  navClassName?: string;
  onSelect: (key: string) => void;
}

export function Tabs({
  tabs,
  onSelect,
  activeKey,
  childProps,
  navClassName,
  ...props
}: TabsProps) {
  /**
   * variables
   */
  const tab = tabs.find((i) => i.slug === activeKey);

  return (
    <Restart.Tabs {...{ activeKey, ...props }}>
      <Restart.Nav
        onSelect={(key) => onSelect(String(key))}
        className={helpers.classNames(
          navClassName,
          'w-full overflow-x-auto mb-6',
          'flex flex-nowrap gap-6 whitespace-nowrap'
        )}
      >
        {tabs.map((tab, key) => (
          <Tab eventKey={tab.slug} key={key}>
            {tab.name}
          </Tab>
        ))}
      </Restart.Nav>
      <div>{tab && <tab.component {...childProps} />}</div>
    </Restart.Tabs>
  );
}
