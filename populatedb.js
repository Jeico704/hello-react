const mongoose = require('mongoose');

const Note = require('./models/Note');

const db = 'mongodb+srv://hellodb:hellodb@cluster0.v3anh.mongodb.net/hellodb?retryWrites=true&w=majority'

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    Note.insertMany(Note, (err, notes) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${users.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
.catch(err => console.error(`Connection error ${err}`));
