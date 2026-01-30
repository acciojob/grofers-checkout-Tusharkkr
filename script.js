const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
        let td = document.querySelectorAll('.price')
        let table = document.querySelector('table')
        let tablerow = document.createElement('tr')
        let tabledata = document.createElement('td')

const getSum = () => {
//Add your code here
	let sum=0
            for(let t of td){
                sum+=+t.innerText
            }
			tabledata.innerText=`Total price : ${sum}`
            tablerow.append(tabledata)
            table.append(tablerow)
  
};

getSumBtn.addEventListener("click", getSum);

