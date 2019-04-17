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
    

    $('#a2').append(data[0].forecasted);
    $('#b2').append(data[0].delivery);
    $('#c2').append(data[0].total);

    $('#a3').append(data[1].forecasted);
    $('#b3').append(data[1].delivery);
    $('#c3').append(data[1].total);

    $('#a4').append(data[2].forecasted);
    $('#b4').append(data[2].delivery);
    $('#c4').append(data[2].total);

    $('#a5').append(data[3].forecasted);
    $('#b5').append(data[3].delivery);
    $('#c5').append(data[3].total);

    $('#a6').append(data[4].forecasted);
    $('#b6').append(data[4].delivery);
    $('#c6').append(data[4].total);

    $('#a7').append(data[5].forecasted);
    $('#b7').append(data[5].delivery);
    $('#c7').append(data[5].total);

    $('#a8').append(data[6].forecasted);
    $('#b8').append(data[6].delivery);
    $('#c8').append(data[6].total);

    $('#a9').append(data[7].forecasted);
    $('#b9').append(data[7].delivery);
    $('#c9').append(data[7].total);

    $('#a10').append(data[8].forecasted);
    $('#b10').append(data[8].delivery);
    $('#c10').append(data[8].total);

    $('#a11').append(data[9].forecasted);
    $('#b11').append(data[9].delivery);
    $('#c11').append(data[9].total);

    $('#12').append(data[10].total);

    if (data[0].banner == '1') {
      $('.information-banner').removeClass('hidden');
    }

    console.log(data);
  }
