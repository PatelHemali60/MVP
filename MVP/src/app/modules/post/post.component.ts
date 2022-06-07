import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Diseases, Post } from './model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public Diseases: Diseases[] = [];
  public selectedDiseases = [];

  // reactive form
  public mydieaseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mydieaseForm = this.buildForm();
  }


  //for post
  // storedPosts: Post;


  ngOnInit(): void {
    /**
     * @description static data for diseases
     */
    this.Diseases =
      [
        {
          'id': 1,
          'name': 'Fever',
        },
        {
          'id': 2,
          'name': 'Diarrhea.',
        },
        {
          'id': 3,
          'name': 'Diabetes',
        },
        {
          'id': 4,
          'name': 'Stroke',
        },
        {
          'id': 5,
          'name': 'Headech',
        },
        {
          'id': 6,
          'name': 'Heartattack',
        }, 
        {
          'id': 7,
          'name': 'Depression',
        },
        {
          'id':8,
          'name': 'tension',
        },
        {
          'id': 9,
          'name': 'legpain',
        },


      ]
  }


  public buildForm() {
    return this.fb.group({
      id: [""],
      diseases: [""]
    })
  }

  public onSubmit() {
    console.log(this.mydieaseForm.value);

  }


  // /**
  //  * 
  //  * for add data 
  //  */
  // onPostAdded(event: any) {
  //   this.storedPosts.push(event);
  // }
}



