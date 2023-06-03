const createUniqueTag = (allInvoiceData) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const rnd = (returnNum = true, max = 9) => {
        let rndNum = Math.floor(Math.random() * (parseFloat(max) - parseFloat(0) + 1) + parseFloat(0));
        if(returnNum) return rndNum;
        return alphabet[rndNum];
    }
    let tag_ = rnd(false, 26) + rnd(false, 26) + rnd() + rnd() + rnd() + rnd();

    if (allInvoiceData.some(value => value.tag !== tag_)) return tag_;
    createUniqueTag();
}

export default createUniqueTag;