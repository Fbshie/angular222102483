import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    standalone: true,
    selector: 'app-dashboard2',
    imports: [RouterModule, HeaderComponent, SidebarComponent, FooterComponent],
    templateUrl: './dashboard2.component.html',
    styleUrl: './dashboard2.component.css'
})
export class Dashboard2Component {

}
