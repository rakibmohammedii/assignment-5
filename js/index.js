document.getElementById('donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const donateNoakhali = getInputValueById('input-noakhali');
    console.log(donateNoakhali);
    if(donateNoakhali === '' || parseInt(donateNoakhali) > 0){
        
        const myBalance = getDivValueById('account-balance');
        // console.log(myBalance)
        const myBalanceTaka = parseFloat(myBalance);
        const donateNoakhaliTaka = parseFloat(donateNoakhali);
        if(donateNoakhaliTaka > myBalanceTaka){
            alert('You do not have enough money to donate');
            return;
        }

        const updatedMyBalance = myBalanceTaka - donateNoakhaliTaka;
        // console.log(updatedMyBalance);
        document.getElementById('account-balance').innerText = updatedMyBalance;
        const noakhaliDonation = document.getElementById('noakhali-donation').innerText;
        const noakhaliDonationTaka = parseFloat(noakhaliDonation);
        const updatedNoakhaliDonationTaka = noakhaliDonationTaka + donateNoakhaliTaka;
        document.getElementById('noakhali-donation').innerText = updatedNoakhaliDonationTaka;
        document.getElementById('my_modal_1').showModal();
        // add to history 
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white m-2 p-3 rounded-lg border-2 border-indigo-500";
        historyItem.innerHTML = `
            <h2 class = "font-bold text-xl">${donateNoakhali}Taka Donated for Flood at Noakhali, BANGLADESH </h2>
            <p class = "date">Date: ${new Date().toLocaleDateString()}</p>
        `;
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
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
        if(donateFeniTaka > myBalanceTaka){
            alert('You do not have enough money to donate');
            return;
        }

        const updatedMyBalance = myBalanceTaka - donateFeniTaka;
        // console.log(updatedMyBalance);
        document.getElementById('account-balance').innerText = updatedMyBalance;
        const feniDonation = document.getElementById('feni-donation').innerText;
        const feniDonationTaka = parseFloat(feniDonation);
        const updatedfeniDonationTaka = feniDonationTaka + donateFeniTaka;
        document.getElementById('feni-donation').innerText = updatedfeniDonationTaka;
        document.getElementById('my_modal_1').showModal();
         // add to history 
         const historyItem = document.createElement('div');
         historyItem.className = "bg-white m-2 p-3 rounded-lg border-2 border-indigo-500";
         historyItem.innerHTML = `
             <h2 class = "font-bold text-xl">${donateFeni}Taka Donated for Flood Relief in Feni, BANGLADESH </h2>
             <p class = "date">Date:${new Date().toLocaleDateString()}</p>
         `;
         const historyContainer = document.getElementById('history-list');
         historyContainer.insertBefore(historyItem, historyContainer.firstChild);

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
        if(donateQuotaTaka > myBalanceTaka){
            alert('You do not have enough money to donate');
            return;
        }
        

        const updatedMyBalance = myBalanceTaka -  donateQuotaTaka;
        // console.log(updatedMyBalance);
        document.getElementById('account-balance').innerText = updatedMyBalance;
    
        const quotaDonation = document.getElementById('quota-donation').innerText;
        const quotaDonationTaka = parseFloat(quotaDonation);
        const updatedQuotaDonationTaka = quotaDonationTaka + donateQuotaTaka;
        document.getElementById('quota-donation').innerText = updatedQuotaDonationTaka;
        document.getElementById('my_modal_1').showModal();



              // add to transaction history
         // add to history 
         const historyItem = document.createElement('div');
         historyItem.className = "bg-white m-2 p-3 rounded-lg border-2 border-indigo-500";
         historyItem.innerHTML = `
             <h2 class = "font-bold text-xl">${donateQuota}Taka is Donated for Aid For injured in the Quota Movement, BANGLADESH </h2>
             <p class = "date"> Date: ${new Date().toLocaleDateString()}</p>
         `;
         const historyContainer = document.getElementById('history-list');
         historyContainer.insertBefore(historyItem, historyContainer.firstChild);
             
    }
    else {
        alert('Please enter a valid amount')
    }

});




// // toggling between buttons
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('btn-color');
    donationTab.classList.remove('btn-color');
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-form').classList.remove('hidden');
});



donationTab.addEventListener('click', function(){
    historyTab.classList.remove('btn-color');
    donationTab.classList.add('btn-color');
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById('donation-form').classList.remove('hidden');
});