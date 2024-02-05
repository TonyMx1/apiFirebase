var ruta=require("express").Router();
var subirArchivo=require("../middlewares/subirArchivos");
const { borrarProducto, nuevoProducto, mostrarProductos } = require("../bd/productosBD");

ruta.get("/api/mostrarProductos",async(req,res)=>{
    var usuarios = await mostrarProductos();
    if(usuarios.length>0)
        res.status(200).json(usuarios);
    else
        res.status(400).json("No hay productos");
    
});

ruta.post("/api/nuevoProducto",subirArchivo(),async(req,res)=>{
    //console.log(req.body);
    req.body.foto=req.file.originalname;
    var error=await nuevoProducto(req.body);
    if(error==0){
        res.status(200).json("usuario registrado");
    }
    else{
        res.status(400).json("datos incorrectos");
    }
});

ruta.post("/api/editarproducto", async(req,res)=>{
    var error=await modificarProducto(req.body);
    if(error==0){
        res.status(200).json("Producto actualizado");
    }
    else{
        res.status(400).json("Error al actualizar el producto");
    }
});

ruta.get("/api/borrarproducto/:id", async(req,res)=>{
    var error=await borrarProducto(req.params.id);
    if(error==0){
        res.status(200).json("Producto borrado");
    }
    else{
        res.status(400).json("Error al borrar el producto")
    }
});

module.exports=ruta;