import { JobOpportunity } from "../types/job-opportunity";

export const saveJob = async (
  jobOpportunity: JobOpportunity
): Promise<boolean> => {
  try {
    const allJobsFromDB = localStorage.getItem("allJobs");
    const allJobsArray = allJobsFromDB ? await JSON.parse(allJobsFromDB) : [];
    const currentJobIndex = allJobsArray.findIndex(
      (job: JobOpportunity) => job.company.name === jobOpportunity.company.name
    );

    if (currentJobIndex !== -1) {
      allJobsArray[currentJobIndex] = jobOpportunity;
    } else {
      allJobsArray.push(jobOpportunity);
    }
    localStorage.setItem("allJobs", JSON.stringify(allJobsArray));
    return true;
  } catch {
    console.log("ERROR!!");
    return false;
  }
};
