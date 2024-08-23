//Leetcode - 6. Zigzag Conversion
var convert = function(s, numRows) {

    if (numRows === 1 || s.length < numRows) {                                      //handling basecase
        return s;                                                   
    }

    let rows = [];                                                          //outer array to store other arrays
    let currentRow = 0;                                                     // indicate the current row
    let reverse = false;                                                    // indicates the direction
    let result = "";                                                        // to store final result

    for(let i=0; i<numRows; i++){
        rows[i] = [];                                                       //create empty rows
    }

    for(let i=0; i<s.length; i++){                                          //looping through the string to place in each rows
        rows[currentRow].push(s[i]);

        if(reverse === false){                                              //based on direction, increase or decrease the currentRow
            currentRow++;
        }else{
            currentRow--;
        }

        if(currentRow === numRows - 1 || currentRow === 0){                 //if we are either at first row or last row, change the direction
            reverse = !reverse;
        }
    }

    rows.forEach((row) => {                                                //looping through each array and store the character of each row as single string
        result += row.join("");
    })

    return result;
};

let s = "PAYPALISHIRING", numRows = 3;
console.log(convert(s, numRows));