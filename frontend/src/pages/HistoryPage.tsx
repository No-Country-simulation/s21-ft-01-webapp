import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
import { Transaction } from '../types/Transaction.types';
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {
    const transactionsData: Transaction[] = [];

    return (  
        <div className="min-h-screen flex flex-row">  
            {/* Navbar a la izquierda */}   
                <NavbarLeft />  

            {/* Main Content */} 
            <main className="flex-grow flex flex-col md:flex-row p-4">  

               {/* Charts */}
                <div className="flex md:w-5/8 lg:w-6/8">
                    <TransactionHistory transactions={transactionsData} />
                </div>
                <div className="flex-1 md:w-1/8 lg:w-2/8 mt-4 md:mt-0 md:ml-4">
                    <AccountSummaryChart />
                </div>
            </main> 

            {/* Sidebar a la derecha */}  
                <AsideBar />
        </div>
    );
};

export default HistoryPage;  