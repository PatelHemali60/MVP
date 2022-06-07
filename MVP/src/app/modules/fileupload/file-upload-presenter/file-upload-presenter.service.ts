
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../model/File.model';

@Injectable()
export class FileUploadPresenterService {

  private file: MyFile;
  // public filess: any[] = [];
  private _fileToUpload: Subject<MyFile>;
  public fileToUpload$: Observable<MyFile>;

  constructor(private fb: FormBuilder) {
    this.file = {} as MyFile;
    this._fileToUpload = new Subject<MyFile>();
    this.fileToUpload$ = new Observable<MyFile>();
    this.fileToUpload$ = this._fileToUpload.asObservable();
  }

  public buildDateForm() {
    return this.fb.group({
      fromDate: [null],
      toDate: [null],
    })
  }


  uploadFile(file: File) {
    //size in mb
    // debugger
    let size = Math.round(file.size / 1024 / 1024)
    if (size <= 2) {
      this.file.name = file.name;
      this.file.size = size;
      this.file.type = file.type;
        // console.log(file.type)
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        //evnt is fired when filread succesfully
        reader.onload = (event) => {
          this.file.content = event.target?.result as string;
          this._fileToUpload.next(this.file); 
      }
    }
    else {
      alert("File Size is above 2mb")
    }
  }
  // uploadFile(file: MyFile[]) {
  //   //size in mb
  //   console.log(typeof(file));
    
  //   // for (const files  in file) {
  //   //   console.log(file[files].name);
  //   // }
  //   // file.forEach((item) => {
  //   //   console.log(item.name)
  //   // });

  //   // for (let i = 0; i < file.length; i++) {

  //   //  console.log(files);

  //     let size = Math.round( / 1024 / 1024)
  //      if (size <= 2) {
  //      this.file.name = file.name;
  //     this.file.size = size;
  //      this.file.type = file.type;
  //    // console.log(file.type)
  //       const reader = new FileReader();

  //       reader.readAsDataURL(files);
  //       reader.onload = (event) => {
  //         this.file.content = event.target?.result as string;
  //         this._fileToUpload.next(this.file);
  //       }
  //     }

  //     else {
  //       alert("File Size is above 2mb")
  //     }
  //   // }
  // }


}
