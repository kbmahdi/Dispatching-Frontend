import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {DataService} from "src/app/demo/service/data.service";
import {MenuItem} from "primeng/api";

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  templateUrl: './etatStock.component.html'
})

export class EtatStockComponent implements OnInit {

  value5: [Date, Date] = [new Date(), new Date()];

  /*
  value5: [Date | null, Date | null] = [null, null];   hedhi bch tet7at null melowel
  this.value5[0] = new Date(); // Assigning start date         //w mbaed naaytelhom haka
  this.value5[1] = new Date(); // Assigning end date
  */

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any;

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  //loading: boolean = true;

  display: boolean = false;

  displayData: any[] | undefined;

  canal: any[] = [];

  store: any[] = [];

  date: any[] = [];

  categorie: any[] = [];

  sousCat: any[] = [];

  nomArticle: any[] = [];

  newRework: any[] = [];

  data: any[] = [];

  dates: any[];

  showSecondDropdown: boolean = false;

  metrics: any = {};

  indivMetrics: any = {};

  currentDateRangeStr: string = '';

  expandedRows: expandedRows = {};

  rowGroupMetadata: any;

  desiredStockCoverage: number | null = null; // Initialize as null or with a default value if necessary

  selectedItemKey: string = '';

  selectedStores: string[] = []; // Add this line to keep track of selected stores

  currentStoreData: any[] = []; // Initially empty, will be filled with data from the response

  selectedCanal: any;
  selectedStore: any;
  selectedCategorie: any;
  selectedSousCat: any;
  selectedNomArticle: any;
  selectedNewRework: any;

  routeItems!: MenuItem[];

  BesoinNewSouhaite: any;
  BesoinReworkSouhaite: any;

  displayStoreData: any[] = [];


  @ViewChild('filter') filter!: ElementRef;

  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) {

    this.dates = [
      { name: 'Last week'},
      { name: 'Last 10 days'},
      { name: 'Last 15 days'},
      { name: 'Last 30 days'},
      { name: 'Last 60 days'},
      { name: 'Last 90 days'},
      { name: 'Last 6 months'},
      { name: 'All time'}
    ];
  }

  async ngOnInit() {

    this.routeItems = [
      { label: 'Etat stock et vente', routerLink: '/pages/etatStock' },
      { label: 'Dispatching', routerLink: '/pages/dispatching' },
    ];
    this.displayData = [];
    try {
      const csvData = await this.dataService.getCombobox();
      console.log(csvData);
      this.processCSVData(csvData);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
    //console.log(this.processCSVData);
    this.loadData();
  }

  processCSVData(data: any) {
    // Iterate over the keys of the data object
    for (let key in data) {
      // Check if the current key's value is an array
      if (Array.isArray(data[key])) {
        // Process the array based on its key
        switch (key) {
          case 'canal':
            this.canal = data[key].map((item: { name: any; }) => ({ name: item.name }));
            break;
          case 'store':
            this.store = data[key].map((item: { name: any; }) => ({ name: item.name }));
            break;
          case 'date':
            this.date = data[key].map((item: { name: any; }) => ({ name: item.name }));
            break;
          case 'categorie':
            this.categorie = data[key].map((item: { name: { toString: () => any; }; }) => ({ name: item.name.toString() }));
            break;
          case 'sousCat':
            this.sousCat = data[key].map((item: { name: { toString: () => any; }; }) => ({ name: item.name.toString() }));
            break;
          case 'nomArticle':
            this.nomArticle = data[key].map((item: { name: { toString: () => any; }; }) => ({ name: item.name.toString() }));
            break;
          case 'new-Rework':
            this.newRework = data[key].map((item: { name: { toString: () => any; }; }) => ({ name: item.name.toString() }));
            break;
          default:
            console.warn(`Unknown key: ${key}`);
        }
      }
    }
  }

  loadData(): void {
    this.dataService.getData().subscribe(fetchedData => {
      this.data = fetchedData;
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  expandAll() {
    if (!this.isExpanded) {
      for (const store in this.indivMetrics) {
        if (this.indivMetrics.hasOwnProperty(store)) {
          this.expandedRows[store] = true;
        }
      }
    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  loadMetrics(data : any) {
    try {
      this.dataService.getTotal(data).subscribe( (response) =>{
        this.metrics = response.total;
        this.indivMetrics = response.indiv;
        console.log('Metrics:', this.metrics);
        console.log('Indiv Metrics:', this.indivMetrics);
        });
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  }

  sendComboboxData(event : any){
    const comboValue={
      date_range_str: event.value.name
    };
    console.log(comboValue);
    this.currentDateRangeStr = comboValue.date_range_str;

    this.loadMetrics(comboValue);
  }

  toggleSecondDropdown() {
    this.showSecondDropdown =!this.showSecondDropdown;
  }


  updateStockCoverage(event: any) {
    this.desiredStockCoverage = event.value;
    this.dataService.sendDesiredStockCoverage(this.desiredStockCoverage).subscribe(response => {
      console.log('Response:', response);
      // Handle the response as needed
    }, error => {
      console.error('Error:', error);
      // Handle errors appropriately
    });
  }

  onItemChecked(item: string): void {
    console.log(this.selectedStores);
    console.log(item);
    this.sendCombinedRequestToServer();
  }

  sendCombinedRequestToServer() {
      const comboValue = {
        date_range_str: this.currentDateRangeStr // Make sure this variable holds the current date range string
      };
      console.log(comboValue.date_range_str)
      console.log(this.selectedStores)
      console.log(this.desiredStockCoverage)

      this.dataService.sendCombinedRequest(this.selectedStores, this.desiredStockCoverage, comboValue.date_range_str).subscribe(
        response => {
          console.log('Response:', response);
          // Handle the response as needed
          this.currentStoreData = response; // Update currentStoreData with the response
        },
        error => {
          console.error('Error:', error);
          // Handle errors appropriately
          // Optionally, reset currentStoreData if the request fails
          this.currentStoreData = [];
        }
      );
  }

  onSelectionChange(event: any) {
    const date_range_str= this.currentDateRangeStr;

    const canalNames = this.selectedCanal?.map((item: { name: any; }) => item.name) || [];
    const storeNames = this.selectedStore?.map((item: { name: any; }) => item.name) || [];
    const categoryNames = this.selectedCategorie?.map((item: { name: any; }) => item.name) || [];
    const sousCatNames = this.selectedSousCat?.map((item: { name: any; }) => item.name) || [];
    const nomArticleNames = this.selectedNomArticle?.map((item: { name: any; }) => item.name) || [];
    const newReworkNames = this.selectedNewRework?.map((item: { name: any; }) => item.name) || [];
    const selectedValues = {
      date_range_str: date_range_str,
      canal: canalNames.join(', '), // Join all names into a single string separated by commas
      store: storeNames.join(', '),
      categorie: categoryNames.join(', '),
      sousCat: sousCatNames.join(', '),
      nomArticle: nomArticleNames.join(', '),
      newRework: newReworkNames.join(', ')
    };
    console.log(selectedValues);

    // Call the new method to send the selected filters
    this.dataService.sendSelectedFilters(selectedValues).then(response => {
      this.metrics = response.total;
      this.indivMetrics = response.indiv;
      console.log('Metrics:', this.metrics);
      console.log('Indiv Metrics:', this.indivMetrics);
      console.log('Response from server:', response);
      // Handle the response as needed, e.g., update UI components
    }).catch(error => {
      console.error('Error sending selected filters:', error);
    });
  }

  /* onValidateClick() {
    // Collect data from the table
    const dataToSend = this.currentStoreData.map(store => ({
      id: store.id,
      VentePS: store.VentePS,
      BesoinNew: store.BesoinNew,
      BesoinNewSouhaite: store.BesoinNewSouhaite,
      RemplacementPS: store.RemplacementPS,
      BesoinRework: store.BesoinRework,
      BesoinReworkSouhaite: store.BesoinReworkSouhaite
      // Include other fields as necessary
    }));

    // Send the data to the server
    this.dataService.sendTableData(dataToSend).subscribe(
      response => {
        console.log('Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Error:', error);
        // Handle errors appropriately
      }
    );
  }*/

  onValidateClick() {
    // Assuming you have some validation logic here
    // For demonstration, we'll just log the currentStoreData
    console.log(this.currentStoreData);


    // Update displayStoreData with the validated data
    this.displayStoreData = this.currentStoreData[0];
    console.log(this.displayStoreData);

    // Manually trigger change detection
    this.cdRef.detectChanges();


    // Optionally, perform any additional actions such as sending data to a server
  }




}
