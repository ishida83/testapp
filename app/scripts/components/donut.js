$(function(){
    Highcharts.setOptions({
        colors: ['#b6dbf1', '#e9e9e9', '#97a1a2', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
    });
    $('#container').highcharts({
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
})