import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { InventoryComponent } from './inventory.component'
import { InventoryModule } from './inventory.module'

describe('ChartsComponent', () => {
  let component: InventoryComponent
  let fixture: ComponentFixture<InventoryComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          InventoryModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
