window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1D-z43orsiDv58r4pw6e97Bo1Bl0UZiHy1UOJYnrd4Io/edit?usp=sharing';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    // var tr;
    // for (var i = 0; i < data.length; i++) {
    //   tr = $('<tr class="govuk-table__row" />');
    //   tr.append("<td>" + data[i].amount + "</td>");
    //   $('#fill1').append(tr);
    // }
    //
    // for (var i = 0; i < data.length; i++) {
    //   tr = $('<tr class="govuk-table__row" />');
    //   tr.append("<td>" + data[i].amount + "</td>");
    //   $('#fill2').append(tr);
    // }
    // $('#bannerText').append(data[1].banner);
    // $('#bannerText2').append(data[2].banner);
    // $('#bannerText3').append(data[3].banner);
    // $('#bannerText4').append(data[4].banner);
    // $('#bannerText5').append(data[5].banner);
    // $('#bannerText6').append(data[6].banner);
    // $('#bannerText7').append(data[7].banner);
    // $('#bannerText8').append(data[8].banner);
    // $('#bannerText9').append(data[9].banner);
    // $('#bannerText10').append(data[10].banner);

    // $('#bannerCont').append(data[1].context);
    // $('#bannerCont2').append(data[2].context);
    // $('#bannerCont3').append(data[3].context);
    // $('#bannerCont4').append(data[4].context);
    // $('#bannerCont5').append(data[5].context);
    // $('#bannerCont6').append(data[6].context);
    // $('#bannerCont7').append(data[7].context);
    // $('#bannerCont8').append(data[8].context);
    // $('#bannerCont9').append(data[9].context);
    // $('#bannerCont10').append(data[10].context);


    // $('#a2').append(data[0].forecasted);
    // $('#b2').append(data[0].delivery);
    // $('#c2').append(data[0].total);

    // $('#a3').append(data[1].forecasted);
    // $('#b3').append(data[1].delivery);
    // $('#c3').append(data[1].total);

    // $('#a4').append(data[2].forecasted);
    // $('#b4').append(data[2].delivery);
    // $('#c4').append(data[2].total);

    // $('#a5').append(data[3].forecasted);
    // $('#b5').append(data[3].delivery);
    // $('#c5').append(data[3].total);

    // $('#a6').append(data[4].forecasted);
    // $('#b6').append(data[4].delivery);
    // $('#c6').append(data[4].total);

    // $('#a7').append(data[5].forecasted);
    // $('#b7').append(data[5].delivery);
    // $('#c7').append(data[5].total);

    // $('#a8').append(data[6].forecasted);
    // $('#b8').append(data[6].delivery);
    // $('#c8').append(data[6].total);

    // $('#a9').append(data[7].forecasted);
    // $('#b9').append(data[7].delivery);
    // $('#c9').append(data[7].total);

    // $('#a10').append(data[8].forecasted);
    // $('#b10').append(data[8].delivery);
    // $('#c10').append(data[8].total);

    // $('#a11').append(data[9].forecasted);
    // $('#b11').append(data[9].delivery);
    // $('#c11').append(data[9].total);

    // $('#12').append(data[10].total);

    // if (data[0].banner == '1') {
    //   $('.information-banner').removeClass('hidden');
    // }

    // $('#returnPeriodName').text(data[0].test);

    $('#journey').append(data[0].journey);


    if (data[0].fc == 'closed') {
      $('#fcTile').hide();
      $('#fcTileView').show();
      $('#fcStatus').text('Opens on 5 October 2019');
      
      
    } else if (data[0].fc == 'open') {
      $('#fcTile').show();
      $('#fcTileView').hide();
      $('.interruption-card.hidden').show();
      $('#fcStatus').text('Open for submission');
      $('#reviewAndEdit').show();
    } 
      else if (data[0].fc == 'na') {
      $('#fcTile').hide();
      $('#fcTileView').hide();
    }


    if (data[0].reports == 'hide') {
      $('#reportsTile').hide();
    } else {
      $('#reportsTile').show();
    }

    if (data[0].ilr == 'hide' && data[0].eas == 'hide' && data[0].esf == 'hide' && data[0].esfr == 'hide' && data[0].fc == 'na' ) {
      $('#makeSubmission').hide();
    }

    //******************* ORIGINAL VERSION *******************//

    // if (data[0].journey == 'no-open-period') {
    //   $('#returnPeriodStatus').text('R06 opens on 17 January 2020');
    //   $('#ilrItnButton').attr("href", "./choose_file_to_upload_closed.html");
    //   $('#easTile').hide();
    //   $('#esfTile').hide();
    //   $('.period-status').text('R06 validation only');
    //   $('#returnPeriodName').text('Return Period 6 (R06)');
    //   $('#returnOpeningTime').text('R06 opens on Friday 17 January 2020');
    //   $('.period-title').text('Return period 6 is not open');
    //   // $('#r06Table').hide();
    //   $('#r06Header').text('R05');
      

    //   if (data[0].ilr == 'hide') {
    //     $('#ilrTile').hide();
    //   } else {
    //     $('#ilrTile').show();
    //   }
    // }


    if (data[0].journey == 'no-open-period') {
      $('#returnPeriodStatus').text('R06 opens on 17 January 2020');
      $('#ilrItnButton').attr("href", "./choose_file_to_upload_closed.html");
      $('.period-status').text('R06 validation only');
      $('#easTile .warning-info').text('R06 closed');
      $('#easTile a').attr("href", "what_data_do_you_want_to_submit_closed");
      $('#esfTile .warning-info').text('Closed');
      $('#esfTile a').attr("href", "what_data_do_you_want_to_submit_closed");
      $('#easTile').show();
      $('#esfTile').show();
      $('#returnPeriodName').text('Return Period 6 (R06)');
      $('#returnOpeningTime').text('R06 opens on Friday 17 January 2020');
      $('.period-title').text('Return period 6 is not open');
      // $('#r06Table').hide();
      $('#r06Header').text('R05');
      

      if (data[0].ilr == 'hide') {
        $('#ilrTile').hide();
      } else {
        $('#ilrTile').show();
      }
      
      if (data[0].eas == 'hide') {
        $('#easTile').hide();
      } else {
        $('#easTile').show();
      }
      
      if (data[0].esf == 'hide') {
        $('#esfTile').hide();
      } else {
        $('#esfTile').show();
      }
      
      if (data[0].esfr == 'hide') {
        $('#esfrTile').hide();
      } else {
        $('#esfrTile').show();
      }
    }

    if (data[0].journey == '1-open-period') {
      $('#returnPeriodStatus').text('R06 closes in 6 days');
      $('#ilrItnButton').attr("href", "./choose_file_to_upload.html");
      $('#easTile').show();
      $('#esfTile').show();
      $('.period-status').text('R06 is open');
      $('#esfTile .period-status').text('Open');
      $('#returnPeriodName').text('Return Period 6 (R06)');
      $('#r06Header').text('R06');
      $('#returnOpeningTime').hide();
      

      if (data[0].ilr == 'hide') {
        $('#ilrTile').hide();
      } else {
        $('#ilrTile').show();
      }
  
      if (data[0].eas == 'hide') {
        $('#easTile').hide();
      } else {
        $('#easTile').show();
      }
  
      if (data[0].esf == 'hide') {
        $('#esfTile').hide();
      } else {
        $('#esfTile').show();
      }

      if (data[0].esfr == 'hide') {
        $('#esfrTile').hide();
      } else {
        $('#esfrTile').show();
      }
    }
 
    if (data[0].journey == '1-open-1-validation') {
      $('#returnPeriodStatus').text('R02 closes in 4 days, R13 opens on 26 September');
      $('#ilrItnButton').attr("href", "./choose_period_closed.html");
      $('#easTile a').attr("href", "./eas_choose_file_to_upload.html");
      $('#reportsTile a').attr("href", "latest-submissions-overlapping");
      $('#1').attr("href", "latest-submissions-overlapping");
      $('#2').attr("href", "historical-in-period-overlapping");
      $('#easTile').show();
      $('#esfTile').show();
      $('.period-status').text('R02 open');
      $('.period-status-2').html('R02 open, R13 validation only');
      $('#esfTile .period-status').text('R02 is open');
      $('#viewReportsSubmittedButton').attr("href", "latest-submissions-overlapping.html");
      $('#returnPeriodName').text('Return period 13 (R13)');
      $('.period-title').text('Return period 13 is not open'); 
      $('#latestSubGreyText').text('View submissions from return period 2'); 
      $('#r13Table').hide();
      $('#r13Header').hide();

      // $('#periodClosedButton').click(function(){
      //   if ($('#return-period').is(':checked')) {
      //     $('#returnPeriodName').text(data[0].period);
      //     alert('r02')
      //   } else if ($('#return-period-2').is(':checked')) {
      //     $('#returnPeriodName').text(data[1].period);
      //     alert('r13')
      //   }
      // });
      
      if (data[0].ilr == 'hide') {
        $('#ilrTile').hide();
      } else {
        $('#ilrTile').show();
      }
  
      if (data[0].eas == 'hide') {
        $('#easTile').hide();
      } else {
        $('#easTile').show();
      }
  
      if (data[0].esf == 'hide') {
        $('#esfTile').hide();
      } else {
        $('#esfTile').show();
      }
      
      if (data[0].esfr == 'hide') {
        $('#esfrTile').hide();
      } else {
        $('#esfrTile').show();
      }
    }

    if (data[0].journey == '2-open-periods') {
      $('#returnPeriodStatus').text('R02 closes in 6 days, R13 closes in 2 days');
      $('#ilrItnButton').attr("href", "./choose_period.html");
      $('#easTile a').attr("href", "./choose_eas.html");
      $('#reportsTile a').attr("href", "latest-submissions-overlapping");
      $('#1').attr("href", "latest-submissions-overlapping");
      $('#2').attr("href", "historical-in-period-overlapping");
      $('#easTile').show();
      $('#esfTile').show();
      $('.period-status').text('R02 and R13 open');
      $('#esfTile .period-status').text('R02 is open');
      $('#viewReportsSubmittedButton').attr("href", "latest-submissions-overlapping.html");
      $('#returnPeriodName').text('Return period 13 (R13)');
      $('#latestSubGreyText').text('View submissions from return period 2 and return period 13'); 
      $('#returnOpeningTime').hide();

      if (data[0].ilr == 'hide') {
        $('#ilrTile').hide();
      } else {
        $('#ilrTile').show();
      }
  
      if (data[0].eas == 'hide') {
        $('#easTile').hide();
      } else {
        $('#easTile').show();
      }
  
      if (data[0].esf == 'hide') {
        $('#esfTile').hide();
      } else {
        $('#esfTile').show();
      }

      if (data[0].esfr == 'hide') {
        $('#esfrTile').hide();
      } else {
        $('#esfrTile').show();
      }
    }


    

    
      

    console.log(data);
  }
