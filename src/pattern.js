/*
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_6

    <<Reserved words for ES6>>

    break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof new return super switch this throw try typeof var void while with yield

    <<Future reserved words>>
    
    enum implements interface let package private protected public static await
    
    <<Words used for kjs in Korean>>
    
    Naming conventions
    * verb: ~해
    * noun: the noun itself in Korean
    * adjective: ~한 / ~적
    * adverb: varies
    * exceptions: for, instanceof, typeof...
    
    break: 멈춰
    case: 만약
    catch: 잡아
    class: 종류
    const: 일정한
    continue: 멈추지마
    debugger: 벌레잡아
    default: 아무것도아니면
    delete: 지워 
    do: 해 
    else: 아니면 
    export: 내보내
    extends: 연장해
    finally: 마지막으로
    for: 반복
    function: 함수 
    if: 만약 
    import: 불러 
    in: 에서 
    instanceof: 의인스턴스
    new: 새 
    return: 반환해
    super: 생성자참조해
    switch: 갈림길 
    this: 이것 
    throw: 던져
    throws: 던져
    try: 시도해
    typeof: 의종류 
    void: 빈 
    while: 동안에 
    yield: 산출해 
    let: 만들어 
    implements: 구현해 
    interface: 인터페이스
    static: 정적
    await: 기다려
    async: 비동기적
*/

class Helper {
  matchWholeWord = word => /(?:^|\b)(word)(?=\b|$)/
}

const keywords = [
  '멈춰',
  '만약',
  '잡아',
  '종류',
  '일정한',
  '멈추지마',
  '벌레잡아',
  '아무것도아니면',
  '지워',
  '해',
  '아니면',
  '내보내',
  '연장해',
  '마지막으로',
  '반복',
  '함수',
  '만약',
  '불러',
  '에서',
  '의인스턴스',
  '새',
  '반환해',
  '생성자참조해',
  '갈림길',
  '이것',
  '던져',
  '던져',
  '시도해',
  '의종류',
  '빈',
  '동안에',
  '산출해',
  '만들어',
  '구현해',
  '인터페이스',
  '정적',
  '기다려',
  '비동기적',
]

const keywordsRegex = /멈춰|만약|잡아|종류|일정한|멈추지마|벌레잡아|아무것도아니면|지워|해|아니면|내보내|연장해|마지막으로|반복|함수|만약|불러|에서|의인스턴스|새|반환해|생성자참조해|갈림길|이것|던져|던져|시도해|의종류|빈|동안에|산출해|만들어|구현해|인터페이스|정적|기다려|비동기적/

const isKeyword = word => keywords.include(word)

export { isKeyword }
