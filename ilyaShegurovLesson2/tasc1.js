// Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; 
alert("получается  тк при префиксе сначала увл число а потом выводим значение c ="+c);  
d = b++; 
alert("при постфиксе сначала выводим число а потом увеличиваем значение d ="+d); 
c = (2+ ++a); 
alert(" 2 прибавляется к 1 и к 2 тк значение а из первого примера 2 сохранилось c = "+c); 
d = е(2+ b++); 
alert("2 прибавляется к 2 тк  б уже увеличили d =: "+d);
alert("( 1 значение а начальное + значение из с где а=1  и  с где 1из = 3 )a = 3" + a); 
alert(" тоже самое  b ="+b); 

