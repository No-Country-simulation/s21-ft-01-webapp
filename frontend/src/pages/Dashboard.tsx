import AsideBar from "../components/Aside/AsideBar";
import NavbarLeft from "../components/Common/NavbarLeft";
import HeaderDashboard from "../components/Dashboards/HeaderDashboard";
import AccountSummaryCart from "../components/chart/AccountSummaryCart";
import TransactionHistory from "../components/chart/TransactionHistory";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      <NavbarLeft />
      <main className="flex-1 flex flex-col gap-6 p-4 md:p-8 ml-0 lg:ml-[16rem] transition-all duration-300">
                <section className="w-full overflow-x-auto">
          <HeaderDashboard />
          </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <AccountSummaryCart />
          </div> 
          <div>
            <TransactionHistory />
          </div>
        </section>
      </main>
      <AsideBar />
    </div>
  );
}