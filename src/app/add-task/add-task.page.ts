import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],

})
export class AddTaskPage implements OnInit {

  categories=["Work","Personal","Home"]

  taskName
  taskDate
  taskPeriority="Low"
  taskCategory
  TaskObject
  show=false
  constructor(public modalCtrl:ModalController) {}

  ngOnInit() {
  }

  async Dismis(){
      await this.modalCtrl.dismiss(this.TaskObject)
  }
  selectedCat(index){
    this.taskCategory=this.categories[index]
  }
  AddTask(){
    this.TaskObject=({itemName:this.taskName,
                      itemDueDate:this.taskDate,
                      itemPeriority:this.taskPeriority,
                      itemCategory:this.taskCategory
                    })
    this.Dismis();
  }
  showCalendar(){
    this.show=!this.show
    console.log(this.taskDate)
  }
}
