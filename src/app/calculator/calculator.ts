import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorComponent {

  num1!: number;
  num2!: number;
  result: any = '';

  calculate(operator: string) {

    if (this.num1 == null || this.num2 == null) {
      this.result = "Please enter valid numbers!";
      return;
    }

    switch (operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0
          ? this.num1 / this.num2
          : "Cannot divide by zero";
        break;
    }
  }
}