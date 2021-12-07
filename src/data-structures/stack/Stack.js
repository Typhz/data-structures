const Stack = () => {
    const data = []
    let top = -1

    const push = (value) => {
        top++ 
        data[top] = value
    }
    const pop = () => {
        if (top<0) {
            return 'Stack is empty'
        }else{
            const itemToReturn = data[top]
            data.splice(top, 1)
            top--
            return itemToReturn
        }
    }
    const print = () => {
        console.log(data)
    }
    return{
        push, pop, print
    }
}