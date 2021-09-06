import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {
  private url:string = 'http://hp-api.herokuapp.com/api/characters';
  private _arrPersonajes:any[] = [];
  get personajes(){
    return [...this._arrPersonajes];
  }
  constructor( private http: HttpClient) { }

  buscarMagos( buq:string  ){
    let url = `${this.url}${buq}`
    this.http.get( url )
      .subscribe( (resp:any) => {
        this._arrPersonajes = resp;
        console.log(resp)
      })
  }
}
