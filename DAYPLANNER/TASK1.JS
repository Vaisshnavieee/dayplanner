
function saveSchedule() {
  const date = document.getElementById('DATE').value;
  if (!date) {
    alert('Please select a date to save the schedule.');
    return;
  }

  const inputs = document.querySelectorAll('.TIMELINE input[type="text"]');
  const scheduleData = {};

  inputs.forEach(input => {
   
    scheduleData[input.name] = input.value;
  });

 
  localStorage.setItem('schedule-' + date, JSON.stringify(scheduleData));
  alert('Schedule saved for ' + date);
}


function loadSchedule() {
  const date = document.getElementById('DATE').value;
  if (!date) {
    alert('Please select a date to load the schedule.');
    return;
  }

  const saved = localStorage.getItem('schedule-' + date);
  if (!saved) {
    alert('No saved schedule found for ' + date);
    return;
  }

  const scheduleData = JSON.parse(saved);
  const inputs = document.querySelectorAll('.TIMELINE input[type="text"]');

  inputs.forEach(input => {
    input.value = scheduleData[input.name] || '';
  });
}

function addnew() {
 
  const dateInput = document.getElementById('DATE');
  if (dateInput) {
    dateInput.value = '';
  }

 
  const inputs = document.querySelectorAll('.TIMELINE input[type="text"]');
  inputs.forEach(input => {
    input.value = '';
  });
}
