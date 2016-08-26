$(function(){
    Highcharts.setOptions({
        colors: ['#b6dbf1', '#e9e9e9', '#97a1a2', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
    });
    $('.container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '47%',
            align: 'center',
            verticalAlign: 'middle',
            y: 0
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -20,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '80%',
            data: [
                ['Firefox',   10.38],
                ['IE',       56.33],
                ['Chrome', 24.03],
                ['Safari',    4.77],
                ['Opera',     0.91],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

        $('#stack').highcharts({
            chart: {
                zoomType: 'x',
                backgroundColor: '#f9f9fb'
                
            },
            credits:{
              enabled:false
            },
            title: {
                text: ''
            },
            /*subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },*/
            xAxis: {
                type: 'datetime',
                labels: {
                    align: 'top',
                    x: -2,
                    y: 0
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    align: 'left',
                    x: 0,
                    y: -2
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor:'#b8d0e0',
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
						background2: '#0080ff',
            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    });


})