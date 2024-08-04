import "./App.css";
import SideBarManagement from "./component/SideBarManagement";
import NavigationManagement from "./component/NavigationManagement";
import TodaysMoney from "./component/TodaysMoney";
import TodaysUser from "./component/TodaysUser";
import TodaysClient from "./component/TodaysClient";
import TodaysSale from "./component/TodaysSale";

function App() {
  return (
    <>
      <SideBarManagement />
      <div className="min-h-screen bg-gray-50/50">
        <div className="p-4 xl:ml-80">
          <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
            <NavigationManagement />
          </nav>
          <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <TodaysMoney />
              <TodaysUser />
              <TodaysClient />
              <TodaysSale />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
