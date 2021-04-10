
const initialState={
    cart:{},
    consoleType:{},
    count:0,
    userId:{},
    default_Add:{},
    user:{}
}


export default function RootReducer(state=initialState , action) {
    
    switch (action.type) {
        case 'Add_Cart' :
        state.cart[action.payload[0]] = action.payload[1]
        state.count=state.count + 1
        
        console.log("CART Is Hear:- ",state.cart)
        return {
            cart:state.cart, 
            count: state.count,
            consoleType: state.consoleType,
            userId:state.userId,
            default_Add:state.default_Add,
            user :state.user
        }
   
        case 'Add_ConsoleId' :
        console.log('-------------------------------',action.payload)
        //  state = {
        //      ...state,
        //      consoleType:action.payload.id  
        //  }
        state.consoleType[action.payload[0]] = action.payload[1]
         return {
            cart:state.cart, 
            count: state.count,
            consoleType: state.consoleType,
            userId:state.userId,
            default_Add:state.default_Add,
            user :state.user
        }

                                                                         ////   No need to use breake; after return //                   
        case 'Remove_item':
            delete state.cart[action.payload[0]]
            state.count=state.count - 1
            return {
                cart:state.cart, 
                count: state.count,
                consoleType: state.consoleType,
                userId:state.userId,
                default_Add:state.default_Add,
                user :state.user
            }  
                
                case 'userid_reg_to_add':   
                console.log('--------userid_reg_to_add---------',action.payload)
                state.userId[action.payload[0]] = action.payload[1]
                return {
                    cart:state.cart, 
                    count: state.count,
                    consoleType: state.consoleType,
                    userId:state.userId,
                    default_Add:state.default_Add,
                    user :state.user
                }

                case 'default_Add':
                console.log('---------default_Add---------',action.payload);
                state.default_Add[action.payload[0]] = action.payload[1]
                return {
                    cart:state.cart, 
                    count: state.count,
                    consoleType: state.consoleType,
                    userId:state.userId,
                    default_Add:state.default_Add,
                    user :state.user
                }

                case 'USER_DETAIL':
                console.log('chkout dispatch userdetaillllllllllllllllllllllllllllUser',action.payload);
                state.user[action.payload[0]] = action.payload[1]
                return{
                    cart:state.cart, 
                    count: state.count,
                    consoleType: state.consoleType,
                    userId:state.userId,
                    default_Add:state.default_Add,
                    user :state.user
                }
                
        

       default:
           return state
    } 
}
