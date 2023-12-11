import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-toggle-tabs',
  templateUrl: './toggle-tabs.component.html',
  styleUrls: ['./toggle-tabs.component.css'],
})
export class ToggleTabsComponent {
  // dataTabs =['Pemasukan','Pengeluaran' ]
  @Input() dataTabs: string[] = [];
  isActive = 'Pemasukan';

  paramValue = 220000000;

  navigationExtras: NavigationExtras = {
    queryParams: { income: this.paramValue },
  };
  constructor(private router: Router) {}

  // navigateToNextPage() {
  //   this.router.navigate(['/test/?name=test']); // Navigasi ke '/next' (sesuaikan dengan path yang sesuai)
  // }

  onClick(item: string) {
    console.log('<<<<<< masuk ', item);
    // this.router.navigate(['/tes/?name=testt']); // Navigasi ke '/next' (sesuaikan dengan path yang sesuai)
    this.router.navigate(['/test'], this.navigationExtras);
    this.isActive = item;
  }
}
