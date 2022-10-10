import { TCurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interfaces";
import { getTooltipMessage } from "./getTooltipMessage";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SchoolIcon from "@material-ui/icons/School";
import { ApplicantNotificationIcon } from "$components/ApplicantNotificationIcon";
import YoutubeSearchedFor from "@material-ui/icons/YoutubeSearchedFor";

const { offerList, surveysResult, myProfile, notifications } = RoutesBuilder.applicant;

export const ApplicantNavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations): INavBarLink[] => [
    {
      path: offerList(),
      title: translations.jobOffers,
      tooltipMessage: getTooltipMessage(currentUser, translations, offerList()),
      icon: LibraryBooksIcon
    },
    {
      path: surveysResult(),
      title: "Resultados",
      icon: YoutubeSearchedFor
    },
    {
      path: myProfile(),
      title: translations.myProfile,
      tooltipMessage: getTooltipMessage(currentUser, translations, myProfile()),
      icon: SchoolIcon
    },
    {
      path: notifications(),
      title: translations.notifications,
      tooltipMessage: getTooltipMessage(currentUser, translations, notifications()),
      icon: ApplicantNotificationIcon
    }
  ]
};
