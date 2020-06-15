import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentUser } from "$models/CurrentUser";
import { Permissions } from "$models/Permissions";
import { RoutesBuilder } from "$models/RoutesBuilder";

describe("Permissions", () => {
  const userAttributes = {
    email: "companyUser@company.com",
    name: "eric",
    surname: "Clapton"
  };

  describe("Company", () => {
    const {
      signUp,
      myProfile,
      editMyProfile,
      createOffer,
      editOffer,
      offer,
      myOffers,
      jobApplications,
      applicantDetail
    } = RoutesBuilder.company;
    const createCurrentCompanyUser = (status: ApprovalStatus) => CurrentUser({
      data: {
        getCurrentUser: {
          ...userAttributes,
          company: {
            uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
            approvalStatus: status
          }
        }
      },
      loading: false,
      error: undefined
    });

    const expectRoutesAccessToBeFalseIfStatusIsNotApproved = (currentUser: CurrentUser) => {
      expect(Permissions.canAccess(currentUser, signUp())).toBe(false);
      expect(Permissions.canAccess(currentUser, createOffer())).toBe(false);
      expect(Permissions.canAccess(currentUser, editOffer("uuid"))).toBe(false);
      expect(Permissions.canAccess(currentUser, offer("uuid"))).toBe(false);
      expect(Permissions.canAccess(currentUser, myOffers())).toBe(false);
      expect(Permissions.canAccess(currentUser, jobApplications())).toBe(false);
      expect(Permissions.canAccess(currentUser, applicantDetail("uuid"))).toBe(false);
    };

    it("returns true if status is pending only for edit my profile and my profile routes", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
      expect(Permissions.canAccess(currentCompany, myProfile())).toBe(true);
      expect(Permissions.canAccess(currentCompany, editMyProfile())).toBe(true);
      expectRoutesAccessToBeFalseIfStatusIsNotApproved(currentCompany);
    });

    it("returns true if status is rejected only for my profile page route", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(Permissions.canAccess(currentCompany, myProfile())).toBe(true);
      expect(Permissions.canAccess(currentCompany, editMyProfile())).toBe(false);
      expectRoutesAccessToBeFalseIfStatusIsNotApproved(currentCompany);
    });

    it("returns true if the company status is approved for all routes", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
      expect(Permissions.canAccess(currentCompany, signUp())).toBe(true);
      expect(Permissions.canAccess(currentCompany, myProfile())).toBe(true);
      expect(Permissions.canAccess(currentCompany, editMyProfile())).toBe(true);
      expect(Permissions.canAccess(currentCompany, createOffer())).toBe(true);
      expect(Permissions.canAccess(currentCompany, editOffer("uuid"))).toBe(true);
      expect(Permissions.canAccess(currentCompany, offer("uuid"))).toBe(true);
      expect(Permissions.canAccess(currentCompany, myOffers())).toBe(true);
      expect(Permissions.canAccess(currentCompany, jobApplications())).toBe(true);
      expect(Permissions.canAccess(currentCompany, applicantDetail("uuid"))).toBe(true);
    });

    it("return pendingProfile translation key if status is pending", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
      expect(
        Permissions.getAccessError(currentCompany, jobApplications())
      ).toEqual(
        "pendingProfile"
      );
    });

    it("return rejectedProfile translation key if status is rejected", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(
        Permissions.getAccessError(currentCompany, jobApplications())
      ).toEqual(
        "rejectedProfile"
      );
    });
  });
});
