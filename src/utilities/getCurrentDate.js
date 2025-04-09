

export function getCurrentDate() {
    const today =new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    
    return today.toLocaleDateString('en-US', options);  // Format the date
  }
  
  console.log(getCurrentDate());
  