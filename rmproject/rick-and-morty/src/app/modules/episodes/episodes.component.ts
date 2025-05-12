import { Component} from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';

interface Episode{
  id: string;
  name: string;
  air_date: string;
}

@Component({
  selector: 'app-episodes',
  imports: [CardComponent, CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {
  
  constructor(private _filterService: FilterService) {
    // Initialize filtered characters with all characters
    this.filteredEpisodes = [...this.episodes];
    
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
          this.filteredEpisodes = [...this.episodes];
          return;
        }
        
        // Filter characters based on search text
        // This is where the filtering happens - using array methods, not loops
        this.filteredEpisodes = this.episodes.filter(episodes => 
          episodes.name.toLowerCase().includes(searchText.toLowerCase())
        );
        
        console.log('Filtered characters:', this.filteredEpisodes);
      }
    });
  }

  filteredEpisodes: Episode[] = [];


  episodes: Episode[] = [
    { id: '1', name: 'Pilot', air_date: 'December 2, 2013' },
    { id: '2', name: 'Lawnmower Dog', air_date: 'December 9, 2013' },
    { id: '3', name: 'Anatomy Park', air_date: 'December 16, 2013' },
    { id: '4', name: 'M. Night Shaym-Aliens!', air_date: 'January 13, 2014' },
    { id: '5', name: 'Meeseeks and Destroy', air_date: 'January 20, 2014' },
    { id: '6', name: 'Rick Potion No. 9', air_date: 'January 27, 2014' },
    { id: '7', name: 'Raising Gazorpazorp', air_date: 'February 10, 2014' },
    { id: '8', name: 'Total Rickall', air_date: 'August 23, 2015' },
    { id: '9', name: 'Get Schwifty', air_date: 'August 30, 2015' },
    { id: '10', name: 'The Wedding Squanchers', air_date: 'October 4, 2015' },
    
  ];

}
