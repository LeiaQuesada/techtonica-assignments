function invert(obj) {
    let newObj = {};

    // .entries() returns a 2D array
    for(let ele of Object.entries(obj)) {
        let key = ele[1];
        let value = ele[0];
        newObj[key] = value;
    }
    return newObj;
}
module.exports = invert;
// module.exports = { EventRecommender, User, Event}