import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
//import { Transaction } from '../types/Transaction.types';
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {

    return (   
        <div className="flex min-h-screen bg-white">  
            {/* Navbar a la izquierda */}    
                <NavbarLeft />  

            {/* Main Content */} 
            <main className="flex-1 flex flex-col gap-6 p-4 md:p-8 ml-0 lg:ml-[16rem] transition-all duration-300">
                <section className="w-full overflow-x-auto">
                <TransactionHistory/>
                </section>
                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AccountSummaryChart />
                </section>
            </main> 

            {/* Sidebar a la derecha */}  
                <AsideBar />
        </div>
    );
};

export default HistoryPage;  