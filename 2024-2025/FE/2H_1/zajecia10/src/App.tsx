import { useState } from "react";
import { Ustawienia } from "./Ustawienia";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main className="flex justify-center items-center h-screen bg-gray-200 text-black">
      <div className="bg-white rounded-lg shadow-lg flex h-2/3">
        <div className="p-4 border-r-2">
          <div className="flex flex-col gap-2">
            <button className="w-full">Ustawienia</button>
            <button className="w-full">Hasło</button>
            <button className="w-full">Preferencje</button>
          </div>
        </div>
      </div>
      {activeTab === 1 && <Ustawienia />}
      {/* {activeTab === 2 && ...} */}
    </main>
  );
}

export default App;
