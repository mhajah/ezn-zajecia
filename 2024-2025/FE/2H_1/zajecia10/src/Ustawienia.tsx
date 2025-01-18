export function Ustawienia() {
  return (
    <div className="flex flex-col gap-4 w-10/12 p-4 items-center min-w-[400px]">
      <h1 className="font-bold text-2xl">Ustawienia</h1>
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-1/2 bg-white"
        placeholder="Imię"
      />
    </div>
  );
}
