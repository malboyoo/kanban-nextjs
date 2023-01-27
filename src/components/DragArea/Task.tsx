export default function Task({ task }) {
  return (
    <li className="list-none cursor-grab mt-5 w-full">
      <div className="alert-info p-4 rounded-xl w-full flex justify-center items-center">
        <span className="text-slate-900 text-lg font-semibold">{task.content}</span>
      </div>
    </li>
  );
}
