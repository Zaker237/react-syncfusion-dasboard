import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';

const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        title='Project Cost Breakdown'
        category='Pie Chart'
      />
      <div className='w-full'>
      <PieChart
        id='pie-chart'
        data={pieChartData}
        legendVisibility={true}
        height='full'
      />
      </div>
    </div>
  )
}

export default Pie;