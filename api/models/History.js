/**
 * History
 *
 * @module      ::  Model
 * @description ::  A short summary of how this model works and what it represents.
 *
 */

module.exports = {
    schema: true,
    attributes: {
        objectName: {
            type:       'string',
            required:   true
        },
        objectId: {
            type:       'integer',
            required:   true
        },
        objectData: {
            type:       'text',
            required:   true
        },
        message: {
            type:       'text'
        }
    },

    createdAtObject: function () {
        return (this.createdAt && this.createdAt != '0000-00-00')
            ? DateService.convertDateObjectToUtc(this.createdAt) : null;
    },
    updatedAtObject: function () {
        return (this.updatedAt && this.updatedAt != '0000-00-00')
            ? DateService.convertDateObjectToUtc(this.updatedAt) : null;
    }
};
