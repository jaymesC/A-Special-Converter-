document.getElementById('celcius-form').addEventListener('submit', function (e){
  // show loader
  document.getElementById('loading').style.display = 'block';

  //Hide results
  document.getElementById('results').style.display = 'none';

  setTimeout(calculateCelcius, 2000);

  e.preventDefault();
});

function calculateCelcius(){
  console.log('Converting...');
  
  // UI Variables
  const celValue = document.getElementById('celcius');
  const farenValue = document.getElementById('faren-value');

  // Hide loader
  document.getElementById('loading').style.display = 'none';

  //Show results
  document.getElementById('results').style.display = 'block';

  let checker = parseInt(celValue.value);

  // computing Fahrenheit value
  const celVar = (checker * 9 / 5) + 32;

  if(isNaN(checker)) {
    errorFunc('Error please input a number');
  }else if(isFinite(checker)){
    farenValue.value = celVar;
  }
   
  
}

//Error function
function errorFunc(error){

  //hide results
  document.getElementById('results').style.display = 'none';

  // hide loader
  document.getElementById('loading').style.display = 'none';

    // Creating an Error div
const errorDiv = document.createElement('div');

// Get elements
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

//Adding class
errorDiv.className = 'alert alert-danger';

// Create and Append Chied to ErrorDiv
errorDiv.appendChild(document.createTextNode(error));

// Insert error before heading
card.insertBefore(errorDiv, heading);

// Clear error after 3seconds
setTimeout(clearError, 3000);

// Clear error function
function clearError(){
  document.querySelector('.alert').remove();
}

}



