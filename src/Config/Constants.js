const OPTIONS = 'options';
const RANGE = 'Range';
const BOOLEAN = 'Boolean';
const PICKER = 'Picker';

let setType = (value, type) => ({
  type: type,
  default: value
});

const themeObject = {
  name: '',
  theme: {
    chart: {
      paletteColors: setType(
        '#5D62B5, #29C3BE, #F2726F, #FFC533, #62B58F, #BC95DF, #67CDF2',
        OPTIONS
      ),
      showShadow: setType('0', BOOLEAN),
      showPlotBorder: setType('0', BOOLEAN),
      usePlotGradientColor: setType('0', BOOLEAN),
      showValues: setType('0', BOOLEAN),

      // chart and canvas background customization
      bgColor: setType('#FFFFFF', PICKER),
      canvasBgAlpha: setType('0', BOOLEAN),
      bgAlpha: setType('100', RANGE),
      showBorder: setType('0', BOOLEAN),
      showCanvasBorder: setType('0', BOOLEAN),

      // axis and div line customization
      showAlternateHGridColor: setType('0', BOOLEAN),
      divLineColor: setType('#DFDFDF', PICKER),
      showXAxisLine: setType('0', BOOLEAN),
      yAxisNamePadding: setType('15', RANGE),
      sYAxisNamePadding: setType('15', RANGE),
      xAxisNamePadding: setType('15', RANGE),
      captionPadding: setType('15', RANGE),
      xAxisNameFontColor: setType('#999', PICKER),
      yAxisNameFontColor: setType('#999', PICKER),
      sYAxisNameFontColor: setType('#999', PICKER),
      yAxisValuesPadding: setType('15', RANGE),
      labelPadding: setType('10', RANGE),
      transposeAxis: setType('1', BOOLEAN),

      // tooltip customization
      toolTipBgColor: setType('#FFFFFF', PICKER),
      toolTipPadding: setType('6', RANGE),
      toolTipBorderColor: setType('#E1E1E1', PICKER),
      toolTipBorderThickness: setType('1', RANGE),
      toolTipBorderAlpha: setType('100', RANGE),
      toolTipBorderRadius: setType('2', RANGE),

      // font and text size customization
      // baseFont: 'Source Sans Pro',
      baseFontColor: setType('#5A5A5A', PICKER),
      baseFontSize: setType('14', RANGE),
      xAxisNameFontBold: setType('0', BOOLEAN),
      yAxisNameFontBold: setType('0', BOOLEAN),
      sYAxisNameFontBold: setType('0', BOOLEAN),
      xAxisNameFontSize: setType('15', RANGE),
      yAxisNameFontSize: setType('15', RANGE),
      sYAxisNameFontSize: setType('15', RANGE),
      captionFontSize: setType('18', RANGE),
      // captionFontFamily: 'Source Sans Pro SemiBold',
      subCaptionFontSize: setType('13', RANGE),
      captionFontBold: setType('1', BOOLEAN),
      subCaptionFontBold: setType('0', BOOLEAN),
      subCaptionFontColor: setType('#999', PICKER),
      valueFontColor: setType('#000000', PICKER),
      // valueFont: 'Source Sans Pro',

      // legend customization
      drawCustomLegendIcon: setType('1', BOOLEAN),
      legendShadow: setType('0', BOOLEAN),
      legendBorderAlpha: setType('0', BOOLEAN),
      legendBorderThickness: setType('0', BOOLEAN),
      // legendItemFont: 'Source Sans Pro',
      legendItemFontColor: setType('#7C7C7C', PICKER),
      legendIconBorderThickness: setType('0', BOOLEAN),
      legendBgAlpha: setType('0', BOOLEAN),
      legendItemFontSize: setType('15', RANGE),
      legendCaptionFontColor: setType('#999', PICKER),
      legendCaptionFontSize: setType('13', RANGE),
      legendCaptionFontBold: setType('0', BOOLEAN),
      legendScrollBgColor: setType('#FFF', PICKER),

      // cross line customization
      crossLineAnimation: setType('1', BOOLEAN),
      crossLineAlpha: setType('100', RANGE),
      crossLineColor: setType('#DFDFDF', PICKER),

      // hover effect
      showHoverEffect: setType('1', BOOLEAN),
      plotHoverEffect: setType('1', BOOLEAN),
      plotFillHoverAlpha: setType('90', RANGE),
      barHoverAlpha: setType('90', RANGE)
    }
  }
};

export { themeObject, OPTIONS, RANGE, PICKER, BOOLEAN };
