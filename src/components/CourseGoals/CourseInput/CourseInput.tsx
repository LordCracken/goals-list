import { useState, ChangeEvent, FormEvent } from 'react';

import Button from '../../UI/Button/Button';

import { ICourseInput } from '../../../interfaces';
import './CourseInput.css';

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
      <div className="form-control">
        <label style={{ color: !isValid ? '#f00' : '#000' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? '#f00' : '#ccc',
            backgroundColor: !isValid ? '#fa8072' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
