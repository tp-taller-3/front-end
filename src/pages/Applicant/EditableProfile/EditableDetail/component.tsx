import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { IApplicantDetailEditableProps } from "./interface";
import { EditableField } from "$components/EditableField";
import { FormFooter } from "$components/FormFooter";
import { EditableCapabilities } from "$pages/Applicant/EditableProfile/EditableCapabilities";
import { EditableCareers } from "$pages/Applicant/EditableProfile/EditableCareers";
import { ICapability, ICareer } from "$interfaces/Applicant";

const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit,
    onCancel,
    setApplicant,
    deleteCapability,
    deleteCareer
  }) => {
  const setCapabilities = (newCapability: string) => {
    applicant.capabilities = applicant.capabilities || [];
    if (
      applicant.capabilities
        .map(({ description }: ICapability) => description)
        .includes(newCapability)
    ) return;

    applicant.capabilities.push({ uuid: "", description: String(newCapability) });
    return setApplicant({ ...applicant, capabilities: applicant.capabilities });
  };

  const setCareer = (career: ICareer) => {
    applicant.careers = applicant.careers || [];
    if (
      applicant.careers
        .map(({ code }: ICareer) => code)
        .includes(career.code)
    ) return;

    applicant.careers.push(career);
    return setApplicant({ ...applicant, careers: applicant.careers });
  };

  return (
    <DetailMainContainer>
      <div className={styles.columnContainer}>
        <EditableField
          defaultValue={applicant.name}
          setField={newName => setApplicant({...applicant, name: newName})}
          fieldName={translations.name}
        />
        <EditableField
          defaultValue={applicant.surname}
          setField={newSurname => setApplicant({...applicant, surname: newSurname})}
          fieldName={translations.lastName}
        />
        <EditableField
          defaultValue={applicant.description}
          setField={newDescription => setApplicant({...applicant, description: newDescription})}
          fieldName={translations.description}
        />
      </div>
      <div className={styles.rowContainer}>
        <EditableCapabilities
          deleteCapability={deleteCapability}
          addCapability={setCapabilities}
          capabilities={applicant.capabilities || []}
        />
        <div className={styles.separator}/>
        <EditableCareers
          deleteCareer={deleteCareer}
          careers={applicant.careers || []}
          setCareer={setCareer}
        />
      </div>
      <FormFooter onSubmit={() => onSubmit(applicant)} onCancel={onCancel}/>
    </DetailMainContainer>
  );
};

export { EditableDetail };