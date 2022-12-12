import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";
import { useSemesterByUuid } from "../../../models/hooks/queries/useSemesterByUuid";
import { useDeleteSemester } from "../../../models/hooks/mutations/useDeleteSemester";
import { useSemesterStatistics } from "../../../models/hooks/queries/useSemesterStatistics";
import { interpolateValues } from "../../../models/interpolateValues";

export const DeleteSemesterActionContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("deleteSemesterPageInfo");
  const { deleteSemester } = useDeleteSemester();
  const statistics = useSemesterStatistics(uuid);
  const semester = useSemesterByUuid(uuid);

  const onSubmit = async () => {
    const result = await deleteSemester({
      variables: { uuid }
    });
    if (result.error) return;
    history.push(RoutesBuilder.admin.deleteSemester());
  };

  return (
    <Window loading={!translations || !semester || !statistics}>
      <AccountActivationForm
        title={`${translations?.title} ${semester?.year}-${semester?.semesterNumber}`}
        description={interpolateValues(translations?.description as string, {
          courseCount: statistics?.courseCount
        })}
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
