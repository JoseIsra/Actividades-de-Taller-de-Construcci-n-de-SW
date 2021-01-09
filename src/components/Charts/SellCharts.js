import React,{useState ,useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import './Barchart.css';



//import './Barchart.css';
export const SellCharts = ({sell, sellDay, sumTotal, maxTotal}) => {
    const [renderData, setRenderData] = useState({});


    useEffect(()=>{
        setRenderData({
            labels:sellDay,
            datasets:[{
                label: 'Ventas de la Semana',
                data: sell,
                fill:false,
                    pointBackgroundColor:[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    pointRadius:6
                    
                }]
    })
    }, []);


    return (
        < div className="sellchart">
            
            <Line 
            data={renderData}
            
                options={{ maintainAspectRatio: false ,
                scales:{
                    yAxes:[{
                        gridLines:{
                            color:'white',
                            display:true
                        },
                        ticks:{
                            fontColor:'white',
                            beginAtZero:true,
                            fontSize:20,
                            stepSize:90,
                            
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 15,
                            stepSize: 1,
                        }
                    }]
                },
                legend:{
                    labels:{
                        fontSize:22,
                        fontColor:'white'
                    }
                },
                elements:{
                    line:{
                        tension:0,
                        borderColor:'white',
                    }
                },
            }}

            />
        
            
            
        </div>
    )
}
