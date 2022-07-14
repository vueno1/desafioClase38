module.exports = class Container {

    constructor(nameCollection) {
        this.collection = nameCollection 
    }

    async mostrarProducts() {
        try {
            const collection = await this.collection.find()
            return collection

        } catch (error) {
            console.error(error);
        }
    }

    async guardarProduct(object) {
        try{ 
            await this.collection.create(object)
            return await this.collection.find()
        }
        catch(error) {
            console.log(error)
        }
    }  
}
