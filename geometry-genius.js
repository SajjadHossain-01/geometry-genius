function getTriangleArea() {
    const getBase = inputValue('get-triangle-base');
    const getHeight = inputValue('get-triangle-height')
    const triangleArea = 0.5 * getBase * getHeight;
    const area = showArea('show-area');
    area.innerText = triangleArea;
}
function getRectangleArea() {
    const getWide = inputValue('get-rectangele-wide');
    const getLength = inputValue('get-rectangele-lenght')
    const rectangleArea = getWide * getLength;
    const area = showArea('show-rectangle-area');
    area.innerText = rectangleArea;
}
function getParallelogramArea() {
    const getBase = inputValue('get-parallelogram-base');
    const getHeight = inputValue('get-parallelogram-height')
    const triangleArea = getBase * getHeight;
    console.log(triangleArea);
    const area = showArea('show-parallelogram-area');
    area.innerText = triangleArea;
}
function getRhombosArea() {
    const getBase = inputValue('get-rhombus-d1');
    const getHeight = inputValue('get-rhombus-d2')
    const triangleArea = 0.5 * getBase * getHeight;
    console.log(triangleArea);
    const area = showArea('show-rhombus-area');
    area.innerText = triangleArea;
}
function getPentagonArea() {
    const getBase = inputValue('get-pentgon-poridi');
    const getHeight = inputValue('get-pentagon-base')
    const triangleArea = 0.5 * getBase * getHeight;
    console.log(triangleArea);
    const area = showArea('show-pentagon-area');
    area.innerText = triangleArea;
}
function getEllipseArea() {
    const getBase = inputValue('get-short-redius');
    const getHeight = inputValue('get-long-redius')
    const triangleArea = 3.1416 * getBase * getHeight;
    console.log(triangleArea);
    const area = showArea('show-ellipse-area');
    area.innerText = triangleArea;
}