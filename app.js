var Jan = document.getElementById('in1');
var Feb = document.getElementById('in2');
var Mar = document.getElementById('in3');
var Apr = document.getElementById('in4');
var May = document.getElementById('in5');
var Jun = document.getElementById('in6');
var Jul = document.getElementById('in7');
var Aug = document.getElementById('in8');
var Sep = document.getElementById('in9');
var Oct = document.getElementById('in10');
var Nov = document.getElementById('in11');
var Dec = document.getElementById('in12');
 
 
var Jan1 = document.getElementById('ex1');
var Feb1 = document.getElementById('ex2');
var Mar1 = document.getElementById('ex3');
var Apr1 = document.getElementById('ex4');
var May1 = document.getElementById('ex5');
var Jun1 = document.getElementById('ex6');
var Jul1 = document.getElementById('ex7');
var Aug1 = document.getElementById('ex8');
var Sep1 = document.getElementById('ex9');
var Oct1 = document.getElementById('ex10');
var Nov1 = document.getElementById('ex11');
var Dec1 = document.getElementById('ex12');
 
 
 
const ctx_income = document.getElementById('Income_chart').getContext('2d');
const myChart_income = new Chart(ctx_income, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Income',
            data: [Jan.value, Feb.value, Mar.value, Apr.value, May.value, Jun.value, Jul.value, Aug.value, Sep.value, Oct.value, Nov.value, Dec.value],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }      
    }
});
 
function updateChart(){
    var UpdateValues = [Jan.value, Feb.value, Mar.value, Apr.value, May.value, Jun.value, Jul.value, Aug.value, Sep.value, Oct.value, Nov.value, Dec.value];
    myChart_income.data.datasets[0].data = UpdateValues;
    myChart_income.update();
}
 
const ctx_expense = document.getElementById('Expense_chart').getContext('2d');
const myChart_expense = new Chart(ctx_expense, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Expense',
            data: [Jan1.value, Feb1.value, Mar1.value, Apr1.value, May1.value, Jun1.value, Jul1.value, Aug1.value, Sep1.value, Oct1.value, Nov1.value, Dec1.value],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }      
    }
});
 
function updateChart1(){
    var UpdateValues = [Jan.value, Feb.value, Mar.value, Apr.value, May.value, Jun.value, Jul.value, Aug.value, Sep.value, Oct.value, Nov.value, Dec.value];
    myChart_expense.data.datasets[0].data = UpdateValues;
    myChart_expense.update();
}
 
const progress = document.querySelector(".progress-done");
const expense = document.querySelector(".expense");
const income = document.querySelector(".income");
const goal = document.querySelector(".goal")
 
let finalexpense = 0;
let maxincome = 0;
let targetmoney = 0;
 
function changeWidth() {
  progress.style.width = `${((maxincome - finalexpense)/ targetmoney) *100}%`;
  progress.innerText = `${Math.ceil(((maxincome - finalexpense) / targetmoney) *100)}%`;
}
 
expense.addEventListener("keyup", function() {
  finalexpense = parseInt(expense.value, 10);
  changeWidth();
});
 
income.addEventListener("keyup", function() {
  maxincome = parseInt(income.value, 10);
  changeWidth();
});
 
goal.addEventListener("keyup", function() {
  targetmoney = parseInt(goal.value, 10);
  changeWidth();
});