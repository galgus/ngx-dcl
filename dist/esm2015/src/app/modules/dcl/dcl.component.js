import { Component, ChangeDetectionStrategy, Input, ComponentFactoryResolver, Renderer2, ElementRef, ViewContainerRef, ReflectiveInjector } from '@angular/core';
function createComponent(cfr, type, vcr, bindings, projectableNodes) {
    return vcr.createComponent(cfr.resolveComponentFactory(type), vcr.length, getInjector(vcr, bindings), projectableNodes);
}
function getInjector(viewContainer, bindings) {
    const ctxInjector = viewContainer.parentInjector;
    return (Array.isArray(bindings) && bindings.length > 0) ?
        ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) :
        ctxInjector;
}
export class DclComponent {
    constructor(_cr, _renderer, _elem, _view) {
        this._cr = _cr;
        this._renderer = _renderer;
        this._elem = _elem;
        this._view = _view;
    }
    ngOnInit() {
        if (this.type) {
            this._cmpRef = createComponent(this._cr, this.type, this._view);
            this._view.element.nativeElement.appendChild(this._cmpRef.location.nativeElement);
            if (this.init) {
                this.init(this._cmpRef, this.identifier, this.data);
            }
        }
        else {
            const text = this.data !== null && this.data !== undefined ? this.data : '';
            this._renderer.appendChild(this._elem.nativeElement, text);
        }
    }
    ngOnChanges(changes) {
        if (this._cmpRef) {
            this._view.element.nativeElement.removeChild(this._cmpRef.location.nativeElement);
            this.ngOnInit();
        }
    }
}
DclComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dcl',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DclComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ViewContainerRef }
];
DclComponent.propDecorators = {
    type: [{ type: Input }],
    init: [{ type: Input }],
    data: [{ type: Input }],
    identifier: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kY2wvZGNsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUF3Qix1QkFBdUIsRUFBRSxLQUFLLEVBQy9ELHdCQUF3QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQ3ZCLGtCQUFrQixFQUM3RCxNQUFNLGVBQWUsQ0FBQztBQU12QixTQUFTLGVBQWUsQ0FDdEIsR0FBNkIsRUFDN0IsSUFBUyxFQUNULEdBQXFCLEVBQ3JCLFFBQXVDLEVBQ3ZDLGdCQUEwQjtJQUUxQixPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQ3hCLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFDakMsR0FBRyxDQUFDLE1BQU0sRUFDVixXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUMxQixnQkFBZ0IsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FDbEIsYUFBK0IsRUFBRSxRQUF1QztJQUV4RSxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRSxXQUFXLENBQUM7QUFDbEIsQ0FBQztBQVFELE1BQU0sT0FBTyxZQUFZO0lBUXZCLFlBQ1UsR0FBNkIsRUFDN0IsU0FBb0IsRUFDcEIsS0FBaUIsRUFDakIsS0FBdUI7UUFIdkIsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWtCO0lBQzdCLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQ3BDLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZDO1FBQ3ZELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQ3BDLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUVoRDs7O1lBckNDLHdCQUF3QjtZQUFFLFNBQVM7WUFBRSxVQUFVO1lBQUUsZ0JBQWdCOzs7bUJBdUNoRSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBUeXBlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLCBSZWZsZWN0aXZlSW5qZWN0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IHR5cGUgSW5pdEZ1bmMgPVxuICAgIChjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+LCBpZGVudGlmaWVyOiBhbnksIGRhdGE6IGFueSkgPT4gdm9pZDtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KFxuICBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgdHlwZTogYW55LFxuICB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gIGJpbmRpbmdzPzogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXSxcbiAgcHJvamVjdGFibGVOb2Rlcz86IGFueVtdW11cbik6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgcmV0dXJuIHZjci5jcmVhdGVDb21wb25lbnQoXG4gICAgY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpLFxuICAgIHZjci5sZW5ndGgsXG4gICAgZ2V0SW5qZWN0b3IodmNyLCBiaW5kaW5ncyksXG4gICAgcHJvamVjdGFibGVOb2Rlc1xuICApO1xufVxuXG5mdW5jdGlvbiBnZXRJbmplY3RvcihcbiAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgYmluZGluZ3M/OiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdXG4pIHtcbiAgY29uc3QgY3R4SW5qZWN0b3IgPSB2aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yO1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkoYmluZGluZ3MpICYmIGJpbmRpbmdzLmxlbmd0aCA+IDApID9cbiAgICAgIFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoYmluZGluZ3MsIGN0eEluamVjdG9yKSA6XG4gICAgICBjdHhJbmplY3Rvcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRjbCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcblxufSlcbmV4cG9ydCBjbGFzcyBEY2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBUeXBlPGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBpbml0OiBJbml0RnVuYztcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGlkZW50aWZpZXI6IGFueTtcblxuICBwcml2YXRlIF9jbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXc6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICB0aGlzLl9jbXBSZWYgPSBjcmVhdGVDb21wb25lbnQodGhpcy5fY3IsIHRoaXMudHlwZSwgdGhpcy5fdmlldyk7XG4gICAgICB0aGlzLl92aWV3LmVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy5fY21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLl9jbXBSZWYsIHRoaXMuaWRlbnRpZmllciwgdGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuZGF0YSAhPT0gbnVsbCAmJiB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCA/IHRoaXMuZGF0YSA6ICcnO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbS5uYXRpdmVFbGVtZW50LCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAodGhpcy5fY21wUmVmKSB7XG4gICAgICB0aGlzLl92aWV3LmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgdGhpcy5fY21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICk7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=