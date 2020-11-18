export const ProductSchema = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            minimum: 3,
            maximum: 25
        }
    },
    brand: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            minimum: 3,
            maximum: 25
        }
    },
    desc: {
        length: {
            maximum: 50
        }
    },
};