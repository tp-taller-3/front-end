import React, { Fragment, FunctionComponent, useState } from "react";
import { IAddSurveyButtonProps, ITranslations, IValues } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { FormikForm } from "$components/FormikForm";
import { TextField } from "$components/Fields/TextField";
import { Formik } from "$components/Formik";
import { FormikHelpers } from "formik/dist/types";
import { useSaveSurvey } from "$hooks/mutations/useSaveSurvey";
import { noop } from "lodash";
import { Button } from "../../../../../components/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styles from "./styles.module.scss";

export const CreateSurveyButton: FunctionComponent<IAddSurveyButtonProps> = ({
  onSelectSurvey,
  loading,
  refetchSurveys
}) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const translations = useTranslations<ITranslations>("addSurveyDialog");
  const { saveSurvey } = useSaveSurvey();

  if (!translations || loading) return <Fragment />;

  const { title, cancel, confirm } = translations;

  const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
    const createSurveyResult = await saveSurvey({ variables: values });
    if (createSurveyResult.error) return;
    formikHelpers.resetForm();
    setDialogIsOpen(false);
    await refetchSurveys();
    onSelectSurvey(createSurveyResult.data.saveSurvey);
  };

  const initialValues: IValues = { name: "" };
  const formName = "createSurvey";

  return (
    <>
      <Button onClick={() => setDialogIsOpen(true)} kind="primary" className={styles.button}>
        <AddCircleIcon fontSize="inherit" />
        <span className={styles.buttonText}>{translations.create}</span>
      </Button>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formikHelpers => (
          <FormConfirmDialog
            formName={formName}
            isOpen={dialogIsOpen}
            onConfirm={noop}
            closeOnConfirm={false}
            onClose={() => {
              setDialogIsOpen(false);
              formikHelpers.resetForm();
            }}
            confirmButtonKind={"primary"}
            confirmButtonType="submit"
            translations={{
              confirmDialogTitle: title,
              confirmDialogConfirm: confirm,
              confirmDialogCancel: cancel,
              confirmDialogDescription: ""
            }}
          >
            <FormikForm id={formName}>
              <TextField name="name" label={translations?.name} mandatory />
            </FormikForm>
          </FormConfirmDialog>
        )}
      </Formik>
    </>
  );
};
