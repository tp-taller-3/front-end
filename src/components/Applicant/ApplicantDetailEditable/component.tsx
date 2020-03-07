import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { IApplicantDetailEditableProps } from "./interface";
import { FieldEditable } from "$components/FieldEditable";
import { FormFooter } from "$components/FormFooter";
import { CapabilitiesEditable } from "$components/Capabilities/CapabilitiesEditable";
import { CareersEditable } from "$components/Career/CareersEditable";
import { ICareer } from "$interfaces/Applicant";

const ApplicantDetailEditable: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    applicant,
    translations,
    onSubmit,
    onCancel,
    setState,
    state
  }) => {

  const setName = (newName: string | number) => {
    state.name = String(newName);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setSurname = (newSurname: string | number) => {
    state.surname = String(newSurname);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setDescription = (newDescription: string | number) => {
    state.description = String(newDescription);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setCapabilities = (newCapability: string | number) => {
    const mergedCapabilities = applicant.capabilities || [];
    if (mergedCapabilities.findIndex(item => item.description === newCapability) >= 0) return;

    state.capabilities = state.capabilities || [];
    state.capabilities.push({ description: String(newCapability) });
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  const setCareer = (career: ICareer) => {
    const mergedCareers = applicant.careers || [];
    if (mergedCareers.findIndex((item: ICareer) => item.code === career.code) >= 0) return;

    state.careers = state.careers || [];
    state.careers.push(career);
    const newState = Object.assign({}, state);
    return setState(newState);
  };

  return (
    <DetailMainContainer>
      <div className={styles.columnContainer}>
        <FieldEditable
          defaultField={applicant.name}
          setField={setName}
          fieldName={translations.name}
        />
        <FieldEditable
          defaultField={applicant.surname}
          setField={setSurname}
          fieldName={translations.lastName}
        />
        <FieldEditable
          defaultField={applicant.description}
          setField={setDescription}
          fieldName={translations.description}
        />
      </div>
      <div className={styles.rowContainer}>
        <CapabilitiesEditable
          capabilities={applicant.capabilities}
          setList={setCapabilities}
        />
        <CareersEditable
          careers={applicant.careers}
          setCareer={setCareer}
        />
      </div>
      <FormFooter onSubmit={() => onSubmit(state)} onCancel={onCancel}/>
    </DetailMainContainer>
  );
};

export { ApplicantDetailEditable };
