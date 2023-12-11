import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  paramValue: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramValue = this.route.snapshot.queryParams['income'];
  }
  fontStyleControl = new FormControl('');
  fontStyle?: string;
  dataTabs = ['Pemasukan', 'Pengeluaran'];
}
