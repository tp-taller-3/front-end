import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { Home } from "./Home";
import { OfferDetail } from "./OfferDetail";
import { CompanyProfile } from "./Company";
import { Notifications } from "./Notifications";
import { EditPadron } from "./EditPadron";
import { RoutesBuilder } from "$models/RoutesBuilder";
import React from "react";
import { SurveysResult } from "./SurveyResult";

const {
  offerList,
  signUp,
  login,
  surveysResult,
  myProfile,
  editMyProfile,
  offerDetail,
  companyProfile,
  notifications,
  editPadron
} = RoutesBuilder.applicant;

export const ApplicantRoutes = [
  {
    path: offerList(),
    component: (props: { location: Location }) => <Home searchQuery={props.location.search} />
  },
  {
    path: signUp(),
    component: (props: { location: Location }) => <SignUp searchQuery={props.location.search} />,
    public: true
  },
  { path: login(), component: Login, public: true },
  { path: surveysResult(), component: SurveysResult },
  { path: myProfile(), component: Profile },
  { path: editMyProfile(), component: EditableProfile },
  { path: offerDetail(":uuid"), component: OfferDetail },
  { path: companyProfile(":uuid"), component: CompanyProfile },
  { path: notifications(), component: Notifications },
  { path: editPadron(), component: EditPadron }
];
