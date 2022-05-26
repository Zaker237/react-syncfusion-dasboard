import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
Inject, Category, Legend, ColumnSeries, DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
    
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();
  
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        title='Olympic Medal Counts - RIO'
        category='Bar Chart'
      />
      <div className='w-full'>
        <ChartComponent
          id='bar-charts'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
          background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
        >
          <Inject services={[ColumnSeries, Category, Tooltip, Legend, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective
                key={index}
                {...item}
              />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar