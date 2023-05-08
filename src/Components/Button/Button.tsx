import React from 'react';

import styles from './Button.module.css';

export enum ButtonAppearance {
  Flat = 'flat',
  Outlined = 'outlined',
  Raised = 'raised',
}

export enum ButtonSize {
  Small = 'small',
  Default = 'default',
  Large = 'large',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  iconUrl?: string;
  size?: ButtonSize;
}

const Button = (props: ButtonProps) => {
  const buttonRef = React.createRef<HTMLButtonElement>();
  const defaultAppearance = props.appearance ?? ButtonAppearance.Flat;
  const buttonSize = props.size ?? ButtonSize.Default;

  const cssAppearance = styles[defaultAppearance];
  const cssSize = styles[buttonSize];
  const outerBorderClassname = `${styles.outerborder} ${cssAppearance}`;
  const buttonContainerClassname = `${
    styles.buttonContainer
  } ${cssAppearance} ${props.disabled === true ? styles.disabled : ''}`;
  const buttonClassName = `${styles.button} ${cssAppearance} ${cssSize}`;
  const innerBorderClassname = `${styles.innerborder} ${cssAppearance}`;

  const isRTL = buttonRef.current?.style.direction === 'rtl';
  const icon = (isRTL = false) => {
    const iconClassName = `${styles.icon}`;
    const directionClassName = isRTL === true ? styles.rtl : styles.ltr;
    const className = `${iconClassName} ${directionClassName}`;
    return props.iconUrl ? (
      <img src={props.iconUrl} className={className} />
    ) : null;
  };

  return (
    <div className={buttonContainerClassname}>
      <div className={outerBorderClassname}>
        <button ref={buttonRef} className={buttonClassName} {...props}>
          <div className={innerBorderClassname}>
            {isRTL === false ? icon(isRTL) : null}
            <span>{props.children}</span>
            {isRTL === true ? icon(isRTL) : null}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Button;
