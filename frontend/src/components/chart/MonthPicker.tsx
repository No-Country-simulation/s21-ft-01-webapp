import React, { useState } from 'react';
import { IconCalendarMonth } from '@tabler/icons-react';   

interface MonthPickerDemoProps {  
    selectedMonth: Date | null;  
    setSelectedMonth: (date: Date | null) => void;  
}  

const MonthPickerDemo: React.FC<MonthPickerDemoProps> = ({ selectedMonth, setSelectedMonth }) => {  
    const [isOpen, setIsOpen] = useState(false);  
    const [currentDate, setCurrentDate] = useState(selectedMonth || new Date());  

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];  
    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);  

    const handleMonthClick = (monthIndex: number) => {  
        const newDate = new Date(currentDate.getFullYear(), monthIndex, 1);  
        setSelectedMonth(newDate);  
        setIsOpen(false);  
    };  

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {  
        const year = parseInt(event.target.value);  
        setCurrentDate(new Date(year, currentDate.getMonth(), 1));  
    };  

    return (  
        <div className="relative inline-block text-left">  
            <div>  
                <button  
                    type="button"  
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  
                    id="menu-button"  
                    aria-expanded="true"  
                    aria-haspopup="true"  
                    onClick={() => setIsOpen(!isOpen)} 
                    style={{position:'relative', zIndex:50}} 
                >  
                    {selectedMonth ? (
                    <>
                        <IconCalendarMonth className="mr-2" size={16} />  
                        {months[selectedMonth.getMonth()].substring(0, 3)}
                    </>
                    ):(
                    <>
                        <IconCalendarMonth className="mr-2" size={16} />  
                            Mes  
                    </>  
                    )}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">  
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />  
                    </svg>  
                </button>  
            </div>  

            {isOpen && (  
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>  
                    <div className="py-1" role="none">  
                        <div className="px-4 py-2 text-gray-700">  
                            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Año:</label>  
                            <select  
                                id="year"  
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  
                                value={currentDate.getFullYear()}  
                                onChange={handleYearChange}  
                            >  
                                {years.map(year => (  
                                    <option key={year} value={year}>{year}</option>  
                                ))}  
                            </select>  
                        </div>  
                        {months.map((month, index) => (  
                            <button  
                                key={month}  
                                onClick={() => handleMonthClick(index)}  
                                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"  
                                role="menuitem"  
                                tabIndex={-1}  
                            >  
                                {month}  
                            </button>  
                        ))}  
                    </div>  
                </div>  
            )}  
        </div>  
    );  
};  

export { MonthPickerDemo };  