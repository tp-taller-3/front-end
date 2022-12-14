const USERS = "usuarios";
const APPLICANTS = "postulantes";
const COMPANIES = "empresas";
const SURVEYS_RESULT = "resultados-encuestas";
const CSV_UPLOAD = "cargar-csv";
const ADMINS = "administradores";
const APPLICATIONS = "postulaciones";
const OFFERS = "ofertas";
const PROFILE = "perfil";
const SENSITIVE_FIELDS = "campos-sensibles";
const PADRON = "padron";
const SIGN_UP = "registro";
const SETTINGS = "configuracion";
const LOGIN = "iniciar-sesion";
const CREDITS = "creditos";
const EDIT = "editar";
const DEACTIVATE_ACCOUNT = "desactivar-cuenta";
const ACTIVATE_ACCOUNT = "activar-cuenta";
const RECOVER = "recuperar";
const DELETE = "eliminar";
const CREATE = "crear";
const ERROR = "error";
const NOT_FOUND = "pagina-inexistente";
const FORBIDDEN = "permiso-faltante";
const NOTIFICATIONS = "notificaciones";
const PASSWORD = "contrasena";
const REQUEST = "solicitar";
const EXPLANATION = "explicacion";
const STATISTICS = "estadisticas";
const DELETE_SEMESTER = "delete-semester";

const routeBuilder = (urlPrefix: string) => (...path: string[]) => `${urlPrefix}/${path.join("/")}`;

export const applicantRoutePrefix = "estudiante";
export const adminRoutePrefix = "admin";
const applicantRoute = routeBuilder(`/${applicantRoutePrefix}`);
const companyRoute = routeBuilder("/empresa");
const adminRoute = routeBuilder(`/${adminRoutePrefix}`);
const publicRoute = routeBuilder("");

const queryParams = (params?: string) => (params ? `?${params}` : "");

export const RoutesBuilder = {
  admin: {
    home: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute("")}${queryParams(searchParams)}`,

    csvUpload: () => adminRoute(CSV_UPLOAD),

    deleteSemester: () => adminRoute(DELETE_SEMESTER),

    applicants: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(APPLICANTS)}${queryParams(searchParams)}`,

    companies: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(COMPANIES)}${queryParams(searchParams)}`,

    admins: () => adminRoute(ADMINS),

    offers: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(OFFERS)}${queryParams(searchParams)}`,

    jobApplications: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(APPLICATIONS)}${queryParams(searchParams)}`,

    notifications: () => adminRoute(NOTIFICATIONS),

    signUp: () => adminRoute(SIGN_UP),

    editAdmin: (uuid: string) => adminRoute(ADMINS, EDIT, uuid),

    deleteSemesterPage: (uuid: string) => adminRoute(DELETE_SEMESTER, EDIT, uuid),

    deactivateAdminAccount: (uuid: string) => adminRoute(ADMINS, DEACTIVATE_ACCOUNT, uuid),

    activateAdminAccount: (uuid: string) => adminRoute(ADMINS, ACTIVATE_ACCOUNT, uuid),

    settings: () => adminRoute(SETTINGS),

    applicantDetail: (uuid: string) => adminRoute(APPLICANTS, uuid),

    companyDetail: (uuid: string) => adminRoute(COMPANIES, uuid),

    companyUsers: (companyUuid: string) => adminRoute(COMPANIES, companyUuid, USERS),

    jobApplicationDetail: (uuid: string) => adminRoute(APPLICATIONS, uuid),

    offerDetail: (uuid: string) => adminRoute(OFFERS, uuid),

    statistics: () => adminRoute(STATISTICS)
  },

  applicant: {
    signUp: ({ dni }: { dni?: string } = {}) =>
      `${applicantRoute(SIGN_UP)}${dni ? queryParams(`dni=${dni}`) : ""}`,

    login: () => applicantRoute(LOGIN),

    myProfile: () => applicantRoute(PROFILE),

    editMyProfile: () => applicantRoute(PROFILE, EDIT),

    offerList: ({ searchParams }: { searchParams?: string } = {}) =>
      `${applicantRoute(OFFERS)}${queryParams(searchParams)}`,

    offerDetail: (uuid: string) => applicantRoute(OFFERS, uuid),

    notifications: () => applicantRoute(NOTIFICATIONS),

    companyProfile: (uuid: string) => applicantRoute(COMPANIES, uuid),

    editPadron: () => applicantRoute(PADRON, EDIT)
  },

  company: {
    signUp: () => companyRoute(SIGN_UP),

    myProfile: () => companyRoute(PROFILE),

    editMyProfile: () => companyRoute(PROFILE, EDIT),

    createOffer: () => companyRoute(OFFERS, CREATE),

    editOffer: (uuid: string) => companyRoute(OFFERS, uuid, EDIT),

    offer: (uuid: string) => companyRoute(OFFERS, uuid),

    myOffers: ({ searchParams }: { searchParams?: string } = {}) =>
      `${companyRoute(OFFERS)}${queryParams(searchParams)}`,

    jobApplications: () => companyRoute(APPLICATIONS),

    applicantDetail: (uuid: string) => companyRoute(APPLICANTS, uuid),

    login: () => companyRoute(LOGIN),

    notifications: () => companyRoute(NOTIFICATIONS),

    users: () => companyRoute(USERS),

    createUser: () => companyRoute(USERS, CREATE),

    editUser: () => companyRoute(USERS, EDIT),

    deleteUser: (uuid: string) => companyRoute(USERS, DELETE, uuid),

    editPassword: () => companyRoute(PASSWORD, EDIT),

    editMyForgottenPassword: ({ token }: { token?: string } = {}) =>
      `${companyRoute(PASSWORD, RECOVER)}${queryParams(token)}`,

    passwordRecovery: () => companyRoute(PASSWORD, RECOVER, REQUEST),

    passwordRecoveryExplanation: () => companyRoute(PASSWORD, RECOVER, EXPLANATION),

    editCriticalAttributes: () => companyRoute(PROFILE, SENSITIVE_FIELDS, EDIT)
  },

  public: {
    home: () => publicRoute(),

    login: () => publicRoute(LOGIN),

    credits: () => publicRoute(CREDITS),

    internalServerError: () => publicRoute(ERROR),

    notFound: () => publicRoute(NOT_FOUND),

    forbidden: () => publicRoute(FORBIDDEN),

    surveysResult: () => publicRoute(SURVEYS_RESULT)
  }
};
