import { FC, FormEvent, useState } from 'react';
import Todo from './Todo';
import { TodoType } from '../../types/todo';

const TodoList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    setTodoList([
      ...todoList,
      {
        id: Math.floor(Math.random() * 10000),
        text: input,
        isCompleted: false,
      },
    ]);
    setInput('');
  };

  return (
    <>
      <button
        className="absolute right-3 bottom-3"
        onClick={() => setIsOpen(true)}
      >
        Todo
      </button>
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)}>
          <div
            className="absolute w-[300px]  bg-black bottom-10 right-5 rounded-lg rounded-br-none p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="h-8 text-xl">Todo</h1>
            <ul className="px-2 py-1">
              {todoList.map((todo) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  isCompleted={todo.isCompleted}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              ))}
            </ul>
            <form
              className="h-8 py-1 border-t border-t-neutral-400"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                placeholder="Add Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-full bg-transparent outline-none"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
