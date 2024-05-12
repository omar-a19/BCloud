/*payment form*/
            
document.getElementById('payment-method').addEventListener('change', function() {
    var paymentMethod = this.value;
    var creditCardForm = document.getElementById('credit-card-form');
    var ewalletForm = document.getElementById('E-wallet-form');
    var paypalForm = document.getElementById('paypal-form');      
    creditCardForm.style.display = (paymentMethod === 'credit_card') ? 'block' : 'none';
    ewalletForm.style.display = (paymentMethod === 'E-Wallet') ? 'block' : 'none';
    paypalForm.style.display = (paymentMethod === 'paypal') ? 'block' : 'none';
    });
    


    /* phone number */

