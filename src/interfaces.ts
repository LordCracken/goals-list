import { ReactNode } from 'react';

export interface ICourseGoal {
  id: string;
  text: string;
}

export interface IButton {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export interface ICourseGoalList {
  items: ICourseGoal[];
  onDeleteItem: (goalId: string) => void;
}

export interface ICourseGoalItem {
  children: ReactNode;
  id: string;
  onDelete: (goalId: string) => void;
}

export interface ICourseInput {
  onAddGoal: (enteredText: string) => void;
}

export interface IFormControl {
  invalid: boolean;
}
