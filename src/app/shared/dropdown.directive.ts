import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }
    private shouldOpen = false;
    @HostListener('document:click', ['$event']) clickButton(){
        this.shouldOpen= this.elRef.nativeElement.contains(event.target)?
        !this.shouldOpen:false;
        let element = this.elRef.nativeElement.querySelector(".dropdown-menu")

        if(this.shouldOpen){
            this.renderer.addClass(element,"show");
        }
        else{
            this.renderer.removeClass(element, "show");
        }

    }

}