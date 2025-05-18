import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesLayoutComponent } from './episodes-layout.component';

describe('EpisodesLayoutComponent', () => {
  let component: EpisodesLayoutComponent;
  let fixture: ComponentFixture<EpisodesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
