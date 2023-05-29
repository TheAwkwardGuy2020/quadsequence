
function main(){
    //CACHE
    console.clear();
    var term1 = (Number (document.getElementById('term-1').value));
    var term2 = (Number (document.getElementById('term-2').value));
    var term3 = (Number (document.getElementById('term-3').value));
    var termNum = (Number (document.getElementById('termNum').value));
    var outputTerm = document.getElementById('nthTerm');
    var outputSum = document.getElementById('sumToNthTerm');
    var outputTermFormula = document.getElementById('genTermFormula');
    var outputSumFormula = document.getElementById('genSumFormula');

    // preparing simultanous equations
    var eq1 = term2 - term1;
    var eq2 = term3 - term2;

    // finding A
    var variableA = eq1 - eq2;
    variableA = variableA / -2;

    //finding B
     var variableB = 3 * variableA;
    variableB = eq1 - variableB;

    //finding C
    var variableC = variableA + variableB;
    variableC = term1 - variableC;

        // calculating nth term value
        var nthTermValue = variableA * termNum;
        nthTermValue = nthTermValue * termNum;
        var bN = variableB * termNum;
        nthTermValue = nthTermValue + bN;
        nthTermValue = nthTermValue + variableC;



        // calculating and assigning sum of N squares
        var sumOfNSquares = 2 * termNum * termNum * termNum;
        sumOfNSquares = sumOfNSquares + 3 * termNum * termNum;
        sumOfNSquares = sumOfNSquares + termNum;

        var blockA = sumOfNSquares * variableA;
        blockA = blockA /6;

        // calculating and assigning sum of N terms
        var sumOfN = termNum * termNum;
        sumOfN = sumOfN + termNum;

        var blockB = sumOfN * variableB;
        blockB = blockB / 2;

        // constant term calculation
        var blockC = variableC * termNum;

        // compiling sum of n terms
        var sumOfNTerms = blockA + blockB + blockC;

        // test logs
    console.log("Term-1: " + term1, "   Term-2:" + term2, "   Term-3:" + term3, "   Term No. " + termNum);
    console.log("Equation-1: " + eq1, "   Equation-2: " + eq2);
    console.log("A:" + variableA, "   B:" + variableB, "  C:" + variableC);
    console.log("Value of Nth Term:" + nthTermValue, "     Sum to N Terms:" + sumOfNTerms);

    var termFormula = "(" + variableA + ")" + "n^2 + " + "(" + variableB + ")" + "n + " + "(" + variableC + ")";
    var addSquare = 3 * variableA;
    addSquare = addSquare + 3 * variableB;
    var addConstant = variableA + variableB * 3;
    addConstant = addConstant + variableC * 6;
    var sumFormula = "(" + variableA * 2 + "n^3)/6  +  " + "(" + addSquare +"n^2)/6  +  " + "(" + addConstant + "n)/6";


    // output to html
    outputTerm.innerHTML = nthTermValue;
    outputSum.innerHTML = sumOfNTerms;
    outputTermFormula.innerHTML = termFormula;
    outputSumFormula.innerHTML = sumFormula;

    var combinedList = [];
    
    for(i = 1; i <= termNum; i++){
        var listNum = variableA * i;
        listNum = listNum * listNum;
        var bNList = variableB * i;
        listNum = listNum + bNList;
        listNum = listNum + variableC;
        combinedList.push(listNum);
    }
    console.log(combinedList);
    console.log(termNum);
        document.getElementById('termList').innerhtml = String.combinedList;
    
}