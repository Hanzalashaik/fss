import loading from "loading-cli"

function main(){
    let load=loading({
        color:"blue",
        // frames:["🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"],
        frames:[1,2,3,4,5],
        interval:200
    }).start();

    setTimeout(()=>{
        load.stop();
        console.log("Hello");
        
    },5000);
}

main()