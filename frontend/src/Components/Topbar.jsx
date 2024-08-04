export default function Topbar() {
  return (
    <header className="bg-sky-900">
        <div className="align-top flex items-end pl-9 pr-9">
            <div className="flex items-center gap-7 text-white">
                <p className="p-3">Hello Demo User</p>
                <button className="p-2 bg-gray-800 hover:text-black rounded-sm hover:bg-slate-300">Signup</button>
            </div>
        </div>
    </header>
  );
}
