//Логика переключения графиков
let select = document.getElementById('select');
let block = document.querySelectorAll('.d');
let lastIndex = 0;
select.addEventListener('click', function() {
    block[lastIndex].style.display = "none";
    let index = select.selectedIndex;
    block[index].style.display = "block";
    lastIndex = index; // Обновить сохраненный индекс.
});

let select1 = document.getElementById('select1');
let block1 = document.querySelectorAll('.k');
let lastIndex1 = 0;
select1.addEventListener('click', function() {
    block1[lastIndex1].style.display = "none";
    let index1 = select1.selectedIndex;
    block1[index1].style.display = "block";
    lastIndex1 = index1; // Обновить сохраненный индекс.
});


var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var dataFirst1 = {
    label: "Программист",
    data: [19832, 24254, 23948, 19767, 7815],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(66,170,255)'
};

var dataFirst2 = {
    label: "Веб ",
    data: [18279, 19372, 15463, 11066, 3713],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(16,71,199)'
};

var dataFirst3 = {
    label: "ERP ",
    data: [15777, 19968, 20193, 15810, 6503],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(255,0,0)'
};

var dataFirst4 = {
    label: "Менеджер (IT-проекта)",
    data: [14233, 17222, 16752, 14902, 6545],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(255,78,51)'
};

var dataFirst5 = {
    label: "Системный администратор",
    data: [13747, 17463, 18080, 14559, 6136],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(0,128,0)'
};

var dataFirst6 = {
    label: "Аналитик ",
    data: [7750, 9833, 11804, 11592, 5441],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(84,199,135)'
};

var dataFirst7 = {
    label: "Специалист техподдержки",
    data: [5789, 7795, 8549, 6771, 3660],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(139,0,255)'
};

var dataFirst8 = {
    label: "Специалист по интернет-маркетингу",
    data: [5633, 13420, 15922, 16673, 14622],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(288,74,60)'
};

var dataFirst9 = {
    label: "Системный инженер (+QA-инженер)",
    data: [5455, 6961, 7973, 7019, 2911],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(255,255,255)'
};
var dataFirst10 = {
    label: "Инженер ",
    data: [5085, 6331, 6842, 5711, 2260],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(0,0,0)'
};

var dataFirst11 = {
    label: "Mobile - разработчик ",
    data: [3549, 4349, 4931, 4533, 1976],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(130,18,73)'
};

var dataFirst12 = {
    label: "UX/UI дизайнер",
    data: [3506, 3973, 3488, 2827, 1303],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(204,6,5)'
};

var dataFirst13 = {
    label: "Руководитель ",
    data: [2435, 2870, 2919, 2529, 1127],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(210,105,30)'
};

var dataFirst14 = {
    label: "Devops ",
    data: [1898, 3113, 4320, 4315, 2113],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(254,229,172)'
};

var dataFirst15 = {
    label: "IT-специалист",
    data: [1530, 2231, 2216, 1591, 604],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(0,128,128)'
};

var dataFirst16 = {
    label: "Специалист по информационной безопасности",
    data: [953, 1388, 1527, 1644, 661],
    lineTension: 0,
    fill: false,
    borderColor:'rgb(174,115,67)'
};

var dataFirst17 = {
    label: "GameDev ",
    data: [917, 1256, 1532, 1573, 673],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(68,45,37)'
};

var dataFirst18 = {
    label: "Администратор баз данных",
    data: [482, 554, 627, 572, 229],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(0,250,154)'
};

var dataFirst19 = {
    label: "Data Scientist",
    data: [422, 842, 1145, 1099, 641],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(137,129,118)'
};

var dataFirst20 = {
    label: "Системный программист ",
    data: [256, 317, 343, 377, 156],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(236,164,190)'
};
var speedData = {
    labels:
        [2017,2018,2019,2020,2021],
    datasets: [dataFirst1,dataFirst2,dataFirst3,dataFirst4,dataFirst5,dataFirst6,
        dataFirst7,dataFirst8,dataFirst9,dataFirst10,dataFirst11,dataFirst12,dataFirst13,
        dataFirst14,dataFirst15,dataFirst16,dataFirst17,dataFirst18,dataFirst19,dataFirst20]
};

var chartOptions = {
    title:{
        display: true,
        fontSize: 25,
        text: ""
    },
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            padding: 10,
            boxWidth: 20,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});


var Chart2017 = document.getElementById("Chart2017");
Chart.defaults.global.defaultFontSize = 18;
var pieChart1 = new Chart(Chart2017, {
    type: 'pie',
    data:  {
        labels: [
            "IT-вакансии(количество запросов)",
            "Неопределенные",
            "Не относящиеся к IT",
        ],
        datasets: [
            {
                data: [ 136517, 26669, 14127],
                backgroundColor: [
                    "#FF6384",
                    "#8463FF",
                    "#48db92"
                ]
            }]
    },
    options:{
        maintainAspectRatio: false,
        legend:{
            position:'right'
        },
        title:{
            display: true,
            fontSize: 25,
            text: "Процентное соотношение обработанных вакансий за 2017 год"
        }
    }
});

var Chart2018 = document.getElementById("Chart2018");
Chart.defaults.global.defaultFontSize = 18;
var pieChart2 = new Chart(Chart2018, {
    type: 'pie',
    data:  {
        labels: [
            "IT-вакансии(количество запросов)",
            "Неопределенные",
            "Не относящиеся к IT",
        ],
        datasets: [
            {
                data: [  166765, 44505,  40659],
                backgroundColor: [
                    "#FF6384",
                    "#8463FF",
                    "#48db92"
                ]
            }]
    },
    options:{
        maintainAspectRatio: false,
        title:{
            display: true,
            fontSize: 25,
            text: "Процентное соотношение обработанных вакансий за 2018 год"
        },
        legend:{
            position:'right'
        }
    }
});


var Chart2019 = document.getElementById("Chart2019");
Chart.defaults.global.defaultFontSize = 18;
var pieChart3 = new Chart(Chart2019, {
    type: 'pie',
    data:  {
        labels: [
            "IT-вакансии(количество запросов)",
            "Неопределенные",
            "Не относящиеся к IT",
        ],
        datasets: [
            {
                data: [ 168574, 35610,  17117],
                backgroundColor: [
                    "#FF6384",
                    "#8463FF",
                    "#48db92"
                ]
            }]
    },
    options:{
        maintainAspectRatio: false,
        title:{
            display: true,
            fontSize: 25,
            text: "Процентное соотношение обработанных вакансий за 2019 год"
        },
        legend:{
            position:'right'
        }
    }
});


var Chart2020 = document.getElementById("Chart2020");
Chart.defaults.global.defaultFontSize = 18;
var pieChart4 = new Chart(Chart2020, {
    type: 'pie',
    data:  {
        labels: [
            "IT-вакансии(количество запросов)",
            "Неопределенные",
            "Не относящиеся к IT",
        ],
        datasets: [
            {
                data: [ 141677, 33501 ,  16320],
                backgroundColor: [
                    "#FF6384",
                    "#8463FF",
                    "#48db92"
                ]
            }]
    },
    options:{
        maintainAspectRatio: false,
        title:{
            display: true,
            fontSize: 25,
            text: "Процентное соотношение обработанных вакансий за 2020 год"
        },
        legend:{
            position:'right'
        }
    }
});


var Chart2021 = document.getElementById("Chart2021");
Chart.defaults.global.defaultFontSize = 18;
var pieChart5 = new Chart(Chart2021, {
    type: 'pie',
    data:  {
        labels: [
            "IT-вакансии(количество запросов)",
            "Неопределенные",
            "Не относящиеся к IT",
        ],
        datasets: [
            {
                data: [ 60127, 17729 ,  5602],
                backgroundColor: [
                    "#FF6384",
                    "#8463FF",
                    "#48db92"
                ]
            }]
    },
    options:{
        maintainAspectRatio: false,
        title:{
            display: true,
            fontSize: 25,
            text: "Процентное соотношение обработанных вакансий за 2021 год"
        },
        legend:{
            position:'right'
        }
    }
});

var start = document.getElementById('myChart00').getContext('2d');
var myChart00 = new Chart(start, {
    type: 'bar',
    data: {
        labels: ['PHP программист 377', 'PHP программист (web) 1136', 'Java программист 1045', 'Java программист (web) 12', 'JavaScript программист 72', 'JavaScript программист (web) 0', 'C программист 8', 'C++ программист 180', 'C# программист 643', 'Python программист 587', 'Web Python 14', 'SQL программист 150', 'Delphi программист 70', 'Ruby программист 81', 'Sharepoint программист 22', 'Frontend программист 2043', 'Backend программист 292', 'Fullstack программист 116', '.net Программист 277', 'Просто программист 1790'],
        datasets: [{
            label: 'value',
            data: [377, 1136, 1045, 12, 72, 0, 8, 180, 643, 587, 14, 150, 70, 81, 22, 2043, 292, 116, 277, 1790],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(216, 27, 96, 0.8)','rgba(157, 161, 170, 0.8)','rgba(120, 88, 64, 0.8)',
                    'rgba(204, 255, 250, 0.8)','rgba(0, 123, 167, 0.8)','rgba(30, 33, 61, 0.8)','rgba(119, 221, 231, 0.8)',
                    'rgba(255, 140, 105, 0.8)','rgba(102, 0, 102, 0.8)','rgba(117, 51, 19, 0.8)','rgba(175, 218, 252, 0.8)',
                    'rgba(76, 187, 23, 0.8)','rgba(216, 169, 3, 0.8)','rgba(173, 216, 230, 0.8)','rgba(0, 100, 0, 0.8)',
                    'rgba(93, 118, 203, 0.8)','rgba(146, 0, 10, 0.8)','rgba(100, 28, 52, 0.8)','rgba(234, 137, 154, 0.8)'],
            borderColor:
                'rgba(204, 6, 5, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '2021',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{

                ticks: {
                    min:0,
                },
            }]
        },
        borderColor: "rgba(120,120,220,1)"
    }
}); //Общий график за 2021

var gr1 = document.getElementById('gr2020').getContext('2d');
var gr2020 = new Chart(gr1, {
    type: 'bar',
    data: {
        labels: ['PHP программист 1007', 'PHP программист (web) 3343', 'Java программист 2581', 'Java программист (web) 18', 'JavaScript программист 230', 'JavaScript программист (web) 1', 'C программист 36', 'C++ программист 502', 'C# программист 1703', 'Python программист 1348', 'Web Python 16', 'SQL программист 420', 'Delphi программист 200', 'Ruby программист 210', 'Sharepoint программист 107', 'Frontend программист 4856', 'Backend программист 657', 'Fullstack программист 293', '.net Программист 617', 'Просто программист 5006'],
        datasets: [{
            label: 'value',
            data: [1007, 3343, 2581, 18, 230, 1, 36, 502, 1703, 1348, 16, 420, 200, 210, 107, 4856, 657, 293, 617, 5006],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(157, 161, 170, 0.8)','rgba(216, 27, 96, 0.8)','rgba(120, 88, 64, 0.8)',
                    'rgba(204, 255, 250, 0.8)','rgba(0, 123, 167, 0.8)','rgba(30, 33, 61, 0.8)','rgba(255, 140, 105, 0.8)',
                    'rgba(119, 221, 231, 0.8)','rgba(102, 0, 102, 0.8)','rgba(175, 218, 252, 0.8)','rgba(117, 51, 19, 0.8)',
                    'rgba(76, 187, 23, 0.8)','rgba(216, 169, 3, 0.8)','rgba(0, 100, 0, 0.8)','rgba(146, 0, 10, 0.8)',
                    'rgba(237, 118, 14, 0.8)','rgba(93, 118, 203, 0.8)','rgba(100, 28, 52, 0.8)','rgba(234, 137, 154, 0.8)'],
            borderColor:
                'rgba(123, 0, 28, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '2020',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                },
            }]
        }
    }
});//Общий график за 2020

var gr2 = document.getElementById('gr2019').getContext('2d');
var gr2019 = new Chart(gr2, {
    type: 'bar',
    data: {
        labels:['PHP программист 1105', 'PHP программист (web) 5116', 'Java программист 2650', 'Java программист (web) 27', 'JavaScript программист 276', 'JavaScript программист (web) 2', 'C программист 40', 'C++ программист 650', 'C# программист 2248', 'Python программист 1387', 'Web Python 43', 'SQL программист 530', 'Delphi программист 365', 'Ruby программист 203', 'Sharepoint программист 176', 'Frontend программист 5773', 'Backend программист 679', 'Fullstack программист 421', '.net Программист 898', 'Просто программист 6641'],
        datasets: [{
            label: 'value',
            data: [1105, 5116, 2650, 27, 276, 2, 40, 650, 2248, 1387, 43, 530, 365, 203, 176, 5773, 679, 421, 898, 6641],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(157, 161, 170, 0.8)','rgba(120, 88, 64, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(204, 255, 250, 0.8)','rgba(30, 33, 61, 0.8)','rgba(0, 123, 167, 0.8)','rgba(119, 221, 231, 0.8)',
                    'rgba(255, 140, 105, 0.8)','rgba(102, 0, 102, 0.8)','rgba(175, 218, 252, 0.8)','rgba(117, 51, 19, 0.8)',
                    'rgba(76, 187, 23, 0.8)','rgba(216, 169, 3, 0.8)','rgba(146, 0, 10, 0.8)','rgba(237, 118, 14, 0.8)',
                    'rgba(0, 100, 0, 0.8)','rgba(93, 118, 203, 0.8)','rgba(100, 28, 52, 0.8)','rgba(234, 137, 154, 0.8)'],
            borderColor:
                'rgba(175, 64, 53, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '2019',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                },
            }]
        }
    }
});//Общий график за 2019

var gr3 = document.getElementById('gr2018').getContext('2d');
var gr2018 = new Chart(gr3, {
    type: 'bar',
    data: {
        labels: ['PHP программист 1135', 'PHP программист (web) 6643', 'Java программист 2419', 'Java программист (web) 78', 'JavaScript программист 298', 'JavaScript программист (web) 1', 'C программист 26', 'C++ программист 601', 'C# программист 2399', 'Python программист 1295', 'Web Python 36', 'SQL программист 430', 'Delphi программист 475', 'Ruby программист 194', 'Sharepoint программист 122', 'Frontend программист 5515', 'Backend программист 579', 'Fullstack программист 321', '.net Программист 897', 'Просто программист 7650'],
        datasets: [{
            label: 'value',
            data: [1135, 6643, 2419, 78, 298, 1, 26, 601, 2399, 1295, 36, 430, 475, 194, 122, 5515, 579, 321, 897, 7650],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(157, 161, 170, 0.8)','rgba(30, 33, 61, 0.8)','rgba(120, 88, 64, 0.8)',
                    'rgba(216, 27, 96, 0.8)','rgba(204, 255, 250, 0.8)','rgba(0, 123, 167, 0.8)','rgba(119, 221, 231, 0.8)',
                    'rgba(255, 140, 105, 0.8)','rgba(102, 0, 102, 0.8)','rgba(175, 218, 252, 0.8)','rgba(76, 187, 23, 0.8)',
                    'rgba(117, 51, 19, 0.8)','rgba(216, 169, 3, 0.8)','rgba(146, 0, 10, 0.8)','rgba(0, 100, 0, 0.8)',
                    'rgba(237, 118, 14, 0.8)','rgba(93, 118, 203, 0.8)','rgba(100, 28, 52, 0.8)','rgba(234, 137, 154, 0.8)'],
            borderColor:
                'rgba(26, 72, 118, 0.8)',
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '2018',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                },
            }]
        }
    }
});//Общий график за 2018

var gr4 = document.getElementById('gr2017').getContext('2d');
var gr2017 = new Chart(gr4, {
    type: 'bar',
    data: {
        labels: ['PHP программист 1005', 'PHP программист (web) 6313', 'Java программист 2064', 'Java программист (web) 53', 'JavaScript программист 356', 'JavaScript программист (web) 6', 'C программист 22', 'C++ программист 569', 'C# программист 1939', 'Python программист 884', 'Web Python 29', 'SQL программист 362', 'Delphi программист 391', 'Ruby программист 262', 'Sharepoint программист 129', 'Frontend программист 4492', 'Backend программист 361', 'Fullstack программист 133', '.net Программист 1024', 'Просто программист 6046'],
        datasets: [{
            label: 'value',
            data: [1005, 6313, 2064, 53, 356, 6, 22, 569, 1939, 884, 29, 362, 391, 262, 129, 4492, 361, 133, 1024, 6046],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(30, 33, 61, 0.8)','rgba(157, 161, 170, 0.8)','rgba(204, 255, 250, 0.8)',
                    'rgba(216, 27, 96, 0.8)','rgba(120, 88, 64, 0.8)','rgba(0, 123, 167, 0.8)','rgba(119, 221, 231, 0.8)',
                    'rgba(255, 140, 105, 0.8)','rgba(102, 0, 102, 0.8)','rgba(175, 218, 252, 0.8)','rgba(76, 187, 23, 0.8)',
                    'rgba(216, 169, 3, 0.8)','rgba(117, 51, 19, 0.8)','rgba(146, 0, 10, 0.8)','rgba(0, 100, 0, 0.8)',
                    'rgba(237, 118, 14, 0.8)','rgba(100, 28, 52, 0.8)','rgba(93, 118, 203, 0.8)','rgba(234, 137, 154, 0.8)'],
            borderColor:
                'rgba(204, 146, 147, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '2017',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                },
            }]
        }
    }
});//Общий график за 2017

var gr5 = document.getElementById('gr20172021').getContext('2d');
var gr20172021 = new Chart(gr5, {
    type: 'bar',
    data: {
        labels: ['PHP программист 4629',
 'PHP программист (web) 22551',
 'Java программист 10759',
 'Java программист (web) 188',
 'JavaScript программист 1232',
 'JavaScript программист (web) 10',
 'C программист 132',
 'C++ программист 2502',
 'C# программист 8932',
 'Python программист 5501',
 'Web Python 138',
 'SQL программист 1892',
 'Delphi программист 1501',
 'Ruby программист 950',
 'Sharepoint программист 556',
 'Frontend программист 22679',
 'Backend программист 2568',
 'Fullstack программист 1284',
 '.net Программист 3713',
 'Просто программист 27133'],
        datasets: [{
            label: 'value',
            data: [4629, 22551, 10759, 188, 1232, 10, 132, 2502, 8932, 5501, 138, 1892, 1501, 950, 556, 22679, 2568, 1284, 3713, 27133],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(157, 161, 170, 0.8)','rgba(120, 88, 64, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(30, 33, 61, 0.8)','rgba(204, 255, 250, 0.8)','rgba(0, 123, 167, 0.8)','rgba(119, 221, 231, 0.8)',
                    'rgba(255, 140, 105, 0.8)','rgba(248, 23, 62, 0.6)','rgba(175, 218, 252, 0.8)','rgba(117, 51, 19, 0.8)',
                    'rgba(76, 187, 23, 0.8)','rgba(216, 169, 3, 0.8)','rgba(146, 0, 10, 0.8)','rgba(0, 100, 0, 0.8)',
                    'rgba(237, 118, 14, 0.8)','rgba(93, 118, 203, 0.8)','rgba(100, 28, 52, 0.8)','rgba(234, 137, 154, 0.8)'],
            borderColor:
                'rgba(252, 40, 71, 0.8)',
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: '2017-2021',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                },
            }]
        }
    }
});//Общий график за 2017-2021