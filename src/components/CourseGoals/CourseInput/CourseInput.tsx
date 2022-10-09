import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

import {ICourseInput, IFormControl} from '../../../interfaces';
import './CourseInput.css';

const FormControl = styled.div<IFormControl>`
  margin: 0.5rem 0;
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? '#f00' : '#000'};
  }

  input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? '#f00' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${props => props.invalid ? '#ffd7d7' : 'transparent'};

    &:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
