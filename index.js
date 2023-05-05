const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1Div = document.getElementById("password1-div")
let password2Div = document.getElementById("password2-div")
let lengthPassword = 0

function size10() 
{
    lengthPassword = 10
}

function size15() 
{
    lengthPassword = 15
}

function size18() 
{
    lengthPassword = 18
}

function generatePassword()
{
    let password1 = ""
    let password2 = ""
    if (lengthPassword === 0 || lengthPassword == 15)
    {
        for (let i = 0; i < 15; i++)
        {
            let index1 = Math.floor(Math.random() * characters.length)
            password1 += characters[index1]
            let index2 = Math.floor(Math.random() * characters.length)
            password2 += characters[index2]
        }
    }
    else if (lengthPassword === 10)
    {
        for (let i = 0; i < 10; i++)
        {
            let index1 = Math.floor(Math.random() * characters.length)
            password1 += characters[index1]
            let index2 = Math.floor(Math.random() * characters.length)
            password2 += characters[index2]
        }
    }
    else
    {
        for (let i = 0; i < 18; i++)
        {
            let index1 = Math.floor(Math.random() * characters.length)
            password1 += characters[index1]
            let index2 = Math.floor(Math.random() * characters.length)
            password2 += characters[index2]
        }
    } 
    
    password1Div.textContent = password1
    password2Div.textContent = password2 
}

