import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { SeparatedStatusLabel } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { capitalize } from "lodash";

export const SeparatedStatusLabelContainer: FunctionComponent<IContainerProps> = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    ...props
  }
) => {
  const translations = useTranslations<ITranslations>("separatedStatusLabel");
  if (!translations) return <Fragment />;

  const buildLabel = (status: ApprovalStatus, secretary: Secretary) => {
    let applicantType = "";
    if (secretary === Secretary.graduados) applicantType = translations.graduate;
    if (secretary === Secretary.extension) applicantType = translations.student;
    if (status === ApprovalStatus.approved) return `${translations.approved} ${applicantType}`;
    if (status === ApprovalStatus.rejected) return `${translations.rejected} ${applicantType}`;
    return `${capitalize(applicantType)}: ${translations.pending}`;
  };

  return <SeparatedStatusLabel
    {...props}
    extensionText={buildLabel(extensionApprovalStatus, Secretary.extension)}
    graduadosText={buildLabel(graduadosApprovalStatus, Secretary.graduados)}
    extensionApprovalStatus={extensionApprovalStatus}
    graduadosApprovalStatus={graduadosApprovalStatus}
    translations={translations}
  />;
};