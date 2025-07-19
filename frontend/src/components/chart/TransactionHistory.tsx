import React, { useState } from 'react';  
import { Button } from 'primereact/button';  
import { DataTable } from 'primereact/datatable';   
//import { useQuery } from '@tanstack/react-query';   
import { Column } from 'primereact/column'; 
import { IconTrendingUp, IconCashBanknote, IconShoppingBag, IconTrendingDown, IconToolsKitchen3, IconShirtSport, IconBusStop, IconMasksTheater, IconHeartbeat, IconProps } from '@tabler/icons-react';  
import { formatDateTime } from '../../utils/date';  
import { MonthPickerDemo } from './MonthPicker';  

// Interfaz para las transacciones  
interface Transaction {  
    id: string;  
    date: string;  
    to: string; 
    category: string; 
    amount: number;  
}  

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

//Estilos de categoría 
interface CategoryStyle {  
    icon: React.FC<IconProps>;  
    color: string;  
    labelColor: string;  
}  

const categoryStyles: { [key: string]: CategoryStyle } = {  
    'Comida': { icon: IconToolsKitchen3, color: '#FF6B6B', labelColor: '#FDBCFF' },  
    'Indumentaria': { icon: IconShirtSport, color: '#FF6B6B', labelColor: '#FFC6A4' },  
    'Transporte': { icon: IconBusStop, color: '#FF6B6B', labelColor: '#A7D6F9' },  
    'Entretenimiento': { icon: IconMasksTheater, color: '#FF6B6B', labelColor: '#fcfbb6' },  
    'Salud': { icon: IconHeartbeat, color: '#FF6B6B', labelColor: '#fcc5b6' },  
    'Sueldo': { icon: IconCashBanknote, color: '#FF6B6B', labelColor: '#abebc6' },  
    'otros': { icon: IconShoppingBag, color: '#FF6B6B', labelColor: '#c6fefc' },  
}; 

// Obtener las transacciones desde el backend  
//const fetchTransactions = async (): Promise<Transaction[]> => {  
//    const response = await fetch('http://localhost:3000/api/transaction');  
//    if (!response.ok) {  
//        throw new Error('Error al recuperar las transacciones');  
//    }  
//    return response.json();  
//};  

const TransactionHistory: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
    const transactions = initialTransactions;

    // Filtro de transacciones por mes  
    const filteredTransactions = selectedMonth  
        ? transactions.filter(transaction => {  
            const transactionDate = new Date(transaction.date);  
            return (  
                transactionDate.getFullYear() === selectedMonth.getFullYear() &&  
                transactionDate.getMonth() === selectedMonth.getMonth()  
            );  
        })  
        : transactions; 

    // Agrupar las transacciones por día  
    const groupTransactionsByDate = (transactions: Transaction[]) => {  
        const grouped: { [date: string]: Transaction[] } = {};  
        transactions.forEach(transaction => {  
            const date = transaction.date;  
            if (!grouped[date]) {  
                grouped[date] = [];  
            }  
            grouped[date].push(transaction);  
        });  
        return grouped;  
    };  

    const groupedTransactions = groupTransactionsByDate(filteredTransactions);         
        
    // Función para el botón "Ver Transferencia"  
    const actionBodyTemplate = (rowData: Transaction) => (   
            <Button  
                label="Ver Transferencia"  
                title="Ver detalles de la transferencia"  
                className="w-full mt-1 px-1 py-1 bg-primary text-white rounded-lg font-monserrat hover:bg-primary-dark transition-colors text-xs"  
                style={{ height: '1.25rem', fontSize: '0.6rem' }}  
                onClick={() => alert(`Ver transferencia ${rowData.id}`)}  
                aria-label={`Ver detalles de la transferencia ${rowData.id}`}   
            />  
    );  
    

     // Función para mostrar el icono de flecha  
    const amountIconBodyTemplate = (rowData: Transaction) => {  
        const isIncome = rowData.amount > 0;  
        return isIncome ? <IconTrendingUp size={20} color="blue" /> : <IconTrendingDown size={20} color="blue" />;  
    };  

    // Función para formatear el monto  
    const amountBodyTemplate = (rowData: Transaction) => {  
        const formattedAmount = rowData.amount.toFixed(2);  
        return rowData.amount >= 0 ? `$${formattedAmount}` : `-$${Math.abs(rowData.amount).toFixed(2)}`;  
    };  

    // Etiqueta de categoría con color  
    const categoryBodyTemplate = (rowData: Transaction) => {  
        const categoryInfo = categoryStyles[rowData.category] || { color: '#808080', labelColor: '#E0E0E0' };  
        const categoryStyle = {  
            backgroundColor: categoryInfo.labelColor,  
            color: categoryInfo.color,  
            padding: '0.15rem 0.15rem',  
            borderRadius: '0.25rem',  
            display: 'inline-flex',  
            alignItems: 'center',  
            fontFamily: 'Montserrat, sans-serif',  
            fontSize: '0.5rem',  
        }; 

        const circleStyle = {  
            display: 'inline-block',  
            width: '0.25rem',  
            height: '0.25rem',  
            borderRadius: '50%',  
            backgroundColor: categoryInfo.color,  
            marginRight: '0.2rem',  
        };  

        return (  
            <span style={categoryStyle}>  
                <span style={circleStyle}></span>  
                {rowData.category}  
            </span>  
        );  
    };  

    // Icono de categoría  
    const categoryIconBodyTemplate = (rowData: Transaction) => {  
        const CategoryIcon = categoryStyles[rowData.category]?.icon || null;  
        const categoryInfo = categoryStyles[rowData.category] || { color: '#808080' };  

        return (  
            <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: categoryInfo.color }}>  
                {CategoryIcon && <CategoryIcon size={20} color="white" />}  
            </div>  
        );  
    };  

    return (  
        <div className="container mx-0 p-4 font-montserrat relative z-0">  
            <div className="flex items-center justify-between mb-4">  
                <h1 className="text-2xl md:text-3xl font-bold underline text-blue-500">Historial</h1>  
                <div className="z-50 relative">  
                    <MonthPickerDemo selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />  
                </div>  
            </div> 

            {/* Renderiza las transacciones agrupadas */} 

            {Object.entries(groupedTransactions).map(([date, transactions]) => (  
                <div key={date} className="border-b">  
                    <DataTable  
                        value={transactions}  
                        responsiveLayout="scroll"  
                        className="table-auto w-full"  
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.5rem' }}  
                        tableStyle={{ borderCollapse: 'collapse' }}  
                    >  
                        {/* Columnas de la tabla */}  
                        <Column body={categoryIconBodyTemplate} style={{ width: '0.5rem' }} />  
                        <Column body={(rowData: Transaction) => (  
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.5rem', lineHeight: 'normal', width: '8rem' }}>  
                                <div style={{ fontWeight: 'bold' }}>{rowData.to}</div>  
                                <div>{formatDateTime(rowData.date)}</div>  
                            </div>  
                        )} style={{ flexGrow: 1 }} />  
                        <Column field="category" body={categoryBodyTemplate} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }} headerStyle={{ color: '#FF6B6B', fontSize: '0.8rem' }} />  
                        <Column body={amountIconBodyTemplate} style={{ width: '0.5rem' }} />  
                        <Column body={amountBodyTemplate} style={{ width: '0.5rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.5rem' }} />  
                        <Column body={actionBodyTemplate} style={{ width: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.5rem' }} />  
                    </DataTable>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default TransactionHistory;






