import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
// Import prime components
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePicker } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { Tag, TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { TabsModule } from 'primeng/tabs';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { InputIcon, InputIconModule } from 'primeng/inputicon';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    // prime components
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    DatePicker,
    SplitterModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    Select,
    TableModule,
    ProgressBarModule,
    TagModule,
    SliderModule,
    TabsModule,
    IconField,
    InputIcon,
  ]
})


export class AppComponent {

  selectedCustomers: any[] = [];
  title = 'MyPrimeNGApp'; // App title
  dateValue: Date | null = null; // Two-way binding variable for calendar

  value1: string = '';
  value2: string = '';
  value3: string = ''; // Two-way binding variable for input text
  value4: { name: string; code: string } | null = null; // Two-way binding variable for dropdown
  dateValue1: Date | null = null;
  dateValue2: Date | null = null;
  selectedCategory: string = ''; // Bind to the selected radio button
  selectedIngredient: string = ''; // Stores the selected ingredient
  categories: string[] = ['Fruits', 'Vegetables', 'Dairy', 'Grains']; // Food categories
  selectedCategories: string[] = []; // For checkboxes in Form 1
  selectedCountry: any = null; // For the selected dropdown value

  countries = [
    { name: '🇺🇸 United States', code: 'US' },
    { name: '🇨🇦 Canada', code: 'CA' },
    { name: '🇬🇧 United Kingdom', code: 'UK' },
    { name: '🇦🇺 Australia', code: 'AU' },
    { name: '🇩🇪 Germany', code: 'DE' },
  ];

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
  ];

  // Table variables
  customers: any[] = [];
  representatives: any[] = [];
  statuses: any[] = [];
  activityValues: number[] = [0, 100];
  loading: boolean = true;

  // Methods for table
  clear(table: any) {
    table.clear();
  }

  @ViewChild('dt') dt!: Table; // Access the p-table instance

  performAction() {
    console.log('Action performed for selected rows:', this.selectedCustomers);
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'New':
        return 'info';
      case 'Qualified':
        return 'success';
      case 'Unqualified':
        return 'danger';
      case 'Negotiation':
        return 'warning';
      default:
        return '';
    }
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dt.filterGlobal(value, 'contains');
  }
  
  ngOnInit() {

    this.customers = [
      {
        id: 1,
        name: 'John Doe',
        country: { name: 'United States', code: 'us' },
        representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
        date: new Date(),
        balance: 5000,
        status: 'Qualified',
        activity: 70,
        verified: true
      },
      {
        id: 2,
        name: 'Jane Smith',
        country: { name: 'Germany', code: 'de' },
        representative: { name: 'Anna Fitt', image: 'annafitt.png' },
        date: new Date(),
        balance: 3000,
        status: 'New',
        activity: 50,
        verified: false
      },
      {
        id: 3,
        name: 'Carlos Sanchez',
        country: { name: 'Spain', code: 'es' },
        representative: { name: 'John Doe', image: 'johndoe.png' },
        date: new Date(),
        balance: 4000,
        status: 'Negotiation',
        activity: 85,
        verified: true
      },
      {
        id: 4,
        name: 'Emily Davis',
        country: { name: 'Canada', code: 'ca' },
        representative: { name: 'Rebeka Clark', image: 'rebekaclark.png' },
        date: new Date(),
        balance: 2500,
        status: 'New',
        activity: 40,
        verified: false
      },
      {
        id: 5,
        name: 'Liam Brown',
        country: { name: 'United Kingdom', code: 'uk' },
        representative: { name: 'Stephen King', image: 'stephenking.png' },
        date: new Date(),
        balance: 6000,
        status: 'Qualified',
        activity: 90,
        verified: true
      },
      {
        id: 6,
        name: 'Sophia Martinez',
        country: { name: 'Mexico', code: 'mx' },
        representative: { name: 'Emma Wilson', image: 'emmawilson.png' },
        date: new Date(),
        balance: 3500,
        status: 'Negotiation',
        activity: 75,
        verified: true
      },
      {
        id: 7,
        name: 'Oliver Garcia',
        country: { name: 'Australia', code: 'au' },
        representative: { name: 'Michael Scott', image: 'michaelscott.png' },
        date: new Date(),
        balance: 4500,
        status: 'Qualified',
        activity: 80,
        verified: true
      },
      {
        id: 8,
        name: 'Ava Wilson',
        country: { name: 'France', code: 'fr' },
        representative: { name: 'Angela Martin', image: 'angelamartin.png' },
        date: new Date(),
        balance: 2000,
        status: 'Unqualified',
        activity: 30,
        verified: false
      }
    ];

    this.statuses = [
      { label: 'New', value: 'New' },
      { label: 'Qualified', value: 'Qualified' },
      { label: 'Unqualified', value: 'Unqualified' },
      { label: 'Negotiation', value: 'Negotiation' }
    ];

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fitt', image: 'annafitt.png' }
    ];

    setTimeout(() => {
      this.loading = false;
    }, 2000); // Simulate data load
  }
}
