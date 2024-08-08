import "./App.css";
import TodaysMoney from "./component/TodaysMoney";
import TodaysUser from "./component/TodaysUser";
import TodaysClient from "./component/TodaysClient";
import TodaysSale from "./component/TodaysSale";
import SideBar from "./layout/SideBar";
import NavigationBar from "./layout/NavigationBar";
import Dashboard from "./component/pages/Dashboard";

function App() {
  return (
    <>
      <SideBar />
      <div className="min-h-screen bg-gray-50/50">
        <div className="p-4 xl:ml-80">
        <NavigationBar />
          <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
             <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
