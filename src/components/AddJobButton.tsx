import { Button } from "flowbite-react";

export const AddJobButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button pill onClick={onClick} className="absolute right-10">
      Add New Job Opportunity!
    </Button>
  );
};
