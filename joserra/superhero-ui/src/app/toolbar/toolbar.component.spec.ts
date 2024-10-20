import { TestBed } from '@angular/core/testing';
import ToolbarComponent from './toolbar.component';
import { MockRender } from 'ng-mocks';

describe('ToolbarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolbarComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = MockRender(ToolbarComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
