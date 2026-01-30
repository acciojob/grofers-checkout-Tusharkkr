const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let td = document.querySelectorAll('.price')
let p = document.createElement('p')

const getSum = () => {
//Add your code here
	let sum=0
            for(let t of td){
                sum+=+t.innerText
            }
			p.style.display='inline'
            p.innerText=`Total Price : ${sum}`
            document.body.appendChild(p)
  
};

getSumBtn.addEventListener("click", getSum);

