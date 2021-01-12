import React ,{useEffect, useState}from 'react'
import {Barchart } from '../Charts/Barchart';
import {LineChart } from '../Charts/LineChart';
import { SellCharts } from '../Charts/SellCharts';
import { api } from '../../httprequestconfig/methods';
import './Dashboard.css';

let prodName=[];
let prodQuantity=[];
let servName=[];
let servQuantity=[];
let sell=[];
let sellDay=[];
export const Dashboard = () => {

    const [maxTotal , setMaxTotal] = useState(0);
    const [sumTotal , setSumTotal] = useState(0);

    useEffect(() => {
        api.getDashData()
        .then(res => {
        res.data.importantProducts.forEach(item => {
            prodName.push(item.prod_name);
            prodQuantity.push(item.cantidad);
        })
        //services
            for(const objs of res.data.services){
                servName.push(objs.serv_type_name);
                servQuantity.push(objs.cantidad);
            }
        // sells
        for(const objs of res.data.sells){
            sell.push(objs.total);
            sellDay.push(objs.fecha);
        }
            setMaxTotal(res.data.max);
            setSumTotal(res.data.sumTotal);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="dashboard">
            <div className="dashboard__title">
                <h1>HappyPet <span>DASHBOARD</span></h1>
            </div>
            <div className="dashboard__content">
                <div className="dashboard__content__SectionOne">
            <Barchart prodName={prodName} prodQuantity={prodQuantity} />
            <LineChart servName={servName} servQuantity={servQuantity} />
                </div>
                <div className="dashboard__content__SectionTwo">
            <SellCharts sell={sell} sellDay={sellDay}  />
            <div className="sectionTwoNumbers">
                    <p>Ingresos Totales  <span><strong>S/.{sumTotal}</strong> </span> </p>
                    <p>Mayor venta :<span><strong>S/.{maxTotal}</strong></span></p>
            </div>
                </div>

            </div>

        </div>
    )
}
