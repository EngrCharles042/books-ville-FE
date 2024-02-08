export const reducer = (arr) => {
    const val = 0;

    arr.array.forEach(element => {
        val += element.price;
    });

    return val;
}