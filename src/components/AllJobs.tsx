import { useEffect, useState } from "react";
import API from "../API";
import {
  EMPTY_JOB_OPPORTUNITY,
  JobOpportunity,
} from "../types/job-opportunity";
import { JobOpportunityCard } from "./JobOppurtunityCard";
import { AddJobButton } from "./AddJobButton";
import { AddJobFrom } from "./AddJobFrom";

const fetchAllJobs = async () => {
  const allJobsFromAPI = await API.getAllJobs();
  return allJobsFromAPI;
};

export const AllJobs = () => {
  const [allJobs, setAllJobs] = useState<JobOpportunity[]>([]);
  const [showForm, setShowFrom] = useState<boolean>(false);
  const [selectedJobOpportunity, setSelectedJobOpportunity] =
    useState<JobOpportunity>(EMPTY_JOB_OPPORTUNITY);

  const onAddNewJobButtonClicked = () => {
    setSelectedJobOpportunity(EMPTY_JOB_OPPORTUNITY);
    setShowFrom(true);
  };

  const closeModal = () => {
    setShowFrom(false);
  };

  const handleSaveJob = async (
    jobDetails: JobOpportunity
  ): Promise<boolean> => {
    const result = await API.saveJob(jobDetails);
    const allJobsFromDB = await fetchAllJobs();
    setAllJobs(allJobsFromDB);
    return result;
  };

  useEffect(() => {
    fetchAllJobs().then((data) => setAllJobs(data));
  }, []);

  return (
    <div className="flex">
      {allJobs.length ? (
        allJobs.map((job) => {
          return (
            <JobOpportunityCard
              key={job.company.name}
              jobOpportunityProps={job}
              onDeleteComapny={(companyName) => console.log({ companyName })}
              onEditCompany={(companyName) => {
                console.log({ companyName });
                setSelectedJobOpportunity(
                  allJobs.find((job) => job?.company?.name === companyName) ||
                    EMPTY_JOB_OPPORTUNITY
                );
                setShowFrom(true);
              }}
            />
          );
        })
      ) : (
        <div>No Job Opportunity yet - lets add something!</div>
      )}
      <AddJobButton onClick={onAddNewJobButtonClicked} />
      {showForm && (
        <AddJobFrom
          onModalClose={closeModal}
          onSaveJob={handleSaveJob}
          jobOpportunityProps={selectedJobOpportunity}
        />
      )}
    </div>
  );
};
