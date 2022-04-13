const markov = require('./markov')



test('testing creatText function', function(){
    let text = 'you can play basketball now'
    let mm = new markov.MarkovMachine(text)
    let word = mm.makeText(5)
    expect(text).toContain(word)
})


test('testing creatText function', function(){
    let m2 = new markov.MarkovMachine('it is nice to meet you!')
    let text = m2.makeText(5)
    expect(text).toBeTruthy()
    expect(text).not.toBeFalsy()
})


test('testing chains Map Ojb', function(){
    let m3 = new markov.MarkovMachine('nice to meet you')
    let chain = m3.chains
    expect(chain).toEqual(new Map([['nice', ['to']], ['to', ['meet']], ['meet', ['you']], ['you',[null]]]))
})


test('testing choice function', function(){
    let rnd = markov.MarkovMachine.chioce([1])
    expect(rnd).toEqual(1)
})