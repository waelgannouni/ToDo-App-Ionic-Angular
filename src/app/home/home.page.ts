import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';
import { TaskServiceService } from '../Services/task-service.service';
import { Tasks } from '../Models/Task';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  ToDoList : Tasks[] =[];
  today : number = Date.now()

  constructor(public modalCtrl:ModalController,private taskServiceService:TaskServiceService) {}
  ngOnInit() {
    try{
      this.taskServiceService.getTasks().subscribe(
        (tasks)=>this.ToDoList=tasks
      );
    }catch(E){
      console.log("can't get data");
      console.log(E);
    }
    
  }
  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    })
  modal.onDidDismiss().then(newTaskObj=>{
    if(newTaskObj.data!=null || newTaskObj.data){
      this.taskServiceService.AddTask(newTaskObj.data).subscribe(
        (Task)=>
        this.ToDoList.push(Task)
      )
    }else{
      alert ("No data where inserted");
    }
  })

    return await modal.present()
}
Delete(Id){
  
  this.taskServiceService.DeleteTask(Id).subscribe(
    ()=>
    this.ToDoList=this.ToDoList.filter(task=>task.id !== Id)
  )
 
}
}
