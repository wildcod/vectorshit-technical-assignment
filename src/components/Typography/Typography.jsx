import React, { forwardRef } from 'react';
import cx from 'classnames';
import * as styles from './Typography.module.css';

const Typography = (
  {
    as: Component = 'span',
    testId = 'typography',
    size = 'body',
    color = '#000',
    decoration,
    noSpacing,
    leading,
    alignment,
    weight,
    className,
    children,
    ...rest
  },
  ref
) => (
  <Component
    style={{ color }}
    className={cx(
      styles.root,
      {
        [styles.hero]: size === 'hero',
        [styles.title1]: size === 'title1',
        [styles.title2]: size === 'title2',
        [styles.title3]: size === 'title3',
        [styles.title4]: size === 'title4',
        [styles.large]: size === 'large',
        [styles.body]: size === 'body',
        [styles.small]: size === 'small',
        [styles.mini]: size === 'mini',
        [styles.micro]: size === 'micro'
      },
      decoration && styles[decoration],
      noSpacing && styles.noSpacing,
      leading && styles.addLeading,
      weight && {
        [styles.semiBold]: weight === 'semi-bold',
        [styles.bold]: weight === 'bold'
      },
      alignment && styles[alignment],
      className
    )}
    data-testid={testId}
    ref={ref}
    {...rest}
  >
    {children}
  </Component>
);

export default forwardRef(Typography);
