var fun1 = function () {
    var strValues = "abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
  }

var fun2 = function() {
    if(process.env.NODE_ENV == 1){
        return 'Training';
      }else if(process.env.NODE_ENV == 2){
        return 'Training2';
      }else if(process.env.NODE_ENV == 3){
        return 'DEV';
      }else{
        return 'Branch Server';
      }
}

var fun3 = function () {
    var strEmail = fun4();
    strEmail = strEmail + "@softbank.ne.jp";
    return strEmail;
}

var fun5 = function () {
  var strEmail = fun4();
  strEmail = strEmail + "@i.softbank.jp";
  return strEmail;
}

var fun4 = function () {
  return Math.random().toString(36).substr(6);
}

var fun6 = function () {
  return 'P0#' + fun4();
}

var fun7 = function () {
  return Math.ceil(Math.random()*10)%2 == 0 ? 'F' : 'M';
}

var fun8 = function (str, moneySymbol) {
  return parseInt(str.trim().replaceAll(moneySymbol, '').replaceAll(',', ''));
}

var fun9 = function (num, moneySymbol, withSymbol) {
    if(!/^(-|\+)?(\d+)(\.\d+)?$/.test(num)){
      return num;
    }
    var sign = RegExp.$1;
    var middle = RegExp.$2;
    var decimals = RegExp.$3;
    
    var reg = /(\d)(\d{3})(,|$)/
    while(reg.test(middle)){
      middle = middle.replace(reg,'$1,$2$3');
    }
    if(withSymbol)
      return moneySymbol + sign + "" + middle + "" + decimals;
    else
      return sign + "" + middle + "" + decimals;
}

var fun10 = function () {
  return 'P0' + fun11();
}

var fun11 = function () {
  return Math.random().toString(36).substr(7);
}

exports.getEmail = fun1;
exports.getEnv = fun2;
exports.getMMSEmail = fun3;
exports.getEmailIdentifier = fun4;
exports.getMobileEmail = fun5;
exports.getRandomPwd = fun6;
exports.getRandomGender = fun7;
exports.getPriceInt = fun8;
exports.getPriceFormatStr = fun9;
exports.getRandomPwdWithoutSymbol = fun10;
// exports.getPCUrl = fun4;
// exports.getMOUrl = fun5;