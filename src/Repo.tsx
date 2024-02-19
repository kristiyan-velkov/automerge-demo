import cx from "classnames";
import { Todo } from "./Todo.js";
import { Filter, TodoData } from "./types.js";
<div className="flex h-screen pt-2 pb-96 bg-primary-50">
  <div className="m-auto w-4/5 max-w-xl border border-neutral-300 shadow-md rounded-md bg-white">
    <header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!newTodoInput.current) return;

          const newTodoText = newTodoInput.current.value.trim();

          // don't create empty todos
          if (newTodoText.length === 0) return;

          const handle = repo.create<TodoData>();
          const url = handle.url;
          handle.change((t) => {
            t.url = url;
            t.content = newTodoText;
            t.completed = false;
          });

          // update state with new todo
          changeState((s) => {
            s.todos.push(url);
          });

          // clear input
          newTodoInput.current.value = "";
        }}
      >
        <input
          className="w-full p-3 rounded-md"
          placeholder="Add a new todo"
          ref={newTodoInput}
          autoFocus={true}
        />
      </form>
    </header>

    {/* todos */}
    <section>
      <ul className="border-y divide-y divide-solid">
        {state.todos.map((url) => (
          <Todo
            key={url}
            url={url}
            onDestroy={(url) => destroy(url)}
            filter={filter}
          />
        ))}
      </ul>
    </section>

    {/* footer tools */}
    <footer className="p-3 flex justify-between items-center text-sm">
      {/* filter */}
      <ul className="flex-1 flex space-x-1 cursor-pointer">
        {Object.keys(Filter).map((k) => {
          const key = k as Filter;
          const active = key === filter;

          const buttonStyle = cx({
            ["text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"]:
              !active,
            ["bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md"]:
              active,
          });

          return (
            <li className="leading-none" key={`filter-${key}`}>
              <button
                className={buttonStyle}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(key);
                }}
              >
                {key}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex-1 text-right">
        <button
          className={cx(
            "leading-none border py-2 px-4 rounded-md",
            "hover:border-primary-600 hover:bg-primary-500 hover:text-white"
          )}
          onClick={(e) => {
            e.preventDefault();
            destroyCompleted();
          }}
        >
          Clear completed
        </button>
      </div>
    </footer>
  </div>
</div>;
