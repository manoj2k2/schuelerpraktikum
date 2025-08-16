import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-internship-search',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, MatInputModule, MatIconModule, MatExpansionModule, MatCardModule, FormsModule],
  templateUrl: './internship-search.component.html',
  styleUrl: './internship-search.component.scss'
})
export class InternshipSearchComponent {
  filter = '';
  internships = [
    { id: 1, title: 'Software Engineering Intern', company: 'TechCorp', location: 'Berlin', description: 'Work on real projects with our dev team.' },
    { id: 2, title: 'Marketing Intern', company: 'Marketify', location: 'Munich', description: 'Assist in digital marketing campaigns.' },
    { id: 3, title: 'Data Analyst Intern', company: 'DataWiz', location: 'Hamburg', description: 'Analyze and visualize data for business insights.' },
    { id: 4, title: 'Design Intern', company: 'Creatives', location: 'Cologne', description: 'Support our design team with UI/UX tasks.' },
  ];
  expandedId: number|null = null;

  get filteredInternships() {
    const f = this.filter.trim().toLowerCase();
    if (!f) return this.internships;
    return this.internships.filter(i =>
      i.title.toLowerCase().includes(f) ||
      i.company.toLowerCase().includes(f) ||
      i.location.toLowerCase().includes(f)
    );
  }

  toggleExpand(id: number) {
    this.expandedId = this.expandedId === id ? null : id;
  }
}
