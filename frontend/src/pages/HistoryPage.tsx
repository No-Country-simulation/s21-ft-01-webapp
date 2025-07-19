import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
import { Transaction } from '../types/Transaction.types';
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {
    const transactionsData: Transaction[] = [];

    return (  
         <div className="flex">  
            {/* Navbar a la izquierda */}    
                <NavbarLeft />  

            {/* Main Content */} 
            <main className="p-6 flex flex-col gap-8 grow-2 ml-[12%]">
                <TransactionHistory/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <AccountSummaryChart />
                </div>
            </main> 

            {/* Sidebar a la derecha */}  
                <AsideBar />
        </div>
    );
};

export default HistoryPage;  