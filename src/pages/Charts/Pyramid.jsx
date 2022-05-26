import React from 'react';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective,
AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries,
AccumulationDataLabel, AccumulationTooltip, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category='Pyramid Chart'
        title='Food Comparison Chart'
      />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          tooltip={{
            enable: true,
          }}
          background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
          legendSettings={{
            background: 'white'
          }}
        >
          <Inject
            services={[AccumulationLegend, PyramidSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName='x'
              yName='y'
              name='Food'
              type='Pyramid'
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode={true}
              emptyPointSettings={{
                mode: 'Drop',
                fill: 'red',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid