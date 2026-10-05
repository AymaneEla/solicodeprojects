let totaleLines="3";

for(line =1; line<= totaleLines; line++){
    let text =""
    for(let space=1;space<=totaleLines-line;space++){
        text= text+" "
    }
    for(let star=1; star<= 2*line -1;star++){
        text =text+"*"
    }
    console.log(text);
}