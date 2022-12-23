import { PureComponent } from "react"
import { PieChart, Pie  } from 'recharts';
import './style.css'

const dataPieChart = [
  { name: 'Pefisa', value: 47 },
  { name: 'Altsa', value: 53 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Piegraph extends PureComponent {
    render() {
            return(
              <main className='container'>
                <div className='PieChart'>
                  <h1>Pie Chart</h1>
                  <p>•Pefisa</p>
                  <p>•Altsa</p>
                  
                  <PieChart width={300} height={300}>
                    <Pie  data={dataPieChart}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"/>
                  </PieChart>
                </div>
            </main>
            )
    }
}