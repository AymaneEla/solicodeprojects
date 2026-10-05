let totaleLines2 =7;
    for(let line2=totaleLines2; line2 >= 1; line2--){
        let text2= "";
        for(let space2 = 1; space2 <= totaleLines2-line2; space2++){
            text2= text2+" ";
        }
        for(let star2=1; star2<=2*line2-1; star2++){
            text2=text2+"*"
        }
        console.log(text2);
    }