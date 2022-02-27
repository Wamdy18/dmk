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
        labels: ['Программист 7815', 'Менеджер (IT-проекта) 6545', 'ERP 6503', 'Системный администратор 6136',
            'Специалист по интернет-маркетингу 5633', 'Аналитик 5441', 'Веб 3713', 'Специалист техподдержки 3660',
            'Системный инженер (+QA-инженер) 2911', 'Инженер 2260', 'Devops 2113', 'Mobile - разработчик 1976',
            'UX/UI дизайнер 1303', 'Руководитель 1127', 'GameDev 673', 'Специалист по информационной безопасности 661',
            'Data Scientist 641', 'IT-специалист 604', 'Администратор баз данных 229', 'Системный программист 156','Не относится к IT 5602'],
        datasets: [{
            label: 'value',
            data: [7815, 6545, 6503, 6136, 5633, 5441, 3713, 3660, 2911, 2260, 2113, 1976, 1303, 1127, 673, 661, 641, 604, 229, 156, 5602],
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
            text: 'Общий график за 2021',
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
        labels: ['Программист 19767', 'ERP 15810', 'Менеджер (IT-проекта) 14902', 'Системный администратор 14559',
            'Специалист по интернет-маркетингу 13420', 'Аналитик 11592', 'Веб 11066', 'Системный инженер (+QA-инженер) 7019',
            'Специалист техподдержки 6771', 'Инженер 5711', 'Mobile - разработчик 4533', 'Devops 4315',
            'UX/UI дизайнер 2827', 'Руководитель 2529', 'Специалист по информационной безопасности 1644', 'IT-специалист 1591',
            'GameDev 1573', 'Data Scientist 1099', 'Администратор баз данных 572', 'Системный программист 377', 'Не относится к IT 16320'],
        datasets: [{
            label: 'value',
            data: [19767, 15810, 14902, 14559, 13420, 11592, 11066, 7019, 6771, 5711, 4533, 4315, 2827, 2529, 1644, 1591, 1573, 1099, 572, 377, 16320],
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
            text: 'Общий график за 2020',
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
        labels:['Программист 23948', 'ERP 20193', 'Системный администратор 18080', 'Менеджер (IT-проекта) 16752',
            'Специалист по интернет-маркетингу 15922', 'Веб 15463', 'Аналитик 11804', 'Специалист техподдержки 8549',
            'Системный инженер (+QA-инженер) 7973', 'Инженер 6842', 'Mobile - разработчик 4931', 'Devops 4320',
            'UX/UI дизайнер 3488', 'Руководитель 2919', 'IT-специалист 2216', 'GameDev 1532',
            'Специалист по информационной безопасности 1527', 'Data Scientist 1145', 'Администратор баз данных 627', 'Системный программист 343', 'Не относится к IT 17117'],
        datasets: [{
            label: 'value',
            data: [23948, 20193, 18080, 16752, 15922, 15463, 11804, 8549, 7973, 6842, 4931, 4320, 3488, 2919, 2216, 1532, 1527, 1145, 627, 343, 17117],
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
            text: 'Общий график за 2019',
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
        labels: ['Программист 24254','ERP 19968','Веб 19372', 'Системный администратор 17463',
            'Менеджер (IT-проекта) 17222','Специалист по интернет-маркетингу 16673','Аналитик 9833','Специалист техподдержки 7795',
            'Системный инженер (+QA-инженер) 6961', 'Инженер 6331','Mobile - разработчик 4349','UX/UI дизайнер 3973',
            'Devops 3113', 'Руководитель 2870', 'IT-специалист 2231','Специалист по информационной безопасности 1388',
            'GameDev 1256','Data Scientist 842', 'Администратор баз данных 554', 'Системный программист 317', 'Не относится к IT 40659'],
        datasets: [{
            label: 'value',
            data: [24254, 19968, 19372, 17463, 17222, 16673, 9833, 7795, 6961, 6331, 4349, 3973, 3113, 2870, 2231, 1388, 1256, 842, 554, 317, 40659],
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
            text: 'Общий график за 2018',
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
        labels: ['Программист 19832', 'Веб 18279', 'ERP 15777', 'Специалист по интернет-маркетингу 14622',
            'Менеджер (IT-проекта) 14233', 'Системный администратор 13747', 'Аналитик 7750', 'Специалист техподдержки 5789',
            'Системный инженер (+QA-инженер) 5455', 'Инженер 5085', 'Mobile - разработчик 3549', 'UX/UI дизайнер 3506',
            'Руководитель 2435', 'Devops 1898', 'IT-специалист 1530', 'Специалист по информационной безопасности 953',
            'GameDev 917', 'Администратор баз данных 482', 'Data Scientist 422', 'Системный программист 256', 'Не относится к IT 14127'],
        datasets: [{
            label: 'value',
            data: [19832, 18279, 15777, 14622, 14233, 13747, 7750, 5789, 5455, 5085, 3549, 3506, 2435, 1898, 1530, 953, 917, 482, 422, 256, 14127],
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
            text: 'Общий график за 2017',
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
        labels: ['Программист 95616', 'ERP 78251', 'Системный администратор 69985', 'Менеджер (IT-проекта) 69654',
            'Веб 67893', 'Специалист по интернет-маркетингу 66270', 'Аналитик 46420', 'Специалист техподдержки 32564',
            'Системный инженер (+QA-инженер) 30319', 'Инженер 26229', 'Mobile - разработчик 19338', 'Devops 15759',
            'UX/UI дизайнер 15097', 'Руководитель 11880', 'IT-специалист 8172', 'Специалист по информационной безопасности 6173',
            'GameDev 5951', 'Data Scientist 4149', 'Администратор баз данных 2464', 'Системный программист 1449', 'Не относится к IT 93825'],
        datasets: [{
            label: 'value',
            data: [95616, 78251, 69985, 69654, 67893, 66270, 46420, 32564, 30319, 26229, 19338, 15759, 15097, 11880, 8172, 6173, 5951, 4149, 2464, 1449, 93825],
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
            text: 'Общий график за 2017-2021',
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