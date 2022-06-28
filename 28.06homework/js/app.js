
if(localStorage.getItem('users')=== null){
  localStorage.setItem('users',JSON.stringify([]));
}


function regclick(){ 
  const name =  document.getElementById('name').value
  const femail = document.getElementById('femail').value
  const fpassword = document.getElementById('fpassword').value
  
  if (name && femail && fpassword) {
    let userdata = {
        name: name,
        femail: femail,
        fpassword: fpassword
    }
  }
   else if(name === '' || femail === '' || fpassword === '' ){
    alert('Melumatlar bos ola bilmez')
   }
  //  else if(userdata === localStorage.getItem('users')){
  //   alert("Bele bir email var");
  //  }
   else{
    alert('Kecdiniz')
   }
  }

function logclick(){  
  let femail = document.getElementById('femail');
  let fpassword = document.getElementById('fpassword');
  let name =  document.getElementById('name');

  let femail1 = document.getElementById('femail1');
  let fpassword1 = document.getElementById('fpassword1');
 
 
  if(femail1.value === femail && fpassword1.value === fpassword){
   alert("sasa")
   }
   else{
    let add = JSON.parse(localStorage.getItem('users'));
    add.push({
      name : name,
      femail : femail,
      fpassword : fpassword
   })
   localStorage.setItem('users',JSON.stringify(add));
   alert(`${name} elave olundu`);
   getusers()
   }
 
}

function getusers(){
  let basket = JSON.parse(localStorage.getItem('users'));
  let add = '';

  basket.forEach(x => {
    add += `
    <table>
    <tbody>
        <tr>
            <td> Name: </td>
            <td>${x.name}</td>
            
        </tr>

        <tr>
            <td> Email: </td>
            <td>${x.femail}</td>
            
        </tr>
    </tbody>
  </table>
    `
  })
  document.getElementById('output').innerHTML = add;

}
getusers();
