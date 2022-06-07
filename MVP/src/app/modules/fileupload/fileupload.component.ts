import { Component, OnInit } from '@angular/core';
import { MyFile } from './model/File.model';
import { Observable } from 'rxjs';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

 
  /** user list data */
  public filesList$: Observable<MyFile[]>

  constructor(private fileService: FilesService) { 
    this.filesList$ = new Observable<MyFile[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.fileService.getAllFiles();
  }

  UploadFile(file: MyFile) {
    debugger
    this.filesList$.subscribe({
      next: (list) => {
        let isFile = list.find((el) => {
          return el.name === file.name
        })
        if (isFile) {
          alert("File with same name already exist.")
        }
        else {
          this.addFile(file);
        }
      },
      error: (e) => { console.log(e) }
    })
  }
 /**
  * 
  * @param file
  */
  public addFile(file: MyFile) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added");
        this.filesList$ = this.fileService.getAllFiles();
      },
      error: (e) => { console.log(e) }
    })
  }

  /**
   * delete file from db
   * @param id 
   */
   deteleFile(id: number) {
    this.fileService.deleteFile(id).subscribe({
      next: (res) => {
        this.filesList$ = this.fileService.getAllFiles();
        alert("File is successfully deleted");
      },
      error: (e) => { console.log(e) }
    })
  }

}
