google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['fitness tracker', 'primary goal'],
    ['Being more active',     12],
    ['Weight loss',  9],
    ['Training', 0],
    ['Improve sleep',    2],
    ['To interact with family and friends',    0],
  ]);

  var options = {
    title: 'What is your primary goal in using a fitness tracker?'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Features', 'Activities',],
        ['Step count', 20],
        ['Calories Burned', 19],
        ['Sleep Tracker', 5],
        ['Heart rate Tracker', 4],
        ['Active Minutes', 4],
        ['Weight Tracker', 6],
        ['Food Tracker', 2],
        ['Water Consumption', 6],
        ['Challenges', 2],
        
       
      ]);

      var options = {
        title: 'Which of these fitness tracker features do you use or refer to regularly?',
        chartArea: {width: '50%'},
        hAxis: {
          title: '',
          minValue: 0
        },
        vAxis: {
          title: ''
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("uparrow").style.display = "block";
        } else {
            document.getElementById("uparrow").style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    
    function test(element) {
        var newTab = window.open();
        setTimeout(function() {
            newTab.document.body.innerHTML = element.innerHTML;
        }, 500);
        return false;
    }
    