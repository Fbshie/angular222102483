import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-forex',
  standalone: true,
  imports: [ FooterComponent, HeaderComponent, SidebarComponent],
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent implements AfterViewInit {
  private _table1 : any;

  constructor(private renderer: Renderer2, private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapsed");

    this._table1 = $("#table1").DataTable({
      "columnDefs": [
        {
          "targets" : 2,
          "className" : "text-right"
        }
      ]
    });

    this.bindTable1();
  }

  bindTable1(): void {
    console.log("bindTable1()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=f6bc5cd405124420b1047f7df9bb114b"

    this.httpClient.get(url).subscribe((data: any) => {
      //console.log(data);

      var rates = data.rates;
      console.log(rates);

      let index = 1;

      for (const currency in rates) {
        const rate = rates.IDR / rates[currency];
        const formatrate = formatCurrency(rate, "en-US", "", currency);
        console.log('${currency} : ${formatrate}');

        const row = [index++, currency, formatrate];
        this._table1.row.add(row);
      }

      this._table1.draw(false);
    });
  }
}
