import "./App.css";
import Header from "./header";
import { Bus, Home, Parking, Permit } from "./icons/icons";
import PassBody from "./passBody";

function App() {
  return (
    <div className="flex flex-col h-screen pb-24">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto p-3">
        {/* HEADER */}
        <Header />
        {/* BODY */}
        <PassBody />
        {/* Live map Button */}
        <div className="mt-4 flex justify-center items-center">
          <div className="bg-red-500 text-white rounded-full w-max px-5 py-2">
            Live Map
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div
        className="flex justify-around items-center bg-white shadow-md border-t py-3 
                    fixed bottom-0 w-full"
      >
        <div className="flex flex-col items-center">
          <Home />
          <div className="text-xs text-gray-700">Home</div>
        </div>
        <div className="flex flex-col items-center">
          <Parking />
          <div className="text-xs text-gray-700">Parking</div>
        </div>
        <div className="flex flex-col items-center">
          <Bus />
          <div className="text-xs text-gray-700">Transit</div>
        </div>
        <div className="flex flex-col items-center">
          <Permit />
          <div className="text-xs text-gray-700">Permits</div>
        </div>
      </div>
    </div>
  );
}

export default App;
