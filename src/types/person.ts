import Relation from "./relation";

export type Person = {
  name: string;
  phone?: string;
  relation?: Relation;
};
