import { JobOpportunity } from "../types/job-opportunity";

export const getAllJobs = async (): Promise<JobOpportunity[]> => {
  const allJobsFromDB = localStorage.getItem("allJobs");
  return allJobsFromDB ? await JSON.parse(allJobsFromDB) : [];
};
