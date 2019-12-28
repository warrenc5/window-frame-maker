var p= [430, 430, 865 ,865,600,600,600,600,860,860,740,740,740,740,800,800]
var m = 2500 //max length
var b = 0 //edge
var wm = -1 //min wasted
var qm = -1 //min quantiy
var i = 0;

function cut() {
    var l = 0 //length
    var q = 1 //quantity
    var w2 = 0 //wasted
    for ( j = 0 ; j < p.length ; j ++ ) {
      //print ( l + ' ' + p[j])
      l += p[j] 
      if ( l > (m - b) ) {
        q ++
        l -= p[j]
        j --
        w = (m - l)
        w2 += w
        //print (q + ' ' + l + ' ' + w + ' ' + w2)
        l = 0;
      }
    }
    //print (q + ' ' + w2)

    if ( wm == -1 || w2 < wm ) { 
      wm = w2
      print ( 'i:' + i + ' q:' + q + ' w:' + w2 + " * " + p ) 
    } 
    if ( qm == -1 || q < qm ) { 
      qm = q
      print ( 'i:' + i + ' q:' + q + ' w:' + w2 + " * " + p ) 
    } 
}

function shuffle(array) {
    for (var k = array.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = array[k];
        array[k] = array[j];
        array[j] = temp;
    }
}

var n = Math.pow(p.length,7)
print ('running ' + n + ' ' + new Date())

for ( i = 0 ; i < n ; i ++ )  { 
  shuffle(p)
  cut()
}
print ('done ' + n + ' ' + new Date())


//600	600	600	600	800	800	865	430	740	865	430	740	860	860	740	740
//430	740	600	860	430	740	740	740	865	865	860	600	600	600	800	800
//800	740	800	740	740	865	860	600	865	430	600	860	430	740	600	600
