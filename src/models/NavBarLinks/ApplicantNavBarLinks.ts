import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
// import { getTooltipMessage } from "./getTooltipMessage";
// import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// import SchoolIcon from "@material-ui/icons/School";
// import { ApplicantNotificationIcon } from "$components/ApplicantNotificationIcon";
import YoutubeSearchedFor from "@material-ui/icons/YoutubeSearchedFor";

const { surveysResult } = RoutesBuilder.public;

export const ApplicantNavBarLinks = {
  create: (): INavBarLink[] => [
    // {
    //   path: offerList(),
    //   title: translations.jobOffers,
    //   tooltipMessage: getTooltipMessage(currentUser, translations, offerList()),
    //   icon: LibraryBooksIcon
    // },
    {
      path: surveysResult(),
      title: "Resultados",
      icon: YoutubeSearchedFor
    }
    // {
    //   path: myProfile(),
    //   title: translations.myProfile,
    //   tooltipMessage: getTooltipMessage(currentUser, translations, myProfile()),
    //   icon: SchoolIcon
    // },
    // {
    //   path: notifications(),
    //   title: translations.notifications,
    //   tooltipMessage: getTooltipMessage(currentUser, translations, notifications()),
    //   icon: ApplicantNotificationIcon
    // }
  ]
};
