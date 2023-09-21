var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Cultures', 'Materiels', 'Employees', 'Others'],

        datasets: [{
            label: 'Employees',
            data: [42, 12, 8, 6],
            backgroundColor: [
                'rgb(40, 170, 69)',
                'RGB(0, 123, 255)',
                'RGB(255, 193, 7)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgb(40, 170, 69)',
                'RGB(0, 123, 255)',
                'RGB(255, 193, 7)',
                'rgba(120, 46, 139,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});