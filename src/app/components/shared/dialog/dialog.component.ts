import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent {
  public propuestaEnviada = false;
  public propuestaForm = new FormGroup({
    intercambio: new FormControl('', [Validators.required]),
    propuestaEconomica: new FormControl('', [Validators.required]),
    ofertaNueva: new FormControl('')
  });
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public _sharedService: SharedService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  public mandarPropuesta(): void {
    console.log(this.propuestaForm.value);
    this.propuestaEnviada = true;
  }

}
