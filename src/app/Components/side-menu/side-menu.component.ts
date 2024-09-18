import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  userName: string = "David Naula";
  theme: string = "#0F52BA"; 
  widthMenu: number = 30;
  visibleMenu: boolean = true;

  setVisibilityMenu(): void {
    this.visibleMenu = !this.visibleMenu;
  }

  setThemeColor(color: string): void {
    this.theme = color;
  }

  setSizeMenu() {
    this.widthMenu += 10;
    if (this.widthMenu > 65) {
        this.widthMenu = 30;
    }
    document.documentElement.style.setProperty('--menu-width', `${this.widthMenu}vw`); // Asumiendo que el ancho está en 'vw'
}



  
}
