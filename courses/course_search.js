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

   function getCourseStartDate(courses, startDate) {
    let dateStart = [];
    let numDate = courses.length;
    for(let i = 0; i < numDate; i++) {
        if (courses[i].StartDate == startDate) {
            dateStart.push(courses[i]);
        }
    }
    
    return dateStart;
}

function displayCourseDate(courses) {
    let courseDateStart = courses.length;
    for(let i = 0; i < courseDateStart; i++) {
        console.log(`start date: ${courses[i].StartDate}`);
        console.log(`Title: ${courses[i].Title}`);
    }
}


let startDateCourses = getCourseStartDate(courses, "11/22/22");
displayCourseDate(startDateCourses);
