// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
const newTask = {id: 5, task: "Walk the dog"};
userTaskList.push(newTask);


userTaskList.pop();


for (let i = 0; i < userTaskList.length; i++) {
  if (userTaskList[i].id === 4) {
      userTaskList[i].task = "Go to the gym"
      break;
  }
};


const lastTask = userTaskList[userTaskList.length - 1]. task;
console.log(`Task id: 4, ${lastTask}`);
