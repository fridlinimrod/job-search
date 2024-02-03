import { JobOpportunity } from "../types/job-opportunity";

import { Card, Dropdown } from "flowbite-react";
import Size from "../types/size";

export const JobOpportunityCard = ({
  jobOpportunityProps,
  onDeleteComapny,
  onEditCompany,
}: {
  jobOpportunityProps: JobOpportunity;
  onDeleteComapny: (companyName: string) => void;
  onEditCompany: (companyName: string) => void;
}) => {
  console.log({ jobOpportunityProps });
  return (
    <Card className="max-w-sm mr-5">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item
            onClick={() => onEditCompany(jobOpportunityProps.company.name)}
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => onDeleteComapny(jobOpportunityProps.company.name)}
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={jobOpportunityProps.company.imageURL}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {jobOpportunityProps.company.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Size: {Size[jobOpportunityProps.company.size]}
        </span>
        <div className="self-start items-start flex flex-col">
          <h3 className="underline">How did I arrive?</h3>
          <div className="self-start items-start flex flex-col ml-2">
            <div>
              <span>Name: </span>
              <span>{jobOpportunityProps.refferal?.name}</span>
            </div>
            <div>
              <span>Phone: </span>
              <span>{jobOpportunityProps.refferal?.phone}</span>
            </div>
            <div>
              <span>Relation: </span>
              <span>{jobOpportunityProps.refferal?.relation}</span>
            </div>
          </div>
        </div>
        <div className="self-start items-start flex flex-col">
          <h3 className="underline">Commuting:</h3>
          <div className="self-start items-start flex flex-col ml-2">
            <div>
              <span>Hasharon Area? </span>
              {/* do a checkmark / X depending on the value. */}
              <span>{jobOpportunityProps.hasharonArea ? "YES" : "NO"}</span>
            </div>
            {!jobOpportunityProps.hasharonArea && (
              <div>
                <span>Kav Rakevet? </span>
                <span>{jobOpportunityProps.kavRakevet}</span>
              </div>
            )}
          </div>
        </div>
        {/* <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div> */}
      </div>
    </Card>
  );
};
