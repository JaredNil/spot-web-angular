import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../entities/Album/model/types/album';

interface Database {
    albums: Album[]
}


@Injectable({
    providedIn: 'root' }
)
export class JsonReaderService {
   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("/assets/json/albums.json");
    }

    public getCommonAlbums(): Observable<Database> {
        return this.http.get<Database>("/assets/json/albums.json");
    }
}
