import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-tabs',
  templateUrl: './toggle-tabs.component.html',
  styleUrls: ['./toggle-tabs.component.css']
})

export class ToggleTabsComponent {
  // dataTabs =['Pemasukan','Pengeluaran' ]
  @Input() dataTabs: string[] = [];
  isActive = 'Pemasukan'
  constructor(private router: Router) {}

  navigateToNextPage() {
    this.router.navigate(['/test']); // Navigasi ke '/next' (sesuaikan dengan path yang sesuai)
  }

  onClick(item:string){
    console.log("<<<<<< masuk ",item)
    this.router.navigate(['/test']); // Navigasi ke '/next' (sesuaikan dengan path yang sesuai)

    this.isActive=item
    
  }
}
