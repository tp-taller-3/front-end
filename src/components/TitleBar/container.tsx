import React, { FunctionComponent, Fragment } from "react";
import { TitleBar } from "./component";
import { ITitleBarContainerProps, ITranslations } from "./interface";
import { useCurrentUser, useTranslations } from "../../models/hooks/queries";

export const TitleBarContainer: FunctionComponent<ITitleBarContainerProps> = props => {
  const translations = useTranslations<ITranslations>("titleBar");
  const currentUser = useCurrentUser();

  if (!currentUser.data) return <Fragment />;

  return (
    <TitleBar
      title={translations?.title}
      showNavBar={!!currentUser.data.getCurrentUser}
      {...props}
    />
  );
};
