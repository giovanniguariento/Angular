import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dados: any = [];

  constructor( private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
    this.getDados();
  }
  private getDados() {
    this.adminService.getDados().subscribe(
      (success) => {
        console.log(success);
        this.dados = success;
      },
      (error) => { console.log(error) }
    );
  }

}
