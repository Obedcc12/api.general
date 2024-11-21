const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(router);

dbconnect();


//create
router.post("/", async (req, res) => {
        const body = req.body;
        const respuesta = await ModelUser.create(body);
        res.send(respuesta)  
})

// login de usuario
router.post("/login", async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.findOne({nomuser: body.nomuser, password: body.password})
    if(respuesta) res.send("Registro exitoso")
    else res.send("Usuario o contraseña incorrecto")

})
//consultar
router.get("/", async (req, res)=> {
    const respuesta = await ModelUser.find({})
    res.send(respuesta); 
})

//consultar Id
router.get("/:id", async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta);
})

//actualizar
router.put("/:id", async (req ,res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta);
})

//eliminar
router.delete("/:id", async (req ,res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta);
})


const PORT = 3005;
app.listen(PORT, () => {
    console.log(`El servidor está en el puerto ${PORT}`);
});
