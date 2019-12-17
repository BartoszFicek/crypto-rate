import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const oneHourInMillis = 3600 * 1000;

const getMaxDateValue = period => {
  var d = new Date();
  var currentDateInMillis = d.getTime();
  if (period === "1W") {
    return currentDateInMillis - 24 * 7 * oneHourInMillis;
  } else if (period === "1D") {
    return currentDateInMillis - 24 * oneHourInMillis;
  } else if (period === "4H") {
    return currentDateInMillis - 4 * oneHourInMillis;
  } else if (period === "2H") {
    return currentDateInMillis - 2 * oneHourInMillis;
  } else if (period === "15M") {
    return currentDateInMillis - 0.25 * oneHourInMillis;
  }
};

am4core.useTheme(am4themes_animated);

export const Chart = props => {
  const { prices, marketCaps, period } = props;

  useEffect(() => {
    if (prices && marketCaps) {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.colors.step = 7;
      chart.paddingRight = 20;

      let data = [];
      let maxDateValue = getMaxDateValue(period);

      for (let i = 0; i < prices.length; i++) {
        let marketCap = marketCaps[i][1];
        let price = prices[i][1];
        let date = marketCaps[i][0] || prices[i][0];
        if (date < maxDateValue) {
          continue;
        }
        data.push({
          date: new Date(date),
          marketCap: marketCap,
          price: price
        });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      function createAxisAndSeries(field, name, opposite) {
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.name = name;
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.yAxis = valueAxis;
        series.tensionX = 0.8;

        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 2;
        valueAxis.renderer.line.stroke = series.stroke;
        valueAxis.renderer.labels.template.fill = series.stroke;
        valueAxis.renderer.opposite = opposite;
        valueAxis.renderer.grid.template.disabled = true;
      }

      createAxisAndSeries("marketCap", props.marketCapsLabel, false);
      createAxisAndSeries("price", props.pricesLabel, true);

      chart.legend = new am4charts.Legend();
    }
  }, [prices, marketCaps]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};
