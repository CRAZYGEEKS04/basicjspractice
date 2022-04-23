const change = () => {
    const tempType = document.getElementById('temp');
    const valueType = temp.options[tempType.selectedIndex].value;
    const tempValue = document.getElementById('inp').value;

    let ans;
    if (valueType == 'far') {
        ans = (tempValue - 32) * (5 / 9);
        document.getElementById('ans').innerHTML = `${ans} Celsius`;

    }
    if (valueType == 'cel') {
        ans = (tempValue * 9 / 5) + 32;
        document.getElementById('ans').innerHTML = `${ans} Fahrenheit`;

    }



}