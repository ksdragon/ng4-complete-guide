import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   @Output() clickedLinkEvent = new EventEmitter<string>();

    onClickNavigateLink(feature: string) {
        this.clickedLinkEvent.emit(feature);
    }
}
