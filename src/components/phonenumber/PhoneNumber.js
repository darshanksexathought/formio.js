import {TextFieldComponent} from '../textfield/TextField';

export class PhoneNumberComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'phonenumber',
      label: 'Phone Number',
      key: 'phoneNumber',
      inputType: 'tel',
      inputMask: '(999) 999-9999'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Phone Number',
      group: 'advanced',
      icon: 'fa fa-phone-square',
      weight: 20,
      documentation: 'http://help.form.io/userguide/#phonenumber',
      schema: PhoneNumberComponent.schema()
    };
  }
}
