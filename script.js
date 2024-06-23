const mydata = document.getElementById('button')
mydata.addEventListener('click', (e) => {
     e.preventDefault();
     const userinput = document.getElementById('kuralNumber').value;
     if (userinput < 1 || userinput > 1330) {
      alert ("Please enter a number between 1 and 1330.")
      return;
  }
     if(userinput) {
         fetchkural(userinput);
     }else{
         alert('please enter a kural number');
     }
});

function fetchkural (userinput) {
      fetch("https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json")
      .then((response) => response.json())
      .then((data) => {
          const kural = data.kural[userinput - 1];
          const newrow = document.getElementById('kural');
          newrow.style.padding = '80px'
          const blockquote = document.createElement('blockquote');
          blockquote.classList.add('blockquote');
          const para = document.createElement('p');
          para.classList.add('mb-0');
          para.innerText = `kural :  ${kural.Number}`
          para.style.color = 'White';
          const para1 = document.createElement('p');
          para1.classList.add('mb-0');
          para1.innerText = `Line1 :  ${kural.Line1}`;
          para1.style.color = 'white';
          const para2 = document.createElement('p');
          para2.classList.add('mb-0');
          para2.innerText = `Line2 :  ${kural.Line2}`;
          const para3 = document.createElement('p');
          para2.style.color = 'white';
          para3.classList.add('mb-0');
          para3.innerText = `Transulation :  ${kural.Translation}`;
          const para4 = document.createElement('p');
          para3.style.color = 'white';
          para4.classList.add('mb-0');
          para4.innerText = `Explanation :  ${kural.explanation}`;
          para4.style.color = 'white';
          blockquote.appendChild(para);
          blockquote.appendChild(para1);
          blockquote.appendChild(para2);
          blockquote.appendChild(para3);
          blockquote.appendChild(para4);
          newrow.appendChild(blockquote);
      }).catch((error) => {
        console.log(error);
    })
    .finally(() => {
        userinput.reset();
        fetchkural();
    })
}
window.onload = fetchkural;