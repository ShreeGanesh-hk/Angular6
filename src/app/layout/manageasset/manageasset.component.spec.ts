import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ManageassetComponent } from './manageasset.component'
import { ManageassetModule } from './manageasset.module'

describe('ChartsComponent', () => {
  let component: ManageassetComponent
  let fixture: ComponentFixture<ManageassetComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ManageassetModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageassetComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
