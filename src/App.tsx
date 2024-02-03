import "./App.css";
import { AllJobs } from "./components/AllJobs";
import { JobsFilter } from "./components/JobsFilter";

function App() {
  return (
    <>
      <div>
        <JobsFilter onFiltersChange={console.log} />
        <AllJobs />
      </div>
    </>
  );
}

export default App;
