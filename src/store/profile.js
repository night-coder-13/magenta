import Swal from "sweetalert2";


const profile= {
    namespaced:true,
    state:{        
        profile: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : {
                id:'1',
                name:'mehdi',
                family:'abasian',
                address:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                number:'09902774517',
                email:'mahdisosho@gamil.com',
                image:'mobl.png'
        },
        login:true

    },
    getters:{
        Profile(state){
            return state.profile
        }
    },
    mutations:{
        
        editProfile(state , profile){
            state.profile = profile
            localStorage.setItem('profile', JSON.stringify(state.profile));
            
        },
        logout(state){
            state.login = false            
        },
        login(state){
            state.login = true      
            Swal.fire({
                icon: 'success',
                title: 'Hi '+state.profile.name+' :)',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: '3000',
                toast: true,
                position : 'top'
            })      
        },
        // plusCart(state , id){
        //     const item = state.cart.find(p => p.id === id)
        //     if(item){
        //         item.quantity++
        //     }
        //     localStorage.setItem('cart', JSON.stringify(state.cart));
        // },
        // minusCart(state , id){
        //     const item = state.cart.find(p => p.id === id)
        //     if(item){
        //         if(item.quantity > 1){
        //             item.quantity--
        //         }
        //     }
        //     localStorage.setItem('cart', JSON.stringify(state.cart));
        // },
        // removeCart(state , id){
        //     state.cart = state.cart.filter(p => p.id !== id)
        //     localStorage.setItem('cart', JSON.stringify(state.cart));
            
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'Product removed',
        //         timerProgressBar: true,
        //         showConfirmButton: false,
        //         timer: '3000',
        //         toast: true,
        //         position : 'top'
        //     })
        // },
        // clearCart(state , id){
        //     state.cart = []
        //     localStorage.removeItem('cart')
            
        // },
        // changeStatusCart(state){
        //     state.statusCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
        // }
    },
    actions:{
        editProfile({commit} , profile){
            commit('editProfile' , profile)
        },
        logout({commit}){
            commit('logout')
        },
        login({commit}){
            commit('login')
        },
        // clearCart({commit}){
        //     commit('clearCart')
        //     commit('changeStatusCart')
        // },
    }
}

export default profile