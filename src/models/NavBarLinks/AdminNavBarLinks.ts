import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interfaces";
// import SchoolIcon from "@material-ui/icons/School";
// import BusinessIcon from "@material-ui/icons/Business";
// import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
// import { AdminNotificationIcon } from "$components/AdminNotificationIcon";
// import SettingsIcon from "@material-ui/icons/Settings";
// import EqualizerIcon from "@material-ui/icons/Equalizer";
// import HomeIcon from "@material-ui/icons/Home";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import YoutubeSearchedFor from "@material-ui/icons/YoutubeSearchedFor";

const {
  // home,
  csvUpload,
  // applicants,
  // companies,
  admins,
  // offers,
  // jobApplications,
  // notifications,
  // settings,
  // statistics,
  deleteSemester
} = RoutesBuilder.admin;
const { surveysResult } = RoutesBuilder.public;

export const AdminNavBarLinks = {
  create: (translations: INavBarTranslations): INavBarLink[] => [
    // {
    //   path: home(),
    //   title: translations.tasks,
    //   icon: HomeIcon
    // },
    {
      path: surveysResult(),
      title: "Resultados",
      icon: YoutubeSearchedFor
    },
    {
      path: csvUpload(),
      title: translations.csvUpload,
      icon: CloudUploadIcon
    },
    // {
    //   path: applicants(),
    //   title: translations.applicants,
    //   icon: SchoolIcon
    // },
    // {
    //   path: companies(),
    //   title: translations.companies,
    //   icon: BusinessIcon
    // },
    {
      path: deleteSemester(),
      title: translations.deleteSemester,
      icon: DeleteIcon
    },
    {
      path: admins(),
      title: translations.admins,
      icon: SupervisedUserCircleIcon
    }
    // {
    //   path: offers(),
    //   title: translations.jobOffers,
    //   icon: LibraryBooksIcon
    // },
    // {
    //   path: jobApplications(),
    //   title: translations.jobApplications,
    //   icon: PersonAddIcon
    // },
    // {
    //   path: notifications(),
    //   title: translations.notifications,
    //   icon: AdminNotificationIcon
    // },
    // {
    //   path: statistics(),
    //   title: translations.statistics,
    //   icon: EqualizerIcon
    // },
    // {
    //   path: settings(),
    //   title: translations.settings,
    //   icon: SettingsIcon
    // }
  ]
};
