var userInput = prompt('가위,바위,보를 입력')
console.log(userInput)
if(userInput == '가위' && userInput != '바위' && userInput != '보'){
    alert('가위,바위,보 중 하나 입력')
}else{
    var num = Math.floor(Math.random()*10);
    // 0 ~ 9 사이값을 구함
    // Math.ramdom() 난수(0~1값)
    // Math.floor() 소수점 버림
    console.log(num)

    var comInput='';
    var result='';

    // comInput
    if(num < 3){
        comInput = '가위';
    }else if(num < 6){
        comInput = '바위'
    }else{
        comInput = '보'
    }

    // result
    if(userInput == '가위'){
        if(comInput == '가위'){
            result = '비김';
        }else if(comInput == '바위'){
            result = '너 개못하자낰ㅋ'
        }else{
            result = '니가 이김'
        }
    }else if(userInput == '바위'){
        if(comInput == '가위'){
            result = '니가 이김';
        }else if(comInput == '바위'){
            result = '비김'
        }else{
            result = '너 개못하자낰ㅋ'
        }
    }else{
        if(comInput == '가위'){
            result = '너 개못하자낰ㅋ';
        }else if(comInput == '바위'){
            result = '니가 이김'
        }else{
            result = '비김'
        }

    }
    console.log(userInput)
    console.log(comInput)
    console.log(result)
    
}



