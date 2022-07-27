
// this length function is used to generate the length(row) of the grid
function length(size){
    let str7 
    let str8
    if(size%2==0){
        str7 =' '
        str8=''

        for(let i = 1; i <= size/2; i++){
            str7=str7+'# '
            str8=str8+'# '
                }
    }
    else{
         str7 =' '
         str8='#'

        for(let i = 1; i <= size/2; i++){
            str7=str7+'# '
            str8=str8+' #'
                }
    }
    
    let strBlock = str7+'\n'+str8 //This string forms the block for building the rest of the grid

    return strBlock
}


//This function is used to generate the last column when size is an odd number
function balance(size){
    let strBalance = ' '

    for(let i = 1; i <= size/2; i++){
        strBalance=strBalance+'# '
        
            }

    return strBalance          
}

//creates the grid
function gridGenerate(size){
    if(size % 2==0){

        //This block of code generates a grid when size is even
        let even=''
        for(let i = 1; i <= size/2; i++){
             even = even+'\n'+(length(size))
            
        }

        return even

    }else{
        //This block generates a grid when size is odd
        let odd=''

        for(let i = 1; i <= size/2; i++){

            odd =odd+'\n'+ length(size)
            }

            odd =odd+'\n'+balance(size)

        return odd
        
    }
    
}

console.log(gridGenerate(5))//prints a 5X5 grid to show it works for an odd value
console.log(`--------------------------------------------------------------------`)
console.log(gridGenerate(8))//prints an 8x8 grid to show that it works for an even value

//please note that the size variable is used to generate a grid of equal height and lenght
//example size = 7 generates a 7x7 grid
//also size 1 returns " "