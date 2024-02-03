import Size from "../types/size";
import { JobOpportunity } from "../types/job-opportunity";

export const getJobs = (): JobOpportunity[] => {
  return [
    {
      company: {
        imageURL:
          "https://media.licdn.com/dms/image/C4E0BAQEpxLmBz7I4CQ/company-logo_100_100/0/1630573099262/bright_machines_logo?e=1714003200&v=beta&t=mjub1zKZsg-jZmRXM485uQa9aVlra2RXrhJLfXMSRt4",
        international: true,
        name: "Bright Machines",
        size: Size["medium - 50-300"],
      },
      daysFromHome: 2,
      description: "Nice company, changing manufacturing!",
      hasharonArea: true,
      reactionToSalaryExpectations: "OK",
      salaryExpectations: 40000,
      stages: [
        {
          completed: false,
          name: "phone call",
          summery: "need to talk to Tal!",
        },
      ],
    },
  ];
};
