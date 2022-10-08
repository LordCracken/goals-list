import { ICourseGoalItem } from '../../../interfaces';
import './CourseGoalItem.css';

const CourseGoalItem = ({ children, id, onDelete }: ICourseGoalItem) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
