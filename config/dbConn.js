const mongoose = require('mongoose').default

const connectDB = async () => {
    try {
        // await mongoose.connect(`${process.env.DATABASE_URI}/NodeJsTraining`, {
        //     useUnifiedTopology: true,
        //     useNewUrlParser: true,
        // });


        await mongoose.connect(`${process.env.DATABASE_URI}/techNotesDB`)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB