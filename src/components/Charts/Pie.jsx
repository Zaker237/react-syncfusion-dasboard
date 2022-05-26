import React from 'react';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective,
AccumulationSeriesDirective, AccumulationLegend, PieSeries,
AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Pie = ({ id, data, legendVisibility, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      height={height}
      legendSettings={{
        visible: legendVisibility,
        background: 'white'
      }}
      background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
      tooltip={{
        enable: true
      }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name='Sale'
          dataSource={data}
          xName='x'
          yName='y'
          dataLabel={{
            visible: true,
            position: 'Inside',
            name: 'text',
            font: {
              fontWeight: '600',
              color: '#ffffff'
            }
          }}
          explode={true}
          explodeOffset={'10%'}
          explodeIndex={2}
          raduint='70%'
          innerRadius='40%'
          startAngle={0}
          endAngle={360}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie;