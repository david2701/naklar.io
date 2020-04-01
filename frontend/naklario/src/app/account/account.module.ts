import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { TutorComponent } from './tutor/tutor.component';
import { StudentComponent } from './student/student.component';
import { TutorRegisterComponent } from './tutor/tutor-register/tutor-register.component';
import { FormsModule } from '@angular/forms';

import {Ng5SliderModule} from 'ng5-slider';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { TermsConditionsComponent } from './tutor/terms-conditions/terms-conditions.component'


@NgModule({
  declarations: [TutorComponent, StudentComponent, TutorRegisterComponent, StudentRegisterComponent, TermsConditionsComponent],
  imports: [
    Ng5SliderModule,
    FormsModule,
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
