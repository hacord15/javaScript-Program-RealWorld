function getOptions(){
    var x = document.getElementById('mySelect');

    var l = x.length;
    var txt1 = "No. of items :" +l;
    var optionsText = Array.from(x.options).map(option => option.text).join("\n");
    
    txt1 += "\n" + optionsText;

    alert(txt1);
}