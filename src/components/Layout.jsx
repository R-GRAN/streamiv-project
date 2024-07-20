import TopList from "@/components/TopList";
import HomeList from "@/components/HomeList";

function Layout() {
  return (
    <div className="flex flex-col mt-3 sm:flex-row">
      <div className="sm:w-2/3">
        <HomeList />
      </div>
      <TopList />
    </div>
  );
}

export default Layout;
