import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountIdTableComponent } from './account-id-table.component';

describe('AccountIdTableComponent', () => {
  let component: AccountIdTableComponent;
  let fixture: ComponentFixture<AccountIdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountIdTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountIdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
