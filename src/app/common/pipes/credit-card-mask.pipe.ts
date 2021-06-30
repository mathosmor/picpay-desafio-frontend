import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'creditCard'
})
export class CreditCardMaskPipe implements PipeTransform {
  transform(plainCreditCard: string, visibleDigits: number = 4): string {
    let maskedSection = plainCreditCard.slice(0, -visibleDigits);
    let visibleSection = plainCreditCard.slice(-visibleDigits);
    return maskedSection.replace(/./g, '') + visibleSection;
  }
}