import { Button, Label, TextInput } from "flowbite-react";
import { EMPTY_FILTER_STATE, Filter } from "../types/filters";
import { useState } from "react";

export const JobsFilter = ({
  onFiltersChange,
}: {
  onFiltersChange: (filtersState: Filter) => void;
}) => {
  const [filterState, setFilterState] = useState<Filter>(EMPTY_FILTER_STATE);
  return (
    <div className="filter-container flex">
      <form>
        <div className="flex">
          <div className="flex">
            <Label htmlFor="companyNameFilter" value="Company Name" />
            <TextInput
              id="companyNameFilter"
              placeholder=""
              value={filterState.name}
              onChange={(e) =>
                setFilterState((prevVal) => ({
                  ...prevVal,
                  name: e.target.value,
                }))
              }
              required
            />
          </div>
          <Button
            onClick={() => {
              onFiltersChange(filterState);
            }}
          >
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
};
