function checkMoney(money) {
    new Promise((resolve, reject) => {
        console.log('Calculating money');
        setTimeout(() => {
            if (money > 1000000000) {
                console.log(`${money} đủ tiền mua ô tô`)
            }else {
                console.log(`${money} không đủ tiền mua ô tô `)
            }
        },1000)
    })
        .then((data) =>console.log(data))
        .catch((err) => console.log(err.message))
}
checkMoney(2000000000);
checkMoney(123123123);
checkMoney(1000000);
checkMoney(12000000000)
