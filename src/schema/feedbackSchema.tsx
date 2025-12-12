export interface FeedbackFormData {
  email: string;
  runType: string;
  bibNo: string;
  ratings: {
    overallOrganization: number;
    registrationProcess: number;
    communications: number;
    courseLayout: number;
    hydrationStation: number;
    medicalStations: number;
    volunteers: number;
    raceResults: number;
    parkingRestrooms: number;
    directionalSigns: number;
    safety: number;
    raceSwag: number;
    postRaceFood: number;
    entertainment: number;
  };
  recommendEvent: string;
  participateAgain: string;
  improvements: string;
  additionalComments: string;
}
