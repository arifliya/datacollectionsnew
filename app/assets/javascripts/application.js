/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// ****************************   DATA COLLECTIONS BETA JS *********************************************//

// ---------- last 3 months filters ------------ //

$('#typeFilter :checkbox').click(function () {
  $('#submissions tr').hide()
  $('.card').hide()
  $('#typeFilter :checkbox:checked').each(function () {
    $('.' + $(this).val()).show()
  })

  if (!$('#typeFilter :checkbox').is(':checked')) {
    $('#submissions tr').show()
    $('.card').show()
  }
})

// ---------- history filters ------------ //

$('#yearFilter :checkbox').click(function () {
  $('.year-groups').hide()
  $('#yearFilter :checkbox:checked').each(function () {
    $('.' + $(this).val()).show()
  })

  if (!$('#yearFilter :checkbox').is(':checked')) {
    $('.year-groups').show()
  }
})

// ---------- period end filters ------------ //

$('#yearFilter-pe :checkbox').click(function () {
  $('.year-groups-pe').hide()
  $('#yearFilter-pe :checkbox:checked').each(function () {
    $('.' + $(this).val()).show()
  })

  if (!$('#yearFilter-pe :checkbox').is(':checked')) {
    $('.year-groups-pe').show()
  }
})

// ---------- qar frm filters ------------ //

$('#qarfrmFilter :checkbox').click(function () {
  $('.qf').hide()
  $('#qarfrmFilter :checkbox:checked').each(function () {
    $('.' + $(this).val()).show()
  })

  if (!$('#qarfrmFilter :checkbox').is(':checked')) {
    $('.qf').show()
  }
});

$('.no-thank-you').click(function () {
  $('.feedback-wrapper').hide()
})

$('#continue').click(function () {
  if ($('#what-to-submit-1').is(':checked')) { location.href = 'choose_period' }
  if ($('#what-to-submit-2').is(':checked')) { location.href = 'choose_eas' }
	 if ($('#what-to-submit-3').is(':checked')) { location.href = 'choose_esf' }
  if ($('#what-to-submit-3a').is(':checked')) { location.href = 'edit-data' }
  if ($('#what-to-submit-5').is(':checked')) { location.href = 'what_data_do_you_want_to_view' } else if ($('#what-to-submit-4').is(':checked')) { location.href = 'return-period' }
})

$('#continue2').click(function () {
  if ($('#submission-reports').is(':checked')) { location.href = 'submission-reports' }
  if ($('#qar-frm-reports').is(':checked')) { location.href = 'qar-frm-reports' }
  if ($('#period-end-reports').is(':checked')) { location.href = 'period-end-reports' } else if ($('#understand-your-payments').is(':checked')) { location.href = 'beta/summary/R01' }
})

$('#esfRound').click(function () {
  if ($('#round-1').is(':checked')) { location.href = 'esf_choose_file_to_upload' }
  if ($('#round-2').is(':checked')) { location.href = 'esf_2_choose_file_to_upload' }
})

// from myjquery file //

$('.govuk-button').click(function () {
  if ($('#fix-errors').is(':checked')) { location.href = 'choose_file_to_upload' } else if ($('#submit-file').is(':checked')) { location.href = 'ilr_data_submitted' } else if (!$('.govuk-radios__item input').is(':checked')) {
    $('#formError').addClass('govuk-form-group--error')
    $('.govuk-error-summary').removeClass('hide')
    $('.govuk-error-message').removeClass('hide')
  }
})

$('.govuk-radios__item input').change(function () {
  $('#formError').removeClass('govuk-form-group--error')
  $('.govuk-error-summary').addClass('hide')
  $('.govuk-error-message').addClass('hide')
})

// ****************************   FUNDING CLAIMS JS ****************************************************//

$('#backlink').click(function (event) {
  event.preventDefault()
  history.back(1)
})

// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#confirmOrView').click(function () {
  if ($('.confirm-data').is(':checked')) { location.href = 'year-end-claim-adult' } else if ($('.view-data').is(':checked')) { location.href = 'edit-data' }
})

$('#backLink').click(function (event) {
  event.preventDefault()
  history.back(1)
})

$('#redBorder').blur(function () {
  $(this).addClass('govuk-input--error')
  $('#cutomTableRow').addClass('show')
})

$(function () {
  $('.fig-edit1').on('input', function () {
    var fig1 = $(this).val()
    var fig2 = $('.fig-edit2').val()
    $('.1').text('')
    $('.1').append(fig1)
    var total = parseInt(fig1) + parseInt(fig2)
    $('#total').text('')
    $('#total').append(total)
    if (fig1 == '') {
      $('.1').append('7000')
      var one = $('.1').text()
      var total = parseInt(one) + parseInt(fig2)
      $('#total').text('')
      $('#total').append(total)
    }

    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000')
    }
  })
})

$(function () {
  $('.fig-edit1').on('input', function () {
    var fig1 = $(this).val()
    var two = $('.2').text()
    var total = parseInt(two) + parseInt(fig1)
    $('#total').text('')
    $('#total').append(total)

    var fig2 = $('.fig-edit2').val()
    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000')
    }
  })
})

$(function () {
  $('.fig-edit2').on('input', function () {
    var fig2 = $(this).val()
    var fig1 = $('.fig-edit1').val()
    $('.2').text('')
    $('.2').append(fig2)
    var total = parseInt(fig1) + parseInt(fig2)
    $('#total').text('')
    $('#total').append(total)
    if (fig2 == '') {
      $('.2').append('6000')
      var two = $('.2').text()
      var total = parseInt(two) + parseInt(fig1)
      $('#total').text('')
      $('#total').append(total)
    }

    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000')
    }
  })
})

$(function () {
  $('.fig-edit2').on('input', function () {
    var fig2 = $(this).val()
    var one = $('.1').text()
    var total = parseInt(one) + parseInt(fig2)
    $('#total').text('')
    $('#total').append(total)

    var fig1 = $('.fig-edit1').val()
    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000')
    }
  })
})

// ********************* different interaction ********************** //

$('#updateFigures').click(function (e) {
  var fig1 = $('.fig-edit1b').val()
  var fig2 = $('.fig-edit2b').val()
  var one = $('.1b').text()
  var two = $('.2b').text()

  var total = parseInt(fig1) + parseInt(fig2)

  if (fig1 == '' && fig2 == '') {
    return false
  }

  if (fig1 == '' && fig2 == '') {
    return false
  }

  if (fig1 == '0' && fig2 == '0') {
    return false
  }

  if (fig1 == '') {
    var total = parseInt(one) + parseInt(fig2)
    $('.1b').text('9000')
    $('#total2').text(total)
  }

  if (fig2 == '') {
    var total = parseInt(fig1) + parseInt(two)
    $('.2b').text('10000')
    $('#total2').text(total)
  } else {
    // $("#total2").text('');
    $('#total2').text(total)

    // $(one).append('');
    // $(two).append('');
    $('.1b').text(fig1)
    $('.2b').text(fig2)
    // $(fig1).append('');
    // $(fig2).append('');
  }

  e.preventDefault()
})

// ******************************* different interaction ********************************** //

$(function () {
  $('.fig-edit1c').on('input', function () {
    var fig1 = $(this).val()
    var fig2 = $('.fig-edit2c').val()
    var total = parseInt(fig1) + parseInt(fig2)

    $('#total3').text('')
    $('#total3').append(total)
  })
})

$(function () {
  $('.fig-edit2c').on('input', function () {
    var fig2 = $(this).val()
    var fig1 = $('.fig-edit1c').val()
    var total = parseInt(fig1) + parseInt(fig2)

    $('#total3').text('')
    $('#total3').append(total)
  })
})

$('#confirmSubmit').click(function () {
  if ($('#confirmCheckBox').prop('checked')) {
    location.href = 'confirmation'
  } else {
    $('#errorSummary').removeClass('hidden')
    $('#errorMessage').addClass('govuk-form-group--error')
    $('#nationality-error').removeClass('hidden')
  }
})

$('#confirmCheckBox').click(function () {
  if ($(this).prop('checked')) {
    $('#errorSummary').addClass('hidden')
    $('#errorMessage').removeClass('govuk-form-group--error')
    $('#nationality-error').addClass('hidden')
  }
})

// $(".left-navigation li a").click(function(){
//   $(".report-view section").hide();
// });

$('.left-navigation-0 li a').click(function () {
  var tab_id = $(this).attr('data-tab')

  $('.left-navigation-0 li a').removeClass('govuk-!-font-weight-bold')
  $('.left-navigation-0 li a').removeClass('active')
  $('.report-view section').removeClass('current')

  $(this).addClass('govuk-!-font-weight-bold')
  $(this).addClass('active')
  $('#' + tab_id).addClass('current')

  e.preventDefault()
});



$('.left-navigation li a').click(function () {
  var tab_id = $(this).attr('data-tab')

  $('.left-navigation li a').removeClass('govuk-!-font-weight-bold')
  $('.left-navigation li a').removeClass('active')
  $('.report-view section').removeClass('current')

  $(this).addClass('govuk-!-font-weight-bold')
  $(this).addClass('active')
  $('#' + tab_id).addClass('current')

  e.preventDefault()
});

$(document).ready(function () {

  if(window.location.href.indexOf("dashboard") > -1) {
    $('.left-navigation-2 li #0').addClass('active');
    $('.left-navigation-2 li #0').addClass('govuk-!-font-weight-bold');     
 }

  if(window.location.href.indexOf("latest-submissions") > -1) {
     $('.left-navigation-2 li #1').addClass('active');
     $('.left-navigation-2 li #1').addClass('govuk-!-font-weight-bold');     
  }

  if(window.location.href.indexOf("historical-in-period") > -1) {
     $('.left-navigation-2 li #2').addClass('active');
     $('.left-navigation-2 li #2').addClass('govuk-!-font-weight-bold');
  }

  if(window.location.href.indexOf("period-end") > -1) {
     $('.left-navigation-2 li #3').addClass('active');
     $('.left-navigation-2 li #3').addClass('govuk-!-font-weight-bold');
  }

  if(window.location.href.indexOf("qar") > -1) {
     $('.left-navigation-2 li #4').addClass('active');
     $('.left-navigation-2 li #4').addClass('govuk-!-font-weight-bold');
  }

  if(window.location.href.indexOf("frm") > -1) {
     $('.left-navigation-2 li #5').addClass('active');
     $('.left-navigation-2 li #5').addClass('govuk-!-font-weight-bold');
  }
});


$(document).ready(function () {

  if(window.location.href.indexOf("dashboard") > -1) {
    $('.top-nav li #0').addClass('active');
    $('.top-nav li #0').addClass('govuk-!-font-weight-bold');     
 }

  if(window.location.href.indexOf("dash-2") > -1) {
     $('.top-nav li #1').addClass('active');
     $('.top-nav li #1').addClass('govuk-!-font-weight-bold');     
  }

});


$('#startHelp').click(function(e){
  $('#ob1').show();

  e.preventDefault();

});

$('.close').click(function(e){
  $(this).parent().hide();

  e.preventDefault();
});

$('.next').click(function(e){
  $('#ob1').hide();
  $('#ob2').show();

  e.preventDefault();
});

$('.next2').click(function(e){
  $('#ob2').hide();
  $('#ob3').show();

  e.preventDefault();
});

$('.next3').click(function(e){
  $('#ob3').hide();
  $('#ob4').show();

  e.preventDefault();
});

$('.next4').click(function(e){
  $('#ob4').hide();
  $('#ob5').show();

  e.preventDefault();
});

$('.next5').click(function(e){
  $('#ob5').hide();
  $('#ob6').show();

  e.preventDefault();
});

$('.next6').click(function(e){
  $('#ob6').hide();
  // $('#ob1').show();

  e.preventDefault();
});


var distance = $('#left-nav-wrapper').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".back-to-top").removeClass("hidden");
    } else {
      $(".back-to-top").addClass("hidden");
  }
});



$(window).scroll(function () {
  var windscroll = $(window).scrollTop()
  if ($(window).width() > 640) {
    if (windscroll >= 500) {
      $('#nav li a').addClass('active')
      $('.wrapper').each(function (i) {
        if ($(this).position().top <= windscroll - 0) {
          $('#nav li a.active').removeClass('active')
          $('#nav li a').eq(i).addClass('active')
        }
      })
    } else {
      $('#nav').removeClass('active')
      $('#nav li a.active').removeClass('active')
      $('#nav li a:first').addClass('active')
    }
  }
}).scroll()

var $window = $(window)
// var distance = ($sticky.length) ? stickyOffset.top : 0
var distance = $('.sticky').offset().top
$window.scroll(function () {
  if ($window.scrollTop() >= distance) {
    $('.sticky').addClass('stuck')
  } else {
    $('.sticky').removeClass('stuck')
  }
})



