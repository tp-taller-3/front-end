import { ISemester } from "../../../../interfaces/Semester";

export interface ISecretaryNamesTranslations {
  graduados: string;
  extension: string;
}

export interface IAdminStatusTranslations {
  active: string;
  deactivated: string;
}

export interface IListContentItemContainer {
  semester: ISemester;
}

export interface IListContentItem extends IListContentItemContainer {
  translations?: ISecretaryNamesTranslations & IAdminStatusTranslations;
}
