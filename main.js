//обьевляем асинхронную фнукцию
async function i(){
    console.info("подаждите...")
    //в блоке try - обрабатывается запрос
    try {
        //отправляем запрос к серверу
        const res = await fetch('https://httpbin.org/status/200,500');
    
    //если успешное соеденение и данные полчены то тогда выводим 'Good'
    if(res.ok){
        console.log("Good");
    } 
    //если ошибка то тогда выводим 'ERROR;
    else {
        console.error("ERROR");
    }
    
    //если сервер вернул ошибку то тогда запрос будет перехвачено блоком 'catch'
    } catch(error) {
        console.log('Error');
    }
}

//вызываем фнукцию
i();