const multiplosTres = "MultiplosTres";
const multiplosCinco = "MultiplosCinco";
const multiplosTresmultiplosCinco = "MultiplosTresMultiplosCinco";

module.exports = {

    processInterger: function (integer) {
        if (integer % 3 === 0 && integer % 5 === 0)
            return multiplosTresmultiplosCinco
        if (integer % 3 === 0)
            return multiplosTres;
        if (integer % 5 === 0)
            return multiplosCinco;
        return integer
    }
};