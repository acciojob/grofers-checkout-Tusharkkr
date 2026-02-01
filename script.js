const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
        let td = document.querySelectorAll('.prices')
        let table = document.querySelector('table')
        let tablerow = document.createElement('tr')
        let tabledata1 = document.createElement('td')
        let tabledata2 = document.createElement('td')

const getSum = () => {
//Add your code here
	let sum=0
            for(let t of td){
                sum+=+t.innerText
            }
			tabledata1.innerText=`${sum}`
	        tabledata2.innerText=`Table`
            tablerow.append(tabledata2,tabledata1)
            table.append(tablerow)
  
};

getSumBtn.addEventListener("click", getSum);

