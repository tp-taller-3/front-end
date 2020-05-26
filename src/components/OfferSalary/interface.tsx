import { IOffer } from "$interfaces/Offer";

export interface IOfferSalaryContainerProps {
  offer: IOffer;
  className?: string;
}

export interface IOfferSalaryTranslations {
  title: string;
  salaryFrom: string;
  salaryTo: string;
}

export interface IOfferSalaryProps extends IOfferSalaryContainerProps {
  translations: IOfferSalaryTranslations;
}