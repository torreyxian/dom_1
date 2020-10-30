const div = dom.create("<div>newDiv</div>");
console.log(div);


dom.after(test, div)

const div3 = dom.create("<div id='parent'>div3</div>")
dom.wrap(test, div3)

dom.style(test, {border: 'solid 2px red'})
dom.style(test, 'border', '1px solid black')

const selector = dom.find("#test")[0]
console.log(selector)

const t = dom.find('#travel')[0]
console.log(t)
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(t3))