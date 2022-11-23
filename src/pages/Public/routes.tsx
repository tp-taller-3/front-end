import { InternalServerError } from "./InternalServerError";
import { Login } from "../Applicant/Login";
import Home from "./Home";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotFound } from "./NotFound";
import { Forbidden } from "./Forbidden";
import { Credits } from "./Credits";
import { SurveysResult } from "../Applicant/SurveyResult";

const {
  home,
  login,
  internalServerError,
  notFound,
  forbidden,
  credits,
  surveysResult,
} = RoutesBuilder.public;

export const PublicRoutes = [
  { path: home(), component: Home },
  { path: login(), component: Login },
  { path: internalServerError(), component: InternalServerError },
  { path: notFound(), component: NotFound },
  { path: forbidden(), component: Forbidden },
  { path: credits(), component: Credits },
  { path: surveysResult(), component: SurveysResult }
];
