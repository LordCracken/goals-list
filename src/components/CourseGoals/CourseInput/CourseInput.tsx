import { useState, ChangeEvent, FormEvent } from 'react';

import Button from '../../UI/Button/Button';

import {ICourseInput} from '../../../interfaces';
import classes from './CourseInput.module.css';

const CourseInput = ({ onAddGoal }: ICourseInput) => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
