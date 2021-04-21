export const _dateFormatter = (param) => {
  const date = new Date(param);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  let newdate = [year, month, day].join("-");
  let time = param.split('T')[1].slice(0, 5)
  let formetDateTime = newdate + ' ' + time

  var date1 = new Date(formetDateTime);
  var date2 = new Date();


  var diffInSeconds = Math.abs(date1 - date2) / 1000;
  var days = Math.floor(diffInSeconds / 60 / 60 / 24);
  var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
  var minutes = Math.floor(diffInSeconds / 60 % 60);

  var dateTime;
  var formet;
  let totaldays = ('0' + days).slice(-2)

  if (('0' + hours).slice(-2) === '00') {
    dateTime = ('0' + minutes).slice(-2)
    formet = 'minutes'
  } else {
    dateTime = ('0' + hours).slice(-2)
    formet = 'hours'
  }


  var finalEnlishToBanglaNumber = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯'
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    var retStr = this;
    for (var x in finalEnlishToBanglaNumber) {
      retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
    }
    return retStr;
  };


  console.log(totaldays)

  var bangla_converted_number = dateTime.getDigitBanglaFromEnglish();
  return {
    bangla_converted_number,
    formet,
    totaldays
  };

};