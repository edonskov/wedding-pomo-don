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
            text: 'Free RAM size'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 500
        },
        yAxis: {
            title: {
                text: ''
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
            text: 'Total RAM Size'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 500
        },
        yAxis: {
            title: {
                text: ''
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
            text: 'Temperature'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 500
        },
        yAxis: {
            title: {
                text: ''
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
                        y: getRandomInt(0, 100)
                    });
                }
                return data;
            }())
        }]
    });
});



(function($) { // Begin jQuery
    $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery