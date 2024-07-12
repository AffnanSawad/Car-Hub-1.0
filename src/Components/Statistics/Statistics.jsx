
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

import './chart.css'


const Statistics = () => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: '2012',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2014',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2016',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2018',
    uv: 3990,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2020',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2022',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2024',
    uv: 2444,
    pv: 500,
    amt: 500,
  },
];

   
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  
      
        
          return (
            <BarChart className='-ml-8 md:ml-40 mt-20 mb-20'
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
            
    );
};

Statistics.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
    
export default  Statistics;
