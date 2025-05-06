import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLightboxComponent } from './album-lightbox.component';

describe('AlbumLightboxComponent', () => {
  let component: AlbumLightboxComponent;
  let fixture: ComponentFixture<AlbumLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumLightboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
