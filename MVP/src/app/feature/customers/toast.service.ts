
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, NgModuleRef } from '@angular/core';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomersModule } from './customers.module';


@Injectable()
export class ToastService {

  private closingSetTimeout: any;
  private componentRef!: ComponentRef<CustomerFormPresentationComponent>  ;

  constructor(private readonly applicationRef: ApplicationRef,
              private readonly injector: Injector,
              private readonly toastModuleNgModuleRef: NgModuleRef<CustomerFormContainerComponent>,
              @Inject(DOCUMENT) private readonly document: Document) {
  }

  public open(message: string, timeout = 6000): void {

    // Clear any previous closing toast:
    if (this.closingSetTimeout) {
      clearTimeout(this.closingSetTimeout);
    }

    // If a toast component hasn't been made, or has been destroyed, make one:
    if (!this.componentRef) {
      // Create the component factory that provides us the component reference:
      const componentFactory = this.toastModuleNgModuleRef.componentFactoryResolver.resolveComponentFactory(CustomerFormPresentationComponent);
      this.componentRef = componentFactory.create(this.injector);

      // Use the component reference and add it to the Angular application + DOM:
      this.applicationRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      this.document.body.appendChild(domElem);
    }

    // Pass toast message:
    this.componentRef.instance.message = message;

    // Remove toast component:
    this.closingSetTimeout = setTimeout(() => {
      this.applicationRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef ;
    }, timeout);
  }

}

