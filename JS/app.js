//ASYNC FUNCTION CALL
async function fetchData() {
  const response = await fetch('https://registree-coding-challenge.glitch.me/cornell');
  console.log(response);
  data = await response.json();
  console.log(data);
  const response2 = await fetch('https://registree-coding-challenge.glitch.me/stanford');
  console.log(response2);
  const data2 = await response2.json();
  console.log(data2);

// CCONDITIONAL - PAGE LOAD SUCCESS
if (data.length > 1) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('bodySection').style.display = 'block';

  Array.prototype.push.apply(data, data2);






}

  //CALL FETCH FUNCTION
fetchData()
.then((response) => {
  console.log(response);
})
//HANDLE ERRORS - REFIRES ON A ERROR STATUS
.catch((error) => {
  if (error) {
    console.log(error);
    console.log('Retrying');
    fetchData();
  }
  console.log(error);
});