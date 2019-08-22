import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


$(document).ready(function() {
  $('.modal_btn').click(function() {
      $('#modal_window').modal('show');
      var btnid = $(this).val();
      $('#' + btnid + '').show()
  });

  $(".modal").on("hidden.bs.modal", function(){
      $("#employee_content").hide();
      $("#dog_content").hide();
      $("#gpa_content").hide();
  });
});
