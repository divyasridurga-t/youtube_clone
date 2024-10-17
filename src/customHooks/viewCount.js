const viewCount = (count) => {
    let number
    if (count >= 1000000) {
        number = (count / 1000000).toFixed(2) + 'M';
    }
    if (count >= 1000) {
        number = (count / 1000).toFixed(2) + 'K';
    }
    return number.toString();
}

export default viewCount;