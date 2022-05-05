function converter(){
    var unos = parseInt(document.getElementById('unos').value);
    var convert = document.getElementById('convert').value;
    var convert2 = document.getElementById('convert2').value;
    var cv = "";
    if(convert == "KN" && convert2 =="KN"){
        document.getElementById("cv12").innerHTML = unos;
    }
    if(convert == "KN" && convert2 =="eu"){
        cv = unos * 0.13;
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "KN" && convert2 =="usd"){
        cv = unos * 0.14;
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "eu" && convert2 =="KN"){
        cv = unos * 7.55;
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "eu" && convert2 =="usd"){
        cv = unos *1.06;
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "eu" && convert2 =="eu"){
        cv = unos
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "usd" && convert2 =="KN"){
        cv = unos * 7.13;
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "usd" && convert2 =="eu"){
        cv = unos * 0.94;
        document.getElementById("cv12").innerHTML = cv;
    }
    if(convert == "usd" && convert2 =="usd"){
        cv = unos
        document.getElementById("cv12").innerHTML = cv;
    }

  }