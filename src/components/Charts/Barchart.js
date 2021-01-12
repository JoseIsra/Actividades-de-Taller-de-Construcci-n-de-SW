import { PlayCircleFilledWhite } from '@material-ui/icons';
import React,{useState ,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import './Barchart.css';



//import './Barchart.css';
export const Barchart = ({prodName, prodQuantity}) => {
    const [renderData, setRenderData] = useState({});


    useEffect(()=>{
        setRenderData({
            labels:prodName,
                datasets:[{
                    label: '5 Productos más vendidos',
                    data: prodQuantity,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
    })
    }, []);


    return (
        < div className="barchart">
            <Bar 
            data={renderData}
            
                options={{ maintainAspectRatio: false ,
                scales:{
                
                    yAxes:[{
                        gridLines:{
                                color:'white',
                                display:true
                        },
                        ticks:{
                            beginAtZero:true,
                            fontColor:'white'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 14,
                            stepSize: 1,
                        }
                    }]
                },
                legend:{
                    labels:{
                        fontSize:22,
                        fontColor:'#03a9f4'
                    }
                }
            }}

            />
    
            
            
        </div>
    )
}
