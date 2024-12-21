async function i(){
    console.info("подаждите...")
    try {
        const res = await fetch('https://httpbin.org/status/200,500');
    
    if(res.ok){
        console.log("Good");
    } else {
        console.error("ERROR");
    }
    
    } catch(error) {
        console.log('Error');
    }
}

i();