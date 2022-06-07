import { Injectable } from '@angular/core';

@Injectable()
export class FileListPresenterService {

  constructor() { }

                                      //The Uint8Array typed array represents an array of 8-bit unsigned integers
  private decodeBase64(b64: string): Uint8Array {
    // debugger
    const byteCharacters = atob(b64);  //converstion of file using decoder format
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      //iterate lopp in byte character length
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers); typeof(byteNumbers)
    return byteArray;
  }

  private createBolb(byteArray: Uint8Array, type: string): Blob {
    const blob = new Blob([byteArray], { type: type });
    return blob;
  }

  public openFile(content:string,type:string){
    // debugger
    const b64:string = content.split(",")[1];
    const byteArray:Uint8Array = this.decodeBase64(b64);
    const fileBlob:Blob = this.createBolb(byteArray,type);
    const url:string = window.URL.createObjectURL(fileBlob);
    window.open(url,"FileView","popup");
  }


}