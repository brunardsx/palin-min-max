function isPalindrome(Frase) {


    const texto = Frase.replace(/\s/g, '').toLowerCase()
    const tamanho = texto.length
  
    for (let i = 0; i < tamanho; i++) {
        if (texto[i] !== texto[tamanho - 1 - i]) {
            return false 
        }
    }
  
    return true 
}


    function arrayMaxMin(arr) {

        let min = arr[0];
        let max = arr[0];
    
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]; 
            }
            if (arr[i] > max) {
                max = arr[i]; 
            }
        }
    
        return [min, max];
    }
    

    

