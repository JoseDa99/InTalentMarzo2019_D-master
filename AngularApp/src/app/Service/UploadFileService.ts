import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class UploadFileService {
 
  constructor(private http: HttpClient) {}
  Url ='http://localhost:8080/api/auth/getallfiles';
  Url2= 'http://localhost:8080/api/auth/post';

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest("POST", this.Url2, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(this.Url);
  }
}