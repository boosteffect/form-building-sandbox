import { Component, OnInit, OnDestroy  } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { of, Observable, Subject } from 'rxjs';
import { map, tap, filter, takeUntil } from 'rxjs/operators';
import { VehicleService } from './../services/vehicle.service';

@Component({
  selector: 'app-formly-static',
  templateUrl: './formly-static.component.html',
  styleUrls: ['./formly-static.component.css']
})
export class FormlyStaticComponent implements OnInit, OnDestroy  {
  private destroy$ = new Subject();

  constructor(private vehicleService : VehicleService) { }

  ngOnInit() {
  }

  form = new FormGroup({});
  
  model = { };

  states$ = this.vehicleService.getStates();
  makes$ = this.vehicleService.getMakes();
  models$ = this.vehicleService.getModels();

  fields: FormlyFieldConfig[] = [
    {
      key: 'studentName',
      type: 'input',
      templateOptions: {
        placeholder: 'Student Name',
        required: true,
      }
    },
    {
      key: 'studentId',
      type: 'input',
      templateOptions: {
        placeholder: 'Student ID',
        required: true,
      }
    },
    {
      key: 'vehicleYear',
      type: 'input',
      templateOptions: {
        placeholder: 'Vehicle Year',
        required: true,
        type: 'number',
        min: 1980
      }
    },
    {
      key: 'vehicleMake',
      type: 'select',
      templateOptions: {
        placeholder: '-- Make --',
        options: this.makes$,
        required: true,
      }
    },
    {
      key: 'vehicleModel',
      type: 'select',
      templateOptions: {
        placeholder: '-- Model --',
        options: this.models$,
        required: true,
      },
      expressionProperties: {
        'templateOptions.disabled': (model, formState) => !model.vehicleMake
        },
        lifecycle: {
            onInit: (form, field, model) => {
                form
                .get('vehicleMake')
                .valueChanges.pipe(
                    tap(vehicleMake => {
                    field.formControl.setValue(null);
                    field.templateOptions.options = this.models$.pipe(
                        map(cities => cities.filter(x => x.make === vehicleMake))
                    );
                    }),
                    takeUntil(this.destroy$)
                )
                .subscribe();
            }
        }
    },
    {
      key: 'registrationState',
      type: 'select',
      templateOptions: {
        placeholder: '-- License Plate State --',
        options: this.states$,
        required: true,
      }
    },
    {
      key: 'registrationNumber',
      type: 'input',
      templateOptions: {
        placeholder: 'License Plate Number',
        required: true,
      }
    },
  ];

  onSubmit() {
    alert(
      JSON.stringify(this.model, null, 4)
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
