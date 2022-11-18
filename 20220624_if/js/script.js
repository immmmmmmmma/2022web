const buttons = document.querySelectorAll('button');
const computerC = document.querySelectorAll('.com_c');
const userC = document.querySelectorAll('.user_c');
const winner = document.querySelectorAll('.result');

const result = ['가위', '바위','보'];

const show = (user, computer, result) => {
    computerC.innerHtml = computer;
    userC.innerHtml = user;
    winner.innerHtml = result;
};

const game = (user, computer) => {
    let message;

    if (user === computer) {
        console.log('비김!');
        message = '비김!'
    }else{
        switch (user + computer){
            case '가위보':
            case '바위가위':
            case '보바위':
                message = '사용자 승리!';
                console.log('사용자 승리!');
                //위가 참이면 브레이끄!
                break;
            case '가위바위':
            case '바위보':
            case '보가위':
                message = '컴 승리ㅠ';
                console.log('컴 승리ㅠ');
                break;
        }
    }
    show(user, computer, message);
};

const play = (event) => {
        const user = event.target.innerText; 
        const randomIndex = Math.floor(Math.random() * 3);
        const computer = result[randomIndex];
        game(user,computer); 
};

buttons.forEach((button) => {
    button.addEventListener('click', play);
});