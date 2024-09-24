document.getElementById('donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const donateNoakhali = getInputValueById('input-noakhali');
    console.log(donateNoakhali);
    if(donateNoakhali === '' || parseInt(donateNoakhali) > 0){
        
        const myBalance = getDivValueById('account-balance');
        // console.log(myBalance)
        const myBalanceTaka = parseFloat(myBalance);
        const donateNoakhaliTaka = parseFloat(donateNoakhali);
        const updatedMyBalance = myBalanceTaka - donateNoakhaliTaka;
        // console.log(updatedMyBalance);
        document.getElementById('account-balance').innerText = updatedMyBalance;
        const noakhaliDonation = document.getElementById('noakhali-donation').innerText;
        const noakhaliDonationTaka = parseFloat(noakhaliDonation);
        const updatedNoakhaliDonationTaka = noakhaliDonationTaka + donateNoakhaliTaka;
        document.getElementById('noakhali-donation').innerText = updatedNoakhaliDonationTaka;
        
    }
    else {
        alert('Please enter a valid amount')
    }

});


// feni starts 

document.getElementById('donate-feni').addEventListener('click', function(event){
    event.preventDefault();
    const donateFeni = getInputValueById('input-feni');
    // console.log(donateFeni)
    if(donateFeni === '' || parseInt(donateFeni) > 0){
        
        const myBalance = getDivValueById('account-balance');
        // console.log(myBalance)
        const myBalanceTaka = parseFloat(myBalance);
        const donateFeniTaka = parseFloat(donateFeni);
        const updatedMyBalance = myBalanceTaka - donateFeniTaka;
        // console.log(updatedMyBalance);
        document.getElementById('account-balance').innerText = updatedMyBalance;
        const feniDonation = document.getElementById('feni-donation').innerText;
        const feniDonationTaka = parseFloat(feniDonation);
        const updatedfeniDonationTaka = feniDonationTaka + donateFeniTaka;
        document.getElementById('feni-donation').innerText = updatedfeniDonationTaka;

    }
    else {
        alert('Please enter a valid amount')
    }

});



// Quota Part starts 


document.getElementById('donate-quota').addEventListener('click', function(event){
    event.preventDefault();
    const donateQuota = getInputValueById('input-quota');
    // console.log(donateNoakhali)
    if(donateQuota === '' || parseInt(donateQuota) > 0){
        
        // showDonationConfirmation();
         const myBalance = getDivValueById('account-balance');
        // console.log(myBalance)
        const myBalanceTaka = parseFloat(myBalance);
        const donateQuotaTaka = parseFloat(donateQuota);
        const updatedMyBalance = myBalanceTaka -  donateQuotaTaka;
        // console.log(updatedMyBalance);
        document.getElementById('account-balance').innerText = updatedMyBalance;
        const quotaDonation = document.getElementById('quota-donation').innerText;
        const quotaDonationTaka = parseFloat(quotaDonation);
        const updatedQuotaDonationTaka = quotaDonationTaka + donateQuotaTaka;
        document.getElementById('quota-donation').innerText = updatedQuotaDonationTaka;

    }
    else {
        alert('Please enter a valid amount')
    }

});
