class Producto{
    constructor(id, data){
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;
        this.cantidad=data.cantidad;
        this.precio=data.precio;
    }
    set id(id){
        if(id!=null)
            id.length>0?this._id=id:this.bandera=1;
    }
    set nombre(nombre){
        nombre.length>0?this._nombre=nombre:this.bandera=1;
    }
    set password(cantidad){
        cantidad.length>0?this._cantidad=cantidad:this.bandera=1;
    }
    set usuario(precio){
        precio.length>0?this._precio=precio:this.bandera=1;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get usuario(){
        return this._cantidad;
    }
    get password(){
        return this._precio;
    }
    get obtenerDatos(){
        if(this._id!=null)
            return {
                id:this.id,
                nombre:this.nombre,
                precio:this.precio,
                cantidad:this.cantidad
            }
        else{
            return {
                nombre:this.nombre,
                precio:this.precio,
                cantidad:this.cantidad
            }
        }
    }
}
module.exports=Producto;