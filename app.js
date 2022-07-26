let display = document.getElementById("screen");
let buttons = document.getElementsByTagName("button");
let displayString = "";

for(i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        
        if(buttonText=='C') {
            displayString="";
            display.value=displayString;
        }
        else if(buttonText=='DEL') {
            displayString = displayString.substring(0,displayString.length-1);
            display.value=displayString;    
        }
        else if(buttonText=='=') {
            //checks if number is negative based on which arg1 is made negative
            let isNegative=0;
            if(displayString[0]=='-') {
                displayString = displayString.substring(1,displayString.length);
                isNegative = 1;
            }

            let arg1="", arg2="", mode=0, op, ans;
            
            for(it=0;it<displayString.length;it++) {
                if(!mode) {
                    if(displayString[it]=='+' || displayString[it]=='-' || displayString[it]=='*' || displayString[it]=='/' || displayString[it]=='%' || displayString[it]=='^') {
                        op = displayString[it];
                        mode=1;
                    }
                    else {
                        arg1 = arg1 + displayString[it];
                    }
                }
                else {
                    arg2 = arg2 + displayString[it];
                }
            }
            arg1 = Number(arg1);
            if(isNegative) {
                arg1 = - arg1;
            }
            arg2 = Number(arg2);

            switch(op) {
                case '+':
                    ans = arg1 + arg2;
                    break;
                case '-':
                    ans = arg1 - arg2;
                    break;
                case '*':
                    ans = arg1 * arg2;
                    break;
                case '/':
                    ans = arg1 / arg2;
                    break;
                case '%':
                    ans = arg1 % arg2;
                    break;
                case '^':
                    ans = arg1 ** arg2;
            }

            displayString = ans.toString();
            display.value = displayString;
        }
        else {
            displayString = displayString + buttonText;
            display.value = displayString;
        }
    });
}