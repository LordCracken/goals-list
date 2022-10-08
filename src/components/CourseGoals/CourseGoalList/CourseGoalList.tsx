import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

import { ICourseGoalList } from '../../../interfaces';
import './CourseGoalList.css';

const CourseGoalList = ({ items, onDeleteItem }: ICourseGoalList) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
