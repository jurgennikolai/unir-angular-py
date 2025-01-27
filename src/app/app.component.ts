import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular_py';
  env = environment;
  mssg !: string;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    console.log("GHA", environment.apiUrl)
  }

  getStatus(){
    this._http.get<any>(this.env.apiUrl).subscribe({
      next: (res)=>{
        this.mssg = res
      },
      error: (e) =>
        (this.mssg = 'Aún no se puede conectar a la BD, reintente de nuevo.'),
    });

  }
}
