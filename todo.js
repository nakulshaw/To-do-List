import readline from "readline";
// creating an instance
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos=[];

console.log("To-do List app");
const result=(option)=>{
    if(option==1){
        rl.question("Enter your task:",(task)=>{
            todos.push(task);
            console.log("Task added:",task);
            showMenu();
            
        });
        
    }
    else if(option==2){
        console.log("Your tasklist");
        todos.forEach((task,index)=>{
            console.log(`${index+1}:${task}`);    
        })
        
        showMenu();
    }
    else if(option==3){
        rl.question("Task to delete:",(task)=>{
            const index=todos.indexOf(task.trim());
            todos.splice(index,1);
            console.log("Task deleted");
            showMenu();
        });
    }
    else if(option==4){
        console.log("Good Bye");
    }
    else{
        console.log("Invalid input");
        showMenu();
        
    }
}

const showMenu=()=>{
    console.log("\n1:Add task");
    console.log("2:View Menu");
    console.log("3:Delete Task");
    console.log("4:Exit");
    rl.question("Choose your option:",result);

}

showMenu();