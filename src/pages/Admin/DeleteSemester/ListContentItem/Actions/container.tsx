import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";
import { Actions } from "./component";

export const ActionsContainer: FunctionComponent<IContainerProps> = ({ semester, ...props }) => {
  const translations = useTranslations<ITranslations>("deleteSemesterActions");
  if (!translations) return <Fragment />;

  return (
    <Actions
      {...props}
      semester={semester}
      translations={translations}
      deleteSemesterLink={RoutesBuilder.admin.deleteSemesterPage(semester.uuid)}
    />
  );
};
