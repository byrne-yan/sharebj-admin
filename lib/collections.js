Schemas = {};

Journals = new Meteor.Collection('journals');
Babies = new Meteor.Collection('babies');

/*
Schemas.Journals = new SimpleSchema({
    title: {
        type: String,
        max: 60
    },
    content: {
        type: String,
        autoform: {
            rows: 5
        }
    },
    createdAt: {
        type: Date,
        label: 'Date',
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    owner: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoValue: function () {
            if (this.isInsert) {
                return Meteor.userId();
            }
        },
        autoform: {
            options: function () {
                _.map(Meteor.users.find().fetch(), function (user) {
                    return {
                        label: user.emails[0].address,
                        value: user._id
                    };
                });
            }
        }
    }
});

Journals.attachSchema(Schemas.Journals)*/
