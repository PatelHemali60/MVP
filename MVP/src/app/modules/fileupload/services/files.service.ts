
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MyFile } from '../model/File.model';


@Injectable()
export class FilesService {

  private apiUrl: string = "http://localhost:3000/files";

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<MyFile[]> {
    return this.http.get<MyFile[]>(this.apiUrl);
  }


  addFile(file: MyFile): Observable<MyFile> {
    return this.http.post<MyFile>(this.apiUrl, file);
  }


  /**
  * Delete file from db
  * @param id 
  * @returns 
  */
  deleteFile(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}