
// Search Box Functionality

let searchInput = document.getElementById('searchInput')
let searchButton = document.getElementById('searchButton')
let resetButton = document.getElementById('resetButton')
searchButton.addEventListener('click', function() {
    var searchText = searchInput.value.toLowerCase();
    var rows = document.querySelectorAll('.tableRows');
    
    rows.forEach(function(row) {
        var cells = row.querySelectorAll('.tableData');
        var found = false;
        
        cells.forEach(function(cell) {
            if (cell.textContent.toLowerCase().includes(searchText)) {
                found = true;
            }
        });
        
        if (found) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
        searchInput.addEventListener('input',function () {
          if(searchInput.value === '') {
            row.style.display = ''
          }
        })
    });
});


// Modal Functionality

var modal = document.getElementById("modalContainer");

// Edit Products Functionality

// let tableBody = document.querySelector('#tableBody')
let editProducts = tableBody.querySelectorAll('.editProduct')
let closeButton = document.getElementById('mcloseButton')
closeButton.addEventListener('click',function () {
  modal.style.display = 'none'
})
editProducts.forEach((button)=> {
  button.addEventListener('click',function() {
  // console.log(button)
  modal.style.display = 'block'
  let tableRow = button.parentElement.parentElement;
  let child = tableRow.children
  let inputValuesObj = {
    PID:child[1].textContent,
    Pname:child[2].textContent,
    Ptitle:child[3].textContent,
    Pdes:child[4].textContent,
    Pbuying:child[7].textContent,
    Psale:child[8].textContent,
    Pshipping:child[9].textContent,
    Plocation:child[10].textContent,
  }
  // Modal Inputs
  let productID = document.getElementById('productID')
  let productName = document.getElementById('productName')
  let productTitle = document.getElementById('productTitle')
  let productDesc = document.getElementById('productDesc')
  let buyingPrice = document.getElementById('buyingPrice')
  let salePrice = document.getElementById('salePrice')
  let shippingRates = document.getElementById('shippingRates')
  let plocation = document.getElementById('plocation')

  productID.value = inputValuesObj.PID
  productName.value = inputValuesObj.Pname
  productTitle.value = inputValuesObj.Ptitle
  productDesc.value = inputValuesObj.Pdes
  buyingPrice.value = inputValuesObj.Pbuying
  salePrice.value = inputValuesObj.Psale
  shippingRates.value = inputValuesObj.Pshipping
  plocation.value = inputValuesObj.Plocation

})
})


// New Column

let tableHead = document.querySelector('#tableHead')
let addColumnBtn = document.querySelector('#addColumnButton')
let addColumnInput = document.getElementById('addColumn')


addColumnBtn.addEventListener('click',function () {
  let th = document.createElement('th')
  th.innerHTML = addColumnInput.value

  tableHead.appendChild(th)
  console.log('done')
})




