let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

  /*  function getCourseStartDate(courses, StartDate) {
    let DateStart = [];
    let numDate = courses.length;
    for(let i = 0; i < numDate; i++) {
        if (courses[i].StartDate == StartDate)
        DateStart.push(courses[i]);

    }
    return DateStart;

    function displayCourseDate(courses) {
        let courseDateStart = courses.length;
        for(let i = 0; i < courseDateStart; i++){
            console.log(`start date: ${courses[1]}`);
        }
    }
   }
   getCourseStartDate(courses);
   console.log("course start Date:" + courseDateStart) */

   function getCourseid(courses, CourseId) {
    let namcourse = [];
    let numDate = courses.length;
    for(let i = 0; i < numDate; i++) {
        if (courses[i].CourseId == CourseId) {
            namcourse.push(courses[i]);
        }
    }
    
    return namcourse;
    
}

let results = [];
for (let i = 0; i < courses.length; i++) {
    if ((courses[i].Fee) <= 50) {
        results.push(courses[i]);
    }
  }
   // function makes my string into one line + ", "
   function getTitleList(courses){
    let msg2 = "";
    for (let i = 0 ; i < courses.length; i++){
        msg2 += courses[i].Title + ", ";
    }
    return msg2.substring(0, msg2.length - 2)
  }
  let forClass = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].Location === "Classroom 1") {
      forClass.push(courses[i]);
    }
  }
  function getLocationforClassRoom(courses) {
    let courseIDs = "";
    for (let i = 0; i < courses.length; i++) {
      courseIDs += courses[i].CourseId + ", ";
    }
    return courseIDs.substring(0, courseIDs.length - 2);
  }

function displayCourseDate(courses) {
    let courseDateStart = courses.length;
    for(let i = 0; i < courseDateStart; i++) {
        console.log(`start date: ${courses[i].StartDate}`);
        console.log(`Title: ${courses[i].Title}`);
    }
}

let course = getCourseid(courses, "PROJ500");
displayCourseDate(course);

let msg = `The titles of the courses that cost $50 or less are: ${getTitleList(results)}.`;
console.log(msg);

let locaTion = `The classes that are held in classroom 1 are: ${getLocationforClassRoom(forClass)}`;
console.log(locaTion);