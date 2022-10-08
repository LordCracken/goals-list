import { useState, ChangeEvent, FormEvent } from 'react';

import Button from '../../UI/Button/Button';

import { ICourseInput } from '../../../interfaces';
import './CourseInput.css';

const CourseInput = ({ onAddGoal }: ICourseInput) => {
  const [enteredValue, setEnteredValue] = useState<string>('');

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
