import { TestBed } from '@angular/core/testing';
import AppComponent from './app.component';
import { MockRender } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'heroes-app'`, () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance.title).toEqual('heroes-app');
  });

  it('should render title', () => {
    const fixture = MockRender(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Welcome to Heroes App!',
    );
  });
});
