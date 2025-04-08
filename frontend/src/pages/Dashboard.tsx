import AsideBar from "../components/Aside/AsideBar";
import NavbarLeft from "../components/Common/NavbarLeft"
import HeaderDashboard from "../components/Dashboards/HeaderDashboard";

export default function Dashboard() {
  return (
    <div className="flex">
      <NavbarLeft />
      <main className="p-6 flex flex-col gap-8 grow-2">

        <HeaderDashboard />

      </main>
      <AsideBar />

    </div>
  );
}