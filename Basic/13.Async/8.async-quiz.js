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

async function makeFriedEgg() {
    let chicken
    try {
        chicken = await getChicken();
    } catch (error){
        chicken = 'basic Chicken';
    }
    const egg = await fetchEgg(chicken);
    return  fryEgg(egg);
}

makeFriedEgg()
    .then(console.log);

