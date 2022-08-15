import Swal from "sweetalert2";

const { createStore } = require("vuex");

const store= createStore({
    state:{
        statusMenu: '',
        products:[
            {
                id:'1',
                name:'sofa lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                category:'table',
                price:'102.23',
                image:'mobl.png'
            },
            {
                id:'2',
                name:'sofa Lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'Chair',
                price:'540.00',
                image:'mobll.png'
            },
            {
                id:'3',
                name:'lamp Lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'Lamp',
                price:'365.14',
                image:'light2.png'
            },
            {
                id:'4',
                name:'flower Lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'Flower',
                price:'168.00',
                image:'goldan.png'
            },
        ],
        product:[
            {
                id:1,
                name:'sofa lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'table',
                price:'102.23',
                image:'mobl.png'
            },
            {
                id:2,
                name:'sofa Lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'Chair',
                price:'540.00',
                image:'mobll.png'
            },
            {
                id:3,
                name:'lamp Lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'Lamp',
                price:'365.14',
                image:'light2.png'
            },
            {
                id:4,
                name:'flower Lorm',
                by:'mohito',
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.',
                category:'Flower',
                price:'168.00',
                image:'goldan.png'
            },
        ],
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        statusCart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0

    },
    getters:{
        allProduct(state){
            state.product = state.products
            return state.product
        },
        totalAmount(state){
            return state.cart.reduce((total , p) => {
                return total + p.price * p.quantity;
            }, 0)
        }
    },
    mutations:{
        changeStatusMenu(state){
            state.statusMenu = state.statusMenu === 'active' ? '' : 'active';
        },
        tabMenu(state,target){
            if(target.toLowerCase() == 'all'){
                state.product = state.products
            }else{
                state.product = state.products.filter(p => p.category.toLowerCase() === target.toLowerCase())
            }
        },
        search(state,target){
            let pp = []
            state.products.forEach(p =>{
                let name = p.name.toLowerCase()
                if(!name.search(target.toLowerCase())){
                    pp.push(p)
                }
            })
            state.product = pp
        },
        getProduct(state , id){
            state.product = state.products.filter(p => p.id === id)
        },
        addToCart(state , product){
            const item = state.cart.find(p => p.id === product.id)
            if(!item){
                state.cart.push({
                    ...product,
                    quantity : 1
                })
            }else{
                item.quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            Swal.fire({
                icon: 'success',
                title: product.name+' add to cart',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: '3000',
                toast: true,
                position : 'top'
            })
        },
        plusCart(state , id){
            const item = state.cart.find(p => p.id === id)
            if(item){
                item.quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        minusCart(state , id){
            const item = state.cart.find(p => p.id === id)
            if(item){
                if(item.quantity > 1){
                    item.quantity--
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeCart(state , id){
            state.cart = state.cart.filter(p => p.id !== id)
            localStorage.setItem('cart', JSON.stringify(state.cart));
            
            Swal.fire({
                icon: 'warning',
                title: 'Product removed',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: '3000',
                toast: true,
                position : 'top'
            })
        },
        clearCart(state , id){
            state.cart = []
            localStorage.removeItem('cart')
            
        },
        changeStatusCart(state){
            state.statusCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
        }
    },
    actions:{
        addToCart({commit} , product){
            commit('addToCart' , product)
        },
        plusCart({commit} , id){
            commit('plusCart' , id)
        },
        minusCart({commit} , id){
            commit('minusCart' , id)
        },
        removeCart({commit} , id){
            commit('removeCart' , id)
            commit('changeStatusCart')
        },
        clearCart({commit}){
            commit('clearCart')
            commit('changeStatusCart')
        },
    }
})

export default store