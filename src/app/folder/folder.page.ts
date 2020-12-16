import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  variable = 1;
  flag = false;
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('estoy en el oninit',this.variable);

  }

  changeValue() {
    this.variable += 1; //this.variable = this.variable+1
    console.log('estoy en el changeValue',this.variable);
  }

  changeStatus() {
    this.flag = !this.flag;
  }
}
