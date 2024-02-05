var ruta=require("express").Router();
var {autorizado, admin}=require("../middlewares/funcionesPassword");
const { mostrarProductos, nuevoProducto, productoBuscarPorID, modificarProducto, borrarProducto } = require("../bd/productosBD");

ruta.get("/productos",async(req,res)=>{
    //console.log("Estas en productos");
    var productos = await mostrarProductos();
    //console.log(productos);
    res.render("productos/mostrarProductos",{productos});
});

ruta.get("/nuevoProducto",async(req,res)=>{
    res.render("productos/nuevo");
});

ruta.post("/nuevoProducto",async(req,res)=>{
    var error=await nuevoProducto(req.body);
    res.redirect("/productos");
});

ruta.get("/editarproducto/:id",async(req, res)=>{
    var product=await productoBuscarPorID(req.params.id);
    res.render("productos/modificar",{product});
});

ruta.post("/editarproducto", async(req,res)=>{
    await modificarProducto(req.body);
    res.redirect("/productos");
});

ruta.get("/borrarproducto/:id", async(req,res)=>{
    await borrarProducto(req.params.id);
    res.redirect("/productos");
});

module.exports=ruta;