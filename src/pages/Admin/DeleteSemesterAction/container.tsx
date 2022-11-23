import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations, useDeactivateAdminAccount, useShowError } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";
import { useSemesterByUuid } from "../../../models/hooks/queries/useSemesterByUuid";

export const DeleteSemesterActionContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const showError = useShowError();
  const translations = useTranslations<ITranslations>("deactivateAdminAccount");
  const { deactivateAdminAccount } = useDeactivateAdminAccount();
  const semester = useSemesterByUuid(uuid);

  const onSubmit = async () => {
    const result = await deactivateAdminAccount({
      variables: { uuid },
      errorHandlers: {
        DeleteLastAdminError: () => showError({ message: translations?.deleteLastAdminError })
      }
    });
    if (result.error) return;
    history.push(RoutesBuilder.admin.deleteSemester());
  };

  return (
    <Window loading={!translations || !semester}>
      <AccountActivationForm
        title={`${translations?.title}\n${semester?.year} - ${semester?.semesterNumber}`}
        description={translations?.description}
        submit={translations?.submit}
        onSubmit={onSubmit}
      />
    </Window>
  );
};

interface ITranslations {
  title: string;
  description: string;
  submit: string;
  deleteLastAdminError: string;
}
