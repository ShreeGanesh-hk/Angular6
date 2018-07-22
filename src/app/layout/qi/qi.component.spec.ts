import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { QiComponent } from './qi.component'
import { QiModule } from './qi.module'

describe('ChartsComponent', () => {
  let component: QiComponent
  let fixture: ComponentFixture<QiComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          QiModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(QiComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
