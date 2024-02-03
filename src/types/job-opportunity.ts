import Size from "./size";
import Relation from "./relation";
import { Company } from "./company";
import { Person } from "./person";

export type JobOpportunity = {
  company: Company;
  refferal?: Person;
  hasharonArea: boolean;
  stages: Stage[];
  salaryExpectations: number;
  reactionToSalaryExpectations: string;
  kavRakevet?: boolean;
  daysFromHome: number;
  description: string;
};

export const EMPTY_JOB_OPPORTUNITY: JobOpportunity = {
  company: {
    imageURL: "",
    international: false,
    name: "",
    size: Size["small - up to 50"],
  },
  refferal: { name: "", phone: "", relation: Relation.stranger },
  hasharonArea: false,
  stages: [],
  salaryExpectations: 0,
  reactionToSalaryExpectations: "",

  daysFromHome: 0,
  description: "",
};
