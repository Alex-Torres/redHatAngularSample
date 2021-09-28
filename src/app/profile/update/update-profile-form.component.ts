import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'app/profile/profile.service';


@Component({
    selector: 'update-profile-form',
    templateUrl: './update-profile-form.html',
    encapsulation: ViewEncapsulation.None
})
export class UpdateProfileFormComponent implements OnInit, AfterViewInit {
    horizontalStepperForm: FormGroup;
    verticalStepperForm: FormGroup;
    oid: string;
    private targetId = 'alias';

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @ViewChild('alias') aliasField: ElementRef;

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private _profileService: ProfileService) {
    }
    ngAfterViewInit(): void {
        this.aliasField.nativeElement.focus();
    }

    setFocus() {
        const targetElem = document.getElementById(this.targetId);
        targetElem.focus();
      }

      setTargetId(event: any) {
          if (event.selectedIndex === 0){
              this.targetId = 'alias';
          }
          if(event.selectedIndex === 1){
              this.targetId = 'accessSchedule';
          }
      }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Horizontal stepper form
        this.activatedRoute.data.subscribe((data: any) => {
            this.oid = data.profile.oid;
            this.horizontalStepperForm = this._formBuilder.group({
                step1: this._formBuilder.group({
                    prefersLastCommaFirst: [data.profile.prefersLastCommaFirst, [Validators.required]],
                    alias: [data.profile.alias ?? '', Validators.required],
                    prefersDarkMode: [data.profile.prefersDarkMode.toString()],
                    subjectiveGenderPronoun: [data.profile.subjectiveGenderPronoun ?? ''],
                    objectiveGenderPronoun: [data.profile.objectiveGenderPronoun ?? ''],
                    possessiveGenderPronoun: [data.profile.possessiveGenderPronoun ?? ''],
                    reflexiveGenderPronoun: [data.profile.reflexiveGenderPronoun ?? ''],
                    isASocialDistancer: [data.profile.isASocialDistancer],
                    hideBadges: [data.profile.hideBadges]
                }),
                step2: this._formBuilder.group({
                    makeSchedulePublic: [data.profile.makeSchedulePublic],
                    defaultWorkStartHour: [data.profile.defaultWorkStartHour?.toString() ?? '']
                })
            });
        });



    }

    onSubmit(): void {
        this.aliasField.nativeElement.focus();
        const darkMode = this.horizontalStepperForm.value.step1.prefersDarkMode === 'true';
        const workHour = this.horizontalStepperForm.value.step2.defaultWorkStartHour === '' ? 0 : this.horizontalStepperForm.value.step2.defaultWorkStartHour;
        const preferenceData = { ...this.horizontalStepperForm.value.step1, ...this.horizontalStepperForm.value.step2, prefersDarkMode: darkMode, defaultWorkStartHour: workHour };
        this._profileService.updateProfile(this.oid, preferenceData).subscribe(result => result);

    }
}
