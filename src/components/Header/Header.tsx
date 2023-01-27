import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";
import Login from "./Login";

export default function Header({ user }) {
  return (
    <header className="p-5 bg-base-100 flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-start mx-auto sm:mx-0">
      <Search />
      <nav className="flex flex-row-reverse sm:flex-row justify-center items-center gap-2 sm:gap-6 sm:mr-5 mb-4 sm:mb-0">
        <Login user={user} />
        <ThemeSwitch />
      </nav>
    </header>
  );
}
