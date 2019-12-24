import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { ListItem } from '@material-ui/core';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const useStyles = makeStyles(theme => ({   
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  }));
const chartList = ['column2d', 'area2d', 'pie2d']; 
const dataSource = {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'fusion'
    },
    data: [
      { label: 'Venezuela', value: '290' },
      { label: 'Saudi', value: '260' },
      { label: 'Canada', value: '180' },
      { label: 'Iran', value: '140' },
      { label: 'Russia', value: '115' },
      { label: 'UAE', value: '100' },
      { label: 'US', value: '30' },
      { label: 'China', value: '30' }
    ]
  };
  
  const chartConfigs = {
    type: 'column2d',
    width: '97%',
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
  };
const chart = chartList.map((chart,index) => {
    chartConfigs.type = chartList[index];
    return(
        <ListItem>
            <ReactFC {...chartConfigs}></ReactFC>
        </ListItem>
    )
})
  
function ChartHolder(){
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <List component='div'>
            {chart}
        </List>
      </main>
    )
}
export default ChartHolder;