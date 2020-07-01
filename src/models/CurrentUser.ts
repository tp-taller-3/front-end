import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";
import { TCurrentUserAttributes } from "./hooks/queries";
import { CurrentApplicant, TCurrentApplicant } from "./CurrentApplicant";

export const CurrentUser = (attributes: TCurrentUserAttributes): TCurrentUser => ({
  ...attributes,
  company: attributes.company && CurrentCompany(attributes.company),
  applicant: attributes.applicant && CurrentApplicant(attributes.applicant)
});

export type TCurrentUser =
  TGenericCurrentUser<{ userUuid: string; }, TCurrentApplicant, ICurrentCompany>;

export type TGenericCurrentUser<TAdmin, TApplicant, TCompany> = IUser & {
  admin?: TAdmin;
  company?: TCompany;
  applicant?: TApplicant;
};
