$('td input').click(function(e) {
    if (e.currentTarget.id !== 'C' && e.currentTarget.id !== '=') {
        $('.input-display').val($('.input-display').val() + e.currentTarget.id);
    }

    if (e.currentTarget.id === 'C') {
        $('.input-display').val('')
    }
    
    if (e.currentTarget.id === '=') {
        try {

            const input = document.getElementsByClassName('input-display')[0].value
            const arrInput = input.split('')
            arrInput.map((item ,index )=> {
                if (arrInput[index] === 'x') {
                    arrInput[index] = '*'
                }
                
                if (arrInput[index] + arrInput[index+1] === '/0') {
                    alert('cannot divide by zero')
                    $('.input-display').val('')
                }
            })
            
            const result = arrInput.join('')
            
            $('.input-display').val(eval(result))
            $('.upper-display').html(input)
        }
        catch (err) {
            alert('error, please check your input')
        }
        }
})
