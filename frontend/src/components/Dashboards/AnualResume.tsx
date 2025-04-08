import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { ChartData, ChartOptions } from "chart.js"; // PrimeReact usa Chart.js internamente

interface MonthlyFinancialData {
    ingresos: number[];
    egresos: number[];
}

const financialData: Record<number, MonthlyFinancialData> = {
    2023: {
        ingresos: [5000, 6000, 7000, 8000, 7500, 6800, 7200, 8000, 8200, 9000, 9500, 10000],
        egresos: [3000, 4000, 3500, 5000, 4800, 4500, 4700, 5200, 5000, 5500, 6000, 6500]
    },
    2024: {
        ingresos: [7000, 8000, 9000, 8500, 8800, 9200, 9400, 10000, 11000, 11500, 12000, 13000],
        egresos: [5000, 5500, 6000, 6500, 7000, 7500, 7700, 8000, 8500, 9000, 9500, 10000]
    }
};

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const AnualResume = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);
    const [chartOptions, setChartOptions] = useState<ChartOptions<"bar"> | null>(null);

    useEffect(() => {
        const ingresos = financialData[selectedYear]?.ingresos || Array(12).fill(0);
        const egresos = financialData[selectedYear]?.egresos || Array(12).fill(0);

        const data: ChartData<"bar"> = {
            labels: months,
            datasets: [
                {
                    label: "Ingresos",
                    data: ingresos,
                    backgroundColor: "rgba(0, 149, 190, 1)",
                    hoverBackgroundColor: "rgba(0, 149, 190, 0.6)",
                    borderRadius: 20,
                    borderSkipped: false
                },
                {
                    label: "Egresos",
                    data: egresos,
                    backgroundColor: "rgba(255, 107, 107, 1)",
                    hoverBackgroundColor: "rgba(255, 107, 107, 0.6)",
                    borderRadius: 20,
                    borderSkipped: false
                }
            ]
        };

        const options: ChartOptions<"bar"> = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    position: "top"
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [selectedYear]);

    return (
        <div className="py-6 px-4">

            <div className="flex w-full items-center justify-between flex-wrap">

                <h2 className="mb-3 font-semibold text-2xl">Analíticas del {selectedYear}</h2>

                <div className="flex items-center justify-end gap-6 w-full mb-4">
                    <div className="flex gap-2 items-center">

                        <div className="h-4 w-4 bg-primary rounded-full">
                        </div>
                        <p>Ingreso</p>

                    </div>

                    <div className="flex gap-2 items-center">

                        <div className="h-4 w-4 bg-secondary rounded-full">
                        </div>
                        <p>Egreso</p>

                    </div>

                    <select
                        className="py-1 px-2 border-1 border-primary rounded-full"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                    >
                        {Object.keys(financialData).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>



                </div>

            </div>

            <div>
                {chartData && chartOptions ? (
                    <Chart type="bar" data={chartData} options={chartOptions} style={{ width: "100%", height: "250px" }} />
                ) : (
                    <p>Cargando gráfico...</p>
                )}
            </div>
        </div>
    );
};

export default AnualResume;
