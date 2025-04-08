import React from 'react';  
import { Chart } from 'primereact/chart';  
import { IconTrendingUp, IconTrendingDown} from '@tabler/icons-react';
interface Transaction {  
    id: string;  
    date: string;  
    to: string;  
    category: string;  
    amount: number;  
}  

interface CategoryStyle {  
    color: string;  
    labelColor: string;  
}  

const categoryStyles: { [key: string]: CategoryStyle } = {  
    'Comida': { color: '#8e24aa', labelColor: '#8e24aa' },  
    'Indumentaria': { color: '#eb984e', labelColor: '#eb984e' },  
    'Transporte': { color: '#0000CC', labelColor: '#0000CC' },  
    'Entretenimiento': { color: '#fff59d', labelColor: '#fff59d' },  
    'Salud': { color: '#e91e63', labelColor: '#e91e63' },  
    'Sueldo': { color: '#2ecc71', labelColor: '#2ecc71' },  
    'otros': { color: '#29b6f6', labelColor: '#29b6f6' },  
};  

// Ejemplo de transacciones   
const initialTransactions: Transaction[] = [  
    { id: '1', date: '2025-03-05', to: 'Restaurante', category: 'Comida', amount: -50 },  
    { id: '2', date: '2025-03-05', to: 'Tienda de ropa', category: 'Indumentaria', amount: -100 },  
    { id: '3', date: '2025-03-06', to: 'Subte', category: 'Transporte', amount: -5 },  
    { id: '4', date: '2025-03-06', to: 'Cine', category: 'Entretenimiento', amount: -25 },  
    { id: '5', date: '2025-03-07', to: 'Farmacia', category: 'Salud', amount: -30 },  
    { id: '6', date: '2025-03-07', to: 'Empresa', category: 'Sueldo', amount: 2000 },  
    { id: '7', date: '2025-03-07', to: 'Supermercado', category: 'otros', amount: -80 },  
];  

const AccountSummaryChart: React.FC = () => {  
    // Incluir solo gastos (amount < 0)  
    const expenseTransactions = initialTransactions.filter(transaction => transaction.amount < 0);  
    const incomeTransactions = initialTransactions.filter(transaction => transaction.amount > 0);  

    // Agrupar los gastos por categoría  
    const categoryExpenses = expenseTransactions.reduce((acc, transaction) => {  
        const category = transaction.category;  
        acc[category] = (acc[category] || 0) + Math.abs(transaction.amount);  
        return acc;  
    }, {});  

    // Calcular ingresos totales  
    const totalIncome = incomeTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);  
    const totalExpenses = expenseTransactions.reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);  

    // Preparar los datos para el gráfico  
    const labels = Object.keys(categoryExpenses);  
    const dataValues = Object.values(categoryExpenses);  
    const backgroundColors = labels.map(category => categoryStyles[category]?.color || '#808080');  

    const data = {  
        labels: labels,  
        datasets: [  
            {  
                label: 'Gastos',  
                data: dataValues,  
                backgroundColor: backgroundColors,  
                borderColor: 'rgba(255, 255, 255, 1)',  
                borderWidth: 2,  
            },  
        ],  
    };  

    const options = {  
        responsive: true,  
        maintainAspectRatio: false,  
        plugins: {  
            legend: {  
                display: false,   
            },  
            tooltip: {  
                enabled: false,  
            },  
        },  
    };  

    return (  
        <div className="p-4 h-64 relative">  
            <h1 className="text-xl font-bold text-center text-[#FF6B6B] font-montserrat mb-2">Resumen de cuenta</h1>  
            
            {/* Tarjetas de ingresos y gastos */}  
            <div className="flex justify-between mb-4 ">  
                {/* Card de Ingresos */}  
                <div className="border border-blue-700 text-black p-2 rounded-lg flex flex-col mr-2 shadow-md">   
                    <div className="flex items-center">
                        <IconTrendingUp size={15} color="blue" />
                        <h2 className="font-Montserrat text-xs">Ingresos</h2>
                    </div>
                        <p className="text-lg font-bold">{totalIncome > 0 ? `$${totalIncome.toFixed(2)}` : '$0.00'}</p>   
                </div>  

                {/* Card de Gastos */}  
                <div className="border border-blue-700 text-black p-2 rounded-lg flex flex-col ml-2 shadow-md">  
                    <div className="flex items-center">
                        <IconTrendingDown size={15} color="red" />  
                        <h2 className="font-Montserrat text-xs">Gastos</h2>
                    </div>      
                        <p className="text-lg font-bold">{totalExpenses > 0 ? `$${totalExpenses.toFixed(2)}` : '$0.00'}</p>  
                </div>  
            </div>  

            <Chart  
                type="doughnut"  
                data={data}  
                options={options}  
                className="w-full h-full"  
            />  

            {/* Leyenda personalizada con círculos */}  
            <div className="inline-block bottom-0 left-0 w-full flex justify-center items-center space-x-4 py-3">  
                {labels.map((label, index) => (  
                    <div key={index} className="flex items-center space-x-2">  
                        <span  
                            className="w-3 h-3 rounded-full"  
                            style={{ backgroundColor: backgroundColors[index] }}  
                        ></span>  
                        <span className="text-xs">{label}</span>  
                        </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default AccountSummaryChart;  