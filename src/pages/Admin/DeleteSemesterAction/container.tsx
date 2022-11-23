import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";
import { useSemesterByUuid } from "../../../models/hooks/queries/useSemesterByUuid";
import { useDeleteSemester } from "../../../models/hooks/mutations/useDeleteSemester";

export const DeleteSemesterActionContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("deleteSemesterPageInfo");
  const { deleteSemester } = useDeleteSemester();
  const semester = useSemesterByUuid(uuid);

  const onSubmit = async () => {
    const result = await deleteSemester({
      variables: { uuid }
    });
    if (result.error) return;
    history.push(RoutesBuilder.admin.deleteSemester());
  };

  return (
    <Window loading={!translations || !semester}>
      <AccountActivationForm
        title={`${translations?.title} ${semester?.year}-${semester?.semesterNumber}`}
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
