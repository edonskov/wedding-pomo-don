$(document).ready(function() {
    var $delay = 1000,
        vMin = 11.5,
        vMax = 14.5,
        totalPoints = 25;

    function getRandomInt(min, max) {
        let reading = (Math.random() * (max - min + 1) + min);
        return (Math.round(reading * 2) / 2)
    }

    Highcharts.setOptions({
        global: {
            useUTC: false
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        }
    });

    $('#sensorData1').highcharts({
        chart: {
            type: 'spline',
            events: {
                load: function() {
                    var voltage = this.series[0];
                    var x, volts;

                    // faking sensor data
                    // data will be coming from sensors on the MKR1000
                    setInterval(function() {
                        x = (new Date()).getTime(),
                            volts = getRandomInt(vMin, vMax),

                            voltage.addPoint([x, volts], true, true);
                    }, $delay);
                }
            }
        },
        title: {
            text: '192.168.10.15'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 500
        },
        yAxis: {
            title: {
                text: 'VOLTAGE',
                style: {
                    color: '#2b908f',
                    font: '13px sans-serif'
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'VOLTAGE',
            yAxis: 0,
            style: {
                color: '#2b908f'
            },
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -totalPoints; i <= 0; i += 1) {
                    data.push({
                        x: time + i * $delay,
                        y: getRandomInt(12, 12)
                    });
                }
                return data;
            }())
        }]
    });
    $('#sensorData2').highcharts({
        chart: {
            type: 'spline',
            events: {
                load: function() {
                    var voltage = this.series[0];
                    var x, volts;

                    // faking sensor data
                    // data will be coming from sensors on the MKR1000
                    setInterval(function() {
                        x = (new Date()).getTime(),
                            volts = getRandomInt(vMin, vMax),

                            voltage.addPoint([x, volts], true, true);
                    }, $delay);
                }
            }
        },
        title: {
            text: '192.168.10.15'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 500
        },
        yAxis: {
            title: {
                text: 'VOLTAGE',
                style: {
                    color: '#2b908f',
                    font: '13px sans-serif'
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'VOLTAGE',
            yAxis: 0,
            style: {
                color: '#2b908f'
            },
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -totalPoints; i <= 0; i += 1) {
                    data.push({
                        x: time + i * $delay,
                        y: getRandomInt(12, 12)
                    });
                }
                return data;
            }())
        }]
    });
    $('#sensorData3').highcharts({
        chart: {
            type: 'spline',
            events: {
                load: function() {
                    var voltage = this.series[0];
                    var x, volts;

                    // faking sensor data
                    // data will be coming from sensors on the MKR1000
                    setInterval(function() {
                        x = (new Date()).getTime(),
                            volts = getRandomInt(vMin, vMax),

                            voltage.addPoint([x, volts], true, true);
                    }, $delay);
                }
            }
        },
        title: {
            text: '192.168.10.15'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 500
        },
        yAxis: {
            title: {
                text: 'VOLTAGE',
                style: {
                    color: '#2b908f',
                    font: '13px sans-serif'
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'VOLTAGE',
            yAxis: 0,
            style: {
                color: '#2b908f'
            },
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -totalPoints; i <= 0; i += 1) {
                    data.push({
                        x: time + i * $delay,
                        y: getRandomInt(12, 12)
                    });
                }
                return data;
            }())
        }]
    });
});