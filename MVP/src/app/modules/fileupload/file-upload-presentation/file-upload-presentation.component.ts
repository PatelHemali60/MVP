
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
import { MyFile } from '../model/File.model';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders: [FileUploadPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  public file!: File;
  public dateForm!: FormGroup;

  public startDate!: string;
  public endDate!: string;


  @Output() fileToUpload: EventEmitter<MyFile>;

  constructor(private _fileUploadPrensenter: FileUploadPresenterService) {
    this.fileToUpload = new EventEmitter<MyFile>();
  
  }

  ngOnInit(): void {
    this.dateForm = this._fileUploadPrensenter.buildDateForm();
    this._fileUploadPrensenter.fileToUpload$.subscribe({
      next: (file) => {
        this.fileToUpload.emit(file);
        // debugger
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
 
    this.file = files.files[0];
    // const numberOfFiles = this.file.length;
    // console.log(this.file);
    
  }

  uploadFile() {
  
    if (this.file) {
    
        this._fileUploadPrensenter.uploadFile(this.file)
    }
    else {
      alert("No File is Selected")
    }
  }

  readStartDate(input:any){
    this.startDate = input.target.value;
  }

  readendDate(input:any){
    this.endDate = input.target.value;
  }
}