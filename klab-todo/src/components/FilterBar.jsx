import '../styles/bar.css';
import { FaBars } from "react-icons/fa";

const durations = ['All', 'Daily', 'Weekly', 'Monthly', 'Year'];

const Filter = ({ currentFilter, setFilter }) => {
  return (
    <div className="filter-bar">
      {durations.map(active => (
        <button
          key={active}
          className={currentFilter === active ? 'active' : ''}
          onClick={() => setFilter(active)}
        >
          {active}
        </button>
      ))}
    </div>
  );
};

export default Filter;
