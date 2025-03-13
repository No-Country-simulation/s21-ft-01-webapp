import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
import { Transaction } from '../types/Transaction.types';
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {
    const transactionsData: Transaction[] = [];

    return (  
        <div className="min-h-screen flex">  
            {/* Navbar a la izquierda */}  
            <div className="flex">  
                <NavbarLeft />  
            </div>  

            {/* Charts */}
            <main className="p-1 mx-3 flex grow-2">
                <div className="w-[70%]">
                    <TransactionHistory transactions={transactionsData} />
                </div>
                <div className="w-[30%] mx-1">
                    <AccountSummaryChart />
                </div>
            </main>

            {/* Sidebar a la derecha */}
            <div className="flex">
                <AsideBar />
            </div>
        </div>
    );
};

export default HistoryPage;  