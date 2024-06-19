const {Data: Stones} = require('../models/Stones')

// TODO replace with real data service according to exam description

async function getAll() {
    return Stones.find().lean();
}

async function getById(id) {
    return Stones.findById(id).lean()
}

async function create(data, authorId) {
    // TODO extract properties from view model
    const record = new Stones({
        prop: data.prop,
        author: authorId
    })

    await record.save()

    return record
}


async function update(id, data, userId) {
    const record = await Stones.findById(id)

    if (!record){
        throw new ReferenceError('Record not found ' + id)
    }
    if (record.author.toString() !== userId){
        throw new Error('Access denied')
    }

    //    TODO replace with real props

    record.prop = data.prop
    await record.save()

    return record
}

async function deleteById(id,userId){
    const record = await Stones.findById(id)

    if (!record){
        throw new ReferenceError('Record not found ' + id)
    }
    if (record.author.toString() !== userId){
        throw new Error('Access denied')
    }

    await Stones.findByIdAndDelete(id)

}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}