Router.route('/',function(){
    this.render('login');
});

if(Meteor.isClient)
{
    Accounts.onLogin(function(){
        Router.go('/admin');
    });
}