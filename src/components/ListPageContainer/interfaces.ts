import { ICompanyUser } from "$interfaces/CompanyUser";
import { IAdmin } from "$interfaces/Admin";
import { IApplicant } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { IJobApplication } from "$interfaces/JobApplication";
import { IOffer } from "$interfaces/Offer";
import { ReactNode } from "react";
import { ISemester } from "../../interfaces/Semester";

export type Listable =
  | IApplicant
  | ICompany
  | IAdmin
  | IOffer
  | IJobApplication
  | ICompanyUser
  | ISemester;
export type ListableReactNodes =
  | ((applicant: IApplicant) => ReactNode)
  | ((company: ICompany) => ReactNode)
  | ((admin: IAdmin) => ReactNode)
  | ((offer: IOffer) => ReactNode)
  | ((jobApplication: IJobApplication) => ReactNode)
  | ((companyUser: ICompanyUser) => ReactNode)
  | ((semester: ISemester) => ReactNode);
