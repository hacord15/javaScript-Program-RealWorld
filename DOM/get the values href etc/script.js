function getAttributes(){
    //Getting the href value of the href attribute
    var u =document.getElementById('w3r').href;
    alert('The value of the href attribute '+ u);
    
    var v =document.getElementById('w3r').hreflang;
    alert('getting the value of hreflang '+v);
    
    var w = document.getElementById("w3r").rel; 
    // Alerting the value of the rel attribute
    alert('The value of the rel attribute of the link is : '+w);
    // Getting the target attribute value of the link
    var x = document.getElementById("w3r").target; 
    // Alerting the value of the target attribute
    alert('The value of the target attribute of the link is : '+x);
    // Getting the type attribute value of the link
    var y = document.getElementById("w3r").type; 
    // Alerting the value of the type attribute
    alert('The value of the type attribute of the link is : '+y);  


}