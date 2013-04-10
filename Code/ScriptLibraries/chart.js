$(document).ready(function () {
	// prepare chart data as an array
	var source =
	{
			datatype: "json",
			datafields: [
	             { name: 'category' },
	             { name: 'value' }
            ],
			url: 'jsonChartData.xsp', 
			root: "data"
	};
	var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
	// prepare jqxChart settings
	var settings = {
			title: "Contacts By Country",
			enableAnimations: true,
			showLegend: true,
            legendLayout: { left: 500, top: 140, width: 300, height: 200, flow: 'vertical' },
			padding: { left: 5, top: 5, right: 5, bottom: 5 },
			titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
			source: dataAdapter,
			colorScheme: 'scheme02',
			seriesGroups:
				[
				 {
					 type: 'pie',
					 showLabels: true,
					 series:
						 [
						  { 
							  dataField: 'value',
							  displayText: 'category',
							  labelRadius: 100,
							  initialAngle: 15,
							  radius: 130,
							  centerOffset: 0,
							  formatSettings: {decimalPlaces: 0 }
						  }
						  ]
				 }
				 ]
	};
	// setup the chart
	$('#jqxChart').jqxChart(settings);
});