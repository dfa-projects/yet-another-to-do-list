import { render, screen } from '@testing-library/react';
import InputField from './InputField.js';
import userEvent from '@testing-library/user-event'

test("heading exists", function(){
  render(<InputField />)
  const test1 = screen.getByText("Yet Another Todo List!")
  expect(test1).toBeInTheDocument()
})

test("can type in input field and saves on click", function(){
  render(<InputField />)
  userEvent.type(screen.getByRole("textbox"), "do the dishes")
  userEvent.click(screen.getByText("Save"))
  const test2 = screen.getByText("do the dishes")
  expect(test2).toBeInTheDocument() 
})

test("can clear tasks", function(){
  render(<InputField />)
  userEvent.type(screen.getByRole("textbox"), "do the dishes")
  userEvent.click(screen.getByText("Save"))
  userEvent.click(screen.getByRole("link"))
  const test3 = screen.getByText("do the dishes")
  expect(test3).not.toBeInTheDocument()
})