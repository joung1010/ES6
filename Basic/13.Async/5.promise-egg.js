function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg}=> fryEgg`);
}

function getChicken() {
    return Promise.reject(new Error('치킨이 없음'));
    // return Promise.resolve(`get Chicken`);
}

/*fetchEgg('chiken')
    .then( console.log);*/

getChicken()
    .catch((error) => {
        console.log(error.name)
        return 'basic chicken';
    })
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)

