import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.scss']
})
export class FormsReactiveComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(5),
        Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }


  submit() {
    console.log('Form', this.form)
    const formData = {...this.form.value}
    console.log(formData)
    this.form.reset()
  }

  setCapital() {
    const cityMap: any = {
      pl: 'Warsaw',
      ua: 'Kyiv',
      by: 'Minsk'
    }
    const cityKey: string | any = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey]

    this.form.patchValue({
      address: {city}
    })
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control)
    // or
   ( this.form.get('skills') as FormArray).push(control)
  }
}


