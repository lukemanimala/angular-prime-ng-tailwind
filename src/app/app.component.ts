import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Import prime components
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePicker } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FormsModule,
    // prime components
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    DatePicker,
  
  ]
})


export class AppComponent {
  title = 'MyPrimeNGApp'; // App title
  value3: string = ''; // Two-way binding variable for input text
  dateValue: Date | null = null; // Two-way binding variable for calendar
}
