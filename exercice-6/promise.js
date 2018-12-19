var timeout = function(resolve, rejet){
    setTimeout(() => rejet('timeout'),5000);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getStudents = function(resolve,reject){
    setTimeout(() => resolve([
        { name:"Dupont",cours: [1,2,3]},{ name:"Lea",cours: [2,4]},{ name:"Charles",cours: [1]}
    ]), getRandomInt(1000,2000));
};

var getCourses = function(resolve,reject){
    setTimeout(() => resolve([
        { id:1,name:"JS"},{ id:2,name:"PHP"},{ id:3,name:"ReactJS"},{ id:4,name:"Angular"},{ id:5,name:"CSS"}
    ]), getRandomInt(2000,4000));
};

var getAll = function(resolve,reject){
    setTimeout(() => resolve([
        { name:"Dupont",cours: [
            { id:1,name:"JS"},{ id:2,name:"PHP"},{ id:3,name:"ReactJS"}
        ]},
        { name:"Lea",cours: [
            { id:2,name:"PHP"},{ id:4,name:"Angular"}
        ]},
        { name:"Charles",cours: [{ id:1,name:"JS"}]}
    ]), getRandomInt(1000,4000));
};

var traitement = Promise
    .race([new Promise(getStudents), new Promise(timeout)])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

var traitement2 = Promise
    .race([new Promise(getCourses), new Promise(timeout)])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

var traitement3 = Promise
    .race([new Promise(getAll), new Promise(timeout)])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));