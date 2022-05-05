function Dodaj(){
     var Ime=$("#imeinput").val();
     var Prezime=$("#prezimeinput").val();
     var Jmbag=$("#jmbag").val();
     var Oib=$("#oib").val();
     var Datum=$("#datum").val();
     var Adresa=$("#adresa").val();
     var Grad=$("#grad").val();
     var Pbr=$("#pbr").val();
     var prvo = Datum.slice(0, 2);
     var godina1="";
     var godina2 ="";
     var mjesec1="";
     var mjesec2="";
     var dan="";
     var datum2="";
     
     if(prvo <= 31 && prvo > 0)
     {
         dan = prvo;
         if(Datum.substr(2, 1) == "-")
         {
           if(Datum.slice(3, 5) <= 12)
           {
               mjesec1=Datum.slice(3, 5);
            if(Datum.substr(5, 1) == "-")
            {
                if(Datum.slice(6, 10) <= 2021)
                {
                    godina1 =Datum.slice(6, 10);
                    datum2=godina1+"-"+mjesec1+"-"+dan;
                    alert(datum2);
                }
            }
           }
           else if (Datum.slice(3, 5) >12)
           {
               alert("pogrešno upisan mjesec");
           }
           else if(Datum.slice(3, 4) <=12  )
           {
               mjesec2 =Datum.slice(3, 4);
            if(Datum.substr(4, 1) == "-")
            {
                if(Datum.slice(5, 9) <= 2021)
                {
                    godina2=Datum.slice(5, 9);
                    datum2=godina2+"-"+mjesec2+"-"+dan;
                    alert(datum2);
                }
            }
           }
         }
     }
     
   
  if(Ime.length == 0 || Prezime.length ==0 || Jmbag.length != 13 ||Oib.length != 11 ||Datum.length == 0 || Adresa.length == 0  || Grad.length == 0 || Pbr.length == 0 )
  {
      alert("Popunite sva polja pravilno");
  }
  else{
    const Student = {Ime:Ime, Prezime:Prezime, Jmbag:Jmbag, Oib:Oib, Datum:datum2, Adresa:Adresa, Grad:Grad, Pbr:Pbr};
   
    console.log(Student);
  }
    
    }
