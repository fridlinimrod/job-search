import Size from "./size";

export type Filter = {
  name: string;
  international: boolean;
  size: Size[];
  minDaysFromHome: number;
  hasharonArea: boolean;
  kavRakevet: boolean;
};

export const EMPTY_FILTER_STATE = {
  name: "",
  international: false,
  size: [],
  minDaysFromHome: 0,
  hasharonArea: false,
  kavRakevet: false,
};
