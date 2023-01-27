export default function Search() {
  return (
    <div className="gap-2 sm:gap-6 ">
      <i className="fa-solid fa-magnifying-glass text-lg mr-5"></i>
      <input type="text" className="input bg-neutral" placeholder="Search for tasks..." />
    </div>
  );
}
