Created Data base using "use zen_class" Qurey.
  
Created Tables using "db.codekata, db.company_drives, db.mentors, db.topics, db.users".
  
And insert date for every tables.
  
Question :  Find all the topics and tasks which are thought in the month of October
Qurey : db.topics.find({month:"october"})

Question : Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020
Qurey : db.company_drives.find({date:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}})

Question : Find all the company drives and students who are appeared for the placement
Qurey : db.company_drives.find().forEach(function(value){
        print("Company Name : "+value.company_name);
        print("Students Appeared : "+value.students_appeared);
        })

Question : Find the number of problems solved by the user in codekata
Qurey : db.codekata.find().forEach(function(value){
        print("Name : "+value.user_name);
        print("Problems Solved : "+value.problems_solved)
        })

Question : Find all the mentors with who has the mentee's count more than 15
Qurey : db.mentors.find({mentees_count:{$gt:15}})

Question : Find the number of users who are absent and task is not submitted between 15-oct-2020 and 31-oct-2020
Qurey : db.usertask.find({date:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}}).forEach(function(value){
        print("Name : "+value.user_name);
        print("Attendance :"+value.attendance);
        print("Task : "+value.task_submission)
})
