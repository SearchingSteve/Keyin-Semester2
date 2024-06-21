window.addEventListener("DOMContentLoaded", function () {
    let orderList = [];
    let  orderCount = 0;

    function toggleVisibility(id) {
        var input = document.getElementById(id);
        if (input.style.display === 'none' || input.style.display === '') {
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
        }
    }
    
    window.toggleVisibility = toggleVisibility; // Make it accessible globally for inline onclick handlers

    document.getElementById('submitOrder').addEventListener('click', function() {
        
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            if (input.style.display !== 'none' && input.value > 0) {
                orderList.push(`${input.value} x ${input.previousElementSibling.textContent}`);
            }
        });
        orderCount ++;
        displayOrder(orderList);
    });

    function displayOrder(list) {
        let orderSummary = list.join("\n");
        alert(`Order Summary ${orderCount}:\n\n${orderSummary}`);


        newOrderList =[]; // Create new empty order list
        //* Persistent Order list (Input to database/file storage for persistent use)... Future project *// 
        orderList = newOrderList; // Clear the order list after displaying the order
    }
    
});
