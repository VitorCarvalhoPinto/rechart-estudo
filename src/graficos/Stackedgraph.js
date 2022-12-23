import { PureComponent } from "react"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar} from 'recharts';
import './style.css'

const dataStackedChart = [
  {
    name: 'August',
    altsa: 6,
    pefisa: 3,
  },
  {
    name: 'September',
    altsa: 17,
    pefisa: 5,
  },
  {
    name: 'October',
    altsa: 25,
    pefisa: 0,
  },
  {
    name: 'December',
    altsa: 0,
    pefisa: 14,
  },
];

export default class Stackedgraph extends PureComponent {
    render() {
            return(
                <main className='container'>
                  <div className='StackedChart'>
                    <h1>Stacked Bar Chart</h1>
                    <BarChart
                      width={500}
                      height={300}
                      data={dataStackedChart}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="1 1" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pefisa" stackId="a" fill="#8884d8" />
                      <Bar dataKey="altsa" stackId="a" fill="#82ca9d" />
                    </BarChart>
                  </div>
                </main>
        )
    }
}