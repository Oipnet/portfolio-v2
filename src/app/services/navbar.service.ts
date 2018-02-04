import { Injectable, Output, EventEmitter, ElementRef } from '@angular/core';

@Injectable()
export class NavbarService {
    @Output() disactiveElement: EventEmitter<ElementRef> = new EventEmitter();

    public manageActiveElement(element: ElementRef) {
        this.disactiveElement.emit(element);
    }
}