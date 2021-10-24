const reducer = (state,action) => {
    if(action.type === 'REMOVE'){
        let newcart = state.cart.filter((item)=> item.id !== action.payload)
        return {...state, cart:newcart}
    }

    else if(action.type === 'ADD'){
        let alreadyExistsInCart = state.cart.some(item => item.id===action.payload.id);
        if(!alreadyExistsInCart){
            state.cart.push({...action.payload});
            console.log(state);
            return {...state} 
        }
        return {...state}
    }

    else if(action.type === 'TOGGLE_AMOUNT')
    {
        let newcart = state.cart.map((item)=>{
            if(item.id === action.payload.id)
            {
                if(action.payload.type === 'increase')
                {
                    return {...item,amount:item.amount + 1}
                }
                else if(action.payload.type === 'decrease')
                {
                    return {...item,amount:item.amount - 1}
                }
            }
            return item;
        }).filter((item)=> item.amount > 0);
        return {...state,cart:newcart}
    }

    else if(action.type === 'GET_TOTALS')
    {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
              const { price, amount } = cartItem
              const itemTotal = price * amount
      
              cartTotal.total += itemTotal
              cartTotal.amount += amount
              return cartTotal
            },
            {
              total: 0,
              amount: 0,
            }
          )
          total = parseFloat(total.toFixed(2))

        return {...state,total,amount}
    }
    
    else 
    {
        return state
    }
    
}

export default reducer;