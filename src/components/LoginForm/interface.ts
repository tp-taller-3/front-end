import { ReactElement } from "react";
import { ErrorHandlers } from "$models/handleError";
import { FormikHelpers } from "formik/dist/types";

export interface ITranslations {
  title: string;
  password: string;
  logIn: string;
  badCredentialsMessage: string;
}

export interface IContainerProps<IVariables> {
  className?: string;
  title?: string;
  usernameField: ReactElement;
  footer: ReactElement;
  initialValues: IVariables;
  onSubmit: OnSubmit<IVariables>;
}

export type OnSubmit<IVariables> = (
  values: IVariables,
  formikHelpers: FormikHelpers<IVariables>,
  errorHandlers: ErrorHandlers
) => void | Promise<any>;

export interface IComponentProps<IVariables> extends IContainerProps<IVariables> {
  className?: string;
  translations: ITranslations;
  onSubmit: (values: IVariables, formikHelpers: FormikHelpers<IVariables>) => void | Promise<any>;
}