import { PureComponent } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './style.css'

const dataLineChart = [
    {
      name: 'August',
      superior_percent_removed: 4.7,
      mean_removed: 3.7,
      inferior_percent_removed: 2.6,
    },
    {
      name: 'September',
      superior_percent_removed: 4.3,
      mean_removed: 3.4,
      inferior_percent_removed: 2.5,
    },
    {
      name: 'October',
      superior_percent_removed: 6.4,
      mean_removed: 4.1,
      inferior_percent_removed: 1.7,
    },
    {
      name: 'November',
      superior_percent_removed: 7.4,
      mean_removed: 5.1,
      inferior_percent_removed: 2.7,
    },
    {
      name: 'December',
      superior_percent_removed: 8.2,
      mean_removed: 6.4,
      inferior_percent_removed: 4.6,
    },
  ];
  
  const dataLineChart2 = [
    {
      name: 'Percentual',
      data: [
        { category: '07/12/2022', value: 6.3 },
        { category: '14/12/2022', value: 6.7 },
        { category: '20/12/2022', value: 7.3 },
      ],
      orientation: 'left',
    },
    {
      name: 'Volume Reduzido',
      data: [
        { category: '07/12/2022', value: 10000 },
        { category: '14/12/2022', value: 300 },
        { category: '20/12/2022', value: 400 },
      ],
      orientation: 'right',
    },
  ]

export default class Linegraph extends PureComponent {
    render() {
            return(
                <main className='container'>
                  <h1>Line Chart (ex1)</h1>
                  <div className='LineChart'>
                      <LineChart
                      width={500}
                      height={250}
                      data={dataLineChart}
                      margin={{
                          top: 5,
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
                      <Line type="monotone" dataKey="superior_percent_removed" stroke="#FF0000" activeDot={{ r: 8 }}/>
                      <Line type="monotone" dataKey="mean_removed" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="inferior_percent_removed" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                  </LineChart>
          
                  <h1>Line Chart (ex2)</h1>
                  <LineChart width={500} height={250}>
                      <CartesianGrid strokeDasharray="1 1" />
                      <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
                      <YAxis dataKey="value" yAxisId="left"/>
                      <YAxis dataKey="value" yAxisId="right" orientation="right"/>
                      <Tooltip />
                      <Legend />
                      {dataLineChart2.map((s) => (
                          <Line yAxisId={s.orientation} dataKey="value" data={s.data} name={s.name} key={s.name} />
                      ))}
                  </LineChart>
                  </div>
                </main>
        )
    }

}