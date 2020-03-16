var rad, memory, backspase, clear, plus, minus, multy, divide, power,
pers, empty1, empty2, cos, sin, tg, ctg, num1, num2, num3, num4, num5,
num6, num7, num8, num9, num0, dot, equality, display, num, a, b, c, d, k, l;
var flag = 0;
var flageq = 0;
var gradus = 0;
var g = 1;
var f=1;
var ul = document.querySelector('ul');
var li = document.querySelector('li');
var key = [];
var mini = document.querySelector('.mini');
  mini.style.display = 'none';
[rad, memory, backspase, clear, plus, minus, multy, divide, power,
    pers, empty1, empty2, cos, sin, tg, ctg, num1, num2, num3, num4, num5,
    num6, num7, num8, num9, num0, dot, equality] = 
[document.querySelector(".rad"), document.querySelector(".memory"),
 document.querySelector(".backspase"), document.querySelector(".clear"), document.querySelector(".plus"),
 document.querySelector(".minus"), document.querySelector(".multy"), document.querySelector(".divide"),
 document.querySelector(".power"), document.querySelector(".pers"), document.querySelector(".empty1"),
 document.querySelector(".empty2"), document.querySelector(".cos"), document.querySelector(".sin"),
 document.querySelector(".tg"), document.querySelector(".ctg"), document.querySelector(".num1"),
 document.querySelector(".num2"), document.querySelector(".num3"), document.querySelector(".num4"),
 document.querySelector(".num5"), document.querySelector(".num6"), document.querySelector(".num7"),
 document.querySelector(".num8"), document.querySelector(".num9"), document.querySelector(".num0"),
 document.querySelector(".dot"), document.querySelector(".equality")];
 display = document.querySelector(".show");

num = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0];
//функция введения минуса
empty1.addEventListener( "click" , function(){
    if(display.innerHTML === "")
    display.innerHTML = "-"});
//функция записи чисел
for(let i = 0; i <= 9; i++){num[i].addEventListener( "click" , () => display.innerHTML += num[i].textContent);};
//функция обнуления табло
var zero = function(){
    display.innerHTML = "";
    flag = 0;
};
clear.addEventListener( "click" , () => display.innerHTML = "");
clear.addEventListener( "click" , () => flag = 0);
clear.addEventListener( "click" , () => a = 0);
clear.addEventListener( "click" , () => b = 0);
clear.addEventListener( "click" , () => flageq = 0);
//функция введения точки
dot.addEventListener( "click" , function(){
    if (display.innerHTML === ""){
        display.innerHTML = "0"+dot.textContent;
        flag = 1;
    } else{
    if (flag == 0){
        display.innerHTML += dot.textContent;
        flag = 1;
    } else{
        alert('Вводить точку дважды запрещено');
    }}
});
//функция памяти открыть/закрыть
var m = 0;
memory.addEventListener( "click" , function(){
    if (m === 0){
      m = 1;
      ul.style.display = 'flex';
      mini.style.display = 'block';
    }else{
        m = 0;
        ul.style.display = 'none';
        mini.style.display = 'none';
    }
});
//функция градусы/радианы
rad.addEventListener( "click" , function(){
    if (gradus === 0){
       gradus = 1;
       rad.innerHTML = '&#176/rad';
       g = 180 / Math.PI;
    }else{
        rad.innerHTML = 'rad/&#176';
        gradus = 0;
        g = 1;
    }
});
//функция создания лишек
var liMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

  };
 
//функция сложения
plus.addEventListener( "click" , function(){
    if(flageq == 0 && display.innerHTML !=="" && display.innerHTML !== "-"){
    a = Number(display.innerHTML);
    console.log(a);
    zero();
    flageq = 1;}else{alert("Ошибка ввода")};   
});
//функция вычитания
minus.addEventListener( "click" , function(){
    if(flageq == 0 && display.innerHTML !=="" && display.innerHTML !== "-"){
    a = Number(display.innerHTML);
    console.log(a);
    zero();
    flageq = 2;}else{alert("Ошибка ввода")};
});
//функция умножения
multy.addEventListener( "click" , function(){
    if(flageq == 0 && display.innerHTML !=="" && display.innerHTML !== "-"){
    a = Number(display.innerHTML);
    console.log(a);
    zero();
    flageq = 3;}else{alert("Ошибка ввода")};
});
//функция деления
divide.addEventListener( "click" , function(){
    if(flageq == 0 && display.innerHTML !=="" && display.innerHTML !== "-"){
    a = Number(display.innerHTML);
    console.log(a);
    zero();
    flageq = 4;}else{alert("Ошибка ввода")};
});
//функция определения остатка
pers.addEventListener( "click" , function(){
    if(flageq == 0 && display.innerHTML !=="" && display.innerHTML !== "-" && display.innerHTML !== "0" && display.innerHTML !== "-0"){
    a = Number(display.innerHTML);
    zero();
    flageq = 5;}else{alert("Ошибка ввода")};
});
//функция возведения в степень
power.addEventListener( "click" , function(){
    if(flageq == 0 && display.innerHTML !=="" && display.innerHTML !== "-"){
    a = Number(display.innerHTML);
    zero();
    flageq = 6;}else{alert("Ошибка ввода")};
});
//функция косинус.....
cos.addEventListener( "click" , function(){
    if(display.innerHTML !=="" && display.innerHTML !== "-"){
        c = Number(display.innerHTML);
    d = Math.cos(c / g);
    };
    display.innerHTML = Number(d.toFixed(4).replace(/0*$/,""));
    flag = 1;
});
sin.addEventListener( "click" , function(){
    if(display.innerHTML !=="" && display.innerHTML !== "-"){
        c = Number(display.innerHTML);
    d = Math.sin(c / g);
    };
    display.innerHTML = Number(d.toFixed(4).replace(/0*$/,""));
    flag = 1;
});
tg.addEventListener( "click" , function(){
    if(display.innerHTML !=="" && display.innerHTML !== "-"){
        c = Number(display.innerHTML);
    d = Math.tan(c / g);
    };
    display.innerHTML = Number(d.toFixed(4).replace(/0*$/,""));
    flag = 1;
});
ctg.addEventListener( "click" , function(){
    if(display.innerHTML !=="" && display.innerHTML !== "-"){
        c = Number(display.innerHTML);
    d = 1/Math.tan(c / g);
    };
    display.innerHTML = Number(d.toFixed(4).replace(/0*$/,""));
    flag = 1;
});
//функция факториал
empty2.addEventListener( "click" , function(){
    if(display.innerHTML !=="" && display.innerHTML !== "-"){
        c = Number(display.innerHTML);
        for(var j = 0; j < c; j++){
            f *= j + 1;
            console.log(f);
        }
    };
    if(Math.round(c) !== c || c !== Math.abs(c)){alert('Введите целое положительное число!!!')}else
    {display.innerHTML = f;
    flag = 1;
    f = 1;}
    
});
//функция вычисления /=
equality.addEventListener( "click" , function(){
    if(flageq === 0){
        alert("Ошибка ввода");}
    if(flageq === 1){
        b = Number(display.innerHTML);
        console.log(b);
        c = a + b;
        zero();
        flag = 1;
        flageq = 0;
        k = '+';}
    if(flageq === 2){
        b = Number(display.innerHTML);
        console.log(b);
        c = a - b;
        zero();
        flag = 1;
        flageq = 0;
        k = '-';}
    if(flageq === 3){
        b = Number(display.innerHTML);
        console.log(b);
        c = a * b;
        zero();
        flag = 1;
        flageq = 0;
        k = '*';}
    if(flageq === 4){
        b = Number(display.innerHTML);
        if(b !== 0 && b!==-0 && b !=="")
        {console.log(b);
        c = a / b;
        zero();
        flag = 1;
        flageq = 0;
        k = '/';}else{alert('Ошибка! Деление на ноль!')}}
    if(flageq === 5){
        b = Number(display.innerHTML);
        if(Math.abs(a)>Math.abs(b)){
        c = a % b;
        zero();
        display.innerHTML = 'Остаток: ' + Number(c.toFixed(4).replace(/0*$/,""));
        flag = 1;
        flageq = 0;
        k = '%';}else{alert('Модуль делимого должен быть больше модуля делителя!');}}
    if(flageq === 6){
        b = Number(display.innerHTML);
        console.log(b);
        c = a ** b;
        zero();
        flag = 1;
        flageq = 0;
        k = '**';}
//блок составления записи в память
        liMaker(a + k + b + "=" + c);
        console.log(ul.lastChild.textContent);
        if(ul.children.length > 3){
            ul.removeChild(ul.firstElementChild);
        }
//Вывод решения для простых операторов
        display.innerHTML = Number(c.toFixed(4).replace(/0*$/,""));
});
//функция стирания последней цифры
backspase.addEventListener( "click" , function(){
    if(display.innerHTML !=="" && display.innerHTML !=="-" && display.innerHTML !=="0"){
        display.innerHTML = parseInt(Number(display.innerHTML)/10);}else{
            display.innerHTML = "";
        }    
});