interface Person {
  age: number
}

interface Musician extends Person {
  instrument: string
}

var drummer: Musician = {
  age: 27,
  instrument: "Drums"
}

var drummer2 = <Musician>{
  age: 28,
  instrument: "Drums"
}