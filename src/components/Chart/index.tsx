import React from 'react';
import withObservables from '@nozbe/with-observables';
import { LineChart } from 'react-native-chart-kit';

import { obserWeights, WeightProps } from '../../database/helpers';

import {
   windowWidth,
   chartConfig,
   styles
} from './styles';

interface Props{
   weights: WeightProps[];
}

function Chart({weights}:Props){

   if(weights.length < 1){
      return (<></>);
   }

   const labels: string[] = [];
   const data: number[]=[];
   weights.forEach((w)=>{
      labels.push(`${w?.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`)
      data.push(w.weight);
   })


   return (
      <LineChart
         bezier
         height={250}
         width={windowWidth - 30}
         chartConfig={chartConfig}
         style={styles.chart}
         data={{labels, datasets: [{data}]}}
      />
 );
}

const enhanceWithWeigth = withObservables(['weights'], ({weights}) => ({
   weights: obserWeights(),
}))

export default enhanceWithWeigth(Chart);

