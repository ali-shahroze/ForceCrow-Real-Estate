import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTextBlockComponent } from './hero-text-block.component';

describe('HeroTextBlockComponent', () => {
  let component: HeroTextBlockComponent;
  let fixture: ComponentFixture<HeroTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTextBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
