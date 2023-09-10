# TODO_List
Repository for MERN stack intershala internship assignment
- ### Overview of Project
  The Todo_list is inspired from task management application "Trello". The application helps the user manage the task among 3 stages of completion.
- ### Techstack
  - FrontEnd -> React.js
  - Backend -> Express.js and Node.js
  - Database -> Mongodb
- ### FrontEnd of Project
  The frontend of project is made under client folder in different components. The components are given in /client/src/components . The frontend of todo list contains :
  - a heading "TODO LIST"
  -  a input area to input new task or to feed new task to the application
  -  3 BUTTONS ALL TODO(to show all the tasks in database), ACTIVE TODO(to show the pending tasks), DONE TODO(to show the completed tasks)
  -  A list of tasks under the buttons provided. Each task has option to edit the task title, delete the task and cross-line to mark task completed.
- ### Backend of Project
  Backend of project is given in server folder.
  - APIs are given in index.js of /client/src/redux/actions/index.js
  - Routing in /server/routes/route.js
  - Constants in /client/src/redux/actions/type.js
  - reducers in /client/src/redux/reducers/
  - request controllers in /server/controller/todo-controller.js
  - database connection code in /server/database/db.js
  - reducer mapping in /client/src/redux/store.js
- ### Screenshot of TODO_LIST interface
  ![todo_list](https://github.com/Aditya-210601/TODO_List/assets/144606246/ce3ef966-db8c-42e5-b405-ae573804decb)
