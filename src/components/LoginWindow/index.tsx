import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { Card } from "../Card";
import { Title } from "../Title";
import { useTranslations } from "../../models/hooks";
import { ITranslations } from "../TitleBar/interfaces";

export const LoginWindow: FunctionComponent<IComponent> = ({
  className,
  rightContainerClassName,
  children
}) => {
  const translations = useTranslations<ITranslations>("titleBar");

  return (
    <div className={classNames(className, styles.mainContent)}>
      <div className={styles.loginMainContainer}>
        <div className={styles.logo}>
          <Card className={styles.card}>
            <Title className={styles.title}>{translations?.title}</Title>
          </Card>
        </div>
        <section className={classNames(styles.rightContainer, rightContainerClassName)}>
          {children}
        </section>
      </div>
    </div>
  );
};

interface IComponent {
  className?: string;
  rightContainerClassName?: string;
}
