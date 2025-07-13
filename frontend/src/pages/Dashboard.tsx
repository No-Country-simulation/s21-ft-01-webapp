import AsideBar from "../components/Aside/AsideBar";
import NavbarLeft from "../components/Common/NavbarLeft";
import HeaderDashboard from "../components/Dashboards/HeaderDashboard";
import AccountSummaryCart from "../components/chart/AccountSummaryCart";
import TransactionHistory from "../components/chart/TransactionHistory";

export default function Dashboard() {
  return (
    <div className="flex">
      <NavbarLeft />
      <main className="p-6 flex flex-col gap-8 grow-2 ml-[12%]">
        <HeaderDashboard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div>
            <AccountSummaryCart />
          </div>
          <div>
            <TransactionHistory />
          </div>
        </div>
      </main>
      <AsideBar />
    </div>
  );
}