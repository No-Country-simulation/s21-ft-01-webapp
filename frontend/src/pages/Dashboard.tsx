import AsideBar from "../components/Aside/AsideBar";
import AccountSummaryChart from "../components/chart/AccountSummaryCart";
import TransactionHistory from "../components/chart/TransactionHistory";
import NavbarLeft from "../components/Common/NavbarLeft"
import HeaderDashboard from "../components/Dashboards/HeaderDashboard";

export default function Dashboard() {

  return (
    <div className="flex">
      <NavbarLeft />
      <main className="p-6 flex flex-col gap-8 grow-2">

        <HeaderDashboard />

        <div
          className="flex gap-2"
        >
          <div className="grow-2 min-w-1/2">
            <h4 className="text-secondary mt-4 text-xl font-bold">Ultimos Movimientos</h4>
            <TransactionHistory
              limit={true}
            />
          </div>

          <div className="grow-1">
            <AccountSummaryChart />
          </div>

        </div>

      </main>
      <AsideBar />

    </div>
  );
}