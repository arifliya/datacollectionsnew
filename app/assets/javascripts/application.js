/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// ****************************   DATA COLLECTIONS BETA JS *********************************************//

$("#typeFilter :checkbox").click(function() {
    $("#submissions tr").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions tr").show();
    }
});

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});

$('.no-thank-you').click(function(){
  $('.feedback-wrapper').hide();
});


$('#continue').click(function() {

   if($('#what-to-submit-1').is(':checked')) { location.href='choose_period'; }
   if($('#what-to-submit-2').is(':checked')) { location.href='eas_choose_file_to_upload'; }
	 if($('#what-to-submit-3').is(':checked')) { location.href='choose_esf'; }
   if($('#what-to-submit-3a').is(':checked')) { location.href='fc-1-3-0/edit-data'; }
   else if($('#what-to-submit-4').is(':checked')) { location.href='return-period'; }

});

// from myjquery file //

$('.govuk-button').click(function() {
   if($('#fix-errors').is(':checked')) { location.href='/12-0-0/choose_file_to_upload'; }
	 else if ($('#submit-file').is(':checked')) { location.href='/12-0-0/ilr_data_submitted'; }

   else if(!$('.govuk-radios__item input').is(':checked')) {
     $('#formError').addClass('govuk-form-group--error');
     $('.govuk-error-summary').removeClass('hide');
     $('.govuk-error-message').removeClass('hide');
   }
});

$('.govuk-radios__item input').change(function(){
  $('#formError').removeClass('govuk-form-group--error');
  $('.govuk-error-summary').addClass('hide');
  $('.govuk-error-message').addClass('hide');
});





// ****************************   FUNDING CLAIMS JS ****************************************************//

$("#backlink").click(function(event) {
    event.preventDefault();
    history.back(1);
});


// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#confirmOrView').click(function() {
   if($('.confirm-data').is(':checked')) { location.href='year-end-claim-adult'; }
	 else if ($('.view-data').is(':checked')) { location.href='edit-data'; }
});


$("#backLink").click(function(event) {
    event.preventDefault();
    history.back(1);
});



$(function() {
  $('.fig-edit1').on("input", function() {
    var fig1 = $(this).val();
    var fig2 = $(".fig-edit2").val();
    $('.1').text('');
    $('.1').append(fig1);
    var total = parseInt(fig1) + parseInt(fig2);
        $("#total").text('');
        $("#total").append(total);
    if (fig1 == '') {
      $('.1').append('7000');
      var one = $('.1').text();
      var total = parseInt(one) + parseInt(fig2);
      $("#total").text('');
      $("#total").append(total);
    }

    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000');
    }

  });
});

$(function() {
  $('.fig-edit1').on("input", function() {
    var fig1 = $(this).val();
    var two = $('.2').text();
    var total = parseInt(two) + parseInt(fig1);
    $("#total").text('');
    $("#total").append(total);

    var fig2 = $(".fig-edit2").val();
    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000');
    }
  });
});

$(function() {
  $('.fig-edit2').on("input", function() {
    var fig2 = $(this).val();
      var fig1 = $(".fig-edit1").val();
      $('.2').text('');
      $('.2').append(fig2);
      var total = parseInt(fig1) + parseInt(fig2);
          $("#total").text('');
          $("#total").append(total);
      if (fig2 == '') {
        $('.2').append('6000');
        var two = $('.2').text();
        var total = parseInt(two) + parseInt(fig1);
        $("#total").text('');
        $("#total").append(total);
      }

      if (fig2 == '' && fig1 == '') {
        $('#total').append('13000');
      }
  });
});

$(function() {
  $('.fig-edit2').on("input", function() {
    var fig2 = $(this).val();
    var one = $('.1').text();
    var total = parseInt(one) + parseInt(fig2);
    $("#total").text('');
    $("#total").append(total);

    var fig1 = $(".fig-edit1").val();
    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000');
    }
  });
});


// ********************* different interaction ********************** //


  $('#updateFigures').click(function(e) {

    var fig1 = $('.fig-edit1b').val();
    var fig2 = $('.fig-edit2b').val();
    var one = $('.1b').text();
    var two = $('.2b').text();

    var total = parseInt(fig1) + parseInt(fig2);

    if (fig1 == '' && fig2 == '') {
      return false;
    }

    if (fig1 == '' && fig2 == '') {
      return false;
    }

    if (fig1 == '0' && fig2 == '0') {
      return false;
    }

    if (fig1 == '') {
      var total = parseInt(one) + parseInt(fig2);
      $('.1b').text('9000');
      $("#total2").text(total);
    }

    if (fig2 == '') {
      var total = parseInt(fig1) + parseInt(two);
      $('.2b').text('10000');
      $("#total2").text(total);
    }

    else {
      // $("#total2").text('');
      $("#total2").text(total);

      // $(one).append('');
      // $(two).append('');
      $('.1b').text(fig1);
      $('.2b').text(fig2);
      // $(fig1).append('');
      // $(fig2).append('');
    }

    e.preventDefault();

  });


// ******************************* different interaction ********************************** //

$(function() {
  $('.fig-edit1c').on("input", function() {
    var fig1 = $(this).val();
    var fig2 = $(".fig-edit2c").val();
    var total = parseInt(fig1) + parseInt(fig2);

    $("#total3").text('');
    $("#total3").append(total);

    });
});


$(function() {
  $('.fig-edit2c').on("input", function() {
    var fig2 = $(this).val();
    var fig1 = $(".fig-edit1c").val();
    var total = parseInt(fig1) + parseInt(fig2);

    $("#total3").text('');
    $("#total3").append(total);

    });
});


$('#confirmSubmit').click(function() {
   if($('#confirmCheckBox').prop('checked')) {
     location.href='confirmation';
   } else {
     $('#errorSummary').removeClass('hidden');
     $('#errorMessage').addClass('govuk-form-group--error');
     $('#nationality-error').removeClass('hidden');
    }
});

$('#confirmCheckBox').click(function(){
  if($(this).prop('checked')) {
    $('#errorSummary').addClass('hidden');
    $('#errorMessage').removeClass('govuk-form-group--error');
    $('#nationality-error').addClass('hidden');
  }
});


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if ($(window).width() > 640) {
      if (windscroll >= 500) {
          $('#nav li a').addClass('active');
          $('.wrapper').each(function(i) {
              if ($(this).position().top <= windscroll - 0) {
                  $('#nav li a.active').removeClass('active');
                  $('#nav li a').eq(i).addClass('active');
              }
          });

      } else {

          $('#nav').removeClass('active');
          $('#nav li a.active').removeClass('active');
          $('#nav li a:first').addClass('active');
      }
    }
}).scroll();



var $window = $(window);
var distance = $('.sticky').offset().top;
$window.scroll(function() {
  if ( $window.scrollTop() >= distance ) {
        $('.sticky').addClass('stuck');
    } else {
        $('.sticky').removeClass('stuck');
    }
});
