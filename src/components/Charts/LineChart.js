import React,{useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';


export const LineChart = ({servName, servQuantity}) => {
    const [renderData, setRenderData] = useState({});

    useEffect(()=>{
        setRenderData({
            labels:servName,
            datasets:[{
                label: 'Índice de  Servicios utilizados',
                data: servQuantity,
                fill:false,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',                        
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
    })
    }, []);

    return (
        <div className="linechart">
            <h3>Métrica de servicios solicitados</h3>
            <Doughnut
            data={renderData}
        
                options={{ maintainAspectRatio: false ,
                scales:{
                    
                    yAxes:[{
                        ticks:{
                            beginAtZero:true,
                            fontColor:'white'
                        }
                    }]
                },
                legend:{
                    position:'bottom',
                    labels:{
                        fontSize:18
                    }
                }
            }}

            />

        </div>
    )
}
