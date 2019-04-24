import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from 'src/models/developer';
import { DataRequestService } from 'src/app/core/services/data-request/data-request.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  developer$: Observable<Developer>;

  constructor(
    private dataRequestService: DataRequestService,
  ) { }

  ngOnInit() {
    this.developer$ = this.dataRequestService.getDeveloper();
  }

}
