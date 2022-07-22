import { FC, FormEvent, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { TodoType } from '../../types/todo';

type Props = {
  id: number;
  text: string;
  isCompleted: boolean;
  todoList: TodoType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const Todo: FC<Props> = ({ id, text, isCompleted, todoList, setTodoList }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditable(false);
  };
  const handleComplete = (id: number) => {
    if (isEditable) return;
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id: number, editedText: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: editedText,
          };
        }
        return todo;
      })
    );
  };

  return (
    <li className="flex items-center justify-between ">
      <form
        className={`flex-auto transition hover:scale-105 ${
          isCompleted && 'bg-red-400'
        }`}
        onSubmit={(e) => handleSubmit(e)}
        onClick={() => handleComplete(id)}
      >
        <input
          type="text"
          className={`w-full bg-transparent outline-none cursor-pointer ${
            isEditable && 'border-b animate-pulse'
          }`}
          disabled={!isEditable}
          // value={editedText}
          // onChange={(e) => setEditedText(e.target.value)}
          value={text}
          onChange={(e) => handleEdit(id, e.target.value)}
        />
      </form>
      <div className="flex items-center">
        <button
          className="transition hover:scale-105 hover:text-red-500"
          onClick={() => handleDelete(id)}
        >
          <BiTrash className="w-5 h-5" />
        </button>
        <button
          className="transition hover:scale-105 hover:text-green-500"
          onClick={() => setIsEditable(!isEditable)}
        >
          <AiOutlineEdit className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
