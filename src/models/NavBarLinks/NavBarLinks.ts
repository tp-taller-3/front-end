import { TCurrentUser } from "$models/CurrentUser";
import { ApplicantNavBarLinks } from "./ApplicantNavBarLinks";
import { AdminNavBarLinks } from "./AdminNavBarLinks";
import { INavBarTranslations } from "$components/NavBar/interfaces";

export const NavBarLinks = {
  create: (
    currentUser: TCurrentUser | undefined,
    translations: INavBarTranslations,
    currentRoute: string
  ) => {
    if (currentUser?.getCurrentRole(currentRoute)?.isAdminRole()) {
      return AdminNavBarLinks.create(translations);
    }

    return ApplicantNavBarLinks.create();
  }
};
