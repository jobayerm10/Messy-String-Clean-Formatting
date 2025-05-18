const messyInput = "   hEllo!! thERe...  WHAt's    up???   ";

const result = cleanAndFormatString(messyInput);

function cleanAndFormatString(input){

   let cleaned = input.replace(/[^a-zA-Z0-9 .,!?]/g, '');
      cleaned = cleaned.toLowerCase();
      cleaned = cleaned.replace(/\s+/g, ' ');

    cleaned = cleaned.trim();

    let formatted = cleaned.replace(/\b\w/g, char => char.toUpperCase());

    return formatted;
}

console.log("Original Input:", `"${messyInput}"`);
console.log("Cleaned & Formatted Output:", `"${result}"`);

// document.getElementById("demo").innerHTML = result;