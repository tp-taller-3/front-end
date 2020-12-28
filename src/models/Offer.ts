import { ApplicantType } from "$interfaces/Applicant";
import { IMyOfferAttributes, IOfferAttributes } from "$interfaces/Offer";
import { Secretary } from "$interfaces/Secretary";
import moment from "moment";

export const Offer = <T extends IOfferAttributes | IMyOfferAttributes = IOfferAttributes>(
  offerAttributes: T
) => {
  const offer = {
    ...offerAttributes,
    hasExpiredFor: (secretary: Secretary) => {
      const expirationDate = offer.getExpirationDateFor(secretary);
      if (!expirationDate) return false;
      return expirationDate.format("YYYY-MM-DD") < moment(Date.now()).format("YYYY-MM-DD");
    },
    getExpirationDateFor: (secretary: Secretary) => {
      return {
        [Secretary.graduados]: !!offer.graduatesExpirationDateTime
          ? moment(offer.graduatesExpirationDateTime)
          : null,
        [Secretary.extension]: !!offer.studentsExpirationDateTime
          ? moment(offer.studentsExpirationDateTime)
          : null
      }[secretary];
    },
    isTargetingStudents: () => offer.targetApplicantType === ApplicantType.student,
    isTargetingGraduates: () => offer.targetApplicantType === ApplicantType.graduate,
    isTargetingBoth: () => offer.targetApplicantType === ApplicantType.both
  };
  return offer;
};