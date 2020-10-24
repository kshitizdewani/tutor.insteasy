import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticeBoardPage } from './notice-board.page';

describe('NoticeBoardPage', () => {
  let component: NoticeBoardPage;
  let fixture: ComponentFixture<NoticeBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
