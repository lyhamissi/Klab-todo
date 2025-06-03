import '../styles/bar.css'
import { FaBars } from "react-icons/fa";

const durations = ['All', 'Daily', 'Weekly', 'Monthly', 'Year'];// array for storing the filter options

const Filter = ({ currentFilter, setFilter }) => { // to handle the activeness of the filter option to help in filtering the tasks based on the duration of the task
  return (
    <div className="filter-bar">
      {durations.map(active => ( // function to determine which option is active to filter the data/tasks in it.
        <button key={active} className={currentFilter === active ? 'active' : ''} onClick={() => setFilter(active)}>
          {active}{/* the active filter option is the one that will be displayed */}
        </button>
      ))}
    </div>
  );
};

export default Filter;
