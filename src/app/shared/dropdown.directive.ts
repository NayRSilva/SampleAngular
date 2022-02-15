import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }
    private shouldOpen = false;
    @HostListener('click') clickButton(){
        this.shouldOpen= !this.shouldOpen

        if(this.shouldOpen){
            this.renderer.addClass(this.elRef,"open");
        }

    }

}