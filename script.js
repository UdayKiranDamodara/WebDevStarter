const el = document.getElementById('entry')
const b1 = document.getElementById('b1')
b1.addEventListener('click', () => {
  console.log('button: ', state.input1)
})
const state = {
  input1: '',
}
const i1 = document.getElementById('i1')
i1.addEventListener('input', (event) => {
  //   console.log(event.target.value)
  state.input1 = event.target.value
})

const generateCard = (item) => {
  let output = `<div class="card">
  
  <h1>${item.name}</h1>
  <p>${item.email}</p>
</div>`
  return output
}

const getData = async () => {
  //   console.log('inside function')
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   console.log(res)
  const data = await res.json()
  //   console.log(data)
  var innerHTML = ''
  //   const state = {
  //     data: [
  //         {
  //             id:
  //             name: ,
  //             category: ,
  //             currentSelected: 1
  //         }
  //     ]
  //   }
  data.forEach((item) => {
    // console.log(item)
    innerHTML = innerHTML + generateCard(item)
    //     state.data.push({
    //         name: ,
    //         cu
    //     })
  })
  el.innerHTML = innerHTML
  return data
}

const dataOut = getData()
// el.innerHTML = generateCard({ name: 'Uday', email: 'udaykiran' })
// console.log(dataOut.title)
