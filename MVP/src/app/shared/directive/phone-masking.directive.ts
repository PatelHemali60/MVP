import { Directive, HostListener } from '@angular/core';
import { NgControl} from '@angular/forms';
/**
 * @author Hemali Patel
 * @description phone-making in indian format directive
 */

@Directive({
  selector: '[formControlName][appPhoneMasking]'
})
export class PhoneMaskingDirective {

  constructor(public ngControl: NgControl) { }
  /**
   * @name onModelChange
   * @param event name ngModelChange  
   * @description method calls onInputChange
   */
  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    this.onInputChange(event, false);
  }
  /**
   * @name keydown.backspace
   * @param event keydown.backspace 
   * @description method calls onInputChange method
   */
  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }
  /**
  * @name onfocus
  * @description initialise the input field on focus event
  */
  @HostListener('focus')
  onfocus(event: any) {
    if (!this.ngControl.value) {
      this.ngControl.valueAccessor?.writeValue("+91")
    }
  }

  /**
  * @name onInputChange
  * @param event , and whether backspaced or not
  * @param backspace , and whether backspaced or not
  * @description masks to indian format
  */
  onInputChange(event: any, backspace: boolean) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length);
    }
    if (newVal.length === 0) {
      newVal = '91';
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/(\d{0,2})(\d{0,4})/, '$1 $2');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/(\d{0,2})(\d{0,4})(\d{0,6})/, '$1 $2-$3');
    } else {
      newVal = newVal.substring(0, 12);
      newVal = newVal.replace(/(\d{0,2})(\d{0,4})(\d{0,6})/, '$1 $2-$3');
    }
    newVal = '+' + newVal;
    this.ngControl.valueAccessor?.writeValue(newVal);
  }

}
