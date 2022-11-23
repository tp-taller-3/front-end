import React, { FunctionComponent } from "react";
import { TitleBar } from "./component";
import { ITitleBarContainerProps, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks";

export const TitleBarContainer: FunctionComponent<ITitleBarContainerProps> = ({
  showNavBar,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("titleBar");

  return (
    <TitleBar
      canChangeCurrentRole={() => false}
      title={translations?.title}
      showNavBar={showNavBar}
      {...props}
    />
  );
};
