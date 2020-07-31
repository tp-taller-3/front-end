import React, { FunctionComponent } from "react";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import styles from "./styles.module.scss";

export const Label: FunctionComponent<ILabelProps> = (
  {
    className,
    Icon,
    text,
    useTooltip,
    fixedPosition,
    color
  }
) => (
  <Tooltip
    title={text}
    placement="right"
    classes={{ tooltip: classNames({ [styles.hideTooltip]: !useTooltip }) }}
  >
    <div className={classNames(styles.tag, styles[color], className, {
      [styles.fixedPosition]: fixedPosition,
      [styles.relativePosition]: !fixedPosition
    })}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} fontSize="inherit" />
      </div>
      {!useTooltip && <span className={styles.text}>{text}</span>}
    </div>
  </Tooltip>
);

interface ILabelProps {
  className?: string;
  Icon: FunctionComponent<SvgIconProps>;
  color: "red" | "green" | "darkYellow";
  text: string;
  useTooltip: boolean;
  fixedPosition: boolean;
}