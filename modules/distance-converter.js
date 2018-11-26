const milesToKilometers = miles => {
    // console.log(miles);
    return miles * 1.60934;
};

const inchToCentimeter = inches => {
    // console.log(inches);
    return inches * 2.54;
}

const distanceConverter = {
    mTK: milesToKilometers,
    iTC: inchToCentimeter
};

export default distanceConverter;