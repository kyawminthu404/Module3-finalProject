import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import ReactApexChart from 'react-apexcharts';





const Dashboard = () => {

  const history = useHistory();
  

  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );

const [chartData, setChartData] = useState({
  options: {
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  series: [
    {
      name: 'series-1',
      data: [2, 4, 6, 10, 22, 21, 7, 9, 15, 10, 18, 20,19,18,25,20,6,9,5,11,4,31]
    }
  ]
});



  return (
    <>
    
     <h1>ApexCharts</h1>

     <ReactApexChart options={chartData.options} series={chartData.series} id="basic-bar"  type="bar" height={350} />

    </>
  )
}

export default Dashboard
