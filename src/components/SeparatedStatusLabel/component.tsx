import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    extensionText,
    graduadosText,
    className,
    extensionApprovalStatus,
    graduadosApprovalStatus,
    withoutBackground,
    statusClassName
  }
) => (
  <div className={classNames(styles.separatedStatusLabel, className)}>
    {
      extensionApprovalStatus &&
      <StatusLabel
        className={classNames(statusClassName, {
          [styles.extensionApprovalStatus]: graduadosApprovalStatus
        })}
        tooltipText={translations.extensionTooltip}
        text={extensionText}
        status={extensionApprovalStatus}
        width="unset"
        background={withoutBackground ? "none" : "light"}
      />
    }
    {
      graduadosApprovalStatus &&
      <StatusLabel
        className={statusClassName}
        tooltipText={translations.graduadosTooltip}
        text={graduadosText}
        status={graduadosApprovalStatus}
        width="unset"
        background={withoutBackground ? "none" : "light"}
      />
    }
  </div>
);
