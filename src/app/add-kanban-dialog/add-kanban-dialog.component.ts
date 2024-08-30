import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from '../service/dataservice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-kanban-dialog',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MatDialogModule, MatFormFieldModule],
  providers: [DataserviceService],
  templateUrl: './add-kanban-dialog.component.html',
  styleUrl: './add-kanban-dialog.component.scss'
})
export class AddKanbanDialogComponent {

  userId: number = 0;
  board_name: string = '';
  constructor(private router: Router,
    private http: HttpClient,
    private dataservice: DataserviceService,
    public dialogRef: MatDialogRef<AddKanbanDialogComponent>) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const UserData = sessionStorage.getItem('userData');
    if (UserData) {
      const user = JSON.parse(UserData);
      this.userId = user.id;
      console.log(this.userId);

    }
  }

  onCancel(): void {

    this.dialogRef.close();
  }

  onSave() {
    const userData = {
      board_name: this.board_name
    };
    this.dialogRef.close({ success: true });
  }
}
