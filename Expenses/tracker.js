document.addEventListener('DOMContentLoaded',function(){
    let ExpenseArray=[];
   let inputText= document.getElementById('text');
   let inputNumber= document.getElementById('number');
   let ExpenseBtn= document.getElementById('ExpenseBtn');
    let ExpensePrice=  document.getElementById('ExpensePrice');
   let ExpenseDiv=  document.querySelector('.ExpenseDiv');

        // display the items 
        ExpenseBtn.addEventListener('click',function(){
            // if the input is empty
            let inputvalue=inputText.value.trim()
            let numberValue=inputNumber.value.trim()
            if (inputvalue==='' || numberValue==='') return;

            let newDiv={
                text:inputvalue,
                number:parseFloat(numberValue)
            }
            ExpenseArray.push(newDiv);
            renderTask(newDiv)
            inputText.value='';
            inputNumber.value=''
            console.log(newDiv);
            
        })

        function renderTask(expense){
              let newExpense=document.createElement('p');
              newExpense.classList.add('ExpenseDiv');
              newExpense.innerHTML=`<span>${expense.text} - $${expense.number.toFixed(2)}</span>
              <button class='delete'>Delete Expense</button>`;
              ExpenseDiv.appendChild(newExpense);

              TotalPrice(expense.number)
              newExpense.querySelector('.delete').addEventListener('click',function(){
                Delete(expense,newExpense)
              })
        }

       function TotalPrice(price){
      let currentTotal=  parseFloat(ExpensePrice.textContent.replace('$',''));
      currentTotal=currentTotal+price;
      ExpensePrice.innerHTML=`<span>$${currentTotal.toFixed(2)}</span>`

       }

       function Delete(product,item){
         let index=   ExpenseArray.indexOf(product);
         if (index>-1) {
            ExpenseArray.splice(index,1)
         }
         ExpenseDiv.removeChild(item);
         TotalPrice(-product.number)

       }


})