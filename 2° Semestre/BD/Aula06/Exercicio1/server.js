const express = require("express"); //Importa um modulo
const cors = require("cors");

const UsuariosRoutes = require("./src/routes/usuarios.routes");
const MusicasRoutes = require("./src/routes/musica.routes");
const PlaylistsRoutes = require("./src/routes/playlist.routes");
const musica_playlistRoutes = require("./src/routes/playlist.musica.routes");

const app = express();

app.use(express.json());//Habilita comunicação via JSON
app.use(cors());//HAbilita requisição local 

//importar rotas configuradas
app.use(UsuariosRoutes); 
app.use(MusicasRoutes); 
app.use(PlaylistsRoutes);
app.use(musica_playlistRoutes);

app.listen(3000, () => {
    console.log("servidor online na porta 3000")
});