import { useState } from "react";
import {
  JobOpportunity,
  EMPTY_JOB_OPPORTUNITY,
} from "../types/job-opportunity";
import Size, { sizeOptionsForDopdown } from "../types/size";
import { Company } from "../types/company";
import {
  Dropdown,
  Button,
  Modal,
  Label,
  TextInput,
  Checkbox,
  Textarea,
} from "flowbite-react";
import Relation, { relationOptionsForDopdown } from "../types/relation";

export const AddJobFrom = ({
  jobOpportunityProps = EMPTY_JOB_OPPORTUNITY,
  onModalClose,
  onSaveJob,
}: {
  jobOpportunityProps: JobOpportunity;
  onModalClose: () => void;
  onSaveJob: (jobOpportunity: JobOpportunity) => Promise<boolean>;
}) => {
  const [jobParams, setJobParams] =
    useState<JobOpportunity>(jobOpportunityProps);

  const setJobValue = (
    fieldName: string,
    value: string | number | Company | boolean
  ) => {
    setJobParams((oldValue) => {
      return { ...oldValue, [fieldName]: value };
    });
  };

  const setCompanyValue = (
    fieldName: string,
    value: string | Boolean | Size
  ) => {
    setJobParams((oldValue) => {
      return {
        ...oldValue,
        company: { ...oldValue.company, [fieldName]: value },
      };
    });
  };

  const setRefferalValue = (fieldName: string, value: string | Relation) => {
    setJobParams((oldValue) => {
      return {
        ...oldValue,
        refferal: { ...oldValue?.refferal!, [fieldName]: value },
      };
    });
  };

  const handleSaveClicked = () => {
    onSaveJob(jobParams);
    onModalClose();
  };

  return (
    <>
      <Modal show={true} size="5xl" onClose={onModalClose}>
        <Modal.Header>Opportunity Details</Modal.Header>
        <Modal.Body>
          <div className="flex">
            <div id="company-properties" className="basis-1/2 pr-5 border-r-4">
              <h3>Company details</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="companyName" value="Company Name" />
                </div>
                <TextInput
                  id="companyName"
                  placeholder=""
                  value={jobParams?.company?.name}
                  onChange={(e) => setCompanyValue("name", e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="imageURL" value="image URL" />
                </div>
                <TextInput
                  id="imageURL"
                  onChange={(e) => setCompanyValue("imageURL", e.target.value)}
                  value={jobParams?.company?.imageURL}
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="companySize" value="Company Size" />
                </div>
                <Dropdown
                  id="companySize"
                  label={Size[jobParams?.company?.size]}
                  onChange={(e) => console.log("yup!", e)}
                  dismissOnClick={false}
                >
                  {Object.entries(sizeOptionsForDopdown).map(([key, val]) => {
                    return (
                      <Dropdown.Item
                        value={val}
                        onClick={() => {
                          console.log("item clicked", val);
                          setCompanyValue("size", val);
                        }}
                      >
                        {key}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown>
              </div>
              <div className="mt-2 flex">
                <Checkbox
                  id="international"
                  className="mr-2"
                  checked={jobParams.company.international}
                  onChange={() =>
                    setCompanyValue(
                      "international",
                      !jobParams.company.international
                    )
                  }
                />
                <Label htmlFor="international">International?</Label>
              </div>
            </div>
            <div id="refferalProperties" className="basis-1/2 px-5 border-r-4">
              <h3>Refferal details</h3>
              <div className="mb-2 block">
                <Label htmlFor="referralName" value="Refferal Name" />
              </div>
              <TextInput
                id="referralName"
                placeholder=""
                value={jobParams?.refferal?.name}
                onChange={(e) => setRefferalValue("name", e.target.value)}
                required
              />
              <div className="mb-2 block">
                <Label htmlFor="referralPhone" value="Refferal Phone" />
              </div>
              <TextInput
                id="referralPhone"
                placeholder=""
                value={jobParams?.refferal?.phone}
                onChange={(e) => setRefferalValue("phone", e.target.value)}
                required
              />
              <div className="mb-2 block">
                <Label htmlFor="refferalRelation" value="Refferal Relation" />
              </div>
              <Dropdown
                id="refferalRelation"
                label={Relation[jobParams.refferal!.relation!]}
                onChange={(e) => console.log("yup!", e)}
                dismissOnClick={false}
              >
                {Object.entries(relationOptionsForDopdown).map(([key, val]) => {
                  return (
                    <Dropdown.Item
                      value={val}
                      onClick={() => {
                        setRefferalValue("relation", val);
                      }}
                    >
                      {key}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown>
            </div>
            <div id="opportunity properties" className="pl-5 basis-1/2">
              <h3>Opportunity details</h3>
              <div>
                <div className="mt-2 flex">
                  <Checkbox
                    id="hasharonArea"
                    className="mr-2"
                    checked={jobParams.hasharonArea}
                    onChange={() => {
                      console.log("yo");
                      setJobValue("hasharonArea", !jobParams.hasharonArea);
                    }}
                  />
                  <Label htmlFor="hasharonArea">Hasharon Area?</Label>
                </div>
                {!jobParams.hasharonArea && (
                  <div className="mt-2 flex">
                    <Checkbox
                      id="kavRakevet"
                      className="mr-2"
                      checked={jobParams.kavRakevet}
                      onChange={() =>
                        setJobValue("kavRakevet", !jobParams.kavRakevet)
                      }
                    />
                    <Label htmlFor="kavRakevet">Kav Rakevet?</Label>
                  </div>
                )}
                <div className="mb-2 block">
                  <Label
                    htmlFor="salaryExpectations"
                    value="Salary Expectations"
                  />
                </div>
                <TextInput
                  type="number"
                  id="salaryExpectations"
                  placeholder=""
                  value={jobParams?.salaryExpectations}
                  onChange={(e) =>
                    setJobValue("salaryExpectations", e.target.value)
                  }
                  required
                />
                <div className="mb-2 block">
                  <Label
                    htmlFor="reactionToSalaryExpectations"
                    value="Reaction To Salary Expectations"
                  />
                </div>
                <TextInput
                  id="reactionToSalaryExpectations"
                  placeholder=""
                  value={jobParams?.reactionToSalaryExpectations}
                  onChange={(e) =>
                    setJobValue("reactionToSalaryExpectations", e.target.value)
                  }
                  required
                />
                <div className="mb-2 block">
                  <Label htmlFor="daysFromHome" value="Days From Home" />
                </div>
                <TextInput
                  id="daysFromHome"
                  type="number"
                  placeholder=""
                  value={jobParams?.daysFromHome}
                  max={5}
                  onChange={(e) => setJobValue("daysFromHome", e.target.value)}
                  required
                />
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea
                  id="description"
                  placeholder="What this role is about? the company? etc."
                  value={jobParams?.description}
                  onChange={(e) => setJobValue("description", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveClicked}>Save</Button>
          <Button color="gray" onClick={onModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
