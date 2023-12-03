console.log(location.search)  
var id=location.search.substring(4)
console.log(id) 
const { createApp } = Vue 
createApp({

    data() { 

        return {


            id:0,
            apellido:"",
            nombre:"", 
            dni:"", 
            fecha:"", 
            sexo:"", 
            telefono:"",
            email:"", 
            prepaga:"", 
            url:'https://unilabsrl.pythonanywhere.com/pacientes /'+id, 
           }
    }, 
    methods: { 
        fetchData(url) { 
            fetch(url) 
            .then(response => response.json()) 
            .then(data => {
                console.log(data) 
                this.id=data.id 
                this.apellido=data.apellido 
                this.nombre= data.nombre ;
                this.dni= data.dni 
                this.fecha=data.fecha 
                this.sexo=data.sexo 
                this.telefono=data.telefono 
                this.email= data.email 
                this.prepaga= data.prepaga 
            })


            .catch(err => {
                console.error(err); 
                this.error=true 
            }) 
        }, 
        modificar() { 
            let paciente = { 
                apellido:this.apellido,    
                nombre:this.nombre, 
                dni: this.dni, 
                fecha: this.fecha, 
                sexo:this.sexo,
                telefono:this.telefono, 
                email: this.email, 
                prepaga: this.prepaga, 
            } 
            var options = { 
                body: JSON.stringify(paciente), 
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' }, redirect: 'follow' 
            } 
            fetch(this.url, options) 
            .then(function () { 
                alert("Registro modificado") 
                window.location.href = "./pacientes.html"; 
            }) 
            .catch(err => { 
                console.error(err); 
                alert("Error al Modificar") 
            }) 
        } 
    }, 
    created() { 
        this.fetchData(this.url) 
    }, 
}).mount('#app')





