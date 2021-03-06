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
      if(btnid == ""){
        btnid = "contact_content";
        $("#contact_content").show();
        $("#modalheader").text("Contact Me");
      } else {
        $("#modalheader").text("More Information");
      }
      $('#' + btnid + '').show();
  });

  $(".modal").on("hidden.bs.modal", function(){
      $("#employee_content").hide();
      $("#dog_content").hide();
      $("#gpa_content").hide();
      $("#horse_content").hide();
      $("#contact_content").hide();
  });
});
