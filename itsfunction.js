$(document).ready(alert("HIIIIIII"))
//Fucking variables declaring madness]
let theRange, theStaticRange, complete, staticComplete, tableContent



function Add(){
    //const table = document.getElementById("dataTable")
    //var str = "<tr><td>a</td><td>s</td><td>d</td><td>f</td></tr>" ;
    //alert(table.dataset)
    //$('#dataTable tbody').append(str);
    const numberOfTeams = Number(document.getElementById("number").value)
    if(numberOfTeams >= 0) {

    }
    alert("you are choosing "+String(numberOfTeams)+" teams")
    const factorial = Factorial(numberOfTeams)/Factorial( numberOfTeams-2)/2
    alert("There are "+factorial+" possible combinations.")
    let columns = Math.round(numberOfTeams/2)

    //if the number is even
    let rows, cells
    if(numberOfTeams/2 == columns) {
        rows = factorial/columns
        cells = factorial
    } else {
        rows = factorial/(columns + 1)
        columns++
        cells = factorial+rows
    }

    const resultDay = Math.ceil(rows/5)
    alert('The number of day is : '+resultDay+" day.")

    //find all possible combinations for the teams
    theRange = Array.from(new Array(numberOfTeams+1), (x, i) => i)
    console.log(theRange)
    theRange.splice(0,1) //
    theStaticRange = Array.from(new Array(numberOfTeams+1), (x, i) => i)
    theStaticRange.splice(0,1)
    console.log(theRange)
    complete = []
    staticComplete = []
    for( let x in theStaticRange){
        theRange.splice(theRange.indexOf(x),1)
        for(let things in theRange){
            complete.push(String(numberOfTeams)+'-'+String(things))
            staticComplete.push(String(numberOfTeams)+'-'+String(things))
        }
    }
    alert("This is the complete list of every posiible combination of the match possible.")
    console.log(complete)
}



function Factorial(n){
    var f = [];
    
    function factorial (n) {
      if (n == 0 || n == 1)
        return 1;
      if (f[n] > 0)
        return f[n];
      return f[n] = factorial(n-1) * n;
    }
    return factorial(n)
}

