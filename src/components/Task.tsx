export default function Task({ task }) {
  return (
    <li className="list-none cursor-grab mt-5">
      <div className="alert-info p-2 rounded-xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">{task.title}</h3>
          <span className="text-slate-600">{task.body}</span>
        </div>
      </div>
    </li>
  );
}
