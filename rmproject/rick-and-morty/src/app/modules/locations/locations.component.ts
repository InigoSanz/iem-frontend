import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';

interface Location{
  id: string;
  name: string;
}

@Component({
  selector: 'app-locations',
  imports: [CardComponent, CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent{
  
  constructor(private _filterService: FilterService) {
    // Initialize filtered characters with all characters
    this.filteredLocations = [...this.locations];
    
    // Subscribe to search text changes
    this._filterService.searchText.subscribe({
      next: (searchText: string) => {
        console.log('Search text received:', searchText);
        
        // If search text is empty, show all characters
        // This is saying:
        // Take the search text and remove any whitespace from the beginning and end
        // Check if the result is empty (or falsy)
        // If it is empty, show all characters and exit the function early
        if (!searchText.trim()) {
          this.filteredLocations = [...this.locations];
          return;
        }
        
        // Filter characters based on search text
        // This is where the filtering happens - using array methods, not loops
        this.filteredLocations = this.locations.filter(locations => 
          locations.name.toLowerCase().includes(searchText.toLowerCase())
        );
        
        console.log('Filtered characters:', this.filteredLocations);
      }
    });
  }; 

  filteredLocations: Location[] = [];

  locations: Location[] = [
    { id: '1', name: 'Earth' },
    { id: '2', name: 'Mars' },
    { id: '3', name: 'Pluto' },
    { id: '4', name: 'Venus' },
    { id: '5', name: 'Jupiter' },
    { id: '6', name: 'Saturn' },
    { id: '7', name: 'Neptune' },
    { id: '8', name: 'Uranus' },
    { id: '9', name: 'Mercury' },
    { id: '10', name: 'Andromeda' },
    { id: '11', name: 'Milky Way' },
    { id: '12', name: 'Alpha Centauri' },
    { id: '13', name: 'Betelgeuse' },
    { id: '14', name: 'Sirius' },
    { id: '15', name: 'Proxima Centauri' },
    { id: '16', name: 'Vega' },
    { id: '17', name: 'Antares' },
    { id: '18', name: 'Rigel' },
    { id: '19', name: 'Aldebaran' },
    { id: '20', name: 'Capella' },
    { id: '21', name: 'Castor' },
    { id: '22', name: 'Pollux' },
    { id: '23', name: 'Deneb' },
    { id: '24', name: 'Altair' },
    { id: '25', name: 'Fomalhaut' },
    { id: '26', name: 'Spica' },
    { id: '27', name: 'Arcturus' },
    { id: '28', name: 'Canopus' },
    { id: '29', name: 'Sirius B' },
    { id: '30', name: 'Barnard\'s Star' }
  ];

};
