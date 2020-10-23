//--------------------------------------------ASYNC FUNCTION CALL
async function fetchData() {
  const response = await fetch(
    'https://registree-coding-challenge.glitch.me/cornell'
  );
  console.log(response);
  data = await response.json();
  console.log(data);
  const response2 = await fetch(
    'https://registree-coding-challenge.glitch.me/stanford'
  );
  console.log(response2);
  const data2 = await response2.json();
  console.log(data2);

  // -----------------------------------CONDITIONAL - PAGE LOAD SUCCESS
  if (data.length > 1) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('bodySection').style.display = 'block';

    Array.prototype.push.apply(data, data2);

    //---------------------------------UNDERSCORE.JS ARRAY REGROUPING OF OBJECTS FOR (NAME, LEVEL, DURATION)
    groupedByName = _.groupBy(data, function (course) {
      return course.name;
    });
    console.log(groupedByName);

    groupedByLevel = _.groupBy(data, function (course) {
      return course.level;
    });
    console.log(groupedByLevel);

    groupedByDuration = _.groupBy(data, function (course) {
      return course.duration;
    });
    console.log(groupedByDuration);

    //-----------------------------------MAP THROUGH PROMISE DATA - (NAME)
    const courseName = data.map((course) => {
      return course.name;
    });
    console.log(courseName);

    //-----------------------------------MAP THROUGH PROMISE DATA - (LEVEL)
    const courseLevel = data.map((course) => {
      return course.level;
    });
    console.log(courseLevel);

    //----------------------------------MAP THROUGH PROMISE DATA - (DURATION)
    const courseDuration = data.map((course) => {
      return course.duration;
    });
    console.log(courseDuration);

    //----------------------------------CREATE NEW SET TO RETURN NEW ARRAY WITHOUT DUPLICATES (NAME)
    const courseNameSet = [...new Set(courseName)];
    console.log(courseNameSet);

    //---------------------------------CREATE NEW SET TO RETURN NEW ARRAY WITHOUT DUPLICATES (LEVEL)
    const courseLevelSet = [...new Set(courseLevel)];
    console.log(courseLevelSet);

    //---------------------------------CREATE NEW SET TO RETURN NEW ARRAY WITHOUT DUPLICATES (DURATION)
    const courseDurationSet = [...new Set(courseDuration)];
    console.log(courseDurationSet);

    //---------------------------------UPDATE DOM
    let output = '';
    output = courseNameSet.forEach((field) => {
      output += `<button class="btn btnStudyFields">${field}</button>`;
      document.getElementById('output').innerHTML = output;
    });

    //--------------------------------UPDATE DOM
    let output2 = '';
    output2 = courseLevelSet.forEach((field) => {
      output2 += `<button class="btn btnStudyFields">${field}</button>`;
      document.getElementById('output2').innerHTML = output2;
    });

    //-------------------------------UPDATE DOM
    let output3 = '';
    output3 = courseDurationSet.forEach((field) => {
      output3 += `<button class="btn btnStudyFields">${field}</button>`;
      document.getElementById('output3').innerHTML = output3;
    });

  }
}

//-----------------------------------EVENT LISTENERS
document.querySelector('#output').addEventListener('click', onclick);
document.querySelector('#output2').addEventListener('click', onclick2);
document.querySelector('#output3').addEventListener('click', onclick3);
document.querySelector('#output1').addEventListener('click', onclickCourse);


//--------------------------------EVENT OBJECT ONCLICK - RETURNS CLICKED FIELD ARRAY OF COURSES
function onclick(e) {
  let val = e.target.textContent;
  let valArr = groupedByName[val];
  console.log(val);
  console.log(valArr);
  document.getElementById('loading').style.display = 'block';
  document.getElementById('output1').style.display = 'none';

  setTimeout(
    function () {
      let output1 = '';
      output1 = valArr.forEach((course) => {
        output1 += `<button class=" btn btnStudyCourseLeft">${course.duration} : ${course.level} : ${course.code} <em><b style="float:right">(${course.name})</b></em></button> <br>`;
        document.getElementById('output1').innerHTML = output1;
        document.getElementById('loading').style.display = 'none';
        document.getElementById('output1').style.display = 'block';
        document.getElementById('output1').style.backgroundColor = '#333';
        document.getElementById('output1').style.color = '#ffffff';
      });
    },

    2000
  );
}


//-------------------------------EVENT OBJECT ONCLICK - RETURNS CLICKED FIELD ARRAY OF COURSES
function onclick2(e) {
  let val = e.target.textContent;
  let valArr = groupedByLevel[val];
  console.log(val);
  console.log(valArr);
  document.getElementById('loading').style.display = 'block';
  document.getElementById('output1').style.display = 'none';

  setTimeout(
    function () {
      let output1 = '';
      output1 = valArr.forEach((course) => {
        output1 += `<button class=" btn btnStudyCourseMiddle">${course.duration} : <em><b style="float:right">${course.level}</b></em> : ${course.code} (${course.name})</button> <br>`;
        document.getElementById('output1').innerHTML = output1;
        document.getElementById('loading').style.display = 'none';
        document.getElementById('output1').style.display = 'block';
        document.getElementById('output1').style.backgroundColor = '#333';
        document.getElementById('output1').style.color = '#ffffff';
      });
    },

    2000
  );
}

//-------------------------------EVENT OBJECT ONCLICK - RETURNS CLICKED FIELD ARRAY OF COURSES
function onclick3(e) {
  let val = e.target.textContent;
  let valArr = groupedByDuration[val];
  console.log(val);
  console.log(valArr);
  document.getElementById('loading').style.display = 'block';
  document.getElementById('output1').style.display = 'none';

  setTimeout(
    function () {
      let output1 = '';
      output1 = valArr.forEach((course) => {
        output1 += `<button class=" btn btnStudyCourseRight"><em><b style="float:right">${course.duration}</b></em> : ${course.level} : ${course.code} (${course.name})</button> <br>`;
        document.getElementById('output1').innerHTML = output1;
        document.getElementById('loading').style.display = 'none';
        document.getElementById('output1').style.display = 'block';
        document.getElementById('output1').style.backgroundColor = '#333';
        document.getElementById('output1').style.color = '#ffffff';
      });
    },

    2000
  );
}

//------------------------------EVENT ONCLICK - RETURNS & CONFIRMS COURSE CLICKED AND ADDS TO COURSE LIST
function onclickCourse(e) {
  // let output5;
  let watchlistArr = [];
  let val2 = e.target.textContent;
  console.log(val2);
  let confirmCourse = confirm(`- Please confirm -
  
  Add the following course to your list:
  
  ${val2}`);

  if (confirmCourse == true) {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(val2));
    watchlistArr.push(val2);
    console.log(watchlistArr);

    document.getElementById('output5').appendChild(li);
    document.getElementById('output5').style.display = 'block';
  }
}

//SETUP AND FUNCTION CALLS
//-----------------------CREATES LOADING PAGE
document.getElementById('bodySection').style.display = 'none';


//-----------------------CALL FETCH FUNCTION
fetchData()
  .then((response) => {
    console.log(response);
  })
  //HANDLE ERRORS - REFIRES ON A ERROR STATUS
  .catch((error) => {
    if (error) {
      console.log(error);
      console.log('Retrying');
      document.querySelector('h6').innerText = 'Retrying';
      fetchData();
    }
    console.log(error);
  });

  //-------------------------------- JQUERY - USER EXPERIENCE ANIMATION / BUTTONS / DISPLAY
$(document).ready(function () {
  $('.collapseFieldLeft').click(function () {
    $('#output').slideToggle(1000);
    $('#output1').fadeOut(1000);
  });
  $('.collapseFieldMiddle').click(function () {
    $('#output2').slideToggle(1000);
    $('#output1').fadeOut(1000);
  });
  $('.collapseFieldRight').click(function () {
    $('#output3').slideToggle(1000);
    $('#output1').fadeOut(1000);
  });
});

