function getbase() {
    const getBase = inputValue('get-base');
    const getHeight = inputValue('get-height')
    const triangleArea = 0.5 * getBase * getHeight;
    console.log(triangleArea);
    const area = showArea('show-area');
    area.innerText = triangleArea;
}