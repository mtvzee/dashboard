import { FC, FormEvent, useEffect, useRef, useState } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };
  const handleComplete = (id: number) => {
    if (isEditing) return;
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
  const handleEditTodo = (id: number, editedText: string) => {
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
        className="flex-auto transition hover:scale-105"
        onSubmit={(e) => handleSubmit(e)}
        onClick={() => handleComplete(id)}
      >
        <input
          type="text"
          // className="w-full bg-transparent outline-none cursor-pointer focus:border-b focus:animate-pulse"
          className={`w-full bg-transparent outline-none cursor-pointer focus:border-b focus:animate-pulse ${
            isCompleted && 'line-through decoration-2  text-white/60'
          }`}
          disabled={!isEditing}
          ref={inputRef}
          value={text}
          onChange={(e) => handleEditTodo(id, e.target.value)}
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
          onClick={() => setIsEditing(!isEditing)}
        >
          <AiOutlineEdit className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
