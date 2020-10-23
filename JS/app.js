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
  }
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
